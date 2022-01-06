

const grid     = document.querySelectorAll('.esc__cell');
let random     = Math.floor(Math.random()*130);
let randomCell = grid[random];

randomCell.classList.add('active');

randomCell.addEventListener('mouseenter', function() {

    randomCell.classList.remove('active');
    random     = Math.floor(Math.random()*130);
    randomCell = grid[random];
    randomCell.classList.add('active');
    console.log('hello');
    randomCell.classList.add('active');

    randomCell.addEventListener('mouseenter', function() {

        randomCell.classList.remove('active');
        random     = Math.floor(Math.random()*130);
        randomCell = grid[random];
        randomCell.classList.add('active');
        console.log('hello');
    })

})

const openPopup   = document.querySelectorAll('.start__btn');
const popUp1      = document.getElementById('popup-overlay1');
const popUp2      = document.getElementById('popup-overlay2');
const closePopup  = document.querySelectorAll('.start__popup-close');

openPopup.forEach(function(item) {
    item.addEventListener('click', function() {
        console.log('eeee');
        popUp1.classList.add('active');
    });
})

closePopup.forEach(function(item) {
    item.addEventListener('click', function() {
        window.location.reload();
    });
})

document.getElementById('start__popup-btn-ok1').onclick = getUserName;

function getUserName() {

    let UserName = document.querySelector('.start__popup-input-user-name').value;
    console.log(UserName);
    document.getElementById('say-hello').innerHTML = `How nice to meet you ${UserName} !!! It would be great if you left your comment. Thanks`;
    popUp1.classList.remove('active');
    popUp2.classList.add('active');
}
