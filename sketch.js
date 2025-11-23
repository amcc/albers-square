// store the smallest dimension
// we will use this to resize the squares
let smallestDimension;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // min selects the smallest from 2 numbers
  smallestDimension = min(width, height);
  rectMode(CENTER);
  colorMode(HSB);
}

function draw() {
  // get a colour out of 360
  let bgFill = mouseY/height * 360
  background(bgFill, 80, 100);

  noStroke();


  // get a colour out of 360
  let squareFill = mouseX/height * 360

  fill(squareFill, 80, 100);
  square(width / 2, height / 2 + mouseY / 10, smallestDimension / 1.4);

  fill(squareFill, 60, 100);
  square(width / 2, height / 2 + mouseY / 6, smallestDimension / 2.2);

  fill(squareFill, 40, 100);
  square(width / 2, height / 2 + mouseY / 4, smallestDimension / 4);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  // as we've resized the window get the smallest dimension again
  smallestDimension = min(width, height);
}
