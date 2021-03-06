if(localStorage.getItem("color"))
    $("#color" ).attr("href", "../assets/css/"+localStorage.getItem("color")+".css" );
if(localStorage.getItem("dark"))
    $("body").attr("class", "dark-only");
(function() {
})();
//live customizer js
$(document).ready(function() {
    $(".customizer-color li").on('click', function() {
        $(".customizer-color li").removeClass('active');
        $(this).addClass("active");
        var color = $(this).attr("data-attr");
        var primary = $(this).attr("data-primary");
        var secondary = $(this).attr("data-secondary");
        localStorage.setItem("color", color);
        localStorage.setItem("primary", primary);
        localStorage.setItem("secondary", secondary);
        localStorage.removeItem("dark");
        $("#color" ).attr("href", "../assets/css/"+color+".css" );
        $(".dark-only").removeClass('dark-only');
        location.reload(true);
    });

    $(".customizer-color.dark li").on('click', function() {
        $(".customizer-color.dark li").removeClass('active');
        $(this).addClass("active");
        $("body").attr("class", "dark-only");
        localStorage.setItem("dark", "dark-only");
    });


    $(".customizer-mix li").on('click', function() {
        $(".customizer-mix li").removeClass('active');
        $(this).addClass("active");
        var mixLayout = $(this).attr("data-attr");
        $("body").attr("class", mixLayout);
    });


    $('.sidebar-setting li').on('click', function() {
        $(".sidebar-setting li").removeClass('active');
        $(this).addClass("active");
        var sidebar = $(this).attr("data-attr");
        $(".page-sidebar").attr("sidebar-layout",sidebar);
    });

    $('.sidebar-main-bg-setting li').on('click', function() {
        $(".sidebar-main-bg-setting li").removeClass('active')
        $(this).addClass("active")
        var bg = $(this).attr("data-attr");
        $(".page-sidebar").attr("class", "page-sidebar "+bg);
    });

    $('.sidebar-type li').on('click', function () {
        $(".sidebar-type li").removeClass('active');
        var type = $(this).attr("data-attr");

        var boxed = "";
        if($(".page-wrapper").hasClass("box-layout")){
            boxed = "box-layout";
        }
        switch (type) {
            case 'normal-sidebar':
            {
                $(".page-wrapper").attr("class", "page-wrapper "+boxed);
                $(".page-body-wrapper").attr("class", "page-body-wrapper ");
                $(".logo-wrapper").find('img').attr('src', '../assets/images/endless-logo.png');
                break;
            }
            case 'compact-sidebar':
            {
                $(".page-wrapper").attr("class", "page-wrapper compact-wrapper "+boxed);
                $(".page-body-wrapper").attr("class", "page-body-wrapper sidebar-icon");
                $(".logo-wrapper").find('img').attr('src', '../assets/images/logo/compact-logo.png');
                break;
            }
            case 'compact-icon-sidebar':
            {
                $(".page-wrapper").attr("class", "page-wrapper compact-page "+boxed);
                $(".page-body-wrapper").attr("class", "page-body-wrapper sidebar-hover");
                $(".logo-wrapper").find('img').attr('src', '../assets/images/endless-logo.png');
                break;
            }
            default:
            {
                $(".page-wrapper").attr("class", "page-wrapper "+boxed);
                $(".page-body-wrapper").attr("class", "page-body-wrapper ");
                $(".logo-wrapper").find('img').attr('src', '../assets/images/endless-logo.png');
            }
        }
        $(this).addClass("active");
    });

    $('.main-layout li').on('click', function() {
        $(".main-layout li").removeClass('active');
        $(this).addClass("active");
        var layout = $(this).attr("data-attr");
        $("body").attr("main-theme-layout", layout);

        $("html").attr("dir", layout);
    });
});

