// 全域變數
let charts = {};

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeCharts();
    initializeSliders();
    initializeFullscreen();
});

// 全螢幕功能
function initializeFullscreen() {
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    
    fullscreenBtn.addEventListener('click', function() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.log('無法進入全螢幕模式:', err);
            });
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    });
    
    // 監聽全螢幕狀態變化
    document.addEventListener('fullscreenchange', function() {
        const icon = fullscreenBtn.querySelector('.icon-fullscreen');
        if (document.fullscreenElement) {
            icon.textContent = '⛶'; // 退出全螢幕圖標
        } else {
            icon.textContent = '⛶'; // 進入全螢幕圖標
        }
    });
}

// 章節摺疊
function toggleChapter(chapterId) {
    const chapter = document.getElementById(chapterId);
    chapter.classList.toggle('collapsed');
}

// 初始化滑動條
function initializeSliders() {
    const stockSlider = document.getElementById('stockSlider');
    const changeSlider = document.getElementById('changeSlider');
    const stockValue = document.getElementById('stockValue');
    const changeValue = document.getElementById('changeValue');
    
    stockSlider.addEventListener('input', function() {
        stockValue.textContent = this.value;
    });
    
    changeSlider.addEventListener('input', function() {
        changeValue.textContent = this.value;
    });
}

