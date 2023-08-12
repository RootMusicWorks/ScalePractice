const tempoInput = document.querySelector('#tempo');
const startStopButton = document.querySelector('#startStopButton');
let isMetronomeRunning = false;
let metronomeInterval;

function playClick() {
    const clickSound = new Audio('click.mp3'); // 音声ファイルのパスを指定
    clickSound.play();
}


function toggleMetronome() {
    if (isMetronomeRunning) {
        clearInterval(metronomeInterval);
        startStopButton.textContent = 'Start';
    } else {
        const tempo = parseInt(tempoInput.value, 10);
        const intervalTime = 60000 / tempo; // ミリ秒単位のインターバル

        metronomeInterval = setInterval(playClick, intervalTime);
        startStopButton.textContent = 'Stop';
    }
    isMetronomeRunning = !isMetronomeRunning;
}

startStopButton.addEventListener('click', toggleMetronome);



const startPositions = ['6弦 人差し指', '6弦 中(薬)指', '6弦 子指', '5弦 人差し指', '5弦 中(薬)指', '5弦 子指'];
const keys = ['C','C#','Db','D', 'D#','Eb', 'E', 'F','F#','Gb', 'G','G#','Ab', 'A','A#','Bb', 'B'];
const scales = ['Major', 'Minor', 'Major Pentatonic','Minor Pentatonic', 'Dorian','Mixsolydian','Melodic Minor','Altered','Super Lydian',];

const generateButton = document.querySelector('#generateButton');
const infoDisplay = document.querySelector('#infoDisplay');

generateButton.addEventListener('click', generateRandomInfo);

function generateRandomInfo() {
    // 選択されたスケールを格納する配列を準備
    const selectedScales = [];

    // 各チェックボックスの状態を確認し、選択されていれば配列に追加
    if (document.querySelector('#majorCheckbox').checked) {
        selectedScales.push('Major');
    }
    if (document.querySelector('#minorCheckbox').checked) {
        selectedScales.push('Minor');
    }
    if (document.querySelector('#majorpentaCheckbox').checked) {
        selectedScales.push('Major Pentatonic');
    }
    if (document.querySelector('#minorpentaCheckbox').checked) {
        selectedScales.push('Minor Pentatonic');
    }
    if (document.querySelector('#drianCheckbox').checked) {
        selectedScales.push('Dorian');
    }
    if (document.querySelector('#mixsolydianCheckbox').checked) {
        selectedScales.push('Mixsolydian');
    }
    if (document.querySelector('#melodicminorCheckbox').checked) {
        selectedScales.push('Melodic Minor');
    }
    if (document.querySelector('#AlteredCheckbox').checked) {
        selectedScales.push('Altered');
    }
    if (document.querySelector('#superlydianCheckbox').checked) {
        selectedScales.push('Super Lydian');
    }
    // 他のスケールのチェックボックスも同様に追加

    // 選択されたスケールの中からランダムに選択
    const randomStartPosition = startPositions[Math.floor(Math.random() * startPositions.length)];
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    const randomScale = selectedScales[Math.floor(Math.random() * selectedScales.length)];

    const infoText = `Start Position: ${randomStartPosition}<br>Key: ${randomKey}<br>Scale: ${randomScale}`;
    infoDisplay.innerHTML = infoText;
}
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        generateRandomInfo();
    }
});
