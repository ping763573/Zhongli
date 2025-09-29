// Financial products data
const financialProducts = {
  "stocks": {
    "name": "股票",
    "description": "代表公司所有權的證券，投資者成為公司股東，享有股利分配和股價增值機會",
    "pros": ["潛在報酬高，股價上漲可獲得豐厚資本利得", "可領取股利收入作為被動現金流", "流動性佳，可隨時買賣", "參與公司成長，抗通膨能力強", "交易門檻相對較低", "可透過技術分析和基本面分析提高勝率"],
    "cons": ["價格波動大，風險較高", "需花大量時間研究個股", "踩雷風險，可能選到地雷股", "受市場情緒影響大", "交易成本會削減獲利", "可能全部虧損本金"],
    "risk_level": "高",
    "return_potential": "高", 
    "liquidity": "高",
    "suitable_investors": ["積極型", "有經驗投資者", "風險承受度高"],
    "investment_period": "中長期",
    "min_investment": "低",
    "complexity": "中等"
  },
  "mutual_funds": {
    "name": "共同基金",
    "description": "由專業基金經理人管理，集合眾多投資人資金投資於多種證券的投資工具",
    "pros": ["專業管理，無需自行選股", "分散投資風險", "投資門檻低", "種類豐富，可選擇不同風險等級", "定期定額投資降低波動", "流動性佳"],
    "cons": ["管理費用較高(1-3%)", "無法控制投資決策", "可能有追蹤誤差", "績效不一定優於大盤", "贖回可能有手續費", "稅務處理較複雜"],
    "risk_level": "中等",
    "return_potential": "中等",
    "liquidity": "中等", 
    "suitable_investors": ["穩健型", "保守型", "新手投資者"],
    "investment_period": "中長期",
    "min_investment": "低",
    "complexity": "低"
  },
  "etfs": {
    "name": "ETF (指數股票型基金)",
    "description": "追蹤特定指數表現的基金，可在證券交易所自由買賣",
    "pros": ["管理費用低廉(0.1-0.7%)", "分散風險效果佳", "交易方便如同股票", "透明度高，成分股清楚", "可參與除權息", "多空操作靈活"],
    "cons": ["被動投資無法超越大盤", "追蹤誤差風險", "系統風險無法完全避免", "部分ETF流動性不足", "匯率風險(海外ETF)", "可能受到績效較差標的拖累"],
    "risk_level": "中等",
    "return_potential": "中等",
    "liquidity": "高",
    "suitable_investors": ["穩健型", "保守型", "分散投資者"],
    "investment_period": "中長期", 
    "min_investment": "低",
    "complexity": "低"
  },
  "futures": {
    "name": "期貨",
    "description": "約定未來特定時間以特定價格買賣特定商品的標準化合約",
    "pros": ["交易成本低", "槓桿操作，資金效率高", "多空操作靈活", "可用於避險", "流動性佳", "保證金交易，資金調度彈性"],
    "cons": ["高槓桿帶來高風險", "可能面臨追繳保證金", "有到期日限制", "價格波動劇烈", "可能爆倉損失超過本金", "需要專業知識和經驗"],
    "risk_level": "極高",
    "return_potential": "極高",
    "liquidity": "高",
    "suitable_investors": ["積極型", "專業投資者", "風險承受度極高"],
    "investment_period": "短期",
    "min_investment": "中等",
    "complexity": "高"
  },
  "options": {
    "name": "選擇權",
    "description": "給予持有者在特定時間以特定價格買賣標的物權利的金融衍生商品",
    "pros": ["以小搏大，槓桿效果顯著", "買方風險有限(僅權利金)", "策略靈活多樣", "可用於避險", "成本相對較低", "看錯方向也可能獲利"],
    "cons": ["賣方風險無限大", "時間價值遞減", "複雜度高，需專業知識", "流動性可能不足", "保證金浮動", "獲利機率相對較低"],
    "risk_level": "極高",
    "return_potential": "極高", 
    "liquidity": "中等",
    "suitable_investors": ["積極型", "專業投資者", "有豐富經驗者"],
    "investment_period": "短期",
    "min_investment": "低",
    "complexity": "極高"
  },
  "commodities": {
    "name": "商品期貨",
    "description": "投資於實體商品如黃金、石油、農產品等的期貨合約",
    "pros": ["抗通膨保值", "分散投資組合風險", "多空操作靈活", "可用於套利交易", "槓桿交易資金效率高", "避險功能佳"],
    "cons": ["價格波動劇烈", "可能需實物交割", "資金需求較高", "追繳保證金風險", "受天候、政治因素影響大", "不適合長期投資"],
    "risk_level": "極高", 
    "return_potential": "高",
    "liquidity": "中等",
    "suitable_investors": ["積極型", "專業投資者", "機構投資者"],
    "investment_period": "短中期",
    "min_investment": "高",
    "complexity": "高"
  },
  "corporate_bonds": {
    "name": "公司債",
    "description": "由企業發行的債務證券，投資者借錢給企業並獲得固定利息回報",
    "pros": ["固定利息收入穩定", "風險低於股票", "到期償還本金", "殖利率高於政府債", "可在次級市場交易", "稅務優勢(部分國家)"],
    "cons": ["信用風險，發行人可能違約", "利率風險，價格受市場利率影響", "流動性風險，冷門債券難賣出", "報酬率低於股票", "通膨風險，固定利息無法調整", "匯率風險(外國公司債)"],
    "risk_level": "低到中等",
    "return_potential": "低到中等",
    "liquidity": "中等",
    "suitable_investors": ["保守型", "穩健型", "追求穩定收益者"],
    "investment_period": "中長期",
    "min_investment": "中等", 
    "complexity": "低"
  },
  "government_bonds": {
    "name": "政府債券/公債",
    "description": "由政府發行的債務證券，被認為是最安全的固定收益投資工具",
    "pros": ["信用風險極低", "穩定利息收入", "避險功能強", "流動性佳", "稅務優惠(部分免稅)", "保本功能"],
    "cons": ["報酬率較低", "利率風險，價格與利率反向", "通膨風險侵蝕實質報酬", "機會成本高", "匯率風險(外國政府債)", "提前贖回風險"],
    "risk_level": "極低",
    "return_potential": "低",
    "liquidity": "高",
    "suitable_investors": ["保守型", "退休族群", "風險趨避者"],
    "investment_period": "中長期",
    "min_investment": "中等",
    "complexity": "低"
  }
};

