// 人格類型定義
const personalityTypes = {
    "A": {
        "name": "穩健投資型",
        "description": "您是一位謹慎的投資者, 偏好低風險的投資方式。您重視資本保值, 願意犧牲部分收益來換取穩定性。適合的投資工具包括定期存款、國債、穩健型基金等。您的投資哲學是「穩中求勝」, 雖然收益可能不是最高, 但能夠長期保持財富的穩定增長。",
        "color": "#22c55e"
    },
    "B": {
        "name": "積極投資型",
        "description": "您是一位積極進取的投資者, 願意承擔中等風險以獲得較高收益。您具備良好的風險承受能力, 善於分析市場趨勢。適合的投資工具包括股票、平衡型基金、REITs等。您的投資哲學是「風險與收益並存」, 能夠在波動中尋找機會, 實現財富的穩步增長。",
        "color": "#3b82f6"
    },
    "C": {
        "name": "賭客型",
        "description": "您是一位高風險偏好的投資者, 喜歡追求高回報的投資機會。您對市場變化敏感, 願意承擔較大的損失風險。適合的投資工具包括個股、期貨、選擇權、加密貨幣等。您的投資哲學是「高風險高回報」, 雖然可能面臨較大虧損, 但也有機會獲得超額收益。",
        "color": "#ef4444"
    },
    "D": {
        "name": "躺平型",
        "description": "您對投資較為消極, 傾向於保守的理財方式。您可能缺乏投資知識或對市場風險較為擔憂。適合的理財方式包括銀行存款、貨幣基金、保險等。您的理財哲學是「安全第一」, 雖然收益較低, 但能夠避免投資風險。建議您可以逐步學習投資知識, 提升理財能力。",
        "color": "#6b7280"
    }
};

