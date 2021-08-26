window.addEventListener('load',function(){
    let titulo=document.querySelector('h2')
    let username=prompt('ingresa tu nombre')
    titulo.innerText+=' '+(username || 'inivitado').toUpperCase()
    let p=document.querySelector('#peli')
    p.style.color='#E51B3E'
    let body=document.querySelector('body')
    confirm('desea agregar fondo?') && body.classList.add('fondo')
    let main=document.querySelector('.hidden-main')
    main.style.display='block'
})