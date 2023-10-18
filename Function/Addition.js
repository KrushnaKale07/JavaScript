// function sum(){
//     var num1 = 10;
//     var num2 = 20;
//     var sum1 = num1 + num2;
//     console.log(sum1);
// }

// sum()

function sum(){
    var num1 = 10;
    var num2 = 20;
    var sum1 = num1 + num2;

    return sum1;
    console.log('In a print stmt');
}

var totalSum = 100 + sum()

console.log(totalSum);