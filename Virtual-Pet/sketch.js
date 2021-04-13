//Create variables here

/*
var dog, happyDog, database, foodS, foodStock
var dogStand, dogSit



function preload()
{
	//load images here
  dogStand = loadImage("images/dogImg.png")
  dogSit = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);

  database = firebase.database()

  dog = createSprite(250,250)
  dog.addImage(dogStand)
  dog.scale = 0.4


  foodStock = database.ref('Food')
  foodStock.on("value",readStock)

  
}


function draw() {  
  background(0)

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogSit)
  }


  drawSprites();

  textSize(20)
  fill(255)
  textFont("Georgia")

  text("Press Up arrow key to feed bruno", 100, 450)

  //add styles here

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x = 0;
  }
  else{
    x = x - 1;
  }

  database.ref('/').update({
    Food:x
  })
}
*/

var dog,dogImg,dogImg1;
var database;
var foodS = 12
var foodStock;

function preload(){
   dogImg=loadImage("images/dogImg.png");
   dogImg1=loadImage("images/dogImg1.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(500,500);

  dog=createSprite(250,300,150,150);
  dog.addImage(dogImg);
  dog.scale=0.15;

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  textSize(20); 
}

// function to display UI
function draw() {
  background(46,139,87);
 
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg1);
  }

  drawSprites();
  fill(255,255,254);
  stroke("black");
  text("Food remaining : "+foodS,170,200);
  textSize(13);
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
}

//Function to read values from DB
function readStock(data){
  foodS=data.val();
}

//Function to write values in DB
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  } 
  database.ref('/').update({
    Food:x
  })
}
