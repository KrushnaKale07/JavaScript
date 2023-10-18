// var myCars = {
//     "thar" : "350 kmph",
//     "nexon" : "320 kmph",
//     "creta" : '400 kmph',
//     "punch" : '430 kmph'
// }

// console.log(myCars);
// console.log(typeof(myCars));

var thar = {
    name :'Thar',
   manufacturer : {
        name : "Mahindra",
        location :"Pune",
    },
    topSpeed : 350,
    color : 'YelloW',
    spoiler : false,
    applyBrakers : function() {
        setTimeout(function(){
            console.log('Car Stopped');
        }, 5000);        
    }
}

console.log(thar.name);
console.log(thar.topSpeed);
console.log(thar.manufacturer);
console.log(thar.manufacturer.name);
console.log(thar.applyBrakers());
console.log(thar.applyBrakers);