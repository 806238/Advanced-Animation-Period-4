function Bg1(){
    this.loc = new JSVector(0,0);
    this.vel = new JSVector(0,0);
}

Bg1.prototype.run = function(){
    this.render();
    this.update();
    this.checkEdges();
}

Bg1.prototype.render = function(){
    ctx.beginPath();
    ctx.moveTo(this.loc.x,this.loc.y+600);
    ctx.lineTo(this.loc.x+400,this.loc.y+100);
    ctx.lineTo(this.loc.x+800,this.loc.y+600);    
    ctx.fillStyle = "#252525";
    ctx.strokeStyle = "#252525";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

Bg1.prototype.update = function(){

}

Bg1.prototype.checkEdges = function(){

}