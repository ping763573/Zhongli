// 應用程序數據
let flashcardsData = [];
let quizData = [];
let fundData = [];
let fundStats = [];

// 全局變量
let currentFlashcard = 0;
let currentQuizQuestion = 0;
let quizAnswers = [];
let isCardFlipped = false;
let currentCategory = 'all';
let filteredFlashcards = [];
let filteredFunds = [];
let currentView = 'grid';

// 圖表實例
let fundTypeChart = null;
let growthChart = null;

// DOM 加載完成後執行
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing app...');
    initializeApp();
});

// 初始化應用程序
async function initializeApp() {
    console.log('Initializing app...');
    
    try {
        // 載入所有數據
        await loadAllData();
        
        // 初始化各個功能
        setupNavigation();
        setupTabs();
        setupCategoryButtons();
        setupViewToggle();
        setupFundFilters();
        initializeFlashcards();
        initializeQuiz();
        initializeFundAnalysis();
        
        console.log('App initialized successfully');
    } catch (error) {
        console.error('Error initializing app:', error);
        // 使用預設數據繼續執行
        flashcardsData = getDefaultFlashcards();
        quizData = getDefaultQuiz();
        fundData = getDefaultFunds();
        
        setupNavigation();
        setupTabs();
        setupCategoryButtons();
        setupViewToggle();
        setupFundFilters();
        initializeFlashcards();
        initializeQuiz();
        initializeFundAnalysis();
    }
}

// 載入所有數據
async function loadAllData() {
    try {
        // 使用預設數據（因為外部數據載入可能失敗）
        flashcardsData = getDefaultFlashcards();
        quizData = getDefaultQuiz();
        fundData = getDefaultFunds();
        
        console.log('Data loaded:', {
            flashcards: flashcardsData.length,
            quiz: quizData.length,
            funds: fundData.length
        });
        
    } catch (error) {
        console.error('Error loading data:', error);
        // 使用預設數據
        flashcardsData = getDefaultFlashcards();
        quizData = getDefaultQuiz();
        fundData = getDefaultFunds();
    }
}

