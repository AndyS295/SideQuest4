function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("monospace");
}

function draw() {
  drawScene();
}

function mousePressed() {
  // Loop through all choice buttons and check if mouse is inside
  for (let rect of choiceRects) {
    if (
      mouseX >= rect.x &&
      mouseX <= rect.x + rect.w &&
      mouseY >= rect.y &&
      mouseY <= rect.y + rect.h
    ) {
      // Mouse is inside this button, go to the next scene
      goToScene(rect.next);
      return false; // Prevent default behavior
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
