// ETF Data
const etfData = {
  "etfs": [
    {"code": "0050", "name": "元大台灣50", "type": "市值型", "frequency": "半年配", "fee": "0.10%", "return": "約15%", "dividend": "約3%", "features": "台股大盤代表", "suitable": "長期投資者"},
    {"code": "006208", "name": "富邦台50", "type": "市值型", "frequency": "半年配", "fee": "0.15%", "return": "約16%", "dividend": "約3%", "features": "0050平價版", "suitable": "小資投資者"},
    {"code": "00922", "name": "國泰台灣領袖50", "type": "市值型", "frequency": "半年配", "fee": "0.15%", "return": "約18%", "dividend": "約3%", "features": "ESG+低碳", "suitable": "ESG關注者"},
    {"code": "00878", "name": "國泰永續高股息", "type": "高股息", "frequency": "季配", "fee": "0.25%", "return": "約2%", "dividend": "約5-6%", "features": "ESG+永續", "suitable": "退休族群"},
    {"code": "0056", "name": "元大高股息", "type": "高股息", "frequency": "季配", "fee": "0.30%", "return": "約8%", "dividend": "約4-5%", "features": "高股息先驅", "suitable": "保守投資者"},
    {"code": "00919", "name": "群益台灣精選高息", "type": "高股息", "frequency": "季配", "fee": "0.40%", "return": "-0.9%", "dividend": "約9-10%", "features": "高殖利率", "suitable": "追求高息者"},
    {"code": "00713", "name": "元大台灣高息低波", "type": "高股息", "frequency": "季配", "fee": "0.40%", "return": "約2%", "dividend": "約5-6%", "features": "低波動", "suitable": "穩健投資者"},
    {"code": "00929", "name": "復華台灣科技優息", "type": "高股息", "frequency": "月配", "fee": "0.70%", "return": "約5%", "dividend": "約8-9%", "features": "月月領息", "suitable": "月配需求者"}
  ],
  "pros_cons": {
    "market_cap": {
      "pros": ["長期報酬率較高", "追蹤大盤表現", "流動性佳", "費用率低", "適合定期定額"],
      "cons": ["波動度較大", "短期可能虧損", "無穩定配息", "需承受市場風險", "不適合退休族"]
    },
    "high_dividend": {
      "pros": ["穩定現金流", "波動度較小", "適合退休族", "心理安全感", "可月月領息"],
      "cons": ["長期報酬較低", "填息風險", "成分股變動頻繁", "費用率較高", "可能誤導投資人"]
    }
  },
  "allocation_strategies": [
    {"type": "保守型", "market_cap": 20, "high_dividend": 60, "bonds": 20},
    {"type": "穩健型", "market_cap": 50, "high_dividend": 40, "bonds": 10},
    {"type": "積極型", "market_cap": 70, "high_dividend": 25, "bonds": 5},
    {"type": "激進型", "market_cap": 90, "high_dividend": 10, "bonds": 0}
  ]
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    populateETFCards();
    setupComparisonSelector();
    setupAccordions();
    setupNavigation();
    setupQuestionnaire();
    setupCalculators();
    populateProsCons();
    setupPortfolioSimulator();
}

// Populate ETF cards
function populateETFCards() {
    const container = document.getElementById('etf-cards');
    const dividendSelect = document.getElementById('dividend-etf-select');
    
    etfData.etfs.forEach(etf => {
        // Create ETF card
        const card = document.createElement('div');
        card.className = 'etf-card';
        card.innerHTML = `
            <div class="etf-card__header">
                <div class="etf-card__code">${etf.code}</div>
                <div class="etf-card__name">${etf.name}</div>
                <span class="etf-card__type etf-card__type--${etf.type === '市值型' ? 'market-cap' : 'high-dividend'}">
                    ${etf.type}
                </span>
            </div>
            <div class="etf-card__info">
                <div class="etf-card__metric">
                    <span class="etf-card__metric-label">配息頻率</span>
                    <span class="etf-card__metric-value">${etf.frequency}</span>
                </div>
                <div class="etf-card__metric">
                    <span class="etf-card__metric-label">經理費</span>
                    <span class="etf-card__metric-value">${etf.fee}</span>
                </div>
                <div class="etf-card__metric">
                    <span class="etf-card__metric-label">年化報酬</span>
                    <span class="etf-card__metric-value">${etf.return}</span>
                </div>
                <div class="etf-card__metric">
                    <span class="etf-card__metric-label">殖利率</span>
                    <span class="etf-card__metric-value">${etf.dividend}</span>
                </div>
            </div>
        `;
        
        container.appendChild(card);
        
        // Add to dividend calculator dropdown
        if (etf.type === '高股息') {
            const option = document.createElement('option');
            option.value = etf.code;
            option.textContent = `${etf.code} ${etf.name}`;
            dividendSelect.appendChild(option);
        }
    });
}

