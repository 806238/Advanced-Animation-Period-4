function Segment(x,y,clr,ctx){
    this.sloc = new JSVector(x,y);
    this.svel = new JSVector(Math.random()*4-2,Math.random()*4-2);
    this.clr = clr;
    this.ctx = ctx;
}

Segment.prototype.run = function(){
    this.render();
    this.update();
    this.checkEdges();
}

Segment.prototype.render = function(){
    this.ctx.beginPath();
    this.ctx.arc(this.sloc.x,this.sloc.y,10, 0, 2 * Math.PI);
    this.ctx.closePath();
    this.ctx.strokeStyle = this.clr;
    this.ctx.fillStyle = this.clr;
    this.ctx.fill();
    this.ctx.stroke();
}

Segment.prototype.update = function(){

}

Segment.prototype.checkEdges = function(){

}