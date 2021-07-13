class Rect2{


    constructor(){
     var option={
        restitution: 0
     }
     this.body=Bodies.rectangle(400,650,90,50,{isStatic:true});
    this.width = 280;
    this.height = 20;
  
    World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER) 
        rect(pos.x,pos.y,this.width,this.height);
    }
}
