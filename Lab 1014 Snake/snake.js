// Snake constructor

function Snake(location, numSegs, segLength,ctx) {
    //  number of segments, segment length
    this.loc = location;
    this.vel = new JSVector(Math.random()*4-2, Math.random()*4-2);
    this.numSegs = numSegs;
    this.segLength = segLength;
    this.segments = [];
    this.loadSegments();
    this.clr = "rgba(20,200,100,0.50)"
    this.ctx = ctx;
    this.acc = new JSVector(0,0);
}

Snake.prototype.loadSegments = function () {
    for(let i = 0;i<this.numSegs;i++){
        this.segments[i] = new JSVector(this.loc.x,this.loc.y);
        console.log(this.segments[i]);
    }
}

Snake.prototype.run = function () {
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
        for(let i = 0;i<this.segments.length;i++){
        this.ctx.beginPath();
        this.ctx.arc(this.segments[i].x,this.segments[i].y,10, 0, 2 * Math.PI);
        this.ctx.closePath();
        this.ctx.strokeStyle = this.clr;
        this.ctx.fillStyle = this.clr;
        this.ctx.fill();
        this.ctx.stroke();
        }
    for(let i = 1;i<this.segments.length;i++){
            this.ctx.beginPath();
            this.ctx.moveTo(this.loc.x,this.loc.y);
            this.ctx.lineTo(this.segments[i].x,this.segments[i].y);
            this.ctx.closePath();
            this.ctx.strokeStyle = 'Black';
            this.ctx.lineWidth = 10;
            this.ctx.stroke();
        }
}

Snake.prototype.update = function () {
   
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