const investorTypes = {
  "conservative": {
    "name": "保守型投資人",
    "characteristics": ["風險承受度低", "追求本金安全", "重視穩定收益", "投資期間較長", "交易頻率低"],
    "suitable_products": ["政府債券/公債", "公司債", "貨幣市場基金", "定期存款"],
    "risk_tolerance": "RR1-RR2",
    "target_age": "準退休族群、中老年",
    "investment_goals": ["退休規劃", "保本", "穩定現金流"]
  },
  "moderate": {
    "name": "穩健型投資人",
    "characteristics": ["風險承受度中等", "追求資本成長與固定收益平衡", "可接受適度波動", "投資期間中長期", "價值投資取向"],
    "suitable_products": ["ETF", "平衡型基金", "共同基金", "高評級公司債"],
    "risk_tolerance": "RR1-RR4", 
    "target_age": "中壯年族群",
    "investment_goals": ["資產增值", "風險分散", "合理報酬"]
  },
  "aggressive": {
    "name": "積極型投資人",
    "characteristics": ["風險承受度高", "追求資本利得最大化", "可承受較大波動", "投資期間彈性", "積極交易"],
    "suitable_products": ["股票", "期貨", "選擇權", "商品期貨", "新興市場基金"],
    "risk_tolerance": "RR1-RR5",
    "target_age": "青壯年、經驗豐富投資者", 
    "investment_goals": ["財富快速累積", "高回報", "投機獲利"]
  }
};

