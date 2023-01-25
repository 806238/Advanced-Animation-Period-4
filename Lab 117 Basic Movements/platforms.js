function Platform(){
    this.loc = new JSVector(25,400)
}

Platform.prototype.run = function(){
    this.render();
    this.update();
}

Platform.prototype.render = function(){
    ctx.beginPath();
    ctx.rect(this.loc.x, this.loc.y+50, 150, -50)
    ctx.rect(this.loc.x+250, this.loc.y, 150, -50)
    ctx.rect(this.loc.x+600, this.loc.y, 150, -50)
    ctx.rect(this.loc.x+800, this.loc.y-125, 150, -50)
    ctx.fillStyle = "brown";
    ctx.strokeStyle = "brown";
    ctx.fill();
    ctx.stroke();       
    ctx.closePath();
}

Platform.prototype.update = function(){

}

