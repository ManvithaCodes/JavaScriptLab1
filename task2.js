
// This function calculates the total cost of an item based on its price, quantity, and tax rate.
function calculateTotalCost(price, quantity, taxRate) {
    // Ensuring that price, quantity, and taxRate are all valid numbers. 
    if (isNaN(price) || isNaN(quantity) || isNaN(taxRate)) {
        return "Invalid input.";
    }
    const totalCost = (price * quantity) * (1 + taxRate);
    return totalCost;
}
// Test the function with different inputs
let a = calculateTotalCost(500, 2, 0.05);
let b = calculateTotalCost(1000, 5, 0.1);
let c = calculateTotalCost("abc", 3, 0.08);
console.log(a);
console.log(b);
console.log(c);
