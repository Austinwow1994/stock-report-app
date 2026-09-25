# 台股研究報告 App — 前端／後端擴充執行計畫

> 寫給 Claude Code 執行用。這份計畫是根據你本機 `/Users/yushenglee/台股研究報告生成` 資料夾裡**已經存在**的實際程式碼分析出來的，不是重新設計一個新架構——目標是把這次在 Cowork 完成的產品決策（美股整合、Cross Check 拆兩個 skill、報告新增「主要成長動能」與「技術面觀察」兩段）接進現有系統。
>
> 執行前請先用 `git status` / `git diff` 確認目前工作目錄乾淨，建議每個 Phase 完成後各自 commit 一次，方便隨時回頭檢查或還原。

---

## 0. 現狀基礎（執行前必須先認知到的事實）

這個 App 不是單一系統，是四個各自獨立的部分組成：

1. **`台股研究報告App.html`**（純前端、無框架、原生 JS）——唯一的使用者介面，讀取 `data/reports/*.js`、`data/valuations/*.js`、`data/glossary.js` 這些用 `<script src>` 掛進來的小檔案渲染報告。
2. **`claude-code-research-server`（port 3003）**——**目前實際在用的生成管線**。前端「研究並加入資料庫」「重新研究並更新」按鈕呼叫這支伺服器，伺服器背景執行 `claude -p "<prompt>" --dangerously-skip-permissions`（你本機已登入的 Claude Code CLI，算 Pro/Max 訂閱額度，不額外計費），由 Claude Code 自己讀範例檔案、寫新的 `data/reports/{code}.js` 與 `data/valuations/{code}.js`、並在 `台股研究報告App.html` 裡登記 `<script src>`。
3. **`stock-report-backend`（port 3002）**——平行的**次要／備用路徑**，直接呼叫 Anthropic API（需要自己的 API key，按 token 計費），走的是完全獨立的一套 prompt（`src/claude.js` 裡硬寫了一份 JSON schema），跟 `claude-code-research-server` 目前**沒有共用同一份 schema 定義**，兩邊各自維護。
4. **`twse-proxy-server`（port 3001）**——CORS proxy，目前 App 預設改用免設置的 r.jina.ai 代理，這支伺服器已經是備援角色，非必要。

**關鍵結論**：真正決定「新股票報告長什麼樣子」的地方，不是 `skills/tw-stock-research-report/SKILL.md`（這份檔案是否真的被本機 Claude Code 讀到，取決於你的 Claude Code 有沒有把它安裝成一個真正的 skill，光是這個資料夾裡有這個檔案不代表會被用到），而是 **`claude-code-research-server/server.js` 裡的 `buildPrompt(code)` 函式**——這個函式把完整的欄位結構直接寫死在 prompt 字串裡，即使沒裝任何 skill，Claude Code 也會照這個 prompt 的指示寫資料。所以這次要新增「主要成長動能」「技術面觀察」兩段、支援美股，**`buildPrompt()` 是第一優先要改的檔案**，改 skill 檔案是第二層、錦上添花但非必要的保障。

另外一個要認知的事實：`skills/tw-stock-research-report/SKILL.md` 目前放在本機的版本是**舊的五段式版本**（沒有主要成長動能、技術面觀察、Cross Check 3.5 步驟），跟這次 Cowork 對話裡更新完成的版本不同步。

---

## 1. 這次要做的事（範圍界定）

**要做**：
- 報告資料結構新增兩個欄位：主要成長動能、技術面觀察（K線型態）。
- 新增美股支援：市場判斷路由（TW/US）、幣別顯示（NTD/USD）、美股專屬查證來源。
- 把 Cross Check 查證步驟接進生成流程（單次 `claude -p` 呼叫內部完成，不需要額外的伺服器端狀態機）。
- 本機 skill 檔案更新到跟 Cowork 這次對話完成的版本一致。
- 前端 `renderReport()` 新增這兩段的渲染區塊。

