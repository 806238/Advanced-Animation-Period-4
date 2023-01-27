function World() {

    this.cnvMain = document.getElementById('cnv1');
    this.ctxMain = this.cnvMain.getContext('2d');
    this.cnvMini = document.getElementById('cnv2');
    this.ctxMini = this.cnvMini.getContext('2d');
    //  vector to locate canvas in the world
  
  
    this.dims = {
      top: -1500,
      left: -2000,
      bottom: 1500,
      right: 2000,
      width: 4000,
      height: 3000
    }

    this.hero = [];
    
    
  
    //Step 1::reduce world to fit inside of mini Canvas
      this.scaleX = this.cnvMini.width/this.dims.width;
      this.scaleY = this.cnvMini.height/this.dims.height;
      this.cnvMainLoc = new JSVector(0, 0);
  
        // add an event handler such that the a, s, w, d keys
        // will reposition the canvas within the world.
        window.addEventListener("keypress", function (event) {
          switch (event.code) {
            //  What is "this" inside of the listener????????????????????
            case "KeyW":
              if (world.cnvMainLoc.y + 100 > world.dims.top)
                world.cnvMainLoc.y -= 10;
              break;
            case "KeyS":
              if (world.cnvMainLoc.y + world.cnvMain.height - 100 < world.dims.bottom)
                world.cnvMainLoc.y += 10;
              break;
            case "KeyA":
              if (world.cnvMainLoc.x + 100 > world.dims.left)
                world.cnvMainLoc.x -= 10;
              break;
            case "KeyD":
              if (world.cnvMainLoc.x + world.cnvMain.width - 100 < world.dims.right)
                world.cnvMainLoc.x += 10;
              break;
              break;
          }
        }, false);
        
  }//++++++++++++++++++++++++++++++  end world constructor
  
  
  
  // run the world in animation
  World.prototype.run = function () {
    // ########################################################
    //  Clear the rectangle in the main Canvas
    this.ctxMain.clearRect(0, 0, this.cnvMain.width, this.cnvMain.height);
    this.ctxMini.clearRect(0, 0, this.cnvMini.width, this.cnvMini.height);
    
  
    //  move the main canvas inside of the world
    this.ctxMain.save();
    this.ctxMini.save();
    
    this.ctxMain.translate(-this.cnvMainLoc.x, -this.cnvMainLoc.y);
    this.ctxMini.translate(this.cnvMini.width/2,this.cnvMini.height/2);
  
  
  
    this.ctxMain.beginPath();
    this.ctxMain.moveTo(this.dims.left,0);
    this.ctxMain.lineTo(this.dims.right,0);
    this.ctxMain.closePath();
    this.ctxMini.lineWidth = 5;
    this.ctxMain.strokeStyle = "white";
    this.ctxMain.stroke();
  
    this.ctxMain.beginPath();
    this.ctxMain.moveTo(0,this.dims.top);
    this.ctxMain.lineTo(0,this.dims.bottom);
    this.ctxMain.closePath();
    this.ctxMini.lineWidth = 5;
    this.ctxMain.strokeStyle = "white";
    this.ctxMain.stroke();
  
    this.ctxMain.beginPath();
    this.ctxMain.moveTo(this.dims.left,this.dims.top);
    this.ctxMain.lineTo(this.dims.right,this.dims.top);
    this.ctxMain.lineTo(this.dims.right,this.dims.bottom);
    this.ctxMain.lineTo(this.dims.left,this.dims.bottom);
    this.ctxMain.closePath();
    this.ctxMini.lineWidth = 5;
    this.ctxMain.strokeStyle = "white";
    this.ctxMain.stroke();
  
    
    //  scale the world to fit into the miniCanvas
    this.ctxMini.scale(this.scaleX, this.scaleY);
    
  
    //  center the world inside of the miniCanvas
    for (let i = 0; i < this.hero.length; i++) {
        this.hero[i].run();
      }
      
      this.bg1.run();
  
    //  restore the context
    
    this.ctxMain.restore();
    
    // Step Three:  Draw the mainCanv and axes in the miniCanv ########################################################
    //    scale cnvMini to contain the entire world
    //    center the world in miniCnv
    //    draw x and y axes on miniMap
    this.ctxMini.beginPath();
    this.ctxMini.moveTo(this.dims.left,0);
    this.ctxMini.lineTo(this.dims.right,0);
    this.ctxMini.closePath();
    this.ctxMini.lineWidth = 5;
    this.ctxMini.strokeStyle = "white";
    this.ctxMini.stroke();
    
    this.ctxMini.beginPath();
    this.ctxMini.moveTo(0,this.dims.top);
    this.ctxMini.lineTo(0,this.dims.bottom);
    this.ctxMini.closePath();
    this.ctxMini.lineWidth = 5;
    this.ctxMini.strokeStyle = "white";
    this.ctxMini.stroke();
  
    //    outline box inside of cnvMini
    this.ctxMini.beginPath();
    this.ctxMini.moveTo(this.cnvMainLoc.x, this.cnvMainLoc.y);
    this.ctxMini.lineTo(this.cnvMainLoc.x+this.cnvMain.width, this.cnvMainLoc.y);
    this.ctxMini.lineTo(this.cnvMainLoc.x+this.cnvMain.width, this.cnvMainLoc.y+this.cnvMain.height);
    this.ctxMini.lineTo(this.cnvMainLoc.x, this.cnvMainLoc.y+this.cnvMain.height);
    this.ctxMini.closePath();
    this.ctxMini.lineWidth = 20;
    this.ctxMini.strokeStyle = "red"
    this.ctxMini.stroke();
    this.ctxMini.restore();
  }

  World.prototype.loadHero = function(n,loc){
    this.loc = loc;
    for(let i=0;i<n;i++){
        this.hero.push(new Hero(this.loc, this.ctxMain));
      }
  }

  World.prototype.loadBackgounds = function(){
    this.bg1 = new Bg1(this.ctxMain);
  }
  
  
