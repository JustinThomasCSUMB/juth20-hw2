/*script for index.js web page*/

$(document).ready(function(){
    $("#buttonSpin").on("click", spin);
    
    let spinning = false;
    let spinTime = 0;
    var startSpinTimer;
    let slotValue = [0,1,2];
    let bet = 0;
    
    /*
    creates random image as fast as possible to dispaly for each slot
    */
    function spin(){
        bet = $("#betAmount").val();
        if(bet == 0){
            $("#betError").text("You must input a valid bet amount");
            $("#betError").show();
            return;
        }else{
            $("#betError").hide();
        }
        $("#winnings").hide();
        $("#buttonSpin").prop("disabled", true);
        startSpinTimer = setInterval(spinTimer, 200);
    }// spin
    
    function spinTimer(){
        if(spinTime >= 10){
            clearInterval(startSpinTimer);
            spinTime = 0;
        $("#buttonSpin").prop("disabled", false);
        checkWinnings();
        return;
        }
        var slot1Img = getRandomPic(0);
        $("#slot1").prop("src", slot1Img);
        var slot2Img = getRandomPic(1);
        $("#slot2").prop("src", slot2Img);
        var slot3Img = getRandomPic(2);
        $("#slot3").prop("src", slot3Img);
        spinTime++;
    }// spinTimer
    
    /*
    generates image to displayed based on random number 0-2
    set's slotValue based on the number rolled
    */
    function getRandomPic(slotNumber){
        var image = Math.floor(Math.random() * 3);
        var imgSource = "";
        if(image == 0){
            imgSource = "./img/cherry.webp";
            slotValue[slotNumber] = 0;
        } else if (image == 1) {
            imgSource = "./img/bar.png";
            slotValue[slotNumber] = 1;
        } else if (image == 2){
            imgSource = "./img/seven.png"
            slotValue[slotNumber] = 2;
        }
        
        return imgSource;
    } // getRandomPic
    
    /**
     * checks if all three slots are matching
     * displays winnings
     */
    function checkWinnings(){
        if(slotValue[0] == slotValue[1] && slotValue[1] == slotValue[2]){
            $("#winnings").text(`Winnings = $${5 * bet}`)
            $("#winnings").show();
        }
    }
    
    
    
    
}); // ready

