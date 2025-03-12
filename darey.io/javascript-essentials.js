// Objective: The goal of this project is to understand and implement essential JavaScript concepts, focusing on variables, functions, loops, and event handling. This exercise will help you build a strong foundation in JavaScript programming.

// Variables
let message = "Hello, World!";
console.log(message);

// Functions
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alice"));

// Loops
for (let i = 0; i < 5; i++) {
  console.log(`Iteration ${i}`);
}

// Event Handling
document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
  const button = document.createElement("button");
  button.textContent = "Click Me";
  document.body.appendChild(button);

  button.addEventListener("click", () => {
    alert("Button was clicked!");
  });
});
