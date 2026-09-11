window.REPORTS["AMD"] = {
  "code": "AMD",
  "name": "Advanced Micro Devices, Inc.",
  "aliases": [
    "Advanced Micro Devices",
    "超微",
    "超微半導體",
    "AMD",
    "advanced micro devices inc"
  ],
  "industry": "半導體業（x86處理器與資料中心AI加速器設計，Fabless IC設計公司）",
  "market": "US",
  "basics": {
    "主要業務": "全球第二大x86處理器設計公司與資料中心AI加速器主要供應商之一，業務分為三大報告分部：資料中心（EPYC伺服器CPU、Instinct GPU加速器）、用戶端與遊戲（Ryzen處理器、Radeon顯示卡、遊戲主機客製化晶片）、嵌入式（工業／車用／網通嵌入式處理器與FPGA，源自2022年收購Xilinx）",
    "上市交易所": "那斯達克（NASDAQ: AMD），為那斯達克100與S&P 500成分股",
    "成立年份": "1969年5月1日於美國德拉瓦州註冊成立；現任董事長暨執行長為蘇姿丰（Dr. Lisa Su）",
    "總部": "美國加州聖塔克拉拉（Santa Clara, California）",
    "員工人數": "約31,000人（截至FY2025年報揭露，2025年12月27日，SEC 10-K）",
    "市值": "約8,198億美元（依2026年9月8日盤中股價502.05美元與流通股數約16.325億股計算）"
  },
  "moat": "CPU這塊護城河是真的——全世界能合法量產x86處理器的只有Intel跟AMD兩家，這張門票別人買不到。但真正把股價炒上天的AI晶片生意，護城河還沒長齊：OpenAI、Meta、Anthropic找上門，很大一部分是不想把身家全押在輝達一家身上，不是因為ROCm軟體生態已經贏了CUDA。說白了，現在AMD賣的是「備胎的安心感」，這份安心感值不值502美元一股，市場自己都還在吵。",
  "chainTitle": "從x86雙頭壟斷到輝達的第二選擇：AMD如何卡位資料中心AI供應鏈",
  "chain": [
    {
      "lbl": "為什麼重要",
      "text": "AMD是全球僅次於Intel的x86處理器設計公司，也是資料中心AI加速器市場中除輝達外規模最大的供應商。FY2025全年營收346.39億美元，2026年第二季資料中心營收年增107%、占總營收比重從一年前的42%躍升至58%，是Meta、OpenAI、Anthropic、Oracle等雲端業者除輝達外主要考慮的AI運算硬體來源。公司每季財報與這些多年期部署合約的實際出貨進度，是觀察全球AI資料中心資本支出能否維持「多元供應鏈」的重要指標之一。"
    },
    {
      "lbl": "AMD在做什麼",
      "text": "產品線涵蓋EPYC伺服器CPU（最新Venice世代）、Instinct系列GPU加速器（MI300／MI350／MI400／MI450，採CDNA架構）、機櫃級Helios平台（整合運算、網路、電源、液冷為單一出貨單位），並以自有ROCm軟體堆疊對標輝達CUDA。具體數字佐證：Q2 2026資料中心單季營收67.18億美元（YoY+107%），伺服器CPU營收連續第五季創新高；公司已與OpenAI簽署6GW多世代部署合約（首個1GW MI450已於2026下半年開始部署）、與Meta擴大合作至6GW、與Anthropic簽署最高2GW MI450部署合約（首1GW預計2027上半年開始部署，AMD同步反向投資Anthropic最高50億美元）。"
    },
    {
      "lbl": "為什麼不容易被取代",
      "text": "x86架構交叉授權目前僅Intel與AMD持有，是硬性的法律門檻，其他公司無法合法生產x86相容處理器，這是CPU業務護城河的核心來源。資料中心GPU方面，AMD的角色更接近「輝達供應吃緊、產能被卡死時的備援選擇」——OpenAI、Meta、Anthropic等大型AI實驗室不希望把運算基礎設施全部綁在單一供應商身上，AMD因此成為多家雲端業者策略上的「第二選擇」；這些合作案普遍搭配認股權證（warrant）機制，依實際部署量與AMD股價里程碑分批解鎖，把客戶與AMD的長期利益進一步綁定，提高雙方持續合作的誘因。"
    },
    {
      "lbl": "但也有隱憂",
      "text": "第一，ROCm軟體生態成熟度仍落後CUDA一大截，Wedbush證券分析師Matt Bryson直言「MI400系列需要先證明ROCm能在正式量產工作負載中撐得住，企業客戶才會真正轉換」。第二，輝達在AI加速器市場市佔仍高達約80%，AMD僅約5%至7%，即便OpenAI、Meta、Anthropic的合約規模龐大，能否如期轉化為實際出貨與營收仍待觀察。第三，OpenAI與Meta兩筆策略合作案所涉及的認股權證合計最高可達約3.2億股（約占目前流通在外普通股19.6%），隨部署里程碑陸續達成、認股權證分批履約，將對既有股東造成實質稀釋。第四，Q2 2026法說會後，市場對Q3 2026財測毛利率持平於56%（未進一步擴張）的疑慮，導致股價財報後一度重挫近9%，顯示AI晶片放量與獲利率擴張之間仍有拉鋸。",
      "risk": true
    }
  ],
  "finTitle": "資料中心營收占比衝上58%，但Non-GAAP毛利率原地踏步——Q2 2026財報的一體兩面",
  "finTable": {
    "headers": [
      "季度",
      "營收YoY",
      "毛利率(Non-GAAP)",
      "營益率(Non-GAAP)",
      "EPS(Non-GAAP，稀釋)"
    ],
    "rows": [
      [
        "Q4 2025（截至2025/12/27）",
        "+34%",
        "57%",
        "28%",
        "$1.53"
      ],
      [
        "Q1 2026（截至2026/3/28）",
        "+38%",
        "55%",
        "24%",
        "$1.37"
      ],
      [
        "Q2 2026（截至2026/6/27）",
        "+50%",
        "56%",
        "27%",
        "$1.66"
      ],
      [
        "FY2025全年（2024/12/29～2025/12/27）",
        "+34%",
        "52%",
        "23%",
        "$4.17"
      ],
      [
        "Q3 2026（公司財測，全年為推算）",
        "約+41%",
        "約56%",
        "未提供財測",
        "未提供財測"
      ]
    ]
  },
  "narrative": [
    {
      "tag": "數字與數字的關聯",
      "text": "把Q4 2025到Q2 2026三季的Non-GAAP毛利率放在一起看：57%（Q4'25）→55%（Q1'26）→56%（Q2'26），同一段期間資料中心營收占比則從49%出頭一路墊高到58%（Q2'26資料中心單季營收67.18億美元、YoY+107%，帶動總營收年增50%）。理論上資料中心（尤其GPU加速器）規模放大應該有機會墊高毛利率，但實際數字卻是原地打轉、甚至比Q4'25略降；公司公布的Q3 2026財測更是把Non-GAAP毛利率guide維持在56%，沒有進一步上修。(研判)這代表Helios機櫃平台與MI450系列的前期產能建置、新產品良率爬坡成本，目前正好抵銷了資料中心營收放量帶來的規模效益，「營收成長」與「毛利率擴張」在這一階段的AMD身上暫時脫鉤，也是財報公布後股價一度重挫近9%的核心原因之一。"
    },
    {
      "tag": "產業鏈視角",
      "text": "這份財報對供應鏈上中下游是不同程度的利多：對上游而言，資料中心營收單季年增107%、Q3財測仍看年增約41%，意味著AMD對台積電先進製程與SK海力士、美光等HBM供應商的訂單能見度持續墊高，是晶圓代工與高頻寬記憶體供應商的明確利多。對中游而言，Helios機櫃級平台需要ODM廠商同步完成整機組裝、液冷與電源系統整合，出貨規模若如財測放量，對機櫃組裝與伺服器供應鏈夥伴也是利多，但Non-GAAP毛利率未同步擴張，代表AMD在分攤前期建置成本上仍有壓力，利多力道未必能完全轉嫁。對下游而言，OpenAI、Meta、Anthropic透過多年期部署合約搭配認股權證的組合鎖定AMD產能與條件，某種程度是用股權稀釋換取供應鏈多元化，對這些AI實驗室是取得「輝達之外第二選擇」的利多，但也考驗AMD能否如期出貨、不能只靠簽約金額撐場面。"
    },
    {
      "tag": "抓意外",
      "text": "就Q2 2026單季而言，實際數字打敗市場預期：營收115.36億美元 vs. 市場預估的113億美元、Non-GAAP EPS 1.66美元 vs. 預估1.62美元，也雙雙優於公司自己Q1法說會時給出的Q2財測（營收112億美元±3億美元，實際落在財測高標之上）。但真正讓股價財報後一度重挫近9%的意外，不是這兩個數字本身，而是Q3 2026財測——公司把Non-GAAP毛利率財測維持在56%，與Q2實際數字持平、沒有進一步上修，跟市場原本期待「資料中心占比持續墊高、毛利率應該同步走升」的劇本不一致。多家財經媒體（MLQ Research、TradingKey、EBC Financial Group等）均將股價賣壓歸因於這個毛利率財測「原地踏步」的訊號，而非營收或EPS本身不如預期。"
    }
  ],
  "growthDriverTitle": "資料中心AI加速器放量，是AMD目前最明確的成長動能",
  "growthDriver": [
    {
      "driver": "資料中心AI加速器（Instinct GPU／Helios機櫃平台／MI450系列）",
      "why": "CEO蘇姿丰（Lisa Su）在Q2 2026法說會表示：「In data center AI, the growing number and scale of Helios and MI450 Series Instinct deployments position the business for significant growth in the second half of the year with growth accelerating in 2027」（資料中心AI業務，隨著Helios與MI450系列部署規模與數量增加，為下半年顯著成長、以及2027年成長加速打下基礎），並表示「we're still in the early stages of a multiyear AI adoption cycle」（AI採用仍處於多年期循環的早期階段）。",
      "progress": "Q2 2026資料中心營收67.18億美元、YoY+107%，占總營收比重從一年前的42%躍升至58%；已與OpenAI簽署6GW部署合約（首個1GW MI450於2026下半年開始部署）、與Meta擴大合作至6GW、與Anthropic簽署最高2GW合約（首1GW預計2027上半年開始部署）；管理層預期2027年資料中心營收將較2026年再翻倍，並將資料中心AI加速器總潛在市場（TAM）預估上修至2030年達1.4兆美元、年複合成長率逾45%。"
    },
    {
      "driver": "EPYC伺服器CPU（Venice世代）",
      "why": "蘇姿丰在同場法說會表示：「Agentic AI is creating a new growth vector for server CPUs, spanning high-frequency AI host nodes, high-density agentic servers and general-purpose cloud and enterprise workloads」（Agentic AI正為伺服器CPU創造新的成長動能，涵蓋高頻AI主機節點、高密度agentic伺服器與一般雲端／企業工作負載），並表示「Customer demand for Venice is stronger than for any prior EPYC generation, and we expect to continue growing market share across cloud and enterprise」（客戶對Venice的需求強於任何一代EPYC，預期將持續在雲端與企業市場擴大市占）。",
      "progress": "伺服器CPU營收已連續第五季創新高；管理層預期2026下半年伺服器營收年增逾80%、2027全年年增逾70%，Q2 2026資料中心整體（CPU+GPU）營收年增107%。"
    }
  ],
  "technical": {
    "pattern": "未呈現明確教科書型態",
    "tendency": "以candlestick-pattern-id量化判讀近18個交易日（2026年8月12日至9月4日）的K棒數據，未觸發44種教科書型態中的任何一種明確訊號，趨勢背景判定為「下降」。這段期間股價從8月14日的高點514.39美元一路震盪走低，8月24日跌破457美元、9月3日盤中最低來到440.50美元，隨後於9月4日出現反彈（收477.57美元，單日漲逾4%），9月8日盤中受AI工作站新品發表消息激勵進一步走高至502美元附近；但截至9月4日收盤為止的K棒組合本身，並未形成吞噬、晨星、貫穿等任一種明確的反轉或延續型態訊號。",
    "note": "本段僅為型態與歷史統計描述，不構成任何買賣建議。"
  },
  "bullBearTitle": "股價漲勢與毛利率擴張，這次沒有同步",
  "bullBear": {
    "bull": [
      {
        "point": "UBS分析師Timothy Arcuri將目標價由455美元上調至670美元、維持買進評等，主因是資料中心AI加速器出貨動能優於預期。",
        "source": "賣方報告（UBS）"
      },
      {
        "point": "Bernstein將評等上調至優於大盤、目標價525美元，依據是其對AMD 2027年每股盈餘上看逾14美元的預估，反映OpenAI、Meta、Anthropic多年期部署合約帶動的獲利成長空間。",
        "source": "賣方報告（Bernstein）"
      },
      {
        "point": "管理層在Q2 2026法說會上將資料中心AI加速器總潛在市場（TAM）預估上修至2030年達1.4兆美元、年複合成長率逾45%，並預期2027年資料中心營收將較2026年再翻倍。",
        "source": "法說會（Q2 2026，2026年8月4日）"
      }
    ],
    "bear": [
      {
        "point": "HSBC分析師Frank Lee於2026年5月將評等由買進下調至持有、目標價340美元，理由是股價本益比已從約19倍快速墊高到33倍（以2027年預估獲利計算），且先進封裝與晶圓產能瓶頸恐限制實際出貨能否跟上訂單成長；同期間Northland Capital分析師Gus Richard也將評等下調至Market Perform、目標價260美元，認為市場對2027年財測共識過於樂觀。這兩份看法都發表於Q2 2026財報與OpenAI／Anthropic合作案進一步擴大之前，股價此後已再上漲逾5成，僅供參考當時的估值疑慮邏輯，不代表最新觀點。",
        "source": "賣方報告（HSBC、Northland Capital，2026年4-5月）"
      },
      {
        "point": "Wedbush證券分析師Matt Bryson指出，AMD硬體規格雖具備競爭力，但CUDA生態系護城河依然真實存在，MI400系列必須先證明ROCm軟體堆疊能撐得住正式量產工作負載，企業客戶才會真正轉換。",
        "source": "賣方報告（Wedbush Securities）"
      },
      {
        "point": "OpenAI與Meta兩筆策略合作案所涉及的認股權證合計最高可達約3.2億股（約占目前流通在外普通股19.6%），隨部署里程碑陸續達成、認股權證分批履約，市場關注這對既有股東的長期稀釋效果。",
        "source": "財經媒體報導（整理自多家報導，2026年）"
      }
    ]
  },
  "terms": [
    "GAAP",
    "Non-GAAP",
    "財年",
    "CAGR",
    "毛利率",
    "營益率",
    "淨利率",
    "EPS",
    "DCF",
    "WACC",
    "beta",
    "終值",
    "終值成長率",
    "可比公司乘數法",
    "敏感度分析",
    "YoY",
    "法說會",
    "財測",
    "Fabless",
    "x86架構",
    "Chiplet",
    "ROCm",
    "CUDA",
    "HBM",
    "TAM",
    "認股權證",
    "EPYC",
    "Instinct",
    "Helios"
  ],
  "sources": [
    "AMD官方新聞稿與SEC 8-K揭露文件（ir.amd.com、newsroom.amd.com），含FY2025第四季暨全年財報（2026年2月3日）、Q1 2026財報（2026年5月5日）、Q2 2026財報（2026年8月4日）",
    "SEC EDGAR 10-K（FY2025年報，截至2025年12月27日）、10-Q（Q1／Q2 2026）與XBRL財務數據API（data.sec.gov/api/xbrl/companyfacts），交叉驗證營收、EPS、現金與負債數字",
    "AMD與OpenAI（2025年10月6日）、Meta（2025年）、Anthropic（2026年7月22日）策略合作官方新聞稿與SEC揭露文件",
    "AMD Financial Analyst Day 2025簡報（2025年11月11日），長期財務目標（營收CAGR、非GAAP營益率、EPS目標）",
    "The Motley Fool（fool.com）Q2 2026法說會逐字稿（2026年8月），管理層對資料中心AI與EPYC原話引用",
    "TipRanks、MLQ Research、TradingKey、EBC Financial Group、CNBC等財經媒體對Q2 2026財報後股價反應與分析師評等調整之報導（2026年8月至9月）",
    "stockanalysis.com、Yahoo Finance股價歷史資料與分析師預估數據（查詢日期：2026年9月8日）"
  ],
  "peers": {
    "companies": [
      {
        "name": "AMD",
        "code": "AMD",
        "isSelf": true
      },
      {
        "name": "NVIDIA",
        "code": "NVDA"
      },
      {
        "name": "Intel",
        "code": "INTC"
      },
      {
        "name": "Broadcom",
        "code": "AVGO"
      }
    ],
    "rows": [
      {
        "dimension": "核心策略",
        "values": [
          "x86 CPU雙寡占供應商之一，近年靠Instinct GPU加速器與Helios機櫃平台切入資料中心AI市場，定位為輝達之外的「第二選擇」供應商",
          "資料中心AI加速器市場的絕對龍頭，市占約80%，CUDA軟體生態系是核心護城河，同時是AI伺服器機櫃平台（如GB200/GB300）的主要設計者",
          "x86 CPU另一家法定持有者，近年同時發展自有晶圓代工業務（Intel Foundry）並推出Gaudi系列AI加速器，力圖在CPU與晶圓製造兩端追趕",
          "以客製化ASIC（為Google、Meta等大型雲端業者設計專屬AI晶片）與網通晶片為主，是資料中心AI供應鏈中另一條與Nvidia/AMD不同的路線"
        ]
      },
      {
        "dimension": "資料中心AI市占（概估）",
        "values": [
          "約5%至7%（市調機構概估，非官方確認數字）",
          "約80%（市調機構概估，非官方確認數字）",
          "個位數以下，Gaudi系列尚處早期階段",
          "不直接以GPU市占衡量，客製化ASIC出貨集中於少數大型雲端客戶"
        ]
      },
      {
        "dimension": "規模／估值",
        "values": [
          "FY2025全年營收346.39億美元，YoY+34%；forward P/E（以次一財年非GAAP EPS共識計算）約43倍（2026年9月數據）",
          "forward P/E約14.6倍（以2027財年非GAAP EPS共識計算，2026年9月數據），營收規模遠大於AMD",
          "近年獲利承壓，P/E多為負值或不具參考意義，估值多改以營收或資產基礎衡量",
          "forward P/E約19.1倍（以2027財年非GAAP EPS共識計算，2026年9月數據）"
        ]
      }
    ],
    "takeaway": "在forward P/E的比較基礎上，AMD目前的估值倍數（約43倍）明顯高於NVIDIA（約14.6倍）與Broadcom（約19.1倍），反映市場對AMD後續資料中心AI加速器放量的期待，已經跑在目前財務數字之前；換言之，AMD的股價與其說是在為「已實現的獲利」定價，不如說是在為「OpenAI、Meta、Anthropic等多年期合約能否如期轉化為出貨與毛利率擴張」這個尚未完全驗證的劇本定價，這也是本報告估值模型隱含股價明顯低於目前市價的主要原因。"
  },
  "generatedAt": "2026-09-08T15:16:05.503Z",
  "chainStage": "晶片設計與晶圓代工"
};
