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

        document.querySelectorAll('.account-tab').forEach(function(el){
            el.classList.remove('active');
        });
        document.querySelector('.account__login').classList.add('active');

        document.querySelectorAll('._modal-wraper').forEach(function(el){
            el.classList.remove('active');
        })
        document.querySelector('body').classList.remove('no-scrol')
    });

    document.querySelectorAll('.left-menu__link').forEach(function(link){
        link.addEventListener('click', function(){
            document.querySelector('.left-menu').classList.remove('left-menu-active');
            document.querySelector('.menu-overlay').classList.remove('menu-overlay-active');
        })

    // });
    // document.querySelector('.left-menu__catalog-btn').addEventListener('click', function(){
    //     document.querySelector('.left-menu__catalog-btn').classList.toggle('catalog-btn-active');
    //     document.querySelector('.left-menu__catalog-menu').classList.toggle('catalog-left-active');
    //     document.querySelector('.click-close').classList.toggle('active');

     });
    
    //left menu acordion
    const acordionTitle = document.querySelectorAll('.catalog-acordion__title');
    const acordionContent  = document.querySelectorAll('.acordion-content');
    acordionTitle.forEach(function(el){
        el.addEventListener('click', function(event){
            const target = event.currentTarget.dataset.tab;

            if(event.currentTarget.classList.contains('active')){
                event.currentTarget.classList.remove('active');
                document.getElementById(target).classList.remove('active');
            } else {
                acordionContent.forEach(function(content){
                content.classList.remove('active')
                });
                acordionTitle.forEach(function(title){
                    title.classList.remove('active')
                });
                event.currentTarget.classList.add('active');
                document.getElementById(target).classList.add('active');
            }
        })
    })
    // catalog

    document.querySelectorAll('.nav-link').forEach(function(el){
        el.addEventListener('click', function(){
            document.querySelector('.click-close').classList.remove('active');
            document.querySelector('.catalog-menu').classList.remove('catalog-menu-active');
        })
    })
    
    document.querySelector('.catalog-btn').addEventListener('click', function(){
        document.querySelector('.catalog-btn').classList.toggle('catalog-btn-active');
        document.querySelector('.catalog-menu').classList.toggle('catalog-menu-active');
        document.querySelector('.click-close').classList.toggle('active');
    });

    document.querySelector('.click-close').addEventListener('click', function(){
        document.querySelectorAll('.catalog-btn').forEach(function(el){
            el.classList.remove('catalog-btn-active');
        });
        document.querySelectorAll('.catalog-menu').forEach(function(el){
            el.classList.remove('catalog-left-active');
            el.classList.remove('catalog-menu-active');
        });
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

    document.querySelector('.clients__btn-more').addEventListener('click', function(el){
        document.querySelectorAll('.clients__item').forEach(function(item){
            item.style.display = 'block';
        })
        document.querySelector('.clients__btn-more').classList.add('hidden');
    })
    // modal windows
    document.querySelector('.hero__consult').addEventListener('click', function(){
        document.querySelector('.call-back-wraper').classList.add('active');
        document.querySelector('.menu-overlay').classList.add('menu-overlay-active');
        document.querySelector('body').classList.add('no-scrol')
    })

    document.querySelector('.header__order-call').addEventListener('click', function(){
        document.querySelector('.call-back-wraper').classList.add('active');
        document.querySelector('.menu-overlay').classList.add('menu-overlay-active');
        document.querySelector('body').classList.add('no-scrol')
    });
    document.querySelector('.header__call-btn').addEventListener('click', function(){
        document.querySelector('.call-back-wraper').classList.add('active');
        document.querySelector('.menu-overlay').classList.add('menu-overlay-active')
        document.querySelector('body').classList.add('no-scrol')
    });

    document.querySelectorAll('.modal-close').forEach(function(el){
        el.addEventListener('click', function(){
            document.querySelector('body').classList.remove('no-scrol')
            document.querySelectorAll('._modal-wraper').forEach(function(el){
                el.classList.remove('active');
            })
            document.querySelector('.menu-overlay').classList.remove('menu-overlay-active');

            document.querySelectorAll('.account-tab').forEach(function(el){
                el.classList.remove('active');
            });
            document.querySelector('.account__login').classList.add('active');
            document.querySelector('body').classList.remove('no-scrol')
    })

    });
    document.querySelector('.login-btn').addEventListener('click', function(){
        document.querySelector('.account-wraper').classList.add('active');
        document.querySelector('.menu-overlay').classList.add('menu-overlay-active');
        document.querySelector('body').classList.add('no-scrol')
    })

    document.querySelectorAll('.account-tab-btn').forEach(function(item){
        item.addEventListener('click', function(event){
            const path = event.currentTarget.dataset.path_modal;
            document.querySelectorAll('.account-tab').forEach(function(el){
                el.classList.remove('active');
            });

            document.querySelector(`[data-target_modal="${path}"]`).classList.add('active');
        })
    })
    // form mask

    document.getElementById('phone').addEventListener('input', function (e) {
        var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
        e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
      });
})