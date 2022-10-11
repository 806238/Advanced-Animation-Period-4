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

this.particleSystems = [];

  //Step 1:reduce world to fit inside of mini Canvas
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
              world.cnvMainLoc.y -= 20;
            break;
          case "KeyS":
            if (world.cnvMainLoc.y + world.cnvMain.height - 100 < world.dims.bottom)
              world.cnvMainLoc.y += 20;
            break;
          case "KeyA":
            if (world.cnvMainLoc.x + 100 > world.dims.left)
              world.cnvMainLoc.x -= 20;
            break;
          case "KeyD":
            if (world.cnvMainLoc.x + world.cnvMain.width - 100 < world.dims.right)
              world.cnvMainLoc.x += 20;
            break;
            break;
        }
      }, false);

  this.cnvMain.addEventListener("click", test);
    var n = 0;
  function test(event){
  n++;
  console.log(n);
  console.log(event);
  this.mouseLoc = new JSVector(event.offsetX,event.offsetY);
  this.mouseLoc = this.cnvMainLoc.addGetNew(this.mouseLoc);

  world.particleSystems.push(new ParticleSystem(this.mouseLoc.x, this.mouseLoc.y, world.getRandomColor()))
}

}//++++++++++++++++++++++++++++++  end world constructor


// run the world in animation
World.prototype.run = function () {
  // Step Two:  Move cnvMain in the world and run movers  ########################################################
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

  //  run the movers in both canvas
  for (let i = 0; i < this.particleSystems.length; i++) {
    this.particleSystems[i].run();
  }
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
  this.ctxMini.strokeStyle = "white"
  this.ctxMini.stroke();
  
  this.ctxMini.restore();
}


World.prototype.getRandomColor = function () {
  //  List of hex color values for movers
  let colors = [
    "#7102AB",
    "#ab0256",
    "#0285ab",
    "#02ab1a",
    "#ab5302",
    "#773e26",
    "#ab3256",
    "#257874",
    "#78254e",
    "#787725"
  ];
  let index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

