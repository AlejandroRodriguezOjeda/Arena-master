class Arrow {
  constructor(enemyX) {
    this.node = document.createElement("img");
    this.node.src = "./images/Arrow copy.png";
    gameBoxNode.append(this.node);

    this.x = enemyX;
    this.y = 0;
    this.w = 20;
    this.h = 30;
    this.speedX = 0;
    this.speedY = 7;

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
  }

  SmoothMovement = () => {
    this.y += this.speedY;
    this.updatePosition(this.x);
  };

  updatePosition = (enemyX) => {
    this.x = enemyX
    // this.x += this.speedX;
    // this.y += this.speedY;
    this.node.style.left = `${enemyX}px`;
    this.node.style.top = `${this.y}px`;
  };

}

class Arrow2 {
  constructor(enemy2X) {
    this.node = document.createElement("img");
    this.node.src = "./images/Arrow.png";
    gameBoxNode.append(this.node);

    this.x = 500;
    this.y = 700;
    this.w = 20;
    this.h = 30;
    this.speedX = 2;
    this.speedY = -6;

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
  }

  SmoothMovement = () => {
    this.y += this.speedY;
    this.updatePosition2(this.x);
  };

  updatePosition2 = (enemy2X) => {
    this.x = enemy2X
    // this.x += this.speedX;
    // this.y += this.speedY;
    this.node.style.left = `${enemy2X}px`;
    this.node.style.top = `${this.y}px`;
  };

 
}
