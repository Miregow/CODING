console.log("yeeeeeahhboiiii")

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d")

var WIDTH = 600;
var HEIGHT = 500;

var x, y
var mx, my

var x1, y1;
var mx1, my1;
function init(){
	x = 450;
	y = 450;
	mx = 99;
	my = 99;
	x1 = 500;
	y1 = 300;
	mx1 = 20;
	my1= 20;
	return setInterval (draw,10);
}

function circle(x, y, r, color){
ctx.beginPath();
ctx.arc(x, y, r,0 ,6.28)
ctx.closePath();
ctx.fillStyle = color;
ctx.fill();
}

function clear(){
ctx.clearRect(0,0,WIDTH,HEIGHT);
}

function draw(){
	clear()
circle(x,y,50,"aqua")
y += my;
x += mx;

if (x < 15 || x > WIDTH - 15){
	mx = -mx;
}

	if (y < 15 || y > HEIGHT - 15){
	my = -my;

}
circle(x1,y1,50,"red")
y1 += my1;
x1 += mx1;

if (x1 < 15 || x1 > WIDTH - 15){
	mx1 = -mx1;
}

	if (y1 < 15 || y1 > HEIGHT - 15){
	my1 = -my1;

}
}

init();


