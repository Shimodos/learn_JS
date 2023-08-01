console.log(1 / 0); // Infinity
console.log(-1 / 0); // -Infinity
console.log("not a number" / 2); // NaN, such division is erron


const name = "Ilya";

console.log(`hello ${name}`); // hello 1


const
      agwYear = 2022,
      ageDima = agwYear - 1994
      ageAnna = agwYear - 1996


console.log(ageDima + ageAnna)

console.log('Hello ' + 'World') // Hello World

let a = 2
a +=  5

console.log(a) // 7

let b = 2

console.log(b++) // 2

console.log(true < false) // false

console.log('Привет10' > 5 ) // false
console.log(10 > '5') // true

console.log(undefined == 0 ) // false
console.log(undefined == null ) // true
console.log(null === undefined ) // false
console.log('10' === 10 ) // false

console.log(10 + 5 * 2) // 20

console.log(25- 10 - 5) // 10

let x, y

x = y = 10 + 5 * 2

console.log('2' > 1) // true

let h = 1

h = '100'

h = Boolean(h)

console.log(typeof  +h) // 2

Number()
String()
Boolean()

window.alert('Hello')


const age = 19
age >= 18 ? console.log('You are adult') : console.log('You are child')
const drink = age >= 18 ? 'wine' : 'water'

console.log(drink)


let drink2
if (age >= 18) {
  drink2 = 'wine'
} else {
  drink2 = 'water'
}

console.log(drink2)

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`)