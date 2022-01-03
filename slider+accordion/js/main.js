
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
document.querySelector('.slid__btns').click();

const acc     = document.querySelectorAll('.acc__btn');

acc.forEach(function(item){
    item.addEventListener('click', function(){
        item.classList.toggle('active');
        
    })
})

