export default class Monster{
  constructor(canvasWidth, canvasHeight) {
    this.img = new Image()
    this.img.src = '../assets/enemies/enemy4.png'

    this.canvasWidth = canvasWidth
    this.canvasHeight = canvasHeight

    this.spriteWidth = 213
    this.spriteHeight = 212
    this.width = this.spriteWidth / 2
    this.height = this.spriteHeight / 2
    this.interval = Math.floor(Math.random() * 200 + 50)

    this.x = Math.random() * (canvasWidth - this.width)
    this.y = Math.random() * (canvasHeight - this.height)

    this.newX = Math.random() * (canvasWidth - this.width)
    this.newY = Math.random() * (canvasHeight - this.height)

    this.frame = 0
    this.gameFrame = 0
  }

  update(){
    if(this.gameFrame % this.interval === 0){
      this.newX = Math.random() * (this.canvasWidth - this.width)
      this.newY = Math.random() * (this.canvasHeight - this.height)
    }

    const dx = this.x - this.newX
    const dy = this.y - this.newY

    this.x -= dx / 20
    this.y -= dy / 20

    this.gameFrame++
    // animate sprites
    if(this.gameFrame % 5 === 0){
      this.frame > 4 ? this.frame = 0 : this.frame++
    }
  }

  draw(ctx){
    ctx.drawImage(this.img, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
  }
}