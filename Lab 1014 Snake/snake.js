// Snake constructor

function Snake(location, numSegs, segLength,ctx) {
    //  number of segments, segment length
    this.loc = location;
    this.vel = new JSVector(Math.random()*20-10, Math.random()*20-10);
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
        this.segments[i] = new JSVector(Math.random()*canvas.width,Math.random()*canvas.height);
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
        this.ctx.strokeStyle = "black";
        this.ctx.fillStyle = "black";
        this.ctx.fill();
        this.ctx.stroke();

        for(let i = 1;i<this.segments.length;i++){
            this.ctx.beginPath();
            this.ctx.arc(this.segments[i-1].x,this.segments[i-1].y,10, 0, 2 * Math.PI);
            this.ctx.closePath();
            this.ctx.strokeStyle = this.clr;
            this.ctx.fillStyle = this.clr;
            this.ctx.fill();
            this.ctx.stroke();

            this.ctx.beginPath();
            this.ctx.moveTo(this.segments[i-1].x,this.segments[i-1].y);
            this.ctx.lineTo(this.segments[i].x,this.segments[i].y);
            this.ctx.closePath();
            this.ctx.strokeStyle = "black";
            this.ctx.lineWidth = 1;
            this.ctx.stroke();

            this.ctx.beginPath();
            this.ctx.moveTo(this.loc.x,this.loc.y);
            this.ctx.lineTo(this.segments[0].x,this.segments[0].y);
            this.ctx.closePath();
            this.ctx.strokeStyle = "black";
            this.ctx.lineWidth = 1;
            this.ctx.stroke();
        }
}

Snake.prototype.update = function () {
   this.loc.add(this.vel);
   this.vel.limit(2)
   this.segments[0] = this.loc;
   for(let i = 1;i<this.segments.length;i++){
    let seg = this.segments[i];
    let prev = this.segments[i-1];
    let diff = JSVector.subGetNew(seg, prev);
    diff.setMagnitude(this.segLength);
    diff.add(prev);
    this.segments[i] = diff;
   }
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


