




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

var widthRed= 50;
var widthBlue = 30; 
var widthGreen = 80;  

function display_input() {
    widthRed = document.getElementById("quantityRed").value;
    widthBlue = document.getElementById("quantityBlue").value;
    widthGreen = document.getElementById("quantityGreen").value;
    update(); 
}

function start() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    
    background(); 
    red_bar();
    blue_bar(); 
    green_bar(); 
    caption(); 
    link();
    drawLink(); 
}
document.addEventListener('DOMContentLoaded', start);


function update() {
    background(); 
    red_bar(); 
    blue_bar(); 
    green_bar(); 
    caption(); 
    drawLink(); 
}

function background(){
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
function red_bar(){
    ctx.font='16px sans-serif';
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(20, 100, 4*widthRed+5, 100);   // at least 5 to be visible on chart
    var textRed = "Apple"; 
    textRed = textRed.concat(": ", widthRed);
    ctx.fillText(textRed,20,90);
}
function blue_bar(){
    ctx.fillStyle = "#0000FF";
    ctx.fillRect(20, 230, 4*widthBlue+5, 100);
    var textBlue = "Grape"; 
    textBlue = textBlue.concat(": ", widthBlue);
    ctx.fillText(textBlue,20,220);
}
function green_bar(){
    ctx.fillStyle = "#00FF00";
    ctx.fillRect(20, 360, 4*widthGreen+5, 100);
    var textGreen = "Lime"; 
    textGreen = textGreen.concat(": ", widthGreen);
    ctx.fillText(textGreen,20,350);
}


function caption(){
    ctx.fillStyle = "white";
    ctx.font = "24px sabs serif";
    ctx.fillText("This is Peter, this is my cartoon house", 10, canvas.height-20);
    ctx.fill(); 
}
function link(){

}
function drawLink(){
    //draw the link
    ctx.font='17px sans-serif';
    ctx.fillStyle = "#0000ff";
    ctx.fillText(linkText,linkX,linkY);
    linkWidth=ctx.measureText(linkText).width;
    
    //add mouse listeners
    canvas.addEventListener("mousemove", on_mousemove, false);
    canvas.addEventListener("click", on_click, false);
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
      window.location = "../index.html";
    }
}


