Problem 2 : Check whether a string is palindrome or not.

var str = "racecar";
 
for ( var i = 0; i < mid; i++ ) {
    if (str[i] !== str[len - 1 - i]) {
        console.log(str + " is not a palindrome.");
        return;
    }
}
console.log(str + " is a palindrome.");