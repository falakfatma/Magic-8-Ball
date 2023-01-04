let container = document.querySelector('.container')
container.addEventListener('click', () => {
console.log(container)
container.style.backgroundImage = "url('https://profoundjs.com/ide/bernice/magic-8-ball-app/public/8-Ball.png')"
let prediction = [
  "It is certain",
  "Outlook good",
  "Outlook not so good",
  "You may rely on it",
  "Ask again later",
  "Dont Count on it",
  "Yes",
  "No",
  "Most likely",
  "Better not tell you now",
  "Without a doubt",
  "Concentrate and ask again",
  "Reply hazy, try again",
  "My reply is no",
  "My sources say no",
  'you are not right '
]
console.log(prediction)
let getRandomWord = ''
let random = Math.floor(Math.random() * prediction.length)
getRandomWord = prediction[random]
console.log(getRandomWord)
let div = document.createElement("div")
div.innerHTML = getRandomWord
// style
div.style.padding = '17rem'
div.style.color = 'white'
div.style.fontSize = '1.5rem'
div.style.textAlign = 'center'

div.classList = 'generateRandomWord'
container.append(div)
  setTimeout(()=>{
  location. reload() 
  },3000)
})