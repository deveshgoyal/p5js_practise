
var balls = [];
// Remember how Processing works? setup() is executed once when the sketch starts and draw() loops forever and ever (until you quit).
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(25);

  for (var i = 0; i < 2000; i++) {
    balls.push(new Ball())
    
  }

}

function draw() {
  background(25);
  for (var i = 0; i < balls.length; i++) {
    var ball = balls[i];
    ball.update()
  }
}