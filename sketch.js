let img;
let t = 0; // time variable

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  noStroke();
  fill(100, 200, 40);
  img = loadImage("assets/dog_1.svg");
  canvas.parent("#dog_section");
}

function draw() {
  background(10000, 10000); // translucent background (creates trails)

  // make a x and y grid of ellipses
  for (let x = 0; x <= width; x = x + 40) {
    for (let y = 0; y <= height; y = y + 40) {
      // starting point of each circle depends on mouse position
      const xAngle = map(mouseX, 0, width, -10 * PI, 10 * PI, true);
      const yAngle = map(mouseY, 0, height, -10 * PI, 10 * PI, true);
      // and also varies based on the particle's location
      const angle = xAngle * (x / width) + yAngle * (y / height);

      // each particle moves in a circle
      const myX = x + 15 * cos(2 * PI * t + angle);
      const myY = y + 15 * sin(2 * PI * t + angle);

      image(img, myX, myY, 30, 30); // draw particle
    }
  }

  t = t + 0.001; // update time
}
