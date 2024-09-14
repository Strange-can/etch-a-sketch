const container = document.querySelector(".container")
let square = document.createElement("div")
const button = document.querySelector("button")

let num = window.prompt('how many squares per side do you want?', 16)

function draw() {
for (num;;) {
if (num > 100) {
    num = window.prompt('number is too high, choose between 1 to 100')
}
else if (num > 0 && num <= 100)
  break
else {
  num = window.prompt('inavild input, choose a number between 1 to 100')
}
}


squaredNum = num * num
let length = Math.sqrt(250000/squaredNum)
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
      }
  })
}
}

draw()

/*button.addEventListener("click", 
() => num = window.prompt('how many squares per side do you want?', 16), draw())*/
