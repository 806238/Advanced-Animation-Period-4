function Bg3(ctx){
    this.loc = new JSVector(0,0);
    this.vel = new JSVector(0,0);
    this.ctx = ctx;
}

Bg3.prototype.run = function(loc){
    this.render(loc);
}

Bg3.prototype.render = function(loc){
    this.ctx.beginPath();
    for(let i = 0;i<75;i++){
        this.ctx.rect((i*801)+loc.x*.25,400+loc.y*.25,800,200);
    }
    this.ctx.strokeStyle = "white"
    this.ctx.fillStyle = "#008BFF"
    this.ctx.lineWidth = 5;
    this.ctx.stroke();
    this.ctx.fill();
    this.ctx.closePath();

}