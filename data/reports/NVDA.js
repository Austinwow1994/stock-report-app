window.REPORTS["NVDA"] = {
  "code": "NVDA",
  "name": "NVIDIA Corporation",
  "aliases": [
    "NVIDIA",
    "輝達",
    "英偉達",
    "NVDA",
    "nvidia corporation"
  ],
  "industry": "半導體業（資料中心與AI加速運算晶片設計）",
  "market": "US",
  "basics": {
    "主要業務": "無晶圓廠（Fabless）半導體公司，設計GPU與資料中心加速運算平台，透過CUDA軟體生態系與GB300／Vera Rubin機櫃級平台主導全球AI訓練與推論運算基礎建設市場",
    "上市交易所": "那斯達克（NASDAQ: NVDA），為Nasdaq-100、道瓊工業指數、S&P 500、S&P 100成分股",
    "成立年份": "1993年，創辦人暨執行長為Jensen Huang（黃仁勳）",
    "總部": "美國加州Santa Clara",
    "員工人數": "約42,000人（FY2026財年底，即2026年1月25日，資料來源10-K，最新10-Q未更新此數字）",
    "市值": "約5.33兆美元（依2026年8月31日收盤價220.78美元與流通股數約241.5億股計算）"
  },
  "moat": "贏的原因講白了很簡單——不是晶片跑得比較快，是近20年攢下來的CUDA生態系，四百多萬個開發者的程式碼都寫在這個地基上，換平台等於整組打掉重練。想跳槽？可以啊，代價是自己重寫、重測、重新踩坑。不過這條護城河也不是每段路都一樣深——最開放的推論市場，Google、Amazon都自己做晶片打進來了，這裡才是真正需要盯緊的地方。",
  "chainTitle": "AI運算的事實標準：NVIDIA如何讓自己成為AI伺服器供應鏈裡幾乎無法繞過的一環",
  "chain": [
    {
      "lbl": "為什麼重要",
      "text": "資料中心加速運算目前是全球資本支出成長最快的單一領域，NVIDIA的GPU與機櫃級平台是絕大多數大型語言模型訓練與推論運算背後的實際算力來源。公司Q2 FY2027（截至2026年7月26日）資料中心營收達890億美元，YoY+117%，占公司總營收比重升至92.5%，NVIDIA的季度財報與財測已是市場觀察整體AI資本支出景氣最重要的單一領先指標之一——這點在本季財報公布後尤其明顯：儘管過去連續四季財報數字優於預期、股價卻在公布後下跌，這次股價在盤後一度上漲4%至5%，是近一年來最正向的一次反應，顯示市場關注的重心已從單季獲利轉向財測與供給展望。"
    },
    {
      "lbl": "NVIDIA在做什麼",
      "text": "從賣單顆GPU晶片，進化到賣一整個機櫃級的運算平台——繼GB300之後，Vera Rubin平台已於2026年8月啟動量產出貨。CEO Jensen Huang在法說會表示，公司「已經從每一家主要超大規模雲端業者手中拿到採購訂單」（\"having already received purchase orders from every major hyperscaler\"），並形容這將是「NVIDIA史上出貨爬升速度最快的產品」（\"the fastest product ramp in NVIDIA's history\"）；CFO Colette Kress進一步表示，Vera Rubin預計在Q3 FY2027貢獻約20%的資料中心營收。Huang也用一個具體數字說明平台升級的意義：每GW資料中心的營收機會，已從Hopper世代的180億美元提升到Vera Rubin平台的400億美元——代表客戶買的已經不只是運算晶片，而是CPU、GPU、網路、散熱、電源整合成一體的「AI工廠」標準單元。與此同時，NVIDIA的角色也逐漸延伸進客戶的算力採購與資金鏈：根據《華爾街日報》報導（經Bloomberg、Yahoo Finance等媒體證實），Anthropic與NVIDIA投資的雲端業者Lambda簽署350億美元運算合約，而NVIDIA自己持有這座位於德州Nueces County、由Hut 8開發的資料中心租約。"
    },
    {
      "lbl": "為什麼不容易被取代",
      "text": "除了硬體規格領先，更關鍵的是CUDA軟體生態系近20年累積下來的轉換成本——開發者已經把大量最佳化程式碼寫在CUDA架構上，要換平台等於重寫核心程式、重新驗證效能，這種組織級的轉換障礙比單純的晶片效能差距更難跨越。加上NVIDIA同時擁有NVLink、Spectrum-X Ethernet、InfiniBand三種高速網路產品線——Q2 FY2027網路事業營收單季創歷史新高（環比+18%），其中Spectrum-X Ethernet營收年增達2.6倍——讓NVIDIA得以用「運算＋網路」整合設計去搶下傳統網通廠商單靠硬體規格贏不了的大型AI工廠標案。即便面對Google、Amazon等雲端業者自研ASIC晶片的競爭，Bloomberg Intelligence估計NVIDIA目前在資料中心AI加速晶片市場的營收占比仍達70%至75%，這種軟體生態＋系統整合的雙重優勢，短期內仍難以被競爭對手完全複製。"
    },
    {
      "lbl": "但也有隱憂",
      "text": "第一，客戶集中度與商業模式延伸的風險並存：超大規模雲端業者（Hyperscale）Q2貢獻資料中心營收487億美元、約占55%，一旦這幾家巨頭資本支出計畫轉向保守，NVIDIA營收會直接受衝擊；而公司近期透過投資Lambda並持有其資料中心租約以促成Anthropic的350億美元運算合約等安排，也讓NVIDIA從單純賣方角色，延伸進入客戶的資金鏈與基礎建設佈局，報導指出這類安排的關鍵財務條款（如Lambda實際支付NVIDIA的費用）並未完全揭露，放空投資人Michael Burry更公開指出2026年已有約8,790億美元的超大規模雲端業者承諾資金以循環方式流經NVIDIA、公司本身也於2026年宣布逾5,400億美元的循環融資交易，市場對這類安排的透明度已出現疑慮。第二，地緣政治風險：公司在Q3 FY2027財測中明確表示「未假設任何中國資料中心運算營收貢獻」，Q2單季出貨至中國客戶的H20相關產品僅占資料中心營收不到1%，中國政策方向若進一步收緊或反覆，直接影響一塊潛在市場能否重新打開。第三，推論（Inference）市場的競爭壓力持續增溫：產業估計以出貨量計算，客製化ASIC（Google TPU、Amazon Trainium、Microsoft Maia、Meta MTIA）2026年將年增44.6%，遠高於標準GPU的16.1%，部分分析並預期NVIDIA在推論市場的占有率可能從九成以上逐步下滑至2028年的二至三成（此為第三方產業估計，非官方確認數字），長期是否侵蝕NVIDIA在資料中心的整體市占率，需要持續觀察。",
      "risk": true
    }
  ],
  "finTitle": "資料中心占比逼近九成三，GAAP獲利罕見超車Non-GAAP，是Q2 FY2027財報最值得看懂的細節",
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
        "FY26 Q3（截至2025/10/26）",
        "+62%",
        "73.6%",
        "66.2%",
        "$1.30"
      ],
      [
        "FY26 Q4（截至2026/1/25）",
        "+73%",
        "75.2%",
        "67.7%",
        "$1.62"
      ],
      [
        "FY27 Q1（截至2026/4/26）",
        "+85%",
        "75.0%",
        "65.9%",
        "$1.87"
      ],
      [
        "FY27 Q2（截至2026/7/26）",
        "+106%",
        "75.0%",
        "66.5%",
        "$2.22"
      ],
      [
        "FY27 Q3（公司財測，截至約2026/10/25）",
        "約+89%（財測隱含）",
        "74.0%（財測中值）",
        "未提供財測",
        "未提供財測"
      ]
    ]
  },
  "narrative": [
    {
      "tag": "數字交叉比對",
      "text": "Q2 FY2027（截至2026年7月26日）總營收962.21億美元創單季新高，YoY+106%、QoQ+18%，其中資料中心營收890億美元、YoY+117%，占總營收比重升至92.5%。細看資料中心內部結構：Hyperscale（超大規模雲端業者）營收487億美元、YoY+101%；ACIE（AI雲端、產業與企業）營收403億美元、YoY+138%，ACIE成長速度明顯快於Hyperscale——(研判)顯示這一季的成長動能除了既有大型雲端業者持續加碼，來自主權AI、企業級與新興AI雲端業者的訂單擴張速度更快，客戶結構正從『幾家超大巨頭集中下單』略為分散。另一個值得交叉比對的地方是本季GAAP稀釋EPS（$2.46）罕見高於Non-GAAP稀釋EPS（$2.22）——這不是核心營運變好，而是公司持有的股權投資組合本季認列了77.71億美元的稅前未實現利得（Non-GAAP口徑會排除這類投資利得），扣除2.22億美元收購相關費用與2.98億美元其他項目、再加回15.17億美元稅務影響後，GAAP淨利（596.88億美元）才會高出Non-GAAP淨利（539.54億美元）57.34億美元。這是連續第二季出現『GAAP高於Non-GAAP』的反常排序（上一季FY27 Q1也是如此），(研判)代表NVIDIA的股權投資組合（例如對AI新創的策略性投資）波動，已開始對GAAP財報數字產生不可忽視的影響，解讀獲利能力時Non-GAAP口徑更能反映核心晶片與系統銷售的實際表現。"
    },
    {
      "tag": "產業鏈視角",
      "text": "對上游而言（記憶體與先進封裝供應商，例如SK海力士、美光、台積電CoWoS產能），NVIDIA資料中心營收加速成長且Vera Rubin平台已進入量產出貨，代表對HBM、CoWoS封裝產能的需求只會更緊，屬於明確利多；對中游的雲端服務業者與NeoCloud業者（如CoreWeave、Lambda）而言，Vera Rubin機櫃已在CoreWeave、Google Cloud、微軟Azure、Oracle Cloud Infrastructure、Nebius等夥伴端啟動運作，加上NeoCloud合作夥伴今年底裝置容量預計從2025年底約3GW擴大到8GW，代表這些中游算力出租業者的擴產壓力與資本支出需求同步升高，是利多也是資金壓力的來源；對下游AI模型開發商與企業用戶而言，公司強調『每GW的營收機會從Hopper世代180億美元提升到Vera Rubin平台400億美元』，意味著採購同樣算力規模需要投入的資本門檻也同步墊高，對資金實力較弱的下游AI新創是潛在利空，也是NVIDIA近期需要更深入參與客戶融資安排（如Lambda／Anthropic案例）的部分背景。"
    },
    {
      "tag": "抓意外",
      "text": "這一季的財報數字本身超出市場共識——營收962.21億美元優於LSEG共識預估920.7億美元（超出約4.5%），Non-GAAP EPS $2.22優於共識$2.09（超出約6.3%），Q3財測1,080億美元同樣優於市場先前預估、隱含約89%的YoY成長。真正的意外其實是股價反應方向：過去連續四季NVIDIA財報數字優於預期，股價卻在公布後下跌，這次卻在盤後大漲約4%至5%，是近一年來最正向的一次反應，顯示市場這次真正在意的是Q3財測與『supply-constrained』（供給受限而非需求不足）的展望框架，而不只是單季數字本身。但意外也有反向的一面：財報公布後兩個交易日（8/28），股價又因《華爾街日報》報導NVIDIA與Lambda、Hut 8之間的資料中心租賃安排、引發『循環式AI融資』疑慮而回落，顯示市場情緒對財報以外的結構性疑慮同樣敏感，是財報數字本身無法完全捕捉、卻明顯影響股價的變數。"
    }
  ],
  "growthDriverTitle": "Vera Rubin平台量產出貨啟動，是NVIDIA目前最明確的成長動能",
  "growthDriver": [
    {
      "driver": "Vera Rubin機櫃級平台量產出貨（接棒Blackwell成為下一代主力）",
      "why": "CEO Jensen Huang在Q2 FY2027法說會表示，公司「本月稍早已啟動Vera Rubin的量產出貨，且已經從每一家主要超大規模雲端業者手中拿到採購訂單」（\"We commenced production shipments of Vera Rubin earlier this month, having already received purchase orders from every major hyperscaler\"），並形容這將是「NVIDIA史上出貨爬升速度最快的產品」（\"the fastest product ramp in NVIDIA's history\"）。",
      "progress": "CFO Colette Kress表示Vera Rubin預計於Q3 FY2027貢獻約20%的資料中心營收；Huang並以具體數字說明平台升級的經濟效益——每GW資料中心的營收機會，已從Hopper世代的180億美元提升到Vera Rubin平台的400億美元。CoreWeave、Google Cloud、微軟Azure、Oracle Cloud Infrastructure、Nebius等主要合作夥伴已啟動運作Vera Rubin機櫃。"
    },
    {
      "driver": "資料中心網路（Networking）：Spectrum-X Ethernet放量，綁定整個機櫃架構銷售",
      "why": "CFO Colette Kress在法說會表示，網路事業營收「單季環比成長18%，創下歷史新高」（\"increased 18% sequentially to a record level\"），其中Spectrum-X Ethernet營收「年增達2.6倍」（\"growing 2.6 times year over year\"）。",
      "progress": "Q2 FY2027網路事業營收創單季歷史新高；NeoCloud合作夥伴預計今年底裝置容量將由2025年底約3GW擴大到8GW，代表運算與網路整合銷售的規模持續放大。"
    }
  ],
  "bullBearTitle": "財報大幅超標，股價卻先漲後跌：市場在意的到底是什麼",
  "bullBear": {
    "bull": [
      {
        "point": "Wedbush分析師Matt Bryson在Q2 FY2027財報後將目標價由330美元上調至345美元、維持Outperform評等，理由是營收962億美元、Non-GAAP EPS 2.22美元均優於共識，且公司首度給出的全年展望隱含估值仍屬保守",
        "source": "Wedbush分析師報告（經Yahoo Finance／TheStreet／Defense World／Proactive Investors報導）"
      },
      {
        "point": "Morgan Stanley將目標價由288美元上調至300美元、維持Overweight評等，並提出330美元的樂觀情境（相對150美元的悲觀情境）",
        "source": "Morgan Stanley分析師報告（經TheStreet、24/7 Wall St.報導）"
      },
      {
        "point": "科技基金經理人Gavin Baker指出，NVIDIA目前forward本益比是十年來低點之一，主張『空頭論述撐不過實際數據的檢驗』——核心論點是現有算力合約多簽在遠低於目前市場即時價格的水準，這些合約陸續到期後雲端業者的營運現金流可望明顯改善，他認為AI產業目前不是供過於求的泡沫，而是嚴重的算力短缺，且可能持續到2028年",
        "source": "BigGo Finance報導Gavin Baker公開評論"
      }
    ],
    "bear": [
      {
        "point": "知名放空投資人Michael Burry公開警告，2026年已有約8,790億美元的超大規模雲端業者承諾資金以循環方式流經NVIDIA、NVIDIA本身也於2026年宣布逾5,400億美元的循環融資交易，並透過持有NVDA看跌期權（put options）明確表態看空，將NVIDIA比作網路泡沫時期的思科（Cisco）",
        "source": "財經媒體報導Michael Burry公開評論與持倉揭露（TheStreet、Yahoo Finance、Benzinga、24/7 Wall St.）"
      },
      {
        "point": "《華爾街日報》報導，Anthropic與NVIDIA投資的雲端業者Lambda簽署350億美元運算合約，而NVIDIA自己持有這座由Hut 8開發之德州資料中心的租約，關鍵財務條款（如Lambda實際支付NVIDIA的費用、NVIDIA與Hut 8之間的資金安排）並未完全揭露，市場對這類『循環式AI融資』安排的透明度已出現疑慮",
        "source": "《華爾街日報》報導（經Bloomberg、Yahoo Finance、CoinDesk轉載）"
      },
      {
        "point": "產業研究估計，客製化ASIC（Google TPU、Amazon Trainium、Microsoft Maia、Meta MTIA）出貨量2026年將年增44.6%，遠高於標準GPU的16.1%，部分分析師預期NVIDIA在推論（inference）市場的占有率可能從九成以上逐步下滑至2028年的二至三成，對CUDA生態系轉換障礙較低的推論應用構成長期壓力",
        "source": "產業研究報告（經TechTimes、Axis Intelligence、SiliconAnalysts等科技媒體整理報導，此為第三方估計，非官方確認數字）"
      }
    ]
  },
  "technical": {
    "pattern": "未呈現明確教科書型態",
    "tendency": "以candlestick-pattern-id量化判讀近15個交易日（2026年8月11日至8月31日）的K棒數據，未觸發44種教科書型態中的任何一種明確訊號。這段期間股價先在218～227美元區間整理，8月26日盤中最低下探209.23美元，隔日（8/27，Q2 FY2027財報公布後首個交易日）大幅跳空至最高230.47美元、收在227.98美元，但緊接著8/28一根長黑棒又拉回收在217.55美元（盤中一度反映《華爾街日報》報導NVIDIA與Lambda、Hut 8之間資料中心租賃安排引發的『循環式AI融資』疑慮），8/31小幅收復至220.78美元。整體呈現財報公布後劇烈震盪但缺乏方向一致性的走勢，未形成任何單一K棒或多K棒組合的教科書型態。",
    "note": "本段僅為型態與歷史統計描述，不構成任何買賣建議。"
  },
  "terms": [
    "GAAP",
    "Non-GAAP",
    "財年",
    "CUDA",
    "自由現金流",
    "股票回購",
    "HBM",
    "CoWoS",
    "ASIC",
    "CAGR",
    "毛利率",
    "營益率",
    "EPS",
    "DCF",
    "DDM",
    "WACC",
    "敏感度分析",
    "YoY",
    "QoQ",
    "GW",
    "循環式AI融資"
  ],
  "sources": [
    "NVIDIA官方新聞稿與8-K揭露（nvidianews.nvidia.com、investor.nvidia.com、SEC EDGAR），含Q2 FY2027財報暨GAAP/Non-GAAP調節表（2026年8月26日發布）",
    "SEC EDGAR 10-Q（截至2026年7月26日）與相關財務數據全文檢索（efts.sec.gov／data.sec.gov）",
    "Motley Fool（fool.com）Q2 FY2027法說會逐字稿（2026年8月31日刊出），Jensen Huang與Colette Kress原話引用",
    "Webull、StockTitan、Investing.com、IndMoney對NVIDIA Q2 FY2027財報數字、分析師共識估計、Q3財測之報導（2026年8月）",
    "Wedbush（Matt Bryson）、Morgan Stanley分析師報告：財報後調升目標價之報導（經Yahoo Finance、TheStreet、Defense World、Proactive Investors轉載，2026年8月）",
    "《華爾街日報》報導（經Bloomberg、Yahoo Finance、CoinDesk等媒體證實）：Anthropic與NVIDIA投資之Lambda簽署350億美元雲端合約、NVIDIA持有Hut 8德州資料中心租約（2026年8月底）",
    "TheStreet、Yahoo Finance、Benzinga、24/7 Wall St.對投資人Michael Burry公開評論與持倉揭露之報導；BigGo Finance對投資人Gavin Baker公開評論之報導",
    "TechTimes、Axis Intelligence、SiliconAnalysts、Bloomberg Intelligence相關報導：客製化ASIC（Google TPU、Amazon Trainium等）市占與成長率估計",
    "stockanalysis.com股價歷史資料、財務數據與估值統計數據（查詢日期：2026年9月1日）"
  ],
  "peers": {
    "companies": [
      {
        "name": "NVIDIA",
        "code": "NVDA",
        "isSelf": true
      },
      {
        "name": "AMD",
        "code": "AMD"
      },
      {
        "name": "Broadcom",
        "code": "AVGO"
      },
      {
        "name": "Marvell",
        "code": "MRVL"
      }
    ],
    "rows": [
      {
        "dimension": "核心策略",
        "values": [
          "GPU＋CUDA軟體生態系為核心，Vera Rubin機櫃級平台已啟動量產出貨，同時靠NVLink／Spectrum-X／InfiniBand三線網路產品把整個AI工廠的運算與網路都綁進自家生態系，近期並透過投資Lambda等雲端業者深入參與客戶算力融資",
          "以MI系列GPU直接對打NVIDIA的資料中心加速卡，同時靠x86 CPU（EPYC）與遊戲機／PC處理器業務維持多元營收來源，近期加大與主要雲端業者的客製化合作",
          "不自己賣標準GPU，改幫Google、Meta等大型雲端業者設計客製化AI加速晶片（ASIC，如Google TPU），靠系統整合與晶片設計服務收費而非賣標準品",
          "同樣是客製化ASIC設計服務商，客戶涵蓋Amazon（Trainium／Inferentia協同開發）等雲端業者，另有資料中心網路互連晶片業務"
        ]
      },
      {
        "dimension": "主要客戶",
        "values": [
          "超級雲端業者（Hyperscale，Q2貢獻資料中心營收487億美元、約占55%）、AI雲端與企業客戶（ACIE，貢獻403億美元、成長速度更快）、主權AI專案，客戶結構最廣泛",
          "微軟、Meta等雲端業者的MI300／MI350系列客戶，也供應資料中心與消費端x86處理器給戴爾、惠普等系統廠",
          "Google（TPU）、Meta等少數幾家超大型雲端業者的客製化晶片專案，客戶集中度高但綁定關係深",
          "Amazon（Trainium／Inferentia）、微軟等雲端業者的客製化晶片專案，另有電信與資料中心網路設備客戶"
        ]
      },
      {
        "dimension": "規模／估值",
        "values": [
          "Q2 FY2027單季營收962.21億美元，YoY+106%，資料中心營收占比達92.5%；forward P/E僅約18.3倍（2026年9月數據），為四家中最低",
          "資料中心GPU營收規模仍顯著小於NVIDIA，forward P/E約42.4倍（2026年9月數據），估值倍數明顯高於NVIDIA",
          "forward P/E約23.5倍（2026年9月數據），客製化ASIC業務近年成長快速但規模仍小於NVIDIA標準GPU銷售",
          "forward P/E約38.3倍（2026年9月數據），AI相關營收占比持續攀升，客製化晶片訂單能見度是市場關注焦點"
        ]
      }
    ],
    "takeaway": "值得注意的是，NVIDIA目前約18.3倍的forward P/E，明顯低於AMD（42.4倍）、Broadcom（23.5倍）、Marvell（38.3倍）三家同業——儘管NVIDIA的營收規模與成長速度（Q2 FY2027 YoY+106%）遠超三者。這通常反映的是分母效應：NVIDIA近幾季獲利成長速度太快，把本益比往下拉，而不是市場看淡其未來成長性（分析師仍普遍上修目標價）；但也可能代表市場已經對『這個成長速度能否長期維持』開始打折扣，兩種解讀都合理，不宜單獨用本益比高低下結論。"
  },
  "generatedAt": "2026-09-01T15:22:50.754Z",
  "chainStage": "晶片設計與晶圓代工"
};
