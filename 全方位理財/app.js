// 闕又上全方位理財互動學習平台 - 完整版JavaScript
// 應用程式數據
const appData = {
    flashcards: [
        {"問題": "全方位理財的五大支柱包括哪些？", "答案": "保險規劃、稅務規劃、投資規劃、退休規劃、遺產規劃", "類別": "基礎概念"},
        {"問題": "保險規劃的雙十法則是什麼？", "答案": "預算不超過年收入的10%，保額約年薪的10倍", "類別": "保險規劃"},
        {"問題": "為什麼保險規劃是財務規劃的第一步？", "答案": "因為它是風險來臨時保護家庭財務根基的第一道防線，一次意外就足以摧毀家庭的財務根基", "類別": "保險規劃"},
        {"問題": "投資規劃需要考慮哪六大要件？", "答案": "未來目標、時程、風險承受度、投資哲學、投資策略（主動/被動）、投資心理學", "類別": "投資規劃"},
        {"問題": "稅務規劃的核心理念是什麼？", "答案": "合法節稅是權利，能找回遺漏的財富。稅法是規則，善用規則的融合與運用是節稅的奧妙", "類別": "稅務規劃"},
        {"問題": "愛因斯坦稱什麼為世界第八大奇蹟？", "答案": "複利", "類別": "複利效應"},
        {"問題": "9%和10%的年化報酬率經過50年複利後差距有多大？", "答案": "高達52.4%，9%報酬率資產成長74倍，10%報酬率資產成長117倍", "類別": "複利效應"},
        {"問題": "複利為什麼對長期財富累積如此重要？", "答案": "表面微小的差距，在時間的催化下，結局的差異很巨大，這就是失之毫釐，差之千里的真實上演", "類別": "複利效應"},
        {"問題": "資產配置的核心目標是什麼？", "答案": "犧牲少部分報酬來大幅減少不確定性（波動），而不是追求最高的報酬", "類別": "投資規劃"},
        {"問題": "為什麼要進行資產配置？", "答案": "學會與波動共處，提供穿越市場風暴、堅持到底的心理韌性", "類別": "投資規劃"},
        {"問題": "什麼是第二層思考？", "答案": "超越直觀效益、洞察長期因果關係的思維模式", "類別": "思維方式"},
        {"問題": "第一層思考與第二層思考的差別是什麼？", "答案": "第一層思考專注於單一、易於量化的目標；第二層思考則綜合考量機會成本、長期複利效應與個人風險管理等多個維度", "類別": "思維方式"},
        {"問題": "為什麼多問一位專家很重要？", "答案": "徵詢第二個意見可以有效補齊自身的知識盲點，多踏出一步就能發現更好的投資機會", "類別": "實務應用"},
        {"問題": "勞退自提6%的第九年翻轉點意味著什麼？", "答案": "從第九年起，自主投資策略所創造的財富增長，將超越政府操盤的勞退基金收益加上節稅優惠的總和", "類別": "個案研究"},
        {"問題": "選擇不提撥勞退6%的三大風險是什麼？", "答案": "個人因素風險（活不夠久、提早失能）、外部環境風險（政策改變）、個人行為風險（無法保持投資紀律）", "類別": "個案研究"},
        {"問題": "台灣人在資本配置上有什麼特色？", "答案": "將高達42%的資金配置於保險，而僅有18%在股票市場，相比美國人32%投入股市更為保守", "類別": "市場現況"},
        {"問題": "台灣保險滲透度在全世界排名如何？", "答案": "世界第1，平均每人有2.4張保單", "類別": "市場現況"},
        {"問題": "不同報酬率可比喻為什麼交通工具？", "答案": "1%定存如走路、4%高殖利率股如騎腳踏車、9%被動投資如開車、20%以上主動投資如開賽車", "類別": "投資比喻"},
        {"問題": "為什麼說20%以上的主動投資像開賽車？", "答案": "因為風險極高，雖然速度快但危險性也相對提升", "類別": "投資比喻"},
        {"問題": "投資操作、投資規劃、全方位理財三個層次的區別是什麼？", "答案": "投資操作是買賣具體金融商品；投資規劃是設定目標和策略；全方位理財是整合人生所有財務面向", "類別": "基礎概念"},
        {"問題": "為什麼多數人的理財會觸礁？", "答案": "因為混淆了投資操作、投資規劃、全方位理財三個層次，誤把投資操作視為理財的全部", "類別": "基礎概念"},
        {"問題": "保險規劃應該優先處理哪四大風險？", "答案": "死亡、失能、重疾、醫療四大風險", "類別": "保險規劃"},
        {"問題": "保險規劃錯誤會導致什麼後果？", "答案": "要麼經不起風險來襲，就是沒有多餘資源做投資，或因保費過高而排擠其他規劃的資金需求", "類別": "保險規劃"},
        {"問題": "為什麼退休規劃被稱為人生的財務大會考？", "答案": "因為它決定了我們晚年生活是否有尊嚴、有自由、有選擇權", "類別": "退休規劃"},
        {"問題": "退休規劃什麼時候開始最好？", "答案": "越早開始越好，即使初期資源不足，也能明確目標與達成速度", "類別": "退休規劃"},
        {"問題": "為什麼遺產規劃被稱為成功人士也可能倒下的最後一關？", "答案": "因為即使前面四項規劃都完美，不當的遺產規劃可能導致事業無法傳承，甚至引發家族爭產", "類別": "遺產規劃"},
        {"問題": "有溫度的遺產規劃應該包含什麼？", "答案": "應包含價值觀與人生智慧的傳承，不僅是找律師填寫表格", "類別": "遺產規劃"},
        {"問題": "財商認知的三個演進階段是什麼？", "答案": "第一階段：先理財再投資；第二階段：先理債再理財最後投資；第三階段：全方位理財的整合", "類別": "財商演進"},
        {"問題": "為什麼要將債務納入財商考量？", "答案": "優先處理高利息、無增值效益的壞債，將債務區分為好債與壞債", "類別": "債務管理"},
        {"問題": "全方位理財為什麼像籃球隊？", "答案": "需要五大支柱各司其職，緊密配合才能發揮1+1>2的綜效，不能讓五位球員都只會投籃", "類別": "團隊比喻"}
    ],

    quiz: [
        // 基礎題
        {
            "類型": "單選題",
            "題目": "全方位理財的五大支柱中，哪一個被稱為財務規劃的第一步？",
            "選項": ["A. 投資規劃", "B. 保險規劃", "C. 稅務規劃", "D. 退休規劃"],
            "答案": "B",
            "解析": "保險規劃是財務規劃的第一步與基石，目的是在風險來臨時保護家庭的財務根基。",
            "難度": "基礎"
        },
        {
            "類型": "單選題", 
            "題目": "根據雙十法則，保險預算應該不超過年收入的多少比例？",
            "選項": ["A. 5%", "B. 10%", "C. 15%", "D. 20%"],
            "答案": "B",
            "解析": "雙十法則：預算不超過年收入的10%，保額約年薪的10倍。",
            "難度": "基礎"
        },
        {
            "類型": "單選題",
            "題目": "愛因斯坦稱什麼為世界第八大奇蹟？",
            "選項": ["A. 通膨", "B. 複利", "C. 風險", "D. 時間"],
            "答案": "B", 
            "解析": "愛因斯坦稱複利為世界第八大奇蹟，強調複利在長期財富累積中的驚人力量。",
            "難度": "基礎"
        },
        {
            "類型": "是非題",
            "題目": "投資操作就等於投資規劃。",
            "答案": "否",
            "解析": "投資操作只是投資規劃下管理操作的一個環節，投資規劃的層次更高，需考慮六大要件。",
            "難度": "基礎"
        },
        {
            "類型": "填空題",
            "題目": "闕又上用______比喻來說明財務風險管理的重要性：如果只有駕馭3匹馬的能力，前面卻有5匹馬在跑，那隨時會翻車。",
            "答案": "馬車",
            "解析": "馬車比喻說明要有駕馭對應財務風險的能力，金錢就像馬匹。",
            "難度": "基礎"
        },
        {
            "類型": "填空題",
            "題目": "闕又上被路透社譽為「擊敗______的無名小子」。",
            "答案": "華爾街",
            "解析": "闕又上擁有近30年投資管理生涯，被路透社譽為擊敗華爾街的無名小子。",
            "難度": "基礎"
        },
        {
            "類型": "多選題",
            "題目": "全方位理財的五大支柱包括哪些？（可複選）",
            "選項": ["A. 保險規劃", "B. 稅務規劃", "C. 投資規劃", "D. 退休規劃", "E. 遺產規劃", "F. 債務規劃"],
            "答案": ["A", "B", "C", "D", "E"],
            "解析": "全方位理財的五大支柱：保險規劃、稅務規劃、投資規劃、退休規劃、遺產規劃。",
            "難度": "基礎"
        },
        {
            "類型": "是非題",
            "題目": "「以終為始」是全方位理財的核心規劃原則之一。",
            "答案": "是",
            "解析": "「以終為始」強調所有理財決策都應圍繞最終的人生目標來進行，是全方位理財的規劃智慧。",
            "難度": "基礎"
        },
        {
            "類型": "單選題",
            "題目": "全方位理財的五大支柱中，哪一項是為了應對如死亡、失能等重大風險？",
            "選項": ["A. 投資規劃", "B. 保險規劃", "C. 稅務規劃", "D. 退休規劃"],
            "答案": "B",
            "解析": "保險規劃的核心功能是風險管理，為家庭提供財務安全網，抵禦不可預測的意外風險。",
            "難度": "基礎"
        },
        {
            "類型": "單選題",
            "題目": "下列何者是「投資操作」層次的行為？",
            "選項": ["A. 設定退休金目標", "B. 決定股債比例", "C. 買進一張台積電股票", "D. 評估個人風險承受度"],
            "答案": "C",
            "解析": "投資操作指的是買賣具體的金融商品，而其他選項則屬於更高層次的「投資規劃」。",
            "難度": "基礎"
        },
        {
            "類型": "填空題",
            "題目": "全方位理財的比喻中，五大支柱常被比喻為一支______隊伍，各司其職。",
            "答案": "籃球",
            "解析": "就像籃球隊需要不同位置的球員協同作戰，理財的五大支柱也需要緊密配合才能發揮綜效。",
            "難度": "基礎"
        },
        {
            "類型": "多選題",
            "題目": "完整的投資規劃需要考慮哪些要素？（可複選）",
            "選項": ["A. 未來目標", "B. 時程長短", "C. 風險承受度", "D. 投資心理學"],
            "答案": ["A", "B", "C", "D"],
            "解析": "一個好的投資規劃至少需考慮六大要件：未來目標、時程、風險承受度、投資哲學、投資策略、投資心理學。",
            "難度": "基礎"
        },
        {
            "類型": "是非題",
            "題目": "根據闕又上的觀點，財商的演進應該是先投資，再理債，最後才理財。",
            "答案": "否",
            "解析": "正確的順序應為先理(壞)債，再理財，最後才進行投資。",
            "難度": "基礎"
        },
        {
            "類型": "單選題",
            "題目": "退休規劃最重要的行動準則是？",
            "選項": ["A. 等到錢夠多再開始", "B. 專注於高風險投資", "C. 早做比晚做好", "D. 完全依賴政府退休金"],
            "答案": "C",
            "解析": "因為複利效應，退休規劃越早開始越好，時間是累積財富最重要的朋友。",
            "難度": "基礎"
        },
        {
            "類型": "是非題",
            "題目": "遺產規劃只與高資產人士有關，一般家庭不需要考慮。",
            "答案": "否",
            "解析": "遺產規劃是愛的體現與責任的延伸，目的是避免紛爭，確保資產能依個人意願傳承，適用於所有家庭。",
            "難度": "基礎"
        },
        {
            "類型": "單選題",
            "題目": "在報酬率的交通工具比喻中，「開車」通常對應下列何種投資方式？",
            "選項": ["A. 1%定存", "B. 4%高殖利率股", "C. 9%被動投資", "D. 20%以上主動投資"],
            "答案": "C",
            "解析": "9%的被動投資如同開車，是相對穩健且能有效率到達目標的方式；20%以上則像開賽車，風險極高。",
            "難度": "基礎"
        },
        {
            "類型": "填空題",
            "題目": "72法則是用72除以年化報酬率，可以估算出______翻倍所需的時間。",
            "答案": "本金",
            "解析": "72法則是快速估算在特定報酬率下，本金翻倍所需年數的經驗法則。",
            "難度": "基礎"
        },
        // 中等題
        {
            "類型": "單選題",
            "題目": "9%和10%的年化報酬率經過50年複利後，差距約為多少？",
            "選項": ["A. 20%", "B. 35%", "C. 52%", "D. 68%"],
            "答案": "C",
            "解析": "9%報酬率的資產成長74倍，10%報酬率成長117倍，差距高達52.4%。這凸顯了微小報酬率差異在長期下的巨大影響。",
            "難度": "中等"
        },
        {
            "類型": "單選題",
            "題目": "資產配置的核心目標是什麼？",
            "選項": ["A. 追求最高報酬", "B. 完全避免風險", "C. 犧牲少部分報酬來大幅減少波動", "D. 集中投資單一標的"],
            "答案": "C",
            "解析": "資產配置的核心目標是犧牲少部分報酬來大幅減少不確定性（波動），而非追求最高報酬。",
            "難度": "中等"
        },
        {
            "類型": "是非題",
            "題目": "複利效應只適用於投資理財，不適用於人生其他方面。",
            "答案": "否",
            "解析": "複利觀念不只在投資理財，也包含在人生中，如知識學習、技能累積、人脈經營等，長期堅持都能產生複利效應。",
            "難度": "中等"
        },
        {
            "類型": "單選題",
            "題目": "為何資產配置中通常會加入「美國公債」？",
            "選項": ["A. 因為它的報酬率最高", "B. 因為它與股票走勢通常是負相關", "C. 因為它完全沒有風險", "D. 因為它可以免稅"],
            "答案": "B",
            "解析": "美國公債與股票的負相關性，使其在股市下跌時能起到穩定投資組合的作用，是降低波動性的關鍵角色。",
            "難度": "中等"
        },
        {
            "類型": "是非題",
            "題目": "資產配置的目的是為了追求最高的報酬率。",
            "答案": "否",
            "解析": "資產配置的首要目標是降低波動性與不確定性，提升投資旅程的平穩度，通常會犧牲部分潛在報酬。",
            "難度": "中等"
        },
        {
            "類型": "單選題",
            "題目": "「第一層思考」的主要特徵是什麼？",
            "選項": ["A. 考慮長期複利效應", "B. 專注於單一、立即且明確的利益", "C. 評估多種方案的機會成本", "D. 洞察長期的因果關係"],
            "答案": "B",
            "解析": "第一層思考傾向於簡化問題，專注於表面、直接且易於量化的目標，例如只為了眼前的節稅而做決策。",
            "難度": "中等"
        },
        {
            "類型": "單選題",
            "題目": "相較於美國，台灣民眾的資金配置有何顯著特點？",
            "選項": ["A. 股票比例較高", "B. 房地產比例極低", "C. 保險比例顯著偏高", "D. 現金持有比例最低"],
            "答案": "C",
            "解析": "數據顯示台灣人將高達42%的資金配置於保險，遠高於美國，這排擠了可用於投資的資金，影響長期財富累積。",
            "難度": "中等"
        },
        {
            "類型": "多選題",
            "題目": "選擇不提撥勞退6%轉而自主投資，可能面臨哪些潛在風險？（可複選）",
            "選項": ["A. 無法保持投資紀律", "B. 未來稅法政策改變", "C. 因提早失能導致計畫中斷", "D. 政府基金績效突然飆升"],
            "答案": ["A", "B", "C"],
            "解析": "自主投資需面對個人行為風險（紀律）、外部環境風險（政策）與個人因素風險（意外/失能），這些都需要完整的全方位理財規劃來應對。",
            "難度": "中等"
        },
        {
            "類型": "是非題",
            "題目": "一個好的投資組合，其夏普率(Sharpe Ratio)應該越高越好。",
            "答案": "是",
            "解析": "夏普率衡量的是每承受一單位風險所能獲得的超額報酬，數值越高代表投資組合的風險調整後回報越佳。",
            "難度": "中等"
        },
        {
            "類型": "單選題",
            "題目": "什麼是「延稅效益」？",
            "選項": ["A. 政府直接免除你的稅款", "B. 將應繳稅款延後繳納，讓稅金本身也能參與複利投資", "C. 每年退稅金額會增加", "D. 退休後領錢完全不用繳稅"],
            "答案": "B",
            "解析": "延稅效益的核心是讓本應上繳的稅金，得以在帳戶中持續進行複利再投資，從而放大長期回報。",
            "難度": "中等"
        },
        {
            "類型": "單選題",
            "題目": "為何說多數人的理財之所以會觸礁，是因為混淆了三個層次？",
            "選項": ["A. 他們不懂得如何選股", "B. 他們誤把「投資操作」當成理財的全部", "C. 他們保險買得太少", "D. 他們沒有進行稅務規劃"],
            "答案": "B",
            "解析": "將「投資操作」等同於理財的全部，會忽略更宏觀的「投資規劃」與「全方位理財」，導致決策缺乏目標與系統性。",
            "難度": "中等"
        },
        {
            "類型": "是非題",
            "題目": "同時投資台積電和聯發科兩支股票，是一種有效的風險分散。",
            "答案": "否",
            "解析": "這兩家公司都屬於半導體產業，走勢高度相關，無法有效分散產業性風險，屬於「偽分散」。",
            "難度": "中等"
        },
        {
            "類型": "填空題",
            "題目": "勞退自提6%的個案研究中，自主投資的效益超越勞退基金加節稅的總和，這個交叉點被稱為第9年的______。",
            "答案": "翻轉點",
            "解析": "「翻轉點」意味著從那一刻起，自主投資的長期複利效應，開始超越了勞退自提的短期節稅與保守收益。",
            "難度": "中等"
        },
        {
            "類型": "單選題",
            "題目": "在財商演進的第二階段，被納入考量的關鍵因素是什麼？",
            "選項": ["A. 保險", "B. 遺產", "C. 債務", "D. 稅務"],
            "答案": "C",
            "解析": "財商演進的第二階段是納入總體經濟學視角，將「債」視為關鍵因素，並區分好債與壞債。",
            "難度": "中等"
        },
        {
            "類型": "多選題",
            "題目": "下列哪些屬於「壞債」的特徵？（可複選）",
            "選項": ["A. 用於購買自住房的房貸", "B. 高利率的信用卡循環利息", "C. 用於消費的個人信貸", "D. 用於創業的低利貸款"],
            "答案": ["B", "C"],
            "解析": "壞債通常指高利息、且無法帶來資產增值的債務，如卡債和消費性貸款，應優先處理。",
            "難度": "中等"
        },
        {
            "類型": "單選題",
            "題目": "為什麼說「有溫度的遺產規劃」不只是分配財產？",
            "選項": ["A. 因為可以節省最多稅金", "B. 因為它還包含價值觀與人生智慧的傳承", "C. 因為律師收費比較高", "D. 因為需要購買儲蓄險"],
            "答案": "B",
            "解析": "有溫度的遺產規劃是愛的最終體現，將冰冷的資產轉化為對家人最後的叮嚀、祝福與永續的愛。",
            "難度": "中等"
        },
        // 進階題
        {
            "類型": "單選題",
            "題目": "關於勞退自提6%，「第二層思考」會問的核心問題是？",
            "選項": ["A. 我今年可以省下多少稅？", "B. 政府的基金經理人是誰？", "C. 將這筆錢自主投資的長期複利，是否能勝過眼前的節稅利益與保守收益？", "D. 勞退基金的歷史最高報酬率是多少？"],
            "答案": "C",
            "解析": "第二層思考超越了表面的節稅利益，引入了機會成本和長期複利的概念進行權衡分析，這是一個更深層次的決策邏輯。",
            "難度": "進階"
        },
        {
            "類型": "是非題",
            "題目": "在資產配置中，只要持有的資產種類夠多，就一定能有效降低風險。",
            "答案": "否",
            "解析": "無效。如果持有的多種資產走勢高度相關（例如同時持有多支科技股），則無法達到分散風險的效果，這被稱為「偽分散」。",
            "難度": "進階"
        },
        {
            "類型": "單選題",
            "題目": "下列哪一組資產組合最可能屬於「偽分散」？",
            "選項": ["A. 股票與美國公債", "B. 股票與高收益債券", "C. 股票與黃金", "D. 科技股與傳產股"],
            "答案": "B",
            "解析": "高收益債券（垃圾債）與股市的連動性較高，在市場恐慌時往往會一同下跌，因此無法有效分散風險。",
            "難度": "進階"
        },
        {
            "類型": "單選題",
            "題目": "為何作者認為台灣的退休金制度是民眾退休金不足的元兇之一？",
            "選項": ["A. 因為提撥率太低", "B. 因為制度過於複雜", "C. 因為制度的保守操作，長期績效難以跟上市場成長", "D. 因為請領年齡太晚"],
            "答案": "C",
            "解析": "台灣的勞退金制度因其保守的操作，長期績效難以與一流企業的成長同步，導致複利效果不彰，是造成退休金缺口的原因之一。",
            "難度": "進階"
        },
        {
            "類型": "多選題",
            "題目": "全方位理財的「綜效」體現在哪些方面？（可複選）",
            "選項": ["A. 穩固的保險規劃能保護投資計畫不被意外中斷", "B. 合法節稅省下的錢可以再投入投資，加速複利", "C. 良好的投資績效能讓退休規劃提早達標", "D. 妥善的遺產規劃確保退休資產順利傳承"],
            "答案": ["A", "B", "C", "D"],
            "解析": "綜效是指五大支柱環環相扣、彼此支援。任何一項的缺失都可能影響其他部分，反之，規劃得當則能發揮1+1>2的效果。",
            "難度": "進階"
        },
        {
            "類型": "是非題",
            "題目": "根據馬斯洛需求層次理論，購買保險主要是在滿足「自我實現」的需求。",
            "答案": "否",
            "解析": "購買保險、建立緊急預備金，主要是在滿足最底層的「生理與安全需求」，確保家庭在面臨風險時，基本生活不受威脅。",
            "難度": "進階"
        },
        {
            "類型": "單選題",
            "題目": "彼得·林區投資La Quinta Motor Inns的故事，給予投資者的核心啟示是？",
            "選項": ["A. 應該只投資自己熟悉的產業", "B. 飯店業是個好行業", "C. 徵詢第二個專業意見能幫助發現知識盲點與機會", "D. 好的投資機會都在日常生活中"],
            "答案": "C",
            "解析": "這個故事的核心在於，透過請教不同領域的專家，可以補齊自身的知識盲點，避免「鐵鎚人傾向」，從而做出更全面的決策。",
            "難度": "進階"
        },
        {
            "類型": "填空題",
            "題目": "評估風險調整後回報的常用指標是______，這個數值越高代表承受每單位風險所獲得的報酬越高。",
            "答案": "夏普率",
            "解析": "夏普率（Sharpe Ratio）是衡量投資組合績效的重要指標，它考量了風險因素，而非只看絕對報酬率。",
            "難度": "進階"
        },
        {
            "類型": "單選題",
            "題目": "將理財計畫比喻為「一本假理財，真談愛的書」，其背後的核心情感驅動力不包含下列何者？",
            "選項": ["A. 對家人的責任感", "B. 追求市場最高報酬的慾望", "C. 希望給予家人安心的承諾", "D. 為了獲得更多自由時間陪伴家人"],
            "答案": "B",
            "解析": "這個比喻強調理財的本質是愛與責任，是願意為家人做出短暫犧牲的無私奉獻，而非單純追求冰冷的數字成長或市場績效。",
            "難度": "進階"
        },
        // 應用題
        {
            "類型": "單選題",
            "題目": "一位30歲的年輕工程師，年收入百萬，剛組建家庭。根據全方位理財的原則，他現階段最應優先處理的財務規劃是？",
            "選項": ["A. 積極研究個股，追求資產快速翻倍", "B. 將大部分收入投入退休金帳戶", "C. 建立足夠的緊急預備金與家庭保障型保險", "D. 研究遺產稅法，規劃百年後的財產分配"],
            "答案": "C",
            "解析": "對於剛建立家庭的年輕人，首要任務是建立風險防護網（保險）和應對突發狀況的流動資金（緊急預備金），這是所有財務規劃的基石。",
            "難度": "應用"
        },
        {
            "類型": "單選題",
            "題目": "小陳為了節稅，每年都將勞退自提6%提滿。這屬於何種思維層次？",
            "選項": ["A. 零層次思考", "B. 第一層思考", "C. 第二層思考", "D. 全方位思考"],
            "答案": "B",
            "解析": "只看到「節稅」這個立即、單一的利益，而未評估機會成本與長期複利效果，是典型的「第一層思考」。",
            "難度": "應用"
        },
        {
            "類型": "多選題",
            "題目": "一位投資者因為害怕市場下跌，將所有股票賣出，轉為持有現金。這主要暴露了他在哪方面的風險？（可複選）",
            "選項": ["A. 個人行為風險（無法保持投資紀律）", "B. 投資規劃中的風險承受度評估不足", "C. 外部環境風險", "D. 缺乏保險規劃"],
            "答案": ["A", "B"],
            "解析": "這種追高殺低的行為是典型的「個人行為風險」，也反映出其在制定「投資規劃」時，未能誠實或準確地評估自己的風險承受度。",
            "難度": "應用"
        },
        {
            "類型": "單選題",
            "題目": "王先生想為10年後的子女教育基金進行投資，但他無法承受超過15%的帳面虧損。這份資訊主要對應到投資規劃六大要件中的哪兩項？",
            "選項": ["A. 投資哲學與投資心理學", "B. 未來目標與主被動投資", "C. 時程長短與風險承受度", "D. 未來目標與時程長短"],
            "答案": "C",
            "解析": "「10年後」對應「時程長短」，「無法承受超過15%虧損」對應「風險承受度」。這兩者是制定合適投資策略的關鍵。",
            "難度": "應用"
        },
        {
            "類型": "是非題",
            "題目": "如果一位理財顧問告訴你，他有一種保單可以同時完美解決你的保障、投資、退休和節稅所有問題，這通常是一個可靠且高效的方案。",
            "答案": "否",
            "解析": "這種「萬能」的產品通常在各方面都無法做到最好，且費用可能偏高。全方位理財強調的是各領域的協同作戰，而非依賴單一產品。",
            "難度": "應用"
        },
        {
            "類型": "單選題",
            "題目": "李太太是一位保守的投資者，她希望本金絕對安全，所以將所有退休金都放在銀行定存。三十年後，她可能面臨的最大風險是什麼？",
            "選項": ["A. 銀行倒閉風險", "B. 利率下降風險", "C. 購買力被通膨侵蝕的風險", "D. 匯率波動風險"],
            "答案": "C",
            "解析": "無法承受「適度」的風險，才是最大的風險。長期來看，通膨會嚴重侵蝕固定收益資產的購買力，導致資產實質上是貶值的。",
            "難度": "應用"
        },
        {
            "類型": "單選題",
            "題目": "一位投資者取消了勞退自提，打算將資金投入0050 ETF。為了應對「個人行為風險」，他最應該搭配的策略是？",
            "選項": ["A. 每天看盤，隨時準備賣出", "B. 設定定期定額投入，並堅持執行", "C. 借錢加碼投資", "D. 頻繁更換投資標的"],
            "答案": "B",
            "解析": "定期定額是一種自動化紀律，可以有效克服人性中追高殺低的弱點，是應對「個人行為風險」最有效的策略之一。",
            "難度": "應用"
        }
    ],

    dashboardData: {
        pillars: {
            labels: ['保險規劃', '稅務規劃', '投資規劃', '退休規劃', '遺產規劃'],
            data: [20, 20, 20, 20, 20],
            colors: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6']
        },
        compound: {
            years: Array.from({length: 51}, (_, i) => i),
            rate9: Array.from({length: 51}, (_, i) => Math.pow(1.09, i)),
            rate10: Array.from({length: 51}, (_, i) => Math.pow(1.10, i))
        },
        allocation: {
            taiwan: { insurance: 42, stocks: 18, others: 40 },
            usa: { insurance: 15, stocks: 32, others: 53 }
        },
        vehicles: {
            methods: ['1% 定存', '4% 高殖利率股', '9% 被動投資', '20%+ 主動投資'],
            descriptions: ['走路', '騎腳踏車', '開車', '開賽車'],
            returns: [1, 4, 9, 20],
            risks: [1, 3, 5, 9]
        },
        pension: {
            years: Array.from({length: 21}, (_, i) => i),
            selfInvest: Array.from({length: 21}, (_, i) => i < 9 ? i * 0.5 : i * 1.2),
            laborPension: Array.from({length: 21}, (_, i) => i * 0.8)
        }
    }
};

