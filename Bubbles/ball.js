function Ball(x,y,d){
    this.loc = new JSVector(x, y);
    this.vel = new JSVector(0, 0);
    this.acc = new JSVector(0, .05);
    this.diam = d;
    this.color = "#ADD8E6";
    this.isOverlapping = false;
}

Ball.prototype.run = function(){
    this.render();
    this.update();
    this.bounce();
    this.Overlapping();  
}

Ball.prototype.Overlapping = function(){ 
    isOverlapping = false;
    this.color = "#ADD8E6";
    for(let i = 0; i < balls.length; i++){
        if(this !== balls[i]){
        let d = this.loc.distance(balls[i].loc);
            if(d < this.diam){
                isOverlapping = true;
                this.color = "blue";
                this.acc = JSVector.subGetNew(this.loc, balls[i].loc)        
                this.acc.normalize();
                this.acc.multiply(.05);  
            }
        }
    }
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
    this.vel.x = Math.random()*6-3;
    this.vel.y = Math.random()*6-3;
    this.vel.limit(3);
    this.loc.add(this.vel);
    this.vel.add(this.acc);
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