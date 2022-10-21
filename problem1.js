Problem 1 : Check whether a number is Prime or not

let number = 14;

if (number > 1) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            console.log(number + " is not a prime number")
        }
    }
} else {
    console.log(number + " is not a prime number");
}