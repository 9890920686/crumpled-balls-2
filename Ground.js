class Ground {

constructor (){

var options={
    'isStatic':true
}

this.body=Bodies.rectangle(500,680,1000,10,options)

this.width=800;
this.height=10;

World.add(world,this.body)

}

display(){

    rectMode(CENTER)

    strokeWeight(4)
stroke("blue")
fill("blue")

    rect(500,680,1000,10)
}

}