// 1) Make an array of numbers that are doubles of the first array
let arr = [2, 4, 100];
function doubleNumbers(arr) {
  let newArr = [];
  for (i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 2);
  }
  return newArr;
}

console.log(doubleNumbers(arr));

// console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]
//ex-2
// Take an array of numbers and make them strings
let ar = [2, 5, 100];
function stringUp(ar) {
  let newAr = [];
  for (i = 0; i < arr.length; i++) {
    newAr.push(ar[i].toString());
  }
  return newAr;
}
console.log(stringUp(ar));
//ex-3
// 3) Capitalize each of an array of names
let names = ["john", "JaCOB", "jinGleHeimer", "schmidt"];
function capitalizeNames(name) {
  return names.map(
    (
      name //map()jagsaaltin daguu buh elementig damjuulah huvirgana.
    ) => name.toLowerCase().replace(/^\w/, (char) => char.toUpperCase()) // buh usgiig jijig bl=olgon huvirgaad /^\w/;regular ilerhiilel ashiglan morin ehnii usgig songono.
  ); // char bol zovhon neg elementtei haritsahad zoriulagdsan.
}
console.log(capitalizeNames(names));
// console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]
//ex-4
// 4) Make an array of strings of the names
// l4) Make an array of strings of the names
function namesOnly(arr) {
  let names = [];
  for (i = 0; i < arr.length; i++) {
    names.push(arr[i].name);
  }
  return names;
}
console.log(
  namesOnly([
    {
      name: "Angelina Jolie",
      age: 80,
    },
    {
      name: "Eric Jones",
      age: 2,
    },
    {
      name: "Paris Hilton",
      age: 5,
    },
    {
      name: "Kayne West",
      age: 16,
    },
    {
      name: "Bob Ziroll",
      age: 100,
    },
  ])
);
["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"];
//ex-5
// 5) Make an array of strings of the names saying whether or not they can go to The Matrix
function makeStrings(arr) {
  let okay = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i].age > 19) {
      okay.push(`${arr[i].name} can go to The Matrix. Age : ${arr[i].age}`);
    } else {
      okay.push(`${arr[i].name} can't go to The Matrix. Age : ${arr[i].age}`);
    }
  }
  return okay;
}

console.log(
  makeStrings([
    {
      name: "Angelina Jolie",
      age: 80,
    },
    {
      name: "Eric Jones",
      age: 2,
    },
    {
      name: "Paris Hilton",
      age: 5,
    },
    {
      name: "Kayne West",
      age: 16,
    },
    {
      name: "Bob Ziroll",
      age: 100,
    },
  ])
);
// ["Angelina Jolie can go to The Matrix",
// "Eric Jones is under age!!",
// "Paris Hilton is under age!!",
// "Kayne West is under age!!",
// "Bob Ziroll can go to The Matrix"]
//ex-6
// Write a function called doubleValues which accepts an array and returns a new array with all the values in the array
//  passed to the function doubled

// Examples:
let ar1 = [1, 2, 3, 5, 1, 2, 3, 10]; // [2,4,6,10,2,4,6,20]
function doubleValues(ar1) {
  let result = [];
  for (i = 0; i < ar1.length; i++) {
    result.push(ar1[i] * 2);
  }
  return result;
}
console.log(`double value bol:${doubleValues(ar1)}`);
//ex-7
// Write a function called onlyEvenValues which accepts an array and returns
// a new array with only the even values in the array passed to the function
//Examples: ene true false-r tulhene
onlyEvenValues([1, 2, 3]); // [2]
onlyEvenValues([5, 1, 2, 3, 10]); // [2,10]

function onlyEvenValues(arr) {
  let result = [];
  for (i = 0; i < arr.length; i++) {
    result.push(arr[i] % 2 === 0);
  }
  return result;
}
console.log(`Ene arraynii tegsh too bol; ${onlyEvenValues([1, 2, 3])}`);
function onlyEvenValues(arr) {
  return arr.filter((num) => num % 2 === 0); //filterdsen tohioldold arrni toogooroo tulhene.
}

console.log(
  `even toonuud bol;${onlyEvenValues([1, 2, 3, 4, 5, 7, 8, 9, 10, 11])}`
);
//ex-
let numbers = [1, 2, 3, 4, 5, 7, 8, 9, 10, 11];

function initialArray(numbers) {
  let result = [];
  for (i = 0; i < numbers.length; i++) {
    return numbers.filter((num) => num % 2 !== 0);
  }
}
console.log(`Initial array ${initialArray(numbers)}`);

numbers.pop();
console.log(`Popped array ${numbers}`);

numbers.push(123);
console.log(`Pushed array ${numbers}`);

numbers.shift();
console.log(`shifted array ${numbers}`);

numbers.unshift(1234123);
console.log(`Unshifted array ${numbers}`);

const string = "string";
console.log(string.split(""));
const arrayOfStings = string.split("");

const originalFlavors = [
  "Banana Nut Fudge",
  "Black Walnut",
  "Burgundy Cherry",
  "Butterscotch Ribbon",
  "Cherry Macaron",
  "Chocolate",
  "Chocolate Almond",
  "Chocolate Chip",
  "Chocolate Fudge",
  "Chocolate Mint",
  "Chocolate Ribbon",
  "Coffee",
  "Coffee Candy",
  "Date Nut",
  "Eggnog",
  "French Vanilla",
  "Green Mint Stick",
  "Lemon Crisp",
  "Lemon Custard",
  "Lemon Sherbet",
  "Maple Nut",
  "Orange Sherbet",
  "Peach",
  "Peppermint Fudge Ribbon",
  "Peppermint Stick",
  "Pineapple Sherbet",
  "Raspberry Sherbet",
  "Rocky Road",
  "Strawberry",
  "Vanilla",
  "Vanilla Burnt Almond",
];
console.log(`anhnii array;${originalFlavors.length}${originalFlavors} `);
function checkLength(originalFlavors) {
  for (i = 0; i < originalFlavors.length; i++)
    if (originalFlavors.length === 31) {
      return true;
    } else {
      return false;
    }
}

