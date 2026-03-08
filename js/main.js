document.addEventListener("DOMContentLoaded", () => {
  // menu open/close
  const catalogMenuItems = document.querySelectorAll('.catalog-menu-list__item')
  const catalogMenuButtons = document.querySelectorAll('.catalog-menu-list__img')
  const catalogInMenuLists = document.querySelectorAll('.catalog-in-menu-list')

  catalogMenuItems.forEach((item, i) => {
    item.addEventListener('click', () => {
      // clear class ">"
      catalogMenuButtons.forEach(itemButton => {
        itemButton.classList.contains('catalog-menu-list__img--active') ? itemButton.classList.remove('catalog-menu-list__img--active') : ''
      })

      // clear class "in ul"
      catalogInMenuLists.forEach(itemList => {
        itemList.classList.contains('catalog-in-menu-list--active') ? itemList.classList.remove('catalog-in-menu-list--active') : ''
      })

      catalogMenuButtons[i].classList.contains('catalog-menu-list__img--active') ? '' : catalogMenuButtons[i].classList.add('catalog-menu-list__img--active')

      catalogInMenuLists[i].classList.contains('catalog-in-menu-list--active') ? '' : catalogInMenuLists[i].classList.add('catalog-in-menu-list--active')
    })
  })

  // catalogMenuButtons.forEach((item, i) => {
  //   item.addEventListener('click', () => {
  //     // clear class ">"
  //     catalogMenuButtons.forEach(item => {
  //       item.classList.contains('catalog-menu-list__img--active') ? item.classList.remove('catalog-menu-list__img--active') : ''
  //     })

  //     // clear class "in ul"
  //     catalogInMenuLists.forEach(item => {
  //       item.classList.contains('catalog-in-menu-list--active') ? item.classList.remove('catalog-in-menu-list--active') : ''
  //     })

  //     item.classList.contains('catalog-menu-list__img--active') ? '' : item.classList.add('catalog-menu-list__img--active')

  //     catalogInMenuLists[i].classList.contains('catalog-in-menu-list--active') ? '' : catalogInMenuLists[i].classList.add('catalog-in-menu-list--active')
  //   })
  // })

  // burger
  const burgerMenu = document.querySelector('.burger-menu')
  const burgerOpen = document.querySelector('.burger')
  const burgerClose = document.querySelector('.burger-menu__close')

  // burger open
  burgerOpen.addEventListener('click', () => {
    document.querySelector('body').style.overflow = 'hidden'
    burgerMenu.classList.contains('burger-menu--active') ?
    "" : burgerMenu.classList.add('burger-menu--active')
  })

  burgerClose.addEventListener('click', () => {
    document.querySelector('body').style.overflow = ''
    burgerMenu.classList.contains('burger-menu--active') ?
    burgerMenu.classList.remove('burger-menu--active') : ""
  })

  // modal call
  const headerCallButton = document.querySelector('.header-call')
  const modalCall = document.querySelector('.call-modal')
  const modalCallFormButton = document.querySelector('.call-modal__button')

  headerCallButton.addEventListener('click', () => {
    modalCall.classList.contains('call-modal--active') ?
    "" : modalCall.classList.add('call-modal--active')
  })

  modalCallFormButton.addEventListener('click', () => {
    modalCall.classList.contains('call-modal--active') ?
    modalCall.classList.remove('call-modal--active') : ""
  })

  // Получаем элементы
// const form = document.querySelector('.call-modal__form')
// const modal = document.querySelector('.form-modal');
// const modalMessage = document.querySelector('.modal-message');

// // Обработчик отправки формы
// form.addEventListener('submit', function(event) {
//   event.preventDefault(); // Отменяем стандартную отправку

//   return;
//   // Собираем данные формы
//   const formData = new FormData(form);

//   // Отправляем на сервер через fetch
//   fetch('php/send.php', {
//     method: 'POST',
//     body: formData
//   })
//   .then(response => response.text()) // Получаем ответ как текст
//   .then(data => {
//     // Обрабатываем ответ от сервера
//     if (data.includes('Письмо отправлено!')) {
//       showModal('Сообщение успешно отправлено!', 'success');
//     } else {
//       showModal('Ошибка отправки. Попробуйте ещё раз.', 'error');
//     }
//   })
//   .catch(error => {
//     showModal('Произошла ошибка сети.', 'error');
//   });
// });

// // Функция для показа модального окна
// function showModal(message, type) {
//   modalMessage.textContent = message;
//   modal.style.display = 'flex';

//   // Можно добавить класс для стилизации (например, красный/зелёный текст)
//   if (type === 'success') {
//     modalMessage.style.color = 'green';
//   } else {
//     modalMessage.style.color = 'red';
//   }
// }

});