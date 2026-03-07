// --- 1. データ定義 ---
const weaponData = {
    "シューター": ["わかばシューター", "もみじシューター", "スプラシューター", "スプラシューターコラボ", "スプラシューター煌", "ボールドマーカー", "ボールドマーカーネオ", "シャープマーカー", "シャープマーカーネオ", "シャープマーカーGECK", "プロモデラーMG", "プロモデラーRG", "プロモデラー彩", "N-ZAP85", "N-ZAP89", "52ガロン", "52ガロンデコ", "96ガロン", "96ガロンデコ", "96ガロン爪", "プライムシューター", "プライムシューターコラボ", "プライムシューターFRZN", "L3リールガン", "L3リールガンD", "L3リールガン箔", "H3リールガン", "H3リールガンD", "H3リールガンSNAK", "ボトルガイザー", "ボトルガイザーフォイル", "ジェットスイーパー", "ジェットスイーパーカスタム", "ジェットスイーパーCOBR", "スペースシューター", "スペースシューターコラボ"],
    "ローラー": ["スプラローラー", "スプラローラーコラボ", "カーボンローラー", "カーボンローラーデコ", "カーボンローラーANGL", "ダイナモローラー", "ダイナモローラーテスラ", "ダイナモローラー冥", "ヴァリアブルローラー", "ヴァリアブルローラーフォイル", "ワイドローラー", "ワイドローラーコラボ", "ワイドローラー惑"],
    "チャージャー": ["スプラチャージャーFRST", "スプラチャージャーコラボ", "スプラチャージャー", "スプラスコープ", "スプラスコープコラボ", "スプラスコープFRST", "スクイックリンα", "スクイックリンβ", "リッター4K", "リッター4Kカスタム", "4Kスコープ", "4Kスコープカスタム", "14式竹筒銃・甲", "14式竹筒銃・乙", "ソイチューバー", "ソイチューバーカスタム", "R-PEN5H", "R-PEN5B"],
    "マニューバー": ["スプラマニューバー", "スプラマニューバーコラボ", "スプラマニューバー耀", "スパッタリー", "スパッタリー・ヒュー", "スパッタリーOWL", "デュアルスイーパー", "デュアルスイーパーカスタム", "ケルビン525", "ケルビン525デコ", "クアッドホッパーブラック", "クアッドホッパーホワイト", "ガエンFF", "ガエンFFカスタム"],
    "スロッシャー": ["バケットスロッシャー", "バケットスロッシャーデコ", "ヒッセン", "ヒッセン・ヒュー", "ヒッセンASH", "スクリュースロッシャー", "スクリュースロッシャーネオ", "オーバーフロッシャー", "オーバーフロッシャーデコ", "エクスプロッシャー", "エクスプロッシャーカスタム", "モップリン", "モップリンD", "モップリン角"],
    "スピナー": ["バレルスピナー", "バレルスピナーデコ", "スプラスピナー", "スプラスピナーコラボ", "スプラスピナーPYTN", "ハイドラント", "ハイドラントカスタム", "ハイドラント圧", "クーゲルシュライバー", "クーゲルシュライバー・ヒュー", "ノーチラス47", "ノーチラス79", "イグザミナー", "イグザミナー・ヒュー"],
    "ブラスター": ["ホットブラスター", "ホットブラスターカスタム", "ホットブラスター艶", "ロングブラスター", "ロングブラスターカスタム", "ノヴァブラスター", "ノヴァブラスターネオ", "クラッシュブラスター", "クラッシュブラスターネオ", "ラピッドブラスター", "ラピッドブラスターデコ", "Rブラスターエリート", "Rブラスターエリートデコ", "RブラスターエリートWNTR", "S-BLAST92", "S-BLAST91"],
    "フデ": ["パブロ", "パブロ・ヒュー", "ホクサイ", "ホクサイ・ヒュー", "ホクサイ彗", "フィンセント", "フィンセント・ヒュー", "フィンセントBRNZ"],
    "シェルター": ["パラシェルター", "パラシェルターソレーラ", "キャンピングシェルター", "キャンピングシェルターソレーラ", "キャンピングシェルターCREM", "スパイガジェット", "スパイガジェットソレーラ", "スパイガジェット繚", "24式張替傘・甲", "24式張替傘・乙"],
    "ストリンガー": ["トライストリンガー", "トライストリンガーコラボ", "トライストリンガー燈", "LACT-450", "LACT-450デコ", "フルイドV", "フルイドVカスタム"],
    "ワイパー": ["ドライブワイパー", "ドライブワイパーデコ", "ジムワイパー", "ジムワイパー・ヒュー", "ジムワイパー封", "デンタルワイパーミント", "デンタルワイパースミ"]
};

