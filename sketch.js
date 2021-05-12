var background,backgroundImg;
var boy,boyImg;
var girl,girlImg;
var net,netImg;
var scoreboard,scoreboardImg;

function preload(){
backgroundImg =loadImage("background.png");
boyImg =loadImage("boy.png");
girlImg =loadImage("girl.png");
netImg =loadImage("net.png");
scoreboardImg =loadImage("score.PNG");
}

function setup(){
canvas = createCanvas(displayWidth,displayHeight)
 backgroundsprite = createSprite(700,330,20,20)
 backgroundsprite.addImage(backgroundImg)
 backgroundsprite.scale=2.7
 
 boysprite=createSprite(200,200,10,10)
 boysprite.addImage(boyImg)
}

function draw(){
background("white")
drawSprites();
}

