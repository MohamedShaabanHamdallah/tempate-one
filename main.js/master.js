let maincolor= localStorage.getItem("color-option")

document.querySelector(".toggle .fa-gear").onclick = function () {
    this.classList.toggle("fa-spin");
    document.querySelector(".settings-box").classList.toggle("opened");
}

const colorlist =document.querySelectorAll(".colors-list li");
colorlist.forEach(li => {
    li.addEventListener("click", (e)=> {
        document.documentElement.style.setProperty('--main-color' , e.target.dataset.color);
        localStorage.setItem(`color-option`,e.target.dataset.color);
        document.documentElement.style.setProperty(`--main-color`, localStorage.getItem("color-option"));
    });
    e.target..querySelector(".active").forEach(element=>{
        element.classList.remove(".active")
    })
});


// let myLanding = document.querySelector(".landing");
// let imgsArray = [ "R (3).jfif", "OIP.jfif","5lTj5XW.webp", "83-838362_web-developer.jpg"];
// setInterval(()=>{
//     let randomNums = Math.floor(Math.random()*imgsArray.length);
//     myLanding.style.backgroundImage =`url("../imgs/`+imgsArray[randomNums] +`")`
// },3000);

