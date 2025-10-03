// Anti-Fraud Knowledge Center JavaScript

// Application data
const appData = {
  "anti_fraud_data": {
    "詐騙類型": [
      {
        "類型": "假投資詐騙",
        "損失金額": "16億1689.1萬元/週",
        "案件數": "748件/週",
        "手法": "LINE群組、假投資APP、虛假對帳單",
        "關鍵字": ["穩賺不賠", "月獲利20%", "內線消息"],
        "防範措施": ["選擇合法投資管道", "不相信保證獲利", "謹慎下載APP"]
      },
      {
        "類型": "網路購物詐騙",
        "損失金額": "274萬元/週",
        "案件數": "87件/週",
        "手法": "假網站、貨到付款詐騙、假客服",
        "關鍵字": ["超低價", "限時搶購", "貨到付款"],
        "防範措施": ["選擇知名電商平台", "查證賣家評價", "避免來路不明網站"]
      },
      {
        "類型": "假檢警詐騙",
        "損失金額": "11億元/月",
        "案件數": "數千件",
        "手法": "冒充檢警、監管帳戶、電話筆錄",
        "關鍵字": ["偵查不公開", "監管帳戶", "電話筆錄"],
        "防範措施": ["檢警不會電話筆錄", "不會要求監管帳戶", "主動查證"]
      },
      {
        "類型": "AI深偽詐騙",
        "損失金額": "持續上升",
        "案件數": "新興威脅",
        "手法": "AI變聲、Deepfake視訊、假影片",
        "關鍵字": ["聲音模仿", "視訊筆錄", "緊急求救"],
        "防範措施": ["多重驗證身份", "直接回撥確認", "保持冷靜查證"]
      },
      {
        "類型": "愛情詐騙(殺豬盤)",
        "損失金額": "14億元/月",
        "案件數": "持續增長",
        "手法": "交友軟體、長期培養感情、投資邀約",
        "關鍵字": ["網路戀情", "投資理財", "一起賺錢"],
        "防範措施": ["謹慎網路交友", "不輕易投資", "現實見面確認"]
      }
    ],
    "法律條文": [
      {
        "法規": "詐欺犯罪危害防制條例",
        "重點": "高額詐欺最重12年有期徒刑，併科3億元罰金",
        "適用": "詐欺金額達500萬以上"
      },
      {
        "法規": "洗錢防制法",
        "重點": "最低6個月有期徒刑，難以易科罰金",
        "適用": "協助轉帳、提供人頭帳戶"
      },
      {
        "法規": "通訊保障及監察法",
        "重點": "賦予執法機關科技偵查權",
        "適用": "詐騙集團通訊監控"
      }
    ],
    "防詐工具": [
      {
        "工具": "165反詐騙專線",
        "功能": "24小時諮詢、檢舉、報案",
        "收費": "市話免費，手機每分鐘1元(中華電信免費)"
      },
      {
        "工具": "165全民防騙網",
        "功能": "查詢可疑電話、網址、LINE ID",
        "網址": "https://165.npa.gov.tw"
      },
      {
        "工具": "趨勢科技AI防詐達人",
        "功能": "過濾可疑來電、辨識詐騙簡訊",
        "類型": "手機APP"
      },
      {
        "工具": "Whoscall",
        "功能": "來電辨識、封鎖詐騙電話",
        "類型": "手機APP"
      }
    ]
  },
  "interactive_content": {
    "quiz_questions": [
      {
        "id": 1,
        "question": "以下哪句話是典型的詐騙話術？",
        "options": [
          "投資有風險，請謹慎評估",
          "月獲利20%，穩賺不賠",
          "建議分散投資降低風險",
          "請仔細閱讀投資說明書"
        ],
        "correct": 1,
        "explanation": "任何投資都有風險，沒有「穩賺不賠」的投資。聽到這種話術要立即警覺。",
        "category": "假投資詐騙"
      },
      {
        "id": 2,
        "question": "接到自稱檢察官的電話，要求你配合調查，正確的應對方式是？",
        "options": [
          "立即配合提供個人資料",
          "掛斷電話，主動撥打165查證",
          "要求對方提供證件照片",
          "按照指示到ATM操作"
        ],
        "correct": 1,
        "explanation": "真正的檢警絕不會在電話中做筆錄或要求提供個資。應立即掛斷並撥打165查證。",
        "category": "假檢警詐騙"
      },
      {
        "id": 3,
        "question": "收到「包裹配送異常」的簡訊，應該怎麼辦？",
        "options": [
          "立即點擊連結查看",
          "輸入個資重新配送",
          "刪除簡訊，直接聯繫寄件人",
          "轉發給朋友詢問"
        ],
        "correct": 2,
        "explanation": "這是典型的釣魚簡訊，不要點擊來路不明的連結，應該主動聯繫真正的寄件人確認。",
        "category": "釣魚詐騙"
      },
      {
        "id": 4,
        "question": "在LINE群組看到「投資老師」帶單獲利，你會？",
        "options": [
          "立即跟單投資",
          "小額試試水溫",
          "懷疑是詐騙群組",
          "詢問更多投資細節"
        ],
        "correct": 2,
        "explanation": "LINE投資群組通常是詐騙，群組內的「學員」都是詐騙集團的暗樁，營造獲利假象。",
        "category": "假投資詐騙"
      },
      {
        "id": 5,
        "question": "AI深偽技術最常被用於哪種詐騙？",
        "options": [
          "假冒親友緊急求救",
          "製作假投資廣告",
          "偽造身份證件",
          "以上皆是"
        ],
        "correct": 3,
        "explanation": "AI深偽技術被廣泛用於各種詐騙，包括聲音模仿、影像偽造等，讓詐騙更難辨識。",
        "category": "AI深偽詐騙"
      }
    ],
    "scenarios": [
      {
        "id": 1,
        "title": "假投資群組體驗",
        "description": "模擬被拉入LINE投資群組的完整過程",
        "steps": [
          {
            "step": 1,
            "content": "你在Facebook看到一則投資廣告，宣稱「AI智能選股，月獲利30%」",
            "choices": ["點擊了解詳情", "忽略廣告"],
            "feedback": {
              "點擊了解詳情": "你被引導加入LINE投資群組，已經踏入第一個陷阱！",
              "忽略廣告": "明智的選擇！避開了第一個陷阱，高獲利承諾通常是詐騙"
            }
          },
          {
            "step": 2,
            "content": "群組裡有人不斷分享獲利截圖，老師也在分析股市",
            "choices": ["相信是真的獲利", "懷疑是演戲"],
            "feedback": {
              "相信是真的獲利": "危險！這些都是詐騙集團的暗樁，獲利截圖都是偽造的",
              "懷疑是演戲": "正確！群組內的「學員」通常都是詐騙集團安排的暗樁"
            }
          },
          {
            "step": 3,
            "content": "老師私訊你，建議下載專屬投資APP開始投資",
            "choices": ["立即下載APP", "拒絕下載"],
            "feedback": {
              "立即下載APP": "你已經完全掉入陷阱！這是假的APP，你的錢將血本無歸",
              "拒絕下載": "明智的決定！來路不明的APP絕不能下載，避免了巨大損失"
            }
          }
        ]
      },
      {
        "id": 2,
        "title": "假檢警來電體驗",
        "description": "體驗接到假檢警電話的應對過程",
        "steps": [
          {
            "step": 1,
            "content": "接到自稱健保局的電話，說你的健保卡被盜用",
            "choices": ["詳細詢問情況", "立即掛斷電話"],
            "feedback": {
              "詳細詢問情況": "你可能已經開始被騙了，真正的公家機關不會主動來電",
              "立即掛斷電話": "很好！第一時間識破詐騙，公家機關不會主動來電告知此類事項"
            }
          },
          {
            "step": 2,
            "content": "對方說要轉接檢察官協助處理，請你不要掛斷",
            "choices": ["同意轉接檢察官", "拒絕並主動查證"],
            "feedback": {
              "同意轉接檢察官": "危險！真正的檢察官絕不會透過電話聯繫民眾",
              "拒絕並主動查證": "正確！主動撥打165或相關單位查證是最好的防範方式"
            }
          }
        ]
      }
    ]
  }
};

