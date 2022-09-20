function Ship(x,y,d){
    this.loc = new JSVector(x, y);
    let dx = Math.random()*10-5;
    let dy = Math.random()*10-5;
    this.vel = new JSVector(dx, dy);
    this.acc = new JSVector(0, .05);
    this.diam = d;
    this.color = "yellow";
}

Ship.prototype.run = function(){
    this.render();
    this.update();
    this.checkEdges();
}

Ship.prototype.render = function(){
    if(this === Ships[0]){
    context.beginPath();   
    context.save();
    context.translate(this.loc.x,this.loc.y);
    context.rotate(this.vel.getDirection());
    context.moveTo(this.diam, 0);
    context.lineTo(0, this.diam/2);
    context.lineTo(this.diam-20, 0);
    context.lineTo(0, -this.diam/2);
    context.strokeStyle = this.color; 
    context.fillStyle = this.color;     
    context.fill();     
    context.stroke()
    context.closePath();
    context.restore();
    }
    if(this === Ships[1]){
    context.beginPath();
    context.arc(this.loc.x, this.loc.y, this.diam, 0, 2 * Math.PI);
    context.strokeStyle = "black";
    context.fillStyle = "green";
    context.fill();
    context.stroke();
    }
    if(this === Ships[3]){
        //trail code
    }
}

Ship.prototype.update = function () {
    if(this === Ships[0]){
    this.loc.add(this.vel);
    this.acc = JSVector.subGetNew(Ships[1].loc, Ships[0].loc)        
        this.acc.normalize();
        this.acc.multiply(.5);
        this.vel.limit(3);
        this.vel.add(this.acc);
        }
    if(this === Ships[1]){   
        if(Ships[0].loc.distance(Ships[1].loc)<50){ 
    this.acc = JSVector.subGetNew(Ships[0].loc, Ships[1].loc) 
    this.vel.add(this.loc)       
        this.acc.normalize();
        this.acc.multiply(.5);
        this.vel.limit(3);
        this.vel.add(this.acc);
        }
    }
}


Ship.prototype.checkEdges = function () { 
    if(this.loc.x > canvas.width) this.loc.x = 0
    if(this.loc.x < 0) this.loc.x = canvas.width
    if(this.loc.y > canvas.height) this.loc.y = 0
    if(this.loc.y < 0) this.loc.y = canvas.height
}