const gearPowersAtama = ["メイン効率", "サブ効率", "インク回復", "ヒト速", "イカ速", "スぺ増", "スぺ減", "スぺ強", "ゾンビ", "スパ短", "サブ性能", "安全靴", "サブ軽減", "アクション強化", "スタートダッシュ", "ラストスパート", "逆境", "カムバック"];
const gearPowersFuku = ["メイン効率", "サブ効率", "インク回復", "ヒト速", "イカ速", "スぺ増", "スぺ減", "スぺ強", "ゾンビ", "スパ短", "サブ性能", "安全靴", "サブ軽減", "アクション強化", "イカニンジャ", "リベンジ", "サーマルインク", "復活ペナルティ"];
const gearPowersKutu = ["メイン効率", "サブ効率", "インク回復", "ヒト速", "イカ速", "スぺ増", "スぺ減", "スぺ強", "ゾンビ", "スパ短", "サブ性能", "安全靴", "サブ軽減", "アクション強化", "ステジャン", "対物", "受け身"];

// --- 2. 変数 & 初期化 ---
let weaponSettings = JSON.parse(localStorage.getItem('wSet')) || {};
let gearSettings = JSON.parse(localStorage.getItem('gSet')) || {};
let historyData = [];
let spinningStates = [false, false, false, false];
let isAllSpinning = false;
let currentSelection = { w: "", wCat: "", gh: "", gc: "", gs: "" };

if (Object.keys(weaponSettings).length === 0) {
    Object.keys(weaponData).forEach(cat => weaponData[cat].forEach(w => weaponSettings[w] = true));
}
const allGearSorted = [...new Set([...gearPowersAtama, ...gearPowersFuku, ...gearPowersKutu])];
if (Object.keys(gearSettings).length === 0) {
    allGearSorted.forEach(g => gearSettings[g] = true);
}

// --- 3. ユーティリティ ---
function applyPressEffect(el) {
    if (!el || el.dataset.pressAttached) return;
    const start = () => el.classList.add('is-pressed');
    const end = () => el.classList.remove('is-pressed');
    el.addEventListener('touchstart', start, { passive: true });
    el.addEventListener('touchend', end, { passive: true });
    el.addEventListener('mousedown', start);
    window.addEventListener('mouseup', end);
    el.dataset.pressAttached = "true";
}

const showView = (id) => {
    document.querySelectorAll('.view, .overlay').forEach(v => v.classList.add('hidden'));
    document.querySelectorAll('.flash-weapon').forEach(el => el.classList.remove('flash-weapon'));
    const target = document.getElementById(id);
    if (target) {
        target.classList.remove('hidden');
        // モーダル内のボタンにもプレス演出を適用
        target.querySelectorAll('button, .admin-nav-item').forEach(applyPressEffect);
    }
};

function updateLocks() {
    const mainBtn = document.getElementById('spin-btn');
    const subs = ['spin-weapon', 'spin-head', 'spin-clothes', 'spin-shoes'];
    if (isAllSpinning) {
        mainBtn.classList.add('is-spinning-active');
        mainBtn.innerText = "SPINNING...";
    } else {
        mainBtn.classList.remove('is-spinning-active');
        mainBtn.innerText = "ALL SPIN!";
    }
    subs.forEach((id, i) => {
        const btn = document.getElementById(id);
        if (spinningStates[i]) btn.classList.add('is-spinning-active');
        else btn.classList.remove('is-spinning-active');
    });
}

// --- 4. 抽選表示ロジック ---
function updateWeaponDisplay(isFinal = false) {
    const active = Object.keys(weaponSettings).filter(w => weaponSettings[w]);
    if (active.length === 0) return;
    const rw = active[Math.floor(Math.random() * active.length)];
    const cat = Object.keys(weaponData).find(c => weaponData[c].includes(rw));

    document.getElementById('res-name').innerText = isFinal ? rw : "SPINNING...";
    document.getElementById('res-img').innerHTML = `<img src="スプラ画像/武器/${cat}/${rw}.png">`;
    if (isFinal) { currentSelection.w = rw; currentSelection.wCat = cat; }
}

