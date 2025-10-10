// 應用程式數據
const appData = {
  "header": {
    "title": "信託學習指南",
    "subtitle": "從小白到達人的完整學習之旅",
    "navigation": [
      "基礎概念", "信託類型", "財產保護", "法律風險", "實務應用"
    ]
  },
  "sections": {
    "基礎概念": {
      "title": "信託基礎概念",
      "icon": "🏦",
      "color": "#3B82F6",
      "description": "理解信託的基本定義和核心關係",
      "modules": [
        {
          "id": "concept1",
          "title": "什麼是信託？",
          "content": {
            "explanation": "信託就像找一個專業管家幫你照顧財產，你是委託人，管家是受託人，被照顧的人是受益人",
            "legal_definition": "委託人將財產權移轉給受託人，為受益人利益管理的法律關係",
            "analogy": "就像把珍貴的財產保險箱交給專業管家，並指定誰可以受益",
            "pros": [
              "專業管理，降低風險",
              "法律保障，制度完善",
              "靈活規劃，滿足需求"
            ],
            "cons": [
              "失去直接控制權",
              "需要支付管理費用",
              "契約變更較為困難"
            ]
          }
        },
        {
          "id": "concept2", 
          "title": "信託金三角關係",
          "content": {
            "explanation": "信託由三個角色組成：委託人(財產主人)、受託人(專業管家)、受益人(被照顧者)",
            "analogy": "就像一個家庭的分工：主人決定、管家執行、家人受益",
            "pros": [
              "權責分工明確",
              "專業管理更有效率",
              "法律保障三方權益"
            ],
            "cons": [
              "三方關係可能產生衝突",
              "溝通協調成本較高",
              "需要建立互信關係"
            ]
          }
        }
      ]
    },
    "信託類型": {
      "title": "信託類型與選擇",
      "icon": "⚖️",
      "color": "#10B981",
      "description": "了解不同信託類型的特色和適用情境",
      "modules": [
        {
          "id": "type1",
          "title": "營業信託 vs 民事信託", 
          "content": {
            "explanation": "選擇受託人是關鍵：找專業機構(營業信託)還是信賴的個人(民事信託)",
            "analogy": "就像選擇專業保全公司或請鄰居幫忙看家的差別",
            "comparison": {
              "營業信託": {
                "definition": "由專業信託業者(如銀行)擔任受託人",
                "pros": [
                  "專業管理團隊",
                  "法規完善保障",
                  "永續經營能力",
                  "透明財務報告"
                ],
                "cons": [
                  "較為制式化",
                  "管理成本較高",
                  "人情味相對不足"
                ],
                "analogy": "像找銀行當管家，專業但較嚴格"
              },
              "民事信託": {
                "definition": "由個人擔任受託人",
                "pros": [
                  "有感情連結",
                  "較有彈性",
                  "成本相對較低"
                ],
                "cons": [
                  "專業能力不一",
                  "生命有限風險",
                  "缺乏制度監督"
                ],
                "analogy": "像找親友當管家，有感情但能力不定"
              }
            }
          }
        },
        {
          "id": "type2",
          "title": "自益信託 vs 他益信託",
          "content": {
            "explanation": "看受益人是誰：為自己設立(自益)還是為別人設立(他益)",
            "analogy": "就像自己存錢和給孩子存教育金的差別",
            "comparison": {
              "自益信託": {
                "definition": "委託人同時也是受益人",
                "pros": [
                  "可隨時終止",
                  "彈性較高",
                  "控制權較大"
                ],
                "cons": [
                  "可能對受託人造成損害",
                  "保護效果相對有限"
                ],
                "analogy": "像為自己存錢，想拿隨時可以拿"
              },
              "他益信託": {
                "definition": "受益人不是委託人",
                "pros": [
                  "保護受益人權益",
                  "不能隨意撤銷",
                  "傳承效果較好"
                ],
                "cons": [
                  "委託人彈性受限",
                  "變更程序複雜"
                ],
                "analogy": "像給孩子的教育基金，不能隨便收回"
              }
            }
          }
        }
      ]
    },
    "財產保護": {
      "title": "信託財產與保護",
      "icon": "🛡️",
      "color": "#8B5CF6",
      "description": "掌握信託財產的獨立性和保護機制",
      "modules": [
        {
          "id": "protection1",
          "title": "信託財產獨立性",
          "content": {
            "explanation": "信託財產像放在法律保險箱裡，即使管家出事也不會受影響",
            "analogy": "就像把錢存在保險箱，即使銀行出事，你的錢也是安全的",
            "protections": [
              {
                "type": "受託人死亡",
                "rule": "信託財產不屬於受託人遺產",
                "benefit": "繼承人無法繼承信託財產"
              },
              {
                "type": "受託人破產", 
                "rule": "信託財產不屬於破產財團",
                "benefit": "債權人無法對信託財產求償"
              },
              {
                "type": "強制執行",
                "rule": "原則上不能被強制執行",
                "benefit": "避免因債務問題被查封"
              }
            ],
            "pros": [
              "財產安全有保障",
              "風險有效隔離",
              "法律防護完善"
            ],
            "cons": [
              "仍有特定例外情況",
              "信託前債務仍須承擔",
              "處理費用可能影響"
            ]
          }
        },
        {
          "id": "protection2",
          "title": "信託財產範圍",
          "content": {
            "explanation": "大部分值錢的東西都能放進信託，但某些特殊財產有限制",
            "analogy": "就像搬家，大部分東西都能搬，但危險品有特殊規定",
            "pros": [
              "涵蓋範圍廣泛",
              "財產類型多元",
              "彈性規劃可能"
            ],
            "cons": [
              "部分財產有限制",
              "需要法律諮詢",
              "評估程序複雜"
            ]
          }
        }
      ]
    },
    "法律風險": {
      "title": "法律風險與責任",
      "icon": "⚖️",
      "color": "#EF4444",
      "description": "了解各方當事人可能面臨的風險和責任",
      "modules": [
        {
          "id": "risk1",
          "title": "委託人風險",
          "content": {
            "explanation": "委託人要注意不能用信託躲債，也不能隨便撤銷為別人設的信託",
            "analogy": "就像不能把財產假贈送來躲債，法律會追究的",
            "risks": [
              {
                "type": "惡意脫產",
                "description": "利用信託躲避債務",
                "consequence": "債權人可向法院聲請撤銷",
                "timeframe": "成立後6個月內破產推定有害"
              },
              {
                "type": "契約限制",
                "description": "他益信託不能隨意終止",
                "consequence": "需要受益人同意或事先保留權利",
                "timeframe": "契約成立後即生效"
              }
            ],
            "pros": [
              "有合法變更途徑",
              "情事變更可聲請裁定",
              "保護受益人權益"
            ],
            "cons": [
              "彈性受到限制",
              "惡意行為有風險",
              "需要謹慎規劃"
            ]
          }
        },
        {
          "id": "risk2",
          "title": "受託人責任",
          "content": {
            "explanation": "受託人要善盡管理職責，不能保證獲利，違法要負責任",
            "analogy": "就像專業管家要盡責照顧，但不能保證投資一定賺錢",
            "pros": [
              "專業管理品質",
              "法律責任明確",
              "財產安全保障"
            ],
            "cons": [
              "責任較為沉重",
              "不能保證獲利",
              "違法面臨追究"
            ]
          }
        },
        {
          "id": "risk3", 
          "title": "受益人保障",
          "content": {
            "explanation": "受益人是信託利益真正主人，管家做不好可以要求賠償",
            "analogy": "就像客人對服務不滿，可以投訴要求改善或賠償",
            "pros": [
              "享有實質權利",
              "有法律救濟途徑",
              "財產歸屬明確"
            ],
            "cons": [
              "權利行使有時效",
              "需要主動維護",
              "舉證責任較重"
            ]
          }
        }
      ]
    },
    "實務應用": {
      "title": "信託實務應用",
      "icon": "📋",
      "color": "#F59E0B",
      "description": "掌握信託設立的實際要點和注意事項",
      "modules": [
        {
          "id": "practice1",
          "title": "信託設立要點",
          "content": {
            "explanation": "找專業銀行當管家比較安全，契約要寫清楚避免爭議",
            "analogy": "就像簽約買房，條款要清楚才不會有糾紛",
            "key_points": [
              {
                "point": "選擇專業受託人",
                "reason": "降低管理風險，確保專業服務",
                "recommendation": "優先選擇信託業者"
              },
              {
                "point": "詳細書面契約",
                "reason": "明確權責，預防爭議",
                "content": [
                  "信託目的",
                  "財產管理方式",
                  "收益分配辦法",
                  "費用負擔規定",
                  "終止條件"
                ]
              },
              {
                "point": "確認財產範圍",
                "reason": "避免法律限制",
                "check": "合法所有、可依法轉讓、確定存在"
              }
            ],
            "pros": [
              "風險控管完善",
              "專業服務品質",
              "法律保障充分"
            ],
            "cons": [
              "設立成本較高",
              "程序相對複雜",
              "需要持續監督"
            ]
          }
        }
      ]
    }
  },
  "quiz_data": [
    {
      "question": "信託的金三角關係包含哪三個角色？",
      "options": ["委託人、受託人、受益人", "委託人、銀行、政府", "投資人、管理人、監管人", "買方、賣方、仲介"],
      "correct": 0,
      "explanation": "信託關係由委託人(財產擁有者)、受託人(管理者)、受益人(利益享有者)組成金三角"
    },
    {
      "question": "營業信託相較於民事信託的優勢是？",
      "options": ["成本較低", "更有彈性", "專業管理團隊", "程序簡單"],
      "correct": 2,
      "explanation": "營業信託由專業信託業者管理，具備專業團隊、完善監管和永續經營能力"
    },
    {
      "question": "信託財產的獨立性不包含以下哪項保護？",
      "options": ["受託人死亡時不列入遺產", "受託人破產時不列入破產財團", "委託人債務不影響信託財產", "原則上不能被強制執行"],
      "correct": 2,
      "explanation": "委託人的債務在特定情況下仍可能影響信託財產，如惡意脫產可能被撤銷"
    },
    {
      "question": "以下哪種財產無法辦理信託？",
      "options": ["股票", "房屋", "耕地", "現金"],
      "correct": 2,
      "explanation": "根據農業發展條例，耕地不能由信託業者承受，因此無法辦理營業信託"
    }
  ],
  "real_cases": [
    {
      "title": "小雨媽媽的安養信託",
      "category": "家庭照護",
      "summary": "解決家庭照護費用爭議",
      "details": "小雨媽媽住院需要長期照護，家人對費用分攤有爭議。透過安養信託將200萬積蓄專款專用，由銀行直接支付照護費用，消除了金錢糾紛，家人關係更和諧。",
      "lesson": "信託不只是理財工具，更是維繫家庭關係的秘密武器"
    },
    {
      "title": "李嘉誠的家族傳承",
      "category": "財富傳承", 
      "summary": "家族信託解決繼承問題",
      "details": "李嘉誠將家族信託視為'第三個兒子'，透過信託安排讓長子接班、次子獲得現金支持，避免了豪門常見的繼承爭議。",
      "lesson": "信託能將情感與理性分離，確保家業平穩傳承"
    },
    {
      "title": "沈殿霞的保護性信託",
      "category": "財產保護",
      "summary": "保護年輕受益人的遺產", 
      "details": "沈殿霞設立遺囑信託，規定女兒35歲前每月只能領取2萬生活費，避免年輕時揮霍鉅額遺產，培養理財能力。",
      "lesson": "信託可以保護受益人'遠離'財富，等待適當時機"
    }
  ]
};

