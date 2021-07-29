var ball;
var ballpos

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
   db = firebase.database()
   db.ref("ball").on("value",readpos)


}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
   db.ref("ball").set({
       x:ballpos.x+x,
       y:ballpos.y+y
   })
}


function readpos(data){
    ballpos=data.val()
    ball.x=ballpos.x
    ball.y= ballpos.y
}