**不做（明確排除，維持既有 MVP 決策）**：
- 不做即時籌碼分析（三大法人買賣超、13F）——沿用 產品構想.md 八、十 的既有排除決策。
- 不做真正的「查證佇列儀表板」「AUTO_RETRY／NEEDS_HUMAN_REVIEW 人工介入後台」這種完整版狀態機（產品構想.md 九的完整設計）——這是為多使用者、高併發系統設計的，你目前是單人背景執行一次 `claude -p` 呼叫的架構，**用單次呼叫內把查證步驟做完、沒過就讓 Claude Code 自己修正重寫再驗一次**即可，不需要真的拆成多個 HTTP 狀態、多個 API endpoint。這是刻意簡化，不是漏做。
- 不強制要求候選人買賣建議合規審查機制——技術面段落的「不給買賣建議」規則寫進 prompt/skill 文字本身即可，不需要額外程式碼做內容過濾。

---

## 2. Phase 1：更新本機 skills

本機 `skills/` 資料夾（`tw-stock-research-report`、`jargon-explainer`、`stock-valuation-model`）目前應該只是參考/備份用途，不確定是否真的被 Claude Code 當作已安裝的 skill 使用。請先確認：

```bash
claude --version
# 確認你本機 Claude Code 認得到的 skill 清單（實際指令依你的 Claude Code 版本而定，
# 可能是 /skills 對話內指令，或設定檔裡的 skill 路徑，執行前自行確認一次）
```

不論本機 skill 機制為何，這次交付了 4 個 `.skill` 封裝檔（在 Cowork 對話裡已經送出過）：`tw-stock-research-report.skill`、`stock-report-cross-check.skill`、`stock-report-verify.skill`，以及還沒封裝但內容已經寫好的 `us-stock-research-report`（純 markdown，Cowork Project 文件 `claude/us-stock-research-report_SKILL.md`，內容需要你自己另外從 Project 取出存成 `us-stock-research-report/SKILL.md`）。

執行項目：
1. 把這 3 個 `.skill` 檔＋1 份 `us-stock-research-report` SKILL.md 安裝成你本機 Claude Code 真正認得到的 skill（依你 Claude Code 版本的安裝方式），並用一次簡單測試（例如對話裡問「幫我看一下2330」）確認真的有觸發。
2. 同步覆寫這個 repo 裡 `skills/tw-stock-research-report/SKILL.md`（**這個是舊的五段版**，換成新版七段內容），讓 repo 裡的參考副本跟實際安裝的版本一致，避免以後兩邊分岔造成混淆。`skills/tw-stock-research-report/references/範例報告_台達電.md` 也要注意：新版 SKILL.md 已經在文末說明這份範本是舊版五段結構，不用重寫範本本身，但如果你想更新可以之後再處理，不是這次的必要項目。
3. `skills/` 底下新增 `stock-report-cross-check/SKILL.md`、`stock-report-verify/SKILL.md`、`us-stock-research-report/SKILL.md` 三個新資料夾，內容分別對應 Cowork Project 裡的三份文件。
4. **已知依賴風險，需要你確認**：新版 `tw-stock-research-report` 與 `us-stock-research-report` 的「技術面觀察」段落都會呼叫 `candlestick-pattern-id` 這個 skill——這份計畫沒有幫你確認你本機是否已經裝了這個 skill。執行前請先確認一次；如果沒有，這段的 prompt 指示需要調整成「沒有這個 skill 時的 fallback 寫法」（誠實寫「技術面型態判讀功能尚未安裝，此段暫缺」，不要讓 Claude Code 自己瞎猜K線型態）。

---

## 3. Phase 2（最優先）：改 `claude-code-research-server/server.js` 的 `buildPrompt()`

這是實際驅動生成內容的地方，改這裡，新股票（跟「重新研究並更新」的舊股票）馬上就會拿到新欄位。目前 `buildPrompt(code)` 函式在 `server.js` 第 125-152 行，重點修改如下：

### 3.1 市場判斷路由

在 `buildPrompt` 開頭加入市場判斷：純數字視為台股，含英文字母視為美股（對應 產品構想.md 十的路由邏輯）。範例邏輯：

```js
function detectMarket(code) {
  return /^[0-9]{4,6}$/.test(code) ? 'TW' : 'US';
}
```

`handleStartResearch` 目前用同一個正則 `/^[0-9A-Za-z]{4,6}$/` 驗證格式，這條可以維持不變（兩個市場的代碼長度都落在這個範圍內），只是 `buildPrompt` 內部要依 `detectMarket(code)` 的結果分岔出不同段落的查證來源與寫作指示。

### 3.2 依市場切換查證來源與注意事項