// 初始化圖表
function initializeCharts() {
    // 風險比較圖表
    const riskCtx = document.getElementById('riskComparisonChart');
    if (riskCtx) {
        charts.riskComparison = new Chart(riskCtx, {
            type: 'bar',
            data: {
                labels: ['股票', '債券'],
                datasets: [{
                    label: '年化報酬率 (%)',
                    data: [9.76, 5.85],
                    backgroundColor: '#4A90A4',
                    borderColor: '#3A7A8A',
                    borderWidth: 2
                }, {
                    label: '標準差 (風險指標)',
                    data: [18.5, 7.2],
                    backgroundColor: '#7FB685',
                    borderColor: '#6FA675',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: '股票 vs 債券：報酬與風險比較',
                        font: {
                            size: 16,
                            weight: 'bold'
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
    
    // 配置效果圖表
    const allocationCtx = document.getElementById('allocationChart');
    if (allocationCtx) {
        charts.allocation = new Chart(allocationCtx, {
            type: 'bar',
            data: {
                labels: ['年化報酬率 (%)', '總報酬 (%)', '最大回檔 (%)'],
                datasets: [{
                    label: '100% 股票',
                    data: [9.76, 1522, -50.89],
                    backgroundColor: '#4A90A4'
                }, {
                    label: '50% 股 50% 債',
                    data: [8.3, 987, -21.63],
                    backgroundColor: '#7FB685'
                }, {
                    label: '100% 債券',
                    data: [5.85, 448, -6.47],
                    backgroundColor: '#F39C12'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: '不同股債配置的歷史表現',
                        font: {
                            size: 16,
                            weight: 'bold'
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false
                    }
                }
            }
        });
    }
    
    // 策略比較圖表
    const strategyCtx = document.getElementById('strategyChart');
    if (strategyCtx) {
        charts.strategy = new Chart(strategyCtx, {
            type: 'bar',
            data: {
                labels: ['平均報酬 (美元)'],
                datasets: [{
                    label: '生命週期投資法',
                    data: [1223105],
                    backgroundColor: '#4A90A4'
                }, {
                    label: '年齡規則投資法',
                    data: [956000],
                    backgroundColor: '#7FB685'
                }, {
                    label: '固定比例投資法',
                    data: [1050000],
                    backgroundColor: '#F39C12'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: '三種投資策略回測比較',
                        font: {
                            size: 16,
                            weight: 'bold'
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return '$' + value.toLocaleString();
                            }
                        }
                    }
                }
            }
        });
    }
    
    // 台股勝率圖表
    const winRateCtx = document.getElementById('winRateChart');
    if (winRateCtx) {
        charts.winRate = new Chart(winRateCtx, {
            type: 'line',
            data: {
                labels: ['1天', '1個月', '1年', '5年', '10年', '20年'],
                datasets: [{
                    label: '投資勝率 (%)',
                    data: [52, 62, 73, 87, 97, 100],
                    backgroundColor: 'rgba(74, 144, 164, 0.2)',
                    borderColor: '#4A90A4',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#4A90A4',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 6,
                    pointHoverRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: '台股投資勝率統計（持有期間越長，勝率越高）',
                        font: {
                            size: 16,
                            weight: 'bold'
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
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
}

// 再平衡模擬
function simulateRebalance() {
    const stockPercent = parseInt(document.getElementById('stockSlider').value);
    const bondPercent = 100 - stockPercent;
    const marketChange = parseInt(document.getElementById('changeSlider').value);
    
    // 計算市場變化後的比例
    const stockValue = stockPercent * (1 + marketChange / 100);
    const bondValue = bondPercent; // 假設債券不變
    const totalValue = stockValue + bondValue;
    
    const newStockPercent = (stockValue / totalValue * 100).toFixed(1);
    const newBondPercent = (bondValue / totalValue * 100).toFixed(1);
    
    // 計算需要調整的金額
    const rebalanceAmount = Math.abs(parseFloat(newStockPercent) - stockPercent).toFixed(1);
    
    const resultBox = document.getElementById('rebalanceResult');
    resultBox.innerHTML = `
        <h4>模擬結果</h4>
        <p><strong>初始配置：</strong>${stockPercent}% 股票 + ${bondPercent}% 債券</p>
        <p><strong>市場變化：</strong>股票 ${marketChange > 0 ? '+' : ''}${marketChange}%</p>
        <p><strong>變化後比例：</strong>${newStockPercent}% 股票 + ${newBondPercent}% 債券</p>
        <p><strong>比例漂移：</strong>${rebalanceAmount}%</p>
        <p style="color: #4A90A4; font-weight: bold; margin-top: 12px;">
            ${marketChange > 0 ? 
                '📈 股票上漲，建議賣出部分股票買入債券，回歸目標配置' : 
                '📉 股票下跌，建議賣出部分債券買入股票，回歸目標配置'
            }
        </p>
    `;
    resultBox.classList.add('show');
}

// 年齡規則計算
function calculateAge() {
    const age = parseInt(document.getElementById('ageInput').value);
    
    if (age < 18 || age > 100) {
        alert('請輸入有效的年齡（18-100歲）');
        return;
    }
    
    const stockPercent = 110 - age;
    const bondPercent = 100 - stockPercent;
    
    const resultBox = document.getElementById('ageResult');
    resultBox.innerHTML = `
        <h4>建議配置（年齡規則法）</h4>
        <p><strong>您的年齡：</strong>${age} 歲</p>
        <p><strong>建議股票比例：</strong>${stockPercent}%</p>
        <p><strong>建議債券比例：</strong>${bondPercent}%</p>
        <p style="color: #7FB685; font-weight: bold; margin-top: 12px;">
            💡 根據 110-年齡公式，您適合較${stockPercent > 50 ? '積極' : '保守'}的投資組合
        </p>
    `;
    resultBox.classList.add('show');
}

// 風險評估
function assessRisk() {
    const tolerance = document.getElementById('riskTolerance').value;
    
    if (!tolerance) {
        alert('請選擇一個選項');
        return;
    }
    
    const recommendations = {
        'low': {
            title: '保守型投資者',
            allocation: '20% 股票 + 80% 債券',
            description: '您的風險承受度較低，建議以債券為主的穩健配置，保障資金安全。'
        },
        'medium-low': {
            title: '偏保守型投資者',
            allocation: '40% 股票 + 60% 債券',
            description: '您能承受適度風險，建議平衡配置，兼顧安全與成長。'
        },
        'medium': {
            title: '平衡型投資者',
            allocation: '60% 股票 + 40% 債券',
            description: '您有中等風險承受度，可採用標準的平衡配置策略。'
        },
        'medium-high': {
            title: '偏積極型投資者',
            allocation: '75% 股票 + 25% 債券',
            description: '您願意承擔較高風險追求成長，建議以股票為主的積極配置。'
        },
        'high': {
            title: '積極型投資者',
            allocation: '90% 股票 + 10% 債券',
            description: '您有高風險承受度，適合積極的成長型投資策略，但請記得分散投資。'
        }
    };
    
    const result = recommendations[tolerance];
    const resultBox = document.getElementById('riskResult');
    resultBox.innerHTML = `
        <h4>${result.title}</h4>
        <p><strong>建議配置：</strong>${result.allocation}</p>
        <p>${result.description}</p>
        <p style="color: #4A90A4; font-weight: bold; margin-top: 12px;">
            💡 請記得定期再平衡，維持目標配置比例
        </p>
    `;
    resultBox.classList.add('show');
}

// 複利計算
function calculateCompound() {
    const principal = parseFloat(document.getElementById('principal').value);
    const annualReturn = parseFloat(document.getElementById('annualReturn').value) / 100;
    const years = parseInt(document.getElementById('years').value);
    const monthly = parseFloat(document.getElementById('monthly').value);
    
    if (isNaN(principal) || isNaN(annualReturn) || isNaN(years) || isNaN(monthly)) {
        alert('請輸入有效的數值');
        return;
    }
    
    // 計算複利效果
    let futureValue = principal * Math.pow(1 + annualReturn, years);
    
    // 加上定期定額的未來價值
    if (monthly > 0) {
        const monthlyRate = Math.pow(1 + annualReturn, 1/12) - 1;
        const months = years * 12;
        const monthlyFV = monthly * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
        futureValue += monthlyFV;
    }
    
    const totalInvested = principal + (monthly * years * 12);
    const totalReturn = futureValue - totalInvested;
    const returnPercent = (totalReturn / totalInvested * 100).toFixed(1);
    
    const resultBox = document.getElementById('compoundResult');
    resultBox.innerHTML = `
        <h4>複利計算結果</h4>
        <p><strong>投資本金：</strong>NT$ ${totalInvested.toLocaleString('zh-TW', {maximumFractionDigits: 0})}</p>
        <p><strong>投資年數：</strong>${years} 年</p>
        <p><strong>年化報酬率：</strong>${(annualReturn * 100).toFixed(1)}%</p>
        <p style="font-size: 1.2rem; color: #4A90A4; font-weight: bold; margin-top: 12px;">
            <strong>未來總價值：</strong>NT$ ${futureValue.toLocaleString('zh-TW', {maximumFractionDigits: 0})}
        </p>
        <p><strong>投資收益：</strong>NT$ ${totalReturn.toLocaleString('zh-TW', {maximumFractionDigits: 0})}</p>
        <p><strong>總報酬率：</strong>${returnPercent}%</p>
        <p style="color: #7FB685; font-weight: bold; margin-top: 12px;">
            🎯 時間是複利最好的朋友！
        </p>
    `;
    resultBox.classList.add('show');
}

// 平滑滾動
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});