$(function() {
    // JS滚动超过100px隐藏鼠标图标：
    $(window).scroll(function() {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop > 100) {
            /*当滚动超过100px*/
            $('.btnScroll').addClass('btnScrollHide');
        } else {
            $('.btnScroll').removeClass('btnScrollHide');
        }
    })
    // JS点击锚点实现平滑滚动：
    $("#mainVisual a").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top - 100
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });


    // 屏幕滚动加载返回按钮
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 100) {
            $('.btnScrollTop').fadeIn(700);
        } else {
            $('.btnScrollTop').fadeOut(700);
        }
    });


    // 点击返回顶部
    $('.btnScrollTop').click(function() {
        $('html,body').animate({
            scrollTop: '0'
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });

    // 打字机效果
    var type_d = "#typed";

    if ($(type_d).length) {

        var typed = new Typed(type_d, {
            stringsElement: '#typed-strings',
            typeSpeed: 40,
            backSpeed: 0,
            backDelay: 1500,
            startDelay: 1000,
            fadeOut: false,
            loop: true
        });

    };
    // 打开电脑QQ
    $('#openPcQQ').click(function() {
        /* Act on the event */
        window.open('http://wpa.qq.com/msgrd?v=3&uin=1320325040&site=qq&menu=yes', '_brank');
    });
    // 打开QQ
    $('#openPhoneQQ').click(function() {
        /* Act on the event */
        window.open('http://wpa.qq.com/msgrd?v=3&uin=1320325040&site=qq&menu=yes', '_brank');
    });
});

//鍏ㄥ睆婊氬姩
$(function() {
    var n = 0;
    var imgLength = $(".b-img .slide").length;
    var ctWidth = imgLength * 100;
    var itemWidth = 1 / imgLength * 100;
    $(".b-img").width(ctWidth + "%");
    $(".b-img .slide").width(itemWidth + "%");
    $(".b-list").width(imgLength * 30);
    if (imgLength > 1) {
        for (var i = 0; i < imgLength; i++) {
            var listSpan = $("<span></span>")
            $(".b-list").append(listSpan);
        }
    }
    $(".b-list span:eq(0)").addClass("spcss").siblings("span").removeClass("spcss");
    $(".bar-right").click(function() {
        if (n == imgLength - 1) {
            var ctPosit = (n + 1) * 100;
            $(".banner").append($(".b-img").clone());
            $(".b-img:last").css("left", "100%");
            $(".b-img:first").animate({
                "left": "-" + ctPosit + "%"
            }, 1000);
            $(".b-img:last").animate({
                "left": "0"
            }, 1000);
            var setTime0 = setTimeout(function() {
                $(".banner .b-img:first").remove();
            }, 1000);
            n = 0;
            $(".b-list span:eq(" + n + ")").addClass("spcss").siblings("span").removeClass("spcss");
        } else {
            n++;
            var ctPosit = n * 100;
            $(".b-img").animate({
                "left": "-" + ctPosit + "%"
            }, 1000);
            $(".b-list span:eq(" + n + ")").addClass("spcss").siblings("span").removeClass("spcss");
        }
    })
    $(".bar-left").click(function() {
        if (n == 0) {
            var stPosit = imgLength * 100;
            var etPosit = (imgLength - 1) * 100;
            $(".banner").prepend($(".b-img").clone());
            $(".b-img:first").css("left", "-" + stPosit + "%");
            $(".b-img:last").animate({
                "left": "100%"
            }, 1000);
            $(".b-img:first").animate({
                "left": "-" + etPosit + "%"
            }, 1000);
            var setTime0 = setTimeout(function() {
                $(".banner .b-img:last").remove();
            }, 1000);
            n = imgLength - 1;
            $(".b-list span:eq(" + n + ")").addClass("spcss").siblings("span").removeClass("spcss");
        } else {
            n--;
            var ctPosit = n * 100;
            $(".b-img").animate({
                "left": "-" + ctPosit + "%"
            }, 1000);
            $(".b-list span:eq(" + n + ")").addClass("spcss").siblings("span").removeClass("spcss");
        }
    })
    $(".b-list span").click(function() {
        var lsIndex = $(this).index();
        n = lsIndex;
        var ctPosit = n * 100;
        $(".b-img").animate({
            "left": "-" + ctPosit + "%"
        }, 1000);
        $(this).addClass("spcss").siblings("span").removeClass("spcss");
    })

    function rollEnvent() {
        if (n == imgLength - 1) {
            var ctPosit = (n + 1) * 100;
            $(".banner").append($(".b-img").clone());
            $(".b-img:last").css("left", "100%");
            $(".b-img:first").animate({
                "left": "-" + ctPosit + "%"
            }, 1000);
            $(".b-img:last").animate({
                "left": "0"
            }, 1000);
            var setTime0 = setTimeout(function() {
                $(".banner .b-img:first").remove();
            }, 1000);
            n = 0;
            $(".b-list span:eq(0)").addClass("spcss").siblings("span").removeClass("spcss");
        } else {
            n++;
            var ctPosit = n * 100;
            $(".b-img").animate({
                "left": "-" + ctPosit + "%"
            }, 1000);
            $(".b-list span:eq(" + n + ")").addClass("spcss").siblings("span").removeClass("spcss");
        }
    }
    var slidesetInterval = setInterval(rollEnvent, 6000);
    $(".banner").hover(function() {
        clearInterval(slidesetInterval);
    }, function() {
        slidesetInterval = setInterval(rollEnvent, 6000);
    });
})