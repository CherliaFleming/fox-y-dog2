const foxButton = document.querySelector("#fox-button")
foxButton.addEventListener("click", () => {
  
})

const dogButton = document.querySelector("#dog-button")
dogButton.addEventListener("click", () => {
  
})

let responsePromise = fetch("https://randomfox.ca/floof/")
console.log(responsePromise);

fetch("https://random.dog/woof.json")


