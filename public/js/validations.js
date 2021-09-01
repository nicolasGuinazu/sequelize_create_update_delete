let title=document.querySelector("#title")
let rating=document.querySelector("#rating")
let award=document.querySelector("#awards")
let length=document.querySelector("#length")
let form=document.querySelector('form')
title.focus()

title.addEventListener('blur',()=>{
    if(title.value.trim() == ''){
        title.classList.add('empty')
    }else{
        title.classList.remove('empty')
    }
})

rating.addEventListener('blur',()=>{
    rating.classList.add('empty')
})

award.addEventListener('blur',()=>{
    award.classList.add('empty')
})

length.addEventListener('blur',()=>{
    awalengthrd.classList.add('empty')
})


form.addEventListener('submit',(event)=>{
        if(title.value.trim() == ''){
            alert('must ad a title!')
        }
        event.preventDefault()
  
})