// Application state
let currentQuizQuestion = 0;
let quizScore = 0;
let quizAnswers = [];
let currentScenario = null;
let currentScenarioStep = 0;

// DOM Elements
const navButtons = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.section');
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeDashboard();
    initializeKnowledgeBase();
    initializeQuiz();
    initializeScenarios();
    initializeEmergencyContacts();
    initializeLegalInfo();
    initializeTools();
    initializeEventListeners();
});

// Navigation
function initializeNavigation() {
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const section = button.dataset.section;
            switchSection(section);
            
            // Update active nav button
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
}

function switchSection(sectionId) {
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
}

function goToHomepage() {
    switchSection('dashboard');
    navButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector('[data-section="dashboard"]').classList.add('active');
}

// Dashboard with charts
function initializeDashboard() {
    const ctx = document.getElementById('fraudChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['假投資詐騙', '愛情詐騙', '假檢警詐騙', 'AI深偽', '網購詐騙'],
            datasets: [{
                data: [35, 25, 20, 12, 8],
                backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 15,
                        usePointStyle: true
                    }
                }
            }
        }
    });
}

// Knowledge Base
function initializeKnowledgeBase() {
    const knowledgeGrid = document.querySelector('.knowledge-grid');
    const fraudTypes = appData.anti_fraud_data.詐騙類型;
    
    const colors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F'];
    
    knowledgeGrid.innerHTML = fraudTypes.map((type, index) => `
        <div class="knowledge-card" onclick="showKnowledgeDetail('${type.類型}')">
            <div class="knowledge-icon" style="background: ${colors[index % colors.length]}">
                <i class="fas ${getIconForType(type.類型)}"></i>
            </div>
            <h3>${type.類型}</h3>
            <div class="knowledge-meta">
                <span class="knowledge-amount">${type.損失金額}</span>
                <span class="knowledge-cases">${type.案件數}</span>
            </div>
            <p class="knowledge-description">${type.手法}</p>
            <div class="knowledge-keywords">
                ${type.關鍵字.map(keyword => `<span class="keyword-tag">${keyword}</span>`).join('')}
            </div>
            <div class="knowledge-actions">
                <button class="btn btn--sm btn--primary">了解更多</button>
            </div>
        </div>
    `).join('');
}

