function Orbiter(x,y,a){
    this.orbRad = 50;
    this.rad = 15;
    this.angVel = .5;
    this.angle = a; 
    this.loc = new JSVector(this.orbRad*Math.cos(this.angle), this.orbRad*Math.sin(this.angle));
}

Orbiter.prototype.run = function(){
    this.render();
    this.update();
}

Orbiter.prototype.render = function(){
    context.beginPath();    // clear old path
    context.arc(100, 100, this.rad, 0, 2 * Math.PI);
    context.strokeStyle = "gray";  // color to fill
    context.fillStyle = "gray";     // color to stroke
    context.fill();     // render the fill
    context.stroke();   // render the stroke
}

Orbiter.prototype.update = function () {
    
}