// 預設閃卡數據
function getDefaultFlashcards() {
    return [
        {"question": "根據國泰世華銀行的《2023臺灣全民財務健康關鍵報告》，臺灣民眾的財務健康平均分數是多少？", "answer": "59.2分", "category": "basic"},
        {"question": "TISA帳戶的全名是什麼？", "answer": "Taiwan Individual Savings Account（台灣個人投資儲蓄帳戶）", "category": "basic"},
        {"question": "TISA級別基金的最低申購門檻是多少？", "answer": "每月新台幣1,000元", "category": "technical"},
        {"question": "TISA級別基金需要連續扣款多久才能享有完整優惠？", "answer": "連續扣款成功24個月", "category": "technical"},
        {"question": "TISA級別基金的經理費率規定上限是多少？", "answer": "低於1%（含）以下", "category": "technical"},
        {"question": "TISA適格基金需要成立幾年以上才符合資格？", "answer": "基金已成立滿三年", "category": "technical"},
        {"question": "TISA適格基金的規模需要達到多少以上？", "answer": "新台幣5億元以上", "category": "technical"},
        {"question": "TISA級別基金是否配息？", "answer": "不配息，收益會自動滾入再投資", "category": "technical"},
        {"question": "負責建置TISA帳戶機制的機構是哪一家？", "answer": "臺灣集中保管結算所（集保結算所）", "category": "basic"},
        {"question": "TISA制度正式上路的時間是？", "answer": "2025年7月1日", "category": "basic"},
        {"question": "股票型基金要進入TISA適格基金清單，夏普比率需要達到多少以上？", "answer": "大於0.2", "category": "technical"},
        {"question": "TISA基金委員會的主要職責是什麼？", "answer": "審定TISA級別基金篩選標準及發行銷售規則", "category": "basic"},
        {"question": "TISA制度在我國退休金體系中屬於第幾支柱？", "answer": "第三支柱（自願性個人退休準備）", "category": "basic"},
        {"question": "TISA級別基金的計價幣別規定是什麼？", "answer": "僅限新台幣計價", "category": "technical"},
        {"question": "投資人可以透過哪個平台查詢TISA帳戶資訊？", "answer": "TISA帳戶查詢平台或集保e手掌握App", "category": "practical"},
        {"question": "TISA級別基金的申購方式僅限制為什麼？", "answer": "僅限定期定額申購", "category": "technical"},
        {"question": "債券型基金進入TISA適格基金清單的Sharpe Ratio條件是什麼？", "answer": "在同類型基金中排名前50%", "category": "technical"},
        {"question": "TISA基金需要獲得的評等條件是什麼？", "answer": "晨星3星以上或理柏保本評等3級以上", "category": "technical"},
        {"question": "TISA級別基金對於申購手續費的規定是什麼？", "answer": "銷售機構不得向投資人收取申購手續費", "category": "technical"},
        {"question": "TISA適格基金的類別包含哪些？", "answer": "股票型、債券型、資產配置型", "category": "basic"},
        {"question": "根據2025年8月統計，申購金額最高的TISA基金是哪一檔？", "answer": "元大台灣50連結基金", "category": "practical"},
        {"question": "TISA制度上路後，8月的總申購額相比7月成長了多少倍？", "answer": "約3.6倍（從2953萬成長到10600萬）", "category": "practical"},
        {"question": "目前114年上半年適格發行TISA級別基金共有多少檔？", "answer": "155檔基金", "category": "basic"},
        {"question": "TISA級別基金中，股票型基金佔了多少檔？", "answer": "約113檔", "category": "basic"},
        {"question": "TISA級別基金中，債券型基金佔了多少檔？", "answer": "約17檔", "category": "basic"},
        {"question": "TISA級別基金中，資產配置型基金佔了多少檔？", "answer": "約25檔", "category": "basic"},
        {"question": "目前有幾家平台可以購買TISA級別基金？", "answer": "主要有5家：基富通證券、好好證券、鉅亨投顧、中租投顧、第一銀行", "category": "practical"},
        {"question": "元大台灣50連結基金TISA級別在8月的申購金額是多少？", "answer": "6738萬元", "category": "practical"},
        {"question": "TISA級別基金在8月的總規模達到多少？", "answer": "突破1.4億元", "category": "practical"},
        {"question": "如何查詢完整的TISA基金清單？", "answer": "透過集保中心TISA專區或各基金平台查詢", "category": "practical"},
        {"question": "TISA制度的設計理念是什麼？", "answer": "培養長期投資紀律，建立個人退休準備第三支柱", "category": "basic"},
        {"question": "TISA帳戶開戶需要什麼資格？", "answer": "年滿18歲的中華民國國民", "category": "basic"},
        {"question": "TISA每年的免稅投資額度是多少？", "answer": "新台幣24萬元", "category": "basic"},
        {"question": "TISA投資收益是否需要繳稅？", "answer": "完全免稅", "category": "basic"},
        {"question": "TISA帳戶可以投資哪些標的？", "answer": "台股、ETF、經篩選的優質基金", "category": "basic"},
        {"question": "TISA制度參考了哪個國家的經驗？", "answer": "英國的ISA制度", "category": "basic"},
        {"question": "TISA R級別基金的最低申購金額是多少？", "answer": "每月3,000元", "category": "technical"},
        {"question": "TISA級別基金如果未滿24個月贖回會有什麼限制？", "answer": "6個月內不得重新申購同檔基金", "category": "technical"},
        {"question": "TISA適格基金需要什麼評等？", "answer": "晨星3星以上或理柏保本評等3級以上", "category": "technical"},
        {"question": "TISA基金的年化風險係數限制是多少？", "answer": "股票型及平衡型需小於25%", "category": "technical"},
        {"question": "TISA基金的Sortino Ratio條件是什麼？", "answer": "股票型及平衡型需大於0.2", "category": "technical"},
        {"question": "TISA適格基金是否可以配息？", "answer": "可選擇月配、季配、半年配等多種配息型基金", "category": "technical"},
        {"question": "TISA適格基金是否可以多幣別投資？", "answer": "可以，除新台幣外，還能投資美元、歐元等多幣別", "category": "technical"},
        {"question": "TISA級別基金是否有綁約要求？", "answer": "有24個月的連續扣款期，但非強制綁約", "category": "technical"},
        {"question": "TISA基金委員會的組成成員來自哪裡？", "answer": "集保結算所邀請的專家學者", "category": "technical"},
        {"question": "TISA制度對於退休規劃的定位是什麼？", "answer": "作為個人退休準備的第三支柱", "category": "basic"},
        {"question": "元大投信在TISA級別基金中推出了哪些主要商品？", "answer": "台灣50連結基金、台灣高股息連結基金、台灣高股息優質龍頭基金等", "category": "practical"},
        {"question": "國泰投信在TISA制度中推出了哪些目標日期基金？", "answer": "泰享退2029、2039、2049目標日期組合基金", "category": "practical"},
        {"question": "TISA帳戶的開戶流程需要哪些步驟？", "answer": "選擇銷售機構、填寫開戶申請、身分驗證、簽署相關文件", "category": "practical"},
        {"question": "TISA基金的申購可以隨時停止嗎？", "answer": "可以，但建議維持24個月以享有完整優惠", "category": "practical"},
        {"question": "TISA基金的淨值查詢方式為何？", "answer": "透過各銷售平台或集保TISA專區查詢", "category": "practical"},
        {"question": "TISA帳戶是否可以轉換銷售機構？", "answer": "需依各機構規定，通常需要重新開戶", "category": "practical"},
        {"question": "TISA基金的績效表現如何查詢？", "answer": "透過集保TISA基金績效頁面或各銷售平台", "category": "practical"},
        {"question": "TISA級別基金的費率優勢有多大？", "answer": "經理費通常比一般級別減半，申購手續費全免", "category": "practical"},
        {"question": "投資人如何選擇適合的TISA基金？", "answer": "依據風險承受度、投資期間及理財目標選擇", "category": "practical"},
        {"question": "TISA帳戶的資產查詢功能包含哪些？", "answer": "歸戶資產餘額、交易明細、基金持有狀況等", "category": "practical"},
        {"question": "TISA制度未來可能納入哪些投資標的？", "answer": "個股、ETF等產品（目前僅限基金）", "category": "practical"},
        {"question": "TISA制度的長期願景是什麼？", "answer": "成為台灣退休準備體系的重要支柱", "category": "basic"},
        {"question": "TISA與勞退自選的主要差異是什麼？", "answer": "TISA享有免稅優惠，勞退自選為退休金專戶", "category": "basic"},
        {"question": "TISA投資策略建議為何？", "answer": "長期投資、定期定額、分散風險", "category": "practical"},
        {"question": "TISA制度對台灣資本市場的影響？", "answer": "增加長期資金，提升市場穩定性", "category": "basic"}
    ];
}