// 全域變數
let currentSection = null;
let completedSections = new Set();
let currentQuizIndex = 0;
let quizAnswered = false;

// DOM 元素
const welcomeSection = document.getElementById('welcomeSection');
const sectionsGrid = document.getElementById('sectionsGrid');
const sectionDetail = document.getElementById('sectionDetail');
const quizSection = document.getElementById('quizSection');
const casesSection = document.getElementById('casesSection');
const successModal = document.getElementById('successModal');

// 初始化應用程式
document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
    showWelcomeScreen();
    updateProgress();
});

// 設置事件監聽器
function setupEventListeners() {
    // 開始學習按鈕
    document.querySelector('.start-learning-btn').addEventListener('click', showSectionsGrid);
    
    // 導航按鈕
    document.querySelectorAll('.nav-link').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const sectionName = e.target.dataset.section;
            showSectionDetail(sectionName);
        });
    });
    
    // 返回按鈕
    document.getElementById('backBtn').addEventListener('click', showSectionsGrid);
    document.getElementById('quizBackBtn').addEventListener('click', () => showSectionDetail(currentSection));
    document.getElementById('casesBackBtn').addEventListener('click', () => showSectionDetail(currentSection));
    
    // 全螢幕按鈕
    document.getElementById('fullscreenBtn').addEventListener('click', toggleFullscreen);
    
    // 成功模態框
    document.getElementById('successOkBtn').addEventListener('click', () => {
        successModal.classList.add('hidden');
    });
    
    // 點擊模態框外部關閉
    successModal.addEventListener('click', (e) => {
        if (e.target === successModal) {
            successModal.classList.add('hidden');
        }
    });
}

