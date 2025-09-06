// 應用程式主要功能
class FinancialHealthApp {
    constructor() {
        this.quizData = null;
        this.currentQuiz = {
            questions: [],
            currentQuestionIndex: 0,
            score: 0,
            selectedAnswer: null,
            totalQuestions: 5
        };
        this.init();
    }

    async init() {
        this.setupEventListeners();
        this.setupScrollEffects();
        this.setupNavigation();
        this.setupCharts(); // 初始化圖表
        await this.loadQuizData();
        console.log('台灣全民財務健康學習平台已載入完成！');
    }

    setupEventListeners() {
        // 全螢幕切換按鈕
        document.getElementById('fullscreenBtn')?.addEventListener('click', this.toggleFullscreen.bind(this));

        // 返回頂端按鈕
        document.getElementById('backToTop')?.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // 新增: 漢堡下載菜單事件
        const downloadMenuBtn = document.getElementById('downloadMenuBtn');
        if (downloadMenuBtn) {
            downloadMenuBtn.addEventListener('click', (event) => {
                event.stopPropagation();
                document.getElementById('downloadDropdown').classList.toggle('show');
            });
        }
        // 點擊菜單外部時關閉菜單
        window.addEventListener('click', (event) => {
            if (!event.target.matches('.download-menu-btn, .download-menu-btn *')) {
                const dropdown = document.getElementById('downloadDropdown');
                if (dropdown?.classList.contains('show')) {
                    dropdown.classList.remove('show');
                }
            }
        });


        // 測驗相關按鈕
        document.getElementById('startQuiz')?.addEventListener('click', this.startQuiz.bind(this));
        document.getElementById('submitAnswer')?.addEventListener('click', this.submitAnswer.bind(this));
        document.getElementById('nextQuestion')?.addEventListener('click', this.nextQuestion.bind(this));
        document.getElementById('finishQuiz')?.addEventListener('click', this.finishQuiz.bind(this));
        document.getElementById('restartQuiz')?.addEventListener('click', this.restartQuiz.bind(this));

        // 全螢幕事件監聽
        document.addEventListener('fullscreenchange', this.onFullscreenChange.bind(this));
        document.addEventListener('webkitfullscreenchange', this.onFullscreenChange.bind(this));
        document.addEventListener('mozfullscreenchange', this.onFullscreenChange.bind(this));
        document.addEventListener('MSFullscreenChange', this.onFullscreenChange.bind(this));
    }

    setupScrollEffects() {
        const backToTop = document.getElementById('backToTop');
        
        window.addEventListener('scroll', () => {
            // 返回頂端按鈕顯示/隱藏
            if (window.scrollY > 300) {
                backToTop?.classList.add('visible');
            } else {
                backToTop?.classList.remove('visible');
            }

            // 導航高亮效果
            this.updateActiveNavigation();
        });
    }

