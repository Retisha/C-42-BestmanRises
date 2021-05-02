class Drop{
    constructor(x,y){
       
      this.body =   Bodies.circle(x,y,5)
      World.add(world,this.body)
     
    }
    display(){
        fill("blue")
        ellipse(this.body.position.x,this.body.position.y,5,5)
    }
    updateY(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,100)})
        }
    }
}