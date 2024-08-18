let Distraction = document.getElementById("DistractionCount");
const DistractionButton = document.getElementById("distractionButton");
let DistractionCount = 0;

DistractionButton.addEventListener("click", (e) => {
  DistractionCount++;

  Distraction.textContent = DistractionCount;
});


// Get Elements
const checkbox = document.getElementById('playMusicCheckbox');
const music = document.getElementById('backgroundMusic');
const checkboxTwo = document.getElementById('playMusicCheckboxTwo');
const musicTwo = document.getElementById('backgroundMusicTwo');

// Music 1
checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        // Müzik çalma işlemini dene
        music.play().then(() => {
            console.log('Müzik çalıyor.');
        }).catch(error => {
            console.error('Müzik çalma hatası:', error);
        });
    } else {
        music.pause();
        music.currentTime = 0; // Müzik başa döner
        console.log('Müzik durduruldu.');
    }
});

// Music 2
checkboxTwo.addEventListener('change', () => {
    if (checkboxTwo.checked) {
        // Müzik çalma işlemini dene
        musicTwo.play().then(() => {
            console.log('Müzik çalıyor.');
        }).catch(error => {
            console.error('Müzik çalma hatası:', error);
        });
    } else {
        musicTwo.pause();
        musicTwo.currentTime = 0; // Müzik başa döner
        console.log('Müzik durduruldu.');
    }
});