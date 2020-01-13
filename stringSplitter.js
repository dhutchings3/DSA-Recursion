// 5. String Splitter
// Write a recursive function that splits a string based on a separator 
// (similar to String.prototype.split). Don't use JS array's split function 
// to solve this problem.

// Input: 02/20/2020
// Output: ["02", "20", "2020"]

const stringSplitter = (str) => {
    if(str.length === 1) {
        return str
    }
    stringSplitter(str.slice(1))
    return[...str]
}

stringSplitter('test')

//Time complexity: Linear - function will only call itsel based on how many times there is 
//a seperator in the string