//console.log('hello world');
//console.error('this is an error')

// types of variables

// let, var, const
//var can be overriden while const can't be


/* Program Tutorial start
let z = 5
var v = 'Let it rain'
v = 'else not rain'
const a = 'it wll def rain'


console.log(z, v, a)


// String, numbers, boolean

//strings

const name = 'john'
const age = 30

//concatenation

hello = 'hi my name is' + name + 'and i am' + age

//or

hi = `hi my name is ${name} and i am ${age} years old`
console.log(hello, hi)

//working with strings methods

const you = 'hello world'

//using split method: it turns a sting into array

const youve = 'technology, informtion, computer, alexis';

console.log(youve.split(', '));

//Arrays

/* this is 
for muti line 
comment

fruits = ['apple', 'graapes', 'mangoes']

free = fruits[0];

fruits.push('cherry'); // this is to add a value to the last part of an array

fruits.unshift('pear'); //this is to add a value to the begining of an arr

console.log(fruits, free)

// Object literals (lke dictionary in python)

const person = {
    firstName: 'john',
    lastName: 'Doe',
    age: 30,
    hobbies: ['Music', 'Movies', 'playing'],
    address: {
        Street: 'Atlanta',
        City: 'Chicago',
        State: 'Georgia',
    }

}
*/

const todos = [
    {
        id: 1,
        name: 'Seyi',
        Last: 'Abiodun',
        complete: true,

    },

    {
        id: 2,
        name: 'Ade',
        Last: 'Mola',
        complete: false,
    }
];

/*
const todoJSON = JSON.stringify(todos); // This is to fomat the todo array into JSON format
console.log(todoJSON);

console.log(todos[0].name); //Each array in the array will be treated individually
console.log(person.hobbies[1]);



/* FOR LOOP

for (i = 0; i < 10; i++)
console.log(`Format ${i}`);
*/

// Looping through an array using FOR loop

/*for (let todo of todos) {
    console.log(todo.name);
};


//HGHER ORDER ARRAY METHOD: forEch, map, filter

todos.forEach(function(todo){
    console.log(todo.Last);
});

const todoText = todos.map(function(todo){
    return todo.Last;
});
console.log(todoText);
*/
// using filter + map. this progam will show only the last name tht its complete is true

const todoComplete = todos.filter(function(todo){
    return todo.complete == true;
}).map(function(todo){
    return todo.Last;
})
console.log(todoComplete);

/*let total = 0, count = 1;
while (count <= 10) {
  total += count; //this can also be written as total = total + count
  count += 1;
}
console.log(total);
*/
/* WHILE LOOP

let i = 0;

while(i < 10){
    console.log(`While Loop ${i} `);
    i++;
}
*/

// Note A JavaScript method is a property containing a function definition.

