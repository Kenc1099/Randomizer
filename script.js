var names = [];





document.getElementById("display").innerHTML = names;

function addnames(){

var newnames= prompt("Please add a name to the list",);

names.push(newnames);

names.sort();

return document.getElementById("display").innerHTML = names.join(", ")



}

function randomize(){
	var rand = names.splice([Math.floor(Math.random() * names.length)], 1);

	

	return document.getElementById("display2").innerHTML = rand;

    
}
function refresh(){document.getElementById("display").innerHTML = names;}


function randomize2(){
	var rand = names.splice([Math.floor(Math.random() * names.length)], 2);

	

	return document.getElementById("display2").innerHTML = rand;

    
}


