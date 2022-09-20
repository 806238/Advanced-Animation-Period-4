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
    context.closePath();
    }
    if(this === Ships[2]){
    context.beginPath();
    context.save();
    context.translate(Ships[0].loc.x, Ships[0].loc.y);
    context.rotate(Ships[0].vel.getDirection());
    context.moveTo(this.diam-30, 0);
    context.lineTo(-10, this.diam/8);
    context.lineTo(Math.random()*((this.diam-70) - (this.diam-40)) + (this.diam-40), 0);
    context.lineTo(-10, -this.diam/8);
    context.strokeStyle = "red";
    context.fillStyle = "red";
    context.fill();
    context.stroke();
    context.closePath();
    context.restore();
    } /*else {
    context.beginPath();
    context.arc(this.loc.x, this.loc.y, this.diam, 0, 2 * Math.PI);
    context.strokeStyle = "white";
    context.fillStyle = "white";
    context.fill();
    context.stroke();
    }*/
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
        if(Ships[0].loc.distance(Ships[1].loc)<200){ 
    this.acc = JSVector.subGetNew(Ships[1].loc, Ships[0].loc) 
        this.acc.normalize();
        this.acc.multiply(.5);
        this.vel.limit(2);
        this.vel.add(this.acc);
        this.loc.add(this.vel);       
        }
        if(Ships[0].loc.distance(Ships[1].loc)<60){
            Ships[1].loc.x = Math.random()*canvas.width;
            Ships[1].loc.y = Math.random()*canvas.height;
        }
    }
}


Ship.prototype.checkEdges = function () { 
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