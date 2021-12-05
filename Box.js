class Box {
    constructor(x,y,width,height){
   var box_Option={
       restitution:0.8,
       density:1
                  }
   this.width=width;
   this.height=height;
   this.body=Bodies.rectangle(x,y,width,height,box_Option);
   World.add(world,this.body)
    }

    display(){
   var pos=this.body.position;
   var Angle=this.body.angle;
   push();
   translate(pos.x,pos.y);
   rotate(Angle);
   rectMode(CENTER);
   fill("blue");
   rect(0,0,this.width,this.height);
   pop();

    }
}