// Setup comparison selector
function setupComparisonSelector() {
    const container = document.getElementById('comparison-selector');
    
    etfData.etfs.slice(0, 6).forEach(etf => { // Show only first 6 for comparison
        const checkbox = document.createElement('label');
        checkbox.className = 'comparison-checkbox';
        checkbox.innerHTML = `
            <input type="checkbox" name="comparison-etf" value="${etf.code}" onchange="updateComparison()">
            <span>${etf.code}</span>
        `;
        container.appendChild(checkbox);
    });
    
    updateComparison(); // Initialize with empty table
}

function updateComparison() {
    const selected = Array.from(document.querySelectorAll('input[name="comparison-etf"]:checked'))
        .map(cb => cb.value);
    
    if (selected.length > 4) {
        // Limit to 4 selections
        event.target.checked = false;
        alert('最多只能選擇4檔ETF進行比較');
        return;
    }
    
    updateComparisonTable(selected);
}

function updateComparisonTable(selectedCodes) {
    const table = document.getElementById('comparison-table');
    
    if (selectedCodes.length === 0) {
        table.innerHTML = '<tr><td colspan="100%" style="text-align: center; color: var(--color-text-secondary);">請選擇要比較的ETF</td></tr>';
        return;
    }
    
    const selectedETFs = etfData.etfs.filter(etf => selectedCodes.includes(etf.code));
    
    let tableHTML = `
        <thead>
            <tr>
                <th>項目</th>
                ${selectedETFs.map(etf => `<th>${etf.code}</th>`).join('')}
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>名稱</strong></td>
                ${selectedETFs.map(etf => `<td>${etf.name}</td>`).join('')}
            </tr>
            <tr>
                <td><strong>類型</strong></td>
                ${selectedETFs.map(etf => `<td>${etf.type}</td>`).join('')}
            </tr>
            <tr>
                <td><strong>配息頻率</strong></td>
                ${selectedETFs.map(etf => `<td>${etf.frequency}</td>`).join('')}
            </tr>
            <tr>
                <td><strong>經理費</strong></td>
                ${selectedETFs.map(etf => `<td>${etf.fee}</td>`).join('')}
            </tr>
            <tr>
                <td><strong>年化報酬</strong></td>
                ${selectedETFs.map(etf => `<td>${etf.return}</td>`).join('')}
            </tr>
            <tr>
                <td><strong>殖利率</strong></td>
                ${selectedETFs.map(etf => `<td>${etf.dividend}</td>`).join('')}
            </tr>
            <tr>
                <td><strong>適合對象</strong></td>
                ${selectedETFs.map(etf => `<td>${etf.suitable}</td>`).join('')}
            </tr>
        </tbody>
    `;
    
    table.innerHTML = tableHTML;
}

// Setup accordions
function setupAccordions() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const target = document.getElementById(this.dataset.target);
            const isActive = this.classList.contains('active');
            
            // Close all accordions
            accordionHeaders.forEach(h => {
                h.classList.remove('active');
                const content = document.getElementById(h.dataset.target);
                if (content) {
                    content.classList.remove('active');
                }
            });
            
            // Toggle current accordion
            if (!isActive) {
                this.classList.add('active');
                target.classList.add('active');
            }
        });
    });
}

