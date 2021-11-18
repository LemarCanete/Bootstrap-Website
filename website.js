
const imgDiv = document.querySelectorAll(".image-div");
const tableGrid = document.querySelector(".table-grid");
const buttonjs = document.querySelector(".btn_js");
const buttonall = document.querySelector(".btn_all");


buttonjs.addEventListener("click", ()=>{
    for(let i = 0; i <= imgDiv.length; i++){
        imgDiv[i].id !== "filter" && (imgDiv[i].style.display = "none")
   }
})
buttonall.addEventListener("click", ()=>{
    for(let j = 0; j <= imgDiv.length; j++){
        imgDiv[j].className === "image-div" && (imgDiv[j].style.display = "block")
   }
})
