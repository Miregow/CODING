var game = new Phaser.Game(800,600, Phaser.AUTO, '',
	{preload:preload, create:create, update:update});

var score = 0;
var lives = 3;

function preload (){
	game.load.image('sky','Assets/sky.png')
	game.load.image('star','Assets/star.png')
	game.load.image('aid','Assets/firstaid.png')
	game.load.image('diamond','Assets/diamond.png')
	game.load.image('platform','Assets/platform.png')

	game.load.spritesheet('dude','Assets/dude.png', 32, 48)
	game.load.spritesheet('baddie','Assets/baddie.png', 32, 32)
}

function create(){
	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.add.sprite(0,0,'sky')
	platforms = game.add.physicsGroup();
	platforms.enableBody = true;
	
	var platform = platforms.create(0,560,'platform');
	
	var ground = platforms.create(0,560,'platform');
	ground.scale.setTo(2,2);
	ground.body.immovable = true;
	
	var ledge1 = platforms.create(400,400, 'platform')
	ledge1.body.immovable = true;
	
	var ledge2 = platforms.create(-100,250, 'platform')
	ledge2.body.immovable = true;
	
	var style = {font: "bold 32px Arial", fill: '#fff'};
	
	scorelabel = game.add.text(300, 560, "Score:", style);
	scoretext = game.add.text (420,560,score,style);
	scorelabel.setShadow(3,3,'rgba(0,0,0,0.5)',2);
	scoretext.setShadow(3,3,'rgba(0,0,0,0.5)',2);
	liveslabel = game.add.text(10, 5, "Lives:", style);
	livestext = game.add.text (120,5,lives,style);
	liveslabel.setShadow(3,3,'rgba(0,0,0,0.5)',2);
	livestext.setShadow(3,3,'rgba(0,0,0,0.5)',2);

player= game.add.sprite(32, 300, 'dude');
	game.physics.arcade.enable(player)
	player.body.gravity.y = 250;
	player.body.bounce.y = 0.5;
	player.body.collideWorldBounds = true;
	player.animations.add('left', [0,1,2,3],12.5,true);
	player.animations.add('right', [5,6,7,8],12.5,true);
	

enemy1= game.add.sprite(760, 20, 'baddie');	
game.physics.arcade.enable(enemy1)
	enemy1.body.gravity.y = 250;
	enemy1.body.bounce.y = 0.5;
	enemy1.body.collideWorldBounds = true;
	enemy1.animations.add('left', [0,1],12.5,true);
	enemy1.animations.add('right', [2,3],12.5,true);


enemy2= game.add.sprite(349.8537762889982709, 20, 'baddie');	
game.physics.arcade.enable(enemy2)
	enemy2.body.gravity.y = 250;
	enemy2.body.bounce.y = 0.5;
	enemy2.body.collideWorldBounds = true;
	enemy2.animations.add('left', [0,1],12.5,true);
	enemy2.animations.add('right', [2,3],12.5,true);
	

enemy3= game.add.sprite(500, 20, 'baddie');	
game.physics.arcade.enable(enemy3)
	enemy3.body.gravity.y = 250;
	enemy3.body.bounce.y = 0.5;
	enemy3.body.collideWorldBounds = true;
	enemy3.animations.add('left', [0,1],12.5,true);
	enemy3.animations.add('right', [2,3],12.5,true);

	stars = game.add.physicsGroup();
	stars.enableBody = true;
	for(var i = 0; i<12; i++){
		var star = stars.create(i*70,0,"star");
		star.body.gravity.y = 200;
		star.body.bounce.y = Math.random()*0.2+0.7;

	}

	wKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
	aKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
	sKey = game.input.keyboard.addKey(Phaser.Keyboard.S);
	dKey = game.input.keyboard.addKey(Phaser.Keyboard.D);

}	

function update(){
	game.physics.arcade.collide(player,platforms);
	game.physics.arcade.collide(enemy1,platforms);
	game.physics.arcade.collide(enemy2,platforms);
	game.physics.arcade.collide(enemy3,platforms);
	game.physics.arcade.collide(stars,platforms);

	player.body.velocity.x = 0;
	
	if(aKey.isDown){
		player.body.velocity.x = -150;
		player.animations.play('left');
	}else if(dKey.isDown){
		player.body.velocity.x = 150;
		player.animations.play('right');
	}else{
		player.animations.stop();
		player.frame = 4;
	}
	if(wKey.isDown && player.body.touching.down){
		player.body.velocity.y = -300;

	}
	game.physics.arcade.overlap(player,stars,collectStar);
	game.physics.arcade.overlap(player,enemy1, loseLife);
		game.physics.arcade.overlap(player,enemy2, loseLife);
			game.physics.arcade.overlap(player,enemy3, loseLife);

	moveEnemy(enemy1, 100);
	moveEnemy(enemy2,100)
	moveEnemy(enemy3,100)


if (lives < 1){
	endGame();
}	

}

function collectStar(player,star){
	score += 1;
	scoretext.setText(score);

	star.kill();
	star.reset(Math.floor(Math.random() * 760) ,0);
}
function loseLife(player,enemy1){
lives -= 1;
	livestext.setText(lives);
	enemy1.kill();
	enemy1.reset(10,20);
}
function loseLife(player,enemy2){
lives -= 1;
	livestext.setText(lives);
	enemy2.kill();
	enemy2.reset(10,20);
}
function loseLife(player,enemy3){
lives -= 1;
	livestext.setText(lives);
	enemy3.kill();
	enemy3.reset(10,20);
}
function moveEnemy(enemy, speed){
	if(enemy.x > player.x){
		enemy.animations.play('left');
		enemy.body.velocity.x= -1*speed;
		}
		else if (enemy.x<player.x){
		enemy.animations.play('right');
		enemy.body.velocity.x= speed;
		}
		
	}



function endGame(){
	player.kill();
	liveslabel.visible = false;
	livestext.visible =false;
	scoretext.visible = false;
	scorelabel.text = `Game Over! You Scored: ${score}`;

	}