console.log("yeeeeeahhboiiii")

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(1,1);
ctx.lineTo(299,299);
ctx.strokeStyle = "blue";
ctx.lineWidth = "5" 
ctx.stroke();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d")
ctx.moveTo(1,299);
ctx.lineTo(299,1);
ctx.strokeStyle = "blue";
ctx.lineWidth = "5" 
ctx.stroke();

ctx.fillStyle = "yellow";
ctx.fillRect (125,125,50,50);

ctx.strokeStyle = "blue";
ctx. strokeRect (50,50,200,200);

ctx.clearRect (135,135,30,30);

var c4 = document.getElementById("myCanvas2");
var ctx4 = c4.getContext("2d");
ctx4.strokeRect (50,50,200,200);
ctx4.lineWidth = "5";
ctx4.fillStyle = "black";
ctx4.fillRect (125,125,50,50);
ctx4.clearRect (135,135,30,30);