// 問題數據（每題可指定不同的K線圖JSON檔案）
const questions = [
    {
        id: 1,
        text: "觀察以下台積電K線圖, 如果您在此時點進行投資, 您會選擇？",
        showChart: true,
        klineJson: "kline1.json",
        klineTitle: "台積電 (2330) 日K線",
        options: [
            { text: "觀望, 等待更明確的趨勢信號", points: 5, personalities: ["A"] },
            { text: "小量試水, 逐步建倉", points: 8, personalities: ["B"] },
            { text: "大膽進場, 把握機會", points: 15, personalities: ["C"] },
            { text: "完全不考慮, 風險太高", points: 2, personalities: ["D"] }
        ]
    },
    {
        id: 2,
        text: "市場突然大跌20%, 您會如何反應？",
        showChart: false,
        options: [
            { text: "立即賣出所有股票避免更大損失", points: -10, personalities: ["A"] },
            { text: "保持觀望, 等待市場回穩", points: 0, personalities: ["D"] },
            { text: "分批加碼買進, 認為是好機會", points: 15, personalities: ["B"] },
            { text: "全部資金進場, 大賺一筆", points: 25, personalities: ["C"] }
        ]
    },
    {
        id: 3,
        text: "根據鴻海週K線圖, 您認為該如何操作？",
        showChart: true,
        klineJson: "kline2.json",
        klineTitle: "鴻海 (2317) 週K線",
        options: [
            { text: "趨勢不明確, 暫不進場", points: 4, personalities: ["A"] },
            { text: "可能是短期調整, 適合逢低買進", points: 10, personalities: ["B"] },
            { text: "突破在即, 應該大膽進場", points: 18, personalities: ["C"] },
            { text: "太複雜了, 我看不懂", points: 0, personalities: ["D"] }
        ]
    },
    {
        id: 4,
        text: "您傾向於選擇哪種投資組合？",
        showChart: false,
        options: [
            { text: "80%定存 + 20%政府債券", points: 5, personalities: ["A"] },
            { text: "50%股票 + 30%債券 + 20%現金", points: 10, personalities: ["B"] },
            { text: "70%個股 + 30%期貨選擇權", points: 20, personalities: ["C"] },
            { text: "100%銀行存款", points: 0, personalities: ["D"] }
        ]
    },
    {
        id: 5,
        text: "觀察聯發科日K線圖, 您的投資決策是？",
        showChart: true,
        klineJson: "kline3.json",
        klineTitle: "聯發科 (2454) 日K線",
        options: [
            { text: "謹慎觀察, 等待更好時機", points: 5, personalities: ["A"] },
            { text: "分批建倉, 控制風險", points: 8, personalities: ["B"] },
            { text: "大膽進場, 把握趨勢", points: 15, personalities: ["C"] },
            { text: "完全不考慮科技股", points: 2, personalities: ["D"] }
        ]
    },
    // 繼續其他題目...
    {
        id: 6,
        text: "對於投資報酬率的期望？",
        showChart: false,
        options: [
            { text: "年報酬率3-5%就很滿足", points: 3, personalities: ["A"] },
            { text: "希望年報酬率8-12%", points: 8, personalities: ["B"] },
            { text: "追求年報酬率20%以上", points: 15, personalities: ["C"] },
            { text: "只要不虧錢就好", points: 0, personalities: ["D"] }
        ]
    },
    {
        id: 7,
        text: "您會如何分配每月收入？",
        showChart: false,
        options: [
            { text: "70%生活費 + 20%存款 + 10%投資", points: 5, personalities: ["A"] },
            { text: "60%生活費 + 15%存款 + 25%投資", points: 10, personalities: ["B"] },
            { text: "50%生活費 + 10%存款 + 40%投資", points: 18, personalities: ["C"] },
            { text: "80%生活費 + 20%存款 + 0%投資", points: 2, personalities: ["D"] }
        ]
    },
    {
        id: 8,
        text: "聽到朋友推薦某支飆股, 您會？",
        showChart: false,
        options: [
            { text: "謝謝他, 但我不會貿然投資", points: 3, personalities: ["A"] },
            { text: "研究後再決定是否投資", points: 8, personalities: ["B"] },
            { text: "立即買進, 不想錯過機會", points: 20, personalities: ["C"] },
            { text: "完全不感興趣", points: 0, personalities: ["D"] }
        ]
    },
    {
        id: 9,
        text: "您對投資學習的態度？",
        showChart: false,
        options: [
            { text: "定期閱讀投資書籍和報告", points: 8, personalities: ["A", "B"] },
            { text: "關注市場消息和小道消息", points: 12, personalities: ["C"] },
            { text: "偶爾看看財經新聞", points: 5, personalities: ["B"] },
            { text: "不太關心投資知識", points: 0, personalities: ["D"] }
        ]
    },
    {
        id: 10,
        text: "面對投資虧損20%, 您的心情？",
        showChart: false,
        options: [
            { text: "非常焦慮, 睡不著覺", points: -5, personalities: ["A"] },
            { text: "有些擔心, 但能接受", points: 5, personalities: ["B"] },
            { text: "覺得刺激, 期待反彈", points: 15, personalities: ["C"] },
            { text: "這就是為什麼我不投資", points: 0, personalities: ["D"] }
        ]
    },
    {
        id: 11,
        text: "您認為投資最重要的原則是？",
        showChart: false,
        options: [
            { text: "保本第一, 獲利第二", points: 3, personalities: ["A"] },
            { text: "長期投資, 分散風險", points: 10, personalities: ["B"] },
            { text: "膽大心細, 把握時機", points: 18, personalities: ["C"] },
            { text: "不投資就沒有風險", points: 0, personalities: ["D"] }
        ]
    },
    {
        id: 12,
        text: "您會投資加密貨幣嗎？",
        showChart: false,
        options: [
            { text: "絕對不會, 風險太高", points: 0, personalities: ["A"] },
            { text: "小額嘗試, 控制風險", points: 8, personalities: ["B"] },
            { text: "大膽投資, 高風險高回報", points: 25, personalities: ["C"] },
            { text: "完全不了解, 不考慮", points: 0, personalities: ["D"] }
        ]
    },
    {
        id: 13,
        text: "退休理財規劃？",
        showChart: false,
        options: [
            { text: "提早開始, 選擇穩健商品", points: 8, personalities: ["A"] },
            { text: "定期定額投資基金", points: 10, personalities: ["B"] },
            { text: "年輕時積極投資累積財富", points: 15, personalities: ["C"] },
            { text: "退休金應該足夠了", points: 2, personalities: ["D"] }
        ]
    },
    {
        id: 14,
        text: "您如何看待投資理財？",
        showChart: false,
        options: [
            { text: "是人生必修課, 需要謹慎學習", points: 6, personalities: ["A"] },
            { text: "是實現財富自由的途徑", points: 12, personalities: ["B"] },
            { text: "是快速致富的機會", points: 20, personalities: ["C"] },
            { text: "太複雜了, 不如存銀行", points: 1, personalities: ["D"] }
        ]
    },
    {
        id: 15,
        text: "投資前您會花多少時間研究？",
        showChart: false,
        options: [
            { text: "詳細研究一個月以上", points: 5, personalities: ["A"] },
            { text: "研究一到兩週", points: 10, personalities: ["B"] },
            { text: "快速瀏覽幾天", points: 15, personalities: ["C"] },
            { text: "不會主動研究", points: 0, personalities: ["D"] }
        ]
    },
    {
        id: 16,
        text: "您認為投資成功的關鍵是？",
        showChart: false,
        options: [
            { text: "嚴格的風險控制", points: 4, personalities: ["A"] },
            { text: "長期持有優質資產", points: 8, personalities: ["B"] },
            { text: "準確判斷市場時機", points: 18, personalities: ["C"] },
            { text: "運氣最重要", points: 3, personalities: ["D"] }
        ]
    },
    {
        id: 17,
        text: "面對市場波動, 您的策略？",
        showChart: false,
        options: [
            { text: "減少投資, 降低風險", points: 2, personalities: ["A"] },
            { text: "維持既定投資計劃", points: 8, personalities: ["B"] },
            { text: "加大投資力度, 趁機獲利", points: 20, personalities: ["C"] },
            { text: "暫停所有投資", points: 0, personalities: ["D"] }
        ]
    },
    {
        id: 18,
        text: "您願意為了高報酬承擔多大風險？",
        showChart: false,
        options: [
            { text: "幾乎零風險", points: 1, personalities: ["A"] },
            { text: "小到中等風險", points: 8, personalities: ["B"] },
            { text: "高風險也能接受", points: 22, personalities: ["C"] },
            { text: "不願意承擔任何風險", points: 0, personalities: ["D"] }
        ]
    },
    {
        id: 19,
        text: "您的投資時間偏好？",
        showChart: false,
        options: [
            { text: "長期投資, 5年以上", points: 6, personalities: ["A", "B"] },
            { text: "中期投資, 1-3年", points: 10, personalities: ["B"] },
            { text: "短期投資, 幾個月內", points: 18, personalities: ["C"] },
            { text: "不確定, 沒有規劃", points: 0, personalities: ["D"] }
        ]
    },
    {
        id: 20,
        text: "如果有100萬, 您會如何配置？",
        showChart: false,
        options: [
            { text: "80萬存款 + 20萬債券", points: 4, personalities: ["A"] },
            { text: "40萬股票 + 30萬基金 + 30萬存款", points: 10, personalities: ["B"] },
            { text: "60萬股票 + 40萬期貨選擇權", points: 22, personalities: ["C"] },
            { text: "100萬都存銀行", points: 0, personalities: ["D"] }
        ]
    }
];

