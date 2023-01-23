function Bg2(){
    this.loc = new JSVector(0,0);
    this.vel = new JSVector(0,0);
}

Bg2.prototype.run = function(){
    this.render();
    this.update();
    this.checkEdges();
}

Bg2.prototype.render = function(){

}

Bg2.prototype.update = function(){

}

Bg2.prototype.checkEdges = function(){

}