console.log(checkLength(originalFlavors));
console.log(`ene Array urt ni ;${originalFlavors.length}`);

/* Task 1: Confirm that the array is exactly 31 flavors. Your function should accept:
   
  (1) an array
   
  Your function should return a boolean TRUE 
  if the length of the array is 31 and FALSE if the length of the array is NOT 31.
  To save you from having to count the items above, you can assume that length of originalFlavors is 31. 
  You may also want to test your function by creating and passing an array of a different length, to make sure it returns FALSE if length is not 31.
   
  i.e. is31Flavors(originalFlavors) will return TRUE.*/

/* Task 2: Corporate has come to you with an idea for a new flavor: Rainbow Sherbert! They think this will be a game changer. 
You need to modify the array to include this flavor.
   
  Your function should accept:
   
  (1) an array
  (2) a flavor
   
   
   
  Your function should add the flavor to the front of the array and console.log the resulting array.
   
  For example addFlavor("Rainbow Sherbert", originalFlavors) should return ["Rainbow Sherbert", "Banana Nut Fudge",..."Vanilla Burnt Almond"] */
let addFlavorArray = [
  "Rainbow Sherbert",
  "Banana Nut Fudge",
  "Vanilla Burnt Almond",
];

function addFlavor(originalFlavors, addFlavorArray) {
  for (i = 0; i < addFlavorArray.length; i++)
    if (originalFlavors.includes(addFlavorArray[i])) {
      console.log(`ali hediin arrayd bn ${addFlavorArray[i]}`);
    } else {
      originalFlavors.push(addFlavorArray[i]);
      console.log(`${addFlavorArray[i]} nemegdlee`);
    }
  return originalFlavors;
}
console.log(addFlavor(originalFlavors, addFlavorArray));
console.log(originalFlavors.length);

originalFlavors.pop(), console.log(`Popped array ${originalFlavors}`);
console.log(originalFlavors.length);

function removeIndex(originalFlavors) {
  for (i = 0; i < originalFlavors.length; i++);
  let index = originalFlavors.indexOf("Vanilla");
  if (index !== -1) {
    originalFlavors.splice(index, 1);
  }
  return originalFlavors;
}

console.log(removeIndex(originalFlavors));
console.log(originalFlavors);
let chocolate = originalFlavors.filter(
  (value) => "Chocolate" == value.split(" ")[0] // hervee neg stringni 2ugin negiig ni filter hih bol split hiine
);
let choc = originalFlavors.map;
console.log(chocolate);

/* Task 3: Houston, we have a problem! There are now 32 flavors in the array! Your task is to remove an item from the end of the array.
   
  Your function should accept:
   
  (1) an array 
  Your function should remove a flavor from the end of the array and console.log the resulting array.
  For example removeLastFlavor(originalFlavors) would return ["Rainbow Sherbert", "Banana Nut Fudge",..."Vanilla"]*/

/* Task 4: Write a function that returns a flavor at a given index in the array.
   
  Your function should accept:
   
  (1) an array
  (2) an index

   
  For example, getFlavorByIndex(originalFlavors, 2) would return "Black Walnut", assuming Rainbow Sherbert has been added successfully. */

/* Task 5: As corporate wants to add more and more flavors to their lineup, they've realized that they need to remove flavors based on flavor name, 
as opposed to just arbitrarily removing the first or last flavor. Your task is to get an index by flavor name, and remove that flavor from the array.
   
  Your function should accept:
   
  (1) an array
  (2) a string (flavor)
   
  For example, removeFlavorByName(originalFlavors, "Vanilla") would return an array with the length 30 including all of the flavors except Vanilla.
   
  Hint: You can use .splice() for this

   
  */

/* Task 6: With all of these changes going on, we don't want to lose track of the actual, original 31 flavors. Write a function called copy that makes a copy of the array.
   
  Your function should accept:
   
  2 arguments 1 for your new array and one for your original array
   
  and should return a new array that is identical to the old array. You can name the new array however you'd like. */

/* Task 7: July 7th is "World Chocolate Day" and Baskin Robins wants to create promotional materials highlighting all of their chocolate flavors. Write a function that checks every item in the array for a given string and returns a new array called filteredArray with just these values. Rather than hardcoding "chocolate" into your function, pass a string as a parameter, and invoke with the argument "chocolate". This way you could also filter for "Vanilla", "Sherbert", etc. when those holidays roll around.
   
  Your function should accept:
   
  (1) an Array
  (2) a string (i.e. "chocolate")
   
  and return a new array.
   
  For example, filterByWord(originalFlavors, "Chocolate") should return ["Chocolate", "Chocolate Almond",..."Chocolate Ribbon"].
   
  DO NOT USE ADVANCED ARRAY METHODS (i.e. .filter) to solve this problem.
   
  hint - you can use the .includes method to help you solve this */