// Populate pros and cons
function populateProsCons() {
    // Market cap pros
    const marketCapProsList = document.getElementById('market-cap-pros-list');
    etfData.pros_cons.market_cap.pros.forEach(pro => {
        const li = document.createElement('li');
        li.textContent = pro;
        marketCapProsList.appendChild(li);
    });
    
    // Market cap cons
    const marketCapConsList = document.getElementById('market-cap-cons-list');
    etfData.pros_cons.market_cap.cons.forEach(con => {
        const li = document.createElement('li');
        li.textContent = con;
        marketCapConsList.appendChild(li);
    });
    
    // High dividend pros
    const highDividendProsList = document.getElementById('high-dividend-pros-list');
    etfData.pros_cons.high_dividend.pros.forEach(pro => {
        const li = document.createElement('li');
        li.textContent = pro;
        highDividendProsList.appendChild(li);
    });
    
    // High dividend cons
    const highDividendConsList = document.getElementById('high-dividend-cons-list');
    etfData.pros_cons.high_dividend.cons.forEach(con => {
        const li = document.createElement('li');
        li.textContent = con;
        highDividendConsList.appendChild(li);
    });
}

// Setup navigation
function setupNavigation() {
    document.documentElement.classList.add('smooth-scroll');
    
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Setup questionnaire
function setupQuestionnaire() {
    const form = document.getElementById('investment-questionnaire');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const answers = {
            goal: formData.get('goal'),
            experience: formData.get('experience'),
            period: formData.get('period'),
            risk: formData.get('risk')
        };
        
        if (!answers.goal || !answers.experience || !answers.period || !answers.risk) {
            alert('請完成所有問題');
            return;
        }
        
        generateRecommendation(answers);
    });
}

