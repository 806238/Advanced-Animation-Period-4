function Planet(x, y, d, n){
    this.loc = new JSVector(x, y);
    let dx = Math.random()*10-5;
    let dy = Math.random()*10-5;
    this.vel = new JSVector(dx, dy);
    this.diam = d;
    this.colorArray = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "brown", "gray"]
    this.colorIndex = Math.floor(Math.random() * this.colorArray.length);
    this.color = this.colorArray[this.colorIndex];
    this.numOrbs = n;
    let orbiters = [];
    for(let i = 0; i<this.numOrbs; i++){
        let x = Math.random()*canvas.width;
        let y = Math.random()*canvas.height;
        let d = Math.random()*(20-10)+10;
        orbiters.push(new Orbiter(x,y,d));
    }
}

Planet.prototype.run = function(){
    this.render();
    this.update();
    this.checkEdges();
}

Planet.prototype.render = function(){
    context.beginPath();
    context.arc(this.loc.x, this.loc.y, this.diam, 0, 2 * Math.PI);
    context.strokeStyle = this.color;
    context.fillStyle = this.color;
    context.fill();
    context.stroke();
    context.closePath();
}

Planet.prototype.update = function () {
    this.loc.add(this.vel);
    this.vel.limit(1);
    
}


Planet.prototype.checkEdges = function () { 
    if(this.loc.x > canvas.width) this.loc.x = 0
    if(this.loc.x < 0) this.loc.x = canvas.width
    if(this.loc.y > canvas.height) this.loc.y = 0
    if(this.loc.y < 0) this.loc.y = canvas.height
}


