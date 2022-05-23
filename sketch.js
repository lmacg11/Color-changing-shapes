var width;
var length;
var r;
var g;
var b;
var r2;
var g2;
var b2;
function setup() {
  width = 400;
  length = 400;
  createCanvas(width, length);
}

function draw() {
  background(220,230,250);
  fill(r,g,b);
  rect(width*.45, length*.45, 50, 50);
  rect(width*.2, length*.2, 50, 50);
  rect(width*.7, length*.7, 50, 50);
  fill(r2,g2,b2);
  ellipse(width *.9, length *.1, 50, 50);
  ellipse(width *.1, length *.1, 50, 50);
   ellipse(width *.1, length *.9, 50, 50);
   ellipse(width *.9, length *.9, 50, 50);
  
}

function mousePressed() {
  if (mouseX >= length*.45 && mouseX <= length*.45 + 50 && mouseY >= width*.45 && mouseY <= width*.45 + 50){
  r = random(1,256);
  g = random(1,256);
  b = random(1,256);
  }   
}
