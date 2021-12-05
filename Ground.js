class Ground {
    constructor(x,y,width,height){
   var Ground_Option={
       isStatic:true
   }
   this.width=width;
   this.height=height;
   this.body=Bodies.rectangle(x,y,width,height,Ground_Option);
   World.add(world,this.body)
    }
    display(){
   var pos=this.body.position;
   rectMode(CENTER);
   fill("brown");
   rect(pos.x,pos.y,this.width,this.height);
   

    }
}