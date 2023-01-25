class Game {
  constructor() {

    this.gamePaused = false;
    this.ga = new GameArea();
    this.bg1 = new Bg1();
    this.bg2 = new Bg2();
    this.bg3 = new Bg3();
    this.hero = new Hero();
    this.platform = new Platform();
    this.resource = new Resource();
    this.trap = new Trap();
  }


  update = function () {
    this.bg1.run();
    this.bg2.run();
    this.bg3.run();
    this.hero.run();
    this.platform.run();
    this.resource.run();
    this.trap.run();
    ctx.fillStyle = "#17004B";
    ctx.strokeStyle = "#17004B";

  }


}//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  end Game constructor
