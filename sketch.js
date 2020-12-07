function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(200);
  lights();
  orbitControl();
  rotateX(PI / 4)
  //rotateY(millis() / 20000)
  for (x = -width / 2; x < width / 2; x += 20) {
    for (y = -height / 2; y < height / 2; y += 20) {
      let z = x + y / 2;
      z = sin(dist(x, y, 0, 0) / 50 + frameCount / 25) * 30
      push();
      translate(x, y, z);
      fill(100 * x + width / 2, 100 * y + height / 2, 200);
      noStroke();
      sphere(z / 2);
      pop();
    }
  }




}