let [sec, min, hour] = [0, 0, 0];

let display = document.getElementById("display");
let timer = null;

function updateTimer(){
    sec++;
    
    if(sec === 60){
        min++;
        sec = 0;
    }
    if(min === 60){
        hour++;
        min = 0;
    }

    let s = (sec < 10) ? `0${sec}` : sec;
    let m = (min < 10) ? `0${min}` : min;
    let h = (hour < 10) ? `0${hour}` : hour;

    display.innerText = `${h}:${m}:${s}`;
}

document.getElementById("start").addEventListener("click", () => {
    if(timer !== null) return;
    timer = setInterval(updateTimer, 1000);
})

document.getElementById("stop").addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
})

document.getElementById("reset").addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
    [sec, min, hour] = [0, 0, 0];
    display.innerHTML = `00:00:00`;
})



