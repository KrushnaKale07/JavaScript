var myFriends = ['Pradeep','Mahesh','Akshay','Prasad','Vishwajeet','Avinash','Swapnil']

// console.log('List of friends '+ myFriends);
// console.log('Type of Array '+typeof(myFriends));

// //Fetch value using index
// console.log(myFriends[2]);
// console.log(myFriends[0]);
// console.log(myFriends[3]);

// //Update a value
// myFriends[1] = 'Ashutosh'
// console.log(myFriends);

// //Add more items
// myFriends[7] = 'Nagesh'
// console.log(myFriends);

// myFriends[10] = 'Prashant'
// console.log(myFriends);

// myFriends[myFriends.length] = 'Vaibhav'
// console.log(myFriends);

myFriends.push('Jack')
// console.log(myFriends);

console.log("....... Pop Method .........")

//Delete item
var fName1 = myFriends.pop()
console.log('Pop 1 executed [ '+ fName1+ ']');
console.log('Remaining array  '+myFriends);

var fName2 = myFriends.pop()
console.log('Pop 2 executed [ '+ fName2+ ']');
// console.log(myFriends);

var fName3 = myFriends.pop()
console.log('Pop 3 executed [ '+ fName3+ ']');
// console.log(myFriends);

var fName4 = myFriends.pop()
console.log('Pop 4 executed [ '+ fName4+ ']');
// console.log(myFriends);

// for( var i = 0; i < myFriends.length-1; i++){
//     console.log(myFriends[i]);
// }