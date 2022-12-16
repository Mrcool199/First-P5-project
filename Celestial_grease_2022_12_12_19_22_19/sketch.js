var SquareX = 0;
var SquareY = 350;
let r;
let r2;
let a;
let q = [];
let w;
let e = [];
let t;
let c;
let i=0;
var timer = 30;

function setup() {
  createCanvas(400, 400);
  r = random(50,350);
  r2 = random(50,350);
}

function draw() {
  background(220);
  rect(SquareX,SquareY,50,50);
  t = circle(r,r2,20);
  
movement();
restriction();
textSize(20);
text("Score "+i, 320, 30);
  
  if(SquareX < r && SquareX+50 > r && SquareY < r2 && SquareY+50 > r2){
      q = [color(167, 41, 32),color(232, 140, 0),color(5, 139, 140),];
  w = random(q);
    fill(w);
      r = random(50,350);
  r2 = random(50,350);
    i++;
     }
  timer1();
}

function restriction(){
    if(SquareX+50 > 400){
     SquareX -= 5
   }
    else if(SquareX < 0){
     SquareX += 5
   }
    else if(SquareY+50 > 400){
     SquareY -= 5
   }
    else if(SquareY < 0){
     SquareY += 5
   }
}

function movement(){
      if (keyIsPressed) {
   if (keyCode == RIGHT_ARROW) {
    SquareX +=5; 
   }  else if (keyCode == LEFT_ARROW) {
     SquareX -= 5;
   } else if (keyCode == UP_ARROW) {
     SquareY -=5;
   } else if (keyCode == DOWN_ARROW) {
     SquareY +=5; 
   }
}
}

function timer1(){
    textSize(25);
  text("Timer "+timer, width/2-180, height/2-150);
    if (frameCount % 60 == 0 && timer > 0) { 
    timer --;
  }
  if (timer == 0) {
    noLoop();
    textSize(60)
    text("GAME OVER", width/2-180, height/2);
  }
}

