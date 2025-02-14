import { startTimer } from './timer.js';
import { setBackground, changeBackground } from './backgroundManager.js';
import { initializeMusic, toggleMusic, isMusicPlaying } from './musicManager.js';


startTimer();


const season = getCurrentSeason();
setBackground(season);



initializeMusic(season);


document.getElementById('music-toggle').addEventListener('click', toggleMusic);
document.getElementById('change-background').addEventListener('click', () => {
  changeBackground(season);
  if (!isMusicPlaying) {
    toggleMusic(); 
  }
});

function getCurrentSeason() {
  const month = new Date().getMonth() + 1;
  if (month >= 3 && month <= 5) return 'spring';
  if (month >= 6 && month <= 8) return 'summer';
  if (month >= 9 && month <= 11) return 'autumn';
  return 'winter';
}