$.ui.dialog.prototype._focusTabbable = function(){};


$(function () {
    console.log("    ____  ___________  ______ ____________\r\n   \/ __ \\\/ ____\/\/ __ \\\/ ____\/\/ ___\/\/ ____\/\\\r\n  \/ \/ \/ \/ __\/ \/\/ \/ \/ \/\\__ \\ \/ __\/ \/ \/\\ ___\\\/\r\n \/ \/_\/ \/ \/___\/\/ \/_\/ \/___\/ \/\/ \/___\/ \/_\/__\r\n\/_____\/_____\/\/_____\/\/____\/\/_____\/\\_____\/\\\r\n\\ _____\\\\____\\\\\\____\\\\____\\\\_____\\_\\____\\\/\r\n ");

    
    /* Parallax mousemove */
    $(window).mousemove(function(evt){
        /* #headervideo */
        $("#headervideo>div>span").css("transform","translate("+($(window).width()/2-evt.pageX)/40+"px, "+($(window).height()/2-evt.pageY)/40+"px)");
        $("#headervideo>div>img").css("transform","translate("+($(window).width()/2-evt.pageX)/80+"px, "+($(window).height()/2-evt.pageY)/80+"px)");
        /* screamer_vr */
        $("#screamer_vr").css("transform","translate("+($(window).width()/2-evt.pageX)/80+"px, "+($(window).height()/2-evt.pageY)/80+"px)");
        /* Scan bg */
        $("article:nth-of-type(3)>header").css("background-position",50+($(window).width()/2-evt.pageX)/500+"% "+($(window).height()/2-(evt.pageY-$("article:nth-of-type(3)>header").offset().top))/500+"%");
        /* Download */
        $("#download+p>img").css("transform","translate("+($(window).width()/2-evt.pageX)/80+"px, "+($(window).height()/2-evt.pageY)/80+"px)");
        /* Share */
        $("article:nth-of-type(7)").css("background-position",50+($(window).width()/2-evt.pageX)/500+"% "+($(window).height()/2-(evt.pageY-$("article:nth-of-type(3)>header").offset().top))/500+"%");
    });
    
    
    
    
    //SVG
    $(window).scroll(updateSVG_V);
    $(window).resize(updateSVG_V);
    updateSVG_V();

    //header>h2 animation
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
    
    //#headervideo
    $(window).scroll(function () {
        $("#headervideo>div>span:nth-child(1)").css("bottom",$(window).scrollTop()*0.8);
        $("#headervideo>div>span:nth-child(2)").css("bottom",$(window).scrollTop()*0.5);
        $("#headervideo>div>span:nth-child(3)").css("bottom",$(window).scrollTop());
        $("#headervideo>div>span:nth-child(4)").css("bottom",$(window).scrollTop()*0.2);
    });
    
    //Console
    var consoletxt="login as: pi\r\npi@192.168.1.54's password:\r\n\r\nThe programs included with the Debian GNU/Linux system are free software;\r\nthe exact distribution terms for each program are described in the\r\nindividual files in /usr/share/doc/*/copyright.\r\n\r\nDebian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent\r\npermitted by applicable law.\r\nLast login: Mon Oct 10 23:17:07 2016\r\n\r\npi@raspberrypi:~ $ /var/dedsec/start.sh\r\n    ____  ___________  ______ ____________ \r\n   / __ \\/ ____// __ \\/ ____// ___// ____/\\ \r\n  / / / / __/ // / / /\\__ \\ / __/ / /\\ ___\\/ \r\n / /_/ / /___// /_/ /___/ // /___/ /_/__ \r\n/_____/_____//_____//____//_____/\\_____/\\ \r\n\\ _____\\\\____\\\\\\____\\\\____\\\\_____\\_\\____\\/ \r\n \r\nHello follower.\r\n-------------------------------------------\r\n>help\r\nError \"help\" command: lolnope\r\n>_";
    var consoleAnimated=false;
    $(window).scroll(function () {
        if ($("article:nth-of-type(1) input").is(':in-viewport') && !consoleAnimated) {
            consoleAnimated = true;
            var w=0;
            var consoleInterval=setInterval(function(){
                $("#console").html($("#console").html()+consoletxt.split("\r\n")[w]+"\r\n");
                if(consoletxt.split("\r\n")[w+1]==undefined){
                    clearInterval(consoleInterval);
                }else{
                    w++;
                }
            },100);
        }
    });
    //TestFontForm
    $("#testfontform").submit(function(evt){
        evt.preventDefault();
        return false;
    });
    
    
    //Modal VR
    var modalVRAnimated = false;
    var elemBeforeAnimVR = $("article:nth-of-type(2)>div>*").size();
    $(window).scroll(function () {
        if ($("article:nth-of-type(2) #chatter_teeth_vr").is(':in-viewport') && !modalVRAnimated) {
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
                            window.open("vr","_blank");
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

    //Comparator
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

    //Reuses smooth show
    $("article:nth-of-type(4)>div").css({
        "opacity":0,
        "margin-top":"50px",
        "margin-bottom":"-50px"
    });
    $(window).scroll(function () {
        if ($("article:nth-of-type(4)>div").is(':in-viewport')) {
            setTimeout(function(){ $("article:nth-of-type(4)>div").animate({
                    "opacity":1,
                    "margin-top":"0px",
                    "margin-bottom":"0px"
                },1000);
            },200);
        }
    });
    
    //Download btn
    $("#download").click(function(){    
        $("<div title=\"Download the font\"><p>Are you OK with the font's licence condition describe here?<br/><br/>The font is published under the <a rel=\"license\" href=\"http://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">Creative commons Attribution (CC-BY) licence</a>. So YOU CAN use the font for all your creations (even for commercial creations) only if you put the link \"<strong>http://watchdogsfont.com</strong>\" OR \"<strong>http://www.dafont.com/hacked.font</strong>\" OR the font creator's name \"<strong>David Libeau</strong>\" in your credits (YouTube video description, website About page...).</p></div>").dialog({
                        dialogClass: "retroHackDialog fakedialog",
                        resizable: false,
                        draggable: true,
                        height: "auto",
                        width: 800,
                        modal: true,
                        buttons: {
                            "NO": function () {
                                window.open("http://www.dafont.com/hacked.font","_blank");
                                $(this).dialog("destroy");
                            },
                            "YES": function () {
                                window.open("http://www.dafont.com/hacked.font","_blank");
                                $(this).dialog("destroy");
                            },
                        },
                        close: function (event, ui) {
                            $(this).dialog("destroy");
                        }
                    });
        
            //Fake dialog
            $(".fakedialog .ui-dialog-buttonpane button:first-child").hover(function(evt){
                evt.preventDefault();
                $(this).css({
                    "cursor":"none",
                    "border-color":"#c8c8c8"
                });
                $(".fakedialog .ui-dialog-buttonpane button:last-child").css("border-color","white");
                $(this).append("<img id=\"fakecursor\" style=\" position:fixed; top:0; left:0; z-index:99;\" src=\"fuck_cursor.png\"></div>");
                $(window).mousemove(function(evt){
                    $("#fakecursor").css({
                        top:evt.pageY-$(window).scrollTop(),
                        left:evt.pageX+$(".fakedialog .ui-dialog-buttonpane button:first-child").outerWidth()
                    });
                });
            },function(){
                $(".fakedialog .ui-dialog-buttonpane button:last-child").css("border-color","");
                $("#fakecursor").remove();
            });
        
        });
    
    //Footer btn
    $("#playWatchDogs").hover(function(){
        $(this).html("Play Watch Dogs");
    },function(){
        $(this).html("Join Dedsec");
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