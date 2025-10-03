// 應用程式主要類別
class InvestmentEducationApp {
    constructor() {
        this.currentPage = 'home';
        this.flashcards = [];
        this.quizQuestions = [];
        this.currentFlashcardIndex = 0;
        this.currentQuizIndex = 0;
        this.learnedCards = new Set();
        this.quizAnswers = [];
        this.filteredCards = [];
        
        this.init();
    }

    async init() {
        try {
            // 載入數據
            await this.loadData();
            
            // 初始化各個功能模組
            this.initNavigation();
            this.initFlashcards();
            this.initQuiz();
            this.initDataVisualization();
            this.initCalculator();
            this.initFraudPreventionPage(); // 新增：初始化防詐頁面功能
            
            // 顯示首頁
            this.showPage('home');
            
            console.log('應用程式初始化完成');
        } catch (error) {
            console.error('初始化失敗:', error);
        }
    }

    async loadData() {
        // 從提供的JSON數據載入
        const data = {
            "flashcards": [
                {"id": 1, "question": "什麼是複利？", "answer": "複利是將利息加入本金，再以新的本金計算下一期利息的方式，讓利息本身也會產生利息，達到利滾利的效果。", "category": "複利概念"},
                {"id": 2, "question": "72法則的公式是什麼？", "answer": "72 ÷ (利率×100) ≒ 本金變兩倍的年數。例如：7.2%利率約需10年本金翻倍。", "category": "複利計算"},
                {"id": 3, "question": "彼得林區雞尾酒理論第一階段的特徵是什麼？", "answer": "賓客告訴基金經理人股票市場有多危險，然後轉身跟牙醫聊天。這表示股市將觸底反轉，是買進時機。", "category": "投資理論"},
                {"id": 4, "question": "什麼是系統風險？", "answer": "系統風險是無法分散的風險，也就是無法避免的風險，如政經情勢變動、通貨膨脹等影響整體市場的因素。", "category": "投資風險"},
                {"id": 5, "question": "三錢理論中的『保命錢』有什麼特點？", "answer": "保命錢的特點是就算發生風險，也要盡可能維持資產安全，需要安全且易變現，不追求報酬，工具如現金、定存、保險。", "category": "理財規劃"},
                {"id": 6, "question": "巴菲特說過什麼著名的複利格言？", "answer": "「世界上最強大的力量是什麼？複利。」(The greatest force in the world? Compound interest.)", "category": "投資名言"},
                {"id": 7, "question": "雞尾酒理論第四階段代表什麼市場狀況？", "answer": "第四階段是大部分賓客都圍著基金經理人，告訴他應該買哪些股票。這代表行情過熱，股市即將開始下跌，應該趕快出場。", "category": "投資理論"},
                {"id": 8, "question": "什麼是非系統風險？", "answer": "非系統風險是個別單位獨有的風險，可以透過分散投資來降低，如公司營運風險、產業風險、信用風險等。", "category": "投資風險"},
                {"id": 9, "question": "滾雪球理論的核心概念是什麼？", "answer": "人生就像雪球，最重要的是尋找夠濕的雪（報酬率）和夠長的坡道（時間）。設定理財目標→決定時間跟利率→考慮本金。", "category": "投資理論"},
                {"id": 10, "question": "華倫巴菲特40餘年的平均年報酬率約為多少？", "answer": "華倫巴菲特（波克夏控股）40餘年平均年報酬率約為20%。", "category": "投資大師"},
                {"id": 11, "question": "投資錢在三錢理論中的定位是什麼？", "answer": "投資錢是需要用錢時有錢用的穩健資金，追求夠用的報酬，風險較小，建議工具是大盤指數或被動投資。", "category": "理財規劃"},
                {"id": 12, "question": "為什麼越早開始投資越好？", "answer": "因為複利效果需要時間發揮威力。同樣的投資金額，越早開始能享受更長的複利累積時間，最終獲得更高的報酬。", "category": "投資概念"},
                {"id": 13, "question": "什麼是倖存者偏差？", "answer": "倖存者偏差是指只看到成功的例子，而忽略失敗的案例，導致高估成功機率、忽略失敗原因的認知偏誤。", "category": "行為偏誤"},
                {"id": 14, "question": "投機錢在三錢理論中扮演什麼角色？", "answer": "投機錢用於加速目標達成或興趣投資，屬於積極型資金，追求高報酬但承擔較大風險，方式眾多。", "category": "理財規劃"},
                {"id": 15, "question": "彼得林區管理麥哲倫基金13年的平均年報酬率是多少？", "answer": "彼得林區管理麥哲倫基金13年期間，平均年報酬率約為29%。", "category": "投資大師"},
                {"id": 16, "question": "什麼是損失規避偏誤？", "answer": "損失規避是指人們對損失比對等金額的獲利更加敏感，通常損失的痛苦是獲利快樂的2-3倍。", "category": "行為偏誤"},
                {"id": 17, "question": "投資的兩個風險分別是什麼？", "answer": "投資的兩個風險分別是：1.結果的風險（總報酬的不確定性）2.過程的風險（波動程度的不確定性）", "category": "投資風險"},
                {"id": 18, "question": "雞尾酒理論第二階段的投資策略是什麼？", "answer": "第二階段賓客寧可跟牙醫聊天也不談股票，表示股市已開始上漲但沒什麼人注意到，此時可以持續加碼。", "category": "投資理論"},
                {"id": 19, "question": "什麼是確認偏誤？", "answer": "確認偏誤是指人們傾向於尋找、解釋和回憶支持自己既有信念或假設的訊息，而忽略或排斥矛盾的證據。", "category": "行為偏誤"},
                {"id": 20, "question": "先求不敗再求勝的投資原則是什麼？", "answer": "先求不敗再求勝的原則是：1.少虧錢 2.參考第一條。意思是在投資中首要目標是保護本金，避免重大損失。", "category": "投資原則"},
                {"id": 21, "question": "LTCM長期資本管理公司的教訓是什麼？", "answer": "LTCM雖然前幾年有高報酬（21%-43%），但1998年虧損92%，說明即使是夢幻團隊也可能因過度自信和槓桿而慘敗。", "category": "投資案例"},
                {"id": 22, "question": "什麼是從眾行為偏誤？", "answer": "從眾行為（羊群效應）是指投資人傾向於跟隨大多數人的投資行為，而不是基於自己的分析做決定。", "category": "行為偏誤"},
                {"id": 23, "question": "通貨膨脹為什麼是投資的主要原因之一？", "answer": "因為通貨膨脹會侵蝕現金的購買力，如果不投資獲得報酬來對抗通膨，實質財富會逐漸減少。", "category": "投資概念"},
                {"id": 24, "question": "Jesse L. Livermore破產三次後給投資人什麼啟示？", "answer": "即使是傳奇交易員也會犯錯和破產，提醒投資人要控制風險、保持謙遜，並且「穩穩把球推回去」。", "category": "投資案例"},
                {"id": 25, "question": "為什麼說成功為失敗之母？", "answer": "因為過去成功的投資方法在不同的市場環境下可能失效，過度依賴過去的成功經驗反而可能導致未來的失敗。", "category": "投資心理"},
                {"id": 26, "question": "散戶要達到長期年化7%報酬需要什麼條件？", "answer": "散戶要長期年化7%，需要觀念很好，或心臟夠強（能承受市場波動）。", "category": "投資現實"},
                {"id": 27, "question": "什麼是控制的錯覺偏誤？", "answer": "控制的錯覺是指投資人高估自己控制投資結果的能力，認為可以透過技巧或努力來控制本質上隨機的市場結果。", "category": "行為偏誤"},
                {"id": 28, "question": "雞尾酒理論第三階段的特徵和投資建議？", "answer": "第三階段是賓客圍著基金經理人熱烈討論股票，沒人理會牙醫。這表示股市已離頭部不遠，可以分批逢高調節。", "category": "投資理論"},
                {"id": 29, "question": "如何防範金融詐騙的五不原則？", "answer": "五不原則：1.不接陌生來電 2.不點未知連結 3.不聽投資明牌 4.不怕莫名威脅 5.不給個人資料。遇疑慮撥打165專線。", "category": "防詐騙"},
                {"id": 30, "question": "投資與投機的差別是什麼？", "answer": "投資=較高的獲勝機會×合理的報酬（夠用的錢）；投機=很低的獲勝機會×很高的利潤（加速目標達成）", "category": "投資概念"},
                {"id": 31, "question": "為什麼要合理分散投資？", "answer": "因為投資絕對無法保證，而合理分散是降低非系統風險的重要方法，可以減少單一投資失敗對整體投資組合的影響。", "category": "投資策略"},
                {"id": 32, "question": "什麼是錨定偏見？", "answer": "錨定偏見是指人們在做決定時，會過分依賴最先獲得的資訊（錨點），後續的判斷都會受到這個錨點的影響。", "category": "行為偏誤"}
            ],
            "fill_in_blanks": [
                {"id": 1, "question": "複利的計算公式是：本利和 = 本金 × (1 + ______)^期間", "answer": "年利率", "explanation": "複利公式中，年利率是關鍵變數，決定了資金增長的速度。", "category": "複利計算"},
                {"id": 2, "question": "72法則：72 ÷ (______×100) ≒ 本金變兩倍的年數", "answer": "利率", "explanation": "72法則是快速估算複利效果的方法，利率是分母的關鍵變數。", "category": "複利計算"},
                {"id": 3, "question": "雞尾酒理論第一階段，賓客告訴基金經理人______有多危險", "answer": "股票市場", "explanation": "第一階段人們對股市非常悲觀，認為股票市場很危險。", "category": "投資理論"},
                {"id": 4, "question": "三錢理論中，______錢追求的是夠用的報酬", "answer": "投資", "explanation": "投資錢位於三錢理論的中間位置，追求穩健且夠用的報酬。", "category": "理財規劃"},
                {"id": 5, "question": "______風險是無法分散的風險，也就是無法避免的風險", "answer": "系統", "explanation": "系統風險影響整體市場，無法透過分散投資來消除。", "category": "投資風險"},
                {"id": 6, "question": "滾雪球理論：人生就像雪球，重要的是找到夠濕的雪（______）和夠長的坡道（______）", "answer": "報酬率, 時間", "explanation": "滾雪球理論強調報酬率和時間是複利效應的兩大關鍵要素。", "category": "投資理論"},
                {"id": 7, "question": "彼得林區管理______基金13年，平均年報酬率約29%", "answer": "麥哲倫", "explanation": "彼得林區因管理麥哲倫基金的優異表現而聞名於世。", "category": "投資大師"},
                {"id": 8, "question": "______偏差是指只看到成功的例子，而忽略失敗的案例", "answer": "倖存者", "explanation": "倖存者偏差是常見的認知偏誤，容易讓人高估成功的機率。", "category": "行為偏誤"},
                {"id": 9, "question": "投資的兩個風險是結果的風險和______的風險", "answer": "過程", "explanation": "過程風險指的是投資期間的波動程度，即使最終結果良好也可能經歷劇烈波動。", "category": "投資風險"},
                {"id": 10, "question": "______規避是指人們對損失比對等金額的獲利更加敏感", "answer": "損失", "explanation": "損失規避是行為經濟學的重要概念，解釋了人們的風險厭惡行為。", "category": "行為偏誤"},
                {"id": 11, "question": "華倫巴菲特40餘年的平均年報酬率約為______%", "answer": "20", "explanation": "巴菲特長期投資的優異表現成為投資界的典範。", "category": "投資大師"},
                {"id": 12, "question": "三錢理論中，______錢不追求報酬，注重安全和易變現", "answer": "保命", "explanation": "保命錢是三錢理論中最保守的部分，主要目的是保障基本生活需求。", "category": "理財規劃"},
                {"id": 13, "question": "雞尾酒理論第四階段，賓客開始主動向基金經理人______股票", "answer": "推薦", "explanation": "第四階段人人都成了投資專家，開始推薦股票，代表市場過熱。", "category": "投資理論"},
                {"id": 14, "question": "______行為是指投資人跟隨大多數人的投資行為，也稱為羊群效應", "answer": "從眾", "explanation": "從眾行為是金融市場中常見的群體心理現象。", "category": "行為偏誤"},
                {"id": 15, "question": "______通膨脹是投資的主要原因之一，因為它會侵蝕現金的購買力", "answer": "通貨", "explanation": "通貨膨脹風險是促使人們投資的重要動機。", "category": "投資概念"},
                {"id": 16, "question": "先求不敗再求勝的第一個原則是：少______錢", "answer": "虧", "explanation": "保護本金、避免損失是投資成功的基礎。", "category": "投資原則"},
                {"id": 17, "question": "______偏誤是指人們只尋找支持自己觀點的資訊，忽略矛盾證據", "answer": "確認", "explanation": "確認偏誤會導致投資決策缺乏客觀性。", "category": "行為偏誤"},
                {"id": 18, "question": "雞尾酒理論第二階段，股市已上漲約______%但沒什麼人注意", "answer": "15", "explanation": "第二階段股市已有一定漲幅，但大眾關注度仍低。", "category": "投資理論"},
                {"id": 19, "question": "LTCM在1998年虧損______%，證明即使專家團隊也可能慘敗", "answer": "92", "explanation": "LTCM的慘敗成為金融史上著名的風險管理教訓。", "category": "投資案例"},
                {"id": 20, "question": "散戶要達到長期年化7%報酬，需要______很好或心臟夠強", "answer": "觀念", "explanation": "正確的投資觀念和承受波動的能力是散戶成功投資的關鍵。", "category": "投資現實"},
                {"id": 21, "question": "______的錯覺是指投資人高估自己控制投資結果的能力", "answer": "控制", "explanation": "控制的錯覺會讓投資人過度自信，忽視市場的隨機性。", "category": "行為偏誤"},
                {"id": 22, "question": "防範金融詐騙的五不原則第一個是：不接______來電", "answer": "陌生", "explanation": "不接陌生來電是防詐騙的基本原則。", "category": "防詐騙"},
                {"id": 23, "question": "投資=較高的獲勝機會×______的報酬", "answer": "合理", "explanation": "投資追求的是合理且可持續的報酬，而非暴利。", "category": "投資概念"},
                {"id": 24, "question": "合理______是降低投資風險的唯一重要原則", "answer": "分散", "explanation": "分散投資是現代投資組合理論的核心概念。", "category": "投資策略"},
                {"id": 25, "question": "______偏見是指人們過分依賴最先獲得的資訊做決定", "answer": "錨定", "explanation": "錨定偏見會影響後續判斷的客觀性。", "category": "行為偏誤"},
                {"id": 26, "question": "成功為______之母，過去的成功方法在不同環境下可能失效", "answer": "失敗", "explanation": "這句話提醒投資人不要過度依賴過去的成功經驗。", "category": "投資心理"},
                {"id": 27, "question": "雞尾酒理論第三階段，股市已上漲約______%", "answer": "30", "explanation": "第三階段股市漲幅已相當可觀，開始吸引大眾關注。", "category": "投資理論"},
                {"id": 28, "question": "______風險是個別單位獨有的風險，可以透過分散投資降低", "answer": "非系統", "explanation": "非系統風險是可分散的風險，這是分散投資的理論基礎。", "category": "投資風險"},
                {"id": 29, "question": "Jesse L. Livermore是傳奇______員，但也破產了三次", "answer": "交易", "explanation": "即使是傳奇交易員也難免犯錯，強調風險控制的重要性。", "category": "投資案例"},
                {"id": 30, "question": "約翰涅夫管理溫莎基金31年，平均年報酬率約______%", "answer": "13.8", "explanation": "約翰涅夫是價值投資的先驅，以本益比投資法著稱。", "category": "投資大師"}
            ]
        };
        
        this.flashcards = data.flashcards;
        this.quizQuestions = data.fill_in_blanks;
        this.filteredCards = [...this.flashcards];
    }

