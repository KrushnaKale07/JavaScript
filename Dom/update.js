console.log('js Loaded');

var CountdownElement = document.getElementById('countdown');
var bgImageElement = document.getElementById('bg-image')

// console.log(bgImageElement.src);
// console.log(CountdownElement.innerHTML);

var initialCountdownVal = CountdownElement.innerHTML;

setInterval(function () {

    initialCountdownVal = initialCountdownVal > 0 ? initialCountdownVal - 1 : 0;
 
    CountdownElement.innerHTML=initialCountdownVal ;

    var backImgPath =initialCountdownVal %2 === 0 ? '/Dom/image/Krushna Kale Selfie before test.jpeg' : '/Dom/image/img1.jpg'

    bgImageElement.src = backImgPath;

    bgImageElement.className = 'BackImage';

    console.log('bgImageElement');
},1000);
 