// Global variables
let selectedProducts = [];
let currentQuestion = 1;
let questionsAnswers = {};
let charts = {};

// DOM ready
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupNavigation();
    setupMobileMenu();
    setupComparison();
    setupQuestionnaire();
    setupEducationTabs();
    loadProductGrid();
    setupRiskAnalysis();
}

// Navigation
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const featureCards = document.querySelectorAll('.feature-card');
    const heroButton = document.querySelector('.hero .btn');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = e.target.dataset.page;
            showPage(page);
            updateActiveNav(e.target);
        });
    });

    featureCards.forEach(card => {
        card.addEventListener('click', (e) => {
            const page = e.currentTarget.dataset.page;
            showPage(page);
            updateActiveNav(document.querySelector(`[data-page="${page}"]`));
        });
    });

    if (heroButton) {
        heroButton.addEventListener('click', (e) => {
            const page = e.target.dataset.page;
            showPage(page);
            updateActiveNav(document.querySelector(`[data-page="${page}"]`));
        });
    }
}

function showPage(pageName) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
        page.classList.add('hidden');
    });

    const targetPage = document.getElementById(pageName);
    if (targetPage) {
        targetPage.classList.remove('hidden');
        targetPage.classList.add('active');
    }

    // Initialize charts when risk analysis page is shown
    if (pageName === 'risk-analysis') {
        setTimeout(initializeCharts, 100);
    }
}

function updateActiveNav(activeLink) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    if (activeLink && activeLink.classList.contains('nav-link')) {
        activeLink.classList.add('active');
    }
}

// Mobile menu
function setupMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.navbar__nav');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
}

// Product comparison
function setupComparison() {
    const riskFilter = document.getElementById('risk-filter');
    const periodFilter = document.getElementById('period-filter');
    const clearFilters = document.getElementById('clear-filters');

    if (riskFilter) {
        riskFilter.addEventListener('change', filterProducts);
    }
    if (periodFilter) {
        periodFilter.addEventListener('change', filterProducts);
    }
    if (clearFilters) {
        clearFilters.addEventListener('click', clearFilters_handler);
    }
}

function loadProductGrid() {
    const productGrid = document.getElementById('product-grid');
    if (!productGrid) return;

    productGrid.innerHTML = '';
    
    Object.entries(financialProducts).forEach(([key, product]) => {
        const card = createProductCard(key, product);
        productGrid.appendChild(card);
    });
}

function createProductCard(key, product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.productKey = key;
    card.dataset.risk = product.risk_level;
    card.dataset.period = product.investment_period;

    const riskClass = getRiskClass(product.risk_level);

    card.innerHTML = `
        <h4>${product.name}</h4>
        <p>${product.description}</p>
        <div class="product-meta">
            <span class="product-tag ${riskClass}">風險: ${product.risk_level}</span>
            <span class="product-tag">報酬: ${product.return_potential}</span>
            <span class="product-tag">流動性: ${product.liquidity}</span>
        </div>
    `;

    card.addEventListener('click', () => toggleProductSelection(key, card));
    return card;
}

function getRiskClass(riskLevel) {
    const riskMap = {
        '極低': 'risk-extreme-low',
        '低': 'risk-low',
        '低到中等': 'risk-low',
        '中等': 'risk-medium',
        '高': 'risk-high',
        '極高': 'risk-extreme-high'
    };
    return riskMap[riskLevel] || '';
}

function toggleProductSelection(key, card) {
    const index = selectedProducts.indexOf(key);
    
    if (index > -1) {
        selectedProducts.splice(index, 1);
        card.classList.remove('selected');
    } else if (selectedProducts.length < 4) {
        selectedProducts.push(key);
        card.classList.add('selected');
    } else {
        alert('最多只能選擇 4 個商品進行比較');
        return;
    }

    updateComparisonTable();
}

