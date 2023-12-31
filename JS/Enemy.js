class Enemy {
  constructor() {
    this.node = document.createElement("img");
    this.node.src = "./images/archer2.png";
    gameBoxNode.append(this.node);

    this.x = 0;
    this.y = 0;
    this.w = 70;
    this.h = 70;

    this.enemyMovementSpeed = 4;
    this.isEnemyMovingRight = false;

    this.bounceDirection();

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
  }

  enemyMovement = () => {
    if (this.isEnemyMovingRight === true) {
      this.x += this.enemyMovementSpeed;
    } else {
      this.x -= this.enemyMovementSpeed;
    }
    this.node.style.left = `${this.x}px`;

    if (this.x <= 0 || this.x + this.w >= gameBoxNode.clientWidth) {
      this.bounceDirection();
    }
  };

  bounceDirection() {
    this.isEnemyMovingRight = !this.isEnemyMovingRight;
  }
}

class Enemy2 {
  constructor() {
    this.node = document.createElement("img");
    this.node.src = "./images/archer.png";
    gameBoxNode.append(this.node);

    this.x = 500;
    this.y = 700;
    this.w = 70;
    this.h = 70;

    this.enemyMovementSpeed = 3;
    this.isEnemyMovingRight = true;

    this.bounceDirection();

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
  }
  enemy2Movement = () => {
    if (this.isEnemyMovingRight === true) {
      this.x += this.enemyMovementSpeed;
    } else {
      this.x -= this.enemyMovementSpeed;
    }
    this.node.style.left = `${this.x}px`;

    if (this.x <= 0) {
      this.isEnemyMovingRight = true;
    } else if (this.x + this.w >= gameBoxNode.clientWidth) {
      this.isEnemyMovingRight = false;
    }
  };

  bounceDirection() {
    this.isEnemyMovingRight = !this.isEnemyMovingRight;
  }
}
