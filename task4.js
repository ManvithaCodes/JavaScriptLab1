//if no discount is given in the input it should be considered as 0
function calculteTotalCost(price,quantity,taxRate,discount=0)
{
    if(isNaN(price) || isNaN(quantity) || isNaN(taxRate) || isNaN(discount))
{
    return "Invalid input";
}
else
{
    let afterDiscountCost=(price*quantity)*(1-discount);
    let afteTaxCost=(afterDiscountCost)*(1+taxRate);
    return afteTaxCost;
}
}
//testing the function with different inputs
let a=calculteTotalCost(100,2,0);
let b=calculteTotalCost(1000,5,0.1,0.5);
let c=calculteTotalCost("abc",3,0.08,0.1);
console.log(a);
console.log(b);
console.log(c);