function updateComparisonTable() {
    const comparisonContainer = document.getElementById('comparison-container');
    const comparisonTable = document.getElementById('comparison-table');
    
    if (selectedProducts.length === 0) {
        comparisonContainer.style.display = 'none';
        return;
    }

    comparisonContainer.style.display = 'block';
    
    let tableHTML = '<table><thead><tr><th>比較項目</th>';
    selectedProducts.forEach(key => {
        tableHTML += `<th>${financialProducts[key].name}</th>`;
    });
    tableHTML += '</tr></thead><tbody>';

    const comparisonItems = [
        { key: 'description', label: '商品描述' },
        { key: 'risk_level', label: '風險等級' },
        { key: 'return_potential', label: '報酬潛力' },
        { key: 'liquidity', label: '流動性' },
        { key: 'investment_period', label: '建議投資期間' },
        { key: 'min_investment', label: '最低投資門檻' },
        { key: 'complexity', label: '複雜度' }
    ];

    comparisonItems.forEach(item => {
        tableHTML += `<tr><td><strong>${item.label}</strong></td>`;
        selectedProducts.forEach(key => {
            const value = financialProducts[key][item.key];
            const riskClass = item.key === 'risk_level' ? getRiskClass(value) : '';
            tableHTML += `<td class="${riskClass}">${value}</td>`;
        });
        tableHTML += '</tr>';
    });

    // Add pros
    tableHTML += '<tr><td><strong>優點</strong></td>';
    selectedProducts.forEach(key => {
        const pros = financialProducts[key].pros.slice(0, 3).map(pro => `• ${pro}`).join('<br>');
        tableHTML += `<td>${pros}</td>`;
    });
    tableHTML += '</tr>';

    // Add cons
    tableHTML += '<tr><td><strong>缺點</strong></td>';
    selectedProducts.forEach(key => {
        const cons = financialProducts[key].cons.slice(0, 3).map(con => `• ${con}`).join('<br>');
        tableHTML += `<td>${cons}</td>`;
    });
    tableHTML += '</tr>';

    tableHTML += '</tbody></table>';
    comparisonTable.innerHTML = tableHTML;
}

function filterProducts() {
    const riskFilter = document.getElementById('risk-filter').value;
    const periodFilter = document.getElementById('period-filter').value;
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        const cardRisk = card.dataset.risk;
        const cardPeriod = card.dataset.period;
        
        const showCard = 
            (riskFilter === '' || cardRisk.includes(riskFilter)) &&
            (periodFilter === '' || cardPeriod.includes(periodFilter));
            
        card.style.display = showCard ? 'block' : 'none';
    });
}

function clearFilters_handler() {
    document.getElementById('risk-filter').value = '';
    document.getElementById('period-filter').value = '';
    filterProducts();
}

// Risk Analysis Charts
function setupRiskAnalysis() {
    // Charts will be initialized when the page is shown
}

function initializeCharts() {
    // Destroy existing charts to allow for re-initialization on page switch
    Object.values(charts).forEach(chart => {
        if (chart && typeof chart.destroy === 'function') {
            chart.destroy();
        }
    });
    charts = {}; // Reset the charts object

    createRiskReturnChart();
    createRiskRankingChart(); // New Chart
    createReturnRankingChart(); // New Chart
    createLiquidityChart();
    createComplexityChart();
    createInvestmentThresholdChart();
}

