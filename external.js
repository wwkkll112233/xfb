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

