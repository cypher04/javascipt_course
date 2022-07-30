//console.log('hello world');
//console.error('this is an error')

// types of variables

// let, var, const
//var can be overriden while const can't be


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
comment*/

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

console.log(person.hobbies[1])

