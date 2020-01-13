//1. Counting Sheep
//Write a recursive function that counts how many sheep jump over the fence. Your 
//program should take a number as input. That number should be the number of sheep you have. 
//The function should display the number along with the message "Another sheep jumps over the fence" 
//until no more sheep are left.
// //Input: 3
// Output:
// 3: Another sheep jumps over the fence
// 2: Another sheep jumps over the fence
// 1: Another sheep jumps over the fence
// All sheep jumped over the fence

function countSheep(num) {
    if (numm ==0) {
        console.log('All sheep have jumped over the fence');
    }
    else {
        console.log('Another sheep jumps over the fence');
        countSheep(num-1);
    }
}

countSheep(10);

//Time complexity: Linear - function will run until the number it was given hits 0.
