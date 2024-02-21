//Global variables
var element;

//Detect onclick event
if (window.matchMedia("(max-width: 920px)").matches === false) {
    $(".ham").on("click", function(){
        $(".side_menu").css("right", "0px");
        $(".overlay").css("opacity","1");
        $(".overlay").css("z-index","99");
    });

    $(".close").on("click", function(){
        $(".contact").css("top") >= "10%" ? $(".contact").hide().css("top","-100%").fadeOut('100') : $(".side_menu").css("right", "-500px");
        $(".overlay").css("opacity","0");
        $(".overlay").css("z-index","-1");
    });

    $(".overlay").on("click", function(){
        $(".contact").css("top") >= "10%" ? $(".contact").hide().css("top","-100%").fadeOut('100') : $(".side_menu").css("right", "-500px");
        $(".overlay").css("opacity","0");
        $(".overlay").css("z-index","-1");
    });
} else {
    $(".ham").on("click", function(){
        $(".side_menu").css("right", "0px");
        $(".overlay").css("opacity","1");
        $(".overlay").css("z-index","9");
    });
    
    $(".close").on("click", function(){
        $(".contact").css("top") >= "10%" ? $(".contact").hide().css("top","-100%").fadeOut('100') : $(".side_menu").css("right", "-120%");
        $(".overlay").css("opacity","0");
        $(".overlay").css("z-index","-1");
    });
    
    $(".overlay").on("click", function(){
        $(".contact").css("top") >= "10%" ? $(".contact").hide().css("top","-100%").fadeOut('100') : $(".side_menu").css("right", "-120%");
        $(".overlay").css("opacity","0");
        $(".overlay").css("z-index","-1");
    });
}


//Scroller Nav
window.onscroll = function() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $("nav").addClass("fixed_nav");
    } else {
        $("nav").removeClass("fixed_nav");
    }
}


//DETECT ESC KEY PRESSED
document.onkeydown = function(evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
        isEscape = (evt.keyCode === 27);
    }
    if (isEscape) {
        if ($(".overlay").css("opacity") == "1"){
            $(".contact").css("top") >= "10%" ? $(".contact").hide().css("top","-100%").fadeOut('100') : $(".side_menu").css("right", "-120%");
            $(".overlay").css("opacity","0");
            $(".overlay").css("z-index","-1");
        }
    }
};



//Dropdown
$(".dropdown").click(function(){
    if ($(this).children("aside").is(":hidden")){
        $(this).children("aside").show("slow");
        $(this).children("a").css("color","var(--white)");
    } else {
        $(this).children("aside").hide("slow");
        $(this).children("a").css("color","var(--lite)");
    }
});

//owl