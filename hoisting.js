// 1. Original code:
console.log(hello);
var hello = "world";
// Prediccion:
undefined;
// Result:
undefined;
// Interpreter:
var hello;
console.log(hello);
hello = "world";


// 2. Original code:
var needle = "haystack";
test();
function test() {
  var needle = "magnet";
  console.log(needle);
}
// Prediction:
"magnet"
// Result:
"magnet"
// Interpreter:
function test() {
  var needle = "magnet";
  console.log(needle); // logs 'magnet' in console
}
test();
var needle;
needle = "haystack";


// 3. Original code:
var brendan = "super cool";
function print() {
  brendan = "only okay";
  console.log(brendan);
}
console.log(brendan);
// Prediction:
"super cool"
// Result:
"super cool"
// Interpreter:
function print() {
  brendan = "only okay";
  console.log(brendan);
}
var brendan;
brendan = "super cool";
console.log(brendan); // prints 'super cool' in console


// 4. Original code:
var food = "chicken";
console.log(food);
eat();
function eat() {
  food = "half-chicken";
  console.log(food);
  var food = "gone";
}
// Prediction:
"chicken"
"half-chicken"
// Result:
"chicken";
"half-chicken";
// Interpreter:
var food;
function eat() {
  food = "half-chicken";
  console.log(food);
  var food = "gone";
}
food = "chicken";
console.log(food); // prints 'chicken'
eat(); // prints 'half-chicken'


// 5. Original code:
mean();
console.log(food);
var mean = function () {
  food = "chicken";
  console.log(food);
  var food = "fish";
  console.log(food);
};
console.log(food);
// Prediction:
// Error: can't call function mean()
// Result:
// mean is not a function
// Interpreter:
var mean;
mean(); // error mean is undefined
mean = function () {
  food = "chicken";
  console.log(food);
  var food = "fish";
  console.log(food);
}
console.log(food); // doesn't run anymore


// 6. Original code:
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
  genre = "rock";
  console.log(genre);
  var genre = "r&b";
  console.log(genre);
}
console.log(genre);
// Prediction:
undefined
"rock"
"r&b"
"disco"
// Result:
undefined
"rock"
"r&b"
"disco"
// Interpreter:
var genre;
function rewind() {
  var genre;
  genre = "rock";
  console.log(genre);
  genre = "r&b";
  console.log(genre);
}
console.log(genre) // print in console: undefined
genre = "disco";
rewind() // print in console: "rock" and "r&b"
console.log(genre); // print in console: "disco"


// 7. Original code:
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
  dojo = "seattle";
  console.log(dojo);
  var dojo = "burbank";
  console.log(dojo);
}
console.log(dojo);
// Prediction:
"san jose"
"seattle"
"burbank"
"san jose"
// Result:
"san jose"
"seattle"
"burbank"
"san jose"
// Interpreter:
var dojo;
function learn() {
  var dojo;
  dojo = "seattle";
  console.log(dojo);
  dojo = "burbank";
  console.log(dojo);
}
dojo = "san jose"; 
console.log(dojo); // logs: "san jose"
learn();  // logs: seattle / logs: burbank
console.log(dojo) // logs: "san jose"


// 8. Original code:
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
  const dojo = {};
  dojo.name = name;
  dojo.students = students;
  if (dojo.students > 50) {
    dojo.hiring = true;
  } else if (dojo.students <= 0) {
    dojo = "closed for now";
  }
  return dojo;
}
// Prediction:
// {name: "Chicago"; students: 65, hiring: true}
// {"closed for now"}
// Result:
// { name: 'Chicago' ,students: 65, hiring: true }
// Error: assignment to constant variable
// Interpreter:
function makeDojo(name, students) {
  const dojo = {};
  dojo.name = name;
  dojo.students = students;
  if (dojo.students > 50) {
    dojo.hiring = true;
  } else if ( dojo.students <= 0) {
    dojo = "closed for now"
  }
  return dojo
}
console.log(makeDojo("Chicago", 65)) // dojo = { name = "Chicago", students = 65, hiring: true }
console.log(makeDojo("Berkeley", 0)) // dojo.name = "Berkeley", [dojo = "closed for now"] <= can't reassign constant variable

