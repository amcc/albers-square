function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  colorMode(HSB);
}

function draw() {
  background(mouseY, 100, 100);
  noStroke();

  fill(mouseX, 100, 100);
  square(width / 2, height / 2 + mouseY / 10, width / 1.1);

  fill(mouseX, 80, 100);
  square(width / 2, height / 2 + mouseY / 6, width / 2);

  fill(mouseX, 60, 100);
  square(width / 2, height / 2 + mouseY / 4, width / 4);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
