window.addEventListener('DOMContentLoaded', function(){
    const navLinks = document.querySelectorAll('.nav-link');
  

    navLinks.forEach(function(link){
        link.addEventListener('click', navLinkClick);
    })

    function navLinkClick(event) {
        SmothScroll(event);
    }


function SmothScroll(event){
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href") === "#"
    ? "header"
    : event.currentTarget.getAttribute("href");
    const targetPosition = document.querySelector(targetId).offsetTop;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition - 110;
    const duration = 1000;
    let start = null;

    window.requestAnimationFrame(step);

    function step(timestamp){
        if(!start)start = timestamp;
        const progres = timestamp - start;
        window.scrollTo(0, easeInOutCubic(progres, startPosition, distance, duration));
        
        if(progres < duration){
            window.requestAnimationFrame(step)
        }
    };

    function easeInOutCubic(t, b, c, d){
        t /= d/2;
        if (t < 1) return c/2*t*t*t + b;
        t -= 2;
        return c/2*(t*t*t + 2) + b;
    };
}


})