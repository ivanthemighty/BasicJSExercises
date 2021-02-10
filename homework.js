let nameInput = document.getElementById('name');
let printUser = document.getElementById('print-user');
let printBtn = document.getElementById('button');
let showForm = document.getElementById('show-form');
let showUser = document.querySelector('li');

let users = [];

showForm.style.display = 'none'
function listUsers() {
    let user1 = new User('John Smith', 'John', 'Smith', 23, true, 'Houston', 'USA', 'Maria', false);
    // let user2 = new User('John Smith', 'John', 'Smith', 23, true, 'Houston', 'USA', 'Maria', false);
    // let user3 = new User('John Smith', 'John', 'Smith', 23, true, 'Houston', 'USA', 'Maria', false);
    // let user4 = new User('John Smith', 'John', 'Smith', 23, true, 'Houston', 'USA', 'Maria', false);
    // let user5 = new User('John Smith', 'John', 'Smith', 23, true, 'Houston', 'USA', 'Maria', false);
    stringifiedName = nameInput.value;
    // let contains = stringifiedName.toUpperCase(includes(user1.firstName.toUpperCase() || user1.lastNameto.UpperCase() || user1.fullName.toUpperCase()));
    let contains = stringifiedName.toUpperCase().includes(user1.firstName.toUpperCase() || user1.lastName.toUpperCase() || user1.fullName.toUpperCase());
    if(contains === true) {
        showForm.style.display = 'block';
        let userPrint = JSON.stringify(user1);
        console.log(userPrint);
    }

}



function showUsers() {

}

function checkArray(userName, name) {
    for(let i = 0; name.length; i++) {
        if(name[i].toLowerCase() === userName.toLowerCase()) {
            // return true;
            console.log('true');
        }else {
            console.log('false');
        }
    }
}


printBtn.addEventListener('click', listUsers);

// Models 
function User(fullName, firstName, lastName, age, isMarried, city, country, spouse, pets) {
    this.fullName = fullName;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.isMarried = isMarried;
    this.city = city;
    this.country = country;
    this.spouse = spouse;
    this.pets = pets;
}