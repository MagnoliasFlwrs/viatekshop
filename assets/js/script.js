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

desctopSubmenuContainer?.addEventListener('click' , (e)=> {
    e.stopPropagation();
})

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


// custom select

const customSelects =  document.querySelectorAll('.select');

if (customSelects) {
    customSelects.forEach(el => {
        el.addEventListener('click' , (e)=> {
            let currentSelectWrap = e.target.closest('.select-wrap');
            let currentSelectBody = currentSelectWrap.querySelector('.select-list');
            let currentSelectOptions = currentSelectBody.querySelectorAll('li');
            let currentSelectTitle = el.querySelector('p');
            let currentImage = el.querySelector('img')
            currentSelectBody.classList.add('active');
            currentSelectOptions.forEach(option => {
                option.addEventListener('click' , ()=> {
                    if (currentSelectTitle) {
                        currentSelectTitle.innerHTML = option.textContent;
                        currentSelectTitle.dataset.current = option.dataset.value;
                        currentSelectBody.classList.remove('active');
                    }
                    if (currentImage) {
                        currentImage.src = option.querySelector('img').src;
                        currentImage.dataset.current = option.dataset.value;
                        currentSelectBody.classList.remove('active');
                    }

                })
            })
        })
    })
    document.addEventListener('click', (e)=> {
        let lists = document.querySelectorAll('.select-list.active')
        if (!e.target.closest('.select-wrap') && lists){
            lists.forEach(el=> {
                el.classList.remove('active');
            })

        }
    })

}

const phoneSelect = document.querySelector('.phone-select .header-phones');

if (phoneSelect) {
    phoneSelect.addEventListener('click' , (e)=> {
        let currentSelectWrap = e.target.closest('.phone-select');
        let currentSelectBody = currentSelectWrap.querySelector('.phone-select-wrapper');
        currentSelectBody.classList.add('active');
    })
    document.addEventListener('click', (e)=> {
        let lists = document.querySelectorAll('.phone-select-wrapper.active')
        if (!e.target.closest('.phone-select') && lists){
            lists.forEach(el=> {
                el.classList.remove('active');
            })

        }
    })
}

// mobile-menu

const burger = document.querySelector('.burger-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtns = document.querySelectorAll('.mobile-menu .close-btn');
const droprightItems = document.querySelectorAll('.mobile-menu .dropright');
const backBtns = document.querySelectorAll('.mobile-menu .back');

burger?.addEventListener('click' , ()=> {
    mobileMenu.classList.add('active')
})

closeBtns?.forEach(el=> {
    el.addEventListener('click' , ()=> {
        mobileMenu.classList.remove('active')
    })
})

droprightItems?.forEach(el=> {
    el.addEventListener('click' , (e)=> {
        e.preventDefault();
        let currScreen = el.closest('li').querySelector('.screen')
        currScreen.classList.add('active');
    })
})
backBtns.forEach(el=> {
    el.addEventListener('click' , (e)=> {
        e.stopPropagation();
        let droprightScreen = e.target.closest('.screen');
        droprightScreen.classList.remove('active');
    })
})
