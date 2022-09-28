function Orbiter(x,y,a){
    this.loc = new JSVector(x,y);
    this.orbRad = 50;
    this.rad = 10;
    this.angVel = .05;
    this.angle = a; 
    this.orbloc = new JSVector(this.loc.x+this.orbRad*Math.cos(this.angle), this.loc.y+this.orbRad*Math.sin(this.angle));
    this.colorArray = ["red", "orange", "yellow", "green", "blue", "purple", "pink"]
    this.colorIndex = Math.floor(Math.random() * this.colorArray.length);
    this.color = this.colorArray[this.colorIndex];; 
}

Orbiter.prototype.run = function(x,y){
    this.render();
    this.update(x,y);
}

Orbiter.prototype.render = function(){
    context.beginPath();    
    context.arc(this.orbloc.x, this.orbloc.y, this.rad, 0, 2 * Math.PI);
    context.strokeStyle = this.color;  
    context.fillStyle = this.color;     
    context.fill();     
    context.stroke();   
    context.closePath();

    context.beginPath();
    context.moveTo(this.orbloc.x, this.orbloc.y);
    context.lineTo(this.loc.x, this.loc.y);
    context.strokeStyle = this.color;
    context.lineWidth = 1;
    context.stroke();
    context.closePath();    
}

Orbiter.prototype.update = function (x,y) {
    this.angle += this.angVel;
    this.loc.x = x;
    this.loc.y = y;
    this.orbloc.x = this.loc.x+this.orbRad * Math.cos(this.angle);
    this.orbloc.y = this.loc.y+this.orbRad * Math.sin(this.angle);
}


