$(document).ready(main());
var timer;
var hitValue = 0;

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


//function outOfTime() {
//    timer = setTimeout(changeSpot, 2000);
//}

function changeSpot(){
    $('#target').css('margin-left', getRandomArbitrary(0, 225));
    $('#target').css('margin-top', getRandomArbitrary(0, 225));
}

function main(){
    

    changeSpot();
   // outOfTime();

    $('#target').click(function () {        
        $("#target").effect("bounce", "slow");
        changeSpot();
     //   clearTimeout(timer);
     //   main();
    });
}