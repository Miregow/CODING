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
	livestext = game.add.text (120,5,score,style);
	liveslabel.setShadow(3,3,'rgba(0,0,0,0.5)',2);
	livestext.setShadow(3,3,'rgba(0,0,0,0.5)',2);

player= game.add.sprite(32, 300, 'dude');
	game.physics.arcade.enable(player)
	player.body.gravity.y = 250;
	player.body.bounce.y = 0.5;
	player.body.collideWorldBounds = true;
	player.animations.add('left', [0,1,2,3],12.5,true);
	player.animations.add('right', [5,6,7,8],12.5,true);
	

enemy= game.add.sprite(760, 20, 'baddie');	
game.physics.arcade.enable(enemy)
	enemy.body.gravity.y = 250;
	enemy.body.bounce.y = 0.5;
	enemy.body.collideWorldBounds = true;
	enemy.animations.add('left', [0,1],12.5,true);
	enemy.animations.add('right', [2,3],12.5,true);

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
	game.physics.arcade.collide(enemy,platforms);
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
}