let balls = [];
let platformX, platformY;
let gameOver = false;

function setup() {
createCanvas(600, 600);
background(173, 216, 230); // Light blue background

ballX = 300;
ballY = 300;
ballSize = 20;
ballSpeedX = 3;
ballSpeedY = 3;

platformX = 250;
platformY = 580;
platformWidth = 100;
platformHeight = 20;

balls.push({
x: ballX,
y: ballY,
size: ballSize,
speedX: ballSpeedX,
speedY: ballSpeedY
});

  
textSize(24);
fill(0);
text("Try to keep the ball from falling!", 20, 30);
text("Click your mouse to make it more difficult!", 20, 60);
}

function draw() {
background(173, 216, 230);

for (let ball of balls) {
ball.x += ball.speedX;
ball.y += ball.speedY;

if (ball.x < ball.size / 2 || ball.x > width - ball.size / 2) {
ball.speedX = -ball.speedX;
}
if (ball.y < ball.size / 2) {
ball.speedY = -ball.speedY;
}
if (ball.y > height) {
gameOver = true;
}

if (ball.y + ball.size / 2 >= platformY && ball.x >= platformX && ball.x <= platformX + 100) {
ball.speedY = -ball.speedY;
}

ellipse(ball.x, ball.y, ball.size);
}

platformX = mouseX - 50;
rect(platformX, platformY, 100, 20);

if (gameOver) {
displayGameOver();
return;
}

// Display instructions
textSize(24);
fill(0);
text("Try to keep the ball from falling!", 20, 30);
text("Click your mouse to make it more difficult!", 20, 60);
}

function mouseClicked() {
if (gameOver) resetGame();
else addBall();
}

function resetGame() {
balls = [{ x: width / 2, y: height / 2, size: 20, speedX: 3, speedY: 3 }];
platformY = 580;
gameOver = false;
}

function displayGameOver() {
fill('red');
textSize(48);
text("Game Over!!!!", width / 2 - 100, height / 2);
fill('blue');
textSize(24);
text("Click to try again :(", width / 2 - 70, height / 2 + 40);
}

function addBall() {
balls.push({
x: mouseX,
y: mouseY,
size: 20,
speedX: random(-5, 5),
speedY: random(-5, 5)
});
}