function sum(n) {
 
  if (typeof n !== 'number' || n % 1 !== 0) {
    return "The value passed is not a number";
  }
  
}


console.log("Sum(5):", sum(5));       
console.log("Sum('5'):", sum("5")); 


function factorial(n) {
  if (typeof n !== 'number' || n < 0 || n % 1 !== 0) {
    console.log("Invalid input for factorial");
    return;
  }
  let res = 1;
  for (let i = 1; i <= n; i++) {
    res *= i;
  }
  console.log(`Factorial(${n}):`, res);
}

factorial(4);  
factorial(-1);  


function funkyMath() {
  
  const args = arguments;
  if (args.length === 2) {
    return args[1] - args[0];
  } else if (args.length === 3) {
    return args[0] + args[1] + args[2];
  } else if (args.length === 4) {
    const sum1 = args[0] + args[1];
    const sum2 = args[2] + args[3];
    return sum1 / sum2;
  } else {
    return "Invalid number of arguments";
  }
}
console.log("funkyMath(8, 2):", funkyMath(8, 2));     
console.log("funkyMath(1, 2, 3):", funkyMath(1, 2, 3));        
console.log("funkyMath(8, 2, 3, 5):", funkyMath(8, 2, 3, 5));   
console.log("funkyMath(1):", funkyMath(1));                     


const array = [1, 2, 33, 45, 6, 44];
const odds = [];

for (let i = array.length - 1; i >= 0; i--) {
  if (array[i] % 2 !== 0) {
    odds.push(array.splice(i, 1)[0]);
  }
}

odds.sort((a, b) => a - b);

console.log("Even numbers array:", array);
console.log("Odd numbers sorted:", odds);   



const me = {
  first_name: 'Siza',     
  last_name: 'Mpafa',         
  age: 21,                  
  favourite_colour: 'purple',  
  dream_car: 'yacht'
};

me.favourite_food = 'Umvubo';  
delete me.age;
console.log("Me object:", me);
