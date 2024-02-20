// Importing the utilities module
import * as utils from './utilities.mjs';

// Call/invoke the functions from utilities module
// First Function
utils.printWelcomeMessage("Sukhpreet", "Singh");

// Second Function
console.log("20 Celsius is equal to", utils.celsiusToFahrenheit(20), "Fahrenheit");

// Third Function
console.log("Factorial of 5 is", utils.factorial(5));

// Fourth Function (Advanced)
console.log("Maximum of 5 and 8 is", utils.findMax(5, 8));
