$(document).ready(function(){
	let canvas = document.getElementById("canvas");
	let ctx = canvas.getContext("2d");

	let gameStart = false;

	let keyPressed = null;

	let player = {
		width : 100,
		height : 12.5,
		x : 250,
		y : 385
	}

	let ball = {
		x: player.x + player.width / 2,
		y: player.y - 10,
		size: 10, 
		speedx: 5,
		speedy: -5,
		speed: 10
	}

	function update(){
		//draw background
		ctx.fillStyle = "white";
		ctx.fillRect(0, 0, 600, 400);

		//draw player
		ctx.fillStyle = "#000000";
		ctx.fillRect(player.x, player.y, player.width, player.height);

		//draw ball
		ctx.beginPath();
		ctx.arc(ball.x, ball.y, ball.size, 0, 2 * Math.PI);
		ctx.stroke();

		if(keyPressed == 37){ //left
			player.x -= 10;
		}
		if(keyPressed == 39){ //left
			player.x += 10;
		}
		if(keyPressed == 32){
			gameStart = true;
		}

		if(gameStart){
			ball.x += ball.speedx;
			ball.y += ball.speedy;
		}

		if(ball.x+ball.size > 600 || ball.x < 0){
			ball.speedx *= -1;
		}
		if(ball.y+ball.size > 400 || ball.y < 0){
			ball.speedy *= -1;
		}
		if(ball.y + ball.size > player.y && ball.x + ball.size / 2 > player.x && ball.x + ball.size / 2 < player.x + player.width){
			ball.speedy *= -1;
		}
	}

	$(document).on("keydown", function(e){
		keyPressed = e.which;
		console.log(e.which);
	});

	$(document).on("keyup", function(){
		keyPressed = null;
	});

	function main(){
		let loop = function(){
			update();
			window.requestAnimationFrame(loop, canvas);
		}
		window.requestAnimationFrame(loop, canvas);
	}

	main();   
});