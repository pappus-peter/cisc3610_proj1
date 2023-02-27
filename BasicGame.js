var canvas = undefined;
var ctx = undefined;
var canvas = document.getElementById("myCanvas");
var ctx;
var linkText="Back to main page";
var linkX=10;
var linkY=25;
var linkHeight=10;
var linkWidth;
var inLink = false;

function start() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    
    background(); 
    cloudSun(); 
    mountain(); 
    house();
    caption(); 
    link(); 
    //draw the link
    ctx.font='17px sans-serif';
    ctx.fillStyle = "#0000ff";
    ctx.fillText(linkText,linkX,linkY);
    linkWidth=ctx.measureText(linkText).width;
    
    //add mouse listeners
    canvas.addEventListener("mousemove", on_mousemove, false);
    canvas.addEventListener("click", on_click, false);

}
document.addEventListener('DOMContentLoaded', start);


function update() {
}

function background(){
    ctx.fillStyle = "#29aff2";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
function cloudSun(){
    ctx.fillStyle = "#ffb65c";
    ctx.beginPath();
    ctx.arc(750, 75, 95, 0, 2 * Math.PI);
    ctx.shadowBlur = 120;
    ctx.shadowColor = "orange";
    ctx.fill();

    ctx.shadowBlur = 0;
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.moveTo(170,80);
    ctx.bezierCurveTo(80, 80, 130, 150, 230, 150);
    ctx.bezierCurveTo(150, 130, 320, 180, 340, 150);
    ctx.bezierCurveTo(360, 150, 420, 120, 390, 100);
    ctx.bezierCurveTo(380, 40, 300, 30, 340, 50);
    ctx.bezierCurveTo(320, 5, 250, 20, 250, 50);
    ctx.bezierCurveTo(200, 5, 150, 20, 170, 80);
    ctx.closePath();
    ctx.fill();

    for(var x = 600, y = 200; x <= 625; x += 25, y+=25){
        ctx.beginPath();
        ctx.ellipse(x, y, 60, 105, Math.PI / 2, 0, 2 * Math.PI);
        ctx.fill();
    }
    for(var x = 200, y = 230; x <= 250; x += 25, y+=25){
        ctx.beginPath();
        ctx.ellipse(x, y, 40, 80, Math.PI / 2, 0, 2 * Math.PI);
        ctx.fill();
    }
}
function mountain(){
    ctx.fillStyle = "#287a4a";
    ctx.beginPath();
    ctx.rect(0, canvas.height-60, canvas.width, 100);
    ctx.fill(); 
    
    for(var xoff = 0, yoff = 100; xoff<canvas.width; xoff+=400){
        ctx.beginPath();
        ctx.moveTo(3 + xoff, 461 + yoff);
        ctx.bezierCurveTo(-11 + xoff, 466 + yoff, 83 + xoff, 372 + yoff, 184 + xoff, 404 + yoff);
        ctx.bezierCurveTo(331 + xoff, 450 + yoff, 375 + xoff, 303 + yoff, 500 + xoff, 339 + yoff);
        ctx.bezierCurveTo(562 + xoff, 357 + yoff, 595 + xoff, 412 + yoff, 602 + xoff, 434 + yoff);
        ctx.fill();
    }
}

function house(){
    var cX = canvas.width-160;
    var cY = canvas.height-140;
    var red = "#bd4f39";
    var white = "white";

    // house body
    ctx.beginPath();
    ctx.rect(cX - 100, cY - 50, 200, 120);
    ctx.fillStyle = red;
    ctx.fill();
    ctx.closePath();

    // window
    ctx.beginPath();
    ctx.rect(cX - 70, cY - 20, 40, 40);
    ctx.fillStyle = white;
    ctx.fill();
    ctx.closePath();

    // roof
    ctx.beginPath();
    ctx.moveTo(cX - 100, cY - 50);
    ctx.lineTo(cX, cY - 150);
    ctx.lineTo(cX + 100, cY - 50);
    ctx.lineTo(cX - 100, cY -50);
    ctx.fillStyle = red;
    ctx.fill();
    ctx.closePath();

    // door
    ctx.beginPath();
    ctx.rect(cX + 20, cY - 10, 50, 80);
    ctx.fillStyle = white;
    ctx.fill();
    ctx.closePath();

    // chimney
    ctx.beginPath();
    ctx.rect(cX - 80, cY - 120, 25, 50);
    ctx.fillStyle = red;
    ctx.fill();
    ctx.closePath();

    // window lines
    ctx.beginPath();
    ctx.moveTo(cX - 70, cY);
    ctx.lineTo(cX - 30, cY);
    ctx.moveTo(cX - 50, cY - 20);
    ctx.lineTo(cX - 50, cY + 20);
    ctx.strokeStyle = red;
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();
}

function caption(){
    ctx.fillStyle = "white";
    ctx.font = "24px sabs serif";
    ctx.fillText("This is Peter, this is my cartoon house", 10, canvas.height-20);
    ctx.fill(); 
}
function link(){

}
//check if the mouse is over the link and change cursor style
function on_mousemove (ev) {
    var x, y;
  
    // Get the mouse position relative to the canvas element.
    if (ev.layerX || ev.layerX == 0) { //for firefox
      x = ev.layerX;
      y = ev.layerY;
    }
    x-=canvas.offsetLeft;
    y-=canvas.offsetTop;
    
    //is the mouse over the link?
    if(x>=linkX && x <= (linkX + linkWidth) && y<=linkY && y>= (linkY-linkHeight)){
        document.body.style.cursor = "pointer";
        inLink=true;
    }
    else{
        document.body.style.cursor = "";
        inLink=false;
    }
  }
  
  //if the link has been clicked, go to link
  function on_click(e) {
    if (inLink)  {
      window.location = "https://peter-3140fa2022.github.io/cisc3610_proj1/";
    }
  }


function draw() {
    for (var x = 0.5; x <= canvas.width; x += 25) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
    }
        ctx.moveTo(canvas.width-.5, 0);
        ctx.lineTo(canvas.width-.5, canvas.height);
    for (var y = 0.5; y <= canvas.height; y += 25) {
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
    }
    ctx.moveTo(0,canvas.height-.5);
    ctx.lineTo(canvas.width,canvas.height-.5);
    ctx.stroke();
}

function gameLoop() {
    ctx.fillStyle = "#29aff2";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    update();
    draw();
    window.setTimeout(gameLoop, 1000 / 60);
}

