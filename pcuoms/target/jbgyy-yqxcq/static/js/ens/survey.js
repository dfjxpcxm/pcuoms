$(document).ready(function(){
	getdata('/statecn/trade/chart2.json',chart2);
});



function chart2(data){
	var da = [];
    for (var i = 1; i <data.content.xAxis.length; i++) {
    	var tmp ={};
    	tmp.value = data.content.data[0][i];
    	tmp.name = data.content.xAxis[i];
    	da.push(tmp);
    }
	option = {
		    tooltip: {
		        trigger: 'item',
		        formatter: "{a}<br/>{b}: {c} 人<br/>占比： {d}%"
		    },
		    color:["#ff9b00","#ffe800","#3bb106","#00ceff","#0016ff","#e500ff","#ff1900","#f48b4d","#f4fd5d","#6afc7e","#79e5f6","#5577f4","#f442c6","#f4564a"],
		    legend: {
		        orient: 'vertical',
		        top: '10%',
		        right: '2%',
		        itemHeight:12,
		        itemWidth:24,
		        data:data.content.xAxis,
		        textStyle: {
		            color: "#fff",
		            fontWeight:'normal',
		            fontFamily:'宋体',
		            fontSize: 14
		        }
		    },
		    series: [

		        {
		            name:'部门人员数量',
		            type:'pie',
		            radius: ['45%', '70%'],
		            center:["30%","50%"],
		            label: {
		                normal: {
		                    show: true,
		                    //position: 'inner',
		                    formatter: "{b}",
		                    textStyle: {
		                        //color: '#fff',
		                        fontWeight: 'normal',
		                        fontSize: 14
		                    }
		                }
		            },
		            labelLine: {
		                normal: {
		                    show: true,
		                   length: 5,
		                    length2: 8
		                }
		            },
		            data:da
		        }
		    ]
		};
    var myChart = echarts.init($('#chart2')[0]);
    myChart.setOption(option);
}



function cv3d(d){
    return d.map(function(v,i){
        return [i, 0, v];
    });
}