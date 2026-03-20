function checkEligibility(age, isEmployed) {
    if(age >18 && isEmployed) {
        return "you are eligible for this program";
    } else if(age >18 && !isEmployed) {
        return "you are conditionally eligible for this program";
    } else {
        return "you are not eligible for this program";
    }   
}

console.log(checkEligibility(70, true)); // Output: "you are eligible for this program"
console.log(checkEligibility(200, false)); // Output: "you are conditionally eligible for this program"
console.log(checkEligibility(5, true)); // Output: "you are not eligible for this program" 
console.log(checkEligibility(0, false)); // Output: "you are not eligible for this program"
