var person = {
    name : 'jack'
    yearOfBirth : 1990,
    job : 'secret Agent'
}

function person(pName, pYearOfBirth, pJob){
    this.name = pName;
    this.yearOfBirth = pYearOfBirth;
    this.job = pJob;

    person.prototype.calculateAge = function () {
        console.log(2019 - this.yearOfBirth);
    }

    person.prototype.updateYearOfBirth = function (birthYear) {
        
        console.log(birthYear);
    }
}

person.prototype.lastName = "Clark"

var john = new Person ('John', 1992, 'Pilot')
john.calculateAge();
john.updateYearOfBirth(1990);
john.calculateAge();

var claire = new Person('Claire', 1994, 'Doctore')
claire.calculateAge();

// console.log(john);
// console.log(claire);

// console.log(john.lastName);
// console.log(claire.lastName);