// 全域變數
let currentSection = 'home';
let currentCardIndex = 0;
let currentQuizIndex = 0;
let quizStartTime = null;
let quizAnswers = [];
let isFlashcardFlipped = false;
let filteredFlashcards = [...appData.flashcards];
let filteredQuiz = [...appData.quiz];
let learningStats = {
    learned: 0,
    correct: 0,
    total: 0
};

// DOM 元素引用
const navLinks = document.querySelectorAll('.nav-link');
const contentSections = document.querySelectorAll('.content-section');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

// 初始化應用程式
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeCharts();
    initializeFlashcards();
    initializeQuiz();
    loadUserProgress();
});

// ==================== 導航功能 ====================
function initializeNavigation() {
    // 導航連結點擊事件
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.getAttribute('data-section');
            if (section) {
                showSection(section);

                // 更新導航狀態
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');

                // 關閉手機選單
                const navMenu = document.getElementById('nav-menu');
                if (navMenu) navMenu.classList.remove('active');
            }
        });
    });

    // 手機選單切換
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // 功能卡片點擊事件
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('click', () => {
            const section = card.getAttribute('data-section');
            if (section) {
                showSection(section);
                // 更新導航狀態
                navLinks.forEach(l => l.classList.remove('active'));
                const navLink = document.querySelector(`[data-section="${section}"]`);
                if (navLink) navLink.classList.add('active');
            }
        });
    });
}

