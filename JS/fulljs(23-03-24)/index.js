console.log("Yes , I am linked");

// Last Time

a = "5"; //String
// Double equals check on the values
// console.log("Double: ", a == 5); //Only Values

// // Tripple equals to also check the datatypes
// console.log("Tripple: ", a === 5); // Values and Datatype
// Temporary Data
a = 5;

45, 87456, 564, 231, 354, 654, 6574, 987;

// // Array , Collection of Datas

let numbers = [4, "Ssdkjh", true];
// // Array Indexing starts from zero
// console.log(numbers[0]);
// console.log(numbers[1]);

// // Adding
// numbers.push(54);
// numbers.push(false);
// numbers.push("f");

// // Adding in start
// numbers.unshift("f");

// // Remove
// numbers.pop();
// numbers.shift();

// console.log(numbers);

// console.log(numbers[numbers.length - 1]);

// console.log(numbers.indexOf(54));
// console.log(numbers.indexOf(74));

// console.log(numbers.includes("Sskjh"));

// console.log(numbers.reverse());

// // Array to Subarray
// console.log(
//   numbers.find((value) => {
//     if (value == 4) {
//       return value;
//     }
//   })
// );

// Traversing the complete array

//1) Custom
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

//2) Predefined
//map function
//Efficient
numbers.map((value) => {
  console.log(value);
});

// foreach -> inefficient , time complexity

// Functions

// Repeat
// Code Readability
// Value , Pass and return result->
//In the box hidden
//

// Function Definition
function sayHello() {
  console.log("Hello from Function");
}

function printMyName() {
  console.log("My name is zeeshan");
}

// function sumNumbers(num1, num2, num3) {
//   sum = num1 + num2 + num3;
//   console.log(sum);
// }
function sumNumbers(num1, num2, num3) {
  sum = num1 + num2 + num3;
  return sum;
}

// Function Call
// sayHello();
// printMyName();

result = sumNumbers(41, 7, 47);
// console.log(result);

// Arrow Function
const arrowFunctionSum = (num1, num2, num3) => {
  sum = num1 + num2 + num3;
  return sum;
};

// console.log(arrowFunctionSum(41, 78, 4));

// Anonymous Fuction
(num1, num2, num3) => {
  sum = num1 + num2 + num3;
  return sum;
};

// Callback Functions
//When we pass a function as a parameter to another fucntion is called callbasck function

function computeSum(sumFunction) {
  console.log(sumFunction());
}

//Callback as an anonymous function
// computeSum(() => {
//   console.log("I Called");
// });
