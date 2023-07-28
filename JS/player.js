class Player {

constructor(){

this.node = document.createElement("img");
this.node.src = "./images/player.png"
gameBoxNode.append(this.node)

this.x = 275;
this.y = 400;
this.w = 100;
this.h = 100;

this.coinsCollected = 0

this.movementSpeed = 5;
this.isPlayermovingRight = false;
this.isPlayermovingLeft = false;
this.isPlayermovingUp = false;
this.isPlayermovingDown = false;

this.node.style.width = `${this.w}px`
this.node.style.height = `${this.h}px`
this.node.style.position = "absolute"
this.node.style.top = `${this.y}px`
this.node.style.left = `${this.x}px`



}

updatePosition = () => {
  if (this.isPlayerMovingLeft) {
    this.x -= this.movementSpeed;
    if(this.x < 0){
      this.x = 0
    }
  }

  if (this.isPlayerMovingRight) {
    this.x += this.movementSpeed;
    if(this.x > gameBoxNode.offsetWidth - this.w){
      this.x = gameBoxNode.offsetWidth - this.w;
    }
  }

  if(this.isPlayermovingUp){
    this.y -= this.movementSpeed;
  }
if(this.isPlayermovingDown){
  this.y += this.movementSpeed
}

  this.node.style.left = `${this.x}px`;
  this.node.style.top = `${this.y}px`;


}}