// function filterByWord(array, word) {
//   const filteredArray = [];
//   array.forEach(function (flavor) {
//     if (flavor.includes(word)) {
//       console.log(flavor);
//     }
//   });
//   //   return filteredArray;
// }

// console.log(filterByWord(originalFlavors, "chocolate"));
/* 🧁🍦🍨 STRETCH 🍨🍦🍫*/

/* STRETCH 1: Write a function that returns the average number of words in an array. You should be able to use this function for any array, 
but can test with originalFlavors.
   
  Your function should accept:
   
  (1) an array
   
  and should return the average number of words per item in the array.
   
  For example, getAverageWordLength(originalFlavors) should return a number between 0 and 3. */
// (1) an array

// and should return the average number of words per item in the array.

// For example, getAverageWordLength(originalFlavors) should return a number between 0 and 3. */
// console.log(arrayWordslength);

// f (1) an array
<<<<<<< Updated upstream
function wordAverageLength(originalFlavors) {
  let wordLength = originalFlavors.map((item) => item.split("").length);
  console.log(wordLength);
  let totalWords = wordLength.reduce((sum, count) => sum + count, 0);
  return totalWords / originalFlavors.length;
}
console.log(wordAverageLength(originalFlavors));
// //part2
// Exercise 1

// Create a function that will display the smallest value in the array.

// Example:
// > console.log(findSmallest(([30, 45, 60, 7]));
let findSmallest = [30, 45, 60, 7];
let small = findSmallest.reduce(
  (acc, num) => (num < acc ? num : acc), //reduce ashiglan hamgin baga utga avah
  numbers[0]
);
console.log(small);
// > 1
// Exercise 2
// Create a function that will accept an array, check the data type of each element. The function will delete string elements and will return a the new array
//neg function array uusgeed  array-mn element  burin datatypy shalgay  string delete hiivel shine array tulhene
// Example:
// > console.log(numbersOnly(['text', 3, 7, 'github', 13, 'dev']));
// > [ 3, 7, 13 ]
let n = ["text", 3, 7, "github", 13, "dev"];
function delString(n) {
  let newArr = n.filter((item) => typeof item !== "string");
  return newArr;
}
console.log(delString(n));
// Exercise 3

// Create a function that will accept an array and do the following:
// Get the lowest element
// Get the highest element
// Get the length of array
// Get the Average of all element;
// Store these criteria in a new array

// Example:
// > console.log(minMaxLengthAverage([7, 13, 3, 77, 100]));
// > [ 3, 100, 5, 40 ]
let oneArr = [7, 13, 3, 77, 100];
console.log(oneArr.length);
function minMaxLengthAverage(oneArr) {
  let min = oneArr.reduce((acc, num) => (num < acc ? num : acc));

  let max = oneArr.reduce((acc, num) => (num > acc ? num : acc));

  return { max, min };
}

console.log(minMaxLengthAverage(oneArr));

let jk = [
  "hi",
  "alis",
  "chocolate",
  "Vanilla",
  "string",
  "Ris",
  "Vanilla Latte",
];
console.log(jk.length);
function stringMinMaxLengthAverage(jk) {
  const length = jk
    .filter((item) => typeof item === "string")
    .map((item) => item.length);
  const minlength = Math.min(...length);
  const maxlength = Math.max(...length);
  return { minlength, maxlength };
}
console.log(stringMinMaxLengthAverage(jk));
function stringWordAverageLength(jk) {
  let wordAverage = jk.map((item) => item.split(" ").length);
  console.log(wordAverage);
  let totalWords = wordAverage.reduce((sum, count) => sum + count, 0);
  console.log(totalWords);
  return totalWords / jk.length;
}
console.log(`string word average`, stringWordAverageLength(jk));
// Exercise 4)

// Count the number of Words
// Return how many words was given

// Example:
// > countWords('hello from kbpsystem!');
// > 3
let h = "hello from kbpsystem!".split(" "); //neg stringd bga ugig toolohdoo shuud ter stringee split hiih bol array dotorh stringuudig zadlahad.map(item=>item.split("")gej avna)
let countWord = h.length;
console.log(countWord);
// Exercise 5

// Multiply by Length
// Multiply all elements in an array by it's length
let r = [4, 1, 1];
let length = r.length;
console.log(r.map((value) => value * length));
//  r.map((input)=> )
// r.map(function)
// function name(input){
// action}
//  array
//  const name = (input) => {action}
// Example:> MultiplyByLength([4,1,1]);> [12, 3, 3]
// Exercise 6
// Find the correct Index location
// Return the index location of an element from a given array. First argument is the array you'd like to search and the second one is the element (either string/number) to look for.
//index-n bairshilaar ni butsaana

let pos = ["github", "gitlab", "bitbucket", "apollo"];

// Example:
// > console.log(findIndex(['github', 'gitlab', 'bitbucket', 'apollo'], 'gitlab']));
// > 1
//indexof -g ashiglasan bai bolson utgaa zarlaad, indexof uguud teged daraa ni ter zarlasan utgaa hevlene.
let arq = ["github", "gitlab", "bitbucket", "apollo"];
let target = "gitlab";
let index = arq.indexOf(target);
console.log(index);
//findindex ashiglah function bolhoor value-ee zaaval bichne teged value-s tsaash ged olno.
//findindex ni iluu uyn hatan niilmel shalgurtai bj boldog.tuhailbal stringin urt esvel tuhain txt-n todorhoi neg hesgig haih
let fi = arq.findIndex((item) => item === target);
console.log(fi);
//foreach ashiglah
const indices = [];
arq.forEach((item, index) => {
  if (item === target) {
    indices.push(index);
  }
});
console.log(`indexni `, indices);
//foreach neg index hed hed davtagdsan tohioldold tuuni buh bairlalig butsaahad ashigladag
//filter index ashiglah
// let result;
// */