美股分岔要包含：SEC EDGAR（`efts.sec.gov`全文檢索、`data.sec.gov/api/xbrl/companyfacts`）、公司官方IR頁面、Reuters/Bloomberg/WSJ/CNBC、GAAP vs non-GAAP口徑要註明、財年制度可能跟自然年不同要標註對應月份、幣別一律USD不換算新台幣。台股分岔維持現有的 MOPS/TWSE/TPEx OpenAPI + 財經媒體邏輯不變。兩個市場都要排除 tide-tw.app、aistockmap.com、TradingView 當查證依據（這條規則本來就該補進 `buildPrompt`，目前完全沒提到）。

### 3.3 新增欄位：`growthDriver`（主要成長動能）

在 `buildPrompt` 第136行附近「reports需要」的欄位清單裡新增：

```
growthDriverTitle（這段的標題，例如「AI伺服器供電，是台達電目前最明確的成長動能」）
growthDriver（陣列，1-2個項目，每項{driver: 動能名稱, why: 公司/管理層自己怎麼描述這個動能為什麼重要（引用法說會/財報展望原話，不是你自己觀察產業後腦補的）, progress: 目前進展到哪個階段、有沒有具體數字佐證}）
```

務必在 prompt 裡強調：這段要引用管理層原話或財報展望段落，查不到公司自己明確揭露原因時，誠實寫「目前查不到公司自己對此動能重要性的明確說法」，不要腦補。

### 3.4 新增欄位：`technical`（技術面觀察）

```
technical（物件 {pattern: 目前呈現的K線型態名稱（呼叫candlestick-pattern-id skill判讀，判讀不出明確型態就填"未呈現明確教科書型態"）, tendency: 這類型態歷史上的走勢傾向描述, note: 固定提醒文字，不含任何買賣建議字眼}）
```

在 prompt 裡**逐字**加入這條硬性規則（跟 Cowork 這次定案的合規考量一致，不是風格偏好）：

> 這段絕對不能出現「建議買進/賣出/加碼/減碼/逢低承接/逢高出脫」這類直接指示買賣動作的字眼，也不能用「應該」「務必」這種語氣暗示讀者該怎麼做，只能客觀描述型態與歷史統計傾向。

### 3.5 加入 Cross Check 步驟

在原本第7點「語法驗證」之前，插入一個新步驟：草稿寫完、正式用 Write 工具存檔之前，先整理待驗證聲明清單（財務數字/日期/事件敘述），依照 `stock-report-cross-check` skill 的方法論自我查證一輪；沒有通過（mismatch，或未標註的single_source_only）就自己修正草稿內容後再檢查一次，不要把沒過查證的草稿直接寫入正式檔案。這一步驟完全在單次 `claude -p` 呼叫內完成（Claude Code 自己既是撰寫者也是查證者），不需要額外的伺服器端 API 或狀態欄位。

### 3.6 `exampleCode` 邏輯需要依市場調整

目前第128行 `const exampleCode = code === '2330' ? '2317' : '2330';` 寫死參考台股範例。美股請求時要改參考一份美股範例檔案（但目前 `data/reports/` 裡完全沒有任何美股報告——**這代表第一次生成美股報告時沒有範例可讀，prompt 需要改成「如果是美股請求且找不到任何美股範例檔案，直接依照 us-stock-research-report skill 的欄位結構撰寫，不用讀範例檔案」**，並且要在 `data/reports/` 產出第一份美股報告後，之後的美股請求才能開始互相參照）。

---

## 4. Phase 3：改前端 `台股研究報告App.html`

### 4.1 `renderReport(r)` 新增兩段渲染區塊

`renderReport` 函式（目前在第1829-1914行）目前組出的段落只有：產業鏈定位、同儕比較（左欄）、財務健診、股價推算模型（右欄）、名詞小百科、資料來源與免責聲明（全寬）。新增：

- **主要成長動能**：插在「產業鏈定位」之後、「財務健診」之前，比照 `chainMainHtml` 的寫法組一段新的 `growthDriverHtml`，放進 `leftItems`（產業鏈定位跟成長動能都偏敘事面，放同一欄比較合理），並加進 `tocPillsHtml` 的導覽清單。
- **技術面觀察**：比照 `finHtml` 的寫法，放進 `rightItems`（財務／估值路線那一欄，技術面也是偏數字面的觀察）。渲染時務必把 `r.technical.note` 那段固定提醒文字也顯示出來，讓使用者在報告畫面上就能看到「這段不構成買賣建議」的提醒，不要只寫進資料裡沒顯示。

