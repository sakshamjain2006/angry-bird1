class Chain{
    constructor(body1,body2){
       var Options = {
        bodyA : body1,
        bodyB : body2,
        length: 20,
        stiffness:0.05
    }
    this.chain=Constraint.create(Options);
    World.add(world,this.chain);   
    }
}