// 顯示歡迎畫面
function showWelcomeScreen() {
    hideAllSections();
    welcomeSection.style.display = 'flex';
}

// 顯示章節網格
function showSectionsGrid() {
    hideAllSections();
    sectionsGrid.style.display = 'grid';
    renderSectionsGrid();
}

// 隱藏所有區域
function hideAllSections() {
    welcomeSection.style.display = 'none';
    sectionsGrid.style.display = 'none';
    sectionDetail.style.display = 'none';
    quizSection.style.display = 'none';
    casesSection.style.display = 'none';
}

// 渲染章節網格
function renderSectionsGrid() {
    sectionsGrid.innerHTML = '';
    
    Object.entries(appData.sections).forEach(([key, section]) => {
        const isCompleted = completedSections.has(key);
        const card = document.createElement('div');
        card.className = 'section-card';
        card.style.setProperty('--section-color', section.color);
        
        card.innerHTML = `
            <span class="section-icon">${section.icon}</span>
            <h3 class="section-card-title">${section.title}</h3>
            <p class="section-card-description">${section.description}</p>
            ${isCompleted ? '<span class="section-status">✓ 已完成</span>' : ''}
        `;
        
        card.addEventListener('click', () => showSectionDetail(key));
        sectionsGrid.appendChild(card);
    });
}

