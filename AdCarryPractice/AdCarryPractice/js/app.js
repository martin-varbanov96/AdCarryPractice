$(document).ready(setGame());
var timer;
var hitValue = 0;
var hitCount = 0;
function setGame() {
    $('#menuButton').click(function () {
        hitCount = 0;
        $("#score").text(hitCount);
        menuOut();
    });
    $("#hamburger").click(function(){
        $("#mainMenu").toggle("fast");
        $('#hamburger').css("visibility", "visible");
    });
}
function menuOut(){
        var w = $('#setWidth').val();
        var h = $('#setHeight').val();
        var speed = $('#setSpeed').val();
        $('#main').css("width", w*5);
        $('#main').css("height", h*5);
        $('#main').css("visibility", "visible");
        $('#target').css("width", w);
        $('#target').css("height", h);
        main(w, h, speed);
    
}
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function changeSpot(w, h){
    $('#target').css('margin-left', getRandomArbitrary(0, (w*3)));
    $('#target').css('margin-top', getRandomArbitrary(0, (h*3)));
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