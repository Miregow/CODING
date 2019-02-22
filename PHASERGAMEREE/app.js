var game = new Phaser.Game(800,600, Phaser.AUTO, '',
	{preload:preload, create:create, update:update});

var score = 0;
var lives = 3;

function preload (){
	game.load.image('sky','assets/sky.png')
	game.load.image('star','assets/star.png')
	game.load.image('aid','assets/firstaid.png')
	game.load.image('diamond','assets/diamond.png')
	game.load.image('platform','assets/platform.png')

	game.load.spritesheet('dude','assets/dude.png', 32, 48)
	game.load.spritesheet('baddie','assets/baddie.png', 32, 32)
}

function create(){
	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.add.sprite(0,0,'sky')
	platforms = games.add.physicsGroup();
	platforms.enableBody = true;
	
	var platform = platforms.create(0,560,'platform');
	
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
}	

function update(){}