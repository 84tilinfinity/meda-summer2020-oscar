function addNumber() {
    var number1 = 10;
    var number2 = 100;

    var sum = number1 + number2;

    return sum;
}


var myNumber = 110;
var myNumber2 = addNumber();

addNumber();


// Function Arguments and Parameters
// Parameters are Function variables.


function myFunction(myFunctionVariable, mySecondFunctionVariable) {

    console.log(myFunctionVariable);

}

// Arguments are the values for the Parameters. And provided within the paranthesis just like Parameters.
// myFunction(1000, "hello");
// myFunction(10);
// myFunction("hello");
// myFunction(true);


function mathify(num1, num2, hello) {

    var sum = num1 + num2;
    var difference = num1 - num2;
    var product = num1 * num2;
    var quotient = num1 / num2;

    console.log("Sum: " + sum);
    console.log("Difference: " + difference);
    console.log("Product: " + product);
    console.log("Quotient: " + quotient);

    return "done!";
}

mathify(90, 100);
mathify(8, 10);
mathify(1, 70);


function caTax(priceTotal) {

    var tax = priceTotal * .085;
    var totalExpense = priceTotal + tax;

    return totalExpense;

}


function writeSentence(priceTotal) {

    console.log("The total for a $" + priceTotal + " purchase is $" + caTax(priceTotal));

}

var myOtherNumber = 100;

writeSentence(myOtherNumber);
writeSentence(1100);
writeSentence(13);



function excited(sentence, result) {

    console.log(sentence + "!!!");

}

excited("hello");