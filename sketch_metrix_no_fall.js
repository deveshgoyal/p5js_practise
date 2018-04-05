var Drop = function (x, y) {

  this.p = createVector(x, y, random(0, 10))
  this.v = createVector(0, random(8, 13), 0)
  this.size = random(5, 20)
  this.fontSize = random(20, 30)
  this.text = [];
  this.py = this.p.y

  

  this.textRandom = function () {
    this.text = []
    for (let i = 0; i < this.size; i++) {
      this.text.push( floor(random(0,10)))
    }
    this.py = this.p.y
  }

  this.textRandom()
  

  this.draw = function () {
    for (let i = 0; i < this.text.length; i++) {
      var dx = 10 + this.p.x
      var dy = 20 * i + this.p.y
      // smooth();
      fill(0, 200, 0)
      // smooth();
      textSize(this.fontSize)
      text(this.text[i], dx, dy);
      // ellipse(dx, dy, 20)
    }
    
    this.update()
  }

  this.update = function () {

    this.p = p5.Vector.add(this.p, this.v);
    // this.p.add(this.v)
    this.reset();
  }

  this.reset = function () {

    if (this.p.y > height) {
      this.p.y = -1 * (20 * 20)
      this.textRandom()
    }


    if (this.p.y - this.py > random(80,120) ) {
      // this.p.y = height - (20 * 20)
      this.textRandom()
    }



  }



}

var drops = [];
var n = 50
function setup() {
  // put setup code here
  // createCanvas(windowWidth, windowHeight,WEBGL)
  createCanvas(windowWidth, windowHeight)
  background(0)


  for (let i = 0; i < n; i++) {

    var x = (width / n) * i

    var y = random(0, height)
    drops.push(new Drop(x, y))
    drops.push(new Drop(x, y * 400))
    // drops.push(new Drop(x, y * 800))


  }


}

function draw() {
  // put drawing code here]
  frameRate(20)
  background(0)
  for (let i = 0; i < drops.length; i++) {
    drops[i].draw()
  }
  //v.add(0, 2)

}
