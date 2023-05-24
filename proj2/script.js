const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set canvas size based on viewport
canvas.width = 800;
canvas.height = 600;

// Load sprite image
const spriteImage = new Image();
spriteImage.src = 'sprite_character.png';

// Define sprite properties
const spriteScale = 2.0;
const spriteWidth = 24;
const spriteHeight = 40;
const spriteFrames = 3;
const spriteAnimationSpeed = 300; // in milliseconds
let currentFrame = 0;
let frameCount = 0;
let position = 200; 
let positionB = 400;

// Load background image
const backgroundImage = new Image();
backgroundImage.src = 'background.jpg';

// Create slime sprite
const slimeImage = new Image(); 
slimeImage.src = 'sprite_slime.png';
const slimeWidth = 75; 
const slimeHeight = 50; 

// Create talk bubble
const talkBubble = {
    x: 150,
    y: 150,
    text: 'Adventure begins! Please refresh if spritesheet of 2 warriors are not yet loaded!'
};

// Start the animation loop
function startAnimationLoop() {
    requestAnimationFrame(animationLoop);
}

// ctx.drawImage(backgroundImage, 0, 0, backgroundImage.width, backgroundImage.height);
// ctx.drawImage(spriteImage, currentFrame * spriteWidth * 15.3, 0, spriteWidth, spriteHeight, position, 360, spriteWidth*spriteScale, spriteHeight*spriteScale);
// ctx.drawImage(spriteImage, currentFrame * spriteWidth * 5.3 +2, 0 + spriteHeight*8.85, spriteWidth, spriteHeight, positionB, 380, spriteWidth*spriteScale, spriteHeight*spriteScale);
// Start the animation loop
startAnimationLoop();



// Main animation loop
function animationLoop() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw background image
    ctx.drawImage(backgroundImage, 0, 0, backgroundImage.width, backgroundImage.height);

    // Draw sprite animation

    ctx.drawImage(slimeImage, 80, 185 + currentFrame*slimeHeight , slimeWidth, slimeHeight, 50, 380, slimeWidth, slimeHeight);
    ctx.drawImage(slimeImage, 80, 185 + currentFrame*slimeHeight , slimeWidth, slimeHeight, 420, 380, slimeWidth, slimeHeight);
    ctx.drawImage(slimeImage, 80, 185 + currentFrame*slimeHeight , slimeWidth, slimeHeight, 500, 330, slimeWidth*spriteScale, slimeHeight*spriteScale);
    ctx.drawImage(spriteImage, currentFrame * spriteWidth * 15.3, 0, spriteWidth, spriteHeight, position, 360, spriteWidth*spriteScale, spriteHeight*spriteScale);
    ctx.drawImage(spriteImage, currentFrame * spriteWidth * 5.3 +2, spriteHeight*8.85, spriteWidth, spriteHeight, positionB, 380, spriteWidth*spriteScale, spriteHeight*spriteScale);
    ctx.drawImage(slimeImage, 80, 185 + currentFrame*slimeHeight , slimeWidth, slimeHeight, 200, 380, slimeWidth, slimeHeight);
    
    position = (position + currentFrame)%backgroundImage.width;
    positionB = (positionB + currentFrame*0.5)%backgroundImage.width;

    // Update sprite animation frame
    frameCount++;
    if (frameCount >= spriteAnimationSpeed / 16) {
        frameCount = 0;
        currentFrame = (currentFrame + 1) % spriteFrames;
    }

    // Draw talk bubble
    ctx.fillStyle = 'white';
    ctx.fillRect(talkBubble.x, talkBubble.y, 505, 50);
    ctx.font = '14px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText(talkBubble.text, talkBubble.x + 10, talkBubble.y + 30);

    requestAnimationFrame(startAnimationLoop);
}