function getIconForType(type) {
    const iconMap = {
        '假投資詐騙': 'fa-chart-line',
        '網路購物詐騙': 'fa-shopping-cart',
        '假檢警詐騙': 'fa-user-shield',
        'AI深偽詐騙': 'fa-robot',
        '愛情詐騙(殺豬盤)': 'fa-heart-broken'
    };
    return iconMap[type] || 'fa-exclamation-triangle';
}

function showKnowledgeDetail(type) {
    const fraudType = appData.anti_fraud_data.詐騙類型.find(t => t.類型 === type);
    
    alert(`${fraudType.類型}\n\n` +
          `損失金額: ${fraudType.損失金額}\n` +
          `案件數: ${fraudType.案件數}\n\n` +
          `常見手法: ${fraudType.手法}\n\n` +
          `防範措施:\n${fraudType.防範措施.map(m => `• ${m}`).join('\n')}`);
}

// Quiz System
function initializeQuiz() {
    loadQuizQuestion();
}

function loadQuizQuestion() {
    const questions = appData.interactive_content.quiz_questions;
    const question = questions[currentQuizQuestion];
    
    document.getElementById('questionText').textContent = question.question;
    document.getElementById('currentQuestion').textContent = currentQuizQuestion + 1;
    
    const optionsContainer = document.getElementById('quizOptions');
    optionsContainer.innerHTML = question.options.map((option, index) => `
        <div class="quiz-option" onclick="selectQuizOption(${index})" data-index="${index}">
            ${option}
        </div>
    `).join('');
    
    // Update progress bar
    const progress = ((currentQuizQuestion) / questions.length) * 100;
    document.querySelector('.quiz-progress-fill').style.width = `${progress}%`;
    
    // Hide feedback and results
    document.getElementById('quizFeedback').classList.add('hidden');
    document.getElementById('quizResults').classList.add('hidden');
}

function selectQuizOption(selectedIndex) {
    const questions = appData.interactive_content.quiz_questions;
    const question = questions[currentQuizQuestion];
    const options = document.querySelectorAll('.quiz-option');
    
    // Remove previous selections
    options.forEach(option => {
        option.classList.remove('selected', 'correct', 'incorrect');
    });
    
    // Mark selection
    options[selectedIndex].classList.add('selected');
    
    // Check answer
    const isCorrect = selectedIndex === question.correct;
    quizAnswers.push({
        question: currentQuizQuestion,
        selected: selectedIndex,
        correct: question.correct,
        isCorrect: isCorrect
    });
    
    if (isCorrect) {
        quizScore++;
        options[selectedIndex].classList.add('correct');
    } else {
        options[selectedIndex].classList.add('incorrect');
        options[question.correct].classList.add('correct');
    }
    
    // Show feedback
    showQuizFeedback(isCorrect, question.explanation);
}

function showQuizFeedback(isCorrect, explanation) {
    const feedbackElement = document.getElementById('quizFeedback');
    const feedbackIcon = feedbackElement.querySelector('.feedback-icon');
    const feedbackTitle = feedbackElement.querySelector('.feedback-title');
    const feedbackExplanation = feedbackElement.querySelector('.feedback-explanation');
    
    feedbackIcon.className = `feedback-icon ${isCorrect ? 'correct' : 'incorrect'}`;
    feedbackTitle.textContent = isCorrect ? '答對了！' : '答錯了！';
    feedbackExplanation.textContent = explanation;
    
    feedbackElement.classList.remove('hidden');
}

