class Game{
    constructor(){
    
      this.gamePaused = false;
      this.ga = new GameArea();
      this.bg1 = new Bg1();
      this.bg2 = new Bg2();
      this.bg3 = new Bg3();
    }


    update = function(){
      this.bg1.run()
      this.bg2.run()
      this.bg3.run()

    }


}//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  end Game constructor