function showSection(sectionId) {
    const contentSections = document.querySelectorAll('.content-section');
    contentSections.forEach(section => {
        section.classList.remove('active');
    });

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        currentSection = sectionId;

        // 特定頁面的初始化
        if (sectionId === 'dashboard') {
            setTimeout(initializeCharts, 100);
        } else if (sectionId === 'flashcards') {
            updateFlashcardDisplay();
        } else if (sectionId === 'quiz') {
            resetQuiz();
        }
    }
}

// ==================== 圖表功能 ====================
function initializeCharts() {
    if (currentSection !== 'dashboard') return;

    // 五大支柱圓餅圖
    const pillarsCtx = document.getElementById('pillarsChart');
    if (pillarsCtx && !pillarsCtx.chartInstance) {
        pillarsCtx.chartInstance = new Chart(pillarsCtx, {
            type: 'pie',
            data: {
                labels: appData.dashboardData.pillars.labels,
                datasets: [{
                    data: appData.dashboardData.pillars.data,
                    backgroundColor: appData.dashboardData.pillars.colors,
                    borderWidth: 2,
                    borderColor: '#ffffff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            usePointStyle: true
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.label + ': ' + context.parsed + '%';
                            }
                        }
                    }
                }
            }
        });
    }

    // 複利效應對比圖
    const compoundCtx = document.getElementById('compoundChart');
    if (compoundCtx && !compoundCtx.chartInstance) {
        compoundCtx.chartInstance = new Chart(compoundCtx, {
            type: 'line',
            data: {
                labels: [0, 10, 20, 30, 40, 50],
                datasets: [{
                    label: '9% 年化報酬率',
                    data: [1, 2.37, 5.60, 13.27, 31.41, 74.36],
                    borderColor: '#3b82f6',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    tension: 0.4
                }, {
                    label: '10% 年化報酬率',
                    data: [1, 2.59, 6.73, 17.45, 45.26, 117.39],
                    borderColor: '#10b981',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.dataset.label + ': ' + context.parsed.y.toFixed(1) + '倍';
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: '年數'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: '資產倍數'
                        }
                    }
                }
            }
        });
    }

    // 台美資產配置對比圖
    const allocationCtx = document.getElementById('allocationChart');
    if (allocationCtx && !allocationCtx.chartInstance) {
        allocationCtx.chartInstance = new Chart(allocationCtx, {
            type: 'bar',
            data: {
                labels: ['保險', '股票', '其他'],
                datasets: [{
                    label: '台灣',
                    data: [42, 18, 40],
                    backgroundColor: '#3b82f6'
                }, {
                    label: '美國',
                    data: [15, 32, 53],
                    backgroundColor: '#10b981'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top'
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: '資產類別'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: '配置比例 (%)'
                        },
                        max: 60
                    }
                }
            }
        });
    }

    // 風險報酬交通工具比喻圖
    const vehicleCtx = document.getElementById('vehicleChart');
    if (vehicleCtx && !vehicleCtx.chartInstance) {
        vehicleCtx.chartInstance = new Chart(vehicleCtx, {
            type: 'scatter',
            data: {
                datasets: [{
                    label: '投資方式',
                    data: [
                        {x: 1, y: 1, label: '1% 定存 (走路)'},
                        {x: 3, y: 4, label: '4% 高殖利率股 (騎腳踏車)'},
                        {x: 5, y: 9, label: '9% 被動投資 (開車)'},
                        {x: 9, y: 20, label: '20%+ 主動投資 (開賽車)'}
                    ],
                    backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'],
                    pointRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.raw.label;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: '風險等級'
                        },
                        max: 10
                    },
                    y: {
                        title: {
                            display: true,
                            text: '預期報酬率 (%)'
                        },
                        max: 25
                    }
                }
            }
        });
    }

    // 勞退自提分析圖
    const pensionCtx = document.getElementById('pensionChart');
    if (pensionCtx && !pensionCtx.chartInstance) {
        const years = Array.from({length: 16}, (_, i) => i + 1);
        const selfInvestData = years.map(year => year < 9 ? year * 0.8 : year * 1.3);
        const laborPensionData = years.map(year => year * 1.0);

        pensionCtx.chartInstance = new Chart(pensionCtx, {
            type: 'line',
            data: {
                labels: years,
                datasets: [{
                    label: '自主投資策略',
                    data: selfInvestData,
                    borderColor: '#3b82f6',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    tension: 0.4
                }, {
                    label: '勞退基金+節稅',
                    data: laborPensionData,
                    borderColor: '#f59e0b',
                    backgroundColor: 'rgba(245, 158, 11, 0.1)',
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top'
                    },
                    tooltip: {
                        callbacks: {
                            afterLabel: function(context) {
                                if (context.dataIndex === 8) {
                                    return '第9年：翻轉點';
                                }
                                return '';
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: '年數'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: '累積效益'
                        }
                    }
                }
            }
        });
    }
}

