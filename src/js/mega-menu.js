const btnMenu = document.querySelectorAll('.js-btn-menu');
const menuSite = document.querySelectorAll('.js-menu');

btnMenu.forEach((btn, index) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();

    menuSite.forEach(itemMenu => {
      itemMenu.classList.remove('active');

      itemMenu.addEventListener('mouseleave', () => {
        itemMenu.classList.remove('active');

        btnMenu.forEach(itemBtn => {
          itemBtn.classList.remove('active');
        })
      })
    })

    btnMenu.forEach(itemBtn => {
      itemBtn.classList.remove('active');
    })

    btn.classList.add('active');
    menuSite[index].classList.add('active');
  })
})
