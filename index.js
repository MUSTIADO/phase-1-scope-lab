// Declare a variable in global scope called customerName using the var keyword and assign it the value 'bob'.
var customerName = 'bob';

function upperCaseCustomerName() {
    // Modify the global variable directly
    customerName = customerName.toUpperCase();
}

// Write a function that when called, declares a variable called bestCustomer in global scope and assigns it to be 'not bob'.
function setBestCustomer() {
    bestCustomer = 'not bob';
}

// See the consequences of declaring a variable in global scope, by writing a new function that changes that bestCustomer variable to 'maybe bob'.
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

// Now declare a constant (using the const keyword) in global scope called leastFavoriteCustomer and assign it some initial value.
const leastFavoriteCustomer = 'someone';

// Write a function that attempts to change the constant - notice what JavaScript does when you try to change the constant.
function changeLeastFavoriteCustomer() {
    // Attempt to change the constant (this will throw an error in strict mode
    leastFavoriteCustomer = 'someone else';
}