// ==================== 學習閃卡功能 ====================
function initializeFlashcards() {
    // 類別選擇器初始化
    const categoryFilter = document.getElementById('categoryFilter');
    if (categoryFilter) {
        const categories = [...new Set(appData.flashcards.map(card => card.類別))];
        categoryFilter.innerHTML = '<option value="all">所有類別</option>';
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            categoryFilter.appendChild(option);
        });
        categoryFilter.addEventListener('change', filterFlashcards);
    }

    // 控制按鈕事件綁定
    const shuffleBtn = document.getElementById('shuffleBtn');
    const resetProgressBtn = document.getElementById('resetProgressBtn');
    const prevCardBtn = document.getElementById('prevCard');
    const nextCardBtn = document.getElementById('nextCard');
    const flipCardBtn = document.getElementById('flipCard');

    if (shuffleBtn) shuffleBtn.addEventListener('click', shuffleFlashcards);
    if (resetProgressBtn) resetProgressBtn.addEventListener('click', resetLearningProgress);
    if (prevCardBtn) prevCardBtn.addEventListener('click', () => navigateCard(-1));
    if (nextCardBtn) nextCardBtn.addEventListener('click', () => navigateCard(1));
    if (flipCardBtn) flipCardBtn.addEventListener('click', flipCard);

    // 閃卡點擊翻轉
    const flashcard = document.getElementById('flashcard');
    if (flashcard) {
        flashcard.addEventListener('click', flipCard);
    }

    updateFlashcardDisplay();
}

