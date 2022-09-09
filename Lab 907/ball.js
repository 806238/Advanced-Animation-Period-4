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
    this.loc.add(this.vel);
    this.vel.add(this.acc);

    if(this === balls[0]){
        this.color = "black";
        balls[0].loc.sub(this.loc)

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





/*if(this !== balls[0]){
    this.acc = balls[0].loc.sub(this.loc);
    this.acc.normalize();   
    this.acc.multiply(0.5)
    }
    this.vel.add(this.acc);     
    this.vel.limit(3);          
    this.loc.add(this.vel);
    */