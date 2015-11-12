$(document).ready(setGame());
var timer;
var hitValue = 0;
var hitCount = 0;
function setGame() {
    $('#menuButton').click(function () {
        var w = $('#setWidth').val();
        var h = $('#setHeight').val();
        var speed = $('#setSpeed').val();
        $('#mainMenu').css("visibility", "hidden");
        $('#main').css("width", w*5);
        $('#main').css("height", h*5);
        $('#main').css("visibility", "visible");
        $('#scoreBoard').css("visibility", "visible");
        $('#target').css("width", w);
        $('#target').css("height", h);
        main(w, h, speed);
    }); 
}
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function changeSpot(w, h){
    $('#target').css('margin-left', getRandomArbitrary(0, (w*4)));
    $('#target').css('margin-top', getRandomArbitrary(0, (h*4)));
}

function main(w, h, speed){
    $('#target').css("visibility", "visible");


    changeSpot(w, h);
    
    setInterval(function () { 
        changeSpot(w, h);
    }, speed);

    $('#target').click(function () {
    
        hitCount++;
        $("#target").effect("bounce", "slow");
        $("#score").text(hitCount);
        changeSpot(w, h);
    });
}