function Bg3(){
    this.loc = new JSVector(0,0);
    this.vel = new JSVector(0,0);
}

Bg3.prototype.run = function(){
    this.render();
    this.update();
    this.checkEdges();
}

Bg3.prototype.render = function(){

}

Bg3.prototype.update = function(){

}

Bg3.prototype.checkEdges = function(){

}