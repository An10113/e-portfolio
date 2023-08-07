let isModalOpen = false;
let contrastToggle = false;

function contact(event){
    event.preventDefault();
    const loading = document.querySelector(' .modal__overlay--loading')
    const success = document.querySelector(' .modal__overlay--success')
    loading.classList += " modal__overlay--visible"
    emailjs
        .sendForm(
        'service_23v8ruq',
        'template_h9d4xap',
        event.target,
        'Sdt9Ir8PBdxJJMT2d'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible")
            success.classList += " modal__overlay--visible"        
        }).catch(()=> {
            alert(
                "the email service is temporarily unavailable.Please contact me later"
            )
        })
    }


function toggleModal() {
    if (isModalOpen) {
      isModalOpen = false;
      return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
  }


function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme"
  }
  else {
    document.body.classList.remove("dark-theme")
  }
}

const scaleFactor = 1/20

function moveBackground(event){
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX*scaleFactor
    const y = event.clientY*scaleFactor

    for(let i=0;i<shapes.length;++i){
        const value = i % 2 !== 0;
        const boolInt = value ? -1 : 1
        shapes[i].style.transform = `translate(${x*boolInt}px,${y*boolInt}px)`
    }
}


