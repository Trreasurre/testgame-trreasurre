window.onload = function() {
    //Variables
    var background = document.getElementById("gamecanvas");
    var cookieDis = gamecanvas.getContext("2d");
    var score = 0;
    var cBtn = document.getElementById("clickBtn");
    var multi = 1;
    var multiBtn1 = document.getElementById("buy2");
    var level = 1;
    var levelProg = 0;
    var levelMax = 100; 
    //Variables end

    cBtn.onclick = function() {
        score += 1 * multi;
        levelProg += 1;
    }
    
    multiBtn1.onclick = function() {
        if(score >= 100) {
            score -= 100;
            multi += 1;
        }
        else {
            alert("Need " + (100 - score) + " more cookies");
        }
    }

    function gameDis() {

        if(levelProg >= levelMax) {
            levelMax = Math.round(levelMax * 1.15);
            level += 1;
            levelProg = 0;
        }

        cookieDis.clearRect(0, 0, 600, 400);

        cookieDis.arc(300, 200, 100, 0, 2 * Math.PI);
        cookieDis.fillStyle = "#8b4513";
        cookieDis.fill();

        cookieDis.font = "25px Ariel";
        cookieDis.fillStyle = "black";
        cookieDis.fillText("Cookies: " + score, 200, 50);

        cookieDis.font = "15px Ariel";
        cookieDis.fillStyle = "green";
        cookieDis.fillText(multi + "x Multiplier", 400, 50);

        cookieDis.font = "30px Impact";
        cookieDis.fillStyle = "black";
        cookieDis.fillText("Level: " + level, 50, 50);
            cookieDis.font = "15px Impact";
            cookieDis.fillStyle = "blue";
            cookieDis.fillText(levelProg + "/" + levelMax, 50, 75);

        

        window.requestAnimationFrame(gameDis);
    }
    gameDis();

}