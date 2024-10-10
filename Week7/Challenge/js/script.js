
let xVel = 0;
let yVel = 0;

let xBound = window.innerWidth;
let yBound = window.innerHeight;

let xPosition = xBound/2;
let yPosition = yBound/2;

const SPEED_SCALE = 1;
const MAX_VEL = 100;

const ball = document.querySelector('.ball');

document.addEventListener('keydown', handleKeyPress);

// Move the ball
function handleKeyPress(e) {
    findBounds();
    printCode(e.code);
    if (e.code === 'ArrowLeft') {
        if(xVel > 0) {
            xVel = 0;
        } else if (xVel <= (MAX_VEL * -1)) {
            xVel = MAX_VEL * -1;
        }
        else {
            xVel -= SPEED_SCALE;
        }
    }
    if (e.code === 'ArrowRight') {
        if(xVel < 0) {
            xVel = 0;
        } else if(xVel >= MAX_VEL) {
            xVel = MAX_VEL
        } else {
            xVel += SPEED_SCALE;
        }
    }
    if (e.code === 'ArrowUp') {
        if(yVel > 0){
            yVel = 0;
        } else if (yVel <= (MAX_VEL * -1)) {
            yVel = MAX_VEL * -1;
        } else {
            yVel -= SPEED_SCALE;
        }
    }
    if (e.code === 'ArrowDown') {
        if(yVel < 0) {
            yVel = 0;
        } else if (yVel <= (MAX_VEL)) {
            yVel = MAX_VEL;
        } else {
            yVel += SPEED_SCALE;
        }
        
    }
    if (e.code === 'KeyS') {
        xVel = 0;
        yVel = 0;
    }
    refresh();
}

//update ball on screen
function refresh() {
    ball.style.left = xPosition + 'px';
    ball.style.top = yPosition + 'px';

    // Loop with bounds
    // if (yPosition < 0) {
    //     console.log("OUT UP")
    //     yPosition = yBound;
    // } else if(yPosition  > yBound) {
    //     console.log("OUT DOWN")
    //     yPosition = 0;
    // }
    // if (xPosition < 0) {
    //     console.log("OUT LEFT")
    //     xPosition = xBound - 1;
    // } else if(xPosition > xBound) {
    //     console.log("OUT RIGHT")
    //     xPosition = 0;
    // }
    checkBounds()
    findBounds();
}

//find window size for the window
function findBounds() {
    xBound = window.innerWidth;
    yBound = window.innerHeight;
}

function printCode(code) {
    // console.log(`VELOCITY\tx:${xVel},y:${yVel}`)
    // console.log(code);
    // if(code.startsWith("Arrow")) {
    //     console.log(code);
    // }
}

const loop = setInterval(()=> {
    refresh();
    xPosition += xVel;
    yPosition += yVel;
    // console.log(`COORDS (${xPosition}, ${yPosition})`)
}, 100)

function checkBounds() {
    if (yPosition < 0) {
        changeColor('a')
        yPosition = yBound;
    } else if(yPosition  > yBound) {
        changeColor('b')
        yPosition = 0;
    }
    if (xPosition < 0) {
        changeColor('c')
        xPosition = xBound - 1;
    } else if(xPosition > xBound) {
        changeColor('d')
        xPosition = 0;
    }
}


function changeColor(type) {
    const body = document.querySelector("body");
    console.log(`BALL:\n
        PLAIN: ${(getComputedStyle(ball).getPropertyValue("--colorVar"))}\n
        PARSED: ${parseInt(getComputedStyle(ball).getPropertyValue("--colorVar").slice(1), 16)}\n
        ===========================================================` )
    console.log(`BG:\n
        PLAIN: ${(getComputedStyle(body).getPropertyValue("--colorVar"))}\n
        PARSED: ${(getComputedStyle(body).getPropertyValue("--colorVar").slice(1), 16)}\n
        ===========================================================` )
    let ballColor = parseInt(getComputedStyle(ball).getPropertyValue("--colorVal").slice(1), 16);
    let bgColor = parseInt(getComputedStyle(body).getPropertyValue("--colorVar").slice(1), 16)
    switch(type) {
        case 'a':
            ballColor += 50;
            break;
        case 'b':
            ballColor -= 50;
            break;
        case 'c':
            bgColor += 50;
            break;
        case 'd':
            bgColor -= 50;
            break;
    }
    ball.style.setProperty("--colorVal", ('#' + ballColor.toString(16)));
    body.style.setProperty("--colorVal", ('#' + bgColor.toString(16)));

    console.log(ballColor.toString(16))
    console.log(bgColor.toString(16))

}