    initNavigation() {
        // 導航連結點擊事件
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = link.dataset.page;
                this.showPage(page);
            });
        });

        // 導航卡片點擊事件
        const navCards = document.querySelectorAll('.nav-card');
        navCards.forEach(card => {
            card.addEventListener('click', () => {
                const page = card.dataset.page;
                this.showPage(page);
            });
        });

        // 行動裝置選單切換
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');
        
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // 點擊選單項目後關閉行動選單
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    showPage(pageId) {
        // 隱藏所有頁面
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => {
            page.classList.remove('active');
        });

        // 顯示指定頁面
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');
            this.currentPage = pageId;

            // 更新導航狀態
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.dataset.page === pageId) {
                    link.classList.add('active');
                }
            });

            // 頁面特定初始化
            switch (pageId) {
                case 'flashcards':
                    this.displayFlashcard();
                    break;
                case 'quiz':
                    this.displayQuizQuestion();
                    break;
                case 'data':
                    this.initDataVisualization();
                    break;
                case 'calculator':
                    this.calculateCompoundInterest();
                    break;
            }
        }
    }

    initFlashcards() {
        this.currentFlashcardIndex = 0;
        this.filteredCards = [...this.flashcards];

        // 閃卡翻轉事件
        const flashcard = document.getElementById('flashcard');
        flashcard.addEventListener('click', () => {
            flashcard.classList.toggle('flipped');
        });

        // 導航按鈕
        document.getElementById('prev-card').addEventListener('click', () => {
            this.previousFlashcard();
        });

        document.getElementById('next-card').addEventListener('click', () => {
            this.nextFlashcard();
        });

        // 標記已學會
        document.getElementById('mark-learned').addEventListener('click', () => {
            this.markCardAsLearned();
        });

        // 分類篩選
        document.getElementById('category-filter').addEventListener('change', (e) => {
            this.filterFlashcards(e.target.value);
        });

        this.updateFlashcardProgress();
    }

    displayFlashcard() {
        if (this.filteredCards.length === 0) return;

        const card = this.filteredCards[this.currentFlashcardIndex];
        
        document.getElementById('card-category').textContent = card.category;
        document.getElementById('card-question').textContent = card.question;
        document.getElementById('card-answer').textContent = card.answer;
        
        // 重置翻轉狀態
        document.getElementById('flashcard').classList.remove('flipped');
        
        this.updateFlashcardProgress();
    }

    previousFlashcard() {
        if (this.currentFlashcardIndex > 0) {
            this.currentFlashcardIndex--;
        } else {
            this.currentFlashcardIndex = this.filteredCards.length - 1;
        }
        this.displayFlashcard();
    }

    nextFlashcard() {
        if (this.currentFlashcardIndex < this.filteredCards.length - 1) {
            this.currentFlashcardIndex++;
        } else {
            this.currentFlashcardIndex = 0;
        }
        this.displayFlashcard();
    }

    markCardAsLearned() {
        const currentCard = this.filteredCards[this.currentFlashcardIndex];
        this.learnedCards.add(currentCard.id);
        this.updateFlashcardProgress();
        this.nextFlashcard();
    }

    filterFlashcards(category) {
        if (category === 'all') {
            this.filteredCards = [...this.flashcards];
        } else {
            this.filteredCards = this.flashcards.filter(card => card.category === category);
        }
        
        this.currentFlashcardIndex = 0;
        this.displayFlashcard();
    }

    updateFlashcardProgress() {
        const current = this.currentFlashcardIndex + 1;
        const total = this.filteredCards.length;
        const learned = this.learnedCards.size;

        document.getElementById('card-counter').textContent = `${current} / ${total}`;
        document.getElementById('learned-count').textContent = learned;
        document.getElementById('total-cards').textContent = this.flashcards.length;

        const progressPercentage = (current / total) * 100;
        document.getElementById('progress-fill').style.width = `${progressPercentage}%`;
    }

    initQuiz() {
        this.currentQuizIndex = 0;
        this.quizAnswers = new Array(this.quizQuestions.length).fill(null);

        // 檢查答案按鈕
        document.getElementById('check-answer').addEventListener('click', () => {
            this.checkQuizAnswer();
        });

        // Enter鍵檢查答案
        document.getElementById('quiz-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.checkQuizAnswer();
            }
        });

        // 導航按鈕
        document.getElementById('prev-question').addEventListener('click', () => {
            this.previousQuestion();
        });

        document.getElementById('next-question').addEventListener('click', () => {
            this.nextQuestion();
        });

        // 重新開始測驗
        document.getElementById('restart-quiz').addEventListener('click', () => {
            this.restartQuiz();
        });

        this.updateQuizProgress();
    }

    displayQuizQuestion() {
        if (this.currentQuizIndex >= this.quizQuestions.length) {
            this.showQuizResults();
            return;
        }

        const question = this.quizQuestions[this.currentQuizIndex];
        
        document.getElementById('quiz-question').textContent = question.question;
        document.getElementById('quiz-input').value = this.quizAnswers[this.currentQuizIndex] || '';
        
        // 清除之前的反饋
        this.clearQuizFeedback();
        
        this.updateQuizProgress();
        this.updateNavigationButtons();
    }

    checkQuizAnswer() {
        const userAnswer = document.getElementById('quiz-input').value.trim();
        const currentQuestion = this.quizQuestions[this.currentQuizIndex];
        const correctAnswers = currentQuestion.answer.split(', ').map(a => a.trim().toLowerCase());
        
        this.quizAnswers[this.currentQuizIndex] = userAnswer;

        const feedback = document.getElementById('quiz-feedback');
        const explanation = document.getElementById('quiz-explanation');

        if (correctAnswers.includes(userAnswer.toLowerCase()) || 
            correctAnswers.some(correct => userAnswer.toLowerCase().includes(correct))) {
            feedback.textContent = '正確！✓';
            feedback.className = 'quiz-feedback correct';
        } else {
            feedback.textContent = `答錯了！正確答案：${currentQuestion.answer}`;
            feedback.className = 'quiz-feedback incorrect';
        }

        explanation.textContent = currentQuestion.explanation;
        explanation.style.display = 'block';

        this.updateQuizProgress();
    }

    clearQuizFeedback() {
        document.getElementById('quiz-feedback').textContent = '';
        document.getElementById('quiz-feedback').className = 'quiz-feedback';
        document.getElementById('quiz-explanation').style.display = 'none';
    }

    previousQuestion() {
        if (this.currentQuizIndex > 0) {
            this.currentQuizIndex--;
            this.displayQuizQuestion();
        }
    }

    nextQuestion() {
        if (this.currentQuizIndex < this.quizQuestions.length - 1) {
            this.currentQuizIndex++;
            this.displayQuizQuestion();
        } else {
            this.showQuizResults();
        }
    }

    updateNavigationButtons() {
        const prevBtn = document.getElementById('prev-question');
        const nextBtn = document.getElementById('next-question');

        prevBtn.disabled = this.currentQuizIndex === 0;
        
        if (this.currentQuizIndex === this.quizQuestions.length - 1) {
            nextBtn.textContent = '完成測驗';
        } else {
            nextBtn.textContent = '下一題';
        }
    }

    updateQuizProgress() {
        const current = this.currentQuizIndex + 1;
        const total = this.quizQuestions.length;
        const answered = this.quizAnswers.filter(answer => answer !== null).length;
        const correct = this.calculateCorrectAnswers();

        document.getElementById('quiz-current').textContent = current;
        document.getElementById('quiz-total').textContent = total;
        
        const accuracy = answered > 0 ? Math.round((correct / answered) * 100) : 0;
        document.getElementById('quiz-accuracy').textContent = `${accuracy}%`;

        const progressPercentage = (current / total) * 100;
        document.getElementById('quiz-progress-fill').style.width = `${progressPercentage}%`;
    }

    calculateCorrectAnswers() {
        let correct = 0;
        this.quizAnswers.forEach((answer, index) => {
            if (answer !== null) {
                const question = this.quizQuestions[index];
                const correctAnswers = question.answer.split(', ').map(a => a.trim().toLowerCase());
                if (correctAnswers.includes(answer.toLowerCase()) || 
                    correctAnswers.some(correctAns => answer.toLowerCase().includes(correctAns))) {
                    correct++;
                }
            }
        });
        return correct;
    }

    showQuizResults() {
        const totalQuestions = this.quizQuestions.length;
        const correctAnswers = this.calculateCorrectAnswers();
        const accuracy = Math.round((correctAnswers / totalQuestions) * 100);

        document.getElementById('final-score').textContent = correctAnswers;
        document.getElementById('final-accuracy').textContent = `${accuracy}%`;

        // 學習建議
        let recommendation = '';
        if (accuracy >= 90) {
            recommendation = '優秀！您對投資理財知識掌握得很好，可以繼續深入學習更高階的投資策略。';
        } else if (accuracy >= 70) {
            recommendation = '不錯！您已經掌握了基本的投資概念，建議多練習複利計算和風險管理。';
        } else if (accuracy >= 50) {
            recommendation = '還需加油！建議重複學習閃卡內容，特別關注投資基礎概念和行為偏誤。';
        } else {
            recommendation = '需要更多學習！建議先從分析摘要開始，建立基礎投資知識後再進行測驗。';
        }

        document.getElementById('recommendation-text').textContent = recommendation;
        document.getElementById('quiz-results').style.display = 'block';
    }

    restartQuiz() {
        this.currentQuizIndex = 0;
        this.quizAnswers = new Array(this.quizQuestions.length).fill(null);
        document.getElementById('quiz-results').style.display = 'none';
        this.displayQuizQuestion();
    }

    initDataVisualization() {
        this.create72RuleTable();
        this.createMastersChart();
        this.createCompoundChart();
        this.createRiskAnalysis();
    }

    create72RuleTable() {
        const rates = [1.0, 2.0, 5.0, 7.2, 10.0, 15.0, 20.0];
        const tableBody = document.getElementById('rule72-table');
        tableBody.innerHTML = '';

        rates.forEach(rate => {
            const years = Math.round((72 / rate) * 10) / 10;
            const row = `
                <tr>
                    <td>${rate}%</td>
                    <td>${years}年</td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });
    }

    createMastersChart() {
        const ctx = document.getElementById('masters-chart');
        if (!ctx) return;

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['華倫巴菲特', '彼得林區', '約翰涅夫', '哈佛校務基金', '耶魯校務基金'],
                datasets: [{
                    label: '平均年報酬率(%)',
                    data: [20, 29, 13.8, 15, 16],
                    backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: '年報酬率(%)'
                        }
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: '投資大師績效比較'
                    },
                    legend: {
                        display: false
                    }
                }
            }
        });
    }

    createCompoundChart() {
        const ctx = document.getElementById('compound-chart');
        if (!ctx) return;

        const years = Array.from({length: 21}, (_, i) => i);
        const data5 = years.map(year => 10000 * Math.pow(1.05, year));
        const data10 = years.map(year => 10000 * Math.pow(1.10, year));
        const data15 = years.map(year => 10000 * Math.pow(1.15, year));

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: years,
                datasets: [
                    {
                        label: '5%年利率',
                        data: data5,
                        borderColor: '#1FB8CD',
                        backgroundColor: 'rgba(31, 184, 205, 0.1)',
                        fill: false
                    },
                    {
                        label: '10%年利率',
                        data: data10,
                        borderColor: '#FFC185',
                        backgroundColor: 'rgba(255, 193, 133, 0.1)',
                        fill: false
                    },
                    {
                        label: '15%年利率',
                        data: data15,
                        borderColor: '#B4413C',
                        backgroundColor: 'rgba(180, 65, 60, 0.1)',
                        fill: false
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
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
                            text: '金額 (元)'
                        }
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: '複利效果視覺化 (本金:$10,000)'
                    }
                }
            }
        });
    }

    createRiskAnalysis() {
        const systemRisks = ['政經情勢變動風險', '通貨膨脹風險', '利率變動風險', '匯率變動風險', '市場流動性風險'];
        const nonSystemRisks = ['公司營運風險', '產業風險', '信用風險', '法律風險'];

        const systemRisksList = document.getElementById('system-risks');
        const nonSystemRisksList = document.getElementById('non-system-risks');

        if (systemRisksList) {
            systemRisksList.innerHTML = systemRisks.map(risk => `<li>${risk}</li>`).join('');
        }

        if (nonSystemRisksList) {
            nonSystemRisksList.innerHTML = nonSystemRisks.map(risk => `<li>${risk}</li>`).join('');
        }
    }

    initCalculator() {
        // 輸入欄位事件監聽
        const inputs = ['principal', 'rate', 'years', 'frequency'];
        inputs.forEach(inputId => {
            const element = document.getElementById(inputId);
            if (element) {
                element.addEventListener('input', () => {
                    this.calculateCompoundInterest();
                });
            }
        });

        // 計算按鈕
        const calculateBtn = document.getElementById('calculate');
        if (calculateBtn) {
            calculateBtn.addEventListener('click', () => {
                this.calculateCompoundInterest();
            });
        }

        // 全螢幕切換
        const fullscreenBtn = document.getElementById('fullscreen-toggle');
        if (fullscreenBtn) {
            fullscreenBtn.addEventListener('click', () => {
                this.toggleCalculatorFullscreen();
            });
        }

        // 初始計算
        this.calculateCompoundInterest();
    }

    calculateCompoundInterest() {
        const principal = parseFloat(document.getElementById('principal')?.value) || 0;
        const rate = parseFloat(document.getElementById('rate')?.value) || 0;
        const years = parseInt(document.getElementById('years')?.value) || 0;
        const frequency = parseInt(document.getElementById('frequency')?.value) || 1;

        if (principal <= 0 || rate <= 0 || years <= 0) {
            return;
        }

        // 複利計算
        const rateDecimal = rate / 100;
        const compoundAmount = principal * Math.pow(1 + rateDecimal / frequency, frequency * years);
        const interest = compoundAmount - principal;

        // 更新結果顯示
        document.getElementById('result-principal').textContent = `$${principal.toLocaleString()}`;
        document.getElementById('result-interest').textContent = `$${Math.round(interest).toLocaleString()}`;
        document.getElementById('result-total').textContent = `$${Math.round(compoundAmount).toLocaleString()}`;

        // 72法則
        document.getElementById('rate-display').textContent = `${rate}%`;
        const doubleYears = Math.round((72 / rate) * 10) / 10;
        document.getElementById('double-years').textContent = doubleYears;

        // 生成圖表和表格
        this.createGrowthChart(principal, rateDecimal, frequency, years);
        this.createComparisonChart(principal, rateDecimal, years);
        this.createGrowthTable(principal, rateDecimal, frequency, years);
    }

    createGrowthChart(principal, rate, frequency, years) {
        const ctx = document.getElementById('growth-chart');
        if (!ctx) return;

        const yearLabels = Array.from({length: years + 1}, (_, i) => i);
        const growthData = yearLabels.map(year => 
            principal * Math.pow(1 + rate / frequency, frequency * year)
        );

        if (ctx.chart) {
            ctx.chart.destroy();
        }

        ctx.chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: yearLabels,
                datasets: [{
                    label: '複利成長',
                    data: growthData,
                    borderColor: '#1FB8CD',
                    backgroundColor: 'rgba(31, 184, 205, 0.1)',
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
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
                            text: '金額 (元)'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }

    createComparisonChart(principal, rate, years) {
        const ctx = document.getElementById('comparison-chart');
        if (!ctx) return;

        const yearLabels = Array.from({length: years + 1}, (_, i) => i);
        const compoundData = yearLabels.map(year => principal * Math.pow(1 + rate, year));
        const simpleData = yearLabels.map(year => principal * (1 + rate * year));

        if (ctx.chart) {
            ctx.chart.destroy();
        }

        ctx.chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: yearLabels,
                datasets: [
                    {
                        label: '複利',
                        data: compoundData,
                        borderColor: '#1FB8CD',
                        backgroundColor: 'rgba(31, 184, 205, 0.1)'
                    },
                    {
                        label: '單利',
                        data: simpleData,
                        borderColor: '#FFC185',
                        backgroundColor: 'rgba(255, 193, 133, 0.1)'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
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
                            text: '金額 (元)'
                        }
                    }
                }
            }
        });
    }

    createGrowthTable(principal, rate, frequency, years) {
        const tableBody = document.getElementById('growth-table');
        if (!tableBody) return;

        tableBody.innerHTML = '';

        for (let year = 0; year <= years; year++) {
            const startAmount = year === 0 ? principal : principal * Math.pow(1 + rate / frequency, frequency * (year - 1));
            const endAmount = principal * Math.pow(1 + rate / frequency, frequency * year);
            const interest = endAmount - startAmount;

            const row = `
                <tr>
                    <td>${year}</td>
                    <td>$${Math.round(startAmount).toLocaleString()}</td>
                    <td>$${Math.round(interest).toLocaleString()}</td>
                    <td>$${Math.round(endAmount).toLocaleString()}</td>
                </tr>
            `;
            tableBody.innerHTML += row;
        }
    }

    toggleCalculatorFullscreen() {
        const calculatorContainer = document.getElementById('calculator-container');
        const fullscreenBtn = document.getElementById('fullscreen-toggle');

        if (calculatorContainer.classList.contains('fullscreen')) {
            calculatorContainer.classList.remove('fullscreen');
            fullscreenBtn.textContent = '全螢幕';
        } else {
            calculatorContainer.classList.add('fullscreen');
            fullscreenBtn.textContent = '退出全螢幕';
        }
    }
    
    // 新增：初始化防詐頁面
    initFraudPreventionPage() {
        const fullscreenBtn = document.getElementById('fraud-fullscreen-toggle');
        if (fullscreenBtn) {
            fullscreenBtn.addEventListener('click', () => {
                this.toggleFraudFullscreen();
            });
        }
    }

    // 新增：防詐頁面全螢幕切換功能
    toggleFraudFullscreen() {
        const fraudContainer = document.getElementById('fraud-prevention-container');
        const fullscreenBtn = document.getElementById('fraud-fullscreen-toggle');

        if (fraudContainer.classList.contains('fullscreen')) {
            fraudContainer.classList.remove('fullscreen');
            fullscreenBtn.textContent = '全螢幕';
        } else {
            fraudContainer.classList.add('fullscreen');
            fullscreenBtn.textContent = '退出全螢幕';
        }
    }
}

// 應用程式啟動
document.addEventListener('DOMContentLoaded', () => {
    window.app = new InvestmentEducationApp();
});