function createRiskReturnChart() {
    const ctx = document.getElementById('risk-return-chart');
    if (!ctx) return;

    const data = Object.entries(financialProducts).map(([key, product]) => {
        const risk = getRiskValue(product.risk_level);
        const returnValue = getReturnValue(product.return_potential);
        return {
            x: risk,
            y: returnValue,
            label: product.name
        };
    });

    charts.riskReturn = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: '金融商品風險報酬分布',
                data: data,
                backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325'],
                pointRadius: 8,
                pointHoverRadius: 10
            }]
        },
        options: {
            responsive: true,
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.raw.label + ': 風險(' + context.raw.x + '), 報酬(' + context.raw.y + ')';
                        }
                    }
                },
                legend: {
                    display: true
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: '風險等級'
                    },
                    min: 0,
                    max: 10
                },
                y: {
                    title: {
                        display: true,
                        text: '報酬潛力'
                    },
                    min: 0,
                    max: 10
                }
            }
        }
    });
}

function createRiskRankingChart() {
    const ctx = document.getElementById('risk-ranking-chart');
    if (!ctx) return;

    const sortedProducts = Object.values(financialProducts).sort((a, b) => {
        return getRiskValue(a.risk_level) - getRiskValue(b.risk_level);
    });

    const labels = sortedProducts.map(p => p.name);
    const data = sortedProducts.map(p => getRiskValue(p.risk_level));
    const backgroundColors = sortedProducts.map(p => {
        const riskValue = getRiskValue(p.risk_level);
        if (riskValue <= 3) return 'rgba(75, 192, 192, 0.6)'; // low
        if (riskValue <= 5) return 'rgba(255, 206, 86, 0.6)'; // medium
        if (riskValue <= 7) return 'rgba(255, 159, 64, 0.6)'; // high
        return 'rgba(255, 99, 132, 0.6)'; // extreme high
    });

    charts.riskRanking = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: '風險等級 (數值越高風險越大)',
                data: data,
                backgroundColor: backgroundColors,
                borderColor: backgroundColors.map(c => c.replace('0.6', '1')),
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: false,
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: '風險評分'
                    }
                }
            }
        }
    });
}

function createReturnRankingChart() {
    const ctx = document.getElementById('return-ranking-chart');
    if (!ctx) return;

    const sortedProducts = Object.values(financialProducts).sort((a, b) => {
        return getReturnValue(a.return_potential) - getReturnValue(b.return_potential);
    });

    const labels = sortedProducts.map(p => p.name);
    const data = sortedProducts.map(p => getReturnValue(p.return_potential));
     const backgroundColors = sortedProducts.map(p => {
        const returnValue = getReturnValue(p.return_potential);
        if (returnValue <= 3) return 'rgba(201, 203, 207, 0.6)'; // low
        if (returnValue <= 5) return 'rgba(54, 162, 235, 0.6)'; // medium
        if (returnValue <= 7) return 'rgba(153, 102, 255, 0.6)'; // high
        return 'rgba(75, 192, 192, 0.6)'; // extreme high
    });

    charts.returnRanking = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: '報酬潛力 (數值越高潛力越大)',
                data: data,
                backgroundColor: backgroundColors,
                borderColor: backgroundColors.map(c => c.replace('0.6', '1')),
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: false,
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: '報酬評分'
                    }
                }
            }
        }
    });
}


function createLiquidityChart() {
    const ctx = document.getElementById('liquidity-chart');
    if (!ctx) return;

    const liquidityData = {};
    Object.values(financialProducts).forEach(product => {
        const liquidity = product.liquidity;
        liquidityData[liquidity] = (liquidityData[liquidity] || 0) + 1;
    });

    charts.liquidity = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: Object.keys(liquidityData),
            datasets: [{
                data: Object.values(liquidityData),
                backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5'],
                hoverBackgroundColor: ['#29D3E8', '#FFD4A3', '#C75A57', '#F1F0E4']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

function createComplexityChart() {
    const ctx = document.getElementById('complexity-chart');
    if (!ctx) return;

    const complexityData = {};
    Object.values(financialProducts).forEach(product => {
        const complexity = product.complexity;
        complexityData[complexity] = (complexityData[complexity] || 0) + 1;
    });

    charts.complexity = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(complexityData),
            datasets: [{
                label: '商品數量',
                data: Object.values(complexityData),
                backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#5D878F'],
                borderColor: ['#1FB8CD', '#FFC185', '#B4413C', '#5D878F'],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: '商品數量'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: '複雜度等級'
                    }
                }
            }
        }
    });
}

