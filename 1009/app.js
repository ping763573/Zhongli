// 投資工具學習指南 JavaScript
class InvestmentLearningApp {
    constructor() {
        this.currentSection = 'welcome';
        this.completedSections = new Set();
        this.sections = ['stocks', 'bonds', 'funds', 'etf', 'insurance', 'comparison', 'advice'];
        this.isFullscreen = false;
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.updateProgress();
        this.checkFullscreenSupport();
    }
    
    setupEventListeners() {
        // 開始學習按鈕
        const startBtn = document.getElementById('start-learning');
        if (startBtn) {
            startBtn.addEventListener('click', () => this.startLearning());
        }
        
        // 重新開始按鈕
        const restartBtn = document.getElementById('restart-course');
        if (restartBtn) {
            restartBtn.addEventListener('click', () => this.restartCourse());
        }
        
        // 全螢幕切換按鈕
        const fullscreenBtn = document.getElementById('fullscreen-btn');
        if (fullscreenBtn) {
            fullscreenBtn.addEventListener('click', () => this.toggleFullscreen());
        }
        
        // 章節導航
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                const section = item.dataset.section;
                this.navigateToSection(section);
            });
        });
        
        // 鍵盤導航支援
        document.addEventListener('keydown', (e) => this.handleKeyNavigation(e));
        
        // 滾動到頂部功能
        this.setupScrollToTop();
        
        // 全螢幕狀態變化監聽
        document.addEventListener('fullscreenchange', () => this.handleFullscreenChange());
        document.addEventListener('webkitfullscreenchange', () => this.handleFullscreenChange());
        document.addEventListener('msfullscreenchange', () => this.handleFullscreenChange());
    }
    
    startLearning() {
        // 隱藏歡迎頁面，顯示學習區域
        const welcomeSection = document.getElementById('welcome');
        const learningSection = document.getElementById('learning');
        
        if (welcomeSection && learningSection) {
            welcomeSection.classList.remove('active');
            learningSection.classList.add('active');
            
            // 開始第一個章節
            this.navigateToSection('stocks');
            
            // 添加平滑過渡效果
            setTimeout(() => {
                this.addVisualFeedback('🚀 開始學習之旅！');
            }, 300);
        }
    }
    
    navigateToSection(sectionId) {
        // 隱藏所有章節
        const chapters = document.querySelectorAll('.chapter');
        chapters.forEach(chapter => {
            chapter.classList.remove('active');
        });
        
        // 顯示目標章節
        const targetChapter = document.getElementById(sectionId);
        if (targetChapter) {
            targetChapter.classList.add('active');
            
            // 更新導航狀態
            this.updateNavigation(sectionId);
            
            // 標記上一個章節為已完成
            if (this.currentSection && this.currentSection !== 'welcome') {
                this.completedSections.add(this.currentSection);
                this.markSectionCompleted(this.currentSection);
            }
            
            this.currentSection = sectionId;
            this.updateProgress();
            
            // 滾動到頂部
            const contentArea = document.querySelector('.content-area');
            if (contentArea) {
                contentArea.scrollTo({ top: 0, behavior: 'smooth' });
            }
            
            // 添加視覺回饋
            this.addChapterTransitionEffect(sectionId);
        }
    }
    
    updateNavigation(activeSection) {
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.dataset.section === activeSection) {
                item.classList.add('active');
            }
        });
    }
    
    markSectionCompleted(sectionId) {
        const navItem = document.querySelector(`[data-section="${sectionId}"]`);
        if (navItem) {
            navItem.classList.add('completed');
            const statusSpan = navItem.querySelector('.nav-status');
            if (statusSpan) {
                statusSpan.textContent = '✅';
            }
        }
    }
    
    updateProgress() {
        const totalSections = this.sections.length;
        const completedCount = this.completedSections.size;
        const progressPercent = Math.round((completedCount / totalSections) * 100);
        
        // 更新進度條
        const progressFill = document.getElementById('progress-fill');
        const progressText = document.getElementById('progress-percent');
        
        if (progressFill) {
            progressFill.style.width = `${progressPercent}%`;
        }
        
        if (progressText) {
            progressText.textContent = `${progressPercent}%`;
        }
        
        // 如果完成所有章節，顯示慶祝效果
        if (completedCount === totalSections) {
            setTimeout(() => {
                this.showCompletionCelebration();
            }, 1000);
        }
    }
    
    toggleFullscreen() {
        if (!this.isFullscreen) {
            this.enterFullscreen();
        } else {
            this.exitFullscreen();
        }
    }
    
    enterFullscreen() {
        const element = document.documentElement;
        
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    }
    
    exitFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
    
    handleFullscreenChange() {
        const isCurrentlyFullscreen = !!(
            document.fullscreenElement ||
            document.webkitFullscreenElement ||
            document.msFullscreenElement
        );
        
        this.isFullscreen = isCurrentlyFullscreen;
        document.body.classList.toggle('fullscreen', isCurrentlyFullscreen);
        
        const fullscreenBtn = document.getElementById('fullscreen-btn');
        if (fullscreenBtn) {
            fullscreenBtn.textContent = isCurrentlyFullscreen ? '🗗 退出全螢幕' : '🔍 全螢幕';
        }
    }
    
    checkFullscreenSupport() {
        const element = document.documentElement;
        const isSupported = !!(
            element.requestFullscreen ||
            element.webkitRequestFullscreen ||
            element.msRequestFullscreen
        );
        
        const fullscreenBtn = document.getElementById('fullscreen-btn');
        if (!isSupported && fullscreenBtn) {
            fullscreenBtn.style.display = 'none';
        }
    }
    
    handleKeyNavigation(e) {
        // 只在學習區域啟用鍵盤導航
        if (!document.getElementById('learning').classList.contains('active')) {
            return;
        }
        
        const currentIndex = this.sections.indexOf(this.currentSection);
        
        switch(e.key) {
            case 'ArrowLeft':
            case 'ArrowUp':
                e.preventDefault();
                if (currentIndex > 0) {
                    this.navigateToSection(this.sections[currentIndex - 1]);
                }
                break;
                
            case 'ArrowRight':
            case 'ArrowDown':
                e.preventDefault();
                if (currentIndex < this.sections.length - 1) {
                    this.navigateToSection(this.sections[currentIndex + 1]);
                }
                break;
                
            case 'Home':
                e.preventDefault();
                this.navigateToSection(this.sections[0]);
                break;
                
            case 'End':
                e.preventDefault();
                this.navigateToSection(this.sections[this.sections.length - 1]);
                break;
                
            case 'Escape':
                e.preventDefault();
                if (this.isFullscreen) {
                    this.exitFullscreen();
                }
                break;
                
            case 'F11':
                e.preventDefault();
                this.toggleFullscreen();
                break;
        }
    }
    
    setupScrollToTop() {
        // 為每個章節添加滾動監聽
        const contentArea = document.querySelector('.content-area');
        if (contentArea) {
            contentArea.addEventListener('scroll', () => {
                // 可以在這裡添加滾動到頂部按鈕的顯示邏輯
            });
        }
    }
    
    addVisualFeedback(message) {
        // 創建臨時通知
        const notification = document.createElement('div');
        notification.className = 'learning-notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 120px;
            right: 20px;
            background: var(--color-success);
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            z-index: 1001;
            font-weight: 500;
            box-shadow: var(--shadow-lg);
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        // 動畫顯示
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // 3秒後移除
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
    
    addChapterTransitionEffect(sectionId) {
        const chapterTitle = {
            'stocks': '📈 學習股票投資',
            'bonds': '📋 了解債券基礎',
            'funds': '🤝 認識基金運作',
            'etf': '🎯 掌握ETF優勢',
            'insurance': '🛡️ 理解理財保險',
            'comparison': '📊 比較投資工具',
            'advice': '💡 獲得專家建議'
        };
        
        const message = chapterTitle[sectionId] || '🎓 繼續學習';
        this.addVisualFeedback(message);
        
        // 添加章節進入動畫
        const chapter = document.getElementById(sectionId);
        if (chapter) {
            chapter.style.opacity = '0';
            chapter.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                chapter.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                chapter.style.opacity = '1';
                chapter.style.transform = 'translateY(0)';
            }, 50);
        }
    }
    
    showCompletionCelebration() {
        // 創建慶祝效果
        const celebration = document.createElement('div');
        celebration.innerHTML = `
            <div style="text-align: center; padding: 20px;">
                <h2 style="color: var(--color-success); font-size: 2rem; margin-bottom: 16px;">
                    🎉 恭喜完成所有課程！ 🎉
                </h2>
                <p style="font-size: 1.2rem; margin-bottom: 20px;">
                    你已經掌握了投資工具的基礎知識！
                </p>
                <div style="font-size: 3rem; margin: 20px 0;">
                    🏆📚💰🎯✨
                </div>
            </div>
        `;
        celebration.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: var(--color-surface);
            border: 3px solid var(--color-success);
            border-radius: 16px;
            z-index: 1002;
            box-shadow: var(--shadow-lg);
            animation: celebrationPulse 2s ease-in-out;
        `;
        
        // 添加動畫樣式
        const style = document.createElement('style');
        style.textContent = `
            @keyframes celebrationPulse {
                0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0; }
                50% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }
                100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(celebration);
        
        // 5秒後移除
        setTimeout(() => {
            if (celebration.parentNode) {
                celebration.style.opacity = '0';
                celebration.style.transition = 'opacity 0.5s ease';
                setTimeout(() => {
                    celebration.parentNode.removeChild(celebration);
                    document.head.removeChild(style);
                }, 500);
            }
        }, 5000);
        
        // 添加成就通知
        setTimeout(() => {
            this.addVisualFeedback('🏆 學習成就解鎖：投資工具專家！');
        }, 2500);
    }
    
    restartCourse() {
        // 重置學習狀態
        this.completedSections.clear();
        this.currentSection = 'welcome';
        
        // 重置導航狀態
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach((item, index) => {
            item.classList.remove('active', 'completed');
            const statusSpan = item.querySelector('.nav-status');
            if (statusSpan) {
                statusSpan.textContent = index === 0 ? '📖' : '⏳';
            }
        });
        
        // 回到歡迎頁面
        const welcomeSection = document.getElementById('welcome');
        const learningSection = document.getElementById('learning');
        
        if (welcomeSection && learningSection) {
            learningSection.classList.remove('active');
            welcomeSection.classList.add('active');
        }
        
        // 重置進度
        this.updateProgress();
        
        // 滾動到頂部
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        this.addVisualFeedback('🔄 課程重新開始！');
    }
    
    // 添加互動式功能
    setupInteractiveElements() {
        // 為優缺點卡片添加點擊效果
        const prosConsItems = document.querySelectorAll('.pros li, .cons li');
        prosConsItems.forEach(item => {
            item.addEventListener('click', () => {
                item.style.transform = 'scale(1.05)';
                item.style.transition = 'transform 0.2s ease';
                setTimeout(() => {
                    item.style.transform = 'scale(1)';
                }, 200);
            });
        });
        
        // 為範例卡片添加 hover 效果增強
        const exampleCards = document.querySelectorAll('.example-card, .advice-card');
        exampleCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-8px) scale(1.02)';
                card.style.transition = 'transform 0.3s ease';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });
        
        // 為重要概念添加高亮效果
        const conceptCards = document.querySelectorAll('.concept-card');
        conceptCards.forEach(card => {
            card.addEventListener('click', () => {
                card.style.backgroundColor = 'var(--color-bg-3)';
                card.style.borderLeftColor = 'var(--color-success)';
                setTimeout(() => {
                    card.style.backgroundColor = 'var(--color-bg-2)';
                    card.style.borderLeftColor = 'var(--color-warning)';
                }, 1000);
            });
        });
    }
    
    // 添加學習輔助功能
    setupLearningAids() {
        // 為專業術語添加解釋功能
        this.addTermExplanations();
        
        // 設置閱讀進度追蹤
        this.trackReadingProgress();
    }
    
    addTermExplanations() {
        const terms = {
            '殖利率': '每年收到的股利除以股價，用來衡量投資報酬率',
            'ETF': 'Exchange Traded Fund，在股票市場交易的基金',
            'YTM': 'Yield to Maturity，債券的到期殖利率',
            '淨值': '基金每個單位的價值',
            '手續費': '買賣投資工具時需要支付的費用'
        };
        
        Object.keys(terms).forEach(term => {
            const elements = document.querySelectorAll('*');
            elements.forEach(element => {
                if (element.children.length === 0 && element.textContent.includes(term)) {
                    element.innerHTML = element.innerHTML.replace(
                        new RegExp(term, 'g'),
                        `<span class="term-explanation" data-term="${term}" title="${terms[term]}">${term}</span>`
                    );
                }
            });
        });
        
        // 添加術語解釋樣式
        const style = document.createElement('style');
        style.textContent = `
            .term-explanation {
                border-bottom: 1px dotted var(--color-primary);
                cursor: help;
                transition: color 0.2s ease;
            }
            .term-explanation:hover {
                color: var(--color-primary);
                background: var(--color-bg-1);
                padding: 2px 4px;
                border-radius: 4px;
            }
        `;
        document.head.appendChild(style);
    }
    
    trackReadingProgress() {
        const chapters = document.querySelectorAll('.chapter');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio > 0.7) {
                    const chapterId = entry.target.id;
                    if (this.sections.includes(chapterId)) {
                        this.completedSections.add(chapterId);
                        this.markSectionCompleted(chapterId);
                        this.updateProgress();
                    }
                }
            });
        }, { threshold: 0.7 });
        
        chapters.forEach(chapter => {
            observer.observe(chapter);
        });
    }
}

