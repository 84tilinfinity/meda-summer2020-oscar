// Math Operators;
// +, -, *, /, %
// String Operator
// + (concatenation)


/*
Everything
in here
is a comment.
*/

// Conditional Operators
// All conditional operations tend to end up being a boolean.

/* 

INDEPENDENT OF DATA TYPES
== equal to
<  lesser than
>  greater than
!= not equal to
!  reverses a boolean !true == false    !false == true

<= lesser than or equal
>= greater than or equal, do not reverse characters as => is arrow function

DEPENDENT OF DATA TYPES
=== both are equal AND are the same data type
!==


*/

var data1 = 10;
var data2 = "10";
// var data2 = parseInt("10"); // parseFloat() to include periods as decimals.

console.log();
parseInt();

// Type Coercion

if (data1 === data2) {
    console.log("The condition was true.");
} else {

}




// Ternary Operator.
// condition ? true code : false code;

var isItTrue = false ? "h" : "g";

var isItTrue2;
if (false) {
    isItTrue2 = "h";
} else {
    isItTrue2 = "g";
}

console.log(isItTrue);
// Ternary Operator END



// Functions
function sayHelloThreeTimes() {

    console.log("hello!");
    console.log("hello!");
    console.log("hello!");

}

function sayGoodByeTwoTimes() {
    console.log("goodbye!");
    console.log("goodbye!");
}

function sayHelloNineTimes() {
    sayHelloThreeTimes();
    sayHelloThreeTimes();
    sayHelloThreeTimes();
}

sayHelloThreeTimes();
console.log("How are you doing");


// function recursiveFunction() {
//     recursiveFunction();
// }

sayHelloThreeTimes();
sayHelloThreeTimes();

sayGoodByeTwoTimes();

sayHelloNineTimes();

// Functions END


// Loops START
console.log("Loops Section");

// for (iterator; condition; increment) { code block }


for (var i = 0; i < 20; i = i + 1) {

    var text = "loop number " + (i + 1);
    
    if (i % 2 === 0) {
        console.log(text);
    }
    
}

// This loop runs for 10 times only compared to 20 from the previous loop, because we are getting to 20 twice as fast.
console.log("Second Loop");
for (var i = 0; i < 20; i = i + 2) {

    console.log("loop number " + (i + 1));

}

for (var counter = 1; counter < 10; counter = counter + 1) {}