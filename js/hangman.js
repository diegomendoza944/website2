const wordEl = document.getElementById('word')
const wrongLettersEl = document.get.ElementById('wrong-letters')
const playAgainBtn = document.getElementById('play-again)
const popup = document.getELementById('popup-container')
const notification = document.getElementById('notification-container')
const finalMessage = document.getElementById('final-message')
const figureParts = document.querySelectorAll('.figure-part')

const word = ['application', 'programming', 'interface', 'wizard', 'dragon', 'money']

let selectedIndex = Math.floor(word.length * Math.random())

let selectedWord = word[selectedIndex]

console.log(selector.word)