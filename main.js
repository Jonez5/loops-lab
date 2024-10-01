
for (let i=1; i < 100; i++) {
    if (i%3==0 && i%5==0) {
        console.log("FizzBuzz")
    }else if (i%5==0) {
        console.log("Buzz")
    }else if (i%3==0) {
        console.log("Fizz")
    }else {
        console.log(i)
    }
        
    
    
    
}

/////////////////////////////////////////////////////////

// / PART 2
let prime = false;
let n = 137500067039;
let i = n;

// This checks if your number is 2 or 3. Then, it checks if you number is of the form
// 6n + 1 or 6n - 1. This is because prime numbers must be of this form, though not all
// numbers of this form are prime. If the number is of this form, proceed to the loop
// that checks for prime numbers. This is an optimization to make the code run faster.
while (prime == false) {
  if (i === 2 || i === 3) {
    prime = true;
    console.log(`${i} is a prime number.`);
  } else if ((i + 1) % 6 !== 0 && (i - 1) % 6 !== 0) {
    i += 1;
  } else {
    // isPrime is set to true as default because if we get through the loop below, we have
    // found a prime number and can enter the branching logic below. If the number is not
    // found to be prime, isPrime is set to false, preventing entry into the branching
    // logic
    let isPrime = true;

    // This loop checks to see if a number is prime. It is enough to check those numbers
    // less than sqrt(i) because any factor less than sqrt(i) is guaranteed a factor greater
    // than sqrt(i). Likewise, if there is no factor less than sqrt(i), then there's no
    // factor greater than sqrt(i) either. This is an optimization to make the code run faster
    for (let k = 2; k <= Math.sqrt(i); k++) {
      if (i % k === 0) {
        isPrime = false;
        break;
      }
    }

    // This section of the codes checks to see if the prime number found is the same as the
    // original number given to the code, or if it's a larger number. It prints a statement
    // reflecting this. It also sets prime = true to avoid entering the while loop again
    if (isPrime == true) {
      prime = true;
      if (i === n) {
        console.log(`${i} is a prime number.`);
      } else {
        console.log(`The prime number following ${n} is ${i}.`);
      }

      // If the number was found to not be prime, then we increment to check the next number.
    } else {
      i += 1;
    }
  }
}

// Part 3

// Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232

    let firstCell = "Index"
    let secondCell = "Mass (kg)"
    let thridCell  =  "Spring 1 (m)"
    let fourthCell =   "Spring 2 (m)"

    console.log(firstCell, secondCell,
        thridCell, fourthCell)

        let R1 = [0.00, 0.050, 0.050]
        let R2 = [0.49, 0.66, 0.66]
        let R3 = [0.98, 0.087, 0.080]
        let R4 = [1.47, 0.116, 0.108]
        let R5 = [1.96, 0.142, 0.138]
        let R6 = [2.45, 0.166, 0.158]
        let R7 = [2.94, 0.193, 0.174]
        let R8 = [3.43, 0.204, 0.192]
        let R9 = [3.92, 0.226, 0.205]
        let R10 = [4.41, 0.238, 0.232]

        const Rs = [R1, R2, R3, R4, R5, R6, R7, R8, R9, R10]

            for (const x of Rs) {
                console.log(x);
            }
        


        










    
