
let btnMail = document.getElementById('btnMail')
let submit = document.getElementById('submit')

btnMail.addEventListener('click', () => {
    let divMail = document.getElementById('divMail');
    btnMail.style.display = 'none'
    divMail.style.display = 'block'
    // contacto.innerHTML = 'Formulario enviado con exito. \nYo te escribo mas tarde ;]'
})

submit.addEventListener('click',()=>{
    console.log('asd');
    // contacto.innerHTML = 'Formulario enviado con exito. \nYo te escribo mas tarde ;]'
})

// for the record,  No me dedique mucho al manejo del DOM
