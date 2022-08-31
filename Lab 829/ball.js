function Ball(x,y,d){
    this.loc = new JSvector(x, y);
    let dx = Math.random()*4-2
    let dy = Math.random()*4-2
    this.vel = new JSvector(dx, dy);
    this.acc = new JSvector(0, 0.05);
    this.diam = d;
    this.colorArray = ["#FF2D00", "#00FF23", "#00FFC9", "#00FFC9", "#00FFC9"];
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
    context.strokeStyle = "black";  // color to fill
    context.fillStyle = this.color;     // color to stroke
    context.fill();     // render the fill
    context.stroke();   // render the stroke
}

Ball.prototype.update = function () {

}

Ball.prototype.bounce = function () { 

}