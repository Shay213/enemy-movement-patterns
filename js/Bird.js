export default class Bird{
  constructor(canvasWidth, canvasHeight){
    this.img = new Image()
    this.img.src = '../assets/enemies/enemy2.png'

    this.spriteWidth = 266
    this.spriteHeight = 188
    this.width = this.spriteWidth / 2
    this.height = this.spriteHeight / 2
    this.speed = Math.random() * 4 + 1
    this.angle = 0
    this.angleSpeed = Math.random() * 0.2

    this.x = Math.random() * (canvasWidth - this.width)
    this.y = Math.random() * (canvasHeight - this.height)

    this.frame = 0
    this.gameFrame = 0
    this.flapSpeed = Math.floor(Math.random() * 3 + 1)
  }

  update(){
    this.x -= this.speed
    this.y += 3 * Math.sin(this.angle)
    this.angle += this.angleSpeed
    this.gameFrame++

    // animate sprites
    if(this.gameFrame % this.flapSpeed === 0){
      this.frame > 4 ? this.frame = 0 : this.frame++
    }

    // off screen
    if(this.x < -this.width) this.x = canvas.width + this.width
  }

  draw(ctx){
    ctx.drawImage(this.img, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
  }
}