var myFriends = ['Pradeep','Mahesh','Akshay','Prasad','Vishwajeet','Avinash','Swapnil']
console.log(myFriends);
console.log(typeof(myFriends));

//Fetch value using index
console.log(myFriends[2]);
console.log(myFriends[0]);
console.log(myFriends[3]);

//Update a value
myFriends[1] = 'Ashutosh'
console.log(myFriends);

//Add more items
myFriends[7] = 'Nagesh'
console.log(myFriends);

myFriends[10] = 'Prashant'
console.log(myFriends);

myFriends[myFriends.length] = 'Vaibhav'
console.log(myFriends);

myFriends.push('Jack')
console.log(myFriends);

//Delete item
var fName = myFriends.pop()
console.log(fName);
console.log(myFriends);
var fName = myFriends.pop()
console.log(fName);
console.log(myFriends);
var fName = myFriends.pop()
console.log(fName);
console.log(myFriends);
var fName = myFriends.pop()
console.log(fName);
console.log(myFriends);