// 預設測驗數據
function getDefaultQuiz() {
    return [
        {"question": "根據國泰世華銀行的《2023臺灣全民財務健康關鍵報告》，臺灣民眾的財務健康平均分數是多少？", "options": ["66.3分", "52.8分", "65.4分", "59.2分"], "correct": 3},
        {"question": "TISA級別基金的最低申購門檻是多少？", "options": ["每月500元", "每月1,000元", "每月3,000元", "每月5,000元"], "correct": 1},
        {"question": "TISA級別基金需要連續扣款多久才能享有完整優惠？", "options": ["12個月", "18個月", "24個月", "36個月"], "correct": 2},
        {"question": "TISA級別基金的經理費率上限是多少？", "options": ["低於0.5%", "低於0.8%", "低於1%", "低於1.5%"], "correct": 2},
        {"question": "TISA適格基金需要成立幾年以上才符合資格？", "options": ["1年", "2年", "3年", "5年"], "correct": 2},
        {"question": "TISA適格基金的最低規模要求是多少？", "options": ["新台幣3億元", "新台幣5億元", "新台幣10億元", "新台幣20億元"], "correct": 1},
        {"question": "TISA制度正式上路的時間是？", "options": ["2025年6月1日", "2025年7月1日", "2025年8月1日", "2025年9月1日"], "correct": 1},
        {"question": "負責建置TISA帳戶機制的主管機構是？", "options": ["金管會", "財政部", "集保結算所", "證交所"], "correct": 2},
        {"question": "TISA制度在我國退休金體系中屬於第幾支柱？", "options": ["第一支柱", "第二支柱", "第三支柱", "第四支柱"], "correct": 2},
        {"question": "股票型基金要進入TISA適格基金清單，夏普比率需要達到多少以上？", "options": ["大於0.1", "大於0.2", "大於0.3", "大於0.5"], "correct": 1},
        {"question": "TISA級別基金是否配息？", "options": ["配息", "不配息", "部分配息", "依基金而定"], "correct": 1},
        {"question": "TISA級別基金的計價幣別規定是什麼？", "options": ["僅限新台幣", "可多幣別", "僅限美金", "依基金而定"], "correct": 0},
        {"question": "TISA適格基金的類別包含哪些？", "options": ["僅股票型", "股票型、債券型", "股票型、債券型、資產配置型", "所有類型"], "correct": 2},
        {"question": "TISA級別基金對於申購手續費的規定是什麼？", "options": ["收取1%", "收取0.5%", "完全免收", "依基金而定"], "correct": 2},
        {"question": "TISA基金需要獲得的評等條件是什麼？", "options": ["晨星2星以上", "晨星3星以上", "晨星4星以上", "晨星5星"], "correct": 1},
        {"question": "TISA每年的免稅投資額度是多少？", "options": ["12萬元", "24萬元", "36萬元", "48萬元"], "correct": 1},
        {"question": "TISA投資收益是否需要繳稅？", "options": ["需要繳稅", "完全免稅", "部分免稅", "依收益而定"], "correct": 1},
        {"question": "TISA帳戶開戶需要什麼資格？", "options": ["年滿16歲", "年滿18歲", "年滿20歲", "年滿25歲"], "correct": 1},
        {"question": "TISA R級別基金的最低申購金額是多少？", "options": ["每月1,000元", "每月2,000元", "每月3,000元", "每月5,000元"], "correct": 2},
        {"question": "TISA級別基金如果未滿24個月贖回會有什麼限制？", "options": ["3個月限制", "6個月限制", "9個月限制", "12個月限制"], "correct": 1},
        {"question": "TISA制度參考了哪個國家的經驗？", "options": ["美國IRA", "英國ISA", "日本NISA", "新加坡SRS"], "correct": 1},
        {"question": "TISA基金的年化風險係數限制是多少？", "options": ["小於20%", "小於25%", "小於30%", "小於35%"], "correct": 1},
        {"question": "TISA基金的Sortino Ratio條件是什麼？", "options": ["大於0.1", "大於0.2", "大於0.3", "大於0.5"], "correct": 1},
        {"question": "TISA級別基金是否有綁約要求？", "options": ["強制綁約24個月", "建議24個月但非強制", "強制綁約36個月", "無任何要求"], "correct": 1},
        {"question": "TISA制度對於退休規劃的定位是什麼？", "options": ["第一支柱", "第二支柱", "第三支柱", "第四支柱"], "correct": 2},
        {"question": "TISA帳戶可以投資哪些標的？", "options": ["僅限台股", "僅限基金", "台股、ETF、基金", "所有金融商品"], "correct": 2},
        {"question": "TISA級別基金的費率優勢有多大？", "options": ["費率減少1/4", "費率減半", "費率減少3/4", "完全免費"], "correct": 1},
        {"question": "TISA投資策略建議為何？", "options": ["短期投機", "長期投資", "頻繁交易", "單次大額"], "correct": 1},
        {"question": "TISA制度對台灣資本市場的主要影響？", "options": ["增加投機資金", "增加長期資金", "增加波動性", "減少流動性"], "correct": 1},
        {"question": "TISA與勞退自選的主要差異是什麼？", "options": ["投資標的不同", "稅務優惠不同", "提領條件不同", "以上皆是"], "correct": 3},
        {"question": "TISA制度未來可能納入哪些投資標的？", "options": ["房地產", "個股、ETF", "原物料", "加密貨幣"], "correct": 1},
        {"question": "TISA帳戶的資產查詢功能包含哪些？", "options": ["僅餘額", "僅明細", "餘額和明細", "所有投資資訊"], "correct": 3},
        {"question": "TISA基金的績效表現如何查詢？", "options": ["僅集保平台", "僅銷售平台", "集保和銷售平台", "無法查詢"], "correct": 2},
        {"question": "TISA帳戶是否可以轉換銷售機構？", "options": ["完全不可", "可以但需重新開戶", "可以直接轉換", "依機構而定"], "correct": 3},
        {"question": "投資人如何選擇適合的TISA基金？", "options": ["隨機選擇", "跟隨熱門", "依風險承受度選擇", "選費率最低"], "correct": 2},
        {"question": "TISA基金的申購可以隨時停止嗎？", "options": ["完全不可", "可以但有限制", "完全可以", "需申請"], "correct": 1},
        {"question": "TISA帳戶的開戶流程最後步驟是什麼？", "options": ["身分驗證", "填寫申請", "簽署文件", "選擇機構"], "correct": 2},
        {"question": "國泰投信的TISA目標日期基金包含哪些？", "options": ["2025、2035、2045", "2029、2039、2049", "2030、2040、2050", "2028、2038、2048"], "correct": 1},
        {"question": "元大投信的TISA主力商品是什麼？", "options": ["高股息基金", "台灣50連結基金", "中小型股基金", "債券基金"], "correct": 1},
        {"question": "TISA制度的長期願景是什麼？", "options": ["取代勞保", "補強退休準備", "增加政府收入", "活絡股市"], "correct": 1},
        {"question": "TISA基金委員會的主要職責是什麼？", "options": ["管理基金", "審定篩選標準", "投資決策", "風險控制"], "correct": 1},
        {"question": "TISA級別基金的單次申購限制通常是多少？", "options": ["5,000元", "10,000元", "20,000元", "無限制"], "correct": 1},
        {"question": "TISA制度上路後首月表現如何？", "options": ["申購低迷", "申購穩定", "申購熱烈", "數據不明"], "correct": 2},
        {"question": "TISA 8月申購金額相比7月成長了多少？", "options": ["2倍", "3.6倍", "5倍", "10倍"], "correct": 1},
        {"question": "目前有幾家主要平台可購買TISA基金？", "options": ["3家", "5家", "8家", "10家"], "correct": 1},
        {"question": "TISA制度的設計理念核心是什麼？", "options": ["追求高報酬", "培養投資紀律", "增加稅收", "活絡市場"], "correct": 1},
        {"question": "TISA基金需要獲得晨星幾星以上評等？", "options": ["2星", "3星", "4星", "5星"], "correct": 1},
        {"question": "TISA適格基金的規模門檻是多少？", "options": ["3億元", "5億元", "10億元", "20億元"], "correct": 1},
        {"question": "TISA級別基金的計價幣別限制為何？", "options": ["無限制", "僅新台幣", "僅美元", "新台幣和美元"], "correct": 1},
        {"question": "TISA投資人的年齡限制是什麼？", "options": ["16歲以上", "18歲以上", "20歲以上", "無限制"], "correct": 1}
    ];
}