// 全局變量
let currentUser = {};
let currentQuestionIndex = 0;
let userAnswers = [];
let totalScore = 0;
let personalityScores = { A: 0, B: 0, C: 0, D: 0 };
let klineChart = null;
let currentKlineData = null;
let chartImages = {}; // 儲存每題的圖表截圖

// DOM 元素
const welcomeSection = document.getElementById('welcome-section');
const quizSection = document.getElementById('quiz-section');
const resultsSection = document.getElementById('results-section');
const answersSection = document.getElementById('answers-section');
const themeToggle = document.getElementById('theme-toggle');
const chartContainer = document.getElementById('chart-container');

// 在 app.js 開頭設定 pdfmake 字體
pdfMake.fonts = {
  NotoSansTC: {
    normal: 'https://unpkg.com/@fontsource/noto-sans-tc@4.5.11/files/noto-sans-tc-chinese-traditional-400-normal.woff2',
    bold: 'https://unpkg.com/@fontsource/noto-sans-tc@4.5.11/files/noto-sans-tc-chinese-traditional-700-normal.woff2',
    italics: 'https://unpkg.com/@fontsource/noto-sans-tc@4.5.11/files/noto-sans-tc-chinese-traditional-400-normal.woff2',
    bolditalics: 'https://unpkg.com/@fontsource/noto-sans-tc@4.5.11/files/noto-sans-tc-chinese-traditional-700-normal.woff2'
  }
};



// 初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    initializeTheme();
});

function initializeApp() {
    // 綁定事件監聽器
    document.getElementById('startQuiz').addEventListener('click', startQuiz);
    document.getElementById('nextQuestion').addEventListener('click', nextQuestion);
    document.getElementById('showAnswers').addEventListener('click', showAnswers);
    document.getElementById('restartQuiz').addEventListener('click', restartQuiz);
    document.getElementById('backToResults').addEventListener('click', backToResults);
    document.getElementById('downloadPDF').addEventListener('click', downloadPDF);
    themeToggle.addEventListener('click', toggleTheme);
}

// 主題切換功能
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeToggle(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
        updateThemeToggle('dark');
    }
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeToggle(newTheme);
    
    // 更新ECharts圖表主題
    if (klineChart && currentKlineData) {
        updateChartTheme();
    }
}

