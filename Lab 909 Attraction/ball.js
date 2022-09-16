function Ball(x,y,d){
    this.loc = new JSVector(x, y);
    let dx = Math.random()*4-2
    let dy = Math.random()*4-2
    this.vel = new JSVector(dx, dy);
    this.acc = new JSVector(0, 0);
    this.diam = d;
    this.colorArray = ["red", "orange", "green", "blue", "purple"];
    this.colorIndex = Math.floor(Math.random() * this.colorArray.length);
    this.color = this.colorArray[this.colorIndex];
}

Ball.prototype.run = function(){
    this.render();
    this.update();
    this.bounce();
}

Ball.prototype.render = function(){
    let radius = 15; // local variable radius of the circle
    context.beginPath();    // clear old path
    context.arc(this.loc.x, this.loc.y, radius, 0, 2 * Math.PI);
    context.strokeStyle = this.color;  // color to fill
    context.fillStyle = this.color;     // color to stroke
    context.fill();     // render the fill
    context.stroke();   // render the stroke
}

Ball.prototype.update = function () {
    this.loc.add(this.vel);  
    let d = balls[0].loc.distance(this.loc)

    if(this === balls[0]){
        this.color = "Black";
    }

    if(this !== balls[0]){
        if(d < 1000){
        this.acc = JSVector.subGetNew(balls[0].loc, this.loc)  
        }
        if(d < 50){
        this.acc = JSVector.subGetNew(this.loc, balls[0].loc)        
        }
        this.acc.normalize();
        this.acc.multiply(.5);
        this.vel.limit(3);
        this.vel.add(this.acc);
    }
}

Ball.prototype.bounce = function () { 
    if(this.loc.x > canvas.width){
        this.vel.x = -this.vel.x;
    }
    if(this.loc.x < 0){
        this.vel.x = -this.vel.x;
    }
    if(this.loc.y > canvas.height){
        this.vel.y = -this.vel.y;
    }
    if(this.loc.y < 0){
        this.vel.y = -this.vel.y;
    }
}    

/*
    if(this.loc.x > canvas.width) this.loc.x = 0
    if(this.loc.x < 0) this.loc.x = canvas.width
    if(this.loc.y > canvas.height) this.loc.y = 0
    if(this.loc.y < 0) this.loc.y = canvas.height
*/

/*
}*/