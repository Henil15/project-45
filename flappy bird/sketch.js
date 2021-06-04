var bird,pipe,pipe1,
bronze,diamond,silver,gold,
background,gameover,ground,instruction,
menu,name,ok,neww,ready,scoreboard,score,start

var birdImg,bird1Img,pipeImg,pipe1Img,
bronzeImg,diamondImg,silverImg,goldImg,
backgroundImg,gameoverImg,groundImg,instructionImg,
menuImg,nameImg,okImg,newwImg,readyImg,scoreboardImg,scoreImg,startImg

function preload(){
backgroundImg=loadImage("background.png")
birdImg=loadImage("bird2.png")
bird1Img = loadImage("bird1.png")
groundImg=loadImage("ground.jpg")
pipeImg=loadImage("pipe fcedown.jpg")
pipe1Img=loadImage("pipe fce up.jpg")
}


function setup(){
createCanvas(500,800)

bird = createSprite(200,500,100,50)
bird.addImage("birdy",birdImg)
bird.addImage("bird 2",bird1Img)
bird.shapeColor = "red"
bird.velocityY =6
bird.scale = 0.3

bronze= createSprite(500,200,50,100)
bronze.shapeColor = "red"

silver= createSprite(50,200,50,100)
silver.shapeColor = "red"

gold= createSprite(250,200,50,100)
gold.shapeColor = "red"

diamond= createSprite(500,200,50,100)
diamond.shapeColor = "red"

ground= createSprite(250,800,500,100)
ground.shapeColor = "red"
ground.addImage(groundImg)
ground.scale = 3.3

gameover= createSprite(500,200,50,100)
gameover.shapeColor = "red"

instruction= createSprite(500,200,50,100)
instruction.shapeColor = "red"

menu= createSprite(500,200,50,100)
menu.shapeColor = "red"

ok= createSprite(500,200,50,100)
ok.shapeColor = "red"

neww= createSprite(500,200,50,100)
neww.shapeColor = "red"

ready= createSprite(500,200,50,100)
ready.shapeColor = "red"

scoreboard= createSprite(500,200,50,100)
scoreboard.shapeColor = "red"

score= createSprite(500,200,50,100)
score.shapeColor = "red"

start= createSprite(500,200,50,100)
start.shapeColor = "red"

pipeGroup = new Group();
pipe1Group = new Group();
}


function draw(){
 background(backgroundImg)

 text("x: "+mouseX+"y: "+mouseY,mouseX,mouseY)

bird.collide(ground)

if(keyDown("space")){
    bird.velocityY=-6
    bird.changeImage("bird 2",bird1Img)
}
 bird.velocityY = bird.velocityY+1

 if(keyWentUp("space")){
     bird.changeImage("birdy",birdImg)
 }


spawnpipe();
spawnpipe1();


if(pipeGroup.isTouching(bird)){

   pipeGroup.setVelocityXEach(0)
   pipe1Group.setVelocityXEach(0)
    
}

if(pipe1Group.isTouching(bird)){
    pipeGroup.setVelocityXEach(0)
    pipe1Group.setVelocityXEach(0)
    
 }
 drawSprites();
}

function spawnpipe() {
    if(frameCount % 100 === 0){
        pipe = createSprite(400,100,20,70)
         pipe.velocityX = -3
         pipe.y = Math.round(random(50,270))
         pipe.addImage("pipes",pipeImg)
         pipe.scale = 2.5
pipe.lifetime= 50
         pipeGroup.add(pipe)
    }
}

function spawnpipe1(){
    if(frameCount % 100 === 0){
        pipe1 = createSprite(400,700,20,70)
        pipe1.velocityX = -3
        pipe1.y = Math.round(random(600,750))
        pipe1.addImage("pipess",pipe1Img)
        pipe1.scale = 2.5
pipe1.lifetime=50

        pipe1Group.add(pipe1)
   }
}