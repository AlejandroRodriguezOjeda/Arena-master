// class Enemy2 {
//     constructor() {
//       this.node = document.createElement("img");
//       this.node.src = "./images/sprite-placeholder.jpg";
//       gameBoxNode.append(this.node);
  
//       this.x = 500;
//       this.y = 700;
//       this.w = 100;
//       this.h = 100;
  
//       this.enemyMovementSpeed = 2;
//       this.isEnemyMovingRight = true;
//     //   this.isEnemyMovingLeft = true;
//       this.bounceDirection();
  
//       this.node.style.width = `${this.w}px`;
//       this.node.style.height = `${this.h}px`;
//       this.node.style.position = "absolute";
//       this.node.style.top = `${this.y}px`;
//       this.node.style.left = `${this.x}px`;
  
//       // this.shootArrows = this.shootArrows.bind(this)
    
//   }
//   enemy2Movement = () => {
//     if (this.isEnemyMovingRight === true) {
//       this.x += this.enemyMovementSpeed;
//     } else {
//       this.x -= this.enemyMovementSpeed;
//     }
//     this.node.style.left = `${this.x}px`;

//     if (this.x <= 0) { 
//       this.isEnemyMovingRight = true; 
//     } else if (this.x + this.w >= gameBoxNode.clientWidth) { 
//       this.isEnemyMovingRight = false;
//     }
//   }
        
        
        
//     //     this.x + this.w >= gameBoxNode.clientWidth){
//     //       this.bounceDirection();
//     //   }
//     // }
  
//     bounceDirection(){
//       this.isEnemyMovingRight = !this.isEnemyMovingRight;
//     //   this.isEnemyMovingLeft = !this.isEnemyMovingLeft;
//     }
  
    
  
  
//   }