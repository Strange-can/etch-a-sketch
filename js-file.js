const container = document.querySelector(".container")
let square = document.createElement("div")
const button = document.querySelector("button")

function create(num) {
container.textContent = ''
if (num > 0 && num <= 100) {
  squaredNum = num * num
  let length = Math.sqrt(250000 / squaredNum)
  for (i = 1; i <= squaredNum; i++) {
    const square = document.createElement("div")
    square.classList.add("square")
    square.style.height = `${length}px`
    square.style.width = `${length}px`
    container.appendChild(square)
    square.addEventListener("mouseenter", () => {
      let color = Math.random()
      if (color <= 0.33) {
        square.style.backgroundColor = "green"
      }
      else if (color <= 0.66) {
        square.style.backgroundColor = "blue"
      }
    else {
      square.style.backgroundColor = "yellow"
      }})}}
else {
    num = window.prompt('invalid input, choose between 1 to 100')
    return create(num)
}
}
button.addEventListener("click", function () {
  num = window.prompt('how many squares per side do you want?(1 to 100)', 16)
  create(num)
})
create(16)