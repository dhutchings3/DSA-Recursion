//12. Binary Representation
//Write a recursive function that prints out the binary representation of a given
//number. For example, the program should take 3 as an input and print 11 as output, 
//or 25 as an input and print 11001 as an output. Note that the binary representation 
//of 0 should be 0.

function convertToBinary(num){
    if(num>0){
        let binary = Math.floor(num%2);
        return (convertToBinary(Math.floor(num/2))+ binary);
    }else{
        return '';
    }
}
convertToBinary(25);
