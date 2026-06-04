function drawScene() {
  // Dark moody background for heist theme
  background(20);

  // Get current scene from global STORY object
  const scene = STORY[currentScene];

  if (!scene) {
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(24);
    text("Scene not found", width / 2, height / 2);
    return;
  }

  // Clear choiceRects for this frame
  choiceRects = [];

  // Draw text box background
  fill(35);
  stroke(100);
  strokeWeight(2);
  const textBoxX = 40;
  const textBoxY = 40;
  const textBoxW = width - 80;
  const textBoxH = 200;
  rect(textBoxX, textBoxY, textBoxW, textBoxH);

  // Draw scene text (wrapped inside text box)
  fill(220);
  noStroke();
  textAlign(LEFT, TOP);
  textSize(16);
  text(scene.text, textBoxX + 20, textBoxY + 20, textBoxW - 40, textBoxH - 40);

  // If no choices, show end screen
  if (scene.choices.length === 0) {
    fill(200, 150, 80);
    textAlign(CENTER, CENTER);
    textSize(28);
    text("The End — refresh to play again", width / 2, height - 80);
    return;
  }

  // Draw choice buttons below the text
  const buttonStartY = textBoxY + textBoxH + 30;
  const buttonWidth = 300;
  const buttonHeight = 50;
  const buttonGap = 15;

  scene.choices.forEach((choice, index) => {
    const buttonX = (width - buttonWidth) / 2;
    const buttonY = buttonStartY + index * (buttonHeight + buttonGap);

    // Draw button background (dark maroon with warm bronze border)
    fill(60, 40, 40);
    stroke(150, 100, 80);
    strokeWeight(2);
    rect(buttonX, buttonY, buttonWidth, buttonHeight, 5);

    // Draw button text
    fill(220);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(14);
    text(choice.label, buttonX, buttonY, buttonWidth, buttonHeight);

    // Store button info in choiceRects for mousePressed() to use
    choiceRects.push({
      x: buttonX,
      y: buttonY,
      w: buttonWidth,
      h: buttonHeight,
      next: choice.next,
    });
  });
}