function updateThemeToggle(theme) {
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// 載入K線資料
async function loadKlineData(jsonFile) {
    try {
        const response = await fetch(jsonFile);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('載入K線資料失敗:', error);
        return null;
    }
}

function startQuiz() {
    const userName = document.getElementById('userName').value.trim();
    const initialFund = document.getElementById('initialFund').value;
    
    // 驗證輸入
    if (!userName) {
        alert('請輸入您的姓名');
        return;
    }
    
    if (!initialFund || initialFund < 1) {
        alert('請輸入有效的起始資金');
        return;
    }
    
    // 保存用戶資料
    currentUser = {
        name: userName,
        initialFund: parseFloat(initialFund)
    };
    
    // 重置測驗數據
    currentQuestionIndex = 0;
    userAnswers = [];
    totalScore = 0;
    personalityScores = { A: 0, B: 0, C: 0, D: 0 };
    chartImages = {};
    
    // 切換到問卷頁面
    showSection('quiz-section');
    loadQuestion();
}

async function loadQuestion() {
    const question = questions[currentQuestionIndex];
    
    // 更新進度和問題文字
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
    document.getElementById('current-question').textContent = currentQuestionIndex + 1;
    document.getElementById('question-text').textContent = question.text;
    
    // 處理K線圖顯示
    if (question.showChart && question.klineJson) {
        const chartContainer = document.getElementById('chart-container');
        const loadingMessage = document.getElementById('loading-message');
        const chartWidget = document.getElementById('echarts-kline');
        
        // 1. 先顯示容器
        chartContainer.classList.remove('hidden');
        document.getElementById('chart-title').textContent = question.klineTitle || 'K線圖';
        
        // 2. 顯示載入狀態
        loadingMessage.classList.add('show');
        chartWidget.classList.add('loading');
        
        // 3. 等待DOM更新完成
        await new Promise(resolve => setTimeout(resolve, 100));
        
        // 4. 載入K線資料
        const klineData = await loadKlineData(question.klineJson);
        if (klineData) {
            currentKlineData = klineData;
            
            // 5. 再次確保容器可見後初始化圖表
            await new Promise(resolve => setTimeout(resolve, 200));
            
            try {
                initKlineChart(klineData);
                updateStockInfo(klineData);
                loadingMessage.classList.remove('show');
                chartWidget.classList.remove('loading');
            } catch (error) {
                console.error('圖表初始化失敗:', error);
                loadingMessage.textContent = '圖表載入失敗';
            }
        } else {
            loadingMessage.textContent = '載入圖表失敗';
            setTimeout(() => {
                loadingMessage.classList.remove('show');
                chartContainer.classList.add('hidden');
            }, 2000);
        }
    } else {
        // 隱藏圖表容器
        document.getElementById('chart-container').classList.add('hidden');
        if (klineChart) {
            klineChart.dispose();
            klineChart = null;
        }
    }
    
    // 載入選項（其餘代碼保持不變）
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('button');
        optionElement.className = 'option-item';
        optionElement.textContent = option.text;
        optionElement.dataset.index = index;
        optionElement.addEventListener('click', selectOption);
        optionsContainer.appendChild(optionElement);
    });
    
    document.getElementById('nextQuestion').disabled = true;

    if (question.showChart && question.klineJson) {
        // 等待容器可見
        try {
            await waitForElementVisible('echarts-kline');
            const klineData = await loadKlineData(question.klineJson);
            if (klineData) {
                initKlineChart(klineData);
                updateStockInfo(klineData);
            }
        } catch (error) {
            console.error('容器載入超時:', error);
        }
    }
}

function waitForElementVisible(elementId, timeout = 5000) {
    return new Promise((resolve, reject) => {
        const startTime = Date.now();
        
        function check() {
            const element = document.getElementById(elementId);
            if (element && element.offsetWidth > 0 && element.offsetHeight > 0) {
                resolve(element);
            } else if (Date.now() - startTime > timeout) {
                reject(new Error(`Element ${elementId} not visible within ${timeout}ms`));
            } else {
                setTimeout(check, 50);
            }
        }
        
        check();
    });
}

function selectOption(event) {
    // 移除所有選項的選中狀態
    document.querySelectorAll('.option-item').forEach(item => {
        item.classList.remove('selected');
    });
    
    // 選中當前選項
    event.target.classList.add('selected');
    
    // 啟用下一題按鈕
    document.getElementById('nextQuestion').disabled = false;
}

function nextQuestion() {
    const selectedOption = document.querySelector('.option-item.selected');
    if (!selectedOption) return;
    
    const optionIndex = parseInt(selectedOption.dataset.index);
    const question = questions[currentQuestionIndex];
    const selectedAnswer = question.options[optionIndex];
    
    // 儲存圖表截圖（如果有的話）
    if (question.showChart && klineChart) {
        try {
            chartImages[question.id] = klineChart.getDataURL({
                type: 'png',
                pixelRatio: 2,
                backgroundColor: '#ffffff'
            });
        } catch (error) {
            console.warn('圖表截圖失敗:', error);
        }
    }
    
    // 保存答案
    userAnswers.push({
        questionId: question.id,
        questionText: question.text,
        selectedAnswer: selectedAnswer.text,
        points: selectedAnswer.points,
        personalities: selectedAnswer.personalities,
        hasChart: question.showChart,
        klineTitle: question.klineTitle || null
    });
    
    // 計算分數
    totalScore += selectedAnswer.points;
    
    // 計算人格分數
    selectedAnswer.personalities.forEach(personality => {
        personalityScores[personality]++;
    });
    
    // 移到下一題
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    // 計算最終資金
    const finalFund = Math.max(0, currentUser.initialFund + (totalScore * 0.1));
    
    // 填入結果數據
    document.getElementById('result-name').textContent = currentUser.name;
    document.getElementById('result-initial-fund').textContent = currentUser.initialFund;
    document.getElementById('result-final-fund').textContent = finalFund.toFixed(1);
    document.getElementById('result-total-score').textContent = totalScore;
    
    // 計算最高分的人格類型
    const maxScore = Math.max(...Object.values(personalityScores));
    const topPersonalities = Object.keys(personalityScores).filter(key => personalityScores[key] === maxScore);
    
    // 顯示人格分析
    const personalityResultsContainer = document.getElementById('personality-results');
    personalityResultsContainer.innerHTML = '';
    
    topPersonalities.forEach(personalityKey => {
        const personality = personalityTypes[personalityKey];
        const personalityCard = document.createElement('div');
        personalityCard.className = 'personality-card';
        personalityCard.innerHTML = `
            <h3 class="personality-name">${personality.name}</h3>
            <p class="personality-score">得分: ${personalityScores[personalityKey]} 分</p>
            <p class="personality-description">${personality.description}</p>
        `;
        personalityResultsContainer.appendChild(personalityCard);
    });
    
    // 顯示人格分布圖
    showPersonalityChart();
    
    // 切換到結果頁面
    showSection('results-section');
}