// 顯示章節詳細內容
function showSectionDetail(sectionKey) {
    currentSection = sectionKey;
    const section = appData.sections[sectionKey];
    
    hideAllSections();
    sectionDetail.style.display = 'block';
    
    // 更新導航狀態
    updateNavigation(sectionKey);
    
    // 設置章節標題
    document.getElementById('sectionTitle').textContent = section.title;
    
    // 渲染模組內容
    renderModules(section.modules);
    
    // 添加章節操作按鈕
    addSectionActions(sectionKey);
}

// 更新導航狀態
function updateNavigation(activeSection) {
    document.querySelectorAll('.nav-link').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.section === activeSection) {
            btn.classList.add('active');
        }
    });
}

// 渲染模組
function renderModules(modules) {
    const container = document.getElementById('modulesContainer');
    container.innerHTML = '';
    
    modules.forEach(module => {
        const moduleCard = createModuleCard(module);
        container.appendChild(moduleCard);
    });
}

// 創建模組卡片
function createModuleCard(module) {
    const card = document.createElement('div');
    card.className = 'module-card';
    
    const header = document.createElement('div');
    header.className = 'module-header';
    header.innerHTML = `<h3 class="module-title">${module.title}</h3>`;
    
    const content = document.createElement('div');
    content.className = 'module-content';
    
    // 小白解釋
    const explanation = document.createElement('div');
    explanation.className = 'module-explanation';
    explanation.innerHTML = `<strong>💡 小白解釋：</strong>${module.content.explanation}`;
    content.appendChild(explanation);
    
    // 比喻說明
    if (module.content.analogy) {
        const analogy = document.createElement('div');
        analogy.className = 'analogy-section';
        analogy.innerHTML = `
            <div class="analogy-title">🎯 生活比喻</div>
            <div class="analogy-text">${module.content.analogy}</div>
        `;
        content.appendChild(analogy);
    }
    
    // 正反觀點
    if (module.content.pros && module.content.cons) {
        const viewpoints = createViewpointsSection(module.content.pros, module.content.cons);
        content.appendChild(viewpoints);
    }
    
    // 特殊內容處理
    if (module.content.comparison) {
        const comparison = createComparisonSection(module.content.comparison);
        content.appendChild(comparison);
    }
    
    if (module.content.protections) {
        const protections = createProtectionsSection(module.content.protections);
        content.appendChild(protections);
    }
    
    if (module.content.risks) {
        const risks = createRisksSection(module.content.risks);
        content.appendChild(risks);
    }
    
    if (module.content.key_points) {
        const keyPoints = createKeyPointsSection(module.content.key_points);
        content.appendChild(keyPoints);
    }
    
    card.appendChild(header);
    card.appendChild(content);
    
    return card;
}

