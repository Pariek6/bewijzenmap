var canvas = document.getElementById('myCanvas')
var ctx = canvas.getContext('2d')

// Dak 1
ctx.beginPath();
ctx.moveTo(550,400);

// 150 / 230
ctx.lineTo(400,230);
// 200 / 60
ctx.lineTo(200,290);
// 150 / 210
ctx.lineTo(350,490);
ctx.lineTo(550,400);
ctx.closePath();
ctx.fillStyle = 'red';
ctx.fill();
ctx.stroke();

// Dak 2

ctx.beginPath();
ctx.moveTo(200,290);
ctx.lineTo(80,360);
ctx.lineTo(120,360);
ctx.lineTo(209,310);
ctx.lineTo(350,490);
ctx.closePath();
ctx.fillStyle = 'brown';
ctx.fill();
ctx.stroke();

// Muur 1

ctx.beginPath();
ctx.moveTo(530,408);
ctx.lineTo(530,480);
ctx.lineTo(340,560);
ctx.lineTo(340,476);
ctx.lineTo(350,490);
ctx.fillStyle = '#F8D7D7';
ctx.fill();
ctx.stroke();

// Muur 2

ctx.beginPath();
ctx.moveTo(340,560);
ctx.lineTo(120,480);
ctx.lineTo(120,360);
ctx.lineTo(209,310);
ctx.lineTo(340,476);
ctx.lineTo(340,560);
ctx.fillStyle = '#F8D7D7';
ctx.fill();
ctx.stroke();

// Zijmuur

ctx.beginPath();
ctx.moveTo(120,460);
ctx.lineTo(340,540);
ctx.lineTo(530,460);
ctx.lineTo(530,480);
ctx.lineTo(340,560);
ctx.lineTo(120,480);
ctx.lineTo(120,460);
ctx.fillStyle = '#333300';
ctx.fill();
ctx.stroke();

// Raam 1

ctx.beginPath();
ctx.moveTo(510,417);
// 33
ctx.lineTo(510,450);
// 40 , 18
ctx.lineTo(470,468);
// 33
ctx.lineTo(470,435);
// 18
ctx.lineTo(510,417);
ctx.strokeStyle = 'brown';
ctx.lineWidth = 4;
ctx.fillStyle = 'lightblue';
ctx.fill();
ctx.stroke();

// Raam 2  | Verschil met raam 2: 90 en  91

ctx.beginPath();
ctx.moveTo(420, 457);
ctx.lineTo(420, 490);
ctx.lineTo(380, 508);
ctx.lineTo(380, 475);
ctx.lineTo(420, 457);
ctx.strokeStyle = 'brown';
ctx.fillStyle = 'lightblue';
ctx.fill();
ctx.stroke();

// Raam 3

ctx.beginPath();
ctx.moveTo(310,475);
ctx.lineTo(310,508);
ctx.lineTo(270,492);
ctx.lineTo(270,457);
ctx.lineTo(310,475);
ctx.fillStyle = 'lightblue';
ctx.fill();
ctx.stroke();

// Raam 4

ctx.beginPath();
ctx.moveTo(140,408);
ctx.lineTo(140,441);
ctx.lineTo(180,457);
ctx.lineTo(180,426);
ctx.lineTo(140,408);
ctx.fillStyle = 'lightblue';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(200,510);
ctx.lineTo(200,432);
ctx.lineTo(245,449);
ctx.lineTo(245,525);
ctx.lineTo(200,510);
ctx.strokeStyle = 'black';
ctx.fillStyle = 'brown';
ctx.fill();
ctx.lineWidth = 3;
ctx.stroke();

ctx.beginPath();
ctx.moveTo(240,480);
ctx.arc(230,485,5,0,2*Math.PI);
ctx.strokeStyle = 'brown';
ctx.fillStyle = 'yellow';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(120,380);
ctx.lineTo(220,325);
ctx.lineTo(209,310);
ctx.lineTo(120,360);
ctx.strokeStyle = 'black';
ctx.fillStyle = 'rgba(91, 15, 15, 0.5)';
ctx.fill();
ctx.lineWidth = 0.1;
ctx.stroke();
