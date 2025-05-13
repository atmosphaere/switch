// Определяем функцию-обработчик события click
/**
 * Переключает класс 'night' на body, если клик произошел внутри контейнера .container
 *
 * @param {MouseEvent} e Объект события, содержащий данные о клике
 */
function time(e) {
   // Проверяем, был ли клик совершен внутри элемента с классом '.container'
   if (e.target.closest('.container')) {
      // Переключаем класс 'night' на элементе body
      document.body.classList.toggle('night');
   }
}

// Добавляем слушатель события click на весь документ window
// Когда происходит клик, вызывается функция time
window.addEventListener('click', time, false);