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

const discountBreakthrough = 5;
const discountPercent = 0.85;
const discounted = cart.map(item => {
    if (quantity > discountBreakthrough) {
        const { name, price, quantity } = item;
        const total = price * quantity;
        return total * discountPercent;
    } else {
        return name;
    }
});

// 3. Create an arrow function to add tax of 8.5% to the final price

const tax = 0.015;
const taxed = discounted(totalPrice => {
    return {
        total: totalPrice * tax
    }
});


// 4. Create an arrow function to filter out items with total less than $10

const totalIsMoreThan10 = 10;
const totalMoney = (total => {
    if (total > totalIsMoreThan10) {
        return name;
    }
});

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

const ShoppingCart = [
    { name: "Pineapple", price: 7.99 },
    { name: "Cake", price: 22.99 },
    { name: "Tomato", price: 5.99 },
    { name: "Pasta", price: 9.99 }
];
const addItem = (name, price) => {
    return "Add item to cart?" + name + price;
}
const removeItem = (name) => {
    return "Remove item from cart?" - name;
}
const getTotal = (name, price) => {
    const calculateTotal = (price) => price + price + price + price;
    return name, price, calculateTotal;
}
const coupon = 0.005;
const applyCoupon = (calculateTotal, coupon) => {
    return calculateTotal * coupon;
}

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

<<<<<<< HEAD
fetch('https://api.example.com/data') 
    .then = function response() {
        return response.json();
    } .then = function data() {
        return data.filter(function(item) {
            return item.status === 'active';
        });
    } .then = function activeItems() {
        console.log(activeItems);
    } .catch(function(error) {
        console.error(error);
    });
=======
fetch('https://api.example.com/data')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        return data.filter(function(item) {
            return item.status === 'active';
        });
    })
    .then(function(activeItems) {
        console.log(activeItems);
    })
    .catch(function(error) {
        console.error(error);
    });
fetch('https://api.example.com/data') 
    then = function response() {
        return response.json();
    } 

>>>>>>> f7727664282954e4900ea2ca94def586ea89f6db

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

const createValidator = (minLength, pattern) => (value) => {
    if (typeof value !== "string") {
        console.log("Value is wrong");
        return false;
    } 
    
    if (value < minLength) {
        console.log("Number is not long");
        return false;
    }
    
    if (!pattern.test(value)) {
        console.log("No patterns matched");
        return false;
    }
    
    return true;
    
};

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