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
  var message = "%c" + txt;
  var style = `color: ${color};`;
  style += `background: ${background};`;
  style += `font-size: ${fontSize};`;
  console.log(message, style);
}

function celebrateStyler(reason) {
  var fontStyle = "color: tomato; font-size: 50px";
  if (reason == "birthday") {
    console.log(`%cHappy birthday`, fontStyle);
  } else if (reason == "champions") {
    console.log(`%cCongrats on the title!`, fontStyle);
  } else {
    console.log("no message and style is provided");
  }
}

function styleAndCelebrate(color, background, fontSize, txt, reason) {
  consoleStyler(color, background, fontSize, txt);
  celebrateStyler(reason);
}

// Call the functions individually
consoleStyler("#1d5c63", "#ede6db", "40px", "Congrats!");
celebrateStyler("birthday");

// Call the combined function
styleAndCelebrate("ef7c8e", "fae8e0", "30px", "You made it!", "champions");
