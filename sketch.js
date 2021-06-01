var dog, dogImg, happyDog;
var database;
var foodS, foodStock


function preload () {

dogImg = loadImage("images/dogimg.png")
happyDog = loadImage("images/dogimg1.png")
}

function setup() {
	createCanvas(500, 500);
  
  dog=createSprite(250,250,50,50);
  dog.addImage(dogImg);

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}



function draw() {  

  drawSprites();
 background(46, 139, 87);


 if(keyWentDown(UP_ARROW)){
writeStock(foodS)
dog.addImage(happyDog);

textSize(20);
fill("white");
Text("note:pres UP_ARROW key to Feed dog Milk!",400,400);

 }

}



