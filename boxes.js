/*
	JavaScript File for Boxes.html

*/

// Here's the box.
var protoBox = document.getElementById("myBox");
var myBox = protoBox.getContext("2d");
var list = null;
myBox.rect(20,20,20,20);
myBox.stroke();

// Here's a representation of the linked list:
var head = document.getElementById("linkedList");

var List = function (start) {
	this.data = start;
	this.next = null;
	//head.innerHTML += this.data;
};

List.prototype.display = function() {
	head.innerHTML += this.data;
	if (this.next != null) {
		head.innerHTML += " -> ";
		this.next.display()
	}
};

List.prototype.addItem = function(inputData) {
	if (this.next == null) {
		this.next = new List(inputData);
	} else {
		this.next.addItem(inputData);
	}

}


function add_item() {
	head.innerHTML = "";
	var input = document.getElementById("myData").value;
	if (list == null) {
		list = new List(input);
	} else {
		list.addItem(input);
	}
	//var list = new List(input);
	//list.next = new List("Finn");
	//head.innerHTML += list.data;
	list.display();

}


