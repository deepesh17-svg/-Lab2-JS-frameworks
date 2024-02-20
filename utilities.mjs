// Function to print a welcome message
function printWelcomeMessage(firstName, lastName) {
    console.log(`Welcome ${firstName} ${lastName} to G@I College`);
}

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Function to calculate factorial
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Advanced function - Example: find the maximum of two numbers
function findMax(a, b) {
    return Math.max(a, b);
}

// Exporting functions
export {
    printWelcomeMessage,
    celsiusToFahrenheit,
    factorial,
    findMax
};