// 創建正反觀點區域
function createViewpointsSection(pros, cons) {
    const container = document.createElement('div');
    container.className = 'viewpoints-container';
    
    const prosCard = document.createElement('div');
    prosCard.className = 'viewpoint-card viewpoint-pros';
    prosCard.innerHTML = `
        <div class="viewpoint-title">✅ 優勢觀點</div>
        <ul class="viewpoint-list">
            ${pros.map(pro => `<li>${pro}</li>`).join('')}
        </ul>
    `;
    
    const consCard = document.createElement('div');
    consCard.className = 'viewpoint-card viewpoint-cons';
    consCard.innerHTML = `
        <div class="viewpoint-title">❌ 風險觀點</div>
        <ul class="viewpoint-list">
            ${cons.map(con => `<li>${con}</li>`).join('')}
        </ul>
    `;
    
    container.appendChild(prosCard);
    container.appendChild(consCard);
    
    return container;
}

// 創建比較區域
function createComparisonSection(comparison) {
    const container = document.createElement('div');
    container.className = 'comparison-section';
    
    Object.entries(comparison).forEach(([key, item]) => {
        const section = document.createElement('div');
        section.className = 'comparison-item';
        section.innerHTML = `
            <h4>${key}</h4>
            <p><strong>定義：</strong>${item.definition}</p>
            <div class="viewpoints-container">
                <div class="viewpoint-card viewpoint-pros">
                    <div class="viewpoint-title">✅ 優勢</div>
                    <ul class="viewpoint-list">
                        ${item.pros.map(pro => `<li>${pro}</li>`).join('')}
                    </ul>
                </div>
                <div class="viewpoint-card viewpoint-cons">
                    <div class="viewpoint-title">❌ 劣勢</div>
                    <ul class="viewpoint-list">
                        ${item.cons.map(con => `<li>${con}</li>`).join('')}
                    </ul>
                </div>
            </div>
            <div class="analogy-section">
                <div class="analogy-title">🎯 比喻</div>
                <div class="analogy-text">${item.analogy}</div>
            </div>
        `;
        container.appendChild(section);
    });
    
    return container;
}