    setupNavigation() {
        // 設置導航連結
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const href = link.getAttribute('href');
                if (href && href.startsWith('#')) {
                    const targetId = href.substring(1);
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({ 
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });
    }
    
    // 設定所有動態圖表
    setupCharts() {
        // 設定 Chart.js 全域預設值
        Chart.defaults.font.family = '"FKGroteskNeue", "Geist", "Inter", sans-serif';
        Chart.defaults.font.size = 14;
        Chart.defaults.color = '#626c71'; // --color-slate-500
        Chart.defaults.plugins.tooltip.backgroundColor = '#1f2121'; // --color-charcoal-700
        Chart.defaults.plugins.tooltip.titleFont = { size: 16, weight: 'bold' };
        Chart.defaults.plugins.tooltip.bodyFont = { size: 14 };
        Chart.defaults.plugins.tooltip.padding = 10;
        Chart.defaults.plugins.tooltip.cornerRadius = 8;
        Chart.defaults.plugins.legend.position = 'bottom';

        this.createDimensionsRadarChart();
        this.createAgeLineChart();
        this.createGoalsBarChart();
        this.createToolsBarChart();
    }
    
    // 1. 財務健康五大構面 - 雷達圖
    createDimensionsRadarChart() {
        const ctx = document.getElementById('dimensionsRadarChart')?.getContext('2d');
        if (!ctx) return;
        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['風險抵抗力', '日常生活支出', '心理富足程度', '財務信心', '財務規劃'],
                datasets: [{
                    label: '實際分數',
                    data: [65.2, 60.5, 58.9, 55.8, 52.1],
                    backgroundColor: 'rgba(50, 184, 198, 0.2)',
                    borderColor: 'rgba(50, 184, 198, 1)',
                    pointBackgroundColor: 'rgba(50, 184, 198, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(50, 184, 198, 1)',
                    borderWidth: 2
                }, {
                    label: '平均分數 (59.2)',
                    data: [59.2, 59.2, 59.2, 59.2, 59.2],
                    backgroundColor: 'rgba(255, 84, 89, 0.1)',
                    borderColor: 'rgba(255, 84, 89, 0.8)',
                    pointBackgroundColor: 'rgba(255, 84, 89, 0.8)',
                    borderDash: [5, 5],
                    borderWidth: 2,
                    pointRadius: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        angleLines: { color: 'rgba(0,0,0,0.1)' },
                        grid: { color: 'rgba(0,0,0,0.1)' },
                        pointLabels: { font: { size: 16 } },
                        suggestedMin: 0,
                        suggestedMax: 80
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            font: { size: 14 }
                        }
                    }
                }
            }
        });
    }

    // 2. 不同年齡層財務健康趨勢 - 折線圖
    createAgeLineChart() {
        const ctx = document.getElementById('ageLineChart')?.getContext('2d');
        if (!ctx) return;
        
        const peakIndex = 4; // 45-49歲
        const pointColors = Array(8).fill('rgba(41, 150, 161, 1)');
        pointColors[peakIndex] = 'rgba(255, 84, 89, 1)';
        const pointRadii = Array(8).fill(4);
        pointRadii[peakIndex] = 8;
        const pointHoverRadii = Array(8).fill(6);
        pointHoverRadii[peakIndex] = 10;

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['25-29歲', '30-34歲', '35-39歲', '40-44歲', '45-49歲', '50-54歲', '55-59歲', '60歲以上'],
                datasets: [{
                    label: '財務健康分數',
                    data: [56.2, 57.8, 58.1, 58.5, 61.1, 59.8, 58.9, 60.1],
                    fill: false,
                    borderColor: 'rgba(41, 150, 161, 1)',
                    tension: 0.1,
                    pointBackgroundColor: pointColors,
                    pointRadius: pointRadii,
                    pointHoverRadius: pointHoverRadii,
                    borderWidth: 3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: false,
                        suggestedMin: 55
                    }
                },
                plugins: {
                   legend: { display: false }
                }
            }
        });
    }

    // 3. 台灣民眾十大理財目標 - 水平長條圖
    createGoalsBarChart() {
        const ctx = document.getElementById('goalsBarChart')?.getContext('2d');
        if (!ctx) return;
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['退休金準備', '緊急預備金', '旅遊', '買房', '投資理財', '子女教育基金', '醫療準備', '創業基金', '債務償還', '其他'],
                datasets: [{
                    label: '民眾比例 (%)',
                    data: [58.6, 48.7, 45.2, 43.8, 41.0, 40.0, 32.0, 25.0, 22.0, 10.0],
                    backgroundColor: [
                        'rgba(29, 116, 128, 0.8)',
                        'rgba(41, 150, 161, 0.8)',
                        'rgba(50, 184, 198, 0.8)',
                        'rgba(98, 108, 113, 0.8)',
                        'rgba(230, 129, 97, 0.8)',
                        'rgba(192, 21, 47, 0.8)',
                        'rgba(168, 75, 47, 0.8)',
                        'rgba(94, 82, 64, 0.8)',
                        'rgba(31, 33, 33, 0.8)',
                        'rgba(119, 124, 124, 0.8)'
                    ],
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                    borderWidth: 1
                }]
            },
            options: {
                indexAxis: 'y', // 設定為水平長條圖
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: '百分比 (%)'
                        }
                    }
                },
                plugins: {
                    legend: { display: false }
                }
            }
        });
    }

    // 4. 理財工具使用分布 - 垂直長條圖
    createToolsBarChart() {
        const ctx = document.getElementById('toolsBarChart')?.getContext('2d');
        if (!ctx) return;
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['台幣存款', '定存', '股票', '保險', 'ETF', '基金', '房地產', '債券', '虛擬貨幣'],
                datasets: [{
                    label: '使用比例 (%)',
                    data: [59.4, 45.8, 43.0, 29.9, 25.6, 18.7, 15.2, 12.3, 8.9],
                    backgroundColor: 'rgba(33, 128, 141, 0.7)',
                    borderColor: 'rgba(29, 116, 128, 1)',
                    borderWidth: 2,
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: {
                        title: {
                            display: true,
                            text: '使用比例 (%)'
                        }
                    }
                }
            }
        });
    }


    updateActiveNavigation() {
        const sections = document.querySelectorAll('.section');
        const navLinks = document.querySelectorAll('.nav-menu a');
        
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
                currentSection = section.id;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.error(`無法進入全螢幕模式: ${err.message}`);
            });
        } else {
            document.exitFullscreen().catch(err => {
                console.error(`無法退出全螢幕模式: ${err.message}`);
            });
        }
    }

    onFullscreenChange() {
        const fullscreenIcon = document.getElementById('fullscreenIcon');
        if (document.fullscreenElement) {
            fullscreenIcon.textContent = '⛶';
            document.body.classList.add('fullscreen-mode');
        } else {
            fullscreenIcon.textContent = '⛶';
            document.body.classList.remove('fullscreen-mode');
        }
    }

    async loadQuizData() {
        // 載入測驗資料
        this.quizData = {
            "quiz_questions": [
                {
                    "id": 1,
                    "question": "根據國泰世華2023年調查，台灣人財務健康平均分數是多少？",
                    "options": ["A. 55.2分", "B. 59.2分", "C. 62.8分", "D. 66.3分"],
                    "correct": "B",
                    "explanation": "根據國泰世華銀行調查，台灣人財務健康平均分數為59.2分。"
                },
                {
                    "id": 2,
                    "question": "台灣人認為至少需要準備多少退休金才能安心退休？",
                    "options": ["A. 1000萬元", "B. 1200萬元", "C. 1431萬元", "D. 1600萬元"],
                    "correct": "C",
                    "explanation": "調查顯示，國人認為至少要準備1431萬元才能退休。"
                },
                {
                    "id": 3,
                    "question": "在財務健康五大構面中，台灣人表現最佳的是哪一項？",
                    "options": ["A. 財務規劃", "B. 風險抵抗力", "C. 財務信心", "D. 心理富足程度"],
                    "correct": "B",
                    "explanation": "台灣人在「風險抵抗力」構面表現最佳，近5成民眾儲蓄可支應6個月以上生活所需。"
                },
                {
                    "id": 4,
                    "question": "哪個年齡層被認為是台灣民眾財務健康狀態的重要分水嶺？",
                    "options": ["A. 35-39歲", "B. 40-44歲", "C. 45-49歲", "D. 50-54歲"],
                    "correct": "C",
                    "explanation": "45-49歲為重要分水嶺，平均達61.1分，因面臨多重財務壓力。"
                },
                {
                    "id": 5,
                    "question": "台灣人最主要的理財目標是什麼？",
                    "options": ["A. 買房", "B. 旅遊", "C. 退休金準備", "D. 子女教育基金"],
                    "correct": "C",
                    "explanation": "近6成民眾將「退休」列為財務目標，但多數沒有實際規劃。"
                },
                {
                    "id": 6,
                    "question": "台灣人最偏好的理財工具是什麼？",
                    "options": ["A. 股票", "B. 台幣存款", "C. 保險", "D. ETF"],
                    "correct": "B",
                    "explanation": "台幣存款(59.4%)是最主要的理財工具。"
                },
                {
                    "id": 7,
                    "question": "強化財務健康的三大關鍵不包括以下哪一項？",
                    "options": ["A. 計畫", "B. 紀律", "C. 技能", "D. 運氣"],
                    "correct": "D",
                    "explanation": "三大關鍵是計畫、紀律、技能，運氣不是可控因素。"
                },
                {
                    "id": 8,
                    "question": "台灣民眾在財務規劃方面最大的問題是什麼？",
                    "options": ["A. 收入太低", "B. 支出太高", "C. 超過3成未設立財務目標", "D. 投資知識不足"],
                    "correct": "C",
                    "explanation": "逾3成民眾過去一年未設立財務目標。"
                }
            ]
        };
    }

    startQuiz() {
        console.log('開始測驗');
        // 隨機選擇5題
        const allQuestions = [...this.quizData.quiz_questions];
        this.currentQuiz.questions = this.shuffleArray(allQuestions).slice(0, 5);
        this.currentQuiz.currentQuestionIndex = 0;
        this.currentQuiz.score = 0;
        this.currentQuiz.selectedAnswer = null;

        // 隱藏介紹，顯示測驗內容
        document.getElementById('quizIntro').classList.add('hidden');
        document.getElementById('quizContent').classList.remove('hidden');
        document.getElementById('quizResults').classList.add('hidden');

        // 更新總題數顯示
        document.getElementById('totalQuestions').textContent = this.currentQuiz.questions.length;
        
        this.displayQuestion();
    }

    displayQuestion() {
        const question = this.currentQuiz.questions[this.currentQuiz.currentQuestionIndex];
        
        // 更新問題編號
        document.getElementById('currentQuestion').textContent = this.currentQuiz.currentQuestionIndex + 1;
        document.getElementById('currentScore').textContent = this.currentQuiz.score;
        
        // 顯示問題
        document.getElementById('questionText').textContent = question.question;
        
        // 顯示選項
        const optionsContainer = document.getElementById('optionsContainer');
        optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'option-btn';
            button.textContent = option;
            button.setAttribute('data-answer', option.charAt(0));
            button.addEventListener('click', () => this.selectOption(button));
            optionsContainer.appendChild(button);
        });

        // 重置按鈕狀態
        document.getElementById('submitAnswer').disabled = true;
        document.getElementById('submitAnswer').classList.remove('hidden');
        document.getElementById('nextQuestion').classList.add('hidden');
        document.getElementById('finishQuiz').classList.add('hidden');
        document.getElementById('explanationContainer').classList.add('hidden');
        
        this.currentQuiz.selectedAnswer = null;
    }

    selectOption(selectedButton) {
        // 移除其他選項的選中狀態
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.classList.remove('selected');
        });
        
        // 選中當前選項
        selectedButton.classList.add('selected');
        this.currentQuiz.selectedAnswer = selectedButton.getAttribute('data-answer');
        
        // 啟用提交按鈕
        document.getElementById('submitAnswer').disabled = false;
    }

    submitAnswer() {
        const question = this.currentQuiz.questions[this.currentQuiz.currentQuestionIndex];
        const isCorrect = this.currentQuiz.selectedAnswer === question.correct;
        
        if (isCorrect) {
            this.currentQuiz.score++;
        }

        // 顯示答案結果
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.disabled = true;
            const answer = btn.getAttribute('data-answer');
            if (answer === question.correct) {
                btn.classList.add('correct');
            } else if (answer === this.currentQuiz.selectedAnswer && !isCorrect) {
                btn.classList.add('incorrect');
            }
        });

        // 顯示解釋
        document.getElementById('explanationText').textContent = question.explanation;
        document.getElementById('explanationContainer').classList.remove('hidden');

        // 更新分數顯示
        document.getElementById('currentScore').textContent = this.currentQuiz.score;

        // 隱藏提交按鈕，顯示下一題或完成按鈕
        document.getElementById('submitAnswer').classList.add('hidden');
        
        if (this.currentQuiz.currentQuestionIndex < this.currentQuiz.questions.length - 1) {
            document.getElementById('nextQuestion').classList.remove('hidden');
        } else {
            document.getElementById('finishQuiz').classList.remove('hidden');
        }
    }

    nextQuestion() {
        this.currentQuiz.currentQuestionIndex++;
        this.displayQuestion();
    }

    finishQuiz() {
        // 隱藏測驗內容，顯示結果
        document.getElementById('quizContent').classList.add('hidden');
        document.getElementById('quizResults').classList.remove('hidden');

        // 計算分數百分比
        const percentage = Math.round((this.currentQuiz.score / this.currentQuiz.questions.length) * 100);
        
        // 顯示結果
        document.getElementById('finalScore').textContent = this.currentQuiz.score;
        document.getElementById('totalScore').textContent = this.currentQuiz.questions.length;
        document.getElementById('scorePercentage').textContent = percentage;

        // 生成結果分析
        this.generateResultAnalysis(percentage);
    }

    generateResultAnalysis(percentage) {
        const analysisContainer = document.getElementById('resultAnalysis');
        const recommendationsContainer = document.getElementById('recommendations');
        
        let analysisText = '';
        let recommendations = [];

        if (percentage >= 80) {
            analysisText = '🎉 優秀！您的財務健康素養非常出色，對於台灣財務健康現況有深入的了解。您已經具備了良好的財務知識基礎，能夠做出明智的理財決策。';
            recommendations = [
                '持續關注最新的財務健康研究報告',
                '可以考慮成為身邊朋友的理財諮詢顧問',
                '定期檢視並調整個人財務規劃策略'
            ];
        } else if (percentage >= 60) {
            analysisText = '👍 良好！您對台灣財務健康狀況有不錯的認識，但還有進步的空間。建議您繼續學習相關知識，特別是在財務規劃和投資工具方面。';
            recommendations = [
                '深入了解台灣五大財務健康構面',
                '學習更多退休規劃相關知識',
                '關注不同年齡層的財務規劃重點',
                '定期閱讀財務健康相關報告'
            ];
        } else if (percentage >= 40) {
            analysisText = '📚 需要加強！您的財務健康素養有待提升。建議多閱讀相關資料，了解台灣民眾的財務現況，這將有助於您做出更好的理財決策。';
            recommendations = [
                '仔細研讀國泰世華財務健康調查報告',
                '了解台灣人常用的理財工具及其特性',
                '學習基礎的財務規劃概念',
                '參與財務教育相關課程或講座'
            ];
        } else {
            analysisText = '⚠️ 急需改善！您對台灣財務健康現況的了解較為不足。強烈建議您從基礎開始學習，建立正確的財務健康概念。';
            recommendations = [
                '從基礎財務概念開始學習',
                '詳細閱讀本頁面提供的所有分析資料',
                '下載相關PDF報告進行深入研讀',
                '尋求專業理財顧問的協助',
                '參加財務素養基礎課程'
            ];
        }

        analysisContainer.innerHTML = `<p>${analysisText}</p>`;
        
        const recommendationsList = document.createElement('ul');
        recommendations.forEach(rec => {
            const li = document.createElement('li');
            li.textContent = rec;
            recommendationsList.appendChild(li);
        });
        recommendationsContainer.innerHTML = '';
        recommendationsContainer.appendChild(recommendationsList);
    }

    restartQuiz() {
        // 重置測驗狀態
        this.currentQuiz = {
            questions: [],
            currentQuestionIndex: 0,
            score: 0,
            selectedAnswer: null,
            totalQuestions: 5
        };

        // 顯示介紹頁面
        document.getElementById('quizIntro').classList.remove('hidden');
        document.getElementById('quizContent').classList.add('hidden');
        document.getElementById('quizResults').classList.add('hidden');

        // 清除結果內容
        document.getElementById('resultAnalysis').innerHTML = '';
        document.getElementById('recommendations').innerHTML = '';
    }

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
}

// 下載功能
function downloadFile(filename, displayName) {
    // 建立一個隱藏的 <a> 元素來觸發下載
    const link = document.createElement('a');
    // 假設 PDF 檔案與 index.html 在同一個資料夾
    link.href = `./${filename}`;
    // 設定下載的檔案名稱
    link.download = `${displayName}.pdf`;
    link.style.display = 'none';
    document.body.appendChild(link);
    // 模擬點擊來開始下載
    link.click();
    // 下載後移除元素
    document.body.removeChild(link);
}

// 初始化應用程式
document.addEventListener('DOMContentLoaded', () => {
    const app = new FinancialHealthApp();
    
    // 添加載入動畫效果
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });
});