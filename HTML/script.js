let arr=document.querySelector(".arr")
let hide=document.querySelectorAll(".hide");
arr.addEventListener("click",()=>{
    for(let element of hide){
        element.classList.toggle("visibility");
    }



});