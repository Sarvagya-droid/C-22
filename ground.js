class Ground{
    constructor(){
        var option2 ={
            isStatic : true
        }
        this.body = Bodies.rectangle(200, 390, 400, 30, option2);
        World.add(world, this.body);
    }

    visibleGround(){
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
}