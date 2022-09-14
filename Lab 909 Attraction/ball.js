function Ball(x,y,d){
    this.loc = new JSVector(x, y);
    let dx = Math.random()*4-2
    let dy = Math.random()*4-2
    this.vel = new JSVector(dx, dy);
    this.acc = new JSVector(0, .05);
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
    //this.vel.add(this.acc);
    this.loc.add(this.vel);

    if(this === balls[0]){
        this.color = "Black";
        for(let i = 1; i<balls.length; i++){
            this.acc = balls[0].loc.sub(balls[i].loc)
            this.acc.normalize();
            this.acc.multiply(.05)
            balls[i].vel.add(this.acc);
            //balls[i].acc.limit(3);
            //balls[i].vel.limit(3);

        }
    }
}

Ball.prototype.bounce = function () { 
    if(this.loc.x > canvas.width) this.loc.x = 0
    if(this.loc.x < 0) this.loc.x = canvas.width
    if(this.loc.y > canvas.height) this.loc.y = 0
    if(this.loc.y < 0) this.loc.y = canvas.height
}    