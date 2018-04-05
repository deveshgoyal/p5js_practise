var SPEED = 3;

var Ball = function () {
    this.r = 5;
    this.color = color(150, 134, 200, 100)
    this.strokeColor = color(150, 134, 200, 200)
    this.position = createVector(random(0 + 20, width - 20), random(0 + 20, height - 20));
    this.velocity = createVector(random(-1 * SPEED, SPEED), random(-1 * SPEED, SPEED));
    this.default_velocity = this.velocity


    //cavvas edge
    this.detectCanvasEdge = function () {
        if (this.position.x < 0 + this.r || this.position.x > width - this.r) {
            this.velocity.x = this.velocity.x * (-1);
            this.color = color(150, 134, 200, 100)
        }
        if (this.position.y < 0 + this.r || this.position.y > height - this.r) {
            this.velocity.y = this.velocity.y * (-1);
            this.color = color(150, 134, 200, 100)
        }

        this.position.add(this.velocity);
    }




    //update
    this.update = function () {

        var target = createVector(mouseX, mouseY)
        var desired = p5.Vector.sub(target, this.position);
        desired.normalize();


        // var steer = p5.Vector.sub(desired, this.velocity);
        // steer.mult(1)
        // this.velocity = steer;
        // this.velocity = steer;

        var mouseRadius = 40;

        if ( mouseRadius > dist(this.position.x, this.position.y, mouseX, mouseY) ) {
            // near mouse radious
            this.color.setAlpha(map(dist(this.position.x, this.position.y, mouseX, mouseY), 0, mouseRadius, 255, 0))
            this.velocity = desired.mult(-1)
        } else {
            this.color.setAlpha(0);
            this.velocity = this.default_velocity
        }


        this.detectCanvasEdge()
        this.draw();
    }

    //draw
    this.draw = function () {
        fill(this.color)
        stroke(this.strokeColor);
        ellipse(this.position.x, this.position.y, this.r * 2, this.r * 2)
    }


}