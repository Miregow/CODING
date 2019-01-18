console.log("yeeeeeahhboiiii")

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d")

ctx.beginPath();
ctx.moveTo(150,20);
ctx.lineTo(20,100);
ctx.lineTo(280,100);
ctx.closePath();
ctx.stroke();
ctx.strokeStyle = "green"

var c1 = document.getElementById("myCanvas1");
var ctx1 = c1.getContext("2d")

ctx1.beginPath();
ctx1.moveTo(150,20);
ctx1.lineTo(160,170);
ctx1.arc(150,170,10,0,3.14);
ctx1.lineTo(150,20);
ctx1.closePath();
ctx1.stroke();

