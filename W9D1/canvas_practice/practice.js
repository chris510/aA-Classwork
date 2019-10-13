document.addEventListener("DOMContentLoaded", function(){
  const canvas = document.getElementById('mycanvas');
  canvas.height = 500;
  canvas.width = 500;

  const ctx = canvas.getContext('2d');
  ctx.fillStyle = "blue";
  ctx.fillRect(20, 10, 150, 100);

  ctx.beginPath();
  ctx.arc(100, 100, 20, 0, 2 * Math.PI, true);
  ctx.strokeStyle = "red";
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.fillStyle = "orange";
  ctx.fill();
});
