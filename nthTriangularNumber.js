// 4. nth Triangular Number
// Calculate the nth triangular number. A triangular number counts the objects 
// that can form an equilateral triangle. The nth triangular number is the number 
// of dots composing a triangle with n dots on a side, and is equal to the sum of 
// the n natural numbers from 1 to n. This is the Triangular 
// Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.

const triangularNumber = (n) => {
    if (n === 2) {
        return 1;
    }
    return n + triangularNumber(n-1)
}

triangularNumber(4)

//Time Complexity: Exponential - it counts down until it reaches a base case of < 2, running times grow
// with increase in input size.