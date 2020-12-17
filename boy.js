class boy
{

  
   constructor(x,y,width,height)
   {
     
     this.body = Bodies.rectangle(x, y, width)
     this.width = width;
     this.height = height;
     World.add(world, this.body)
     this.image = loadImage("Plucking mangoes/boy.png")

   }

   display()
   {
     var boyPos = this.body.position;
     image(this.image, boyPos.x, boyPos.y, this.width, this.height)
     imageMode(CENTER)
   }

}