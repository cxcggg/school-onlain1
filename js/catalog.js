window.addEventListener('DOMContentLoaded', function(){
    const btn = document.querySelector('.side-section__button-back');
    const menu = document.querySelector('.side-section');
    btn.addEventListener('click', function(){
        const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        
        if(width > 669){
            if(btn.classList.contains('disabled')){
                btn.classList.remove('disabled')
                menu.classList.remove('disabled')
            } else {
                btn.classList.add('disabled')
                menu.classList.add('disabled')
            }
        } else {
            if(btn.classList.contains('disabled')){
                btn.classList.remove('disabled');
                menu.classList.remove('disabled');
                btn.classList.add('active');
                menu.classList.add('active')
            } 
            if(btn.classList.contains('active')){
                btn.classList.remove('active');
                menu.classList.remove('active');
                btn.classList.add('disabled');
                menu.classList.add('disabled');
            } else {
                btn.classList.add('active');
                menu.classList.add('active')
            }
            
        }
    })

    

})