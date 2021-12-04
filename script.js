var css = document.getElementById("rgb");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var generate = document.getElementById("Generate");
let css2 = document.getElementById("hex");
function setGradientAndInput(){
	setInput();
	setGradient();
};

function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
	  color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
  }
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
	css2.textContent =  rgbTransformToHex(rgbArrayGet(body.style.background)) + ";";
}
function setInput(){
	color1.setAttribute("value",getRandomColor());
	color2.setAttribute("value",getRandomColor());
};
function setInitialInput(){
	color1.setAttribute("value","#FF0000");
	color2.setAttribute("value","#FFF000");
	css.textContent = body.style.background + ";";
	setGradient();
	css2.textContent =  rgbTransformToHex(rgbArrayGet(body.style.background)) + ";";
};
const rgbArrayGet=rgb=>{
	let rgbArray = body.style.background.slice(26,body.style.background.length-1);
	rgbArray=rgbArray.split(",");
	rgb=[rgbArray[0]+","+rgbArray[1]+","+rgbArray[2],rgbArray[3]+","+rgbArray[4]+","+rgbArray[5]];
	return rgb;
}
const rgbTransformToHex = rgb=>
{
	return	rgbaToHEX(rgb[0]) + " "+ rgbaToHEX(rgb[1]);
}
setInitialInput();
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
generate.addEventListener("click", setGradientAndInput);
