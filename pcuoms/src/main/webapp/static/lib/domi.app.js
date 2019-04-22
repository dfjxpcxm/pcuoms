function init_top(){
    $(window).scroll(function() {
        if ($(window).scrollTop() > _h - 200) {
            $(".headerpan").addClass("active");
        } else {
            $(".headerpan").removeClass("active");
        }
    });
}
$.fn.extend({
    countTo:function(opt){
        $(this).each(function(){
            var $t = $(this), s = $t.text(), i = s.indexOf('.'), v = i>-1?parseFloat(s):parseInt(s), ws = i>-1? s.length - i - 1 : 0;
            var o = $.extend({from:0,to:v,step:1,sec:1000,ts:100,ws:ws},opt);
            o.step = (o.to - o.from)/(o.sec / o.ts);
            if(i==-1){ 
                o.step = parseInt(o.step);
            }else{
                o.step = parseFloat(o.step.toFixed(ws));
            }
            if(o.step<1) o.step = 1;
            $t.opt = o;
            $t.curr = $t.opt.from;
            function up(){
                $t.curr += $t.opt.step;
                if($t.curr>$t.opt.to){
                    $t.curr = $t.opt.to;
                    $t.text($t.curr);
                }else{
                    if($t.opt.ws>0) 
                        $t.curr = parseFloat($t.curr.toFixed($t.opt.ws));
                    $t.text($t.curr);
                    setTimeout(up, $t.opt.ts);
                }
            }
            up();
        });
    }
})


var dui = {};
function dui_parse(root) {
    $("[dui]", root).each(function(i) {
        var $ts = $(this), d = $ts.data('isdone');
        //if(d) return true;$ts.data('isdone', true);
        var controls = $ts.attr("dui");
        var ctrlArr = controls.split(' ');
        for (var i = 0; i < ctrlArr.length; i++) {
            var method = ctrlArr[i];
            var f = dui[method];
            f && f($ts);
        }
    });
}
$(function() {
    dui_parse(document)
    $.fn.extend({
        dui:function(){
            dui_parse(this)
        }
    })
});
dui.navtip = function (o) {
    //o.find(".msg").width(o.find("img").width());
    o.hover(function () {
        $(this).find(".msg").stop().animate({ height: "40px" }, 400);
    }, function () {
        $(this).find(".msg").stop().animate({ height: "0px" }, 400);
    })
}