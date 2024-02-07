const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault()

    if (nameInput.value === '' || emailInput === '') {
        msg.classList.add('error')
        msg.innerHTML = 'Please fill all'

        setTimeout(() => msg.remove(), 3000)
    } else {
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(` ${nameInput.value} : ${emailInput.value} `))

        userList.appendChild(li)

        nameInput.value = '';
        emailInput.value = '';
    }
}
// const ul = document.querySelector('.items')

// ul.remove();
// ul.lastElementChild.remove()
// ul.firstElementChild.textContent = 'Hello'
// ul.children[1].innerText = 'Brad'
// ul.lastElementChild.innerHTML = '<h1>Damn</h1>'

// const btn = document.querySelector('.btn')
// btn.style.background = 'red'
// const items = document.querySelectorAll('.item');

// const btn = document.querySelector('.btn');

// btn.addEventListener('mouseout', (e) => {
//     e.preventDefault()
//     document.querySelector('#my-form').style.background = '#ccc'
//     document.querySelector('body').classList.add('bg-dark')
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</>'
// });
// items.forEach((item) => console.log(item))
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('.container'));
// const form = document.getElementById('my-form');
// console.log(form)

// function Person (firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
    // this.getBirthYear = function() {
    //     return this.dob.getFullYear();
    // }
    // this.getFullName = function() {
    //     return `${ this.firstName } ${ this.lastName }`;
    // }
// }

// Person.prototype.getBirthYear = function() {
//     return this.dob.getFullYear();
// }
// Person.prototype.getFullName = function() {
//     return `${ this.firstName } ${ this.lastName }`;
// }

// class Person {
//     constructor(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
// }

// getBirthYear() {
//     return this.dob.getFullYear();

// }
// getFullName() {
//     return `${ this.firstName } ${ this.lastName }`;   
// }
// }

// const person1 = new Person ('John', 'Doe', '3-10-1990')
// console.log(person1)
// console.log(person1.getBirthYear())
// console.log(person1.getFullName())

// function addNums (num1, num2) {
//     console.log(num1 + num2)
// }

// addNums(2, 2)
// const x = 10;

// const color = x > 10 ? 'red' : 'blue';

// switch (color) {
//     case 'red':
//         console.log('color is red');
//     break;
//     case 'blue':
//         console.log('color is blue');
//     break;
//     default:
//         console.log('color is NOT red or blue')
//     break;
// }
// const x = 20;
// const y = 10

// if (x > 20 || y > 10) {
//     console.log('x is 10')}
// } else if (x > 10) {
//     console.log('x is greater thann 10')
// } else {
//     console.log('x is less than 10')
// };
// const todos = [
//     {
//         id: 1,
//         text: 'Take out thrash',
//         isCompleted: true 
//     },
//     {
//         id: 2,
//         text: 'Meeting with boss',
//         isCompleted: false
//     },
//     {
//         id: 3,
//         text: 'Dentist',
//         isCompleted: true
//     }
// ];

// for(let i = 0; i <= 10; i++) {
//     console.log(`show loop ${i}`);
// }

// let i = 0;
// while(i < 10) {
// console.log(`while loop ${i}`);
// i++;
// }
// for(let todo of todos) {
//     console.log(todo.id);
// }

// todos.forEach(todo => console.log(todo.text))
// todos.forEach (function(todo) {
    // console.log(todo.text)
// });

// const todoText = todos.map(todo => todo.text)
// const todoText = todos.map (function(todo) {
//     return todo.text
// });
// console.log(todoText)

// const todoCompleted = todos.filter(todo => todo.isCompleted === true).map(todo => todo.text)
// const todoCompleted = todos.filter (function(todo) {
//     return todo.isCompleted === true;
// }).map(function(todo) {
//     return todo.text;
// });
// console.log(todoCompleted)
// const todoJSON = JSON.stringify(todos)
// console.log(todoJSON)

// const s = ['Hello', 'world', 'how', 'when'] 

// // s[5] = 'cheque'

// s.push('new world')
// s.unshift('mars')
// s.pop()
// console.log(Array.isArray(s))
// console.log(s.indexOf('new world'))
// console.log(s)

// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     hobbies: ['music', 'movies', 'sports'],
//     address: {
//         street: '50 main street',
//         city: 'Boston',
//         state: 'MA'
//     }
// }

// // const { firstName, lastName, address: { city } } = person?
// person.email = 'john@doe.com',
// console.log(person);