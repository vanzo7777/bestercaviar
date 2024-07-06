let triggers = document.querySelectorAll('.accordion-trigger-mobile');
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
      if(cardListItems) {
        cardListItems.forEach(element => {
          element.classList.remove('active');
          let dataId = element.getAttribute('data-id');
          if(el.id == dataId) {
            element.classList.add('active');
          }
        })
      }
    })
  })
}