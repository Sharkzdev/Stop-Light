text = document.getElementById("text");
let click_sound = new Audio('sound.wav');
click_sound.currentTime = 0.001
function red(){
    click_sound.play();
    text.innerHTML = "STOP!"; 
    text.style.color = "red";
    
}

function yellow(){
    click_sound.play();
    text.innerHTML = "SLOW DOWN!"; 
    text.style.color = "#8B8000";
}

function green(){
    click_sound.play();
    text.innerHTML = "GO!"; 
    text.style.color = "green";
}