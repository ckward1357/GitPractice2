/* Variables - containers that store values */

var name // a declared variable, but not initialized and it's in the global scope (BAD)

let foo // a declared variable that can be changed

const bar // a declared variable that cannot be changed - short for 'constant'

const ANSWER = 42 // const is declared and initialized with the value 42 

// String

let string1 = 'Hello World!' // read '=' as 'is assigned the value of...'

let string2 = "Hello Utah!"

let string3 = new String('Hello World!')

// Number

let myNum = 2083972347

let myNum2 = 75.43

'1' == 1 // this statement is true because of type coercion and loose equality checking
'1' === 1 // false because this is strict equality checking

// Boolean

let myBool = true

// Array

let myArray = [] // this is an empty array
//              0     1      2        3      4
let myArray2 = [42, 'Bob', myBool, ANSWER, true]

let secondElement = myArray2[1]

myArray2.push('Thor') // added an element to the end of myArray2

myArray2.unshift('Hello World!')

let mylongString = '32408usfjalieriweur938u425ksdjfowiur84uwrlwshdjfo8wuroiwejr4e' // just an array of characters

mylongString.length

// Object

let minObject = {}

const myCar = {
    make: "Chevrolet",
    color: "Red",
    year: "1965",
    vin: "2390487sijweoru38lirehs"
  };
  
  myCar.numDoors = 2;
  
  const anotherObject = {
    wordz: ["foo", "bar", "baz"],
    car: {
      make: "McLaren",
      model: "675LT"
    },
    awesomeness: true
  };
  
  // Functions
  
  function myFunction() {
    return "My greeting to you...";
  }
  
  function sumTwoThings(one, two) {
    // watch out for data type issues here!
    return one + two; // if numbers, will add them.  If strings, will concatenate.
  }
  
  // Arrow Functions

  // a higher order function is a function that accepts another function as a parameter.
// filter, map and reduce are the most popular, but forEach, every, find, and some are also HOFs

const theFunction = () => { //multiple lines use curly braces and 'return' keyword
  return 'I am awesome'
}

// Filter method example.  Filter returns an array of all elements that 'pass the test'
const pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels"
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire"
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire"
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels"
  }
];

const rebels = pilots.filter((pilot) => pilot.faction === "Rebels");
const empire = pilots.filter((pilot) => {
  return pilot.faction === "Empire";
});

// Array helper method 'map'

let filmURLs = [
  "https://swapi.co/api/films/",
  "https://swapi.co/api/films/5/",
  "https://swapi.co/api/films/4/this one is longer... even longer",
  "https://swapi.co/api/films/6/",
  "https: ",
  "https://swapi.co/api/films/1/"
];

const filmLengths = filmURLs.map((filmURL) => filmURL.length);

const filmPlusMore = filmURLs.map((filmURL) => {
  let filmObj = {
    index: filmURL,
    foo: 'Bar'
  }
  return filmObj
})


// Reduce example

const swpilots = [
        {
          id: 10,
          name: "Poe Dameron",
          years: 14
        },
        {
          id: 2,
          name: "Temmin 'Snap' Wexley",
          years: 30
        },
        {
          id: 41,
          name: "Tallissan Lintra",
          years: 16
        },
        {
          id: 99,
          name: "Ello Asty",
          years: 22
        }
      ];
      
      const totalYears = swpilots.reduce((acc, pilot) => acc + pilot.years, 0);
      
      const mostExpPilot = swpilots.reduce((oldest, pilot) => {
        return (oldest.years || 0) > pilot.years ? oldest : pilot;
      }, {});
      
      // Now we combine map, reduce, and filter
      
      var personnel = [
        {
          id: 5,
          name: "Luke Skywalker",
          pilotingScore: 98,
          shootingScore: 56,
          isForceUser: true
        },
        {
          id: 82,
          name: "Sabine Wren",
          pilotingScore: 73,
          shootingScore: 99,
          isForceUser: false
        },
        {
          id: 22,
          name: "Zeb Orellios",
          pilotingScore: 20,
          shootingScore: 59,
          isForceUser: false
        },
        {
          id: 15,
          name: "Ezra Bridger",
          pilotingScore: 43,
          shootingScore: 67,
          isForceUser: true
        },
        {
          id: 11,
          name: "Caleb Dume",
          pilotingScore: 71,
          shootingScore: 85,
          isForceUser: true
        }
      ];
      
      let jediPersonnel = personnel.filter((person) => person.isForceUser);
      
      let jediScores = jediPersonnel.map(
        (jedi) => jedi.pilotingScore + jedi.shootingScore
      );
      
      let totalJediScore = jediScores.reduce((acc, score) => acc + score, 0);
      
      const totalJediScoreChained = personnel
        .filter((person) => person.isForceUser)
        .map((jedi) => jedi.pilotingScore + jedi.shootingScore)
        .reduce((acc, score) => acc + score, 0);
      
      // Ternary operator syntax: condition ? exprIfTrue : exprIfFalse
      
      const totalJediScoreReduce = personnel.reduce(
        (acc, person) =>
          person.isForceUser
            ? acc + person.pilotingScore + person.shootingScore
            : acc,
        0
      );


// broken code for dialog box html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css">
<div class="modal">
<div class="modal-background"></div>
<div class="modal-content">
    <h1 class ="box">Sorry! That Ship is Currently Under Construction.</h1>
</div>
<button class="modal-close is-large" aria-label="close"></button>
</div>

//Broken code for dialog box javascript

const dialog = document.querySelector('.modal')
const closeButton = document.querySelector('.modal-close')
const modalBackground = document.querySelector('.modal-background')

closeButton.addEventListener('click', () => {
    dialog.classList.toggle("is-active")
})

modalBackground.addEventListener('click', () => {
    dialog.classList.toggle("is-active")
})

dialog.classList.toggle("is-active")