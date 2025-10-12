// Stock Learning App JavaScript
// Version: v1.0.0

class StockLearningApp {
    constructor() {
        this.currentSection = 'home';
        this.progress = 0;
        this.sectionProgress = {
            'home': false,
            'basics': false,
            'trading': false,
            'types': false,
            'strategies': false,
            'risk': false,
            'analysis': false,
            'faq': false
        };
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.updateProgress();
        this.initCalculators();
        this.initQuizzes();
        this.markSectionAsVisited('home');
    }
    
    bindEvents() {
        // Navigation events
        document.getElementById('fullscreenBtn').addEventListener('click', () => this.toggleFullscreen());
        document.getElementById('homeBtn').addEventListener('click', () => this.showSection('home'));
        
        // Dropdown menu events
        const menuBtn = document.getElementById('menuBtn');
        if (menuBtn) {
            menuBtn.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevents the window click listener from firing immediately
                const dropdownContent = document.querySelector('.dropdown-content');
                if (dropdownContent) {
                    dropdownContent.classList.toggle('show');
                }
            });
        }
        
        const dropdownLinks = document.querySelectorAll('.dropdown-content a');
        dropdownLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const sectionId = link.getAttribute('href').substring(1);
                this.showSection(sectionId);
                // Close the dropdown after clicking a link
                const dropdownContent = link.closest('.dropdown-content');
                if (dropdownContent) {
                    dropdownContent.classList.remove('show');
                }
            });
        });

        // Close dropdown when clicking outside
        window.addEventListener('click', (e) => {
            const dropdownContent = document.querySelector('.dropdown-content');
            if (dropdownContent && dropdownContent.classList.contains('show') && !e.target.matches('.dropdown-btn')) {
                dropdownContent.classList.remove('show');
            }
        });
        
        // Course card events
        const courseCards = document.querySelectorAll('.course-card');
        courseCards.forEach(card => {
            card.addEventListener('click', () => {
                const section = card.dataset.section;
                this.showSection(section);
            });
        });
        
        // Scroll events for progress tracking
        window.addEventListener('scroll', () => this.handleScroll());
    }
    
    showSection(sectionId) {
        // Hide all sections
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            section.classList.remove('active');
        });
        
        // Show target section
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
            this.currentSection = sectionId;
            this.markSectionAsVisited(sectionId);
            this.updateProgress();
            
            // Scroll to top
            window.scrollTo(0, 0);
        }
    }
    
    markSectionAsVisited(sectionId) {
        if (this.sectionProgress.hasOwnProperty(sectionId)) {
            this.sectionProgress[sectionId] = true;
        }
    }
    
    updateProgress() {
        const totalSections = Object.keys(this.sectionProgress).length;
        const visitedSections = Object.values(this.sectionProgress).filter(visited => visited).length;
        const progressPercentage = Math.round((visitedSections / totalSections) * 100);
        
        const progressFill = document.getElementById('progressFill');
        const progressText = document.getElementById('progressText');
        
        if (progressFill) {
            progressFill.style.width = `${progressPercentage}%`;
        }
        
        if (progressText) {
            progressText.textContent = `進度: ${progressPercentage}%`;
        }
        
        this.progress = progressPercentage;
    }
    
    handleScroll() {
        // Mark current section as visited when user scrolls through it
        const sections = document.querySelectorAll('.section.active');
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                this.markSectionAsVisited(section.id);
                this.updateProgress();
            }
        });
    }
    
    toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                // If requestFullscreen fails, use custom fullscreen mode
                document.body.classList.add('fullscreen');
            });
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else {
                document.body.classList.remove('fullscreen');
            }
        }
    }
    
    initCalculators() {
        // Trading cost calculator
        const calculateBtn = document.getElementById('calculateBtn');
        if (calculateBtn) {
            calculateBtn.addEventListener('click', () => this.calculateTradingCost());
        }
        
        // Financial ratios calculator
        const calculateRatiosBtn = document.getElementById('calculateRatios');
        if (calculateRatiosBtn) {
            calculateRatiosBtn.addEventListener('click', () => this.calculateFinancialRatios());
        }
    }
    
    calculateTradingCost() {
        const stockPrice = parseFloat(document.getElementById('stockPrice').value) || 30;
        const stockShares = parseInt(document.getElementById('stockShares').value) || 1000;
        const discount = parseFloat(document.getElementById('discount').value) || 5;
        
        const totalValue = stockPrice * stockShares;
        const commissionRate = 0.001425; // 0.1425%
        const discountRate = discount / 10; // Convert to decimal
        const transactionTax = 0.003; // 0.3%
        
        // Calculate costs
        const buyCommission = Math.max(totalValue * commissionRate * discountRate, 20); // Minimum 20 TWD
        const sellCommission = Math.max(totalValue * commissionRate * discountRate, 20);
        const sellTax = totalValue * transactionTax;
        
        const totalBuyCost = totalValue + buyCommission;
        const totalSellRevenue = totalValue - sellCommission - sellTax;
        const totalCost = buyCommission + sellCommission + sellTax;
        const costPercentage = (totalCost / totalValue * 100).toFixed(2);
        
        const resultDiv = document.getElementById('calculatorResult');
        if (resultDiv) {
            resultDiv.innerHTML = `
                <h4>💰 交易成本計算結果</h4>
                <div style="display: grid; gap: var(--space-12); margin-top: var(--space-16);">
                    <div><strong>股票價值：</strong>NT$ ${totalValue.toLocaleString()}</div>
                    <div><strong>買進手續費：</strong>NT$ ${Math.round(buyCommission).toLocaleString()}</div>
                    <div><strong>賣出手續費：</strong>NT$ ${Math.round(sellCommission).toLocaleString()}</div>
                    <div><strong>證券交易稅：</strong>NT$ ${Math.round(sellTax).toLocaleString()}</div>
                    <div style="border-top: 1px solid var(--color-border); padding-top: var(--space-12); margin-top: var(--space-12);">
                        <strong>總成本：NT$ ${Math.round(totalCost).toLocaleString()} (${costPercentage}%)</strong>
                    </div>
                    <div><strong>買進總成本：</strong>NT$ ${Math.round(totalBuyCost).toLocaleString()}</div>
                    <div><strong>賣出淨收入：</strong>NT$ ${Math.round(totalSellRevenue).toLocaleString()}</div>
                </div>
            `;
        }
    }
    
    calculateFinancialRatios() {
        const stockPrice = parseFloat(document.getElementById('stockPriceAnalysis').value) || 100;
        const eps = parseFloat(document.getElementById('eps').value) || 5;
        const bookValue = parseFloat(document.getElementById('bookValue').value) || 40;
        const dividend = parseFloat(document.getElementById('dividend').value) || 3;
        
        const peRatio = eps > 0 ? (stockPrice / eps).toFixed(2) : 'N/A';
        const pbRatio = bookValue > 0 ? (stockPrice / bookValue).toFixed(2) : 'N/A';
        const dividendYield = dividend > 0 ? ((dividend / stockPrice) * 100).toFixed(2) + '%' : 'N/A';
        
        // Evaluation
        const peEvaluation = eps > 0 ? this.evaluatePE(parseFloat(peRatio)) : 'N/A';
        const pbEvaluation = bookValue > 0 ? this.evaluatePB(parseFloat(pbRatio)) : 'N/A';
        const yieldEvaluation = dividend > 0 ? this.evaluateYield(parseFloat(dividendYield)) : 'N/A';
        
        const resultDiv = document.getElementById('ratiosResult');
        if (resultDiv) {
            resultDiv.innerHTML = `
                <h4>📊 財務比率計算結果</h4>
                <div style="display: grid; gap: var(--space-12); margin-top: var(--space-16);">
                    <div>
                        <strong>本益比 (P/E)：${peRatio}</strong>
                        <br><small style="color: var(--color-text-secondary);">${peEvaluation}</small>
                    </div>
                    <div>
                        <strong>股價淨值比 (P/B)：${pbRatio}</strong>
                        <br><small style="color: var(--color-text-secondary);">${pbEvaluation}</small>
                    </div>
                    <div>
                        <strong>殖利率：${dividendYield}</strong>
                        <br><small style="color: var(--color-text-secondary);">${yieldEvaluation}</small>
                    </div>
                </div>
            `;
        }
    }
    
    evaluatePE(peRatio) {
        if (peRatio < 10) return '可能被低估或有基本面問題';
        if (peRatio <= 20) return '合理估值範圍';
        if (peRatio <= 25) return '稍微偏高，需注意成長性';
        return '可能被高估或為高成長股';
    }
    
    evaluatePB(pbRatio) {
        if (pbRatio < 1) return '股價低於帳面價值';
        if (pbRatio <= 2) return '合理估值範圍';
        if (pbRatio <= 3) return '稍微偏高';
        return '需注意是否高估';
    }
    
    evaluateYield(yieldPercent) {
        if (yieldPercent < 3) return '殖利率偏低';
        if (yieldPercent <= 6) return '合理殖利率範圍';
        if (yieldPercent <= 8) return '高殖利率';
        return '殖利率異常高，需注意是否有問題';
    }
    
    initQuizzes() {
        // Initialize basics quiz
        const basicsQuiz = document.getElementById('basicsQuiz');
        if (basicsQuiz) {
            const options = basicsQuiz.querySelectorAll('.quiz-option');
            options.forEach(option => {
                option.addEventListener('click', (e) => this.handleQuizAnswer(e, basicsQuiz));
            });
        }
    }
    
    handleQuizAnswer(event, quizContainer) {
        const clickedOption = event.target;
        const isCorrect = clickedOption.dataset.answer === 'correct';
        const resultDiv = quizContainer.querySelector('.quiz-result');
        const options = quizContainer.querySelectorAll('.quiz-option');
        
        // Disable all options
        options.forEach(option => {
            option.disabled = true;
            if (option.dataset.answer === 'correct') {
                option.classList.add('correct');
            } else if (option === clickedOption && !isCorrect) {
                option.classList.add('wrong');
            }
        });
        
        // Show result
        if (resultDiv) {
            if (isCorrect) {
                resultDiv.innerHTML = `
                    <div style="color: var(--color-success); font-weight: var(--font-weight-bold);">
                        ✅ 答對了！股票的主要獲利來源確實是股價上漲，通常佔總報酬的85-90%。
                    </div>
                `;
                resultDiv.style.background = 'var(--color-bg-3)';
            } else {
                resultDiv.innerHTML = `
                    <div style="color: var(--color-error); font-weight: var(--font-weight-bold);">
                        ❌ 答錯了！正確答案是「股價上漲」。記住，股息收入只佔總報酬的10-15%左右。
                    </div>
                `;
                resultDiv.style.background = 'var(--color-bg-4)';
            }
            resultDiv.style.padding = 'var(--space-16)';
            resultDiv.style.borderRadius = 'var(--radius-base)';
            resultDiv.style.border = '1px solid var(--color-border)';
            resultDiv.style.display = 'block';
        }
    }
    
    // Utility functions for data handling
    getSectionData(sectionId) {
        const sectionData = {
            'home': {
                title: '首頁/概覽',
                completed: this.sectionProgress.home
            },
            'basics': {
                title: '股票基礎知識',
                completed: this.sectionProgress.basics,
                concepts: ['股票定義', '賺錢方式', '股價決定因素']
            },
            'trading': {
                title: '如何買賣股票',
                completed: this.sectionProgress.trading,
                concepts: ['開戶流程', '交易成本', '看盤軟體', '買賣操作']
            },
            'types': {
                title: '股票類型分類',
                completed: this.sectionProgress.types,
                concepts: ['市值分類', '產業分類', '投資工具比較']
            },
            'strategies': {
                title: '投資策略',
                completed: this.sectionProgress.strategies,
                concepts: ['被動投資', '主動投資', '基本面分析', '技術分析']
            },
            'risk': {
                title: '風險管理',
                completed: this.sectionProgress.risk,
                concepts: ['風險類型', '分散投資', '資產配置', '長期投資']
            },
            'analysis': {
                title: '財務報表分析',
                completed: this.sectionProgress.analysis,
                concepts: ['三大報表', '財務指標', '估值方法']
            },
            'faq': {
                title: '常見問題與迷思',
                completed: this.sectionProgress.faq,
                concepts: ['迷思破解', '新手問答', '投資提醒']
            }
        };
        
        return sectionData[sectionId] || null;
    }
    
    // Export progress data
    exportProgress() {
        return {
            currentSection: this.currentSection,
            overallProgress: this.progress,
            sectionProgress: { ...this.sectionProgress },
            timestamp: new Date().toISOString()
        };
    }
    
    // Import progress data
    importProgress(data) {
        if (data && typeof data === 'object') {
            this.currentSection = data.currentSection || 'home';
            this.progress = data.overallProgress || 0;
            
            if (data.sectionProgress) {
                Object.keys(data.sectionProgress).forEach(key => {
                    if (this.sectionProgress.hasOwnProperty(key)) {
                        this.sectionProgress[key] = data.sectionProgress[key];
                    }
                });
            }
            
            this.updateProgress();
            this.showSection(this.currentSection);
        }
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.stockApp = new StockLearningApp();
    
    // Add some additional event listeners for better UX
    document.addEventListener('keydown', (e) => {
        // ESC key to exit fullscreen
        if (e.key === 'Escape' && document.fullscreenElement) {
            document.exitFullscreen();
        }
        
        // Arrow keys for navigation
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            const sections = ['home', 'basics', 'trading', 'types', 'strategies', 'risk', 'analysis', 'faq'];
            const currentIndex = sections.indexOf(window.stockApp.currentSection);
            
            if (e.key === 'ArrowLeft' && currentIndex > 0) {
                window.stockApp.showSection(sections[currentIndex - 1]);
            } else if (e.key === 'ArrowRight' && currentIndex < sections.length - 1) {
                window.stockApp.showSection(sections[currentIndex + 1]);
            }
        }
    });
    
    // Handle fullscreen events
    document.addEventListener('fullscreenchange', () => {
        if (document.fullscreenElement) {
            document.body.classList.add('fullscreen');
        } else {
            document.body.classList.remove('fullscreen');
        }
    });
    
    // Add smooth scrolling for better UX
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#') && href.length > 1) {
                e.preventDefault();
                const targetId = href.substring(1);
                window.stockApp.showSection(targetId);
            }
        });
    });
});

// Export for potential external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = StockLearningApp;
}