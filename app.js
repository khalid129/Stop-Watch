var min = 0;
var sec = 0;
var msec = 0;
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");

function timer(){
    msec++;
    msecHeading.innerHTML=msec;
    if(msec>99){
        sec++;
        secHeading.innerHTML=sec;
        msec=0;
    }
    else if(sec>=60){
        sec = 0;
        min++;
        secHeading.innerHTML=sec;
        minHeading.innerHTML=min;
    }
}
function start(){
interval = setInterval(timer,10);
}
function disable(){
    document.getElementById("start").disabled = 'true';
}
function able(){
    document.getElementById("start").disabled = false;
}

function stop(){
    clearInterval(interval);
}

function reset(){
    sec = 00; 
    min = 00;
    msec = 00;
    minHeading.innerHTML=min;
    secHeading.innerHTML=sec;
    msecHeading.innerHTML=msec;
    clearInterval(interval);
}
