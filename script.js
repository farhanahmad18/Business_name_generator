/* Create a business name generator by combining list of adjectives, Shop name and other words

Adjectives:
Crazy
Amazing
Fire


Shop name:
Engine
Food
Garments

Another Words
Bros
Limited
Hub

*/

let rndm = Math.random();
let first, second, third;

//0, 0.33, 0.66, 1

if (rndm < 0.33) {
  first = "Crazy";
} else if (rndm < 0.66 && rndm > 0.33) {
  first = "Amazing";
} else {
  first = "Fire";
}

rndm = Math.random();
if (rndm < 0.33) {
  second = "Engine";
} else if (rndm < 0.66 && rndm > 0.33) {
  second = "Food";
} else {
  second = "Garments";
}

rndm = Math.random();
if (rndm < 0.33) {
  third = "Bros";
} else if (rndm < 0.66 && rndm > 0.33) {
  third = "Limited";
} else {
  third = "Hub";
}

console.log(`${first} ${second} ${third}`);
