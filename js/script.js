window.addEventListener('DOMContentLoaded', function(){

    // left menu

    document.querySelector('.burger').addEventListener('click', function(){
        document.querySelector('.left-menu').classList.add('left-menu-active');
        document.querySelector('.menu-overlay').classList.add('menu-overlay-active')
    });

    document.querySelector('.left-menu__btn').addEventListener('click', function(){
        document.querySelector('.left-menu').classList.remove('left-menu-active');
        document.querySelector('.menu-overlay').classList.remove('menu-overlay-active');
    });

    document.querySelector('.menu-overlay').addEventListener('click', function(){
        document.querySelector('.left-menu').classList.remove('left-menu-active');
        document.querySelector('.menu-overlay').classList.remove('menu-overlay-active');
        document.querySelector('._modal-wraper').classList.remove('active');
    });

    document.querySelectorAll('.left-menu__link').forEach(function(link){
        link.addEventListener('click', function(){
            document.querySelector('.left-menu').classList.remove('left-menu-active');
            document.querySelector('.menu-overlay').classList.remove('menu-overlay-active');
        })
    });
    // catalog
    
    document.querySelector('.catalog-btn').addEventListener('click', function(){
        document.querySelector('.catalog-btn').classList.toggle('catalog-btn-active');
        document.querySelector('.catalog-menu').classList.toggle('catalog-menu-active');
        document.querySelector('.click-close').classList.toggle('active');
    });

    document.querySelector('.click-close').addEventListener('click', function(){
        document.querySelector('.catalog-btn').classList.remove('catalog-btn-active');
        document.querySelector('.catalog-menu').classList.remove('catalog-menu-active');
        document.querySelector('.click-close').classList.remove('active');
    })

    document.querySelectorAll('.catalog-menu__sections-item').forEach(function(item){
        item.addEventListener('click', function(event){
            const path = event.currentTarget.dataset.path;
            document.querySelectorAll('.catalog-menu__content').forEach(function(el){
                el.classList.remove('active');
            });

            document.querySelector(`[data-target="${path}"]`).classList.add('active');
            
            document.querySelectorAll('.catalog-menu__sections-item').forEach(function(item){
                item.classList.remove('active');
            });

            document.querySelector(`[data-path="${path}"]`).classList.add('active');
        })
    })

    // section clients

    document.querySelector('.clients__btn-more').addEventListener('click', function(){
        document.querySelectorAll('.clients__item').forEach(function(item){
            item.style.display = 'block';
        })
    })
    // modal window

    document.querySelector('.header__order-call').addEventListener('click', function(){
        document.querySelector('._modal-wraper').classList.add('active');
        document.querySelector('.menu-overlay').classList.add('menu-overlay-active')
    });
    document.querySelector('.header__call-btn').addEventListener('click', function(){
        document.querySelector('._modal-wraper').classList.add('active');
        document.querySelector('.menu-overlay').classList.add('menu-overlay-active')
    });
    document.querySelector('.modal-close').addEventListener('click', function(){
        document.querySelector('._modal-wraper').classList.remove('active');
        document.querySelector('.menu-overlay').classList.remove('menu-overlay-active');
    });
    // form mask

    document.getElementById('phone').addEventListener('input', function (e) {
        var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
        e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
      });
})