function nextQuestion() {
    currentQuizQuestion++;
    
    if (currentQuizQuestion >= appData.interactive_content.quiz_questions.length) {
        showQuizResults();
    } else {
        loadQuizQuestion();
    }
}

function showQuizResults() {
    const totalQuestions = appData.interactive_content.quiz_questions.length;
    const percentage = Math.round((quizScore / totalQuestions) * 100);
    
    let message = '';
    if (percentage >= 80) {
        message = '優秀！您具備很好的防詐意識，請繼續保持警覺。';
    } else if (percentage >= 60) {
        message = '不錯！但還需要加強防詐知識，建議多了解相關資訊。';
    } else {
        message = '需要努力！建議您詳細閱讀防詐知識，提升防範能力。';
    }
    
    document.getElementById('finalScore').textContent = quizScore;
    document.getElementById('resultsMessage').textContent = message;
    document.getElementById('quizResults').classList.remove('hidden');
    
    // Update progress to 100%
    document.querySelector('.quiz-progress-fill').style.width = '100%';
}

function restartQuiz() {
    currentQuizQuestion = 0;
    quizScore = 0;
    quizAnswers = [];
    loadQuizQuestion();
}

// Scenarios
function initializeScenarios() {
    const scenariosGrid = document.querySelector('.scenarios-grid');
    const scenarios = appData.interactive_content.scenarios;
    
    scenariosGrid.innerHTML = scenarios.map(scenario => `
        <div class="scenario-card" onclick="startScenario(${scenario.id})">
            <div class="scenario-icon">
                <i class="fas fa-play-circle"></i>
            </div>
            <h3>${scenario.title}</h3>
            <p class="scenario-description">${scenario.description}</p>
            <button class="btn btn--primary">開始體驗</button>
        </div>
    `).join('');
}

function startScenario(scenarioId) {
    currentScenario = appData.interactive_content.scenarios.find(s => s.id === scenarioId);
    currentScenarioStep = 0;
    
    const modal = document.getElementById('scenarioModal');
    const title = document.getElementById('scenarioTitle');
    
    title.textContent = currentScenario.title;
    modal.classList.remove('hidden');
    
    loadScenarioStep();
}

function loadScenarioStep() {
    const step = currentScenario.steps[currentScenarioStep];
    const content = document.getElementById('scenarioContent');
    const choices = document.getElementById('scenarioChoices');
    const feedback = document.getElementById('scenarioFeedback');
    
    content.textContent = step.content;
    
    choices.innerHTML = step.choices.map(choice => `
        <button class="scenario-choice" onclick="selectScenarioChoice('${choice}')">${choice}</button>
    `).join('');
    
    feedback.classList.add('hidden');
}

function selectScenarioChoice(choice) {
    const step = currentScenario.steps[currentScenarioStep];
    const feedbackText = step.feedback[choice];
    
    const feedback = document.getElementById('scenarioFeedback');
    feedback.innerHTML = `
        <p>${feedbackText}</p>
        <button class="btn btn--primary" onclick="nextScenarioStep()">${currentScenarioStep < currentScenario.steps.length - 1 ? '繼續' : '完成'}</button>
    `;
    feedback.classList.remove('hidden');
}

function nextScenarioStep() {
    currentScenarioStep++;
    
    if (currentScenarioStep >= currentScenario.steps.length) {
        document.getElementById('scenarioModal').classList.add('hidden');
        alert('情境模擬完成！希望這個體驗能幫助您提高防詐意識。');
    } else {
        loadScenarioStep();
    }
}

function closeScenario() {
    document.getElementById('scenarioModal').classList.add('hidden');
}

// Emergency Contacts
function initializeEmergencyContacts() {
    const emergencyButtons = document.querySelectorAll('.emergency-call');
    
    emergencyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const phone = button.dataset.phone;
            makeEmergencyCall(phone);
        });
    });
}

function makeEmergencyCall(phone) {
    // Check if device supports tel: links
    if (window.navigator.userAgent.match(/Mobile|Android|iPhone|iPad/)) {
        window.location.href = `tel:${phone}`;
    } else {
        alert(`請撥打: ${phone}\n\n如果您是在電腦上瀏覽，請使用手機撥打此號碼。`);
    }
}