function updateGearDisplay(boxId, pool, key, isFinal = false) {
    const active = pool.filter(g => gearSettings[g]);
    const box = document.getElementById(boxId);
    const frame = box.querySelector('.gear-power-frame');
    const text = box.querySelector('.gear-name-text');

    if (active.length === 0) {
        frame.innerHTML = '?'; text.innerText = "なし";
        if (isFinal) currentSelection[key] = "なし"; return;
    }
    const n = active[Math.floor(Math.random() * active.length)];
    frame.innerHTML = `<img src="スプラ画像/ギア/${n}.png">`;
    text.innerText = isFinal ? n : "SPINNING...";
    if (isFinal) currentSelection[key] = n;
}

// --- 5. スピン実行 ---
async function runSingleSpin(idx, minTime = 800) {
    if (spinningStates[idx]) return;
    spinningStates[idx] = true;
    updateLocks();

    const targets = [
        document.getElementById('card-weapon'),
        document.getElementById('gear-head'),
        document.getElementById('gear-clothes'),
        document.getElementById('gear-shoes')
    ];

    targets[idx].classList.remove('flash-weapon', 'spinning');
    targets[idx].classList.add('spinning');

    let itv = setInterval(() => {
        if (idx === 0) updateWeaponDisplay(false);
        else {
            const p = [null, ['gear-head', gearPowersAtama, 'gh'], ['gear-clothes', gearPowersFuku, 'gc'], ['gear-shoes', gearPowersKutu, 'gs']];
            updateGearDisplay(...p[idx], false);
        }
    }, 50);

    await new Promise(r => setTimeout(r, minTime + Math.random() * 200));

    clearInterval(itv);
    targets[idx].classList.remove('spinning');

    if (idx === 0) updateWeaponDisplay(true);
    else {
        const p = [null, ['gear-head', gearPowersAtama, 'gh'], ['gear-clothes', gearPowersFuku, 'gc'], ['gear-shoes', gearPowersKutu, 'gs']];
        updateGearDisplay(...p[idx], true);
    }

    targets[idx].classList.add('flash-weapon');
    spinningStates[idx] = false;
    updateLocks();
}

async function startAllSpin() {
    if (isAllSpinning || spinningStates.includes(true)) return;
    const active = Object.keys(weaponSettings).filter(w => weaponSettings[w]);
    if (active.length === 0) { alert("ブキをONにしてね！"); return; }

    isAllSpinning = true;
    updateLocks();

    await Promise.all([
        runSingleSpin(0, 800),
        (async () => { await new Promise(r => setTimeout(r, 200)); return runSingleSpin(1, 800); })(),
        (async () => { await new Promise(r => setTimeout(r, 400)); return runSingleSpin(2, 800); })(),
        (async () => { await new Promise(r => setTimeout(r, 600)); return runSingleSpin(3, 800); })()
    ]);

    if (currentSelection.w) {
        historyData.push({ ...currentSelection });
        if (historyData.length > 50) historyData.shift();
    }

    isAllSpinning = false;
    updateLocks();
}

// --- 6. 管理画面レンダー ---
function renderTypeGrid() {
    const grid = document.getElementById('type-grid'); grid.innerHTML = '';
    Object.keys(weaponData).forEach(t => {
        const div = document.createElement('div'); div.className = 'list-item';
        div.innerHTML = `
            <div style="display:flex;align-items:center;flex:1;" onclick="openWList('${t}')">
                <img src="スプラ画像/アイコン/${t}アイコン.png">
                <span style="margin-left:10px;font-weight:bold;">${t}</span>
            </div>
            <input type="checkbox" ${weaponData[t].some(w => weaponSettings[w]) ? 'checked' : ''} onchange="toggleCat('${t}',this.checked);renderTypeGrid()">
        `;
        grid.appendChild(div);
    });
}

function openWList(t) {
    document.getElementById('current-type-title').innerText = t;
    renderWList(t);
    showView('view-weapon-config');
}

function renderWList(cat) {
    const list = document.getElementById('weapon-list'); list.innerHTML = '';
    weaponData[cat].forEach(w => {
        const div = document.createElement('div'); div.className = 'list-item';
        div.innerHTML = `
            <div style="display:flex;align-items:center;flex:1;">
                <img src="スプラ画像/武器/${cat}/${w}.png">
                <span style="margin-left:10px;font-size:0.9rem;">${w}</span>
            </div>
            <input type="checkbox" ${weaponSettings[w] ? 'checked' : ''} onchange="weaponSettings['${w}']=this.checked;save()">
        `;
        div.onclick = (e) => { if (e.target.tagName !== 'INPUT') { const c = div.querySelector('input'); c.checked = !c.checked; c.dispatchEvent(new Event('change')); } };
        list.appendChild(div);
    });
}

