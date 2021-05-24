class Box {
  constructor(x, y, width, height){
    var options = {
      friction: 0,
      restitution:0.4,
      stiffness : 0.9
    }
    this.visibility = 255
    this.body = Bodies.rectangle(x, y, width, height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    console.log(this.body.speed)
    if (this.body.speed < 5){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y)
      rotate(angle)
      rectMode(CENTER);
      rect(0,0, this.width, this.height);
      pop();
    } else {
        World.remove(world,this.body)
        push();
        this.visibility = this.visibility - 5;
        pop();
    }
  }
}
