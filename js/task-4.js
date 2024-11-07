'use strict'
const form = document.querySelector('.login-form');
const users = [];

class User{
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    // addUser(event) {
    //     event.preventDefault();
    //     const email = event.target[0].value; 
    //     const password = event.target[1].value; 
    //     if (email === '' || password === '' ) {
    //         alert('All form fields must be filled in');
    //         return;
    //     } else {
    //         users[users.length] = new User(email, password);
    //     }
    //     console.log(users[users.length - 1]);
    //     console.log(users);
    // }
}

function addUser(event) {
    event.preventDefault();
    
    const email = event.target[0].value; 
    const password = event.target[1].value; 

    if (email === '' || password === '' ) {
        alert('All form fields must be filled in');
        return;
    } else {
        users[users.length] = new User(email, password);
    }

    console.log(users[users.length - 1]);
    console.log(users);

    event.target.reset();
}

form.addEventListener('submit', addUser);

// form.addEventListener('submit', User.addUser);


