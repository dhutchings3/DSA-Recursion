// 7. Factorial
// Write a recursive function that finds the factorial of a given number. 
// The factorial of a number can be found by multiplying that number by each 
// number between itself and 1. For example, the 
// factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

factorial = (n) => {
    if (n===1) {
        return 1
    }
    return n * factorial(n-1)
}

factorial(6)

// Time complexity: Logarithmic time - takes longer with larger input, but problem size is cut in half
//with each iteration