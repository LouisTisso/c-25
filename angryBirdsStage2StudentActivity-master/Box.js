class Box extends BaseClass {
  constructor(x, y, width, height) {
    super(x,y,width,height);
    this.image=loadImage("sprites/wood1.png");
    //this.image=loadImage("sprites/wood2.png");
  }
  display(){
   super.display() ;
  }
};