// 預設基金數據
function getDefaultFunds() {
    return [
        {"name": "元大台灣50連結基金-TISA", "company": "元大投信", "type": "股票型", "fee": "0.035%~0.095%", "scale": "50億元", "establishDate": "2019-01-01"},
        {"name": "元大台灣高股息ETF連結基金-TISA", "company": "元大投信", "type": "股票型", "fee": "0.15%~0.22%", "scale": "30億元", "establishDate": "2020-01-01"},
        {"name": "統一台灣動力基金-TISA", "company": "統一投信", "type": "股票型", "fee": "0.65%", "scale": "25億元", "establishDate": "2018-01-01"},
        {"name": "統一大滿貫基金-TISA", "company": "統一投信", "type": "股票型", "fee": "0.75%", "scale": "20億元", "establishDate": "2017-01-01"},
        {"name": "安聯四季成長組合基金-TISA", "company": "安聯投信", "type": "資產配置型", "fee": "0.75%", "scale": "15億元", "establishDate": "2019-06-01"},
        {"name": "富邦精銳中小基金-TISA", "company": "富邦投信", "type": "股票型", "fee": "0.85%", "scale": "18億元", "establishDate": "2018-03-01"},
        {"name": "國泰泰享退2039組合基金-TISA", "company": "國泰投信", "type": "資產配置型", "fee": "0.65%", "scale": "12億元", "establishDate": "2020-06-01"},
        {"name": "野村台灣高股息基金-TISA", "company": "野村投信", "type": "股票型", "fee": "0.78%", "scale": "22億元", "establishDate": "2019-09-01"}
    ];
}

// 設置導覽功能
function setupNavigation() {
    console.log('Setting up navigation...');
    
    // 導覽列連結
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link) => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Nav link clicked:', this);
            const sectionId = this.getAttribute('data-section');
            console.log('Section ID:', sectionId);
            if (sectionId) {
                showSection(sectionId);
                
                // 更新導覽列活動狀態
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
    
    // 頁尾連結
    const footerLinks = document.querySelectorAll('.footer-section a[data-section]');
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const sectionId = this.getAttribute('data-section');
            if (sectionId) {
                showSection(sectionId);
                
                // 更新導覽列活動狀態
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                const correspondingNavLink = document.querySelector(`.nav-link[data-section="${sectionId}"]`);
                if (correspondingNavLink) {
                    correspondingNavLink.classList.add('active');
                }
            }
        });
    });
    
    // 首頁CTA按鈕
    const heroButton = document.querySelector('.hero-content .btn');
    if (heroButton) {
        heroButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            showSection('intro');
            // 更新導覽列
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            const introLink = document.querySelector('.nav-link[data-section="intro"]');
            if (introLink) {
                introLink.classList.add('active');
            }
        });
    }
    
    console.log('Navigation setup completed');
}

