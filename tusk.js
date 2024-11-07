var name = prompt("Enter your name")
var menuBurg = prompt("Order the burger you want" + '\n'+ "A)Chicken" + '\n' + "B)Beef" + '\n' + "C)Without meat" + '\n' + "D)Without Burger")
var Order = "";

if (menuBurg == "A" || menuBurg == "a") {
    Order += "Chicken" + '\n'
} else if (menuBurg == "B" || menuBurg == "b") {
    Order += "Beef" + '\n'
} else if (menuBurg == "C" || menuBurg == "c") {
    Order += "Without meat" + '\n'
} else if (menuBurg == "D" || menuBurg == "d") {
    Order += "Without burger" + '\n'
} 


var menuSauce = prompt("Order the sauce you want" + '\n' + "A)Ketchup" + '\n' + "B)BBQ" + '\n' + "C)Garcica" + '\n' + "D)Cheese sauce")

if (menuSauce == "A" || menuSauce == "a") {
    Order += "Ketchup" + '\n'
} else if (menuSauce == "B" || menuSauce == "b") {
    Order += "BBQ" + '\n'
} else if (menuSauce == "C" || menuSauce == "c") {
    Order += "Garcica" + '\n'
} else if (menuSauce == "D" || menuSauce == "d") {
    Order += "Cheese sauce" + '\n'
} 

var menuDrink = prompt("Order the drink you want" + '\n' + "A)Coca-cola" + '\n' + "B)Fanta"  + '\n' + "C)Sprite" + '\n' + "D)Pepsi") 

if (menuDrink == "A" || menuDrink == "a") {
    Order += "Coca-cola" + '\n'
} else if (menuDrink == "B" || menuDrink == "b") {
    Order += "Fanta" + '\n'
} else if (menuDrink == "C" || menuDrink == "c") {
    Order += "Sprite" + '\n'
} else if (menuDrink == "D" || menuDrink == "d") {
    Order += "Pepsi" + '\n'
} 

var menuItem = prompt("Order the item you want" + '\n' + "A)French-fries" + '\n' + "B)Naggets" + '\n' + "C)Strips" + '\n' + "D)Wings")

if (menuItem == "A" || menuItem == "a") {
    Order += "French-fries" + '\n'
} else if (menuItem == "B" || menuItem == "b") {
    Order += "Naggets" + '\n'
} else if (menuItem == "C" || menuItem == "c") {
    Order += "Strips" + '\n'
} else if (menuItem == "D" || menuItem == "d") {
    Order += "Wings" + '\n'
} 

alert (name + '\n' + Order + '\n' + "06.11.2024")
