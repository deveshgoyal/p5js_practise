
var balls = [];
var walls;
window.count = 0
window.birdImg;
// Remember how Processing works? setup() is executed once when the sketch starts and draw() loops forever and ever (until you quit).
function preload() {
  birdImg = loadGif('bird.gif');
  bg = loadImage("bg.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(25);


  wall = new Wall(mouseX, mouseY)

  for (var i = 0; i < 1; i++) {
    balls.push(new Ball())
  }

d = createVector(0,0)

}



function draw() {
  // frameRate(10)
  background(200);
  for (var i = 0; i < balls.length; i++) {
    var ball = balls[i];

    image(bg, d.x , d.y, width * 1920 / 558  , height  )
    d.x = d.x - 8
    if((width * 1920 / 558) + d.x < width){
      d.x = 0
    }

    var c = 0.1;
    var friction = ball.velocity.copy();
    friction.mult(-1);
    friction.normalize();
    friction.mult(c);

    ball.applyForce(friction)
    // ball.applyForce(createVector(0.02,0))



    // if (keyIsDown(LEFT_ARROW)) {
    //   // ball.applyForce(createVector(-1, 0))
    // } else if (keyIsDown(RIGHT_ARROW)) {
    //   // ball.applyForce(createVector(1, 0))
    // } else if (keyIsDown(UP_ARROW)) {

    //   ball.applyForce(createVector(0, -6))
    // } else if (keyIsDown(DOWN_ARROW)) {crore
    //   // ball.applyForce(createVector(0, 1))
    // }


    ball.r = ball.r;
    ball.update()

    

    
      // window.birdImg.pause()

      // window.birdImg.filter("threshold", 1);

    textSize(50)
    text("Scrre : " + window.count, width / 2 - 300, 40)

    if ( false && ball.hit(wall)) {
      ball.color.setAlpha(0)
      noLoop()
      //background(255)
      window.birdImg.remove()
      fill(0)
      textSize(40)
      image(bg, 0, 0,width,height)

      text("Game Over. Score : " + window.count, width / 2.3, height / 2)
      return false;
    } else {
      if (wall.position.x < 0) {
        window.count++;
      }
      ball.color.setAlpha(100)
    }

    wall.update();



  }


  //  ellipse(mouseX, mouseY, 20)




}

function keyPressed() {

  if (keyCode === UP_ARROW) {
    balls[0].applyForce(createVector(0, -30))

    if(!window.birdImg.playing())
    window.birdImg.play()
    
    setTimeout(function () {  
      // window.birdImg.pause()  
    },1000)

  }

}

