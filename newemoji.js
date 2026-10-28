/*const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();

ctx.arc(95, 50, 40, 0, 2 * Math.PI);

ctx.fillStyle = "yellow";
ctx.fill();

ctx.lineWidth = 2;
ctx.strokeStyle = "blue";
ctx.stroke();
ctx.closePath();
*/

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

//face
ctx.beginPath();
ctx.arc(95, 65, 55, 0, 2 * Math.PI);
ctx.fillStyle = "yellow";
ctx.fill();

ctx.lineWidth = 2;
ctx.strokeStyle = "blue";
ctx.stroke();

// face
ctx.strokeStyle = "#332211";
ctx.lineWidth = 4;
ctx.lineCap = "round";

// left eye
ctx.beginPath();
ctx.moveTo(60, 52);
ctx.lineTo(72, 44);
ctx.lineTo(84, 52);
ctx.stroke();

// right eye
ctx.beginPath();
ctx.moveTo(106, 52);
ctx.lineTo(118, 44);
ctx.lineTo(130, 52);
ctx.stroke();

// mouth
ctx.beginPath();
ctx.ellipse(95, 91, 13, 18, 0, 0, 2 * Math.PI);
ctx.fillStyle = "#332211";
ctx.fill();

//tears
ctx.strokeStyle = "#33bbff";
ctx.lineWidth = 10;

ctx.beginPath();
ctx.moveTo(72, 57);
ctx.lineTo(72, 94);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(118, 57);
ctx.lineTo(118, 94);
ctx.stroke();