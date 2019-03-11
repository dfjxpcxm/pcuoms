if (!String.prototype.trim) {
    String.prototype.trim = function () {
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    };
}
var $style = {
    base:'oil',
    gas:{
        color:'#38b8ff'
    },
    oil:{
        color:'#59ebe8'
    },
    setTheme:function(g){
        if(g!='gas') return;
        var c = $style[g].color;
        $style.bar.xAxis.axisLine.lineStyle.color = c;
        $style.bar.yAxis.axisLine.lineStyle.color = c;
    },
    bar:{
        grid:{
            top:'10%',
            bottom:'5%',
        },
        legend: {  //图例组件，颜色和名字
            show:true,
            itemGap: 12, //图例每项之间的间隔
            itemWidth: 8,
            itemHeight: 8,
            textStyle: {
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 8,
            }
        },
        tooltip:{},
        xAxis: {
            type: 'category',
            axisLine: {
                lineStyle: {
                    color: '#38b8ff'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#ffffff'
                }
            }
        },
        yAxis: {
            splitLine: {
                show: false
            },
            type: 'value',
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#38b8ff'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#ffffff'
                }
            }
        },
    }
};
var $chart = {
    xtime:function(d){
        for(var i = 0, l = d.length; i<l; i++){
            var a = d[i].split('-');
            if(a.length == 3)
                d[i] = a[1] + '-' + a[2] + '\n' + a[0];
        }
        return d;
    },
    init:function(id, option, style){
        style = style || {};
        if(typeof(style)=="string"){
            style = $style[style];
            if(style == null)
                style = {};
        }
        option = $.extend(true, style, option);
        var myChart = echarts.init($(id)[0]);
        myChart.setOption(option);
        return myChart;
    },
    ico:function(color, type){
        return '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:'+color+';"></span>';
    }
};

function gourl(url){
    location.href = url;
}
function gourl1(url){
    location.href = url;
}
function getdata(url, o){
    url = __host + '/static/data' + url;
    if(typeof(o) == 'function'){
        o = {success:o};
    }
    o = $.extend({
        url:url,
        method:'get',
        error:function(jq,state){
            console.log(url+' :ajax error,'+jq.status);
        }
    }, o);
    $.ajax(o);
}

var RollingPlay = {
    ts : 30,
    uri:['market/index','statecn/gasIndex','statecn/opinions','statecn/gasIndex','statecn/gasSecurity','pattern/gasIndex'],
    rollPlayInit:function(id){
        this.timespan = this.ts;
        this.playing = "false" === localStorage.RollingPlay_ply ? false : true;
        this.pan = $('#'+id);
        this.num = this.pan.find(".rollingTime");
        this.numbx = this.pan.find(".rollingPlay");
        this.btnbx = this.pan.find(".rollingStop");
        this.pan.click(function(){
            RollingPlay.playing = !RollingPlay.playing;
            localStorage.RollingPlay_ply = RollingPlay.playing;
            if(!RollingPlay.playing){
                RollingPlay.numbx.hide();
                RollingPlay.btnbx.show();
            }else{
                RollingPlay.btnbx.hide();
                RollingPlay.numbx.show();
                RollingPlay.timespan = RollingPlay.ts;
                RollingPlay.autoRolling();
            }
        });
        if(this.playing)
            this.autoRolling();
        else{
            this.numbx.hide();
            this.btnbx.show();
        }
    },
    autoRolling:function(){
        if(RollingPlay.playing){
            RollingPlay.doRolling();
            setTimeout(RollingPlay.autoRolling, 1000);
        }
    },
    doRolling:function(){
        this.timespan--;
        this.num.html(this.timespan);
        if(this.timespan == 0){
            this.goNext();
            this.timespan = this.ts;
        }
    },
    goNext:function(){
        var u = location.pathname.split('/'), l = u.length - 1, curr = u[l-1]+'/'+u[l], uri = [], b = false;
        $(".barbtn").each(function(i){
            var s = $(this).attr('onclick').split("'");
            if(!s || s.length !=3) return true;
            uri.push(s);
        });
        for(var i = 0; i<uri.length; i++){
            var s = uri[i];
            if(s[1].indexOf('/')>-1){
                if(s[1].indexOf('../') == 0)
                    b = s[1] == '../' + curr;
                else
                    b = s[1] == curr;
            }else{
                b = s[1] == u[l];
            }
            if(b){
                if(i <= uri.length - 2 && curr !='pattern/gasStore'){
                    $(".barbtn").eq(i+1).click();
                    break;
                }else{
                    var x = this.uri.indexOf(curr);
                    var nextu = x<=this.uri.length - 2 ? this.uri[x+1] : this.uri[0];
                    gourl(__host + '/' + nextu);
                }
            }
        }
    }
};