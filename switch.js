var name = prompt("Enter your name")
var burger = prompt("Order the burger you want" + '\n'+ "A)Chicken" + '\n' + "B)Beef" + '\n' + "C)Without meat" + '\n' + "D)Without Burger")
var order = "";

switch (burger) {
    case "A":
        order += "Chicken"
        break;
    case "B":
        order += "Beef"
        break;
    case "C":
        order += "Without meat"
        break;
    case "D":
        order += "Without burger"
        break;
    default:
        alert("Choose one option")
}

var drink = prompt("Order the drink you want" + '\n' + "A)Coca-cola" + '\n' + "B)Fanta"  + '\n' + "C)Sprite" + '\n' + "D)Pepsi") 

switch (drink) {
    case "A":
        order += "Coca-cola"
        break;
    case "B":
        order += "Fanta"
        break;
    case "C":
        order += "Sprite"
        break;
    case "D":
        order += "Pepsi"
        break;
    default:
        alert("Choose one option")
}

alert (name + '\n' + order + '\n' + "06.11.2024")

