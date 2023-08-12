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
