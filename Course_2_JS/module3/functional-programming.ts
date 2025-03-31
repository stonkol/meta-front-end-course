// Introduction:
// In this lab, you will practice functional programming concepts by creating functions in JavaScript that generate styled console log messages. You will write functions, use template literals, and conditionally log messages to the console based on inputs.

// Goal:
// The goal of this lab is to develop a strong understanding of functional programming concepts in JavaScript. By building styled console message generators, learners will practice writing modular, reusable, and readable functions while exploring JavaScript's string manipulation and conditional logic capabilities.

// Objectives:
// Create and use functions in JavaScript to perform specific tasks, ensuring modular and reusable code.
// Dynamically style console messages using template literals and the %c format in console.log.
// Apply conditional logic with if-else statements to handle different scenarios within functions.

// Task 1: Build a function-based console log message generator
function consoleStyler(color, background, fontSize, txt) {
  // Declare a variable for the message
  let message = "%c" + txt;

  // Declare a variable for the style
  let style = `color: ${color};`;

  // Append background style to the style variable
  style += `background: ${background}`;
  // Append font size style to the style variable
  style += `font-size: ${fontSize}`;

  // Log the message with the applied style
  console.log(message, style);
}

// Task 2: Build another console log message generator
function celebrateStyler(reason) {
  // Declare a fontStyle variable with default styles
  let fontStyle = "color:tomato; font-size: 50px";
  // Check if the reason is "birthday"
  // Use an if-else block to log messages based on the value of reason. If reason equals "birthday", log:
  if (reason === "birthday") {
    console.log("Happy birthday!", fontStyle);
  } else if (reason === "champions") {
    console.log("Congrats on the title!", fontStyle);
  } else {
    console.log("Good for you!");
  }
}

// Task 3: Run both the consoleStyler and the celebrateStyler functions
// Call the consoleStyler function with appropriate arguments
consoleStyler("#1d5c63", "#ede6db", "40px", "Congrats!");
// Call the celebrateStyler function with an appropriate argument
celebrateStyler("birthday");

// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate(color, background, fontSize, txt, reason) {
  // Call consoleStyler with the first four arguments
  consoleStyler(color, background, fontSize, txt);
  // Call celebrateStyler with the last argument
  celebrateStyler(reason);
}

// Call styleAndCelebrate with appropriate arguments
styleAndCelebrate("#1d5c63", "#ede6db", "40px", "Congrats!", "birthday");
