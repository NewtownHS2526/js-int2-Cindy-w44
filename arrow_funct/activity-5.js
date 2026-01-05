/*
 * ACTIVITY 5: Complex Arrow Function Patterns
 * 
 * Problem 1: Arrow Functions with Default Parameters
 * Create arrow functions with default parameter values
 */

// Your task:
// 1. Create an arrow function 'greet' with default name parameter ("Guest")
// 2. Create an arrow function 'calculatePrice' with default tax (0.1) and discount (0) parameters
// 3. Create an arrow function 'formatDate' with default format parameter ("YYYY-MM-DD")
// 4. Test each function with and without parameters

const greet = (name = Guest) => {return "Hello " + name + "!"; };
const calculateTax = (tax = 0.1, discount = 0) => {return "Tax: " + tax * 2, "Discount: " + discount;};
const formatDate = (format = "YYYY-MM-DD") => {return "Date: " + format;}; 

// ============================================================================
// Problem 2: Arrow Functions with Rest Parameters
// Use arrow functions with rest parameters to handle variable arguments
// ============================================================================

// Your task:
// 1. Create an arrow function 'sumAll' that takes any number of arguments and returns their sum
//    Example: sumAll(1, 2, 3, 4, 5) should return 15

const sumAll = (...args) => args.reduce((acc, curr) => acc + curr, 0);

// 2. Create an arrow function 'findMax' that finds the maximum value from any number of arguments

const findMax = (acc, curr) => {
    if (acc > curr) {
        curr = acc;
    } 
    return curr;
};

// 3. Create an arrow function 'combineStrings' that combines any number of strings with a separator
//    Example: combineStrings("-", "a", "b", "c") should return "a-b-c"

const combineStrings = ((a, b, c) => a + "-" + b + "-" + c);

// 4. Challenge: Create a function 'createLogger' that returns an arrow function accepting 
//    any number of arguments and logs them with a timestamp prefix



// ============================================================================
// Problem 3: Currying with Arrow Functions
// Implement function currying using arrow functions
// ============================================================================

// Your task:
// 1. Create a curried arrow function 'add' where add(5)(10) returns 15
// 2. Create a curried arrow function 'multiply' where multiply(2)(3)(4) returns 24
// 3. Challenge: Create a generic 'curry' function that takes any function and curries it
//    Example: const curriedAdd = curry((a, b, c) => a + b + c);
//             curriedAdd(1)(2)(3) should return 6

const curriedAdd = curry((a, b, c) => a + b + c);
const curriedMultiply = curry((x, y, z) => x * y * z);

// ============================================================================
// Problem 4: Arrow Functions with Closures
// Use arrow functions to create closures that maintain state
// ============================================================================

// Your task:
// 1. Create a function 'createCounter' that returns an object with arrow function methods:
//    - increment() - increases counter by 1
//    - decrement() - decreases counter by 1
//    - getValue() - returns current counter value
//    - reset() - resets counter to 0

const createCounter = {
    

}

// 2. Create a function 'createBankAccount' with arrow function methods:
//    - deposit(amount) - adds to balance
//    - withdraw(amount) - subtracts from balance (can't go below 0)
//    - getBalance() - returns current balance
//    The balance should be private and only accessible through these methods



// 3. Challenge: Create a 'createGameScore' that tracks multiple players' scores using closures
//    Methods: addScore(player, points), getScore(player), getLeader()

