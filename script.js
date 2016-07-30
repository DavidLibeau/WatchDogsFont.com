$(function () {
    $(window).scroll(updateSVG_V);
    $(window).resize(updateSVG_V);
    updateSVG_V();

    $("header>h2").html("_");
    var headerh2 = "Be ready to be <strong>hacked</strong>";
    var i = 0;
    var headerh2Interval = setInterval(function () {
        $("header>h2").html(headerh2.substr(0, i) + "_");
        i++;
        if (i == 16) {
            setTimeout(function () { $("header>h2").html(headerh2); }, 1000);
            clearInterval(headerh2Interval);
        }
    }, 150);

    $("#comparator>div>span").draggable({
        containment: "parent",
        drag: function (event, ui) {
            //console.log(ui.position.left);
            $("#comparator>div>span").css("background-position",-ui.position.left+"px "+-ui.position.top+"px");
            $("#comparator>div>span").css({
                "top": ui.position.top,
                "left": ui.position.left
            });
        },
        axis: "x"
    });

});

function updateSVG_V(){
    var svgheight = 0.30 * $(window).height();
    var svgcenterheight = svgheight-$(window).scrollTop()/2;
    $("#svg_v").attr({
        "viewBox": "0 0 "+ $(window).width() + " "+svgheight,
        "height":svgheight+"px"
    });
    $("#svg_v polygon").attr("points", $(window).width() + ","+svgheight+" 0,"+svgheight+" 0,0 "+$(window).width()/2+","+svgcenterheight+" "+$(window).width() + ",0");
}