//part 3==== ADVANCED Array Methods ====
// Given this zoo data from around the United States, follow the instructions below.
//Use the specific array methods in the requests below to solve the problems.
const zooAnimals = [
  {
    animal_name: "Jackal, asiatic",
    population: 5,
    scientific_name: "Canis aureus",
    state: "Kentucky",
  },
  {
    animal_name: "Screamer, southern",
    population: 1,
    scientific_name: "Chauna torquata",
    state: "Alabama",
  },
  {
    animal_name: "White spoonbill",
    population: 8,
    scientific_name: "Platalea leucordia",
    state: "Georgia",
  },
  {
    animal_name: "White-cheeked pintail",
    population: 1,
    scientific_name: "Anas bahamensis",
    state: "Oregon",
  },
  {
    animal_name: "Black-backed jackal",
    population: 2,
    scientific_name: "Canis mesomelas",
    state: "Washington",
  },
  {
    animal_name: "Brolga crane",
    population: 9,
    scientific_name: "Grus rubicundus",
    state: "New Mexico",
  },
  {
    animal_name: "Common melba finch",
    population: 5,
    scientific_name: "Pytilia melba",
    state: "Pennsylvania",
  },
  {
    animal_name: "Pampa gray fox",
    population: 10,
    scientific_name: "Pseudalopex gymnocercus",
    state: "Connecticut",
  },
  {
    animal_name: "Hawk-eagle, crowned",
    population: 10,
    scientific_name: "Spizaetus coronatus",
    state: "Florida",
  },
  {
    animal_name: "Australian pelican",
    population: 5,
    scientific_name: "Pelecanus conspicillatus",
    state: "West Virginia",
  },
];
// const displayNames = [];

// zooAnimals.forEach(function animalNames(element){

// var display = "name: " + element.animal_name + ", " + "scientific: " + element.scientific_name

//  displayNames.push(display);

//   })
//   console.log(displayNames);
// Функц дуудаж гүйцэтгэх

// //  Request 1: .forEach()

// // The zoos want to display both the scientific name and the animal name in front of the habitats.

// // Populate the displayNames array with only the animal_name and scientific_name of each animal.

// // displayNames will be an array of strings, and each string should follow this

// // pattern: "Name: Jackal, asiatic, Scientific: Canis aureus."
function displayNames(array) {
  array.forEach(function (element) {
    console.log(
      `name: ${element.animal_name.toLowerCase()}, scientific: ${
        element.scientific_name
      }`
    );
  });
}
console.log(displayNames(zooAnimals));
const lowCaseAnimalNames = zooAnimals.map((animal) =>
  animal.animal_name.toLowerCase()
);
console.log(lowCaseAnimalNames);

// /* Request 2: .map()

// The zoos need a list of all their animal's names (animal_name only) converted to lower case.
// Using map, create a new array of strings named lowCaseAnimalNames,
//each string following this pattern: "jackal, asiatic". Log the resut.

// */

// /* Request 3: .filter()

// The zoos are concerned about animals with a lower population count. Using filter, create a new array of objects called lowPopulationAnimals which contains only the animals with a population less than 5.

// */

// /* Request 4: .reduce()

// The zoos need to know their total animal population across the United States. Find the total population from all the zoos using the .reduce() method. Remember the reduce method takes two arguments: a callback (which itself takes two args), and an initial value for the count.

// */

// // ==== Callbacks ====

// /* Step 1: Create a higher-order function

// * Create a higher-order function named consume with 3 parameters: a, b and cb

// * The first two parameters can take any argument (we can pass any value as argument)

// * The last parameter accepts a callback

// * The consume function should return the invocation of cb, passing a and b into cb as arguments

// /* Step 2: Create several functions to callback with consume();

// * Create a function named add that returns the sum of two numbers

// * Create a function named multiply that returns the product of two numbers

// * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"

// */

// /* Step 3: Check your work by un-commenting the following calls to consume(): */

// // 4

// // 160 // Hello Mary Poppins, nice to meet you!

// /*

// */

// ///////////////Menu Items (MVP)///////////////////

// const latte = { name: "Cafe Latte", price: 4, category: "Drinks" };

// const burger = { name: "Burger", price: 18, category: "Lunch" };

// const breakfastBurrito = {

//   name: "Breakfast Burrito",

//   price: 16,

//   category: "Breakfast",

// };

// /* Task 1a: write a function to return more menu items with the same format as the items above. */

// function createMenuItem(name, cost, category) {

//   /* Code here */

// }

// /* Task 1b: use your function to create 3 more menu items. You may add any items to the menu that you'd like */

// /* Task 2: You're having a lunch special! 25% off for teachers and students, 10% off for everyone else. Add a method to your burger object that automatically calculates price given a string as a parameter.

// Your method should accept:

// (1) A string (teacher, student, or public)

// and should return a number.

// For example, burger.discount("teacher") would return 13.5 and burger.discount("public") would return 16.2*/

// ///////////////Reviews (MVP)///////////////////

// const reviews = [

//   {

//     name: "Daniela",

//     rating: 5,

//     feedback: "Beautiful atmosphere and wonderful vegan options!",

//   },

//   {

//     name: "Jack",

//     rating: 3,

//     feedback:

//       "A little too hipster for my taste, but the burger was decent, if overpriced",

//   },

//   { name: "Miranda", rating: 4, feedback: "fun trivia and cool vibes" },

//   {

//     name: "Wen",

//     rating: 4.5,

//     feedback:

//       "I don't leave my house often, but when I do, it's for this place. Highly reccomend.",

//   },

//   {

//     name: "Brett",

//     rating: 3,

//     feedback:

//       "great selection of snacks and a nice cafe area to get work done during the day.",

//   },

//   {

//     name: "Julius",

//     rating: 2,

//     feedback:

//       "I was largely unimpressed by this venue. Nothing special on the menu and too expensive. The atmosphere is polarizing, and not for me, but I think some would like it.",

//   },

//   {

//     name: "Lauren",

//     rating: 4,

//     feedback:

//       "Absolutely love that they have karaoke Fridays! Food and drink selection is okay.",

//   },

//   { name: "Reyna", rating: 3.5, feedback: "" },

// ];

// /* Task 3: Console.log just Julius' feedback */

// /* Task 4: Add a new rating with your (fictitious) opinions of the restaurant in the same format as the reviews above. */

// /* Task 5: Add the following feedback to Reyna's rating - "this place is chill with really cool people, great for getting work done on weekdays"

// /*  Task 6: Write a function to return a review based on the index of the review in the array.

// Your function should take two arguments:

// (1) an array which holds all of the reviews

// (2) a number which is the desired index in the array.

// and should return a string in the format `{name} gave the restaurant a {rating}, and their feedback was: {feedback}`

// *

// * For example, if getReviewByIndex is invoked with reviews and the number 0

// * it will return `Daniela gave the restaurant a 5 star review and their feedback was: Beautiful atmosphere and wonderful vegan options!`

// */

// function getReviewByIndex(reviews, index) {

//   /* code here */

// }

// /* Exercise 12

// Create the use object and the object should have following key

// firstName

// lastName

// currentLocation

// favoriteSongs

// age

// 1. console log 'hello user's firstname and Lastname'

// 2.How's the weather in 'currentLocation'

// 3. console log user's favorite songs

// /* STRETCH 3:  This challenge is not related to the data above!

// Write a function called carMarker

// Your function should accept:

// (1) a single odometer argument (a number)

// and return an object.

// The returned object should have the following characteristics:

//      it has an `odometer` property that contains the argument passed in.

//      it has a `drive` method that takes a distance as its argument, and

//          (1) causes the odometer in the object to be increased by the distance,

//          (2) returns the updated value of the `odometer`.

// */

// function carMaker(/* code here */) {

//   /* code here */

// }

// /*

//   To get started:

//   1. Remove the lines involving the removeThisToStart variable, so that the

//      program doesn't exit early.

//   2. Implement userCanAffordSofa

// */

// // Exercise 13

// let superChimpOne = {

//   name: "Chad",

//   species: "Chimpanzee",

//   mass: 9,

//   age: 6,

//   astronautID: 1,

//   move: move(),

// };

// let salamander = {

//   name: "Lacey",

//   species: "Axolotl Salamander",

//   mass: 0.1,

//   age: 5,

//   astronautID: 10,

//   move: move(),

// };

// let animal1 = {

//   name: "Brad",

//   species: "Chimpanzee",

//   mass: 11,

//   age: 6,

//   astronautID: 5,

//   move: move(),

// };

// let animal2 = {

//   name: "Leroy",

//   species: "Beagle",

//   mass: 14,

//   age: 5,

//   astronautID: 7,

//   move: move(),

// };

// let animal3 = {

//   name: "Almina",

//   species: "Tardigrade",

//   mass: 0.0000000001,

//   age: 1,

//   astronautID: 3,

//   move: move(),

// };

// function move() {

//   return Math.round(Math.random() * 10);

// }

// // After you have created the other object literals, add the astronautID property to each one.

// //Create an array to hold the animal objects.

// // Print out the relevant information about each animal.

// // return `${name} is a ${species}. They are ${age} years old and ${mass} kilograms. Their ID is ${astronautID}.`;

// function crewReports(animal) {}

// // Exercise 14

// var movieDatabase = {

//   title: "Pulp Fiction",

//   duration: 120,

//   stars: ["Bruce Willis", "Uma Thurman"],

// };

// // write the function to return Movie name and duration and start

// // Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).

// // const recipe = {

// //   title: "Mole",

// //   servings: 2,

// //   ingredients: ["cumin", "cinnamon", "cocoa"],

// // };

// // console.log title of the recipe

// // console.log 'Servings: recipe servings'

// //console.log the ingredients one by one

// // //Task2

// // let programming = {

// //   languages: ["JavaScript", "Python", "Ruby"],

// //   isChallenging: true,

// //   isRewarding: true,

// //   difficulty: 8,

// //   jokes:

// //     "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",

// // };

// // Write the command to add the language "Go" to the end of the languages array.

// // Change the difficulty to the value of 7.

// // Using the delete keyword, write the command to remove the jokes key from the programming object.

// // Write the command to add a new key called isFun and a value of true to the programming object.

// // Using a loop, iterate through the languages array and console.log all of the languages.

// // Using a loop, console.log all of the keys in the programming object.

// // Using a loop, console.log all of the values in the programming object.

// // /Menu Items (MVP)///////////////////

// // const latte = {

// //   name: "Cafe Latte",

// //   price: 4,

// //   category: "Drinks",

// // };

// // const burger = { name: "Burger", price: 18, category: "Lunch" };

