// 3. Reverse String
// Write a function that reverses a string. Take a string as input, reverse 
// the string, and return the new string.

function reverseString (string) {
    const arr = string.split('')

    if (arr.length === 1) {
        return arr[0];
    }

    return reverseString(arr.slice(1).join('')) + arr[0]
}

reverseString('reverse')

// Linear - going through one by one through string