function renderGList() {
    const list = document.getElementById('gear-list'); list.innerHTML = '';
    allGearSorted.forEach(g => {
        const div = document.createElement('div'); div.className = 'list-item';
        div.innerHTML = `
            <div style="display:flex;align-items:center;flex:1;">
                <img src="スプラ画像/ギア/${g}.png">
                <span style="margin-left:10px;">${g}</span>
            </div>
            <input type="checkbox" ${gearSettings[g] ? 'checked' : ''} onchange="gearSettings['${g}']=this.checked;save()">
        `;
        div.onclick = (e) => { if (e.target.tagName !== 'INPUT') { const c = div.querySelector('input'); c.checked = !c.checked; c.dispatchEvent(new Event('change')); } };
        list.appendChild(div);
    });
}

function toggleCat(t, b) { weaponData[t].forEach(w => weaponSettings[w] = b); save(); }
function save() { localStorage.setItem('wSet', JSON.stringify(weaponSettings)); localStorage.setItem('gSet', JSON.stringify(gearSettings)); }

function renderHistory() {
    const list = document.getElementById('history-list'); list.innerHTML = '';
    if (!historyData.length) { list.innerHTML = '<p style="text-align:center;margin-top:20px;">りれきがありません</p>'; return; }
    historyData.slice().reverse().forEach(h => {
        const d = document.createElement('div'); d.className = 'history-card';
        d.innerHTML = `
            <div class="history-thumb"><img src="スプラ画像/武器/${h.wCat}/${h.w}.png"><div class="history-thumb-name">${h.w}</div></div>
            <div class="history-thumb"><img src="スプラ画像/ギア/${h.gh}.png"><div class="history-thumb-name">${h.gh}</div></div>
            <div class="history-thumb"><img src="スプラ画像/ギア/${h.gc}.png"><div class="history-thumb-name">${h.gc}</div></div>
            <div class="history-thumb"><img src="スプラ画像/ギア/${h.gs}.png"><div class="history-thumb-name">${h.gs}</div></div>
        `;
        list.appendChild(d);
    });
}

// --- 7. 初期化 & イベント ---
window.onload = () => {
    document.getElementById('spin-btn').onclick = startAllSpin;
    document.getElementById('spin-weapon').onclick = () => runSingleSpin(0);
    document.getElementById('spin-head').onclick = () => runSingleSpin(1);
    document.getElementById('spin-clothes').onclick = () => runSingleSpin(2);
    document.getElementById('spin-shoes').onclick = () => runSingleSpin(3);

    document.getElementById('start-setup').onclick = () => { renderTypeGrid(); showView('view-type-select'); };
    document.getElementById('start-gear-setup').onclick = () => { renderGList(); showView('view-gear-config'); };
    document.getElementById('open-history').onclick = () => { renderHistory(); showView('view-history'); };
    document.getElementById('master-reset').onclick = () => showView('confirm-modal');
    document.getElementById('history-reset').onclick = () => { historyData = []; renderHistory(); };

    document.getElementById('to-main').onclick = () => showView('view-main');
    document.getElementById('to-types').onclick = () => showView('view-type-select');
    document.getElementById('gear-to-main').onclick = () => showView('view-main');
    document.getElementById('history-to-main').onclick = () => showView('view-main');
    document.getElementById('confirm-cancel').onclick = () => showView('view-main');
    document.getElementById('confirm-ok').onclick = () => { localStorage.clear(); location.reload(); };

    document.getElementById('cat-all-on').onclick = () => { Object.keys(weaponSettings).forEach(w => weaponSettings[w] = true); renderTypeGrid(); save(); };
    document.getElementById('cat-all-off').onclick = () => { Object.keys(weaponSettings).forEach(w => weaponSettings[w] = false); renderTypeGrid(); save(); };
    document.getElementById('all-on').onclick = () => { const t = document.getElementById('current-type-title').innerText; weaponData[t].forEach(w => weaponSettings[w] = true); renderWList(t); save(); };
    document.getElementById('all-off').onclick = () => { const t = document.getElementById('current-type-title').innerText; weaponData[t].forEach(w => weaponSettings[w] = false); renderWList(t); save(); };
    document.getElementById('gear-all-on').onclick = () => { allGearSorted.forEach(g => gearSettings[g] = true); renderGList(); save(); };
    document.getElementById('gear-all-off').onclick = () => { allGearSorted.forEach(g => gearSettings[g] = false); renderGList(); save(); };

    // すべてのボタン・管理メニューにプレス効果を適用
    document.querySelectorAll('button, .admin-nav-item').forEach(applyPressEffect);
    showView('view-main');
};