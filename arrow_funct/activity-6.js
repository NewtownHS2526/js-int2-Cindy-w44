/*
 * ACTIVITY 6: Arrow Functions - Integration and Problem Solving
 * 
 * Problem 1: Building a Data Transformer
 * Create a flexible data transformation system using arrow functions
 */

const employees = [
    { id: 1, name: "John Doe", age: 30, salary: 50000, department: "IT" },
    { id: 2, name: "Jane Smith", age: 25, salary: 60000, department: "HR" },
    { id: 3, name: "Bob Johnson", age: 35, salary: 55000, department: "IT" },
    { id: 4, name: "Alice Brown", age: 28, salary: 65000, department: "Finance" }
];

// Your task:
// 1. Create arrow functions to:
//    - Filter employees by department
//    - Calculate average salary for a department
//    - Give a 10% raise to employees above a certain age
//    - Get employee names in "Last, First" format (assume single word names for simplicity)

const department = employees.map((department) => {
    if (department === "IT") {
        return name + age + salary + department;
    } else if (department === "HR") {
        return name + age + salary + department;
    } else if (department === "Finance") {
        return name + age + salary + department;
    } else {
        return "Not an avaliable department";
    }
});

const departmentAvgSalary = employees.map((acc, curr) => {
    departmentAvgSalary = acc + curr / acc;
});

const raise = employees.map((age) => {
    if (age > 35) {
        return salary * 1.10;
    }
    return salary;
});



// 2. Challenge: Create a function 'analyzeDepartment' that:
//    - Takes a department name
//    - Returns an object with: {dept, employeeCount, avgSalary, totalBudget, employees}
//    Use arrow functions throughout

// ============================================================================
// Problem 2: Arrow Functions for Data Validation
// Build a validation system using arrow functions
// ============================================================================

// Your task:
// 1. Create validation arrow functions:
//    - isRequired(value) - checks if value exists
//    - minLength(str, len) - checks string length
//    - isEmail(str) - checks email format
//    - isNumber(val) - checks if number
//    - isPositive(num) - checks if positive number
//
// 2. Create a 'validateForm' function that takes an object and validation rules:
//    Example:
//    const rules = {
//        email: [isRequired, isEmail],
//        password: [isRequired, (p) => minLength(p, 8)]
//    };
//
// 3. Challenge: Create a validator that returns error messages for each field
//    Return format: {valid: true/false, errors: {field: ["error1", "error2"]}}

// ============================================================================
// Problem 3: Arrow Functions in Sorting and Filtering
// Implement complex sorting and filtering using arrow functions
// ============================================================================

const products = [
    { name: "Laptop", price: 999, category: "Electronics", stock: 15 },
    { name: "Phone", price: 699, category: "Electronics", stock: 8 },
    { name: "Book", price: 15, category: "Education", stock: 50 },
    { name: "Chair", price: 150, category: "Furniture", stock: 20 }
];

// Your task:
// 1. Create arrow functions to:
//    - Sort products by price (ascending and descending)
//    - Sort products by multiple criteria (category, then price)
//    - Filter products by category
//    - Filter products with low stock (< 10 items)
//
// 2. Challenge: Create a 'smartFilter' function that:
//    - Takes an array and multiple filter criteria
//    - Returns filtered and sorted results
//    Example: smartFilter(products, {category: "Electronics", maxPrice: 800, minStock: 10})

// ============================================================================
// Problem 4: Building a Utility Library
// Create a collection of useful arrow function utilities
// ============================================================================

// Your task:
// Create a utilities object with arrow function methods:
// 1. debounce(func, delay) - delays function execution until after delay milliseconds
// 2. throttle(func, limit) - limits function execution to once per limit milliseconds
// 3. memoize(func) - caches function results for same inputs
// 4. pipe(...functions) - composes functions left to right
// 5. compose(...functions) - composes functions right to left
//
// Challenge: Test each utility with real scenarios:
// - Use debounce for a search input
// - Use throttle for scroll events
// - Use memoize for expensive calculations (like fibonacci)
// - Use pipe/compose for data transformations