function showPersonalityChart() {
    const personalityChart = document.getElementById('personality-chart');
    personalityChart.innerHTML = '';
    
    const totalScore = Object.values(personalityScores).reduce((a, b) => a + b, 0);
    
    Object.entries(personalityScores).forEach(([key, score]) => {
        const personality = personalityTypes[key];
        const percentage = totalScore > 0 ? (score / totalScore) * 100 : 0;
        
        const barElement = document.createElement('div');
        barElement.className = 'personality-bar';
        barElement.innerHTML = `
            <div class="personality-bar-label">${personality.name}</div>
            <div class="personality-bar-fill">
                <div class="personality-bar-progress" style="width: ${percentage.toFixed(1)}%; background-color: ${personality.color}"></div>
            </div>
            <div class="personality-bar-score">${score} 分 (${percentage.toFixed(1)}%)</div>
        `;
        personalityChart.appendChild(barElement);
    });
}

function showAnswers() {
    const answersContainer = document.getElementById('answers-list');
    answersContainer.innerHTML = '';
    
    userAnswers.forEach((answer, index) => {
        const answerElement = document.createElement('div');
        answerElement.className = 'answer-item';
        answerElement.innerHTML = `
            <div class="answer-question">第${index + 1}題: ${answer.questionText}</div>
            <div class="answer-choice">您的選擇: ${answer.selectedAnswer}</div>
            <div class="answer-points">得分: ${answer.points} 分 | 人格類型: ${answer.personalities.join(', ')}</div>
            ${answer.hasChart ? `<div class="answer-chart-note">※ 包含${answer.klineTitle}分析</div>` : ''}
        `;
        answersContainer.appendChild(answerElement);
    });
    
    showSection('answers-section');
}

function backToResults() {
    showSection('results-section');
}

function restartQuiz() {
    // 重置所有數據
    currentUser = {};
    currentQuestionIndex = 0;
    userAnswers = [];
    totalScore = 0;
    personalityScores = { A: 0, B: 0, C: 0, D: 0 };
    chartImages = {};
    
    // 清空輸入欄位
    document.getElementById('userName').value = '';
    document.getElementById('initialFund').value = '';
    
    // 清理ECharts圖表
    if (klineChart) {
        klineChart.dispose();
        klineChart = null;
    }
    
    // 返回歡迎頁面
    showSection('welcome-section');
}

function showSection(sectionId) {
    // 隱藏所有section
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // 顯示指定section
    document.getElementById(sectionId).classList.add('active');
}