function generateRecommendation(answers) {
    const resultDiv = document.getElementById('recommendation-result');
    const etfsDiv = document.getElementById('recommended-etfs');
    const allocationDiv = document.getElementById('allocation-details');
    
    // Determine risk type based on answers
    let riskType = answers.risk;
    
    // Get allocation strategy
    const strategy = etfData.allocation_strategies.find(s => 
        s.type === riskType + '型' || s.type.includes(riskType)
    ) || etfData.allocation_strategies[1]; // Default to 穩健型
    
    // Recommend ETFs based on answers
    let recommendedETFs = [];
    
    if (answers.goal === 'growth') {
        recommendedETFs = etfData.etfs.filter(etf => etf.type === '市值型').slice(0, 2);
    } else if (answers.goal === 'income') {
        recommendedETFs = etfData.etfs.filter(etf => etf.type === '高股息').slice(0, 2);
    } else {
        recommendedETFs = [
            etfData.etfs.find(etf => etf.code === '0050'),
            etfData.etfs.find(etf => etf.code === '00878')
        ].filter(Boolean);
    }
    
    // Populate recommended ETFs
    etfsDiv.innerHTML = recommendedETFs.map(etf => `
        <div class="recommended-etf">
            <h5>${etf.code} ${etf.name}</h5>
            <p><strong>特色：</strong>${etf.features}</p>
            <p><strong>適合對象：</strong>${etf.suitable}</p>
        </div>
    `).join('');
    
    // Populate allocation details
    allocationDiv.innerHTML = `
        <h5>建議配置（${strategy.type}）</h5>
        <div class="result-item">
            <span>市值型ETF：</span>
            <span class="result-value">${strategy.market_cap}%</span>
        </div>
        <div class="result-item">
            <span>高股息ETF：</span>
            <span class="result-value">${strategy.high_dividend}%</span>
        </div>
        <div class="result-item">
            <span>債券ETF：</span>
            <span class="result-value">${strategy.bonds}%</span>
        </div>
        <p style="margin-top: 16px; font-size: 14px; color: var(--color-text-secondary);">
            根據您的${answers.goal === 'growth' ? '成長導向' : answers.goal === 'income' ? '收入導向' : '平衡'}投資目標和${riskType}風險偏好設計。
        </p>
    `;
    
    resultDiv.classList.remove('hidden');
    resultDiv.classList.add('fade-in');
    
    // Scroll to result
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Setup calculators
function setupCalculators() {
    // Dividend calculator
    document.getElementById('calculate-dividend').addEventListener('click', calculateDividend);
    
    // DCA calculator
    document.getElementById('calculate-dca').addEventListener('click', calculateDCA);
}

function calculateDividend() {
    const etfCode = document.getElementById('dividend-etf-select').value;
    const amount = parseFloat(document.getElementById('investment-amount').value);
    const resultDiv = document.getElementById('dividend-result');
    
    if (!etfCode || !amount || amount <= 0) {
        alert('請選擇ETF並輸入有效金額');
        return;
    }
    
    const etf = etfData.etfs.find(e => e.code === etfCode);
    if (!etf) {
        alert('找不到選擇的ETF資料');
        return;
    }
    
    // Extract yield percentage with improved parsing
    let avgYield = 0;
    const dividendText = etf.dividend;
    
    // Handle different formats like "約5-6%" or "約8-9%"
    if (dividendText.includes('-')) {
        const matches = dividendText.match(/(\d+)-(\d+)/);
        if (matches) {
            const low = parseFloat(matches[1]);
            const high = parseFloat(matches[2]);
            avgYield = (low + high) / 2;
        }
    } else {
        // Handle single values like "約3%"
        const match = dividendText.match(/(\d+)/);
        if (match) {
            avgYield = parseFloat(match[1]);
        }
    }
    
    if (avgYield === 0) {
        alert('無法計算該ETF的配息，請選擇其他ETF');
        return;
    }
    
    const yearlyDividend = amount * (avgYield / 100);
    const quarterlyDividend = yearlyDividend / 4;
    const monthlyDividend = yearlyDividend / 12;
    
    resultDiv.innerHTML = `
        <h5>配息試算結果</h5>
        <div class="result-item">
            <span>投資金額：</span>
            <span class="result-value">${amount.toLocaleString()} 元</span>
        </div>
        <div class="result-item">
            <span>預估年配息：</span>
            <span class="result-value">${Math.round(yearlyDividend).toLocaleString()} 元</span>
        </div>
        <div class="result-item">
            <span>預估季配息：</span>
            <span class="result-value">${Math.round(quarterlyDividend).toLocaleString()} 元</span>
        </div>
        <div class="result-item">
            <span>預估月配息：</span>
            <span class="result-value">${Math.round(monthlyDividend).toLocaleString()} 元</span>
        </div>
        <p style="margin-top: 12px; font-size: 12px; color: var(--color-text-secondary);">
            * 以殖利率 ${avgYield}% 估算，實際配息可能有所不同
        </p>
    `;
    
    resultDiv.style.display = 'block';
    resultDiv.classList.add('fade-in');
}

function calculateDCA() {
    const monthlyAmount = parseFloat(document.getElementById('monthly-amount').value);
    const years = parseFloat(document.getElementById('investment-years').value);
    const expectedReturn = parseFloat(document.getElementById('expected-return').value) / 100;
    const resultDiv = document.getElementById('dca-result');
    
    if (!monthlyAmount || !years || !expectedReturn || monthlyAmount <= 0 || years <= 0) {
        alert('請輸入有效的數值');
        return;
    }
    
    const months = years * 12;
    const monthlyReturn = expectedReturn / 12;
    
    // Calculate future value of ordinary annuity
    const futureValue = monthlyAmount * (((1 + monthlyReturn) ** months - 1) / monthlyReturn);
    const totalInvested = monthlyAmount * months;
    const totalReturn = futureValue - totalInvested;
    
    resultDiv.innerHTML = `
        <h5>定期定額試算結果</h5>
        <div class="result-item">
            <span>投資期間：</span>
            <span class="result-value">${years} 年</span>
        </div>
        <div class="result-item">
            <span>總投入金額：</span>
            <span class="result-value">${totalInvested.toLocaleString()} 元</span>
        </div>
        <div class="result-item">
            <span>預估總價值：</span>
            <span class="result-value">${Math.round(futureValue).toLocaleString()} 元</span>
        </div>
        <div class="result-item">
            <span>預估投資收益：</span>
            <span class="result-value">${Math.round(totalReturn).toLocaleString()} 元</span>
        </div>
        <div class="result-item">
            <span>總報酬率：</span>
            <span class="result-value">${((totalReturn / totalInvested) * 100).toFixed(1)}%</span>
        </div>
        <p style="margin-top: 12px; font-size: 12px; color: var(--color-text-secondary);">
            * 以年化報酬率 ${(expectedReturn * 100).toFixed(1)}% 估算，未考慮費用及稅負
        </p>
    `;
    
    resultDiv.style.display = 'block';
    resultDiv.classList.add('fade-in');
}

// Setup portfolio simulator
function setupPortfolioSimulator() {
    const marketCapSlider = document.getElementById('market-cap-ratio');
    const highDividendSlider = document.getElementById('high-dividend-ratio');
    const marketCapValue = document.getElementById('market-cap-ratio-value');
    const highDividendValue = document.getElementById('high-dividend-ratio-value');
    
    function updateSliders() {
        const marketCapRatio = parseInt(marketCapSlider.value);
        const highDividendRatio = 100 - marketCapRatio;
        
        highDividendSlider.value = highDividendRatio;
        marketCapValue.textContent = marketCapRatio + '%';
        highDividendValue.textContent = highDividendRatio + '%';
    }
    
    marketCapSlider.addEventListener('input', updateSliders);
    
    highDividendSlider.addEventListener('input', function() {
        const highDividendRatio = parseInt(this.value);
        const marketCapRatio = 100 - highDividendRatio;
        
        marketCapSlider.value = marketCapRatio;
        marketCapValue.textContent = marketCapRatio + '%';
        highDividendValue.textContent = highDividendRatio + '%';
    });
    
    document.getElementById('simulate-portfolio').addEventListener('click', simulatePortfolio);
}

function simulatePortfolio() {
    const marketCapRatio = parseInt(document.getElementById('market-cap-ratio').value) / 100;
    const highDividendRatio = parseInt(document.getElementById('high-dividend-ratio').value) / 100;
    const resultDiv = document.getElementById('simulation-result');
    
    // Simplified simulation based on historical data
    const marketCapReturn = 0.15; // 15% annual return
    const highDividendReturn = 0.08; // 8% annual return
    const marketCapVolatility = 0.20; // 20% volatility
    const highDividendVolatility = 0.15; // 15% volatility
    
    const expectedReturn = (marketCapRatio * marketCapReturn + highDividendRatio * highDividendReturn) * 100;
    const expectedVolatility = Math.sqrt(
        marketCapRatio * marketCapRatio * marketCapVolatility * marketCapVolatility +
        highDividendRatio * highDividendRatio * highDividendVolatility * highDividendVolatility
    ) * 100;
    
    const expectedDividend = (marketCapRatio * 3 + highDividendRatio * 6); // Estimated dividend yield
    
    resultDiv.innerHTML = `
        <h5>投資組合模擬結果</h5>
        <div class="result-item">
            <span>市值型ETF比例：</span>
            <span class="result-value">${(marketCapRatio * 100).toFixed(0)}%</span>
        </div>
        <div class="result-item">
            <span>高股息ETF比例：</span>
            <span class="result-value">${(highDividendRatio * 100).toFixed(0)}%</span>
        </div>
        <div class="result-item">
            <span>預期年化報酬：</span>
            <span class="result-value">${expectedReturn.toFixed(1)}%</span>
        </div>
        <div class="result-item">
            <span>預期波動度：</span>
            <span class="result-value">${expectedVolatility.toFixed(1)}%</span>
        </div>
        <div class="result-item">
            <span>預期殖利率：</span>
            <span class="result-value">${expectedDividend.toFixed(1)}%</span>
        </div>
        <p style="margin-top: 12px; font-size: 12px; color: var(--color-text-secondary);">
            * 基於歷史數據模擬，實際結果可能有所不同
        </p>
    `;
    
    resultDiv.style.display = 'block';
    resultDiv.classList.add('fade-in');
}

// Add smooth scroll behavior to HTML
document.documentElement.style.scrollBehavior = 'smooth';