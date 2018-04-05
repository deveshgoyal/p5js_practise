


var Car = function () {
  this.i = createVector(width / 2, height)
  this.p = createVector(mouseX, mouseY)//createVector(width / 2, height)
  // this.p = createVector(width/2 , height)


  this.v = createVector(0, 0)
  this.rand = false
  this.color = {
    r: 80,
    b: 216,
    g: 185,
  }
  this.exp_px = false
  this.exp_py = false
  this.rand_dist = random(50, 200)

}

Car.prototype.move = function () {


  if (this.p.x < width / 2 || this.p.y < height / 2) {
    // this.p.mult(0)
  }

  if ((5 > dist(this.expt_px, this.expt_py, this.p.x, this.p.y)) && !this.rand) {
    this.v = createVector(random(-3, 3), random(-3, 3))
    // this.v.normalize()
    // this.v.limit(2)

    this.rand = true
    this.exp_px = this.p.x
    this.exp_py = this.p.y
    this.color = {
      r: random(150, 200),
      b: random(50, 160),
      g: random(0, 0),
    }

   



  }

 
  

  this.p.add(this.v)
  fill(this.color.r, this.color.b, this.color.g)
  ellipse(this.p.x, this.p.y, 5)

}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight)
  background(55)

  cars = []

}

function draw() {
  // put drawing code here]
  // frameRate(1)
  background(random(0,50))

 

  noStroke()
  fill(255)

  for (let index = 0; index < cars.length; index++) {
    const car = cars[index];
    // fill(random(0,255),random(0,255),random(0,255))
    car.move()

    // out of screen
    if (car.p.x > width || car.p.x < 0 || car.p.y > height || car.p.y < 0) {
      cars.splice(index, 1)
    }

    //out of radius 100
    if (!this.rand && car.exp_px && car.exp_py && car.rand_dist < dist(car.p.x, car.p.y, car.exp_px, car.exp_py)) {
      cars.splice(index, 1)
    }


  }

  fill(255)
  textSize(20)
  text(cars.length, width / 2, 20)
  line(0, 0, 20, 20)

}




function mouseDragged(){

 background(55)
 burst(100)

}

function mouseMoved() {


  
  burst(100)

}

function mouseClicked() {
 background(55)
 burst(1)

}

// setInterval(() => {

//   if (cars.length < 3500)
//     burst(10)

// }, 100);


function burst(count) {
  if (!count)
    count = 5

  var c = createVector(random(- 4, 4), -3)
  var color = {
    r: random(150, 200),
    b: random(50, 100),
    g: random(0, 0),
  }
  var p = createVector(random(0, width), height)
  for (let index = 0; index < count; index++) {
    // for (let index = 0; index < cars.length; index++) {

    const car = new Car()

    car.c = p
    car.i = p
    // car.p = p

    // var target = createVector(p.x,0)//createVector(mouseX, mouseY)
    var target = createVector(mouseX, mouseY)

    // car.p = createVector(random(target.x - 10, target.x + 10), random(target.y - 10, target.y + 10))

    var desired = p5.Vector.sub(target, car.p);
    desired.normalize();
    // desired.mult(5);

    var steer = p5.Vector.sub(desired, car.v);
    steer.limit(1)
    car.v = (steer)

    cars.push(car)
    // car.v = c
    car.color = color

    car.expt_px = target.x
    car.expt_py = target.y



  }

}