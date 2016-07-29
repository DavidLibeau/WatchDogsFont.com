$(function () {
    $(window).scroll(updateSVG_V);
    $(window).resize(updateSVG_V);
    updateSVG_V();

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