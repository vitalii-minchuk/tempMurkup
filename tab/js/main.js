
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