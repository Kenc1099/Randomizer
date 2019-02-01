var names = [];






document.getElementById("display").innerHTML = names;

function addnames(){

var newnames= prompt("Please add a name to the list",);

names.push(newnames);

names.sort();

return document.getElementById("display").innerHTML = names.join(", ")

randomize();

console.log("newnames")

}

function randomize(){
	var rand = names[Math.floor(Math.random() * names.length)];

	return document.getElementById("display2").innerHTML = rand

}



