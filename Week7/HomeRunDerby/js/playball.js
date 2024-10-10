let homerun = 0;
let pitch = 0;
let audioSwing = new Audio('Sounds/swing.mp3');
let audioHit = new Audio('Sounds/hit.mp3');
let audioCheer = new Audio('Sounds/cheer.mp3');
let state = 'start';

class frameAnimate {
    constructor(picPaths, curPic, img0, imgCont) {
        this.picPaths = picPaths,
            this.curPic = curPic,
            this.img0 = img0,
            this.imgCont = imgCont
    }
}

let batterFrame = new frameAnimate();
let pitcherFrame = new frameAnimate();




$(document).ready(function() {
    let player = $('.imgBatter').css('top').replace('px', '');
    state = 'hit';



    $(".start").click(function() {

        $('#imgBall').css('animation', '');
        if (state == 'start') {
            state = 'pitching';

            hitBall();
        } else if (state == 'hit') {
            state = 'hitting';
            pitchBall();
        }
    });

    function hitBall() {
        state = 'pitching';
        let ball = $('#imgBall').css('margin-top').replace('px', '');
        let intHit = 20;

        if (parseInt(ball) > parseInt(player) && ball < (parseInt(player) + 100)) {

            let speed, randomHit;

            audioHit.length = .5;
            audioHit.play();

            if (parseInt(ball) - parseInt(player) < 30) {
                intHit = 7;
            }
            batterImages();
            batterSwing();

            $('#imgBall').animate().stop();
            speed = Math.floor((Math.random() * 200) + 1500);
            randomHit = Math.floor((Math.random() * intHit + 1));

            $('#imgBall').css('animation', 'hit' + randomHit + ' ' + speed + 'ms linear');
            //$('#imgBall').css('animation', 'hit15 ' + speed + 'ms linear');
            $('#imgBall').css('animation-fill-mode', 'forwards');
            $('#distance').text('hit' + randomHit.toString());


            if (randomHit < 6) {
                homerun++;
                $('#homerun').text(homerun.toString());

                audioCheer.length = .8;
                audioCheer.play();
                $('#distance').text('Really far');
                pitch--;
            }
        } else {
            if (parseInt($('#imgBall').css('margin-top').replace('px', '')) < (player)) {

                $('#imgBatter').attr('src', 'Images/blanky-0.png');
            }

        }

        pitch++;
        $('#pitch').text(pitch.toString());

        state = 'hit';

        $('#imgBatter').removeClass('imgBatterSwing');
    };


    function pitchBall() {
        $('#imgBall').animate().stop();

        pitcherImages();
        pitcherThrow();

        if (pitch > 9) {
            $('#distance').html('<a style=color:white; href=home.html>Game over</a>');
            state = 'game over';
            return;
        }



        let randomPitch = Math.floor((Math.random() * 3 + 1));

        $('#distance').text('Pitch: ' + randomPitch.toString());

        $('#imgBatter').attr('src', 'Images/blanky-0.png');
        player = $('.imgBatter').css('top').replace('px', '');
        $('#imgBall').css('margin-top', '150px');
        $('#imgBall').css('margin-left', 'calc(50% + 50px)');

        $('#imgBall').css('animation', 'pitch' + randomPitch.toString() + ' 1200ms linear');
        //$('#imgBall').css('animation', 'pitch2 1000ms linear');
        $("#imgBall").animate({
            marginTop: "+=" + (player)
        }, 1200);



        state = 'start';

    }
});

function batterImages() {

    batterFrame.picPaths = ['images/blanky-0.png', 'images/blanky-2.png', 'images/blanky-3.png', 'images/blanky-4.png', 'images/blanky-5.png'];
    picArray(batterFrame);


}

function pitcherImages() {
    pitcherFrame.picPaths = ['images/pitch-1.png', 'images/pitch-2.png', 'images/pitch-1.png', 'images/pitch-2.png', 'images/pitch-0.png'];
    picArray(pitcherFrame);
}

function picArray(objectFrame) {
    objectFrame.curPic = -1;
    //preload the images for smooth animation
    objectFrame.imgO = new Array();
    for (i = 0; i < objectFrame.picPaths.length; i++) {
        objectFrame.imgO[i] = new Image();
        objectFrame.imgO[i].src = objectFrame.picPaths[i];
    }
}

function pitcherThrow() {

    pitcherFrame.curPic = (++pitcherFrame.curPic > pitcherFrame.picPaths.length - 1) ? -1 : pitcherFrame.curPic;
    let imgCont1 = document.getElementById('imgPitcher');
    imgCont1.src = pitcherFrame.imgO[pitcherFrame.curPic].src;

    if (pitcherFrame.curPic != -1) {
        setTimeout(pitcherThrow, (100 - (pitcherFrame.curPic * 6)));
    }

}

function batterSwing() {

    batterFrame.curPic = (++batterFrame.curPic > batterFrame.picPaths.length - 1) ? -1 : batterFrame.curPic;
    let imgCont1 = document.getElementById('imgBatter');
    imgCont1.src = batterFrame.imgO[batterFrame.curPic].src;

    if (batterFrame.curPic != -1) {
        setTimeout(batterSwing, (50 - (batterFrame.curPic * 5)));
    }
}