export default class Enemy{
  constructor(canvasWidth, canvasHeight){
    this.x = Math.random() * canvasWidth
    this.y = Math.random() * canvasHeight
    this.width = 50
    this.height = 50
  }

  update(){
    this.x++
    this.y++
  }

  draw(ctx){
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
}