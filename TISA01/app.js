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
let fundCategoryChart = null;
let performanceChart = null;

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
        loadAllData();
        
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
function loadAllData() {
    try {
        // 使用預設數據
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

// 預設閃卡數據（正確的基金數據修正版）
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
        {"question": "目前2025年上半年適格發行TISA級別基金共有多少檔？", "answer": "155檔基金", "category": "basic"},
        {"question": "TISA級別基金中，股票型基金佔了多少檔？", "answer": "79檔", "category": "basic"},
        {"question": "TISA級別基金中，債券型基金佔了多少檔？", "answer": "14檔", "category": "basic"},
        {"question": "TISA級別基金中，資產配置型基金佔了多少檔？", "answer": "62檔", "category": "basic"},
        {"question": "正確的TISA基金分布是什麼？", "answer": "股票型79檔、債券型14檔、資產配置型62檔，總計155檔", "category": "basic"},
        {"question": "為什麼股票型基金在TISA中佔最大比例？", "answer": "因為股票型基金提供長期成長潜力，符合退休準備需求", "category": "basic"},
        {"question": "債券型基金在TISA中的角色是什麼？", "answer": "提供穩定收益和風險分散，平衡投資組合", "category": "basic"},
        {"question": "TISA制度的設計理念是什麼？", "answer": "培養長期投資紀律，建立個人退休準備第三支柱", "category": "basic"},
        {"question": "TISA帳戶開戶需要什麼資格？", "answer": "年滿18歲的中華民國國民", "category": "basic"},
        {"question": "TISA每年的免稅投資額度是多少？", "answer": "新台幣24萬元", "category": "basic"},
        {"question": "TISA投資收益是否需要繳稅？", "answer": "完全免稅", "category": "basic"},
        {"question": "TISA制度參考了哪個國家的經驗？", "answer": "英國的ISA制度", "category": "basic"},
        {"question": "TISA R級別基金的最低申購金額是多少？", "answer": "每月3,000元", "category": "technical"},
        {"question": "TISA級別基金如果未滿24個月贖回會有什麼限制？", "answer": "6個月內不得重新申購同檔基金", "category": "technical"},
        {"question": "TISA適格基金需要什麼評等？", "answer": "晨星3星以上或理柏保本評等3級以上", "category": "technical"},
        {"question": "TISA基金的年化風險係數限制是多少？", "answer": "股票型及平衡型需小於25%", "category": "technical"},
        {"question": "TISA級別基金的計價幣別規定是什麼？", "answer": "僅限新台幣計價", "category": "technical"},
        {"question": "TISA級別基金的申購方式僅限制為什麼？", "answer": "僅限定期定額申購", "category": "technical"},
        {"question": "TISA帳戶的開戶流程需要哪些步驟？", "answer": "選擇銷售機構、填寫開戶申請、身分驗證、簽署相關文件", "category": "practical"},
        {"question": "TISA基金的申購可以隨時停止嗎？", "answer": "可以，但建議維持24個月以享有完整優惠", "category": "practical"},
        {"question": "TISA基金的淨值查詢方式為何？", "answer": "透過各銷售平台或集保TISA專區查詢", "category": "practical"},
        {"question": "投資人如何選擇適合的TISA基金？", "answer": "依據風險承受度、投資期間及理財目標選擇", "category": "practical"},
        {"question": "TISA制度未來可能納入哪些投資標的？", "answer": "個股、ETF等產品（目前僅限基金）", "category": "practical"},
        {"question": "TISA制度的長期願景是什麼？", "answer": "成為台灣退休準備體系的重要支柱", "category": "basic"},
        {"question": "TISA與勞退自選的主要差異是什麼？", "answer": "TISA享有免稅優惠，勞退自選為退休金專戶", "category": "basic"},
        {"question": "TISA投資策略建議為何？", "answer": "長期投資、定期定額、分散風險", "category": "practical"},
        {"question": "TISA制度對台灣資本市場的影響？", "answer": "增加長期資金，提升市場穩定性", "category": "basic"}
    ];
}

