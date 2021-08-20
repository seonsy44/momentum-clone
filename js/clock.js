const clock = document.querySelector('#clock');

function getClock(){
   const date = new Date(),
    hh = String(date.getHours()).padStart(2,'0'),
    mm = String(date.getMinutes()).padStart(2,'0'),
    ss = String(date.getSeconds()).padStart(2,'0');
   clock.innerText = `${hh}:${mm}:${ss}`;
}

getClock();
setInterval(getClock, 1000);