let hieght = 12;
let width = 10;
let area = hieght * width;

console.log(area);

let tem = 37;
let f = tem * 2 + 30;
console.log(`${tem}C is ${f}F`);

let c = (f - 30) / 2;
console.log(`${f}C is ${c}F`);

let hour = 5;
let second = hour * 3600;
console.log(`${hour} hours = ${second} Seconds`);

thingOne = "Hello";
thingTwo = "world";
console.log(thingOne + " " + thingTwo);

// let bill = 10.25 + 3.99 + 7.15, tip=0.15  , total= bill* tip;
var bill = 10.25;
bill = bill + 3.99 + 7.15;
var tip = 0.15,
  total = bill * tip;
console.log(total);
var adjective1 = "amazing";
var adjective2 = "fun";
var adjective3 = "entertaining";
let madLib = `The Intro to JavaScript course is  ${adjective1}. James and Julia are so  ${adjective2}. I cannot wait to work through the rest of this  ${adjective3} content!`;

console.log(madLib);

firstName = "Amwaj ";
interest = " Reading";
hobby = " Programming";
awesomeMessage = `
Hi, my name is ${firstName}. I love ${interest}. In my spare time, I like to ${hobby}.`;
console.log(awesomeMessage);
// -------------------------Lab2-------------------
console.log(
  "Lab 2 ------------------------------------------------------------"
);

var eatsPlants = false;
var eatsAnimals = true;
// let
// *   - "herbivore" if an animal eats plants
// *   - "carnivore" if an animal eats animals
// *   - "omnivore" if an animal eats plants and animals
// *   - undefined if an animal doesn't eat plants or animals
// console.log(eatsAnimals && eatsPlants );


let musicians = 4;
if (musicians <= 0) {
  console.log('not a group"');
} else if (musicians == 1) {
  console.log("solo");
} else if (musicians == 2) {
  console.log("duet");
} else if (musicians == 3) {
  console.log("trio");
} else if (musicians == 4) {
  console.log("quartet");
} else {
  console.log("this is a large group");
}

//  que 3
let room = "billiards room";
var suspect = "";
var weapon = "";
var solved = false;
if (room == "billiards room") {
  suspect = "Mrs. Sparr";
  solved = true;
  weapon = "pool stick";
} else if (room == " ballroom") {
  suspect = "Mr. Kalehoff";
  solved = true;
  weapon = "poison";
} else if (room == "dining room") {
  suspect = " Mr. Parkes";
  solved = true;
  weapon = "the knife";
}
if (solved) {
  console.log(`${suspect} did it in the ${room} with the ${weapon}!`);
}

//  Que 3
var balance = -325;
var checkBalance = true;
var isActive = true;
if (checkBalance) {
  console.log(` blance ${balance} , Is Active ${isActive}`);
} else {
  console.log(` Sorry Nothing Here !`);
}

// Qus 4
let flavor = "vanilla",
  vessel = "bowl",
  toppings = "sprinkles";
if (flavor == "vanilla" && vessel == "cone" && toppings == "sprinkles") {
  console.log(
    `I'd like two scoops of ${flavor} ice cream in a ${vessel} with ${toppings} .`
  );
} else if (flavor == "vanilla" && vessel == "cone" && toppings == "peanuts") {
  console.log(
    `I'd like two scoops of ${flavor} ice cream in a ${vessel} with ${toppings} .`
  );
} else if (flavor == "vanilla" && vessel == "bowl" && toppings == "sprinkles") {
  console.log(
    `I'd like two scoops of ${flavor} ice cream in a ${vessel} with ${toppings} .`
  );
} else if (flavor == "vanilla" && vessel == "bowl" && toppings == "peanuts") {
  console.log(
    `I'd like two scoops of ${flavor} ice cream in a ${vessel} with ${toppings} .`
  );
}
