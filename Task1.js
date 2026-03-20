
// function called formatFullName that takes two parameters: firstName and lastName. 
function formatFullName(firstName, lastName)
{
    // condition that checks if either the first or last name is missing. 
    if(firstName === "" || lastName === "")
{
    return "Invalid name input.";
}
    // Capitalize the first letter of firstName and lastName
    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);

    return lastName + "," + firstName;
}

// Test the function with different inputs
let x=formatFullName("","Srinivasan");
let y=formatFullName("Anitha","Kumar");
let z=formatFullName("Devi","");
console.log(x);
console.log(y);
console.log(z);




