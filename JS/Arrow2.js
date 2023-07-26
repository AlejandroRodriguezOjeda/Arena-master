class Arrow2{
    constructor(){

        this.node = document.createElement("img")
        this.node.src = "./images/Arrow.png"
        gameBoxNode.append(this.node)



    this.x = 500;
    this.y = 700;
    this.w = 40;
    this.h = 40;
    this.speedX = 2;
    this.speedY = 5;

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
    }

      SmoothMovement = () =>{
        this.y -= 2
        this.updatePosition2()
      }

    updatePosition2 = (enemy2X) => {
        this.x += this.speedX;
        this.y += this.speedY;
        this.node.style.left = `${enemy2X}px`;
        this.node.style.top = `${this.y}px`;
      };


    // updatePositionY = (enemy2Y) => {
    //     this.x += this.speedX;
    //     this.y += this.speedY;
    //     this.node.style.left = `${this.x}px`;
    //     this.node.style.top = `${enemy2Y}px`;
    //   };

}