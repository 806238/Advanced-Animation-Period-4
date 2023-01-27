function Bg1(ctx){
    this.loc = new JSVector(0,0);
    this.vel = new JSVector(0,0);
    this.ctx = ctx;
}

Bg1.prototype.run = function(){
    this.render();
}

Bg1.prototype.render = function(){
    this.ctx.beginPath();
    this.ctx.rect(this.loc.x,this.loc.y,canvas.width,canvas.height);
    this.ctx.strokeStyle = "#00A6FF"
    this.ctx.fillStyle = "#00A6FF"
    this.ctx.stroke();
    this.ctx.fill();
    this.ctx.closePath();

}