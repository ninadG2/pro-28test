class connector
{
    constructor(body1, point2)
    {
        var options = 
        {
         bodyA :body1,
        'pointB' : point2,
        'stiffness' : 0.04,
        'length' :10
        }

        this.connect = constraint.create(options)
        World.add(world, this.connect)
     
    }   
     display()
      {
          var boyPos = this.body.bodyA.position;
          var stonePos = this.body.pointB;
          stroke("white")
          line(boyPos.x,boyPos.y,stonePos.x,stonePos.y)

      }
    

 }