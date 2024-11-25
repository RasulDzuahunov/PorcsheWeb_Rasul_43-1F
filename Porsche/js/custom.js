// Переменные для текущего цвета и позиции
let currentColor = 'white';
let currentPosition = 'front911'; 

// Функция изменения цвета
function changeCarColor(color) {
  currentColor = color;  
  updateCarImage();  
}

// Функция изменения позиции
function changeCarPosition(position) {
  currentPosition = position;  

  // Обновляем активное состояние кнопок позиции
  const positionImages = document.querySelectorAll('.position-selector img');
  positionImages.forEach(img => img.classList.remove('selected-position'));
  document.querySelector(`img[onclick="changeCarPosition('${position}')"]`).classList.add('selected-position');

  updateCarImage();  
}

// Функция обновления изображения
function updateCarImage() {
  const carImage = document.getElementById('car-image');
  carImage.src = `/customImage/${currentPosition}_${currentColor}.webp`;  
}

// Функция изменения автомобиля
function changeCar(imageName, carName) {
  const carImage = document.getElementById('car-image');
  const carTitle = document.getElementById('car-name');

  carTitle.textContent = carName;
  carImage.src = `/customImage/${currentPosition}_${currentColor}.webp`; 
}
