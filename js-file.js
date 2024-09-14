const container = document.querySelector(".container")
let square = document.createElement("div")
square.classList.add("square")

let num = 16
squaredNum = num * num
for (i = 1; i <= squaredNum; i++) {
  const square = document.createElement("div")
  square.classList.add("square")
  container.appendChild(square)
}