// ECharts K線圖相關功能
function initKlineChart(klineData) {
    const chartElement = document.getElementById('echarts-kline');
    
    // 強化容器檢查
    if (!chartElement) {
        console.error('圖表容器元素不存在');
        return;
    }

    // 確保容器可見且有尺寸
    if (chartElement.offsetWidth === 0 || chartElement.offsetHeight === 0) {
        console.log('容器尺寸不正確, 延遲重試...');
        setTimeout(() => initKlineChart(klineData), 300);
        return;
    }

    if (typeof echarts === 'undefined') {
        console.error('ECharts 尚未載入完成');
        setTimeout(() => initKlineChart(klineData), 500);
        return;
    }
    
    if (!chartElement || chartElement.offsetWidth === 0) {
        console.error('圖表容器不存在或不可見');
        return;
    }
    
    if (klineChart) {
        klineChart.dispose();
        klineChart = null;
    }
    
    try {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        klineChart = echarts.init(chartElement, isDark ? 'dark' : null);
        
        // 準備數據 - 修改此部分
        const originalDates = klineData.dates; // 保留原始日期供tooltip使用
        const categoryData = klineData.data.map((_, index) => index + 1); // 改為數字序號
        const values = klineData.data.map(item => [item[0], item[1], item[2], item[3]]);
        const volumes = klineData.data.map((item, index) => [index, item[4], item[1] > item[0] ? 1 : -1]);
        
        const option = {
            backgroundColor: 'transparent',
            title: {
                text: klineData.symbol,
                left: 'center',
                textStyle: {
                    color: isDark ? '#ffffff' : '#333333',
                    fontSize: 16
                }
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross'
                },
                backgroundColor: isDark ? '#2d2d2d' : '#ffffff',
                borderColor: isDark ? '#555' : '#ccc',
                textStyle: {
                    color: isDark ? '#ffffff' : '#333333'
                },
                formatter: function(params) {
                    if (!params || params.length === 0) return '';
                    const data = params[0].data;
                    const index = params[0].dataIndex;
                    const volume = volumes[index] ? volumes[index][1] : 0;
                    const date = originalDates[index] || `第${index + 1}期`; // 在tooltip中仍顯示日期
                    return `期數: ${index + 1}<br/>
                            日期: ${date}<br/>
                            開盤: ${data[0]}<br/>
                            收盤: ${data[1]}<br/>
                            最低: ${data[2]}<br/>
                            最高: ${data[3]}<br/>
                            成交量: ${volume.toLocaleString()}`;
                }
            },
            grid: [
                {
                    left: '10%',
                    right: '8%',
                    height: '55%',
                    top: '15%'
                },
                {
                    left: '10%',
                    right: '8%',
                    top: '75%',
                    height: '15%'
                }
            ],
            xAxis: [
                {
                    type: 'category',
                    data: categoryData, // 使用數字序號
                    scale: true,
                    boundaryGap: false,
                    axisLine: { 
                        onZero: false,
                        lineStyle: { color: isDark ? '#555' : '#ccc' }
                    },
                    splitLine: { show: false },
                    axisLabel: { 
                        color: isDark ? '#ccc' : '#666',
                        formatter: function(value) {
                            return value; // 直接顯示數字
                        }
                    }
                },
                {
                    type: 'category',
                    gridIndex: 1,
                    data: categoryData, // 使用數字序號
                    scale: true,
                    boundaryGap: false,
                    axisLine: { 
                        onZero: false,
                        lineStyle: { color: isDark ? '#555' : '#ccc' }
                    },
                    axisTick: { show: false },
                    splitLine: { show: false },
                    axisLabel: { show: false }
                }
            ],
            yAxis: [
                {
                    scale: true,
                    splitArea: { show: true },
                    axisLine: { 
                        lineStyle: { color: isDark ? '#555' : '#ccc' }
                    },
                    axisLabel: { 
                        color: isDark ? '#ccc' : '#666'
                    },
                    splitLine: {
                        lineStyle: { color: isDark ? '#333' : '#eee' }
                    }
                },
                {
                    scale: true,
                    gridIndex: 1,
                    splitNumber: 2,
                    axisLabel: { show: false },
                    axisLine: { show: false },
                    axisTick: { show: false },
                    splitLine: { show: false }
                }
            ],
            dataZoom: [],
            series: [
                {
                    name: 'K線',
                    type: 'candlestick',
                    data: values,
                    itemStyle: {
                        color: '#ef4444',
                        color0: '#22c55e',
                        borderColor: '#ef4444',
                        borderColor0: '#22c55e'
                    },
                    emphasis: {
                        itemStyle: {
                            color: '#ff6b6b',
                            color0: '#51cf66',
                            borderColor: '#ff6b6b',
                            borderColor0: '#51cf66'
                        }
                    }
                },
                {
                    name: '成交量',
                    type: 'bar',
                    xAxisIndex: 1,
                    yAxisIndex: 1,
                    data: volumes.map(v => v[1]),
                    itemStyle: {
                        color: function(params) {
                            const volData = volumes[params.dataIndex];
                            return volData && volData[2] > 0 ? '#22c55e' : '#ef4444';
                        }
                    }
                }
            ]
        };
        
        klineChart.setOption(option, true);
        
        setTimeout(() => {
            if (klineChart) {
                klineChart.resize();
            }
        }, 100);
        
        console.log('K線圖初始化成功');
        
    } catch (error) {
        console.error('K線圖初始化失敗:', error);
    }
}

function updateChartTheme() {
    if (klineChart && currentKlineData) {
        setTimeout(() => {
            initKlineChart(currentKlineData);
        }, 100);
    }
}