// 創建保護機制區域
function createProtectionsSection(protections) {
    const container = document.createElement('div');
    container.className = 'protections-section';
    
    const title = document.createElement('h4');
    title.textContent = '🛡️ 保護機制';
    container.appendChild(title);
    
    protections.forEach(protection => {
        const item = document.createElement('div');
        item.className = 'protection-item';
        item.innerHTML = `
            <div style="background: var(--color-bg-3); padding: var(--space-12); border-radius: var(--radius-base); margin: var(--space-8) 0;">
                <strong>${protection.type}：</strong>${protection.rule}<br>
                <em style="color: var(--color-success);">💡 ${protection.benefit}</em>
            </div>
        `;
        container.appendChild(item);
    });
    
    return container;
}

// 創建風險區域
function createRisksSection(risks) {
    const container = document.createElement('div');
    container.className = 'risks-section';
    
    const title = document.createElement('h4');
    title.textContent = '⚠️ 重要風險';
    container.appendChild(title);
    
    risks.forEach(risk => {
        const item = document.createElement('div');
        item.className = 'risk-item';
        item.innerHTML = `
            <div style="background: var(--color-bg-4); padding: var(--space-12); border-radius: var(--radius-base); margin: var(--space-8) 0;">
                <strong>${risk.type}：</strong>${risk.description}<br>
                <em style="color: var(--color-error);">⚠️ ${risk.consequence}</em><br>
                <small style="color: var(--color-text-secondary);">時效：${risk.timeframe}</small>
            </div>
        `;
        container.appendChild(item);
    });
    
    return container;
}

// 創建要點區域
function createKeyPointsSection(keyPoints) {
    const container = document.createElement('div');
    container.className = 'key-points-section';
    
    const title = document.createElement('h4');
    title.textContent = '📋 重要要點';
    container.appendChild(title);
    
    keyPoints.forEach(point => {
        const item = document.createElement('div');
        item.className = 'key-point-item';
        
        let content = `
            <div style="background: var(--color-bg-2); padding: var(--space-12); border-radius: var(--radius-base); margin: var(--space-8) 0;">
                <strong>${point.point}：</strong>${point.reason}<br>
        `;
        
        if (point.recommendation) {
            content += `<em style="color: var(--color-primary);">💡 ${point.recommendation}</em>`;
        }
        
        if (point.check) {
            content += `<em style="color: var(--color-primary);">💡 ${point.check}</em>`;
        }
        
        if (point.content && Array.isArray(point.content)) {
            content += `<br><strong>包含內容：</strong><ul style="margin: var(--space-8) 0; padding-left: var(--space-20);">`;
            point.content.forEach(item => {
                content += `<li>${item}</li>`;
            });
            content += `</ul>`;
        }
        
        content += `</div>`;
        item.innerHTML = content;
        container.appendChild(item);
    });
    
    return container;
}

// 添加章節操作按鈕
function addSectionActions(sectionKey) {
    const container = document.getElementById('modulesContainer');
    
    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'section-actions';
    
    const quizBtn = document.createElement('button');
    quizBtn.className = 'btn btn--primary';
    quizBtn.textContent = '📝 章節測驗';
    quizBtn.addEventListener('click', () => showQuiz(sectionKey));
    
    const casesBtn = document.createElement('button');
    casesBtn.className = 'btn btn--secondary';
    casesBtn.textContent = '📚 實際案例';
    casesBtn.addEventListener('click', () => showCases(sectionKey));
    
    const completeBtn = document.createElement('button');
    completeBtn.className = 'btn btn--outline';
    if (completedSections.has(sectionKey)) {
        completeBtn.textContent = '✅ 已完成';
        completeBtn.disabled = true;
    } else {
        completeBtn.textContent = '✓ 完成學習';
        completeBtn.addEventListener('click', () => markSectionComplete(sectionKey));
    }
    
    actionsDiv.appendChild(quizBtn);
    actionsDiv.appendChild(casesBtn);
    actionsDiv.appendChild(completeBtn);
    
    container.appendChild(actionsDiv);
}

