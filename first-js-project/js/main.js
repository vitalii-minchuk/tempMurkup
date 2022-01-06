//----------------------tab------------------------
const btns     = document.querySelectorAll('.tabs__btn');
const tabsCont = document.querySelectorAll('.tabs__text');

btns.forEach(function(item) {
    item.addEventListener('click', function() {
        console.log('hello');
        let btnPlusCont = item.getAttribute('data-tab');
        let currentTab  = document.querySelector(btnPlusCont);

        btns.forEach(function(item){
            item.classList.remove('active');
        })

        tabsCont.forEach(function(item){
            item.classList.remove('active');
        })

        item.classList.add('active');
        currentTab.classList.add('active');
    });
})

document.querySelector('.tabs__btn').click();

//---------------------accordion----------------------------

const acc      = document.querySelectorAll('.acc__top');

acc.forEach(function(item) {
    item.addEventListener('click', function() {
        item.classList.toggle('active');
        let panel = item.nextElementSibling;

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    })
})
//----------------------slider+time-----------------------------


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

//-------------------------slider-------------------------

let position    = 450;
const slidsFlow = document.getElementById('flow');

document.getElementById('left').addEventListener('click', function() {
    position += 150;
    slidsFlow.style.left = -position + 'px';
});
document.getElementById('right').addEventListener('click', function() {
    position -= 150;
    slidsFlow.style.left = -position + 'px';
});
document.querySelector('.slider__btns').click();


