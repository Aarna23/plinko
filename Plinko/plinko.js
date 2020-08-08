class plinko {
    constructor(x, y,r) {
      var options = {
          isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.body = Bodies.circle(this.x,this.y,(this.r)/2 ,options);
      this.x = x;
      this.y = y;
      this.r = r;

      if(fraeCount% 60 === 0){
        particles.push(new particle(random(width/2.10 , width/2.10),10 ,10));
      }
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      push();
      translate(pos.x, pos.y);
      
      rectMode(CENTER);
      fill("white");
      ellipse(0, 0, this.r, this.r);
      pop();
    }
  };