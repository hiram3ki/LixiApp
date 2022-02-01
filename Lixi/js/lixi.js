"use strict";

window.addEventListener("DOMContentLoaded",
    function() {
        $("header").textillate({
            loop: false, 
            minDisplayTime: 2000, 
            initialDelay: 2000, 
            autoStart: true, 
            in: { 
                effect: "fadeInLeftBig", 
                delayScale: 1.5, 
                delay: 50, 
                sync: false, 
                shuffle: true 
            }
        });

        $(function(){
            ScrollReveal().reveal("#lixi", { duration: 9000 });
        });

        
        let popmsg="Ｑちゃん、いらっしゃい ヾ(๑╹◡╹)ﾉ";
        alert(popmsg);
    }, false
);

const lixi = document.getElementById("lixi");
const lixiText = document.getElementById("lixiText");
lixi.addEventListener("click",
    function(){
        //let n = Math.floor(Math.random() * 3);
    
        //    switch (n) {
            //case 0:
            //    btn1.textContent="Very Happy!!";
            //    btn1.style.color="#FF0000"; 
        //        btn1.style.fontSize="40px";
        //        break;
        //    case 1:
        //        btn1.textContent="Happy!";
        //        btn1.style.color="#ffff00";
        //        btn1.style.fontSize="30px";
        //        break;
        //    case 2:
        //        btn1.textContent="UnHappy...";
        //        btn1.style.color="#261e1c";
        //        btn1.style.fontSize="20px";
        //        break;
        //    }

        let resultText=["10000円","5000円","1000円","500円","100円","1円 =)))"];
        let resultColor=["#ff0000","#c71585","#ff1493","#ff69b4","#ff8c00","#1e90ff"];
        let resultFontSize=["100px","80px","70px","60px","50px","40px"];
        let resultMaxSpeed=[10,0,0,0,0,0];
        let resultMaxSize=[30,0,0,0,0,0];
        let resultImage=["img/money.png","","","","",""];
        let resultSound=["sound/omikuji_sound1.mp3","sound/omikuji_sound2.mp3","sound/omikuji_sound2.mp3","sound/omikuji_sound2.mp3","sound/omikuji_sound2.mp3","sound/omikuji_sound3.mp3"];
        let n=Math.floor(Math.random()*resultText.length);
        lixiText.textContent=resultText[n];
        lixiText.style.color=resultColor[n];
        lixiText.style.fontSize=resultFontSize[n];
                
        $(document).snowfall("clear");
        
        $(document).ready(function(){
            $(document).snowfall({
                maxSpeed : resultMaxSpeed[n], 
                minSpeed : 1, 
                maxSize : resultMaxSize[n], 
                minSize : 5, 
                image : resultImage[n]
            });
        });

        let music=new Audio(resultSound[n]);
        music.currentTime=0;
        music.play();

    }, false
);

        