兩段都要處理 `r.growthDriver` / `r.technical` 不存在的情況（舊資料沒有這允欄位）——用類似 `r.extraNarrative ? ... : ''` 的寫法做防呆，不要讓舊報告（還沒重新生成過的32份）因為缺欄位而整頁噴錯。

### 4.2 幣別／市場欄位

`data/reports/*.js` 目前完全沒有 `market` 或 `currency` 欄位（隱含全部是台股/NTD）。新增 `market`（"TW"/"US"，缺省視為"TW"，向下相容舊資料）欄位。前端目前把「元」這個字硬寫死在很多地方，需要逐一改成依 `market` 動態決定顯示 "元"（TW）或 "USD"/"$"（US）：

已確認需要修改的位置（行號依目前檔案版本，實際修改前建議重新 grep 一次「元」確認行號沒有偏移）：
- 第726行 `fmtValuationSection` 內的模型隱含股價顯示
- 第759行 目前市價顯示
- 第773行 各模型範圍/平均顯示
- 第921、924、925、928、929行 官方數據速覽表格（這幾行同時也是TWSE OpenAPI專屬欄位如「實收資本額」「基本每股盈餘」，美股沒有對應的TWSE資料可填，這個區塊對美股報告可能整段都要跳過顯示，不只是換幣別符號）
- 第1037、1040、1041、1044行 同上（另一個相近的官方資料格式化函式，可能是TPEx版本）
- 第1248行 `verifyTwseAndSync` 即時股價顯示（美股沒有TWSE可查，這個「查詢TWSE最新股價」按鈕對美股報告要嘛整個隱藏、要嘛換成別的資料源，見4.3）
- 第2397行 同儕比較表格裡的股價欄位

### 4.3 「查詢TWSE最新股價與均線」按鈕（`verifyTwseAndSync`）美股要怎麼處理

`report-head` 區塊（第1886-1887行）有一顆固定顯示的「📈 查詢TWSE最新股價與均線」按鈕，呼叫 `verifyTwseAndSync('${r.code}')`，這個函式背後查的是 TWSE OpenAPI，美股代碼查了一定失敗。渲染 `report-head` 時要依 `r.market` 判斷：台股維持現況，美股先直接隱藏這顆按鈕（不做假的美股即時股價查證功能，避免顯示錯誤或誤導），這是本次範圍內最簡單、風險最低的做法；如果之後想做美股版本的即時股價查證，需要另外找美股即時報價來源，不在這次範圍內。

### 4.4 搜尋與比對邏輯

`showReport()`（第1930行起）目前用 `/^[0-9A-Za-z]{4,6}$/` 判斷「看起來像代碼」，這個正則本來就同時涵蓋台股數字代碼跟美股英文字母代碼，**不需要修改**。`searchMatches`／自動完成邏輯也是通用文字比對，理論上不需要為美股特別調整，但建議實際測試一次英文代碼（例如 "NVDA"）的搜尋跟自動完成體驗，確認沒有假設「代碼一定是數字」的隱藏邏輯。

---

## 5. Phase 4（次要優先，可延後）：`stock-report-backend` 是否同步更新

`stock-report-backend/src/claude.js` 裡的 `submit_stock_report` 工具 schema（第47-210行）是完全獨立的一套定義，跟 `claude-code-research-server/server.js` 的 `buildPrompt()` 沒有共用。這條路徑需要真的 Anthropic API key、會計費，目前看起來是備用/展示路徑而非主要使用路徑。

建議：**這次不強制同步更新**，先確認 `claude-code-research-server` 這條主要路徑穩定運作、報告品質符合預期後，再回頭決定要不要讓 `stock-report-backend` 也補上 `growthDriver`／`technical`／`market` 欄位（做法會是修改 `claude.js` 裡的 `buildReportTool()` schema 與 `buildSystemPrompt()`）。如果暫不更新，至少在 `stock-report-backend/README.md` 加一行說明「目前這條路徑產出的報告還沒有主要成長動能／技術面觀察兩個新段落，如需完整版請改用『研究並加入資料庫』走 claude-code-research-server」，避免你之後忘記兩條路徑已經不同步。

