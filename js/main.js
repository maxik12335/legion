document.addEventListener("DOMContentLoaded", () => {
  // menu open/close
  const catalogMenuItems = document.querySelectorAll('.catalog-menu-list__item')
  const catalogMenuButtons = document.querySelectorAll('.catalog-menu-list__img')
  const catalogInMenuLists = document.querySelectorAll('.catalog-in-menu-list')
  const catalog2InMenuLists = document.querySelectorAll('.catalog-2in-menu-list')
  const catalog2InBox = document.querySelectorAll('.catalog-in-menu-list-item__box')
  const catalog2img = document.querySelectorAll('.catalog-in-menu-list__img')

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

  catalog2InBox.forEach((item, i) => {
    item.addEventListener('click', () => {
      // clear class ">"
      catalog2img.forEach(itemButton => {
        itemButton.classList.contains('catalog-menu-list__img--active') ? itemButton.classList.remove('catalog-menu-list__img--active') : ''
      })

      // clear class "in ul"
      catalog2InMenuLists.forEach(itemList => {
        itemList.classList.contains('catalog-in-menu-list--active') ? itemList.classList.remove('catalog-in-menu-list--active') : ''
      })

      catalog2img[i].classList.contains('catalog-menu-list__img--active') ? '' : catalog2img[i].classList.add('catalog-menu-list__img--active')

      catalog2InMenuLists[i].classList.contains('catalog-in-menu-list--active') ? '' : catalog2InMenuLists[i].classList.add('catalog-in-menu-list--active')
    })
  })

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
  const tovarButton = document.querySelectorAll('.tovar-content__button')
  const modalCall = document.querySelector('.call-modal')
  const modalCallFormButton = document.querySelector('.call-modal__button')

  headerCallButton.addEventListener('click', () => {
    modalCall.classList.contains('call-modal--active') ?
    "" : modalCall.classList.add('call-modal--active')
  })

  tovarButton.forEach(item => {
    item.addEventListener('click', () => {
      modalCall.classList.contains('call-modal--active') ? "" : modalCall.classList.add('call-modal--active')
    })
  })

  modalCallFormButton.addEventListener('click', () => {
    modalCall.classList.contains('call-modal--active') ?
    modalCall.classList.remove('call-modal--active') : ""
  })

  // close ".call-modal"
  const modalCloseButton = document.querySelector('.call-modal__close')
  modalCloseButton.addEventListener('click', () => {
    modalCall.classList.contains('call-modal--active') ? 
    modalCall.classList.remove('call-modal--active') :
    "" 
  })

});