function ParticleSystem(x,y,ctx1,ctx2,clr){
    this.ploc = new JSVector(x,y);
    this.ctx1 = ctx1;
    this.ctx2 = ctx2;
    this.clr = clr
    this.particles = [];
    
}

ParticleSystem.prototype.run = function(){
    this.particles.push(new particle(this.ploc,this.ctx1,this.ctx2,this.clr));
    for(let i = 0;i<this.particles.length;i++){
        this.particles[i].run();
    }
    this.isDead();
}

ParticleSystem.prototype.isDead = function(){
    for(let i = this.particles.length-1;i>=0;i--){
        if(this.particles[i].isDead == true){
            this.particles.splice(i,1);
        }
    }
}