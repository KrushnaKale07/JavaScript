var mainHeading = document.getElementById('main-heading');
var btnDecreaseFont = document.getElementById('btn-decrease');
var btnIncreaseFont = document.getElementById('btn-increase');

var initialFontSize = window.getComputedStyle(mainHeading).fontSize;
var initialFontSize = parseInt(initialFontSize.substr(0,(initialFontSize.Length - 2)))

// initialFontSize = window.getComputedStyle(mainHeading).fontSize
// console.log(initialFontSize );

btnIncreaseFont.onclick = function () {
    initialFontSize += 10 
    mainHeading.style.fontSize = initialFontSize + "px";
}

btnDecreaseFont.addEventListener('click', function () {
    initialFontSize -= 10 
    mainHeading.style.fontSize = initialFontSize + "px";  
})

// mainHeading.style.fontSize = parseInt(initialFontSize) + 16 + 'px';