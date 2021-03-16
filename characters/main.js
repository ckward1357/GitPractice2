import {people} from '../data/people.js'

const mainElement = document.querySelector('#main')

const mainHeader = document.createElement('header')

document.body.insertBefore(mainHeader, mainElement)

// Male Character Button
const maleButton = document.createElement('button')
maleButton.textContent = 'Male Characters'
mainHeader.appendChild(maleButton)
maleButton.addEventListener('click', () => populateDOM(maleCharacters))
// Male Character Button




// Female Character Button
const femaleButton = document.createElement('button')
femaleButton.textContent = 'Female Characters'
mainHeader.appendChild(femaleButton)
femaleButton.addEventListener('click', () => populateDOM(femaleCharacters))
// Female Character Button

// Other Characters Button
const othersButton = document.createElement('button')
othersButton.textContent = 'Other Characters'
mainHeader.appendChild(othersButton)
othersButton.addEventListener('click', () => populateDOM(otherCharacters))
// Other Characters Button



const maleCharacters = people.filter(person => person.gender === 'male')
const femaleCharacters = people.filter(person => person.gender === 'female')
const otherCharacters = people.filter(person =>  {
    if (person.gender === 'n/a' || 
        person.gender === 'hermaphrodite' ||
        person.gender === 'none') {
        return person
    }
})

function populateDOM(characters){
    removeChildren (mainElement)
characters.forEach((person) =>{
    const charFigure = document.createElement('figure')
    const charImg = document.createElement('img')
    let charNum = getLastNumber(person.url)
    charImg.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`
    const charCaption = document.createElement('figcaption')
    charCaption.textContent = person.name

    charFigure.appendChild(charImg)
    charFigure.appendChild(charCaption)

    mainElement.appendChild(charFigure)
}) 
}


function getLastNumber (url) {
    let end = url.lastIndexOf (`/`)
    let start = end - 2
    if (url.charAt(start) === "/"){
        start++
    }
    return url.slice(start, end)

}

function removeChildren(container) {
    while (container.firstChild){
        container.removeChild(container.firstChild)
    }
}


// while (element.firstChild) {
//     element.removeChild(element.firstChild);
//   }