    console.log("main loaded");
    
    $('.ye-en-haut').on('click', function() {

        $('body,html').animate({scrollTop:0},800);

    });



    $('a.ye-ancre').click( function() {

        var linkHref = $(this).attr("href");
        var idElement = linkHref.substr(linkHref.indexOf("#"));

        $('html, body').animate({
            scrollTop: $(idElement).offset().top-200
        }, 500);    

        return false;

    });        

    

    $(window).scroll(function() {

        let scroll = $(window).scrollTop();

        if (scroll >= 420) {
            $("header").addClass("sticky-top");
            $("header").addClass("menu-transparent");
        }else{
            $("header").removeClass("sticky-top");
            $("header").removeClass("menu-transparent");
        }

    });


    AOS.init({duration: 1500});
    if($('[data-js-accueil]').hasClass('ye-active')){
        mouseAnimation(); 
    }       


function mouseAnimation(){
    $(window).scroll(function() {
        var screenWidth = $(window).width();
        var wS = $(this).scrollTop();
        var vertivalDistance = $('.animation-wrapper').offset().top;
        //console.log(wS+' --- '+vertivalDistance);

        if (screenWidth > 1200) {//vertivalDistance ~= 4100
            if (wS <= (vertivalDistance-600)) {
                clearClass('#mouse-trap','');
            }else if (wS > (vertivalDistance-600) && wS <= (vertivalDistance-500)) {
                clearClass('#mouse-trap','step-desktop-1');
            }else if (wS > (vertivalDistance-500)  && wS <= (vertivalDistance-400)) {
                clearClass('#mouse-trap','step-desktop-2');
            }else if (wS > (vertivalDistance-400)  && wS <= (vertivalDistance-300)) {
                clearClass('#mouse-trap','step-desktop-3');
            }else if (wS > (vertivalDistance-300)  && wS <= (vertivalDistance-200)) {
                clearClass('#mouse-trap','step-desktop-4');
            }else if (wS > (vertivalDistance-200) && wS <= (vertivalDistance-100)) {
                clearClass('#mouse-trap','step-desktop-5');
            }
        }else if (screenWidth > 991){//vertivalDistance ~= 3300
            if (wS <= (vertivalDistance-500)) {
                clearClass('#mouse-trap','');
            }else if (wS > (vertivalDistance-500) && wS <= (vertivalDistance-400)) {
                clearClass('#mouse-trap','step-ipad-1');
            }else if (wS > (vertivalDistance-400) && wS <= (vertivalDistance-300)) {
                clearClass('#mouse-trap','step-ipad-2');
            }else if (wS > (vertivalDistance-300) && wS <= (vertivalDistance-200)) {
                clearClass('#mouse-trap','step-ipad-3');
            }
        }else if (screenWidth > 767){//vertivalDistance ~= 3300
            if (wS <= (vertivalDistance-500)) {
                clearClass('#mouse-trap','');
            }else if (wS > (vertivalDistance-500) && wS <= (vertivalDistance-400)) {
                clearClass('#mouse-trap','step-ipad-1');
            }else if (wS > (vertivalDistance-400) && wS <= (vertivalDistance-300)) {
                clearClass('#mouse-trap','step-ipad-2');
            }
        }else if (screenWidth > 520){//vertivalDistance ~= 3800
            if (wS <= (vertivalDistance-500)) {
                clearClass('#mouse-trap','');
            }else if (wS > (vertivalDistance-500) && wS <= (vertivalDistance-400)) {
                clearClass('#mouse-trap','step-ipad-sm-1');
            }else if (wS > (vertivalDistance-400) && wS <= (vertivalDistance-300)) {
                clearClass('#mouse-trap','step-ipad-sm-2');
            }
        }else if (screenWidth > 480){//vertivalDistance ~= 4100
            if (wS <= (vertivalDistance-500)) {
                clearClass('#mouse-trap','');
            }else if (wS > (vertivalDistance-500) && wS <= (vertivalDistance-400)) {
                clearClass('#mouse-trap','step-mobile-m-1');
            }else if (wS > (vertivalDistance-400) && wS <= (vertivalDistance-300)) {
                clearClass('#mouse-trap','step-mobile-m-2');
            }
        }else{//vertivalDistance ~= 4200
            if (wS <= (vertivalDistance-500)) {
                clearClass('#mouse-trap','');
            }else if (wS > (vertivalDistance-500) && wS <= (vertivalDistance-400)) {
                clearClass('#mouse-trap','step-mobile-1');
            }else if (wS > (vertivalDistance-400) && wS <= (vertivalDistance-300)) {
                clearClass('#mouse-trap','step-mobile-2');
            }
        }
    });
}

function clearClass(element,myClass){
    $(element).removeClass();
    $(element).addClass(myClass);
}