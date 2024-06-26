// setup canvas

const canvas = document.getElementById("game");
const click = document.getElementById("interact");
const ctx = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height;
const btn = document.querySelector('button');
const volumeDisplay = document.getElementById('volume');
const sound = document.getElementById('sound');
volumeDisplay.innerHTML = 100

// function to generate random number

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random color
class Ball {
  constructor(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
    this.stopped = false;
  }
  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }
  update() {
    if  ((this.velY <= 0.5) && (this.y) >= height/1.25){
        this.stopped = true
    }
    this.velY += 0.1
    if ((this.x + this.size) >= width || (this.x - this.size) <= 0) {
      this.velX = -(this.velX)/1.2;
    }
    if ((this.y) >= height/1.25) {
        this.velY = -(this.velY)/1.2;
        this.velX = (this.velX)/1.2;
    }
    this.x += this.velX;
    this.y += this.velY;
    }
    collisionDetect() {
        for (const ball of balls) {
          if (this !== ball) {
            const dx = this.x - ball.x;
            const dy = this.y - ball.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
      
            if (distance < this.size + ball.size) {
              this.velX = -(this.velX)/1.2;
              this.velY = -(this.velY)/1.2;
            }
          }
        }
      }
  }
btn.addEventListener('click',()=>{
    const state = btn.getAttribute('class')
    if (state == 'pause'){
        btn.setAttribute("class", 'play');
        btn.textContent = 'Play';
        sound.play();
         
    }
    else{
        btn.setAttribute("class", 'pause');
        btn.textContent = 'Pause';
        sound.pause() 
    }
})
const balls = [];
click.addEventListener('click',(event)=>{
        const ball = new Ball(
        40,
        (height/1.25) - 20,
        (event.layerX)/25,
        -((height/2) - event.layerY)/10,
        'white',
        10,
        );
        balls.push(ball);
    }
)
marker =  new Ball(720,height/1.25,0,0,'white',10)
pivot =  new Ball(40,height/1.25,0,0,'red',10)
function loop() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, width, height);
    ctx.moveTo(40,(height/1.25));
    ctx.lineTo(width-40, (height/1.25));
    ctx.lineWidth = 5;
    ctx.stroke();
    marker.draw();
    pivot.draw();
    click.addEventListener('mousemove',(event)=>{
        ctx.strokeStyle = 'white';
        ctx.beginPath();
        ctx.arc(40, height/1.25, 10, 0, 2 * Math.PI);
        ctx.moveTo(40, height/1.25);
        ctx.lineTo(event.layerX*1.25,event.layerY*1.25)
        ctx.stroke();
    }
    )
    for (var ball of balls) {
        ball.draw();
        ball.update();
        ball.collisionDetect();
        if (ball.stopped == true){           
            ball.y = height/1.25;
            ball.velX = 0
            ball.velY = 0
        if (ball.x >= 720){
            ball.x = 720
        }
        if (ball.x <= 40){
            ball.x = 40
        }
        xcoord = Math.round(ball.x)
        console.log(xcoord)
        console.log(720)
        volume = Math.round(((xcoord)/720)*100)
        if (volume/100 > 1){
            volume = 100
        }
        sound.volume = volume/100;
        console.log(sound.volume); // 1
        volumeDisplay.innerHTML = volume
        console.log('Removed ball at X ='+ xcoord +'!')
        marker.x = ball.x
        balls.shift(ball)
        }
    }
    requestAnimationFrame(loop);
}
loop()