// 顯示指定區域
function showSection(sectionId) {
    console.log('Showing section:', sectionId);
    
    // 隱藏所有區域
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // 顯示目標區域
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        console.log('Section activated:', sectionId);
        
        // 根據不同區域執行特定初始化
        switch(sectionId) {
            case 'learning':
                setTimeout(() => {
                    initializeFlashcards();
                }, 100);
                break;
            case 'analysis':
                setTimeout(() => {
                    renderCharts();
                }, 100);
                break;
        }
    } else {
        console.error('Section not found:', sectionId);
    }
    
    // 滾動到頂部
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 設置標籤頁功能
function setupTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const tabName = this.getAttribute('data-tab');
            
            // 更新按鈕狀態
            tabBtns.forEach(tabBtn => tabBtn.classList.remove('active'));
            this.classList.add('active');
            
            // 更新內容顯示
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            const targetTab = document.getElementById(tabName);
            if (targetTab) {
                targetTab.classList.add('active');
            }
        });
    });
}

// 設置分類按鈕
function setupCategoryButtons() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const category = this.getAttribute('data-category');
            
            // 更新按鈕狀態
            categoryBtns.forEach(categoryBtn => categoryBtn.classList.remove('active'));
            this.classList.add('active');
            
            // 切換分類
            switchCategory(category);
        });
    });
}

// 切換閃卡分類
function switchCategory(category) {
    currentCategory = category;
    
    if (category === 'all') {
        filteredFlashcards = [...flashcardsData];
    } else {
        filteredFlashcards = flashcardsData.filter(card => card.category === category);
    }
    
    currentFlashcard = 0;
    updateFlashcard();
    updateCardProgress();
    updateLearningProgress();
}

// 初始化閃卡功能
function initializeFlashcards() {
    console.log('Initializing flashcards...');
    if (flashcardsData.length > 0) {
        filteredFlashcards = [...flashcardsData];
        updateFlashcard();
        updateCardProgress();
        updateLearningProgress();
        console.log('Flashcards initialized');
    }
}

// 更新閃卡內容
function updateFlashcard() {
    const questionEl = document.getElementById('question-text');
    const answerEl = document.getElementById('answer-text');
    const flashcardEl = document.getElementById('flashcard');
    
    if (questionEl && answerEl && flashcardEl && filteredFlashcards.length > 0) {
        questionEl.textContent = filteredFlashcards[currentFlashcard].question;
        answerEl.textContent = filteredFlashcards[currentFlashcard].answer;
        
        // 重置卡片狀態
        flashcardEl.classList.remove('flipped');
        isCardFlipped = false;
    }
}

// 更新卡片進度
function updateCardProgress() {
    const currentCardEl = document.getElementById('current-card');
    const totalCardsEl = document.getElementById('total-cards');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    if (currentCardEl && totalCardsEl) {
        currentCardEl.textContent = currentFlashcard + 1;
        totalCardsEl.textContent = filteredFlashcards.length;
    }
    
    // 更新按鈕狀態
    if (prevBtn) {
        prevBtn.disabled = currentFlashcard === 0;
    }
    if (nextBtn) {
        nextBtn.disabled = currentFlashcard === filteredFlashcards.length - 1;
    }
}

// 更新學習進度
function updateLearningProgress() {
    const progressFill = document.getElementById('flashcard-progress');
    const progressText = document.getElementById('progress-text');
    
    if (progressFill && progressText && filteredFlashcards.length > 0) {
        const progress = Math.round(((currentFlashcard + 1) / filteredFlashcards.length) * 100);
        progressFill.style.width = `${progress}%`;
        progressText.textContent = `${progress}%`;
    }
}

// 翻轉卡片
function flipCard() {
    console.log('Flipping card...');
    const flashcardEl = document.getElementById('flashcard');
    if (flashcardEl) {
        flashcardEl.classList.toggle('flipped');
        isCardFlipped = !isCardFlipped;
        console.log('Card flipped:', isCardFlipped);
    }
}

// 上一張卡片
function previousCard() {
    console.log('Previous card...');
    if (currentFlashcard > 0) {
        currentFlashcard--;
        updateFlashcard();
        updateCardProgress();
        updateLearningProgress();
    }
}

// 下一張卡片
function nextCard() {
    console.log('Next card...');
    if (currentFlashcard < filteredFlashcards.length - 1) {
        currentFlashcard++;
        updateFlashcard();
        updateCardProgress();
        updateLearningProgress();
    }
}

// 初始化測驗功能
function initializeQuiz() {
    console.log('Initializing quiz...');
    currentQuizQuestion = 0;
    quizAnswers = new Array(quizData.length).fill(null);
}

// 開始測驗
function startQuiz() {
    console.log('Starting quiz...');
    const quizStart = document.getElementById('quiz-start');
    const quizContent = document.getElementById('quiz-content');
    
    if (quizStart && quizContent) {
        quizStart.classList.add('hidden');
        quizContent.classList.remove('hidden');
        
        currentQuizQuestion = 0;
        quizAnswers = new Array(quizData.length).fill(null);
        
        updateQuizQuestion();
        updateQuizProgress();
    }
}

