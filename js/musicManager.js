let isMusicPlaying = false;
let isMusicInitialized = false;

function initializeMusic(season) {
  const audioElement = document.getElementById('season-music');
  const musicPath = `assets/music/${season}.mp3`;
  audioElement.src = musicPath;
  isMusicInitialized = true;
}

function toggleMusic() {
  const audioElement = document.getElementById('season-music');
  if (!isMusicInitialized) {
    return;
  }

  if (isMusicPlaying) {
    audioElement.pause();
  } else {
    audioElement.play()
      .then(() => {
        audioElement.play();
      })
      .catch((error) => {
        console.error('Ошибка при воспроизведении музыки:', error);
      });
  }
  isMusicPlaying = !isMusicPlaying;
  updateMusicButton();
}

function updateMusicButton() {
  const button = document.getElementById('music-toggle');
  if (!isMusicInitialized) {
    button.textContent = '🎵 Включить музыку';
    return;
  }
  button.textContent = isMusicPlaying ? '🎵 Пауза' : '🎵 Включить музыку';
}

// Экспортируем isMusicPlaying
export { isMusicPlaying, initializeMusic, toggleMusic };