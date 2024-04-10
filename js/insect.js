const screens = document.querySelectorAll('.screen')

const choose_insect_btns = document.querySelectorAll('.choose-insect-btn')

const game_container = document.getElementById('game-container')

const start_btn = document. getElementById('start-btn')

const timeEl = document.getElementById('time')
const scoreEl = document,getElementById('score')
const message = document,getElementById('message')
let seconds = 0
let score = 0
let selected_insect = {}

start_btn.addEventListener('click', () => {
    screen[0].classList.add
})

choose_insect_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img')
        const alt = img.getAttribute('alt')
        const src = img.getAttribute('src')
        screen[1].classList.add('up')
        selected_insect = {src, alt}
        setTimeout(createInsect, 1000)
        startGame()
    })
})


function createInsect() {
    const insect = document.createElement('div')
    insect.classList.add('insect')
    const { x, y } = getRandomLocation()
    insect.style.top = `${y}px`
    insect.style.left = `${x}px`
    insect.innerHTML = `<img src="${selected_insect.src}" alt="${selected_insect.alt}" style = "transform: rotate(${Math.random() * 360}deg)" />`

    insect.addEventListener('click', catchInsect)

    game_container.appendChild(insect)
}

function catchInsect() {
    increaseScore()
    this.classList.add('caught')
}

function increaseScore() {
    score++
    if (score > 19) {
        message.classList.add('visible')
    }
    scoreEl.innerHTML = `Score: ${score}`
}

    {
        const width = window.innerWidth
        const height = window.innerHeight
        const x = Math.random() * (width - 200) + 100
        const y = Math.random() * ()
    }
