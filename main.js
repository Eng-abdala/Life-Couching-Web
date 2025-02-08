
// All pages
const menu=document.querySelector(".menu")
const ul = document.querySelector(".ul")
const head = document.querySelector(".head")
const close = document.querySelector(".close")
close.style.display="none"
menu.addEventListener("click",()=>{
    ul.style.display="flex"
    ul.style.marginLeft="50%]"
    head.style.display="none" 
    menu.style.display="none"  
    close.style.display="flex" 
})

close.addEventListener("click",()=>{
    ul.style.display="none"
    head.style.display="inline"
    menu.style.display="flex"
    close.style.display="none"

})

// Service Page
// const person = document.querySelector(".person")
// const career = document.querySelector(".career")
// const service1 = document.querySelector(".service1")
// const service2 = document.querySelector(".service2")

// person.addEventListener("click",()=>{
//     service2.style.display="none"
// })

// career.addEventListener("click",()=>{
//     service2.style.display="flex"

//     service1.style.display="none"
// })


// // Responsive service
// const rperson = document.querySelector("#rperson")
// const rcareer = document.querySelector("#rcareer")

// rperson.addEventListener("click",()=>{
//     alert("aaa")
//     service2.style.display="none"
// })




//  footer Page
const FName= document.querySelector(".FName")
const LName= document.querySelector(".LName")
const Email= document.querySelector(".Email")
const Subject= document.querySelector(".Subject")
const Message= document.querySelector(".Message")
const button = document.querySelector(".submit")

const Fspan = document.querySelector(".Fspan")
const Lspan = document.querySelector(".Lspan")
const Espan = document.querySelector(".Espan")


button.addEventListener("click",(event)=>{
    event.preventDefault()
    Fspan.innerHTML=""
    Lspan.innerHTML=""
    Espan.innerHTML=""

    if (FName.value==="") {
        Fspan.innerHTML="Please Enter Your First Name:"
        
    }    
    else if (LName.value==="") {
        Lspan.innerHTML="Please Enter Your Last Name:"
        
    }    
    else if (Email.value==="") {
        Espan.innerHTML="Please Enter Your Email "
        
    }    
   

})

