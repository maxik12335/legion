document.addEventListener("DOMContentLoaded", () => {
  const catalogMenuButtons = document.querySelectorAll('.catalog-menu-list__img')
  const catalogInMenuLists = document.querySelectorAll('.catalog-in-menu-list')

  catalogMenuButtons.forEach((item, i) => {
    item.addEventListener('click', () => {
      // clear class ">"
      catalogMenuButtons.forEach(item => {
        item.classList.contains('catalog-menu-list__img--active') ? item.classList.remove('catalog-menu-list__img--active') : ''
      })

      // clear class "in ul"
      catalogInMenuLists.forEach(item => {
        item.classList.contains('catalog-in-menu-list--active') ? item.classList.remove('catalog-in-menu-list--active') : ''
      })

      item.classList.contains('catalog-menu-list__img--active') ? '' : item.classList.add('catalog-menu-list__img--active')

      catalogInMenuLists[i].classList.contains('catalog-in-menu-list--active') ? '' : catalogInMenuLists[i].classList.add('catalog-in-menu-list--active')
    })
  })
});