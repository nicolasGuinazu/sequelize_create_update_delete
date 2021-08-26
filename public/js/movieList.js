window.addEventListener('load',function(){
    
    let body=document.querySelector('body')
    
   let res=prompt('modo oscuro?')
    if(res=='yes'){
        body.style.backgroundColor='#7f7f7f'
    } 

    document.querySelector('h1').innerText+=' '+'copadas'
    /* let titulo=document.querySelector('h2')
    let username=prompt('ingresa tu nombre')
    titulo.innerText+=' '+(username || 'inivitado').toUpperCase()
    let p=document.querySelector('#peli')
    
    let body=document.querySelector('body')
    confirm('desea agregar fondo?') && body.classList.add('fondo')
    let main=document.querySelector('.hidden-main')
    main.style.display='block' */
})