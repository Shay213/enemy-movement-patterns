export default class Enemy{
  constructor(canvasWidth, canvasHeight){
    this.img = new Image()
    this.img.src = '../assets/enemies/enemies/enemy1.png'
    this.x = Math.random() * canvasWidth
    this.y = Math.random() * canvasHeight
    this.speed = Math.random() * 4 - 2
    this.spriteWidth = 293
    this.spriteHeight = 155
    this.width = this.spriteWidth / 2
    this.height = this.spriteHeight / 2
    this.frame = 0
    this.gameFrame = 0
    this.flapSpeed = Math.floor(Math.random() * 3 + 1)
  }

  update(){
    this.x += this.speed
    this.y += this.speed
    this.gameFrame++

    // animate sprites
    if(this.gameFrame % this.flapSpeed === 0){
      this.frame > 4 ? this.frame = 0 : this.frame++
    }
  }

  draw(ctx){
    ctx.drawImage(this.img, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
  }
}