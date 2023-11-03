var CountdownElement = document.getElementById("countdown")
var bgImage = document.getElementById("bg-image")

var initialCountdownVal = CountdownElement.innerHTML;

var interval = setInterval(function () {

    initialCountdownVal = initialCountdownVal  > 0 ? initialCountdownVal -1 : 0;
    CountdownElement.innerHTML= initialCountdownVal;
    CountdownElement.style.fontSize = initialCountdownVal * 100 + "px"

    bgImage.style.width = initialCountdownVal * 10 + "%" 
    
    console.log(initialCountdownVal * 100 + "px" )

    // var initialCountdownVal: String
    if (initialCountdownVal <= 0 ) {
    
        clearInterval(interval);
    }
    
},1000)