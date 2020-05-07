var track,player_img,barricade_img;
var player;
var gamestate = 1;
//var barricade;

//Loads the images.
function preload(){
    track = loadImage("assets/track.jpg");
    player_img = loadImage("assets/player.png");
    barricade_img = loadImage("assets/barricade.png");
}

function setup(){
    //Creates the canvas.
    createCanvas(displayWidth,displayHeight-125);
    //Creates the player sprite.
    player = createSprite(685,700);
    player.addImage("player",player_img);
    player.scale = 0.3;

    barricade1 = createSprite(random(200,1100),400);
    barricade1.addImage("barricade",barricade_img);
    barricade1.scale = 0.3;

    barricade2 = createSprite(random(200,1100),400);
    barricade2.addImage("barricade",barricade_img);
    barricade2.scale = 0.3;

    barricade3 = createSprite(random(200,1100),0);
    barricade3.addImage("barricade",barricade_img);
    barricade3.scale = 0.3;

    barricade4 = createSprite(random(200,1100),0);
    barricade4.addImage("barricade",barricade_img);
    barricade4.scale = 0.3;

    barricade5 = createSprite(random(200,1100),-400);
    barricade5.addImage("barricade",barricade_img);
    barricade5.scale = 0.3;

    barricade6 = createSprite(random(200,1100),-400);
    barricade6.addImage("barricade",barricade_img);
    barricade6.scale = 0.3;

    barricade7 = createSprite(random(200,1100),-800);
    barricade7.addImage("barricade",barricade_img);
    barricade7.scale = 0.3;

    barricade8 = createSprite(random(200,1100),-800);
    barricade8.addImage("barricade",barricade_img);
    barricade8.scale = 0.3;

    barricade9 = createSprite(random(200,1100),-1200);
    barricade9.addImage("barricade",barricade_img);
    barricade9.scale = 0.3;

    barricade10 = createSprite(random(200,1100),-1200);
    barricade10.addImage("barricade",barricade_img);
    barricade10.scale = 0.3;

    barricade11 = createSprite(random(200,1100),-1600);
    barricade11.addImage("barricade",barricade_img);
    barricade11.scale = 0.3;

    barricade12 = createSprite(random(200,1100),-1600);
    barricade12.addImage("barricade",barricade_img);
    barricade12.scale = 0.3;

    barricade13 = createSprite(random(200,1100),-2000);
    barricade13.addImage("barricade",barricade_img);
    barricade13.scale = 0.3;

    barricade14 = createSprite(random(200,1100),-2000);
    barricade14.addImage("barricade",barricade_img);
    barricade14.scale = 0.3;

    barricade15 = createSprite(random(200,1100),-2400);
    barricade15.addImage("barricade",barricade_img);
    barricade15.scale = 0.3;

    barricade16 = createSprite(random(200,1100),-2400);
    barricade16.addImage("barricade",barricade_img);
    barricade16.scale = 0.3;
}
//Final value: -2880.Right: 1145.left:255
function draw(){
    //Sets the background.
    background(rgb(198,135,103));
    image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
    
    fill("red");
    textSize(30);
    text("Drive as fast as you can",displayWidth/2,805);

    //Sets the camera.
    camera.position.x = displayWidth/2;
    camera.position.y = player.y;

    if(gamestate === 1){
        //Controls the car.
        if(keyDown(UP_ARROW)){
            player.y = player.y-15;
        }
        if(keyDown(DOWN_ARROW)){
            player.y = player.y+15;
        }
        if(keyDown(RIGHT_ARROW)){
            player.x = player.x+15;
        }
        if(keyDown(LEFT_ARROW)){
            player.x = player.x-15;
        }
    }

    if(player.isTouching(barricade1) || player.isTouching(barricade2)){
        gamestate = 2;
        console.log("Game Over.You lose");
    }

    if(player.isTouching(barricade3) || player.isTouching(barricade4)){
        gamestate = 2;
        console.log("Game Over.You lose");
    }

    if(player.isTouching(barricade5) || player.isTouching(barricade6)){
        gamestate = 2;
        console.log("Game Over.You lose");
    }

    if(player.isTouching(barricade7) || player.isTouching(barricade8)){
        gamestate = 2;
        console.log("Game Over.You lose");
    }

    if(player.isTouching(barricade9) || player.isTouching(barricade10)){
        gamestate = 2;
        console.log("Game Over.You lose");
    }

    if(player.isTouching(barricade11) || player.isTouching(barricade12)){
        gamestate = 2;
        console.log("Game Over.You lose");
    }

    if(player.isTouching(barricade13) || player.isTouching(barricade14)){
        gamestate = 2;
        console.log("Game Over.You lose");
    }

    if(player.isTouching(barricade15) || player.isTouching(barricade16)){
        gamestate = 2;
        console.log("Game Over.You lose");
    }

    if(player.x<250 || player.x>1150){
        gamestate = 2;
        console.log("Game Over.You lose");
    }

    if(player.y>800){
        gamestate = 2;
        console.log("Game Over.You lose.You have crossed the asphalt");
    }

    if(player.y<=-2880){
        gamestate = 2;
        console.log("Game Over.You win");
    }

    //Draws the sprite objects
    drawSprites();
}