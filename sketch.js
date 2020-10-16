var runner;
var obstacle1, obstacle2;
var food;
var foodGroup, obstacleGroup;
var score = 0;
var foodImg, obstacleImg, runnerImg, obstacle2Img;
var backImg;
var ground;
function preload(){
  backImg = loadImage("images/spaceback.jpeg");
  foodImg = loadImage("images/appleimg-removebg-preview.png");
  obstacleImg = loadImage("images/obstacleimg-removebg-preview.png");
  obstacle2Img = loadImage("images/obstacle2img-removebg-preview.png");
  runnerImg = loadAnimation("images/Monkey_01.png", "images/Monkey_02.png", "images/Monkey_03.png", "images/Monkey_04.png",
  "images/Monkey_05.png","images/Monkey_06.png", "images/Monkey_07.png", "images/Monkey_10.png");
}

function setup(){
  createCanvas(1600, 600);
  
  ground = createSprite(800, 1550, 1600, 50);

  runner = createSprite(100, 100, 50, 50);
  runner.addAnimation("runner", runnerImg);
  runner.scale=0.1;

  foodGroup = new Group();
  obstacleGroup = new Group();



}

function draw(){  
  background(backImg);

  camera.position.x = runner.x;
  camera.position.y = runner.y;
  camera.zoom = 5;


  runner.velocityX = 7;


  if(keyDown("space")&&runner.y <= 120){
    runner.velocityY = runner.velocityY-20;
  }

  runner.velocityY = runner.velocityY+0.8;

  if(foodGroup.isTouching(runner)){
    score++;
  }

  if(obstacleGroup.isTouching(runner)){
    score = score-1;
  }

  ground.visible = false;
  runner.collide(ground);
  
  spawnFood();
  spawnObstacles();
  drawSprites();

  fill("white");
  textSize(30);
  text("Score :"+score, 700, 300);
}

function spawnFood(){
  if(camera.position.x%100 === 0){
    food = createSprite(camera.position.x, random(50, 500));
    food.addImage("food", foodImg);
    food.scale = .5;
    foodGroup.add(food);
  }
}

function spawnObstacles(){
  if(camera.position.x%200 === 0){
    obstacle1 = createSprite(camera.position.x, random(50, 100));
    obstacle1.addImage("obstacle1", obstacleImg);
    obstacle1.scale = 0.5;
    obstacleGroup.add(obstacle1);
  }
  if(camera.position.x%300 === 0){
    obstacle2 = createSprite(camera.position.x, random(50, 150));
    obstacle2.addImage("obstacle2", obstacle2Img);
    obstacle2.scale = 0.5;
    obstacleGroup.add(obstacle2);
  }
}