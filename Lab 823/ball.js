var context;

class Ball{
    constructor(x, y, dx, dy, rad){
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.rad = rad;

        function render(){
            context.arc(x, y, rad, 0, 2 * Math.PI);
            context.strokeStyle = "black";  // color to fill
            context.fillStyle = "blue";     // color to stroke
            context.fill();     // render the fill
            context.stroke();   // render the stroke
            
        }
    }
}