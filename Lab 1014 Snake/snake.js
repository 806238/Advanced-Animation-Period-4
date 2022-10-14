// Snake constructor

function Snake(location, numSegs, segLength,ctx) {
    //  number of segments, segment length
    this.loc = location;
    this.vel = new JSVector(0,0);
    this.numSegs = numSegs;
    this.segLength = segLength;
    this.segments = [];
    this.loadSegments();
    this.clr = "rgba(20,200,100,0.50)"
    this.ctx = ctx;
}

Snake.prototype.loadSegments = function () {
    for(let i = 0;i<this.numSegs;i++){
        if(this === this.segments[0]){
            this.segments[0] = new JSVector(100,100)
        }
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
    for(let i = 0;i<this.segments.length;i++){
        if(this === this.segments[0]){
        this.ctx.beginPath();
        this.ctx.arc(this.loc.x,this.loc.y,10, 0, 2 * Math.PI);
        this.ctx.closePath();
        this.ctx.strokeStyle = this.clr;
        this.ctx.fillStyle = this.clr;
        this.ctx.fill();
        this.ctx.stroke();
        }
    }
}

Snake.prototype.update = function () {

}

Snake.prototype.checkEdges = function(){

}