function filterFlashcards() {
    const categoryFilter = document.getElementById('categoryFilter');
    const selectedCategory = categoryFilter ? categoryFilter.value : 'all';

    if (selectedCategory === 'all') {
        filteredFlashcards = [...appData.flashcards];
    } else {
        filteredFlashcards = appData.flashcards.filter(card => card.類別 === selectedCategory);
    }

    currentCardIndex = 0;
    updateFlashcardDisplay();
}

function shuffleFlashcards() {
    for (let i = filteredFlashcards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [filteredFlashcards[i], filteredFlashcards[j]] = [filteredFlashcards[j], filteredFlashcards[i]];
    }
    currentCardIndex = 0;
    updateFlashcardDisplay();
}

function navigateCard(direction) {
    const newIndex = currentCardIndex + direction;
    if (newIndex >= 0 && newIndex < filteredFlashcards.length) {
        currentCardIndex = newIndex;
        isFlashcardFlipped = false;
        updateFlashcardDisplay();
    }
}

function flipCard() {
    const flashcard = document.getElementById('flashcard');
    isFlashcardFlipped = !isFlashcardFlipped;
    flashcard.classList.toggle('flipped', isFlashcardFlipped);

    // 更新學習統計
    if (isFlashcardFlipped && !flashcard.dataset.learned) {
        learningStats.learned++;
        learningStats.total++;
        flashcard.dataset.learned = 'true';
        updateLearningStats();
        saveUserProgress();
    }
}

