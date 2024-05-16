document.addEventListener('DOMContentLoaded', function() {
    const categoryLists = document.querySelectorAll('.category-list');

    categoryLists.forEach(function(categoryList) {
        const items = categoryList.querySelectorAll('ul li');
        const btn = categoryList.querySelector('.show-hide-btn');
        const hiddenCount = categoryList.querySelector('.hidden-count');

        if (items.length <= 5) {
            btn.style.display = 'none';
        } else {
            for (let i = 5; i < items.length; i++) {
                items[i].style.display = 'none';
            }
            hiddenCount.textContent = items.length - 5;
        }

        btn.addEventListener('click', function() {
            items.forEach(function(item) {
                item.style.display = '';
            });
            btn.style.display = 'none';
        });
    });
});


const desctopSubmenuLink = document.querySelector('.header .submenu-link');
const desctopSubmenuContainer = document.querySelector('.header .submenu-container');

desctopSubmenuLink?.addEventListener('click', (e) => {
    e.stopPropagation();
    desctopSubmenuLink.classList.toggle('active');
    desctopSubmenuContainer.classList.toggle('active');
});

document.addEventListener('click', (e) => {

    console.log(!e.target.closest('.header .submenu-link'))
    if (!e.target.closest('.header .submenu-link')) {
        desctopSubmenuLink?.classList.remove('active');
        desctopSubmenuContainer?.classList.remove('active');
    }
});

// news years filter

const filterItems = document.querySelectorAll('.year-filter ul li');

filterItems?.forEach(el=> {
    el.addEventListener('click' , ()=> {
        filterItems.forEach(elem => {
            if(elem.classList.contains('active')) {
                elem.classList.remove('active')
            }
        })
        el.classList.add('active')
    })
})


// stock items swipers

const stockItemsSwipers = document.querySelectorAll('.stock-item-swiper');

if (stockItemsSwipers) {
    const swipers = {};

    stockItemsSwipers?.forEach((el , i)=> {
        const swiperName = `swiper${i}`;
        const currentPagination = el.closest('.stock-item').querySelector(".swiper-pagination");

        swipers[swiperName] = new Swiper(el, {
            spaceBetween: 3,
            slidesPerView: 1,
            direction: "horizontal",
            pagination: {
                el: currentPagination,
                clickable: true,
            },
        });
    })
}

// likes

const likes = document.querySelectorAll('.like');

likes?.forEach(el=> {
    el.addEventListener('click' , () =>{
        el.classList.toggle('active')
    })
})

// counter


const minusBtns = document.querySelectorAll('.counter-wrap .minus');
const plusBtns = document.querySelectorAll('.counter-wrap .plus');

if(minusBtns) {
    minusBtns.forEach(el=> {
        el.addEventListener('click' , (e) => {
            let currCounter = e.target.closest('.counter-wrap').querySelector('.counter');
            if (currCounter.innerHTML > 0) {
                currCounter.innerHTML = +currCounter.innerHTML - 1;
            }
        })
    })
}
if(plusBtns) {
    plusBtns.forEach(el=> {
        el.addEventListener('click' , (e) => {
            let currCounter = e.target.closest('.counter-wrap').querySelector('.counter');
            if (currCounter.innerHTML >= 0) {
                currCounter.innerHTML = +currCounter.innerHTML + 1;
            }
        })
    })
}

// callback modal

const overlay = document.querySelector('.overlay');
const callbackModal = document.querySelector('.callback-modal');
const callbackModalClose = document.querySelector('.callback-modal .close-btn');
const callBackBtns = document.querySelectorAll('.show-callback-modal-btn')

const showCallbackModal = () => {
    callBackBtns?.forEach(el=> {
        el.addEventListener('click' , ()=> {
            overlay.classList.add('open');
            callbackModal.classList.add('open');
        })
    })
}

const hideCallbackModal = ()=> {
    overlay.addEventListener('click' , ()=> {
        overlay.classList.remove('open');
        callbackModal.classList.remove('open');
    })
    callbackModalClose.addEventListener('click' , ()=> {
        overlay.classList.remove('open');
        callbackModal.classList.remove('open');
    })
}
if (callBackBtns && callbackModal) {
    showCallbackModal();
    hideCallbackModal()
}
