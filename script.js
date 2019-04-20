var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function addButton(){
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete"));
	return btn;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(addButton());
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function strikeFunction(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('done');
  }
}

function deleteList(event){
	if (event.target.tagName === "BUTTON") {
		event.target.parentNode.remove();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener('click', strikeFunction);
ul.addEventListener('click', deleteList);