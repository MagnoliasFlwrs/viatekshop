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


