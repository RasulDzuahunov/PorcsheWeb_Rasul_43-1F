const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function changeSlide() {
    // Убираем класс active у всех слайдов
    slides.forEach(slide => slide.classList.remove('active'));

    // Добавляем класс active только текущему слайду
    slides[currentIndex].classList.add('active');

    // Переход к следующему слайду циклически
    currentIndex = (currentIndex + 1) % slides.length;
}

// Меняем слайды каждые 15 секунд
setInterval(changeSlide, 13000);

document.addEventListener("DOMContentLoaded", () => {
    const tiles = document.querySelectorAll(".teaser-tile");
    tiles.forEach((tile, index) => {
      setTimeout(() => {
        tile.classList.add("fade-in");
      }, index * 200);
    });
  });

  
  // Выбор всех элементов .teaser-tile
const tiles = document.querySelectorAll('.teaser-tile');

// Функция проверки видимости элемента
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Функция для добавления класса "visible", если элемент в зоне видимости
function updateVisibility() {
    tiles.forEach(tile => {
        if (isInViewport(tile) && !tile.classList.contains('visible')) {
            tile.classList.add('visible'); // Добавляем класс один раз
        }
    });
}

// Вызываем updateVisibility при загрузке страницы и при прокрутке
window.addEventListener('scroll', updateVisibility);
window.addEventListener('load', updateVisibility);

const API_URL = 'https://open.er-api.com/v6/latest/';

    document.getElementById('convertBtn').addEventListener('click', async () => {
      const amount = parseFloat(document.getElementById('amount').value);
      const fromCurrency = document.getElementById('fromCurrency').value;
      const toCurrency = document.getElementById('toCurrency').value;

      if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount.');
        return;
      }

      try {
        // Fetch exchange rates
        const response = await fetch(`${API_URL}${fromCurrency}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();

        // Calculate converted amount
        const rate = data.rates[toCurrency];
        if (!rate) {
          alert('Conversion rate not available.');
          return;
        }
        const convertedAmount = (amount * rate).toFixed(2);

        // Display result
        document.getElementById('convertedAmount').textContent = `${convertedAmount} ${toCurrency}`;
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
        alert('Failed to fetch exchange rates. Please try again later.');
      }
    });