// 顯示測驗
function showQuiz(sectionKey) {
    hideAllSections();
    quizSection.style.display = 'block';
    
    // 隨機選擇一個測驗問題
    currentQuizIndex = Math.floor(Math.random() * appData.quiz_data.length);
    quizAnswered = false;
    renderQuiz();
}

// 渲染測驗
function renderQuiz() {
    const quiz = appData.quiz_data[currentQuizIndex];
    const container = document.getElementById('quizContent');
    
    container.innerHTML = `
        <div class="quiz-question">
            <h3 class="question-text">${quiz.question}</h3>
            <div class="quiz-options">
                ${quiz.options.map((option, index) => `
                    <button class="quiz-option" data-index="${index}">
                        ${String.fromCharCode(65 + index)}. ${option}
                    </button>
                `).join('')}
            </div>
            <div class="quiz-explanation" style="display: none;">
                <h4>💡 解釋</h4>
                <p>${quiz.explanation}</p>
            </div>
        </div>
    `;
    
    // 添加選項點擊事件
    container.querySelectorAll('.quiz-option').forEach(btn => {
        btn.addEventListener('click', (e) => handleQuizAnswer(e, quiz));
    });
}

// 處理測驗答案
function handleQuizAnswer(e, quiz) {
    if (quizAnswered) return;
    
    const selectedIndex = parseInt(e.target.dataset.index);
    const isCorrect = selectedIndex === quiz.correct;
    
    e.target.classList.add('selected');
    
    // 顯示所有答案狀態
    const options = document.querySelectorAll('.quiz-option');
    options.forEach((option, index) => {
        option.disabled = true;
        if (index === quiz.correct) {
            option.classList.add('correct');
        } else if (index === selectedIndex && !isCorrect) {
            option.classList.add('incorrect');
        }
    });
    
    // 顯示解釋
    document.querySelector('.quiz-explanation').style.display = 'block';
    
    quizAnswered = true;
    
    if (isCorrect) {
        showSuccessModal('太棒了！答對了！🎉');
    } else {
        showSuccessModal('別灰心，學習就是這樣一步步來的！💪');
    }
}

// 顯示案例
function showCases() {
    hideAllSections();
    casesSection.style.display = 'block';
    renderCases();
}

// 渲染案例
function renderCases() {
    const container = document.getElementById('casesContent');
    container.innerHTML = '';
    
    appData.real_cases.forEach(caseItem => {
        const caseCard = document.createElement('div');
        caseCard.className = 'case-card';
        
        caseCard.innerHTML = `
            <div class="case-header">
                <h3 class="case-title">${caseItem.title}</h3>
                <span class="case-category">${caseItem.category}</span>
            </div>
            <p class="case-summary">${caseItem.summary}</p>
            <div class="case-details">${caseItem.details}</div>
            <div class="case-lesson">
                <strong>💡 學習要點：</strong>${caseItem.lesson}
            </div>
        `;
        
        container.appendChild(caseCard);
    });
}

// 標記章節完成
function markSectionComplete(sectionKey) {
    completedSections.add(sectionKey);
    updateProgress();
    showSuccessModal(`恭喜完成「${appData.sections[sectionKey].title}」！🎉`);
    
    // 更新按鈕狀態
    const completeBtn = document.querySelector('.section-actions .btn--outline');
    if (completeBtn) {
        completeBtn.textContent = '✅ 已完成';
        completeBtn.disabled = true;
    }
}

// 更新進度
function updateProgress() {
    const totalSections = Object.keys(appData.sections).length;
    const completedCount = completedSections.size;
    const percentage = Math.round((completedCount / totalSections) * 100);
    
    document.getElementById('progressFill').style.width = `${percentage}%`;
    document.getElementById('progressPercent').textContent = `${percentage}%`;
}

// 顯示成功模態框
function showSuccessModal(message) {
    document.getElementById('successMessage').textContent = message;
    successModal.classList.remove('hidden');
}

// 切換全螢幕
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.log('無法進入全螢幕模式:', err);
        });
    } else {
        document.exitFullscreen();
    }
}