---

## 6. Phase 5：既有 32 份台股報告要不要回填新欄位

現有 `data/reports/*.js`（約32-65份，含批次腳本產出的）都沒有 `growthDriver`、`technical`、`market` 欄位。Phase 3 的前端防呆會讓這些舊報告正常顯示（只是少兩段），不會壞掉，所以**回填不是必要項目**，是可以之後慢慢做的事：

- 最簡單的做法：每次使用者點某支股票的「🔄 重新研究並更新為最新資訊」按鈕時，新版 `buildPrompt()` 自然就會補齊新欄位，等於「使用者自然使用的過程中逐步回填」，不需要額外寫批次腳本。
- 如果想一次補齊全部，可以寫一個簡單腳本迴圈呼叫 `POST /api/research/{code}`，但這樣會一次消耗較多 Claude Code 執行時間（每檔股票3-5分鐘 x 32-65檔，抓幾小時跑完），建議晚點再做，不急。

---

## 7. Phase 6：驗收測試

1. **回歸測試**：挑一支現有台股（例如2330）點「重新研究並更新」，確認：新版報告有主要成長動能、技術面觀察兩段且正確渲染；技術面段落沒有出現任何買賣建議字眼；Cross Check 有實際跑（可以從 claude-code-research-server 的 log／activity 顯示看到是否有額外的查證動作，或要求 Claude Code 在完成訊息裡簡短提一句查證結果）；舊的財務健診、產業鏈定位等既有段落沒有跑掉。
2. **美股新增測試**：用一支知名美股代碼（例如 NVDA 或 AAPL）點「研究並加入資料庫」，確認：`market` 正確判斷為 US；查證來源確實用了 SEC EDGAR 而不是 MOPS/TWSE；幣別顯示正確（USD，不是「元」）；「查詢TWSE最新股價」按鈕沒有出現在美股報告頁面；官方數據速覽區塊沒有顯示台股專屬欄位或顯示錯誤的「—」。
3. **舊報告防呆測試**：搜尋一支還沒重新生成過的舊台股報告，確認頁面正常顯示、不會因為缺少 `growthDriver`/`technical` 欄位而報錯或版面跑掉。
4. **skill 觸發測試**：直接在你本機 Claude Code（不透過這個 App，一般對話）問「幫我分析一下2330」，確認新版 `tw-stock-research-report` skill 真的被觸發、輸出七段結構，藉此驗證 Phase 1 的 skill 安裝真的生效，不是只有 `buildPrompt()` 這條路徑在起作用。

---

## 8. 已知風險與待你決定的事項（不是我幫你決定，需要你確認）

- `candlestick-pattern-id` skill 你本機是否已安裝，沒有的話技術面段落要用什麼 fallback（見 2.4）。
- 本機 Claude Code 實際的 skill 安裝機制（依版本而定），這份計畫沒辦法幫你確認，執行 Phase 1 前請自行確認一次安裝方式。
- `stock-report-backend`／`twse-proxy-server` 這兩條次要路徑要不要同步更新，還是先維持現狀、之後有需要再處理（見 Phase 4，我的建議是先不動）。
- 是否要主動回填現有 32-65 份舊報告的新欄位，還是讓它們在使用者自然點擊「重新研究並更新」時逐步補齊（見 Phase 5，我的建議是不用主動回填）。
- 這份計畫沒有處理 `docs/研究報告_松川精密(7788).md` 這份文件——這份文件實際存在你本機 `docs/` 資料夾裡，但沒有上傳到 Cowork 的 Project 知識庫，跟我先前在對話中誤判「這份報告遺失」而在產品構想.md 拿掉引用的結論不一致，之後如果要核對 Project 文件庫的完整性可以順手補上傳，不影響這次的前端執行計畫。

---

## 9. 建議執行順序總結

Phase 1（skill 更新）→ Phase 2（`buildPrompt()`，最關鍵）→ Phase 3（前端渲染＋幣別）→ Phase 7 驗收測試 → 視結果決定要不要做 Phase 4／5。Phase 1 跟 Phase 2 可以同時進行（互不阻塋），Phase 3 建議等 Phase 2 的資料結構定案後再動工，避免前端渲染的欄位名稱跟後端實際寫出來的欄位對不上。
