const arenaScreenNode = document.querySelector("#Arena-Screen");
const arenaBoxNode = document.querySelector("#Arena-Box");
const playerNode = document.querySelector("#Player");
const enemyNode = document.querySelector("#enemy");





function startGame() {
  gameObj.gameLoop();
}

window.addEventListener("keydown", (event) => {
  gameObj.player.handlePlayerMovement(event);
});
