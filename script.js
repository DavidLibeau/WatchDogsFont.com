$.ui.dialog.prototype._focusTabbable = function(){};


$(function () {
    console.log("    ____  ___________  ______ ____________\r\n   \/ __ \\\/ ____\/\/ __ \\\/ ____\/\/ ___\/\/ ____\/\\\r\n  \/ \/ \/ \/ __\/ \/\/ \/ \/ \/\\__ \\ \/ __\/ \/ \/\\ ___\\\/\r\n \/ \/_\/ \/ \/___\/\/ \/_\/ \/___\/ \/\/ \/___\/ \/_\/__\r\n\/_____\/_____\/\/_____\/\/____\/\/_____\/\\_____\/\\\r\n\\ _____\\\\____\\\\\\____\\\\____\\\\_____\\_\\____\\\/\r\n ");

    // SVG
    $(window).scroll(updateSVG_V);
    $(window).resize(updateSVG_V);
    updateSVG_V();

    // header>h2 animation
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

    // Modal VR
    var modalVRAnimated = false;
    var elemBeforeAnimVR = $("article:nth-of-type(2)>div>*").size();
    console.log(elemBeforeAnimVR);
    $(window).scroll(function () {
        if ($("article:nth-of-type(2)>div").is(':in-viewport') && !modalVRAnimated) {
            modalVRAnimated = true;
            var j = 1;
            var modalInterval = setInterval(function () {
                if (j == 80) {
                    clearInterval(modalInterval);
                }

                $("<div title='Launch \"Wahoo\" VR experience'><p>Are you sure to be not sure to be sure to want to enter in the deep web?</p></div>").dialog({
                    appendTo: "article:nth-of-type(2)>div",
                    dialogClass: "retroHackDialog",
                    resizable: false,
                    draggable: false,
                    height: "auto",
                    width: 500,
                    modal: false,
                    buttons: {
                        "The red pill": function () {
                            console.log("VR");
                        },
                        Cancel: function () {
                            $(this).dialog("close");
                        },
                        "Not sure": function () {
                            $(this).dialog("close");
                        }
                    },
                    close: function (event, ui) {
                        $(this).dialog("destroy");
                    }
                });
                if (j <= 40) {
                    $("article:nth-of-type(2)>div>.ui-dialog:nth-of-type(" + j + ")").css("margin-bottom", -10 * j + "px");
                } else {
                    if (j == 41) {
                        $("article:nth-of-type(2)>div>.ui-dialog:nth-of-type(" + j + ")").css({
                            "margin-bottom": -10 * (j - 40) + "px",
                            "margin-left": "-10px"
                        });
                    } else {
                        $("article:nth-of-type(2)>div>.ui-dialog:nth-of-type(" + j + ")").css("margin-bottom", -10 * (j - 40) + "px");
                    }
                }

                j++;
            }, 100);
        }
    });

    // Comparator
    $("#comparator>div>span").draggable({
        containment: "parent",
        drag: function (event, ui) {
            //console.log(ui.position.left);
            $("#comparator>div>span").css("background-position", -ui.position.left + "px " + -ui.position.top + "px");
            $("#comparator>div>span").css({
                "top": ui.position.top,
                "left": ui.position.left
            });
            $("article:nth-of-type(3)>header>span").html(parseInt(ui.position.left / ($("#comparator>div").width() - $("#comparator>div>span").width()) * 100) + "%");
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
    //console.log(svgtopheight+" "+svgheight);
    $("#svg_v").attr({
        "viewBox": "0 0 "+ $(window).width() + " "+svgheight,
        "height":svgheight+"px"
    });
    $("#svg_v polygon").attr("points", $(window).width() + ","+svgheight+" 0,"+svgheight+" 0,"+svgtopheight+" "+$(window).width()/2+","+svgcenterheight+" "+$(window).width() + ","+svgtopheight);
}