/*Variables - containers that store values */  

var name; //a declared variable, but not initialized (has no value) and its in the global scope (if anyone declares a value with the same name it undermines this value) 
let foo; // decalred variable that can be changed
const bar; // declared variable that cannot be changed. short of for "constant"
const ANSWER = 42; // all caps indicates a constant. more of an etiquitte thing. const is declared and initialized with the value of 42
//semicolons should be added to the end of each command but the javascript reader usually adds them if you don't


/*Fundamental Data Types*/

// String

let string1 = 'Hello World!' 

let string2 = 'Hello Utah!'

let string3 = new String ('Hello World!')

        //in javascript the = sign is known as the assignment operator. It reads as "is assigned the value of"


// Numbers
let myNum = 8675309

let myNum2 = 75.43

'1' == 1 //toExponential. this statement is true because of type coercion and the loose equality check
'1'=== 1 // false because this is strict equality checking

// Boolean
let myBool = true


// Array

let myArray = [] // this is an empty array
//               0   1     2       3      4     javascript starts counting at zero
let myArray2 = [42,'bob',myBool, ANSWER, true] //these are some valid items you can put in an array

let secondElement = myArray2[1]

myArray2.push("Caeden") //added element to the end of the array

myArray2.unshift("Hello World") // added element to the beginning of the array

let myLongString = "as;dlfkjasd;fkjas;ldfja;sds;kl" //just an array of characters

myLongString.length //this counts the number of characters in a string

//object


let minObject = {}

const myCar = {
        make: "Chevorlet",
        color: "Red",
        Year: "1965",
        vin: "123123123123123"
}
//Functions
function sumTwoThings(one, two){
return (one + two)
}

//Arrow Functions
 //a higher order functions is a function that accepts another function as a parameter.
 //filter,map and reduce are the  most poplular, but forEach, every, find, and some are also HOFs
 const theFunction = () => { // multiple lines use curly braces and. . .
         return 'I am awesome'
 }