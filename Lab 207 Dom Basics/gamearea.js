function GameArea(){
    //  Wrapper Div
    this.wrapperDiv = document.getElementById("wrapperDiv");
    this.wrapperDiv.setAttribute("style", " background-color:yellow; border: 5px solid white; width:1200px; height:800px;");
    // create tileMenuDiv
    this.tileMenuDiv = document.createElement("div");
    this.wrapperDiv.appendChild(this.tileMenuDiv)
    this.tileMenuDiv.setAttribute("style", " background-color:#000000; width:1200px; height:100px;float:left;");

    this.lefttileMenuDiv = document.createElement("div");
    this.wrapperDiv.appendChild(this.lefttileMenuDiv)
    this.lefttileMenuDiv.setAttribute("style", " background-color:#000000; border: 0px solid black;width:100px; height:700px;float:left;");

    this.canvasDiv = document.createElement("div");
    this.wrapperDiv.appendChild(this.canvasDiv)
    this.canvasDiv.setAttribute("style", " background-color:pink; border: 0px solid black; width:800px; height:600px;float:left;");

    this.righttileMenuDiv = document.createElement("div");
    this.wrapperDiv.appendChild(this.righttileMenuDiv)
    this.righttileMenuDiv.setAttribute("style", " background-color:#000000; border: 0px solid black;width:200px; height:700px;float:right;");

    let myImage1 = new Image(200, 130);
    myImage1.src = 'penguin.jpeg';
    this.righttileMenuDiv.appendChild(myImage1); 
    myImage1.setAttribute("style","border: 0px solid white;")



    // create canvasDiv
    

    

    // place canvas in div and style
    this.canvasDiv.appendChild(canvas);
    //  create tiles for tile menu
    this.tiles = [];
    this.tileText = [];
    for(let i = 0; i < 8; i++){
       this.tiles[i] = document.createElement("div");
       this.tileMenuDiv.appendChild(this.tiles[i]);
       this.tiles[i].setAttribute("class", "tile");
       this.tileText[i] = document.createTextNode("Col " + (i + 1) + "");
       //this.t1Text.style.padding = "10px";
       this.tiles[i].appendChild(this.tileText[i]);
    }

    this.lefttiles = [];
    this.lefttileText = [];
    for(let i = 0; i < 6; i++){
      this.lefttiles[i] = document.createElement("div");
      this.lefttileMenuDiv.appendChild(this.lefttiles[i]);
      this.lefttiles[i].setAttribute("class", "lefttile");
      this.lefttileText[i] = document.createTextNode("Row " + (i + 1) + "");
      //this.tText.style.padding = "10px";
      this.lefttiles[i].appendChild(this.lefttileText[i]);
   }

   this.righttiles = [];
    this.righttileText = [];
    for(let i = 0; i < 1; i++){
      this.righttiles[i] = document.createElement("div");
      this.righttileMenuDiv.appendChild(this.righttiles[i]);
      this.righttiles[i].setAttribute("class", "righttile");
      let myImage2= new Image(100, 80);
      myImage2.src = 'dog.jpg';
      this.righttiles[i].appendChild(myImage2); 
      myImage2.setAttribute("class","dog")
      this.righttileText[i] = document.createTextNode("Big Button");
      //this.tText.style.padding = "10px";
      this.righttiles[i].appendChild(this.righttileText[i]);
   }

    //  Add listeners to tile objects
    for(let i = 0; i < this.tiles.length; i++){
        this.tiles[i].addEventListener('mouseover', // mouseover is the name of an event
                                        function(){//  JavaScript has anonymous functions
                                          //  'this' is the listener target object: tile
                                          //  'this' does not refer to the PlayArea object
                                          this.style.backgroundColor = "#ac8fe3"
                                        },
                                        false);
        this.tiles[i].addEventListener('mouseout', function(){
            this.style.backgroundColor = "#0066ff"
          },false);
        this.tiles[i].addEventListener('click', function(){
            game.gamePaused = !game.gamePaused;
            console.log("Mouse Clicked");
          },false);
    }

    for(let i = 0; i < this.lefttiles.length; i++){
      this.lefttiles[i].addEventListener('mouseover', // mouseover is the name of an event
                                      function(){//  JavaScript has anonymous functions
                                        //  'this' is the listener target object: tile
                                        //  'this' does not refer to the PlayArea object
                                        this.style.backgroundColor = "#ac8fe3"
                                      },
                                      false);
      this.lefttiles[i].addEventListener('mouseout', function(){
          this.style.backgroundColor = "#00ff2f"
        },false);
      this.lefttiles[i].addEventListener('click', function(){
          game.gamePaused = !game.gamePaused;
          console.log("Mouse Clicked");
        },false);
  }

  const throttle = (func, limit) => {
    let lastFunc
    let lastRan
    return function() {
      const context = this
      const args = arguments
      if (!lastRan) {
        func.apply(context, args)
        lastRan = Date.now()
      } else {
        clearTimeout(lastFunc)
        lastFunc = setTimeout(function() {
          if ((Date.now() - lastRan) >= limit) {
            func.apply(context, args)
            lastRan = Date.now()
          }
        }, limit - (Date.now() - lastRan))
      }
    }
  }

  for(let i = 0; i < this.righttiles.length; i++){
    this.righttiles[i].addEventListener('click', throttle(function(){console.log("cooldown");this.style.backgroundColor = "#500000"},10000),false);
}


}