// // const breakfastBurrito = {

// //   name: "Breakfast Burrito",

// //   price: 16,

// //   category: "Breakfast",

// // };

// // /* Task 1a: write a function to return more menu items with the same format as the items above. */

// // console.log(createMenuItem("Buuz", 45, "Breakfast"));

// // console.log(createMenuItem("Buuz", 45, "Breakfast"));

// // console.log(createMenuItem("Buuz", 45, "Breakfast"));

// // console.log(createMenuItem("Buuz", 45, "Breakfast"));

// // console.log(createMenuItem("Coffee", 5, "Dinner"));

// // /* Task 1b: use your function to create 3 more menu items. You may add any items to the menu that you'd like */

// // /* Task 2: You're having a lunch special! 25% off for teachers and students, 10% off for everyone else. Add a method to your burger object that automatically calculates price given a string as a parameter.

// // console.log(burger.discount("student"));

// // console.log(burger.discount("public"));

// // c;

// see less

// Reply

// Erdenedari Chuluunbaatar
// Yesterday 17:17
// Map vs Filter vs Reduce

// // // map

// // // filter

// // // reduce

// // const numbers = [1, 2, 3, 4, 5];

// // // Double each number in the array

// // const doubled = numbers.map(num => num * 2);

// // console.log(doubled); // Output: [2, 4, 6, 8, 10]

// // const numbers = [1, 2, 3, 4, 5];

// // // Keep only even numbers

// // const evens = numbers.filter(num => num % 2 === 0);

// // console.log(evens); // Output: [2, 4]

// // const numbers = [1, 2, 3, 4, 5];

// // // Calculate the sum of all numbers

// // const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// // console.log(sum); // Output: 15

// // MAP "array method"

// let num = [1,2,3]   //  double  [2, 4, 6]

// let newArray = num.map((value, index)=>  value *2)

// // function functionName (input){

// //   return 1

// // }   class  huuchin hel

// // this ene gol yalgaa

// // const functionName = (input) => {

// //   return 1

// // } arrow function

// // console.log(num);

// // console.log(newArray);

// // // console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

// // let stringNewArray =  num.map((value )=>{ return value.toString()})

// // console.log('====================================');

// // console.log(stringNewArray);

// // console.log('====================================');

// // // // console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]
// // let names = ["john", "JACOB", "jinGleHeimer", "schmidt"]
// // let newNames = names.map((value)=>{ return value[0].toUpperCase()+ value.slice(1).toLowerCase()})
// // console.log('====================================');
// // console.log(newNames);
// // console.log('====================================');

// // FILTER
// const names = ["daria", "bold", 'gochigsumlai', "baldanpurev"]

// //                           condition zaaval true false

// let newValues = names.filter((value)=> value[0] == "b" )

// // console.log('====================================');

// // console.log(newValues);

// // console.log('====================================');

// const nums = [4,56,789,99876543,243313]

// let plusedValues = nums.filter((value)=>{

// let newVal = value +  2

// return newVal <  50

// })

// // console.log('====================================');

// // console.log(plusedValues);

// // console.log('====================================');

// // REDUCE

// let combinationOfNum = [3,4,5,6]

// let result = combinationOfNum.reduce((total, value )=> total -= value)

// console.log('====================================');

// console.log(result);

// console.log('====================================');

// const  data = [

//     {

//         name: "Angelina Jolie",

//         age: 80

//     },

//     {

//         name: "Eric Jones",

//         age: 2

//     },

//     {

//         name: "Paris Hilton",

//         age: 5

//     },

//     {

//         name: "Kayne West",

//         age: 16

//     },

//     {

//         name: "Bob Ziroll",

//         age: 100

//     }

// ]

// // ["Angelina Jolie can go to The Matrix",

// // "Eric Jones is under age!!",

// // "Paris Hilton is under age!!",

// // "Kayne West is under age!!",

// // "Bob Ziroll can go to The Matrix"]

// // let newString = data.map((value)=> {

// //   if(value.age>18){

// //     return `${value.name} can go to The Matrix`

// //   }else {

// //     return `${value.name} is under age!!`

// //   }

// // })

// // console.log(newString);

// // see more

// // Reply
=======
function averageWords(originalFlavors){
  let wordCount = originalFlavors.map(item=> item.split(" ").length);
  console.log(originalFlavors,wordCount);

let totalWords = wordCount.reduce((sum,count)=>sum+count,0);
console.log( `originalFlavors array dah niit ugin too;`,totalWords)
return totalWords/originalFlavors.length;}
console.log(averageWords(originalFlavors))

//includes ashiglan
let chocolateFlavors=originalFlavors.filter(flavor=>flavor.toLowerCase().includes("chocolate"))
console.log(chocolateFlavors);

//chocolate filter ashiglahgui hevlehed
for(i = 0; i < originalFlavors.length;i++){if(originalFlavors[i].toLowerCase().includes("chocolate"))
 { console.log(originalFlavors[i]);
 }
}
//secondpart
// ==== ADVANCED Array Methods ====
 
// // Given this zoo data from around the United States, follow the instructions below.  Use the specific array methods in the requests below to solve the problems.
 
