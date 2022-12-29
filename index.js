
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

let isModalopen = false


function toggleModal(){
    console.log('ok')
    if(isModalopen){
        isModalopen = false
        return document.body.classList.remove("modal--open")
    }
    isModalopen = true
    document.body.classList += "modal--open"
}

