let triggers = document.querySelectorAll('.accordion-trigger-mobile');
let buttonSubmenu = document.querySelectorAll('.toggle-submenu');
let menuItems = document.querySelectorAll('.menu__list .menu__item');

if(buttonSubmenu.length > 0) {
  buttonSubmenu.forEach((el) => {
    el.addEventListener('click', function() {

      let parent = el.parentNode;
      
      menuItems.forEach((item) => {
        item.classList.remove('open');
      })
      buttonSubmenu.forEach((btn) => { 
        btn.classList.remove('active');
      }) 

      if(el.classList.contains('active')) {
        el.classList.remove('active')
        parent.classList.remove('open');
      } else {
        el.classList.add('active'); 
        parent.classList.add('open');
      }

      

    })
  })
}
if(triggers) {
  triggers.forEach(el => {
    let url = el.getAttribute('href');
    if(url == "#") {
      el.setAttribute('href', "");
    }
  })
}

let certItems = document.querySelectorAll('.cert__item');
let cardListItems = document.querySelectorAll('.card-list-item');
if(certItems) {
  certItems.forEach(el => {
    el.addEventListener('click', () =>{
      certItems.forEach((item) => item.classList.remove('active'));
      el.classList.add('active');

      if(cardListItems) {
        cardListItems.forEach(element => {
          element.classList.remove('active');
          let dataId = element.getAttribute('data-id');
          if(el.id == dataId) {
            element.classList.add('active');
          }
        })
      }

      if(window.innerWidth < 993) {
        el.scrollIntoView()
      }
    })
  })
}