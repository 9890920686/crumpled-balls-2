class paper {

constructor () {

    var options={
        'restitution':0.5,
        'friction':0.3,
        'density':1,
        'isStatic':false
    }

    this.body=Bodies.circle(100,650,20,options);
    World.add(world,this.body);
    
    this.width=20
    this.height=20

    World.add(world,this.body);
}
display(){

    push()
    translate(this.body.position.x,this.body.position.y)
    strokeWeight(3)
    stroke("white")
    fill("red")
    
    ellipse(0,0,20,20)

    pop();

}

}