function updateFlashcardDisplay() {
    if (filteredFlashcards.length === 0) return;

    const currentCard = filteredFlashcards[currentCardIndex];
    if (!currentCard) return;

    // 更新卡片內容
    const cardCategory = document.getElementById('cardCategory');
    const cardQuestion = document.getElementById('cardQuestion');
    const cardAnswer = document.getElementById('cardAnswer');
    const currentCardSpan = document.getElementById('currentCard');
    const totalCardsSpan = document.getElementById('totalCards');
    const progressFill = document.getElementById('progressFill');

    if (cardCategory) cardCategory.textContent = currentCard.類別;
    if (cardQuestion) cardQuestion.textContent = currentCard.問題;
    if (cardAnswer) cardAnswer.textContent = currentCard.答案;
    if (currentCardSpan) currentCardSpan.textContent = currentCardIndex + 1;
    if (totalCardsSpan) totalCardsSpan.textContent = filteredFlashcards.length;

    // 更新進度條
    if (progressFill) {
        const progress = ((currentCardIndex + 1) / filteredFlashcards.length) * 100;
        progressFill.style.width = progress + '%';
    }

    // 更新按鈕狀態
    const prevBtn = document.getElementById('prevCard');
    const nextBtn = document.getElementById('nextCard');

    if (prevBtn) prevBtn.disabled = currentCardIndex === 0;
    if (nextBtn) nextBtn.disabled = currentCardIndex === filteredFlashcards.length - 1;

    // 重置翻轉狀態
    const flashcard = document.getElementById('flashcard');
    if (flashcard) {
        flashcard.classList.remove('flipped');
        isFlashcardFlipped = false;
    }
}

function resetLearningProgress() {
    learningStats = { learned: 0, correct: 0, total: 0 };
    updateLearningStats();
    saveUserProgress();

    // 重置所有卡片狀態
    const flashcards = document.querySelectorAll('.flashcard');
    flashcards.forEach(card => {
        delete card.dataset.learned;
    });
}

function updateLearningStats() {
    const learnedCount = document.getElementById('learnedCount');
    const correctRate = document.getElementById('correctRate');

    if (learnedCount) {
        learnedCount.textContent = learningStats.learned;
    }

    if (correctRate) {
        const rate = learningStats.total > 0 ? 
            Math.round((learningStats.correct / learningStats.total) * 100) : 0;
        correctRate.textContent = rate + '%';
    }
}

// ==================== 測驗功能 ====================
function initializeQuiz() {
    // 篩選器
    const typeFilter = document.getElementById('typeFilter');
    const difficultyFilter = document.getElementById('difficultyFilter');
    const startQuizBtn = document.getElementById('startQuiz');

    if (typeFilter) typeFilter.addEventListener('change', filterQuiz);
    if (difficultyFilter) difficultyFilter.addEventListener('change', filterQuiz);
    if (startQuizBtn) startQuizBtn.addEventListener('click', startQuiz);

    // 測驗控制按鈕
    const prevQuestionBtn = document.getElementById('prevQuestion');
    const nextQuestionBtn = document.getElementById('nextQuestion');
    const submitAnswerBtn = document.getElementById('submitAnswer');
    const finishQuizBtn = document.getElementById('finishQuiz');
    const retakeQuizBtn = document.getElementById('retakeQuiz');

    if (prevQuestionBtn) prevQuestionBtn.addEventListener('click', () => navigateQuestion(-1));
    if (nextQuestionBtn) nextQuestionBtn.addEventListener('click', () => navigateQuestion(1));
    if (submitAnswerBtn) submitAnswerBtn.addEventListener('click', submitAnswer);
    if (finishQuizBtn) finishQuizBtn.addEventListener('click', finishQuiz);
    if (retakeQuizBtn) retakeQuizBtn.addEventListener('click', resetQuiz);

    // 初始化篩選
    filterQuiz();
}

function filterQuiz() {
    const typeFilter = document.getElementById('typeFilter');
    const difficultyFilter = document.getElementById('difficultyFilter');

    const selectedType = typeFilter ? typeFilter.value : 'all';
    const selectedDifficulty = difficultyFilter ? difficultyFilter.value : 'all';

    filteredQuiz = appData.quiz.filter(question => {
        const typeMatch = selectedType === 'all' || question.類型 === selectedType;
        const difficultyMatch = selectedDifficulty === 'all' || question.難度 === selectedDifficulty;
        return typeMatch && difficultyMatch;
    });

    // 更新開始按鈕文字
    const startQuizBtn = document.getElementById('startQuiz');
    if (startQuizBtn) {
        startQuizBtn.textContent = `開始測驗 (${filteredQuiz.length}題)`;
    }
}

