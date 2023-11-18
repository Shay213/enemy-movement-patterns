import Enemy from "./Enemy.js"

export default (numOfEnemies, canvasWidth, canvasHeight) => {
  const enemies = []

  for(let i = 0; i < numOfEnemies; i++){
    enemies.push(new Enemy(canvasWidth, canvasHeight))
  }

  return enemies
}