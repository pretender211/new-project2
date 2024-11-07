alert("Welcome to the mini-quest!" + '\n' + "Your task is to find the secret treasure and defeat the monster!");
var name = prompt("Come up with a nickname for yourself");
var score = "";

var pathChoose = prompt("First choose where you want to go: right or left");
if (pathChoose == "right") {
    alert("Oops, you feel into a trap and died, try again!");
} else if (pathChoose == "left") {
    var pathLeft = prompt("Wow you found a diamond sword, do you want to get it?");
} else if (pathLeft == "yes") {
    alert("You got the diamond sword");
    score++;
} 

var attackMonsters = prompt("Monsters have attacked you, use the sword and defeat them!")
if (attackMonsters == "attack") {
    var defeatMonsters = prompt("You received iron armor, do you want to get it?")
    score++;
} else if (defeatMonsters == "yes") {
    alert("You have put on iron armor and replenished your health!")
    score++;
}

var townVillagers = prompt("There is a village ahead, do you want to go there?")
if (townVillagers == "yes") {
    var vilShop = prompt("You went to the village and saw an equipment store, do you want to buy something?")
} else if (vilShop == "yes") {
    var storeSomething = prompt("You can buy" + '\n' + "Crossbow" + "\n" + "Poison arrow" + '\n' + "Diamond axe")
} else if (vilShop == "no") {
    alert("You decided to ignore the store and moved on.")
} else if (storeSomething == "Crossbow") {
    alert("You bought a crossbow")
    score++;
} else if (storeSomething == "Poison arrow") {
    alert("You bought a poison arrow")
    score++;
} else if (storeSomething == "Diamond axe") {
    alert("You bought a diamond axe")
    score++;
}

var night = prompt("It's already night, do you want to spend the night?")
if (night == "yes") {
    alert("You spent the night in a Village and received the (First Night) achievement!")
    score++;
} else if (night == "no") {
    alert("You were attcked by monsters at night when you were sleepy and you died, try again!")
}

alert("You are very hungry, eat otherwise you'll die of hunger!")
var pathFood = prompt("You can eat" + '\n' + "1)Local diner" + '\n' + "2)Forest for food")
if (pathFood == 1) {
    alert("You have successfully eaten and received the (Hunger Relief) achievement")
    score++;
} else if (pathFood == 2) {
    alert("You couldn't eat enough in the forest and died of hunger, try again!")
}

var saveVillage = prompt("Monsters have attacked the village! Quickly protect them from them!" + '\n' + "1)Save the village" + '\n' + "2)Don't save the village")
if (saveVillage == 1) {
    alert("You have successfully saved the village and received a reward in the form of Diamond Armor!")
    score++;
    alert("You have received the achievement (Hero of the Village)")
    score++;
} else if (saveVillage == "2") {
    alert("You decided not to save the village and moved on")
}

var pathCemetry = prompt("You continued on your way and saw a cemetry in the distance!" + '\n' + "1)Go to the cemetry" + '\n' +"2)Don't go to the cemetry")
if (pathCemetry == 1) {
    alert("You went to the cemetry and suddenly the walking dead crawled out of their graves!" + '\n' + "Destroy them!")
} else if ( pathCemetry == 2) {
    alert("You are trapped by monsters and you die, try again!")
}

var destroyZombie = prompt("You have successfully destroyed the waalking dead and received a treasure map!" + '\n' + "Do you want to take it?" + '\n' + "1)Yes")
if (destroyZombie == 1) {
    var killDragon = prompt("You followed the map and came across a treasure cave, but there is a Fire Breathing Dragon there" + '\n' + "Kill the Dragon and get the treasure" + '\n' + "1)Kill Dragon")
} else if (killDragon == 1) {
    alert("You killed the dragon and got the treasure")
    score++;
    alert("You have received the achievement (Dragon slayer)")
    score++;
}

var kingMonsters = prompt("In treasure you see that next to the gold is the location of the King of the monsters" + '\n' + "Kill the King of the Monsters and free the lands from the hands of monsters" + '\n' + "1)Let's go")
if (kingMonsters == 1) {
    var cerberus = prompt("You went to the lair of the King of the Monsters and came across Cerberus" + '\n' + "1)Kill Cerberus")
} else if (cerberus == 1) {
    alert("You killed Cerberus and received the bonus damage effect")
    score++;
    alert("You have received the achievement (Monster Conqueror)")
    score++;
}

var lordDead = prompt("You went further and came across the Lord of the Dead" + '\n' + "1)Kill Lord of the Dead")
if (lordDead == 1) {
    alert("You killed the Lord of the Dead and received the fast regeneration effect")
    score++;
    alert("You have received the achievement (Master of the Dead")
    score++;
}

var endGame = prompt("Contiuning your journey you came across the King of the Monsters" + '\n' + "King of the Monsters says:" + '\n' + "You are a strong person! You defeated my strongest warriors and now we have finally met, over the past centuries there hasn't been a single person who could come here and show himself to me personally, YOU ARE VERY INTERESTING PERSON!!!" + '\n' + "1)fight")
if (endGame == 1) {
    alert("You defeated the King oof the Monsters and freed the lands from hands of monsters")
    score++;
    score++;
    alert("You have received the achievement (The Strongest)")
    score++;
    score++;
}

alert( name + '\n' + score + '\n' + "Start again")