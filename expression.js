var a = 6 
var b = 5

console.log(a == b) // false
console.log(a != b) // true
console.log(a > b) // true
console.log(a < b) // false
console.log(a >= b) // true
console.log(a <= b) //false
console.log(a != 3 || a >= 7 || a > 10) // bireui true bolgany jetkilikti
console.log(a == 6 && b > 3) // barligi true bolu kerek

let isOffRoad = false;
// ! emes
console.log(!isOffRoad); // true

let isOffRoad1 = true;
console.log(!isOffRoad1); //false

var age = 20;
var hasTicket = true;
var isVIP = false;

if ((age >= 18 && hasTicket) || isVIP) {
    console.log("Siz kire alasyz");
} else {
    console.log("Bolmaidy");
}

var name = "Matiz";
var age = 2010;
var engine = 0.5;
var color = "red";

if (age >= 2013 && color =="red") {
    console.log("Alamyn");
} else if (engine == 0.8) {
    console.log("Meili, alamyn");
} else {
    console.log("almaimyn");
}

var age = 30

if(age < 45 && age > 12) {
    console.log("true");
} else {
    console.log("false");
}

var n = 21;

if((n <= 50 && n >= 20)|| n % 2 == 0) {
    console.log("true")
} else {
    console.log("false")
}

var a1 = 15;
var b1 = 15;

console.log((a1 + b1 * 2) > 30 && (a1 + b1 * 2) < 40 && a1 == b1)