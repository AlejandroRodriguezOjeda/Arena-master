class Enemy {
  constructor() {
    this.node = document.createElement("img");
    this.node.src = "./images/sprite-placeholder.jpg";
    gameBoxNode.append(this.node);

    this.x = 0;
    this.y = 0;
    this.w = 100;
    this.h = 100;

    this.enemyMovementSpeed = 2;
    this.isEnemyMovingRight = false;
    // this.isEnemyMovingLeft = true;
    this.bounceDirection();

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;

    // this.shootArrows = this.shootArrows.bind(this)
  
}

  enemyMovement = ()=>{
    if(this.isEnemyMovingRight === true){
        this.x += this.enemyMovementSpeed
    }else{
        this.x -= this.enemyMovementSpeed
    }
    this.node.style.left = `${this.x}px`;

    if (this.x <= 0|| this.x + this.w >= gameBoxNode.clientWidth){
        this.bounceDirection();
    }
  }

  bounceDirection(){
    this.isEnemyMovingRight = !this.isEnemyMovingRight;
    // this.isEnemyMovingLeft = !this.isEnemyMovingLeft;
  }


//   shootArrows = () =>{
//     const numberOfArrows = 5;
//     const ArrowSpeed = 5;
//     const ArrowSpacing = this.w / (numberOfArrows - 1);
//     let startX = this.x + this.w / 2 - (ArrowSpacing * (numberOfArrows - 1)) / 2;


// for (let i = 0; i < numberOfArrows; i++) {
//     const arrow = new Arrow();
//     arrow.x = startX + i * ArrowSpacing;
//     arrow.y = this.y + this.h / 2 - arrow.h / 2;
//     arrow.speedX = ArrowSpeed;
//     arrow.speedY = 0;
//     gameBoxNode.appendChild(arrow.node);

// }
// }

//   enemyCollision=()=>{
//     if(this.x + this.w >= gameBoxNode.offsetWidth){
//         console.log("enemy se ha pegado")
//         this.isEnemyMovingRight = false;
//     }else if (this.x < 0){
//         this.isEnemyMovingRight = true
//     }
//   }
}
