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
            "類型": "單選題",
            "題目": "9%和10%的年化報酬率經過50年複利後，差距約為多少？",
            "選項": ["A. 20%", "B. 35%", "C. 52%", "D. 68%"],
            "答案": "C",
            "解析": "9%報酬率的資產成長74倍，10%報酬率成長117倍，差距高達52.4%。",
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
            "類型": "多選題",
            "題目": "全方位理財的五大支柱包括哪些？（可複選）",
            "選項": ["A. 保險規劃", "B. 稅務規劃", "C. 投資規劃", "D. 退休規劃", "E. 遺產規劃", "F. 債務規劃"],
            "答案": ["A", "B", "C", "D", "E"],
            "解析": "全方位理財的五大支柱：保險規劃、稅務規劃、投資規劃、退休規劃、遺產規劃。",
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
            "類型": "是非題",
            "題目": "複利效應只適用於投資理財，不適用於人生其他方面。",
            "答案": "否",
            "解析": "複利觀念不只在投資理財，也包含在人生中，如長期寫文所帶來的複利效應。",
            "難度": "中等"
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