// 更新測驗問題
function updateQuizQuestion() {
    const questionEl = document.getElementById('quiz-question');
    const optionsEl = document.getElementById('options-container');
    const currentQuestionEl = document.getElementById('current-question');
    const totalQuestionsEl = document.getElementById('total-questions');
    
    if (questionEl && optionsEl && currentQuestionEl && totalQuestionsEl && quizData.length > 0) {
        const currentQ = quizData[currentQuizQuestion];
        
        questionEl.textContent = currentQ.question;
        currentQuestionEl.textContent = currentQuizQuestion + 1;
        totalQuestionsEl.textContent = quizData.length;
        
        // 生成選項
        optionsEl.innerHTML = '';
        currentQ.options.forEach((option, index) => {
            const optionEl = document.createElement('div');
            optionEl.className = 'option';
            optionEl.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
            optionEl.addEventListener('click', () => selectOption(index));
            
            // 如果已經選擇過，保持選中狀態
            if (quizAnswers[currentQuizQuestion] === index) {
                optionEl.classList.add('selected');
            }
            
            optionsEl.appendChild(optionEl);
        });
    }
    
    updateQuizButtons();
}

// 選擇選項
function selectOption(optionIndex) {
    console.log('Option selected:', optionIndex);
    // 記錄答案
    quizAnswers[currentQuizQuestion] = optionIndex;
    
    // 更新視覺狀態
    document.querySelectorAll('.option').forEach(option => {
        option.classList.remove('selected');
    });
    document.querySelectorAll('.option')[optionIndex].classList.add('selected');
    
    updateQuizButtons();
}

// 更新測驗按鈕
function updateQuizButtons() {
    const prevBtn = document.getElementById('prev-question');
    const nextBtn = document.getElementById('next-question');
    
    if (prevBtn) {
        prevBtn.disabled = currentQuizQuestion === 0;
    }
    
    if (nextBtn) {
        if (currentQuizQuestion === quizData.length - 1) {
            nextBtn.textContent = '完成測驗';
        } else {
            nextBtn.textContent = '下一題';
        }
    }
}

// 上一題
function previousQuestion() {
    console.log('Previous question...');
    if (currentQuizQuestion > 0) {
        currentQuizQuestion--;
        updateQuizQuestion();
        updateQuizProgress();
    }
}

// 下一題或完成測驗
function nextQuestion() {
    console.log('Next question...');
    if (currentQuizQuestion < quizData.length - 1) {
        currentQuizQuestion++;
        updateQuizQuestion();
        updateQuizProgress();
    } else {
        // 完成測驗
        showQuizResult();
    }
}

// 更新測驗進度
function updateQuizProgress() {
    const progressFill = document.getElementById('progress-fill');
    if (progressFill) {
        const progress = ((currentQuizQuestion + 1) / quizData.length) * 100;
        progressFill.style.width = `${progress}%`;
    }
}

// 顯示測驗結果
function showQuizResult() {
    console.log('Showing quiz result...');
    const quizContent = document.getElementById('quiz-content');
    const quizResult = document.getElementById('quiz-result');
    
    if (quizContent && quizResult) {
        quizContent.classList.add('hidden');
        quizResult.classList.remove('hidden');
        
        // 計算分數
        let correctCount = 0;
        const results = [];
        
        quizData.forEach((question, index) => {
            const userAnswer = quizAnswers[index];
            const isCorrect = userAnswer === question.correct;
            
            if (isCorrect) {
                correctCount++;
            }
            
            results.push({
                question: question.question,
                userAnswer: userAnswer !== null ? question.options[userAnswer] : '未作答',
                correctAnswer: question.options[question.correct],
                isCorrect: isCorrect
            });
        });
        
        const score = Math.round((correctCount / quizData.length) * 100);
        
        // 顯示分數
        const finalScoreEl = document.getElementById('final-score');
        if (finalScoreEl) {
            finalScoreEl.textContent = score;
        }
        
        // 顯示分析
        const resultAnalysis = document.getElementById('result-analysis');
        if (resultAnalysis) {
            let analysisText = '';
            if (score >= 90) {
                analysisText = '🎉 優秀！您對TISA制度有非常深入的了解，已經具備充分的投資知識。';
            } else if (score >= 80) {
                analysisText = '👍 良好！您對TISA制度有良好的理解，建議再加強部分細節知識。';
            } else if (score >= 70) {
                analysisText = '📖 及格！您對TISA制度有基本認識，建議多加學習相關知識。';
            } else {
                analysisText = '📚 需要加強！建議您多使用閃卡學習功能，提升對TISA制度的了解。';
            }
            resultAnalysis.innerHTML = `<p><strong>學習建議：</strong>${analysisText}</p>`;
        }
        
        // 顯示詳細結果
        const resultDetails = document.getElementById('result-details');
        if (resultDetails) {
            let detailsHTML = `<h4>答題詳情 (${correctCount}/${quizData.length})</h4>`;
            
            results.forEach((result, index) => {
                const icon = result.isCorrect ? '✓' : '✗';
                const className = result.isCorrect ? 'correct' : 'incorrect';
                
                detailsHTML += `
                    <div class="result-item ${className}">
                        <div class="result-icon">${icon}</div>
                        <div class="result-text">
                            <strong>第${index + 1}題:</strong> ${result.question.substring(0, 50)}${result.question.length > 50 ? '...' : ''}<br>
                            <small>您的答案: ${result.userAnswer}</small><br>
                            ${!result.isCorrect ? `<small style="color: var(--color-success);">正確答案: ${result.correctAnswer}</small>` : ''}
                        </div>
                    </div>
                `;
            });
            
            resultDetails.innerHTML = detailsHTML;
        }
    }
}

