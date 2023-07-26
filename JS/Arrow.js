class Arrow{
    constructor(){

        this.node = document.createElement("img")
        this.node.src = "./images/Arrow.png"
        gameBoxNode.append(this.node)



    this.x = 0;
    this.y = 0;
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
        this.y += 2
        this.updatePosition()
      }

    updatePosition = (enemyX) => {
        this.x += this.speedX;
        this.y += this.speedY;
        this.node.style.left = `${enemyX}px`;
        this.node.style.top = `${this.y}px`;
      };


    // updatePositionY = (enemy2Y) => {
    //     this.x += this.speedX;
    //     this.y += this.speedY;
    //     this.node.style.left = `${this.x}px`;
    //     this.node.style.top = `${enemy2Y}px`;
    //   };

}