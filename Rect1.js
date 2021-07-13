class Rect1{


    constructor(){
     var options={
        restitution: 0 
     }
      this.body=Bodies.rectangle(550,400,50,50,options)
    this.width = 20;
    this.height = 100;
    
    World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER) 
        rect(pos.x,pos.y,this.width,this.height);
    }
}