// 當 DOM 載入完成後初始化應用程式
document.addEventListener('DOMContentLoaded', () => {
    const app = new InvestmentLearningApp();
    
    // 設置互動元素
    setTimeout(() => {
        app.setupInteractiveElements();
        app.setupLearningAids();
    }, 1000);
    
    // 添加歡迎動畫
    const welcomeSection = document.getElementById('welcome');
    if (welcomeSection) {
        welcomeSection.style.opacity = '0';
        welcomeSection.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            welcomeSection.style.transition = 'opacity 1s ease, transform 1s ease';
            welcomeSection.style.opacity = '1';
            welcomeSection.style.transform = 'translateY(0)';
        }, 300);
    }
    
    // 為頁面添加載入完成的視覺回饋
    setTimeout(() => {
        app.addVisualFeedback('🎓 投資學習指南已準備就緒！');
    }, 1500);
});

// 防止意外關閉頁面
window.addEventListener('beforeunload', (e) => {
    const learningSection = document.getElementById('learning');
    if (learningSection && learningSection.classList.contains('active')) {
        e.preventDefault();
        e.returnValue = '確定要離開嗎？你的學習進度將會保留。';
        return e.returnValue;
    }
});

// 處理網路連線狀態
window.addEventListener('online', () => {
    document.body.style.filter = 'none';
});

window.addEventListener('offline', () => {
    document.body.style.filter = 'grayscale(0.5)';
    const notification = document.createElement('div');
    notification.textContent = '⚠️ 網路連線中斷，部分功能可能受限';
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--color-warning);
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        z-index: 1001;
        font-weight: 500;
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 5000);
});