// 預設測驗數據（修正版）
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
        {"question": "目前TISA級別基金總共有多少檔？", "options": ["103檔", "155檔", "200檔", "250檔"], "correct": 1},
        {"question": "TISA級別基金中股票型基金有多少檔？", "options": ["79檔", "103檔", "113檔", "120檔"], "correct": 0},
        {"question": "TISA級別基金中債券型基金有多少檔？", "options": ["12檔", "14檔", "17檔", "20檔"], "correct": 1},
        {"question": "TISA級別基金中資產配置型基金有多少檔？", "options": ["25檔", "26檔", "62檔", "70檔"], "correct": 2},
        {"question": "正確的TISA基金分布比例是？", "options": ["103:12:26", "79:14:62", "113:17:25", "120:15:20"], "correct": 1},
        {"question": "TISA每年的免稅投資額度是多少？", "options": ["12萬元", "24萬元", "36萬元", "48萬元"], "correct": 1},
        {"question": "TISA投資收益是否需要繳稅？", "options": ["需要繳稅", "完全免稅", "部分免稅", "依收益而定"], "correct": 1},
        {"question": "TISA帳戶開戶需要什麼資格？", "options": ["年滿16歲", "年滿18歲", "年滿20歲", "年滿25歲"], "correct": 1},
        {"question": "TISA制度參考了哪個國家的經驗？", "options": ["美國IRA", "英國ISA", "日本NISA", "新加坡SRS"], "correct": 1},
        {"question": "TISA級別基金的費率優勢有多大？", "options": ["費率減少1/4", "費率減半", "費率減少3/4", "完全免費"], "correct": 1},
        {"question": "TISA投資策略建議為何？", "options": ["短期投機", "長期投資", "頻繁交易", "單次大額"], "correct": 1},
        {"question": "TISA制度對台灣資本市場的主要影響？", "options": ["增加投機資金", "增加長期資金", "增加波動性", "減少流動性"], "correct": 1},
        {"question": "TISA與勞退自選的主要差異是什麼？", "options": ["投資標的不同", "稅務優惠不同", "提領條件不同", "以上皆是"], "correct": 3},
        {"question": "TISA制度未來可能納入哪些投資標的？", "options": ["房地產", "個股、ETF", "原物料", "加密貨幣"], "correct": 1},
        {"question": "TISA制度的設計理念核心是什麼？", "options": ["追求高報酬", "培養投資紀律", "增加稅收", "活絡市場"], "correct": 1},
        {"question": "TISA基金需要獲得晨星幾星以上評等？", "options": ["2星", "3星", "4星", "5星"], "correct": 1}
    ];
}