// Legal Information
function initializeLegalInfo() {
    const legalGrid = document.querySelector('.legal-grid');
    const legalInfo = appData.anti_fraud_data.法律條文;
    
    legalGrid.innerHTML = legalInfo.map(law => `
        <div class="legal-card">
            <div class="legal-icon">
                <i class="fas fa-balance-scale"></i>
            </div>
            <h3>${law.法規}</h3>
            <div class="legal-highlight">${law.重點}</div>
            <p><strong>適用範圍:</strong> ${law.適用}</p>
        </div>
    `).join('');
}

// Tools
function initializeTools() {
    const toolsGrid = document.querySelector('.tools-grid');
    const tools = appData.anti_fraud_data.防詐工具;
    
    toolsGrid.innerHTML = tools.map(tool => `
        <div class="tool-card">
            <div class="tool-icon">
                <i class="fas ${getToolIcon(tool.工具)}"></i>
            </div>
            <h3>${tool.工具}</h3>
            ${tool.類型 ? `<span class="tool-type">${tool.類型}</span>` : ''}
            <p class="tool-description">${tool.功能}</p>
            <div class="tool-info">
                ${tool.收費 ? `<p><strong>收費:</strong> ${tool.收費}</p>` : ''}
                ${tool.網址 ? `<button class="btn btn--outline" onclick="window.open('${tool.網址}', '_blank')">前往網站</button>` : ''}
                ${tool.工具.includes('165') ? `<button class="btn btn--primary" onclick="makeEmergencyCall('165')">撥打165</button>` : ''}
            </div>
        </div>
    `).join('');
}

function getToolIcon(toolName) {
    if (toolName.includes('165')) return 'fa-phone-alt';
    if (toolName.includes('網')) return 'fa-globe';
    if (toolName.includes('APP') || toolName.includes('Whoscall') || toolName.includes('趨勢')) return 'fa-mobile-alt';
    return 'fa-tools';
}

// Event Listeners
function initializeEventListeners() {
    // Quiz events
    document.getElementById('nextQuestion').addEventListener('click', nextQuestion);
    document.getElementById('restartQuiz').addEventListener('click', restartQuiz);
    document.getElementById('shareResults').addEventListener('click', shareQuizResults);
    
    // Scenario modal events
    document.getElementById('closeScenario').addEventListener('click', closeScenario);
    document.querySelector('.modal-backdrop').addEventListener('click', closeScenario);
    
    // Hero action buttons
    document.querySelector('[data-action="start-quiz"]').addEventListener('click', () => {
        switchSection('quiz');
        navButtons.forEach(btn => btn.classList.remove('active'));
        document.querySelector('[data-section="quiz"]').classList.add('active');
    });
    
    document.querySelector('[data-action="emergency-call"]').addEventListener('click', () => {
        makeEmergencyCall('165');
    });
    
    // Mobile menu
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    
    // Keyboard navigation
    document.addEventListener('keydown', handleKeyboardNavigation);
}

function shareQuizResults() {
    const text = `我在防詐知識中心測驗中得到 ${quizScore}/5 分！快來測試你的防詐能力：`;
    
    if (navigator.share) {
        navigator.share({
            title: '防詐測驗結果',
            text: text,
            url: window.location.href
        });
    } else {
        // Fallback for browsers that don't support Web Share API
        const textArea = document.createElement('textarea');
        textArea.value = text + ' ' + window.location.href;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('結果已複製到剪貼板！');
    }
}

function toggleMobileMenu() {
    const nav = document.querySelector('.nav');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
}

function handleKeyboardNavigation(e) {
    // ESC key closes modals
    if (e.key === 'Escape') {
        const modal = document.getElementById('scenarioModal');
        if (!modal.classList.contains('hidden')) {
            closeScenario();
        }
    }
    
    // Number keys for quiz options
    if (document.getElementById('quiz').classList.contains('active')) {
        const num = parseInt(e.key);
        if (num >= 1 && num <= 4) {
            const options = document.querySelectorAll('.quiz-option');
            if (options[num - 1] && !options[num - 1].classList.contains('selected')) {
                selectQuizOption(num - 1);
            }
        }
    }
}

// Utility functions
function formatPhoneNumber(phone) {
    return phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
}

function showAlert(title, message, type = 'info') {
    // Simple alert implementation - could be enhanced with custom modal
    alert(`${title}\n\n${message}`);
}

// Analytics and tracking (placeholder)
function trackEvent(category, action, label) {
    console.log(`Analytics: ${category} - ${action} - ${label}`);
}

// Initialize tooltips (if needed)
function initializeTooltips() {
    // Implementation for tooltips if needed
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('Application error:', e.error);
    showAlert('錯誤', '應用程式發生錯誤，請重新整理頁面。', 'error');
});

// Service worker registration (for future PWA functionality)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // navigator.serviceWorker.register('/sw.js');
    });
}