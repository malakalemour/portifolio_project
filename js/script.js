const menu =document.getElementById("mune");
const action =document.getElementById("action");


menu.addEventListener("click",()=>{
    hundelMune()
})
function hundelMune(){
menu.classList.toggle("is-active");
action.classList.toggle("is-active");
}

