$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        //所有參數的位置
        //items: 6, //這個參數是要出現幾個
        loop: true, //可以循環
        nav: true, //能控制
        dots: false, //不能有底下的點
        navText: ["<div class='nav-btn prev-slide'>  左邊< </div>","<div class='nav-btn next-slide'> >右邊 </div>"], //把箭頭改成div
        mouseDrag: false, //不能讓它拖拉，因為字就不能點擊了。
        //   navClass: '[&#x27;owl-prev&#x27;,&#x27;owl-next&#x27;]'
        //手機版
        responsive: {
            //手機
            0: {
                items: 2,
                nav: true,
            },
            // 瀏覽器寬度600 ~ 1000
            600: {
                items: 3,
                nav: true
            },
             // 瀏覽器寬度1000 以上
            1000: {
                items: 7,
                nav: true
            }
        }
    });