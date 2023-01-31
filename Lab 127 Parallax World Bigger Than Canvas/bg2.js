function Bg2(ctx){
    this.loc = new JSVector(0,0);
    this.vel = new JSVector(0,0);
    this.ctx = ctx;
}

Bg2.prototype.run = function(loc){
    this.render(loc);
}

Bg2.prototype.render = function(loc){
    this.ctx.beginPath();
    for(let i = 0;i<50;i++){
        this.ctx.rect((i*801)+loc.x*.50,200+loc.y*.25,800,200);
    }
    this.ctx.strokeStyle = "white"
    this.ctx.fillStyle = "#0043BF"
    this.ctx.lineWidth = 5;
    this.ctx.stroke();
    this.ctx.fill();
    this.ctx.closePath();

}