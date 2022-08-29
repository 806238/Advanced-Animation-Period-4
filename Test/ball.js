let balls = [];

function Ball(x,y,dx,dy,rad){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.rad = rad;
}

Ball.prototype.diam = function(){
    return this.rad*2
}  

Ball.prototype.animate();