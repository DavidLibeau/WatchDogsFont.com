$(function () {
    $(window).scroll(updateSVG_V);
    $(window).resize(updateSVG_V);
    updateSVG_V();

    $("header>h2").html("_");
    var headerh2 = "Be ready to be <strong>hacked</strong>";
    var i = 0;
    var headerh2Interval = setInterval(function () {
        if (i == 14) {
            $("header>h2").html(headerh2.substr(0, i));
            setTimeout(function () { $("header>h2").html(headerh2.substr(0, i) + "."); }, 500);
            setTimeout(function () { $("header>h2").html(headerh2.substr(0, i) + ".."); }, 1200);
            setTimeout(function () { $("header>h2").html(headerh2.substr(0, i) + "..."); }, 1800);
            setTimeout(function () { $("header>h2").html(headerh2); }, 2200);
            clearInterval(headerh2Interval);
        } else {
            $("header>h2").html(headerh2.substr(0, i) + "_");
            i++;
        }
    }, 150);

    $("#comparator>div>span").draggable({
        containment: "parent",
        drag: function (event, ui) {
            //console.log(ui.position.left);
            $("#comparator>div>span").css("background-position", -ui.position.left + "px " + -ui.position.top + "px");
            $("#comparator>div>span").css({
                "top": ui.position.top,
                "left": ui.position.left
            });
            $("article:nth-of-type(3)>header>span").html(parseInt(ui.position.left / ($("#comparator>div").width()-$("#comparator>div>span").width())* 100)+"%");
        },
        axis: "x"
    });

});

function updateSVG_V(){
    var svgheight = 0.30 * $(window).height();
    var svgcenterheight = svgheight-$(window).scrollTop()/2;
    var svgtopheight = $(window).scrollTop() / 2 ;
    if(svgtopheight>svgheight){
        svgtopheight = svgheight;
    }
    console.log(svgtopheight+" "+svgheight);
    $("#svg_v").attr({
        "viewBox": "0 0 "+ $(window).width() + " "+svgheight,
        "height":svgheight+"px"
    });
    $("#svg_v polygon").attr("points", $(window).width() + ","+svgheight+" 0,"+svgheight+" 0,"+svgtopheight+" "+$(window).width()/2+","+svgcenterheight+" "+$(window).width() + ","+svgtopheight);
}