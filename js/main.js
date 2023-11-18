import Enemy from "./Enemy.js"

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const CANVAS_WIDTH = canvas.width = 1000
const CANVAS_HEIGHT = canvas.height = 700

const enemy1 = new Enemy(CANVAS_WIDTH, CANVAS_HEIGHT)

function animate(){
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  
  enemy1.update()
  enemy1.draw(ctx)

  requestAnimationFrame(animate)
}

animate()