// const zooAnimals = [
//   {
//     animal_name: "Jackal, asiatic",
//     population: 5,
//     scientific_name: "Canis aureus",
//     state: "Kentucky",
//   },
//   {
//     animal_name: "Screamer, southern",
//     population: 1,
//     scientific_name: "Chauna torquata",
//     state: "Alabama",
//   },
//   {
//     animal_name: "White spoonbill",
//     population: 8,
//     scientific_name: "Platalea leucordia",
//     state: "Georgia",
//   },
//   {
//     animal_name: "White-cheeked pintail",
//     population: 1,
//     scientific_name: "Anas bahamensis",
//     state: "Oregon",
//   },
//   {
//     animal_name: "Black-backed jackal",
//     population: 2,
//     scientific_name: "Canis mesomelas",
//     state: "Washington",
//   },
//   {
//     animal_name: "Brolga crane",
//     population: 9,
//     scientific_name: "Grus rubicundus",
//     state: "New Mexico",
//   },
//   {
//     animal_name: "Common melba finch",
//     population: 5,
//     scientific_name: "Pytilia melba",
//     state: "Pennsylvania",
//   },
//   {
//     animal_name: "Pampa gray fox",
//     population: 10,
//     scientific_name: "Pseudalopex gymnocercus",
//     state: "Connecticut",
//   },
//   {
//     animal_name: "Hawk-eagle, crowned",
//     population: 10,
//     scientific_name: "Spizaetus coronatus",
//     state: "Florida",
//   },
//   {
//     animal_name: "Australian pelican",
//     population: 5,
//     scientific_name: "Pelecanus conspicillatus",
//     state: "West Virginia",
//   },
// ];
 
// //  Request 1: .forEach()
// // The zoos want to display both the scientific name and the animal name in front of the habitats.
// // Populate the displayNames array with only the animal_name and scientific_name of each animal.
// // displayNames will be an array of strings, and each string should follow this
// // pattern: "Name: Jackal, asiatic, Scientific: Canis aureus."
 
// function displayNames(array) {
//   array.forEach(function (element) {
//     console.log(
//       `name: ${element.animal_name}, scientific: ${element.scientific_name}`
//     );
//   });
// }
 
// console.log(displayNames(zooAnimals));
 
// /* Request 2: .map()
// The zoos need a list of all their animal's names (animal_name only) converted to lower case. Using map, create a new array of strings named lowCaseAnimalNames, each string following this pattern: "jackal, asiatic". Log the resut.
// */
 
// /* Request 3: .filter()
// The zoos are concerned about animals with a lower population count. Using filter, create a new array of objects called lowPopulationAnimals which contains only the animals with a population less than 5.
// */
 
// /* Request 4: .reduce()
// The zoos need to know their total animal population across the United States. Find the total population from all the zoos using the .reduce() method. Remember the reduce method takes two arguments: a callback (which itself takes two args), and an initial value for the count.
// */
 
// // ==== Callbacks ====
 
// /* Step 1: Create a higher-order function
// * Create a higher-order function named consume with 3 parameters: a, b and cb
// * The first two parameters can take any argument (we can pass any value as argument)
// * The last parameter accepts a callback
// * The consume function should return the invocation of cb, passing a and b into cb as arguments
 
 
// /* Step 2: Create several functions to callback with consume();
// * Create a function named add that returns the sum of two numbers
// * Create a function named multiply that returns the product of two numbers
// * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
// */
 
// /* Step 3: Check your work by un-commenting the following calls to consume(): */
// // 4
// // 160 // Hello Mary Poppins, nice to meet you!
 
// /*
 
// */
 
// ///////////////Menu Items (MVP)///////////////////
 
// const latte = { name: "Cafe Latte", price: 4, category: "Drinks" };
// const burger = { name: "Burger", price: 18, category: "Lunch" };
// const breakfastBurrito = {
//   name: "Breakfast Burrito",
//   price: 16,
//   category: "Breakfast",
// };
 
// /* Task 1a: write a function to return more menu items with the same format as the items above. */
 
// function createMenuItem(name, cost, category) {
//   /* Code here */
// }
 
// /* Task 1b: use your function to create 3 more menu items. You may add any items to the menu that you'd like */
 
// /* Task 2: You're having a lunch special! 25% off for teachers and students, 10% off for everyone else. Add a method to your burger object that automatically calculates price given a string as a parameter.
// Your method should accept:
// (1) A string (teacher, student, or public)
// and should return a number.
// For example, burger.discount("teacher") would return 13.5 and burger.discount("public") would return 16.2*/
 
// ///////////////Reviews (MVP)///////////////////
 
// const reviews = [
//   {
//     name: "Daniela",
//     rating: 5,
//     feedback: "Beautiful atmosphere and wonderful vegan options!",
//   },
//   {
//     name: "Jack",
//     rating: 3,
//     feedback:
//       "A little too hipster for my taste, but the burger was decent, if overpriced",
//   },
//   { name: "Miranda", rating: 4, feedback: "fun trivia and cool vibes" },
//   {
//     name: "Wen",
//     rating: 4.5,
//     feedback:
//       "I don't leave my house often, but when I do, it's for this place. Highly reccomend.",
//   },
//   {
//     name: "Brett",
//     rating: 3,
//     feedback:
//       "great selection of snacks and a nice cafe area to get work done during the day.",
//   },
//   {
//     name: "Julius",
//     rating: 2,
//     feedback:
//       "I was largely unimpressed by this venue. Nothing special on the menu and too expensive. The atmosphere is polarizing, and not for me, but I think some would like it.",
//   },
//   {
//     name: "Lauren",
//     rating: 4,
//     feedback:
//       "Absolutely love that they have karaoke Fridays! Food and drink selection is okay.",
//   },
//   { name: "Reyna", rating: 3.5, feedback: "" },
// ];
 
