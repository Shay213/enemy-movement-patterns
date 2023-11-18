export default class Ghost{
  constructor(canvasWidth, canvasHeight) {
    this.img = new Image()
    this.img.src = '../assets/enemies/enemy3.png'

    this.canvasWidth = canvasWidth
    this.canvasHeight = canvasHeight

    this.spriteWidth = 218
    this.spriteHeight = 177
    this.width = this.spriteWidth / 2
    this.height = this.spriteHeight / 2
    this.speed = Math.random() * 4 + 1
    this.angle = 0
    this.angleSpeed = Math.random() * 0.2 + 0.5
    this.curve = Math.random() * 200 + 50

    this.x = Math.random() * (canvasWidth - this.width)
    this.y = Math.random() * (canvasHeight - this.height)

    this.frame = 0
    this.gameFrame = 0
  }

  update(){
    this.x = this.curve * Math.sin(this.angle * Math.PI / 90) + (this.canvasWidth / 2 - this.width / 2)
    this.y = this.curve * Math.cos(this.angle * Math.PI / 180) + (this.canvasHeight / 2 - this.height / 2)
    this.angle += this.angleSpeed
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