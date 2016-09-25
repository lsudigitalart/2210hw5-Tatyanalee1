var angle = 0.0
function setup() {
  createCanvas(800, 800);
  background(204);
}

function draw() {
  translate(mouseX, mouseY);
  var scalar = mouseX/ 60.0;
  scale(scalar);
  strokeWeight(1.0/scalar);
  rect(-15, -15, 30,30);
}
