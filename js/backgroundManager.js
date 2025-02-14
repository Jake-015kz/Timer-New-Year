let currentBackgroundIndex = 0;

export function setBackground(season) {
  const backgroundElement = document.getElementById('background');
  const imagePath = `assets/images/${season}/${season}1.webp`;
  backgroundElement.style.backgroundImage = `url(${imagePath})`;
}

export function changeBackground(season) {
  const backgroundElement = document.getElementById('background');
  currentBackgroundIndex = (currentBackgroundIndex + 1) % 4; 
  const imageNumber = currentBackgroundIndex + 1; // 
  const imagePath = `assets/images/${season}/${season}${imageNumber}.webp`;
  backgroundElement.style.backgroundImage = `url(${imagePath})`;
}