$(document).ready(setGame());
var timer;
var hitValue = 0;
var hitCount = 0;
var intervalTime = 2000;
function setGame() {
    $('#menuButton').click(function () {
        var w = $('#setWidth').val();
        var h = $('#setHeight').val();
        var speed = $('#setSpeed').val();
        $('#mainMenu').css("visibility", "hidden");
        $('#main').css("visibility", "visible");
        $('#scoreBoard').css("visibility", "visible");
        $('#target').css("width", w);
        $('#target').css("height", h);
        main();
    }); 
}
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function changeSpot(){
    $('#target').css('margin-left', getRandomArbitrary(0, 225));
    $('#target').css('margin-top', getRandomArbitrary(0, 225));
}

function main(){
    $('#target').css("visibility", "visible");


    changeSpot();
    
    setInterval(function () { 
        changeSpot();
    }, intervalTime);

    $('#target').click(function () {
    
        hitCount++;
        $("#target").effect("bounce", "slow");
        $("#score").text(hitCount);
        changeSpot();
    });
}