function startQuiz() {
    if (filteredQuiz.length === 0) {
        alert('目前沒有符合條件的題目，請調整篩選條件。');
        return;
    }

    currentQuizIndex = 0;
    quizAnswers = [];
    quizStartTime = new Date();

    // 顯示測驗容器
    const quizContainer = document.getElementById('quizContainer');
    const quizResults = document.getElementById('quizResults');

    if (quizContainer) quizContainer.style.display = 'block';
    if (quizResults) quizResults.style.display = 'none';

    // 更新總題數
    const totalQuestions = document.getElementById('totalQuestions');
    if (totalQuestions) {
        totalQuestions.textContent = filteredQuiz.length;
    }

    // 開始計時器
    startQuizTimer();

    // 顯示第一題
    displayQuestion();
}

function startQuizTimer() {
    const timerElement = document.getElementById('quizTimer');

    const updateTimer = () => {
        if (quizStartTime) {
            const elapsed = new Date() - quizStartTime;
            const minutes = Math.floor(elapsed / 60000);
            const seconds = Math.floor((elapsed % 60000) / 1000);

            if (timerElement) {
                timerElement.textContent = 
                    String(minutes).padStart(2, '0') + ':' + 
                    String(seconds).padStart(2, '0');
            }
        }
    };

    setInterval(updateTimer, 1000);
}

function displayQuestion() {
    const currentQuestion = filteredQuiz[currentQuizIndex];
    if (!currentQuestion) return;

    // 更新問題資訊
    const currentQuestionSpan = document.getElementById('currentQuestion');
    const questionType = document.getElementById('questionType');
    const questionDifficulty = document.getElementById('questionDifficulty');
    const questionText = document.getElementById('questionText');
    const questionOptions = document.getElementById('questionOptions');

    if (currentQuestionSpan) {
        currentQuestionSpan.textContent = currentQuizIndex + 1;
    }

    if (questionType) {
        questionType.textContent = currentQuestion.類型;
    }

    if (questionDifficulty) {
        questionDifficulty.textContent = currentQuestion.難度;
    }

    if (questionText) {
        questionText.textContent = currentQuestion.題目;
    }

    // 生成選項
    if (questionOptions) {
        questionOptions.innerHTML = '';

        if (currentQuestion.類型 === '填空題') {
            const input = document.createElement('input');
            input.type = 'text';
            input.className = 'fill-blank-input';
            input.style.cssText = 'width: 100%; padding: 12px; border: 2px solid #e5e7eb; border-radius: 8px; font-size: 16px;';
            input.placeholder = '請輸入答案...';
            questionOptions.appendChild(input);
        } else if (currentQuestion.類型 === '是非題') {
            ['是', '否'].forEach((option, index) => {
                const optionDiv = document.createElement('div');
                optionDiv.className = 'option-item';
                optionDiv.dataset.value = option;

                const radio = document.createElement('input');
                radio.type = 'radio';
                radio.name = 'quiz-option';
                radio.id = `option-${index}`;
                radio.value = option;

                const label = document.createElement('label');
                label.htmlFor = `option-${index}`;
                label.className = 'option-text';
                label.textContent = option;

                optionDiv.appendChild(radio);
                optionDiv.appendChild(label);

                optionDiv.addEventListener('click', () => {
                    document.querySelectorAll('.option-item').forEach(item => {
                        item.classList.remove('selected');
                    });
                    optionDiv.classList.add('selected');
                    radio.checked = true;
                });

                questionOptions.appendChild(optionDiv);
            });
        } else if (currentQuestion.選項) {
            currentQuestion.選項.forEach((option, index) => {
                const optionDiv = document.createElement('div');
                optionDiv.className = 'option-item';
                optionDiv.dataset.value = option.charAt(0);

                if (currentQuestion.類型 === '多選題') {
                    const checkbox = document.createElement('input');
                    checkbox.type = 'checkbox';
                    checkbox.id = `option-${index}`;
                    checkbox.value = option.charAt(0);

                    const label = document.createElement('label');
                    label.htmlFor = `option-${index}`;
                    label.className = 'option-text';
                    label.textContent = option;

                    optionDiv.appendChild(checkbox);
                    optionDiv.appendChild(label);

                    optionDiv.addEventListener('click', () => {
                        const checkbox = optionDiv.querySelector('input[type="checkbox"]');
                        checkbox.checked = !checkbox.checked;
                        optionDiv.classList.toggle('selected', checkbox.checked);
                    });
                } else {
                    const radio = document.createElement('input');
                    radio.type = 'radio';
                    radio.name = 'quiz-option';
                    radio.id = `option-${index}`;
                    radio.value = option.charAt(0);

                    const label = document.createElement('label');
                    label.htmlFor = `option-${index}`;
                    label.className = 'option-text';
                    label.textContent = option;

                    optionDiv.appendChild(radio);
                    optionDiv.appendChild(label);

                    optionDiv.addEventListener('click', () => {
                        document.querySelectorAll('.option-item').forEach(item => {
                            item.classList.remove('selected');
                        });
                        optionDiv.classList.add('selected');
                        radio.checked = true;
                    });
                }

                questionOptions.appendChild(optionDiv);
            });
        }
    }

    // 更新按鈕狀態
    updateQuizButtons();

    // 隱藏反饋
    const questionFeedback = document.getElementById('questionFeedback');
    if (questionFeedback) {
        questionFeedback.style.display = 'none';
    }
}

function updateQuizButtons() {
    const prevBtn = document.getElementById('prevQuestion');
    const nextBtn = document.getElementById('nextQuestion');
    const submitBtn = document.getElementById('submitAnswer');
    const finishBtn = document.getElementById('finishQuiz');

    if (prevBtn) {
        prevBtn.disabled = currentQuizIndex === 0;
    }

    if (nextBtn) {
        nextBtn.style.display = 'none';
        nextBtn.disabled = true;
    }

    if (submitBtn) {
        submitBtn.style.display = 'block';
    }

    if (finishBtn) {
        finishBtn.style.display = 'none';
    }
}

function submitAnswer() {
    const currentQuestion = filteredQuiz[currentQuizIndex];
    let userAnswer = null;

    // 獲取使用者答案
    if (currentQuestion.類型 === '填空題') {
        const input = document.querySelector('.fill-blank-input');
        userAnswer = input ? input.value.trim() : '';
    } else if (currentQuestion.類型 === '多選題') {
        const checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
        userAnswer = Array.from(checkedBoxes).map(cb => cb.value);
    } else {
        const selectedRadio = document.querySelector('input[type="radio"]:checked');
        userAnswer = selectedRadio ? selectedRadio.value : null;
    }

    // 檢查答案
    let isCorrect = false;
    if (currentQuestion.類型 === '多選題') {
        const correctAnswers = Array.isArray(currentQuestion.答案) ? currentQuestion.答案 : [currentQuestion.答案];
        isCorrect = userAnswer && userAnswer.length === correctAnswers.length && 
                   userAnswer.every(ans => correctAnswers.includes(ans));
    } else {
        isCorrect = userAnswer === currentQuestion.答案;
    }

    // 儲存答案
    quizAnswers[currentQuizIndex] = {
        question: currentQuestion,
        userAnswer: userAnswer,
        isCorrect: isCorrect
    };

    // 顯示反饋
    showAnswerFeedback(isCorrect, currentQuestion);

    // 更新按鈕狀態
    const submitBtn = document.getElementById('submitAnswer');
    const nextBtn = document.getElementById('nextQuestion');
    const finishBtn = document.getElementById('finishQuiz');

    if (submitBtn) submitBtn.style.display = 'none';

    if (currentQuizIndex < filteredQuiz.length - 1) {
        if (nextBtn) {
            nextBtn.style.display = 'block';
            nextBtn.disabled = false;
        }
    } else {
        if (finishBtn) finishBtn.style.display = 'block';
    }
}