// /* Task 3: Console.log just Julius' feedback */
 
// /* Task 4: Add a new rating with your (fictitious) opinions of the restaurant in the same format as the reviews above. */
 
// /* Task 5: Add the following feedback to Reyna's rating - "this place is chill with really cool people, great for getting work done on weekdays"
// /*  Task 6: Write a function to return a review based on the index of the review in the array.
// Your function should take two arguments:
// (1) an array which holds all of the reviews
// (2) a number which is the desired index in the array.
// and should return a string in the format `{name} gave the restaurant a {rating}, and their feedback was: {feedback}`
// *
// * For example, if getReviewByIndex is invoked with reviews and the number 0
// * it will return `Daniela gave the restaurant a 5 star review and their feedback was: Beautiful atmosphere and wonderful vegan options!`
// */
// function getReviewByIndex(reviews, index) {
//   /* code here */
// }
 
// /* Exercise 12
 
// Create the use object and the object should have following key
// firstName
// lastName
// currentLocation
// favoriteSongs
// age
 
// 1. console log 'hello user's firstname and Lastname'
// 2.How's the weather in 'currentLocation'
// 3. console log user's favorite songs
 
// /* STRETCH 3:  This challenge is not related to the data above!
// Write a function called carMarker
// Your function should accept:
// (1) a single odometer argument (a number)
// and return an object.
// The returned object should have the following characteristics:
//      it has an `odometer` property that contains the argument passed in.
//      it has a `drive` method that takes a distance as its argument, and
//          (1) causes the odometer in the object to be increased by the distance,
//          (2) returns the updated value of the `odometer`.
// */
 
// function carMaker(/* code here */) {
//   /* code here */
// }
 
// /*
//   To get started:
//   1. Remove the lines involving the removeThisToStart variable, so that the
//      program doesn't exit early.
//   2. Implement userCanAffordSofa
// */
 
// // Exercise 13
 
// let superChimpOne = {
//   name: "Chad",
//   species: "Chimpanzee",
//   mass: 9,
//   age: 6,
//   astronautID: 1,
//   move: move(),
// };
// let salamander = {
//   name: "Lacey",
//   species: "Axolotl Salamander",
//   mass: 0.1,
//   age: 5,
//   astronautID: 10,
//   move: move(),
// };
// let animal1 = {
//   name: "Brad",
//   species: "Chimpanzee",
//   mass: 11,
//   age: 6,
//   astronautID: 5,
//   move: move(),
// };
// let animal2 = {
//   name: "Leroy",
//   species: "Beagle",
//   mass: 14,
//   age: 5,
//   astronautID: 7,
//   move: move(),
// };
// let animal3 = {
//   name: "Almina",
//   species: "Tardigrade",
//   mass: 0.0000000001,
//   age: 1,
//   astronautID: 3,
//   move: move(),
// };
// function move() {
//   return Math.round(Math.random() * 10);
// }
// // After you have created the other object literals, add the astronautID property to each one.
// //Create an array to hold the animal objects.
 
// // Print out the relevant information about each animal.
// // return `${name} is a ${species}. They are ${age} years old and ${mass} kilograms. Their ID is ${astronautID}.`;
// function crewReports(animal) {}
 
// // Exercise 14
 
// var movieDatabase = {
//   title: "Pulp Fiction",
//   duration: 120,
//   stars: ["Bruce Willis", "Uma Thurman"],
// };
// write the function to return Movie name and duration and start
 
// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// const recipe = {
//   title: "Mole",
//   servings: 2,
//   ingredients: ["cumin", "cinnamon", "cocoa"],
// };
// console.log title of the recipe
// console.log 'Servings: recipe servings'
//console.log the ingredients one by one
 
// //Task2
 
// let programming = {
//   languages: ["JavaScript", "Python", "Ruby"],
//   isChallenging: true,
//   isRewarding: true,
//   difficulty: 8,
//   jokes:
//     "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
// };
 
// Write the command to add the language "Go" to the end of the languages array.
// Change the difficulty to the value of 7.
// Using the delete keyword, write the command to remove the jokes key from the programming object.
// Write the command to add a new key called isFun and a value of true to the programming object.
// Using a loop, iterate through the languages array and console.log all of the languages.
// Using a loop, console.log all of the keys in the programming object.
// Using a loop, console.log all of the values in the programming object.
 
// /Menu Items (MVP)///////////////////
 
// const latte = {
//   name: "Cafe Latte",
//   price: 4,
//   category: "Drinks",
// };
 
// const burger = { name: "Burger", price: 18, category: "Lunch" };
// const breakfastBurrito = {
//   name: "Breakfast Burrito",
//   price: 16,
//   category: "Breakfast",
// };
 
// /* Task 1a: write a function to return more menu items with the same format as the items above. */
 
// console.log(createMenuItem("Buuz", 45, "Breakfast"));
// console.log(createMenuItem("Buuz", 45, "Breakfast"));
// console.log(createMenuItem("Buuz", 45, "Breakfast"));
// console.log(createMenuItem("Buuz", 45, "Breakfast"));
// console.log(createMenuItem("Coffee", 5, "Dinner"));
// /* Task 1b: use your function to create 3 more menu items. You may add any items to the menu that you'd like */
 
// /* Task 2: You're having a lunch special! 25% off for teachers and students, 10% off for everyone else. Add a method to your burger object that automatically calculates price given a string as a parameter.
 
// console.log(burger.discount("student"));
// console.log(burger.discount("public"));
// c;
>>>>>>> Stashed changes
