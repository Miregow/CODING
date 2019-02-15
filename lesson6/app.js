console.log("yeeeeeahhboiiii")

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d")

var WIDTH = 900;
var HEIGHT = 600;
var x, y, s;

var mx, my;

var ghostX, ghostY, ghostS

var circleCollision = false;

var enemyX, enemyY, enemyS

var enemyCollision = false;

var score = 0;

function drawPacman(){
	var pacman = new Image();
	pacman.src = "pacmannn.png";
	ctx.drawImage(pacman, x, y, s, s);
	}
function drawGhost(){
	var ghost = new Image();
	ghost.src = "IMBLUE.png";
	ctx.drawImage(ghost, ghostX, ghostY, ghostS, ghostS);
	}
	function drawEnemy(){
	var enemy = new Image();
	enemy.src = "ghost.png";
	ctx.drawImage(enemy, enemyX, enemyY, enemyS, enemyS);
	}

function clear(){
	ctx.clearRect(0,0,WIDTH,HEIGHT);
}

function init(){
	x = 450;
	y = 300;
	s = 50;
	mx = 0;
	my = 0;
 ghostS = 50;
 ghostX = Math.floor(Math.random()*(WIDTH - ghostS));
 ghostY = Math.floor(Math.random()*(HEIGHT - ghostS));
 enemyS = 50;
 enemyX = Math.floor(Math.random()*(WIDTH - enemyS));
 enemyY = Math.floor(Math.random()*(HEIGHT - enemyS));
	window.onkeydown = keydownControl;
	return setInterval(draw,10);
}

function keydownControl(e){
 if(e.keyCode == 87){
 	mx= 0;
 	my= -2.5;
 }
 if(e.keyCode == 65){
 	mx= -2.5;
 	my= 0;
 }
 if(e.keyCode == 83){
 	mx= 0;
 	my= 2.5;
 }

 if(e.keyCode == 68){
 	mx= 2.5;
 	my= 0;
 }
}
function draw(){
clear();
drawPacman();
drawGhost();
drawEnemy();
followPacman();
x += mx;
y += my;

if (x+mx> WIDTH - s || x + mx < 0){
	mx = 0;
}
if (y+my> HEIGHT - s || y + my < 0){
	my = 0;
}
collisionCheck();
collisionHandle();
}

function collisionCheck(){
	if((x+s>= ghostX)&&(x<= ghostX + ghostS)&&
		(y+s >= ghostY) &&(y<=ghostY + ghostY)){
		circleCollision = true;
	}else{
		circleCollision = false;
	}
}

function collisionHandle(){
 if(circleCollision){
 	score += 1;
 	document.getElementById("score").innerHTML = "Score:" +
score;
ghostX = Math.floor(Math.random()*(WIDTH - ghostS));
ghostY = Math.floor(Math.random()*(HEIGHT - ghostS));
 }
}

function followPacman(){
	if (enemyX < x){
		enemyX += 1.5
	}
	if (enemyX >x){
		enemyX -= 1.5
	}
	if (enemyY < y){
		enemyY += 1.5
	}
	if (enemyY >y){
		enemyY -= 1.5
	}
}
init();