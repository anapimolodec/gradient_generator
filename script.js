var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var to_color = document.getElementById("body_id");
var l_color = document.querySelector(".Lcolor");
var r_color = document.querySelector(".Rcolor");
var btn = document.querySelector("button");

function colorBack() {
	console.log(color1.value);
	console.log(color2.value);
	console.log(to_color);
	to_color.style.background = "linear-gradient(to right,"
								+ color1.value
								+"," 
								+color2.value 
								+")";

	l_color.innerHTML = "Left Color: " + color1.value;
	r_color.innerHTML = "Right Color: "+ color2.value;
}

function getRnd(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

color1.addEventListener("input",colorBack);
color2.addEventListener("input",colorBack);


function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}


function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function randomize() {
	var a = getRnd(0,255);
	return a;
}

function getRndHex() {
	return rgbToHex(randomize(),randomize(),randomize());
}


function btn_color() {
	var col1 = getRndHex();
	var col2 = getRndHex();
	to_color.style.background = "linear-gradient(to right,"
								+ col1
								+"," 
								+col2
								+")";

	l_color.innerHTML = "Left Color: " + col1;
	r_color.innerHTML = "Right Color: "+ col2;
	color1.value = col1;
	color2.value = col2;
}




btn.addEventListener("click", btn_color);