function createInvestmentThresholdChart() {
    const ctx = document.getElementById('investment-threshold-chart');
    if (!ctx) return;

    const thresholdData = {};
    Object.values(financialProducts).forEach(product => {
        const threshold = product.min_investment;
        thresholdData[threshold] = (thresholdData[threshold] || 0) + 1;
    });

    charts.threshold = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: Object.keys(thresholdData),
            datasets: [{
                data: Object.values(thresholdData),
                backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F'],
                hoverBackgroundColor: ['#29D3E8', '#FFD4A3', '#C75A57', '#F1F0E4', '#7A9BA5']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

function getRiskValue(riskLevel) {
    const riskMap = {
        '極低': 1,
        '低': 3,
        '低到中等': 4,
        '中等': 5,
        '高': 7,
        '極高': 9
    };
    return riskMap[riskLevel] || 5;
}

function getReturnValue(returnPotential) {
    const returnMap = {
        '低': 2,
        '低到中等': 4,
        '中等': 5,
        '高': 7,
        '極高': 9
    };
    return returnMap[returnPotential] || 5;
}

// Questionnaire
function setupQuestionnaire() {
    const nextBtn = document.getElementById('next-question');
    const prevBtn = document.getElementById('prev-question');
    const submitBtn = document.getElementById('submit-questionnaire');

    if (nextBtn) nextBtn.addEventListener('click', nextQuestion);
    if (prevBtn) prevBtn.addEventListener('click', prevQuestion);
    if (submitBtn) submitBtn.addEventListener('click', submitQuestionnaire);
}

function nextQuestion() {
    const currentQuestionCard = document.querySelector('.question-card.active');
    const selectedOption = currentQuestionCard.querySelector('input[type="radio"]:checked');
    
    if (!selectedOption) {
        alert('請選擇一個答案');
        return;
    }

    questionsAnswers[selectedOption.name] = selectedOption.value;
    
    currentQuestionCard.classList.remove('active');
    currentQuestion++;
    
    if (currentQuestion <= 5) {
        const nextCard = document.querySelector(`[data-question="${currentQuestion}"]`);
        nextCard.classList.add('active');
        
        updateQuestionNavigation();
    }
}

function prevQuestion() {
    const currentQuestionCard = document.querySelector('.question-card.active');
    currentQuestionCard.classList.remove('active');
    
    currentQuestion--;
    const prevCard = document.querySelector(`[data-question="${currentQuestion}"]`);
    prevCard.classList.add('active');
    
    updateQuestionNavigation();
}

function updateQuestionNavigation() {
    const prevBtn = document.getElementById('prev-question');
    const nextBtn = document.getElementById('next-question');
    const submitBtn = document.getElementById('submit-questionnaire');
    
    prevBtn.disabled = currentQuestion === 1;
    
    if (currentQuestion === 5) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'block';
    } else {
        nextBtn.style.display = 'block';
        submitBtn.style.display = 'none';
    }
}

function submitQuestionnaire() {
    const currentQuestionCard = document.querySelector('.question-card.active');
    const selectedOption = currentQuestionCard.querySelector('input[type="radio"]:checked');
    
    if (!selectedOption) {
        alert('請選擇一個答案');
        return;
    }

    questionsAnswers[selectedOption.name] = selectedOption.value;
    
    const investorType = calculateInvestorType(questionsAnswers);
    showResults(investorType);
}

function calculateInvestorType(answers) {
    let score = 0;
    
    // Age scoring
    if (answers.age === 'young') score += 3;
    else if (answers.age === 'middle') score += 2;
    else score += 1;
    
    // Experience scoring
    if (answers.experience === 'advanced') score += 3;
    else if (answers.experience === 'intermediate') score += 2;
    else score += 1;
    
    // Risk tolerance scoring
    if (answers.risk === 'high') score += 3;
    else if (answers.risk === 'medium') score += 2;
    else score += 1;
    
    // Goal scoring
    if (answers.goal === 'speculation') score += 3;
    else if (answers.goal === 'growth') score += 2;
    else score += 1;
    
    // Period scoring
    if (answers.period === 'long') score += 3;
    else if (answers.period === 'medium') score += 2;
    else score += 1;
    
    // Determine investor type based on score
    if (score <= 8) return 'conservative';
    else if (score <= 12) return 'moderate';
    else return 'aggressive';
}

function showResults(investorTypeKey) {
    document.getElementById('questionnaire').style.display = 'none';
    document.getElementById('matching-results').style.display = 'block';
    
    const investorType = investorTypes[investorTypeKey];
    const resultDisplay = document.getElementById('investor-type-display');
    
    resultDisplay.innerHTML = `
        <h4>${investorType.name}</h4>
        <p><strong>風險承受度:</strong> ${investorType.risk_tolerance}</p>
        <p><strong>目標族群:</strong> ${investorType.target_age}</p>
        <div class="characteristics-list">
            ${investorType.characteristics.map(char => `<span class="characteristic-tag">${char}</span>`).join('')}
        </div>
    `;
    
    showRecommendations(investorType.suitable_products);
}

function showRecommendations(suitableProducts) {
    const recommendationsGrid = document.getElementById('recommendations-grid');
    recommendationsGrid.innerHTML = '';
    
    suitableProducts.forEach(productName => {
        const matchingProduct = Object.entries(financialProducts).find(([key, product]) => 
            product.name === productName || product.name.includes(productName)
        );
        
        if (matchingProduct) {
            const [key, product] = matchingProduct;
            const card = document.createElement('div');
            card.className = 'recommendation-card';
            card.innerHTML = `
                <h5>${product.name}</h5>
                <p>${product.description.substring(0, 100)}...</p>
                <div class="suitability-score">高度適合</div>
            `;
            recommendationsGrid.appendChild(card);
        }
    });
}

function resetQuestionnaire() {
    currentQuestion = 1;
    questionsAnswers = {};
    
    document.querySelectorAll('.question-card').forEach(card => card.classList.remove('active'));
    document.querySelector('[data-question="1"]').classList.add('active');
    
    document.querySelectorAll('input[type="radio"]').forEach(radio => radio.checked = false);
    
    document.getElementById('questionnaire').style.display = 'block';
    document.getElementById('matching-results').style.display = 'none';
    
    updateQuestionNavigation();
}

// Education Center
function setupEducationTabs() {
    const tabs = document.querySelectorAll('.education-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            const tabName = e.target.dataset.tab;
            switchEducationTab(tabName);
        });
    });
    
    loadProductsEducation();
}

function switchEducationTab(tabName) {
    // Update active tab
    document.querySelectorAll('.education-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    
    // Update active content
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    document.getElementById(`${tabName}-tab`).classList.add('active');
}

function loadProductsEducation() {
    const container = document.getElementById('products-education');
    if (!container) return;
    
    container.innerHTML = '';
    
    Object.entries(financialProducts).forEach(([key, product]) => {
        const card = document.createElement('div');
        card.className = 'product-education-card';
        
        card.innerHTML = `
            <h4>${product.name}</h4>
            <p>${product.description}</p>
            <div class="pros-cons-grid">
                <div class="pros-list">
                    <h5>優點</h5>
                    <ul>
                        ${product.pros.map(pro => `<li>${pro}</li>`).join('')}
                    </ul>
                </div>
                <div class="cons-list">
                    <h5>缺點</h5>
                    <ul>
                        ${product.cons.map(con => `<li>${con}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
        
        container.appendChild(card);
    });
}