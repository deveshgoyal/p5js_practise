var SPEED = 3;


var Ball = function () {

    this.mass = random(2, 2)
    this.r = this.mass * 15;
    this.color = color(150, 134, 200, 100)
    this.strokeColor = color(150, 134, 200, 200)
    this.position = createVector(200, height / 2) //createVector(random(0 + 20, width - 20), random(0 + 20, height - 20));
    this.velocity = createVector(0, 0) //createVector(random(-1 * SPEED, SPEED), random(-1 * SPEED, SPEED));
    this.acceleration = createVector(0, 0)
    this.default_velocity = this.velocity;
    var GRAVITY = createVector(0, 0.3)


    //cavvas edge
    this.detectCanvasEdge = function () {

        if (this.position.x < 0 + this.r) {
            this.velocity.x = this.velocity.x * (-1);
            this.applyForce(createVector(0, -0.20))
        }

        if (this.position.x > width - this.r) {
            this.velocity.x = this.velocity.x * (-1);
            this.position.x = width - this.r;
        }

        if (this.position.y < 0 - this.r || this.position.y > height - this.r - 230) {
            this.velocity.y = this.velocity.y * (-1);
            this.position.y = height - this.r - 230;
            // noLoop();
        }

    }



    this.hit = function (other) {

        return (this.position.x + this.r > other.position1.x &&
                this.position.y + this.r > other.position1.y &&
                this.position.x - this.r < other.position1.x + other.w &&
                this.position.y - this.r < other.position1.y + other.h1)

            ||
            (this.position.x + this.r > other.position.x &&
                this.position.y + this.r > other.position.y &&
                this.position.x - this.r < other.position.x + other.w &&
                this.position.y - this.r < other.position.y + other.h)

    }

    //update
    this.update = function () {

        this.applyGravity()
        // this.applyForce(createVector(0.02,0))
        // this.applyForce(createVector(0.60,0))




        this.acceleration.limit(5);
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);

        this.detectCanvasEdge()
        this.draw();
        this.acceleration.mult(0)
        // this.position.limit(height);
    }

    //draw
    this.draw = function () {
        fill(this.color)
        stroke(this.strokeColor);
        // ellipse(this.position.x, this.position.y, this.r * 2, this.r * 2)

        image(window.birdImg, this.position.x - this.r, this.position.y - this.r, this.r * 2, this.r * 2)
        // window.birdImg.position(this.position.x - this.r , this.position.y - this.r)//,this.r * 2, this.r * 2)
        // window.birdImg.size(this.r * 2, this.r * 2);

    }


    this.random_mouse = function () {
        // var target = createVector(mouseX, mouseY)
        // var desired = p5.Vector.sub(target, this.position);
        // desired.normalize();


        // var steer = p5.Vector.sub(desired, this.velocity);
        // steer.mult(1)
        // // this.velocity = steer;
        // // this.velocity = steer;

        // var mouseRadius = 400;

        // if ( mouseRadius > dist(this.position.x, this.position.y, mouseX, mouseY) && !this.flag && mouseIsPressed ) {
        //     // near mouse radious
        //     this.color.setAlpha(map(dist(this.position.x, this.position.y, mouseX, mouseY), 0, mouseRadius, 255, 0))
        //     this.velocity = steer.mult(-1) //desired.mult(-1)
        //     this.flag = false
        // }// else {
        //     // this.color.setAlpha(0);
        //     // this.velocity = this.default_velocity
        // // }
    }

    //gravity
    this.applyGravity = function () {
        if (typeof GRAVITY !== 'undefined')
            this.acceleration.add(GRAVITY);
    }

    this.applyForce = function (f) {
        var force = p5.Vector.div(f, this.mass)
        this.acceleration.add(force);


    }



}


var Wall = function (x, y) {

    this.position = createVector(width, 0);



    this.velocity = createVector(-15, 0)

    this.w = 50;
    this.h = 200;
    this.h1 = 200;

    this.reset = function () {
        this.position.x = width;
        this.position1.x = width
        this.w = 50;
        this.h = random(100, 300)
        this.position1.y = 150 + this.h;
        this.h1 = height - 150 - this.h
    }

    this.position1 = createVector(width, 150 + this.h);


    this.reset();


    this.update = function () {

        this.position.add(this.velocity)
        this.position1.add(this.velocity)


        if (this.position.x + this.w < 0) {
            this.reset();
        }

        this.show()

    }

    this.show = function () {
        fill(0);
        rect(this.position.x, this.position.y, this.w, this.h);
        rect(this.position1.x, this.position1.y, this.w, this.h1);

    }



}