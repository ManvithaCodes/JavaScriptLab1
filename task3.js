//function to check the eligiblity of a program
//it takes 2 parameters age and isEmployed
function checkEligibility(age, isEmployed) {
    if(age >18 && isEmployed) {
        return "you are eligible for this program";
    } else if(age >18 && !isEmployed) {
        return "you are conditionally eligible for this program";
    } else {
        return "you are not eligible for this program";
    }   
}
//testing the function with different inputs
console.log(checkEligibility(70, true)); 
console.log(checkEligibility(200, false)); 
console.log(checkEligibility(5, true));  
console.log(checkEligibility(0, false)); 
