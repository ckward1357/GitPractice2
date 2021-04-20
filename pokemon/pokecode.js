import { removeChildren } from '../utils/index.js'

const pokeGrid = document.querySelector('.pokeGrid')
const loadButton = document.querySelector('.loadPokemon')
const fetchButton = document.querySelector('#fetchSelectedPokemon')
const newButton = document.querySelector('#newPokemon')


class Pokemon {
    constructor(name, height, weight, abilities, moves, types) {
        this.id = 900
        this.name = name
        this.height = height
        this.weight = weight
        this.abilities = abilities
        this.moves = moves
        this.types = types
    }
}

newButton.addEventListener('click', () => {
    let pokeName = prompt('What is the name of your new Pokemon?')
    let pokeHeight = prompt('What is the height of your Pokemon?')
    let pokeWeight = prompt('Pokemon weight?')
    let newPokemon = new Pokemon(
      pokeName,
      pokeHeight,
      pokeWeight,
      ['eat', 'sleep'],
      ['study', 'game'],
      [
        {
          type: {
            name: 'normal',
          },
        },
      ],
    )
    populatePokeCard(newPokemon)
  })
  

loadButton.addEventListener('click', () => loadPage())

fetchButton.addEventListener('click', () => {
    removeChildren(pokeGrid)
let pokeNameOrId = prompt("Enter Pokemon ID or Name").toLowerCase()
console.log(pokeNameOrId)
    getAPIData(`https://pokeapi.co/api/v2/pokemon/${pokeNameOrId}`).then(
        (data) => populatePokeCard(data)
        
    )
})


async function getAPIData(url) {
    try {
        const response = await fetch(url) // try getting data from the API at the url
        const data = await response.json() // convert the response into JSON
        return data // return the data from the fuction to whoever called it
    } catch (error) {
        // must have been an error
        console.log(error)
    }
}

function loadPage() {
    removeChildren(pokeGrid)
    getAPIData(`https://pokeapi.co/api/v2/pokemon?limit=151`).then(
        async (data) => {
            for (const singlePokemon of data.results) {
                await getAPIData(singlePokemon.url).then(
                    (pokeData) => populatePokeCard(pokeData)
                )
            }
        }
    )
}

function populatePokeCard(singlePokemon) {
   // console.log(singlePokemon)
    let pokeScene = document.createElement('div')
    pokeScene.className = 'scene'
    let pokeCard = document.createElement('div')
    pokeCard.className = 'card'
    pokeCard.addEventListener('click', () => {
        pokeCard.classList.toggle('is-flipped')
    })
    pokeCard.appendChild(populateCardFront(singlePokemon))
    pokeCard.appendChild(populateCardBack(singlePokemon))
    pokeScene.appendChild(pokeCard)
    pokeGrid.appendChild(pokeScene)
}

function populateCardFront(pokemon) {
    console.log(pokemon)
    let pokeFront = document.createElement('div')
    pokeFront.className = 'card__face card__face--front'
    let frontLabel = document.createElement('p')
    frontLabel.textContent = pokemon.name
    let frontImage = document.createElement('img')
    frontImage.src = getImageFileName(pokemon)

    let pokeType = pokemon.types[0].type.name
    pokeFront.classList.add(pokeType)

//might deletle later ^

    pokeFront.appendChild(frontImage)
    pokeFront.appendChild(frontLabel)
    return pokeFront
}

function populateCardBack(pokemon) {
    let pokeBack = document.createElement('div')
    pokeBack.className = 'card__face card__face--back'

    let backLabel = document.createElement('p')
    backLabel.textContent = `Moves: ${pokemon.moves.length}`

    let backType = document.createElement('p')
    backType.textContent = `Types: ${pokemon.types.length}`

    let backId  = document.createElement('p')
    backId.textContent = `ID: ${pokemon.id}`
    
    pokeBack.appendChild(backId)    
    pokeBack.appendChild(backLabel)
    pokeBack.appendChild(backType)
    return pokeBack
}

function getImageFileName(pokemon) {
    let pokeId
    if (pokemon.id < 10) pokeId = `00${pokemon.id}`
    if (pokemon.id > 9 && pokemon.id < 100) pokeId = `0${pokemon.id}`
    if (pokemon.id > 99 && pokemon.id < 810) pokeId = pokemon.id
    if (pokemon.id === 900) {
        return `images/pokeball.png`}
    return `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${pokeId}.png`
}