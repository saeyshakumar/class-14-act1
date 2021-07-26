var ball={
  x:140,
  y:75,
  radius:45,
  xSpeed:0,
  ySpeed:0,
  color: ["blue","red","green","purple"]
}
function setup() {
  createCanvas(400, 400);
 
}

function draw() {
  background(220);
  circle(ball.x,ball.y,ball.radius)
  fill(ball.color[0])
  ball.xSpeed=1
  ball.x=ball.x+ball.xSpeed
  ball.ySpeed=2
  ball.y=ball.y+ball.ySpeed
}