/*
 * ACTIVITY 4: Arrow Functions in Real-World Scenarios
 * 
 * Problem 1: Data Processing Pipeline
 * You're building a data processing system for an e-commerce site.
 */

const cart = [
    { name: "Book", price: 12.99, quantity: 2 },
    { name: "Pen", price: 1.50, quantity: 10 },
    { name: "Notebook", price: 5.99, quantity: 3 },
    { name: "Eraser", price: 0.99, quantity: 1 }
];

// Your task:
// 1. Create an arrow function to calculate total price (price * quantity) for each item

const totalPrice = cart.map(item => {
    const { name, price, quantity } = item;
    const total = price * quantity;

    return {
        name: name,
        total: total.toFixed(2)
    };
});

// 2. Create an arrow function to apply a discount of 15% if quantity is 5 or more

const discountThreshold = 5;
const discountedPercent = 0.15;
const discounted = cart.map(item => {
    if (quantity >= discountThreshold) {
        const discount = item.price * (1- discountedPercent);
        return {item, price: discount};
    } else {
        return item;
    }
});

// 3. Create an arrow function to add tax of 8.5% to the final price

const TOTALprice = (totalPrice, discount) => {
    return totalPrice + discount * 0.85;
}

// 4. Create an arrow function to filter out items with total less than $10

const filter = (total, discount) => {
    if (total || discount >= 10) {
        
    }
}

// 5. Challenge: Chain all operations together to get the final processed cart array. 
//    Then calculate the grand total of all items after all transformations

// ============================================================================
// Problem 2: Arrow Functions in Object Methods
// Create a 'ShoppingCart' object using arrow functions for methods
// ============================================================================

// Your task:
// Create a ShoppingCart object with:
// 1. items array property: []
// 2. addItem(name, price) - adds an item to the cart
// 3. removeItem(name) - removes an item by name
// 4. getTotal() - calculates total price using arrow function
// 5. applyCoupon(percent) - applies discount percentage

// Challenge: Implement this using both arrow functions and regular functions. 
// Test how 'this' behaves differently. Which approach works better and why?

// ============================================================================
// Problem 3: Async Operations with Arrow Functions
// Convert Promise-based code to use arrow functions throughout
// ============================================================================

// Given code (commented out - you'll rewrite it):
// fetch('https://api.example.com/data')
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(data) {
//         return data.filter(function(item) {
//             return item.status === 'active';
//         });
//     })
//     .then(function(activeItems) {
//         console.log(activeItems);
//     })
//     .catch(function(error) {
//         console.error(error);
//     });

// Your task:
// 1. Rewrite the above using arrow functions for all callbacks
// 2. Challenge: Rewrite it again using async/await with arrow functions
// 3. Compare all three approaches and explain their advantages
// Note: You can test with a mock data array if fetch is not available

// ============================================================================
// Problem 4: Arrow Functions in Higher-Order Functions
// Create a 'createValidator' function that returns an arrow function
// ============================================================================

// Your task:
// 1. Create a createValidator function that returns an arrow function
//    The validator should:
//    - Check if a value is a string
//    - Check minimum length
//    - Check if it matches a pattern (regex)
//
// 2. Example usage:
//    const validateLength = createValidator((value) => value.length >= 5);
//
// 3. Challenge: Create a validator factory that can combine multiple validation rules.
//    Use arrow functions to create validators like:
//    - isValidEmail (must contain @ and .)
//    - isValidPassword (at least 8 chars, one number, one letter)
//    - isValidPhoneNumber (format: XXX-XXX-XXXX)
//    These should be reusable and chainable