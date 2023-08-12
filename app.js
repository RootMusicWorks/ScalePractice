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
const scales = ['Major', 'Minor', 'Minor Pentatonic','Major Pentatonic', 'Dorian','Mixsolydian','Melodic Minor','Altered','Super Lydian',];

const generateButton = document.querySelector('#generateButton');
const infoDisplay = document.querySelector('#infoDisplay');

generateButton.addEventListener('click', generateRandomInfo);

function generateRandomInfo() {
    const randomStartPosition = startPositions[Math.floor(Math.random() * startPositions.length)];
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    const randomScale = scales[Math.floor(Math.random() * scales.length)];

    const infoText = `Start Position: ${randomStartPosition}<br>Key: ${randomKey}<br>Scale: ${randomScale}`;
    infoDisplay.innerHTML = infoText;
}
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        generateRandomInfo();
    }
});
