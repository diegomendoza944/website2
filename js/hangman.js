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

const correctLetters = []
const wrongLetter = []

// Show hidden word
function displayWord() {
    wordEl.innerHTML = `
    ${selectedWord
        .split('')
        .map(letter => `
        <span class="Letter">
        ${correctLetters.includes(letter) ?
            letter : ''}
        </span>
        ` ).join('')
    }

    `
    const innerWord = wordEl.innerText..replace(/\n/g, '')

    if (innerWord == selectedWord) {
        finalMessage.innerText = 'Congratulations! You won!'
        popup.style.display = 'flex'
    }
}

// keydown letter press
window.addEventListener('keydown', e => {
    console.log(e.keyCode)
})
displayWord()