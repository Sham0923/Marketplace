// Getting the Buttons \\

var appleButton = document.getElementById("Apple");
var bananaButton = document.getElementById("Banana");
var cherryButton = document.getElementById("Cherry");
var dragonButton = document.getElementById("Dragonfruit");
var elderButton = document.getElementById("Elderberry");

var buyButton = document.getElementById("Buy-Button");

// Handling Item Class \\

class Item {
	constructor(Item, Price) {
		this.Item = Item;
		this.Price = Price;
	}
}

// Handling the Items \\

var appleItem = new Item("Apple", 30);
var bananaItem = new Item("Banana", 10);
var cherryItem = new Item("Cherry", 15);
var dragonItem = new Item("Dragonfruit", 5);
var elderItem = new Item("Elderberry", 100);


// Creating a Dictionary of Items \\

var dictionaryOfItems = {

	Apple: appleItem,
	Banana: bananaItem,
	Cherry: cherryItem,
	Dragonfruit: dragonItem,
	Elderberry: elderItem
}

// User Variables \\

var Total = 0; 
var totalOutput = document.getElementById("Total-Output");

// Setting Up Functions \\

function Add() {
	if (Total >= 500) {
		alert("You are too broke too be spending this much, leave with what you have now!");
	} else {
		var itemString = this.textContent;
		var splitString = itemString.split(":"); // Splitting the text after ":"
		var itemString = splitString[0]; // e.g. "Apple: $10" > "Apple"
		var itemChosen = dictionaryOfItems[itemString]; // Getting the Item from the dictionary
		Total += itemChosen.Price; // Adding the price to the total amount of money needed
		totalOutput.textContent = "$" + Total;
	}
}

function Buy() {
	Total = 0;
	totalOutput.textContent = "$" + Total;
}

// Checking for Button Presses \\

var buttonsToPress = [appleButton, bananaButton, cherryButton, dragonButton, elderButton]; // Making an array so I don't have to copy-paste

for (var i = 0; i < buttonsToPress.length; i++) {
	buttonsToPress[i].addEventListener("click", Add);
}

buyButton.addEventListener("click", Buy);