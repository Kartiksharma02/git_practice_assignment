Problem 2 : Check whether a string is palindrome or not.

var str = "racecar";

let rev="";
 
for ( var i =str.length-1 ; i>=0 ; i-- ) {
    
        rev = rev + str[i];
}

if(rev==str){

      console.log(str," is a palindrome.");
    
}else {

      console.log(str," is not a palindrome.");