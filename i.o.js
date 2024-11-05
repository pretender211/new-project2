alert("Hello everyone")
let user = {
    name: prompt("Enter your name"),
    surname: prompt("Enter your surname"),
    age: prompt("Enter your age"),
    address: prompt("Enter your address")
}
console.log("Your information: ", user);
let num = prompt("Ener your name");
if(num % 2 == 0) {
    alert("NUmber is jup");
} else {
    alert("Number is taq");
}

let num1 = Number(prompt("Enter any number"))
let num2 = Number(prompt("Enter second number"))
alert(num1 + num2);

let yourBirth = prompt("Enter your birthday")
alert(2024 - Number(yourBirth))

var birthYear = Number(prompt("Enter your year of birth"))

if (isNaN(birthYear)) {
    alert("duris san engiz");
} else {
    alert(2024 - birthYear);
}

var question1 = prompt("Кто такой Джефф Безос?" + "\n" + A)bezos )
var answer1 = "мультимиллиардер"

var question2 = prompt("Кем является Дональд Трамп")
var answer2 = "президент США"

var question3 = prompt("Чем нужно поливать цветы")
var answer3 = "водой"

var question4 = prompt("Кто нынешний президент Казахстана")
var answer4 = "Касым Жомарт Токаев"
var score = 0;

if(question1 == answer1) {
    score++;
}
if(question2 == answer2) {
    score++;
}
if(question3 == answer3) {
    score++;
}
if(question4 == answer4) {
    score++;
}

alert("Вы " + " набрали " + score + " баллов")