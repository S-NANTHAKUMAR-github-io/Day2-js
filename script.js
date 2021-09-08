/*print even numbers in array*/

let getEvenNumbers = () => {
    let arr = [4,5,7,8,14,45,76];
    	
    let the_evens = arr.filter(number => number % 2 == 0);
    console.log('Even Numbers: ' + the_evens);
}
    
getEvenNumbers();



/*print in reverse order using array*/

const city = ["Chennai", "Coimbatore", "Trichy", "Madurai"];
console.log(city.reverse());