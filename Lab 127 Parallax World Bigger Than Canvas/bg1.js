function Bg1(ctx){
    this.loc = new JSVector(0,0);
    this.vel = new JSVector(0,0);
    this.ctx = ctx;
}

Bg1.prototype.run = function(loc){
    this.render(loc);
}

Bg1.prototype.render = function(loc){
    this.ctx.beginPath();
    for(let i = 0;i<25;i++){
        this.ctx.rect((i*801)+loc.x*.75,loc.y*.25,800,200);
    }
    this.ctx.strokeStyle = "white"
    this.ctx.fillStyle = "#00036B"
    this.ctx.lineWidth = 5;
    this.ctx.stroke();
    this.ctx.fill();
    this.ctx.closePath();

}