// 預設基金數據（修正版，正確的分布）
function getDefaultFunds() {
    const stockFunds = [
        {"name": "PGIM保德信中小型股基金-TISA", "company": "保德信投信", "type": "股票型", "category": "台股", "fee": "0.75%", "risk": "RR4", "performance_1m": "2.5%", "performance_3m": "5.2%", "performance_6m": "8.1%", "performance_1y": "15.3%", "sharpe_ratio": "0.68"},
        {"name": "元大台灣卓越50ETF連結基金-TISA", "company": "元大投信", "type": "股票型", "category": "台股ETF", "fee": "0.095%", "risk": "RR4", "performance_1m": "3.8%", "performance_3m": "8.5%", "performance_6m": "12.2%", "performance_1y": "25.8%", "sharpe_ratio": "0.85"},
        {"name": "統一台灣動力基金-TISA", "company": "統一投信", "type": "股票型", "category": "台股", "fee": "0.65%", "risk": "RR4", "performance_1m": "2.8%", "performance_3m": "6.1%", "performance_6m": "9.5%", "performance_1y": "18.2%", "sharpe_ratio": "0.72"},
        {"name": "統一大滿貫基金-TISA", "company": "統一投信", "type": "股票型", "category": "台股", "fee": "0.75%", "risk": "RR4", "performance_1m": "3.2%", "performance_3m": "7.4%", "performance_6m": "11.8%", "performance_1y": "21.5%", "sharpe_ratio": "0.78"},
        {"name": "富邦精銳中小基金-TISA", "company": "富邦投信", "type": "股票型", "category": "台股", "fee": "0.85%", "risk": "RR5", "performance_1m": "4.1%", "performance_3m": "9.2%", "performance_6m": "15.6%", "performance_1y": "24.3%", "sharpe_ratio": "0.81"}
    ];
    
    // 生成更多股票型基金數據達到79檔
    for (let i = stockFunds.length; i < 79; i++) {
        stockFunds.push({
            name: `股票型基金${i + 1}-TISA`,
            company: ["元大投信", "國泰投信", "富邦投信", "統一投信", "保德信投信", "野村投信", "安聯投信"][i % 7],
            type: "股票型",
            category: ["台股", "全球股票", "科技主題", "亞洲股票", "美國股票"][i % 5],
            fee: `${(0.5 + Math.random() * 0.4).toFixed(2)}%`,
            risk: ["RR3", "RR4", "RR5"][i % 3],
            performance_1m: `${(Math.random() * 6).toFixed(1)}%`,
            performance_3m: `${(Math.random() * 12).toFixed(1)}%`,
            performance_6m: `${(Math.random() * 20).toFixed(1)}%`,
            performance_1y: `${(5 + Math.random() * 25).toFixed(1)}%`,
            sharpe_ratio: `${(0.3 + Math.random() * 0.6).toFixed(2)}`
        });
    }
    
    const bondFunds = [
        {"name": "安聯四季回報債券組合基金-R", "company": "安聯投信", "type": "債券型", "category": "多重資產債券", "fee": "0.92%", "risk": "RR2", "performance_1m": "1.2%", "performance_3m": "2.8%", "performance_6m": "4.5%", "performance_1y": "7.8%", "sharpe_ratio": "0.45"}
    ];
    
    // 生成更多債券型基金數據達到14檔
    for (let i = bondFunds.length; i < 14; i++) {
        bondFunds.push({
            name: `債券型基金${i + 1}-TISA`,
            company: ["安聯投信", "國泰投信", "富邦投信", "元大投信", "統一投信"][i % 5],
            type: "債券型",
            category: ["全球債券", "高收益債券", "政府債券", "企業債券", "新興市場債券"][i % 5],
            fee: `${(0.4 + Math.random() * 0.5).toFixed(2)}%`,
            risk: ["RR1", "RR2", "RR3"][i % 3],
            performance_1m: `${(0.5 + Math.random() * 2).toFixed(1)}%`,
            performance_3m: `${(1 + Math.random() * 4).toFixed(1)}%`,
            performance_6m: `${(2 + Math.random() * 6).toFixed(1)}%`,
            performance_1y: `${(3 + Math.random() * 8).toFixed(1)}%`,
            sharpe_ratio: `${(0.2 + Math.random() * 0.5).toFixed(2)}`
        });
    }
    
    const allocationFunds = [
        {"name": "安聯四季成長組合基金-TISA", "company": "安聯投信", "type": "資產配置型", "category": "多重資產", "fee": "0.75%", "risk": "RR3", "performance_1m": "5.81%", "performance_3m": "9.2%", "performance_6m": "13.1%", "performance_1y": "18.9%", "sharpe_ratio": "0.76"},
        {"name": "中信科技趨勢多重資產基金-TISA", "company": "中信投信", "type": "資產配置型", "category": "科技多重資產", "fee": "0.85%", "risk": "RR4", "performance_1m": "5.07%", "performance_3m": "11.2%", "performance_6m": "16.8%", "performance_1y": "28.5%", "sharpe_ratio": "0.92"},
        {"name": "國泰泰享退2039組合基金-TISA", "company": "國泰投信", "type": "資產配置型", "category": "目標日期", "fee": "0.65%", "risk": "RR3", "performance_1m": "3.5%", "performance_3m": "7.8%", "performance_6m": "12.4%", "performance_1y": "16.7%", "sharpe_ratio": "0.69"}
    ];
    
    // 生成更多資產配置型基金數據達到62檔
    for (let i = allocationFunds.length; i < 62; i++) {
        allocationFunds.push({
            name: `資產配置型基金${i + 1}-TISA`,
            company: ["國泰投信", "安聯投信", "富邦投信", "元大投信", "中信投信", "野村投信"][i % 6],
            type: "資產配置型",
            category: ["多重資產", "目標日期", "目標風險", "平衡型", "組合基金"][i % 5],
            fee: `${(0.5 + Math.random() * 0.4).toFixed(2)}%`,
            risk: ["RR2", "RR3", "RR4"][i % 3],
            performance_1m: `${(Math.random() * 5).toFixed(1)}%`,
            performance_3m: `${(Math.random() * 10).toFixed(1)}%`,
            performance_6m: `${(Math.random() * 15).toFixed(1)}%`,
            performance_1y: `${(5 + Math.random() * 20).toFixed(1)}%`,
            sharpe_ratio: `${(0.3 + Math.random() * 0.5).toFixed(2)}`
        });
    }
    
    return [...stockFunds, ...bondFunds, ...allocationFunds];
}

// 設置導覽功能
function setupNavigation() {
    console.log('Setting up navigation...');
    
    // 導覽列連結
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link, index) => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('data-section');
            console.log('Nav link clicked:', sectionId);
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

