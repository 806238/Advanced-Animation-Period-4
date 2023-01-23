function Background(x,y){
    this.loc = new JSVector(0,0);
    this.vel = new JSVector(0,0);
}

Background.prototype.run = function(){
    this.render();
    this.update();
    this.checkEdges();
}

Background.prototype.render = function(){

}

Background.prototype.update = function(){

}

Background.prototype.checkEdges = function(){

}