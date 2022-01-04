
const slids     = document.querySelectorAll('.slid__img');
const btnStop   = document.getElementById('stop-btn');
const btnStart  = document.getElementById('start-btn');

let currentSlid = 0;

slids[currentSlid].style.opacity = 1;

let interval = setInterval(nextSlid, 2000);

function nextSlid() {
    slids[currentSlid].style.opacity = 0;
    currentSlid = (currentSlid + 1) % slids.length;
    slids[currentSlid].style.opacity = 1;
}

btnStop.addEventListener('click', function() {
    clearTimeout(interval);
});
btnStart.addEventListener('click', function() {
    setInterval(interval);
});
