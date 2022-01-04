const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var balls=[];
var divisions = [];
var particles = [];
var plinkos = [];
var ball;
var divisionHeight = 300;
var score = 0;
var count = 0;
var gameState ="start";


function setup() {

    createCanvas(480, 750);

    engine = Engine.create();
    world = engine.world;

    ground=new Ground(width/2,height,width,20)
    

    for (var i = 0; i <= 480; i = i + 80) {
        divisions.push(new Bar(i, 750 - 300 / 2, 10, 300));
    }
    for (var k = 40; k <= 470; k = k + 50) {
        plinkos.push(new Plinko(k, 75));
    }
    for (var k = 80; k <= 460; k = k + 50) {
        plinkos.push(new Plinko(k, 175));
    }
    for (var k = 40; k <= 480; k = k + 50) {
        plinkos.push(new Plinko(k, 275));
    }
    for (var k = 80; k <= 400; k = k + 50) {
        plinkos.push(new Plinko(k, 375));
    }

}

function draw() {
    background(0);
    textSize(35)
    text("Score : "+score,20,40);
    fill("white");
    textSize(35)
    text(" 500 ", 5, 550);
    text(" 500 ", 80, 550);
    text(" 500 ", 160, 550);
    text(" 500 ", 240, 550);
    text(" 100 ", 320, 550);
    text(" 100 ", 400, 550);
    text(" 100 ", 480, 550);
    text(" 200 ", 560, 550);
    text(" 200 ", 640, 550);
    text(" 200 ", 720, 550);
    Engine.update(engine);
    ground.display();
    if(gameState=="end"){
        textSize(100)
        text("gameOver",150,250);

    }
    for(var i =0;i<plinkos.length; i++){
        plinkos[i].display();

    }
    if(ball!=null){
        ball.display();
        if(ball.body.position.y>760){
            if(ball.body.position.x<300){
                score=score+500;
                ball=null;
                if(count>=5)
                    gameState=="end"
                
                else if(ball.body.position.x<600 &&ball.body.position.x>301){
                    score=score+100;
                    ball =null;
                    if(count>=5)
                    gameState=="end"
                }
                else if(ball.body.position.x<900 && ball.body.position.x>601){
                    score=score+200
                    ball=null;
                    if(count>=5)
                        gameState=="end"
                }
            }
        }
        for (var k=0 ; k< divisions.length ;k++){
            divisions[k].display();
        }
    }
    function mousePressed(){
        if(gameState !=='end'){
            count++
            ball=new Ball(mouseX,10,10,10)
        }
    }
    
}