// 重新開始測驗
function restartQuiz() {
    console.log('Restarting quiz...');
    const quizResult = document.getElementById('quiz-result');
    const quizStart = document.getElementById('quiz-start');
    
    if (quizResult && quizStart) {
        quizResult.classList.add('hidden');
        quizStart.classList.remove('hidden');
        
        initializeQuiz();
    }
}

// 檢討錯題
function reviewMistakes() {
    // 切換到閃卡學習
    showSection('learning');
    
    // 更新導覽狀態
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(navLink => navLink.classList.remove('active'));
    const learningLink = document.querySelector('.nav-link[data-section="learning"]');
    if (learningLink) {
        learningLink.classList.add('active');
    }
    
    // 切換到閃卡標籤
    setTimeout(() => {
        const flashcardTab = document.querySelector('[data-tab="flashcards"]');
        if (flashcardTab) {
            flashcardTab.click();
        }
        alert('已切換到閃卡學習模式，建議重新學習相關知識點！');
    }, 500);
}

// 初始化基金分析
function initializeFundAnalysis() {
    console.log('Initializing fund analysis...');
    
    // 更新基金統計
    updateFundStats();
    
    // 設置基金公司選項
    setupFundCompanyOptions();
    
    // 初始化基金列表
    filteredFunds = [...fundData];
    renderFundList();
    
    console.log('Fund analysis initialized');
}

// 更新基金統計
function updateFundStats() {
    const stockFunds = fundData.filter(fund => fund.type.includes('股票')).length || 113;
    const bondFunds = fundData.filter(fund => fund.type.includes('債券')).length || 17;
    const allocationFunds = fundData.filter(fund => fund.type.includes('配置') || fund.type.includes('組合') || fund.type.includes('平衡')).length || 25;
    
    // 更新統計數字
    const statElements = document.querySelectorAll('.stat-card .stat-number');
    if (statElements.length >= 4) {
        statElements[0].textContent = fundData.length || 155;
        statElements[1].textContent = stockFunds;
        statElements[2].textContent = bondFunds;
        statElements[3].textContent = allocationFunds;
    }
}

// 設置基金公司選項
function setupFundCompanyOptions() {
    const companies = [...new Set(fundData.map(fund => fund.company))].filter(c => c).sort();
    const companySelect = document.getElementById('fundCompany');
    
    if (companySelect && companies.length > 0) {
        companySelect.innerHTML = '<option value="">全部公司</option>';
        companies.forEach(company => {
            const option = document.createElement('option');
            option.value = company;
            option.textContent = company;
            companySelect.appendChild(option);
        });
    }
}

// 設置基金篩選器
function setupFundFilters() {
    const typeSelect = document.getElementById('fundType');
    const companySelect = document.getElementById('fundCompany');
    const searchInput = document.getElementById('fundSearch');
    
    // 監聽篩選條件變化
    [typeSelect, companySelect, searchInput].forEach(element => {
        if (element) {
            element.addEventListener('change', applyFilters);
            if (element.type === 'text') {
                element.addEventListener('input', applyFilters);
            }
        }
    });
}

// 應用篩選器
function applyFilters() {
    const typeFilter = document.getElementById('fundType')?.value || '';
    const companyFilter = document.getElementById('fundCompany')?.value || '';
    const searchFilter = document.getElementById('fundSearch')?.value.toLowerCase() || '';
    
    filteredFunds = fundData.filter(fund => {
        const matchesType = !typeFilter || fund.type.includes(typeFilter);
        const matchesCompany = !companyFilter || fund.company.includes(companyFilter);
        const matchesSearch = !searchFilter || fund.name.toLowerCase().includes(searchFilter);
        
        return matchesType && matchesCompany && matchesSearch;
    });
    
    renderFundList();
    updateFundCount();
}

// 清除篩選器
function clearFilters() {
    const typeEl = document.getElementById('fundType');
    const companyEl = document.getElementById('fundCompany');
    const searchEl = document.getElementById('fundSearch');
    
    if (typeEl) typeEl.value = '';
    if (companyEl) companyEl.value = '';
    if (searchEl) searchEl.value = '';
    
    filteredFunds = [...fundData];
    renderFundList();
    updateFundCount();
}

// 更新基金數量顯示
function updateFundCount() {
    const countEl = document.getElementById('fundCount');
    if (countEl) {
        countEl.textContent = `顯示 ${filteredFunds.length} 檔基金`;
    }
}

// 設置檢視模式切換
function setupViewToggle() {
    const viewBtns = document.querySelectorAll('.view-btn');
    
    viewBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const view = this.getAttribute('data-view');
            
            // 更新按鈕狀態
            viewBtns.forEach(viewBtn => viewBtn.classList.remove('active'));
            this.classList.add('active');
            
            // 切換檢視模式
            switchView(view);
        });
    });
}

// 切換檢視模式
function switchView(view) {
    currentView = view;
    const gridView = document.getElementById('fundGridView');
    const tableView = document.getElementById('fundTableView');
    
    if (view === 'grid') {
        gridView?.classList.remove('hidden');
        tableView?.classList.add('hidden');
    } else {
        gridView?.classList.add('hidden');
        tableView?.classList.remove('hidden');
    }
    
    renderFundList();
}

// 渲染基金列表
function renderFundList() {
    if (currentView === 'grid') {
        renderFundGrid();
    } else {
        renderFundTable();
    }
    updateFundCount();
}

