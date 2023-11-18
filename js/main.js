import Bat from './Bat.js'

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const CANVAS_WIDTH = canvas.width = 1000
const CANVAS_HEIGHT = canvas.height = 700

const enemies = []

for(let i = 0; i < 10; i++){
  enemies.push(new Bat(CANVAS_WIDTH, CANVAS_HEIGHT))
}

function animate(){
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

  enemies.forEach(enemy => {
    enemy.update()
    enemy.draw(ctx)
  })

  requestAnimationFrame(animate)
}

animate()