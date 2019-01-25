console.log("yeeeeeahhboiiii")

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d")

var img = new Image ();
img.src = "4wd.png";
img.onload = function(){
	ctx.drawImage(img, 100,100,150,100);
}
ctx.font = "italic 30px Arial"
ctx.fillText("BOIIIIIIIIIIIIIIIIIIIIIIIIIBOIIIIIIIIIIIIIIIIIIIIIIIIIBOIIIIIIIIIIIIIIIIIIIIIIIIIBOIIIIIIIIIIIIIIIIIIIIIIIIIBOIIIIIIIIIIIIIIIIIIIIIIIII",150,150);

var c2 = document.getElementById("myCanvas1");
var ctx2 = c2.getContext("2d")

var troll = new Image ();
troll.src = "troll.png";
var birb = new Image ();
birb.src = "birb.png";
var pepe = new Image ();
pepe.src = "pepe.png";
var pepe = new Image ();
pepe.src = "pepe.png";

ctx2.font = "italic 30px Arial"
ctx2.fillText("DANKMEMES", 300,40);


troll.onload = function(){
	ctx2.drawImage(troll,90,90,300,300);
}
pepe.onload = function(){
	ctx2.drawImage(pepe,400,50,500,500);
}
birb.onload = function(){
	ctx2.drawImage(birb,350,200,300,300);
}