function updateStockInfo(klineData) {
    if (!klineData || !klineData.data || klineData.data.length < 2) return;
    
    // 模擬當前股價資訊
    const latestData = klineData.data[klineData.data.length - 1];
    const prevData = klineData.data[klineData.data.length - 2];
    const currentPrice = latestData[1]; // 收盤價
    const prevPrice = prevData[1];
    const change = currentPrice - prevPrice;
    const changePercent = (change / prevPrice * 100).toFixed(2);
    
    document.getElementById('stock-price').textContent = currentPrice.toFixed(2);
    const changeElement = document.getElementById('stock-change');
    changeElement.textContent = `${change > 0 ? '+' : ''}${change.toFixed(2)} (${changePercent}%)`;
    changeElement.className = 'stock-change ' + (change > 0 ? 'positive' : 'negative');
}

// pdfmake PDF下載功能
async function downloadPDF() {
    const downloadBtn = document.getElementById('downloadPDF');
    const originalText = downloadBtn.textContent;
    downloadBtn.textContent = '生成PDF中...';
    downloadBtn.disabled = true;

    try {
        // 計算人格分析結果
        const totalPersonalityScore = Object.values(personalityScores).reduce((a, b) => a + b, 0);
        const maxScore = Math.max(...Object.values(personalityScores));
        const topPersonalities = Object.keys(personalityScores).filter(key => personalityScores[key] === maxScore);

        // 定義 PDF 文檔結構
        const docDefinition = {
            pageSize: 'A4',
            pageMargins: [40, 60, 40, 60],
            
            content: [
                // 標題頁
                {
                    text: '投資人格測驗報告',
                    style: 'header',
                    alignment: 'center',
                    margin: [0, 0, 0, 30]
                },
                {
                    text: 'Investment Personality Assessment Report',
                    style: 'subheader',
                    alignment: 'center',
                    margin: [0, 0, 0, 40]
                },
                
                // 基本資訊表格
                {
                    text: '基本資訊',
                    style: 'sectionHeader',
                    margin: [0, 0, 0, 15]
                },
                {
                    table: {
                        widths: ['25%', '25%', '25%', '25%'],
                        body: [
                            [
                                { text: '姓名', style: 'tableHeader' },
                                { text: '起始資金', style: 'tableHeader' },
                                { text: '總得分', style: 'tableHeader' },
                                { text: '最終資金', style: 'tableHeader' }
                            ],
                            [
                                { text: currentUser.name, style: 'tableCell' },
                                { text: `${currentUser.initialFund} 萬元`, style: 'tableCell' },
                                { text: `${totalScore} 分`, style: 'tableCell' },
                                { text: `${(currentUser.initialFund + (totalScore * 0.1)).toFixed(1)} 萬元`, style: 'tableCell' }
                            ]
                        ]
                    },
                    layout: {
                        fillColor: function (rowIndex, node, columnIndex) {
                            return (rowIndex === 0) ? '#e6f3ff' : null;
                        }
                    },
                    margin: [0, 0, 0, 30]
                },
                
                // 人格分析結果
                {
                    text: '投資人格分析',
                    style: 'sectionHeader',
                    margin: [0, 0, 0, 15]
                },
                ...topPersonalities.map(personalityKey => {
                    const personality = personalityTypes[personalityKey];
                    return {
                        columns: [
                            {
                                width: '100%',
                                stack: [
                                    {
                                        text: personality.name,
                                        style: 'personalityName',
                                        margin: [0, 0, 0, 5]
                                    },
                                    {
                                        text: `得分: ${personalityScores[personalityKey]} 分`,
                                        style: 'personalityScore',
                                        margin: [0, 0, 0, 10]
                                    },
                                    {
                                        text: personality.description,
                                        style: 'personalityDescription',
                                        margin: [0, 0, 0, 20]
                                    }
                                ]
                            }
                        ]
                    };
                }),
                
                // 人格分數統計
                {
                    text: '人格分數統計',
                    style: 'sectionHeader',
                    margin: [0, 20, 0, 15]
                },
                {
                    table: {
                        widths: ['40%', '20%', '40%'],
                        body: [
                            [
                                { text: '人格類型', style: 'tableHeader' },
                                { text: '得分', style: 'tableHeader' },
                                { text: '百分比', style: 'tableHeader' }
                            ],
                            ...Object.entries(personalityScores).map(([key, score]) => {
                                const personality = personalityTypes[key];
                                const percentage = totalPersonalityScore > 0 ? ((score / totalPersonalityScore) * 100).toFixed(1) : '0.0';
                                return [
                                    { text: personality.name, style: 'tableCell' },
                                    { text: `${score} 分`, style: 'tableCell' },
                                    { text: `${percentage}%`, style: 'tableCell' }
                                ];
                            })
                        ]
                    },
                    layout: {
                        fillColor: function (rowIndex, node, columnIndex) {
                            return (rowIndex === 0) ? '#e6f3ff' : null;
                        }
                    },
                    margin: [0, 0, 0, 30]
                },
                
                // K線圖（如果有的話）
                ...Object.keys(chartImages).length > 0 ? [{
                    text: 'K線圖參考',
                    style: 'sectionHeader',
                    margin: [0, 0, 0, 15]
                }, ...Object.entries(chartImages).map(([questionId, image]) => {
                    const answer = userAnswers.find(a => a.questionId == questionId);
                    return {
                        stack: [
                            {
                                text: answer ? answer.klineTitle : 'K線圖',
                                style: 'chartTitle',
                                margin: [0, 0, 0, 10]
                            },
                            {
                                image: image,
                                width: 450,
                                alignment: 'center',
                                margin: [0, 0, 0, 20]
                            }
                        ]
                    };
                })] : [],
                
                // 新頁面: 答題記錄
                {
                    text: '詳細答題記錄',
                    style: 'sectionHeader',
                    pageBreak: 'before',
                    margin: [0, 0, 0, 20]
                },
                
                // 答題記錄表格
                {
                    table: {
                        widths: ['8%', '52%', '25%', '15%'],
                        body: [
                            [
                                { text: '題號', style: 'tableHeader' },
                                { text: '問題', style: 'tableHeader' },
                                { text: '您的選擇', style: 'tableHeader' },
                                { text: '得分', style: 'tableHeader' }
                            ],
                            ...userAnswers.map((answer, index) => [
                                { text: (index + 1).toString(), style: 'tableCell' },
                                { text: answer.questionText, style: 'tableCell' },
                                { text: answer.selectedAnswer, style: 'tableCell' },
                                { text: `${answer.points} 分`, style: 'tableCell' }
                            ])
                        ]
                    },
                    layout: {
                        fillColor: function (rowIndex, node, columnIndex) {
                            return (rowIndex === 0) ? '#e6f3ff' : (rowIndex % 2 === 0) ? '#f8f9fa' : null;
                        }
                    },
                    margin: [0, 0, 0, 30]
                },
                
                // 報告說明
                {
                    text: '報告說明',
                    style: 'sectionHeader',
                    margin: [0, 30, 0, 15]
                },
                {
                    text: [
                        '本報告基於您的答題結果分析產生, 旨在協助您了解自己的投資風格與偏好。',
                        '投資決策應綜合考量個人財務狀況、風險承受能力及市場環境等因素。',
                        '本報告僅供參考, 不構成投資建議。'
                    ].join('\n'),
                    style: 'disclaimer',
                    margin: [0, 0, 0, 20]
                },
                {
                    text: `報告生成時間: ${new Date().toLocaleString('zh-TW')}`,
                    style: 'footer',
                    alignment: 'center'
                }
            ],
            
            // 樣式定義
            styles: {
                header: {
                    fontSize: 24,
                    bold: true,
                    color: '#2c5282'
                },
                subheader: {
                    fontSize: 14,
                    color: '#666666',
                    italics: true
                },
                sectionHeader: {
                    fontSize: 16,
                    bold: true,
                    color: '#2c5282',
                    decoration: 'underline'
                },
                personalityName: {
                    fontSize: 14,
                    bold: true,
                    color: '#2c5282'
                },
                personalityScore: {
                    fontSize: 12,
                    color: '#666666'
                },
                personalityDescription: {
                    fontSize: 11,
                    lineHeight: 1.6,
                    alignment: 'justify'
                },
                chartTitle: {
                    fontSize: 12,
                    bold: true,
                    color: '#2c5282',
                    alignment: 'center'
                },
                tableHeader: {
                    bold: true,
                    fontSize: 10,
                    color: '#2c5282',
                    alignment: 'center'
                },
                tableCell: {
                    fontSize: 9,
                    alignment: 'center'
                },
                disclaimer: {
                    fontSize: 10,
                    italics: true,
                    color: '#666666',
                    lineHeight: 1.4
                },
                footer: {
                    fontSize: 8,
                    color: '#999999'
                }
            },
            
            // 預設樣式
            defaultStyle: {
                font: 'NotoSansTC',
                fontSize: 11,
                lineHeight: 1.4
            }
        };

        // 生成並下載 PDF
        pdfMake.createPdf(docDefinition).download(`${currentUser.name}_投資人格測驗報告.pdf`);
        
        // 恢復按鈕狀態
        downloadBtn.textContent = originalText;
        downloadBtn.disabled = false;
        
    } catch (error) {
        console.error('PDF生成失敗:', error);
        alert('PDF生成失敗, 請稍後再試');
        
        // 恢復按鈕狀態
        downloadBtn.textContent = originalText;
        downloadBtn.disabled = false;
    }
}

// 視窗大小變化處理
window.addEventListener('resize', function() {
    if (klineChart) {
        setTimeout(() => {
            klineChart.resize();
        }, 100);
    }
});

window.addEventListener('error', function(e) {
    console.error('全局錯誤:', e.error);
});

function showChartLoading() {
    document.getElementById('loading-message').classList.add('show');
    document.getElementById('loading-message').textContent = '載入圖表中...';
}

function hideChartLoading() {
    document.getElementById('loading-message').classList.remove('show');
}
