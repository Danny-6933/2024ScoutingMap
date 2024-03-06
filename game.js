function setup() {
  createCanvas(800, 400);
  field();
}

function draw() {
  field();
  fill(0);
  textSize(15);
  text(mouseX,25,25);
  text(mouseY,25,35);
  
}

function field() {
  textAlign(CENTER);
  rectMode(CENTER);
  strokeCap(SQUARE)
  noStroke();
  fill(255);
  rect(400, 200, 800, 400);

  fill(0);

  // text("You are scouting team " + teamNum + ".", 400,25);


  // arena
  stroke(0);
  strokeWeight(4);
  fill(220);
  beginShape();
  vertex(50, 50);
  vertex(50, 313);
  vertex(126, 373);
  vertex(627, 373);
  vertex(703, 313);
  vertex(703, 50);
  endShape(CLOSE);
  strokeWeight(3);
  stroke(0,200)
  line(376.5,50,376.5,373)
  rectMode(CORNER)
  
  strokeWeight(2)
  
  //BLUE FIELD ELEMENTS
  //amp
  fill(10,40,200)
  rect(99,35,61,20)
  //speaker
  strokeWeight(2)
  beginShape()
  vertex(50,110);
  vertex(90,130);
  vertex(90,170);
  vertex(50,190)
  endShape(CLOSE)
  //zone
  stroke(10,40,200)
  line(280,50,280,375)
  stroke(0)
  // stage
  drawStage(true)
  
  //RED FIELD ELEMENTS
  stroke(0)
  // amp
  fill(200,10,40)
  rect(593,35,61,20)
  //speaker
  strokeWeight(2)
  beginShape()
  vertex(700,110);
  vertex(660,130);
  vertex(660,170);
  vertex(700,190)
  endShape(CLOSE)
  //zone
  stroke(200,10,40)
  line(473,50,473,375)
  stroke(0)
  // stage
  push();
  scale(-1, 1);
  translate(-752, 0);
  drawStage(false);
  pop();
  

}

function drawStage(c) {
  fill(150);
  strokeWeight(15);
  stroke(150);
  let startX = 233;
  let startY = 212;
  let lineLength = 65;
  let angle = radians(120);
  
  strokeWeight(2);
  c ? stroke(10, 40, 200): stroke(200, 10, 40)
  let endX1 = startX - lineLength, endY1 = startY;
  let endX2 = startX + cos(PI - angle) * lineLength, endY2 = startY + sin(PI - angle) * lineLength; 
  let endX3 = startX + cos(PI + angle) * lineLength, endY3 = startY + sin(PI + angle) * lineLength;

  line(endX1, endY1, endX2, endY2);
  line(endX1, endY1, endX3, endY3);
  line(endX2, endY2, endX3, endY3);
  
  fill(150);
  strokeWeight(15);
  stroke(150);

  line(startX, startY, startX - lineLength, startY);
  push();
  translate(startX, startY);
  rotate(angle);
  line(0, 0, -lineLength, 0);
  rotate(angle);
  line(0, 0, -lineLength, 0);
  pop();

  noStroke();
  fill(150); 
  triangle(250, 182, 250, 242, 200, 212);
  strokeWeight(2)
}
