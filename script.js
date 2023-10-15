const timer = document.querySelector(".timer");
const futDate = new Date("16,october,2024,00:56").getTime();
let gap;
let restMs;

function decreaseTimer(){
    const today = new Date;
    gap = futDate - today.getTime();
    const day = Math.floor(gap/(1000*60*60*24));
    restMs = gap % (1000*60*60*24);
    const hour = Math.floor(restMs/(1000*60*60));
    restMs = restMs % (1000*60*60);
    const minute = Math.floor(restMs/(1000*60));
    restMs = restMs % (1000*60);
    const second = Math.floor(restMs/1000);
    timer.textContent = `${day} days ${hour} hours ${minute} minutes ${second} seconds`;
    timer.style.color = "green";
}

const id = setInterval(()=>{
    decreaseTimer();
    if(gap<0){
        clearInterval(id);
        timer.textContent = "EXPIRED";
        timer.style.color = "red";
    } 
}, 1000)