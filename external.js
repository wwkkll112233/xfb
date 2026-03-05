    // menu2 toggle
    (function(){
        const menu2 = document.querySelector('.menu2');
        if(menu2){
            menu2.addEventListener('click', function(e){
                // prevent clicking the links inside closing immediately
                if(e.target === this) {
                    this.classList.toggle('open');
                }
            });
            // 点击其他地方时关闭（可选）
            document.addEventListener('click', function(e){
                if(!menu2.contains(e.target)){
                    menu2.classList.remove('open');
                }
            });
        }
    })();

// Lazy loading for images
(function(){
    document.addEventListener('DOMContentLoaded', function() {
        const images = document.querySelectorAll('img');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                    }
                    observer.unobserve(img);
                }
            });
        });
        images.forEach(img => {
            if (!img.dataset.src) {
                img.dataset.src = img.src;
                img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'; // 1x1 transparent GIF
            }
            img.classList.add('lazy');
            imageObserver.observe(img);
        });
    });
})();