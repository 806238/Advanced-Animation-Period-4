// Snake constructor

function Snake(location, numSegs, segLength,ctx) {
    //  number of segments, segment length
    this.loc = location;
    this.vel = new JSVector(Math.random()*4-2, Math.random()*4-2);
    this.numSegs = numSegs;
    this.segLength = segLength;
    this.segments = [];
    this.loadSegments();
    this.clr = "rgba(20,200,100,.5)"
    this.ctx = ctx;
    this.acc = new JSVector(0,0);
}

Snake.prototype.loadSegments = function () {
    for(let i = 0;i<this.numSegs;i++){
        this.segments[i] = new Segment(this.loc.x,this.loc.y,this.clr,this.ctx);
    }
}

Snake.prototype.run = function () {
    for(let i = 0;i<this.numSegs;i++){
        this.segments[i].run();
    }
    this.render();
    this.update();
    this.checkEdges();
}

Snake.prototype.render = function () {
        this.ctx.beginPath();
        this.ctx.arc(this.loc.x,this.loc.y,10, 0, 2 * Math.PI);
        this.ctx.closePath();
        this.ctx.strokeStyle = this.clr;
        this.ctx.fillStyle = this.clr;
        this.ctx.fill();
        this.ctx.stroke();
}

Snake.prototype.update = function () {
   this.loc.add(this.vel);
}

Snake.prototype.checkEdges = function(){
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


