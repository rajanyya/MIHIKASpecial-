var db;
var form,game,player;
var gameState=0;
var playerCount=0;
var allplayers;
var car1,car2,car3,car4,car5;
var cars;




function setup(){
    createCanvas(displayWidth,displayHeight);
    
    db = firebase.database();
    game= new GAME();
    game.getState()
    game.start()

    
    
}

function draw(){
    background("white");
    if(playerCount===5){

game.update(1);
    }

    if(gameState===1){
        clear();
    game.play();
    }

}


