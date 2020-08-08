class particle {
    constructor(x, y,r) {
      var options = {
          
          restitution:0.4,
      }
    this.r*r;

      this.body = Bodies.circle(this.x,this.y,this.r,);
      this.color = color(random(0,255) , random(0,255) , random(0,255));
      World.add(world , this.body);
      
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      
      push();
      translate(pos.x, pos.y);
      
      noStroke();
      ellipseMode(CENTER);
      fill(this.color);
      ellipse(0, 0, this.r, this.r);
      pop();
    }
  };