// 渲染基金網格
function renderFundGrid() {
    const gridContainer = document.getElementById('fundGridView');
    if (!gridContainer) return;
    
    gridContainer.innerHTML = '';
    
    filteredFunds.forEach(fund => {
        const fundCard = document.createElement('div');
        fundCard.className = 'fund-card';
        
        fundCard.innerHTML = `
            <h4>${fund.name}</h4>
            <div class="fund-details">
                <div class="fund-detail-row">
                    <span class="fund-detail-label">投信公司:</span>
                    <span class="fund-detail-value">${fund.company}</span>
                </div>
                <div class="fund-detail-row">
                    <span class="fund-detail-label">基金類型:</span>
                    <span class="fund-type-badge">${fund.type}</span>
                </div>
                <div class="fund-detail-row">
                    <span class="fund-detail-label">經理費率:</span>
                    <span class="fund-detail-value">${fund.fee}</span>
                </div>
                <div class="fund-detail-row">
                    <span class="fund-detail-label">基金規模:</span>
                    <span class="fund-detail-value">${fund.scale}</span>
                </div>
                <div class="fund-detail-row">
                    <span class="fund-detail-label">成立日期:</span>
                    <span class="fund-detail-value">${fund.establishDate}</span>
                </div>
            </div>
        `;
        
        gridContainer.appendChild(fundCard);
    });
}

// 渲染基金表格
function renderFundTable() {
    const tableBody = document.getElementById('fundTableBody');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    filteredFunds.forEach(fund => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${fund.name}</td>
            <td>${fund.company}</td>
            <td><span class="fund-type-badge">${fund.type}</span></td>
            <td>${fund.fee}</td>
            <td>${fund.scale}</td>
            <td>${fund.establishDate}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// 渲染圖表
function renderCharts() {
    setTimeout(() => {
        renderFundTypeChart();
        renderGrowthChart();
    }, 100);
}

// 渲染基金類型分布圖表
function renderFundTypeChart() {
    const ctx = document.getElementById('fundTypeChart');
    if (!ctx) return;
    
    // 計算各類型基金數量
    const stockFunds = fundData.filter(fund => fund.type.includes('股票')).length || 113;
    const bondFunds = fundData.filter(fund => fund.type.includes('債券')).length || 17;
    const allocationFunds = fundData.filter(fund => fund.type.includes('配置') || fund.type.includes('組合') || fund.type.includes('平衡')).length || 25;
    
    if (fundTypeChart) {
        fundTypeChart.destroy();
    }
    
    fundTypeChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['股票型基金', '債券型基金', '資產配置型基金'],
            datasets: [{
                data: [stockFunds, bondFunds, allocationFunds],
                backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C'],
                borderWidth: 2,
                borderColor: '#fff'
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
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = Math.round((context.parsed / total) * 100);
                            return `${context.label}: ${context.parsed}檔 (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
}

// 渲染成長趨勢圖表
function renderGrowthChart() {
    const ctx = document.getElementById('growthChart');
    if (!ctx) return;
    
    if (growthChart) {
        growthChart.destroy();
    }
    
    growthChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['7月', '8月'],
            datasets: [{
                label: '申購金額 (萬元)',
                data: [2953, 10600],
                borderColor: '#1FB8CD',
                backgroundColor: 'rgba(31, 184, 205, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.dataset.label}: ${context.parsed.y.toLocaleString()}萬元`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return value.toLocaleString() + '萬';
                        }
                    }
                }
            }
        }
    });
}

// 將函數綁定到 window 對象，使其在 HTML 中可用
window.showSection = showSection;
window.flipCard = flipCard;
window.previousCard = previousCard;
window.nextCard = nextCard;
window.startQuiz = startQuiz;
window.previousQuestion = previousQuestion;
window.nextQuestion = nextQuestion;
window.restartQuiz = restartQuiz;
window.reviewMistakes = reviewMistakes;
window.applyFilters = applyFilters;
window.clearFilters = clearFilters;

// 添加鍵盤導航支持
document.addEventListener('keydown', function(e) {
    const learningSection = document.getElementById('learning');
    if (!learningSection || !learningSection.classList.contains('active')) {
        return;
    }
    
    const flashcardsTab = document.getElementById('flashcards');
    const quizTab = document.getElementById('quiz');
    
    if (flashcardsTab && flashcardsTab.classList.contains('active')) {
        switch(e.key) {
            case 'ArrowLeft':
                e.preventDefault();
                previousCard();
                break;
            case 'ArrowRight':
                e.preventDefault();
                nextCard();
                break;
            case ' ':
            case 'Enter':
                e.preventDefault();
                flipCard();
                break;
        }
    }
    
    if (quizTab && quizTab.classList.contains('active')) {
        const quizContent = document.getElementById('quiz-content');
        if (quizContent && !quizContent.classList.contains('hidden')) {
            switch(e.key) {
                case 'ArrowLeft':
                    e.preventDefault();
                    previousQuestion();
                    break;
                case 'ArrowRight':
                case 'Enter':
                    e.preventDefault();
                    nextQuestion();
                    break;
                case '1':
                case '2':
                case '3':
                case '4':
                    e.preventDefault();
                    const optionIndex = parseInt(e.key) - 1;
                    if (quizData[currentQuizQuestion] && optionIndex < quizData[currentQuizQuestion].options.length) {
                        selectOption(optionIndex);
                    }
                    break;
            }
        }
    }
});

// 錯誤處理
window.addEventListener('error', function(e) {
    console.error('應用程序發生錯誤:', e.error);
});

// 當窗口調整大小時重新渲染圖表
window.addEventListener('resize', function() {
    setTimeout(() => {
        if (fundTypeChart) {
            fundTypeChart.resize();
        }
        if (growthChart) {
            growthChart.resize();
        }
    }, 100);
});