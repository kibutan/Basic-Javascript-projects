const colorBtn =document.querySelector(".colorBtn");
const bodyBcg = document.querySelector("body");

const colors = ["yellow","red","green","#3d5998"]

colorBtn.addEventListener("click",changeColor);

function changeColor(){
    // bodyBcg.style.backgroundColor=colors[2]
    let random = Math.floor(Math.random() * colors.length) 
    // console.log("cc");
    bodyBcg.style.backgroundColor=colors[random]

}
