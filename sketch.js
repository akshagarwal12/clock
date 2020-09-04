var hr,hrAngle;

var min,minAngle;

var sec,scAngle;
function setup() {
  createCanvas(1000,1000);
  angleMode(DEGREES)
}

function draw() {
  hr=hour()
  min=minute()
  sec=second()
  if(hr>12){
    hr=hr%12
  }
  

  scAngle=map(sec,0,60,0,360)
  hrAngle=map(hr,0,12,0,360)
  minAngle=map(min,0,60,0,360)
  background(0,0,0); 
  push();
  translate(500,700);
  rotate(scAngle-90)
  stroke(255,0,0)
  strokeWeight(7);
  line(0,0,200,0)
  pop();

  push();
  translate(500,700);
  rotate(minAngle-90)
  stroke(0,255,0)
  strokeWeight(7);
  line(0,0,200,0)
  pop();

  push();
  translate(500,700);
  rotate(hrAngle-90)
  stroke(0,0,255)
  strokeWeight(7);
  line(0,0,200,0)
  pop();

  drawSprites();
}