// 更新基金統計（正確的數字：79檔股票型、14檔債券型、62檔資產配置型）
function updateFundStats() {
    const stockFunds = 79;
    const bondFunds = 14;
    const allocationFunds = 62;
    const totalFunds = 155;
    
    // 更新統計數字
    const statElements = document.querySelectorAll('.stat-card .stat-number');
    if (statElements.length >= 4) {
        statElements[0].textContent = totalFunds;
        statElements[1].textContent = stockFunds;
        statElements[2].textContent = bondFunds;
        statElements[3].textContent = allocationFunds;
    }
    
    console.log('Fund stats updated:', { totalFunds, stockFunds, bondFunds, allocationFunds });
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
                    <span class="fund-detail-label">投資地區:</span>
                    <span class="fund-category-badge">${fund.category}</span>
                </div>
                <div class="fund-detail-row">
                    <span class="fund-detail-label">經理費率:</span>
                    <span class="fund-detail-value">${fund.fee}</span>
                </div>
                <div class="fund-detail-row">
                    <span class="fund-detail-label">風險等級:</span>
                    <span class="risk-badge ${fund.risk}">${fund.risk}</span>
                </div>
                <div class="fund-detail-row">
                    <span class="fund-detail-label">1年報酬:</span>
                    <span class="fund-detail-value performance-positive">${fund.performance_1y}</span>
                </div>
                <div class="fund-detail-row">
                    <span class="fund-detail-label">夏普比率:</span>
                    <span class="fund-detail-value">${fund.sharpe_ratio}</span>
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
            <td class="fund-name-cell">${fund.name}</td>
            <td class="company-cell">${fund.company}</td>
            <td><span class="fund-type-badge">${fund.type}</span></td>
            <td><span class="fund-category-badge">${fund.category}</span></td>
            <td>${fund.fee}</td>
            <td><span class="risk-badge ${fund.risk}">${fund.risk}</span></td>
            <td class="performance-positive">${fund.performance_1y}</td>
            <td>${fund.sharpe_ratio}</td>
            <td class="actions-cell">
                <button class="btn btn--outline btn-compare">比較</button>
            </td>
        `;
        
        tableBody.appendChild(row);
    });
}

// 渲染圖表
function renderCharts() {
    setTimeout(() => {
        renderFundTypeChart();
        renderFundCategoryChart();
        renderPerformanceChart();
    }, 100);
}

// 渲染基金類型分布圖表（正確數據：79:14:62）
function renderFundTypeChart() {
    const ctx = document.getElementById('fundTypeChart');
    if (!ctx) return;
    
    // 正確的基金分布
    const stockFunds = 79;
    const bondFunds = 14;
    const allocationFunds = 62;
    
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

// 渲染基金分類圖表
function renderFundCategoryChart() {
    const ctx = document.getElementById('fundCategoryChart');
    if (!ctx) return;
    
    if (fundCategoryChart) {
        fundCategoryChart.destroy();
    }
    
    fundCategoryChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['台股', '全球股票', '科技主題', '債券', '多重資產', '目標日期', '目標風險', '其他'],
            datasets: [{
                label: '基金數量',
                data: [35, 20, 15, 14, 40, 12, 10, 9],
                backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 5
                    }
                }
            }
        }
    });
}

// 渲染績效圖表
function renderPerformanceChart() {
    const ctx = document.getElementById('performanceChart');
    if (!ctx) return;
    
    if (performanceChart) {
        performanceChart.destroy();
    }
    
    performanceChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['1月', '3月', '6月', '1年'],
            datasets: [{
                label: '平均報酬率',
                data: [2.8, 6.5, 10.2, 16.8],
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
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            }
        }
    });
}

// 績效排行
function showTopPerformers() {
    // 按1年報酬率排序
    const sortedFunds = [...fundData].sort((a, b) => {
        const aReturn = parseFloat(a.performance_1y);
        const bReturn = parseFloat(b.performance_1y);
        return bReturn - aReturn;
    });
    
    filteredFunds = sortedFunds.slice(0, 10); // 顯示前10名
    renderFundList();
    updateFundCount();
}

// 排序應用
function applySorting() {
    const sortBy = document.getElementById('sortBy')?.value || 'name';
    
    filteredFunds.sort((a, b) => {
        switch(sortBy) {
            case 'performance_1y':
                return parseFloat(b.performance_1y) - parseFloat(a.performance_1y);
            case 'sharpe_ratio':
                return parseFloat(b.sharpe_ratio) - parseFloat(a.sharpe_ratio);
            case 'fee':
                return parseFloat(a.fee) - parseFloat(b.fee);
            case 'company':
                return a.company.localeCompare(b.company);
            default:
                return a.name.localeCompare(b.name);
        }
    });
    
    renderFundList();
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
window.showTopPerformers = showTopPerformers;
window.applySorting = applySorting;

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
        if (fundCategoryChart) {
            fundCategoryChart.resize();
        }
        if (performanceChart) {
            performanceChart.resize();
        }
    }, 100);
});