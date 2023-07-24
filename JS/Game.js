

class Game {

constructor(){

this.player = new Player();
this.enemy = new Enemy()



}

gameLoop = () => {


// this.player.playerMovement();
this.player.updatePosition();
this.enemy.enemyMovement();
  requestAnimationFrame(this.gameLoop)
}

}