function showAnswerFeedback(isCorrect, question) {
    const questionFeedback = document.getElementById('questionFeedback');
    if (!questionFeedback) return;

    questionFeedback.innerHTML = '';
    questionFeedback.style.display = 'block';

    const resultDiv = document.createElement('div');
    resultDiv.className = `feedback-result ${isCorrect ? 'correct' : 'incorrect'}`;
    resultDiv.textContent = isCorrect ? '✓ 回答正確！' : '✗ 回答錯誤';

    const explanationDiv = document.createElement('div');
    explanationDiv.className = 'feedback-explanation';
    explanationDiv.textContent = question.解析 || '';

    questionFeedback.appendChild(resultDiv);
    questionFeedback.appendChild(explanationDiv);

    // 標示選項正確性
    const options = document.querySelectorAll('.option-item');
    options.forEach(option => {
        const value = option.dataset.value;
        if (question.類型 === '多選題') {
            const correctAnswers = Array.isArray(question.答案) ? question.答案 : [question.答案];
            if (correctAnswers.includes(value)) {
                option.classList.add('correct');
            }
        } else {
            if (value === question.答案) {
                option.classList.add('correct');
            } else if (option.classList.contains('selected')) {
                option.classList.add('incorrect');
            }
        }
    });
}

function navigateQuestion(direction) {
    const newIndex = currentQuizIndex + direction;
    if (newIndex >= 0 && newIndex < filteredQuiz.length) {
        currentQuizIndex = newIndex;
        resetQuestionState();
        displayQuestion();
    }
}

function resetQuestionState() {
    const submitBtn = document.getElementById('submitAnswer');
    const nextBtn = document.getElementById('nextQuestion');
    const finishBtn = document.getElementById('finishQuiz');

    if (submitBtn) submitBtn.style.display = 'block';
    if (nextBtn) {
        nextBtn.style.display = 'none';
        nextBtn.disabled = true;
    }
    if (finishBtn) finishBtn.style.display = 'none';

    // 清除反饋與選擇
    const feedback = document.getElementById('questionFeedback');
    if (feedback) feedback.style.display = 'none';

    const options = document.querySelectorAll('.option-item');
    options.forEach(opt => opt.classList.remove('selected', 'correct', 'incorrect'));

    const inputs = document.querySelectorAll('input[type="radio"], input[type="checkbox"], .fill-blank-input');
    inputs.forEach(input => {
        if (input.type === 'text') {
            input.value = '';
        } else {
            input.checked = false;
        }
    });
}

function finishQuiz() {
    // 計算結果
    const correctCount = quizAnswers.filter(answer => answer && answer.isCorrect).length;
    const totalCount = quizAnswers.length;
    const score = totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0;
    const testTime = new Date() - quizStartTime;

    // 顯示結果
    const quizContainer = document.getElementById('quizContainer');
    const quizResults = document.getElementById('quizResults');

    if (quizContainer) quizContainer.style.display = 'none';
    if (quizResults) quizResults.style.display = 'block';

    // 更新結果數據
    const totalScore = document.getElementById('totalScore');
    const correctAnswers = document.getElementById('correctAnswers');
    const testTimeSpan = document.getElementById('testTime');

    if (totalScore) totalScore.textContent = score + '分';
    if (correctAnswers) correctAnswers.textContent = `${correctCount}/${totalCount}`;
    if (testTimeSpan) {
        const minutes = Math.floor(testTime / 60000);
        const seconds = Math.floor((testTime % 60000) / 1000);
        testTimeSpan.textContent = 
            String(minutes).padStart(2, '0') + ':' + 
            String(seconds).padStart(2, '0');
    }

    // 生成詳細分析
    generateQuizAnalysis(correctCount, totalCount, score);

    // 停止計時器
    quizStartTime = null;
}

function generateQuizAnalysis(correctCount, totalCount, score) {
    const resultsAnalysis = document.getElementById('resultsAnalysis');
    if (!resultsAnalysis) return;

    let analysis = '';

    if (score >= 90) {
        analysis = '🎉 優秀！您已經完全掌握了全方位理財的核心概念，可以開始制定個人理財計畫。';
    } else if (score >= 80) {
        analysis = '👍 良好！您對基本概念有很好的理解，建議深入學習特定領域。';
    } else if (score >= 70) {
        analysis = '📚 及格！建議重新複習基礎概念，特別是答錯的題目。';
    } else {
        analysis = '💪 需要加強！建議從學習閃卡開始，建立完整的知識體系。';
    }

    // 按題型統計
    const typeStats = {};
    quizAnswers.forEach(answer => {
        if (answer && answer.question) {
            const type = answer.question.類型;
            if (!typeStats[type]) {
                typeStats[type] = { correct: 0, total: 0 };
            }
            typeStats[type].total++;
            if (answer.isCorrect) {
                typeStats[type].correct++;
            }
        }
    });

    if (Object.keys(typeStats).length > 0) {
        analysis += '<br><br><strong>各題型表現：</strong><br>';
        for (const [type, stats] of Object.entries(typeStats)) {
            const rate = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
            analysis += `${type}：${stats.correct}/${stats.total} (${rate}%)<br>`;
        }
    }

    resultsAnalysis.innerHTML = analysis;
}

function resetQuiz() {
    currentQuizIndex = 0;
    quizAnswers = [];
    quizStartTime = null;

    const quizContainer = document.getElementById('quizContainer');
    const quizResults = document.getElementById('quizResults');

    if (quizContainer) quizContainer.style.display = 'none';
    if (quizResults) quizResults.style.display = 'none';

    filterQuiz();
}

// ==================== 資料持久化 ====================
function saveUserProgress() {
    const progress = {
        learningStats: learningStats,
        timestamp: new Date().toISOString()
    };

    try {
        localStorage.setItem('financeAppProgress', JSON.stringify(progress));
    } catch (e) {
        console.warn('無法儲存學習進度:', e);
    }
}

function loadUserProgress() {
    try {
        const saved = localStorage.getItem('financeAppProgress');
        if (saved) {
            const progress = JSON.parse(saved);
            learningStats = progress.learningStats || { learned: 0, correct: 0, total: 0 };
            updateLearningStats();
        }
    } catch (e) {
        console.warn('無法載入學習進度:', e);
    }
}

// ==================== 工具函數 ====================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ==================== 錯誤處理 ====================
window.addEventListener('error', (event) => {
    console.error('應用程式錯誤:', event.error);
});

// ==================== 初始化過濾器 ====================
document.addEventListener('DOMContentLoaded', () => {
    // 確保過濾器初始化
    setTimeout(() => {
        filterQuiz();
        if (filteredFlashcards.length > 0) {
            updateFlashcardDisplay();
        }
    }, 100);
});

console.log('闕又上全方位理財學習平台已載入完成！');
