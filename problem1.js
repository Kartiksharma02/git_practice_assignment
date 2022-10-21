Problem 1 : Check whether a number is Prime or not

let number = 14;

let count=0;

 for (let i = 1; i <= number; i++) {

        if (number % i == 0) {

           count++;
        }
}

if(count==2){  

     console.log(number," is a prime number");
else {

    console.log(number," is not a prime number");

}