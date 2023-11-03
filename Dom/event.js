var btn = document.getElementById("btn-click");
var mainDiv = document.querySelector("header div");

console.log(mainDiv);

function onBtnClick() {
    mainDiv.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")"
    // alert("Button Clicked");
}

// btn.onclick = onBtnClick;

btn.addEventListener('click',onBtnClick)