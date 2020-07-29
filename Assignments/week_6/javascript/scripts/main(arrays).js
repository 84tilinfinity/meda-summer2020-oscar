var oneValue = 800;

oneValue = 500;

// An JavaScript Array is described using the square brackets symbols, and each value within should be split by a comma except for the last value.
var days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday"
];

[];

var randomArray = [100, "hello", true];

var multiDimensionalArray = [
    [10, 20],
    [100, 200]
];

//var newArray = randomArray + days;
var newArray2 = randomArray.concat(days);

console.log(days[3]);
console.log(days[600]);

days[2] = "whensday";

console.log(days);


function addArrays(array1, array2) {

    var newArray = [
        array1[0] + array2[0],
        array1[1] + array2[1]
    ]

    return newArray;
}

var firstArray = [1, 10];
var secondArray = [9, 90];
var sumArray = addArrays(firstArray, secondArray);

console.log(sumArray);

days[7] = "superday";

console.log(days);

// Array Functions
// .push() puts a new piece a data at the end of the array. example: myArray.push("last item!");
// .pop() removes the last piece of data in the array (and returns it to wherever you called .pop()) example: myArray.pop()

// .unshift() puts a new piece of data at the beginning of the array. example myArray.unshift("cutting the line!");
// .shift() removes the first piece of data in the array (and returns it to whereever you called .shift()) example: myArray.shift();


// PUSH EXAMPLE

Math.random();



//multiples.shift(); will get rid of the starting 0;


function multiplesTables(multiplier, max = 12) {

    var multiples = [];

    for (var i = 0; i <= max; i = i + 1) {
        var product = i * multiplier;
        multiples.push(product);
    }

    return multiples;
}


console.log(multiplesTables(7, 20));

console.log(multiplesTables(18, 20));


days.pop();
console.log(days);

// Difference between Null and Undefined.
// null = intentionally emptying a variable.
// undefined = was never assigned a value.

days[4] = null;

console.log(days);