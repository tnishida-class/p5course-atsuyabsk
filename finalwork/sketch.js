// 最終課題を制作しよう
let lineX;
let lineY;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  wave();

  if(mouseIsPressed){
  human(width * 7 / 10, height * 1 / 10, height * 1 / 13);
}

  stroke(0);
  textSize(50);
  text("身体動揺", 10, 50);
}

function wave (){
  for (let x = 0; x < width; x++){
    let s = noise((x + frameCount) * 0.05);
    let y = (height * 0.3 * s) + (height / 2);

    stroke(0);
    if (x > 0){
      line(lineX, lineY, x , y);
    }

    lineX = x;
    lineY = y;
  }
}

function human (s, t, r){
  push();
  noFill();
  stroke(0);
  ellipse(s, t, r);
  line(s, t + 5 / 2 * r, s - 1 / 2 * r, t + 5 * r);
  line(s, t + 5 / 2 * r, s + 1 / 2 * r, t + 5 * r);
  line(s - r, t + 1 / 2 * r, s - r, t + 5 / 2 * r);
  line(s + r, t + 1 / 2 * r, s + r, t + 5 / 2 * r);
  fill(50, 100, 200);
  triangle(s - r, t + 1 / 2 * r, s + r, t + 1 / 2 * r, s, t + 5 / 2 * r);
  pop();
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
