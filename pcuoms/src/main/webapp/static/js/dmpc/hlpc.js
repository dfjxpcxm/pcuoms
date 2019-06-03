$(document).ready(function(){
	chart1();
	chart2();
	chart3('chart3',0.4533);
	chart3('chart4',0.6922);
});

$('#btnlogin').click(function(){
    var targetUrl  = "${G.host}/mainframe/goPcmssLogin";
    window.location.href = targetUrl;
})
function chart1(){
	option = {
		    tooltip: {
		    	trigger: 'item',
		        formatter: function(v){
		        	//alert(JSON.stringify(v));
		        	var st = v.name+' : '+v.value;
		        	return st;
		        }//"{b}: {c}"
		    },
		    xAxis: {
		        data: ["农业", "工业", "服务业"],
		        axisTick: {
		            show: true
		        },
		        axisLine: {
		            show: true
		        },
		        axisLabel: {
		            show: true,
		            margin:15,
		            textStyle: {
		                color: '#070000',
		                fontSize:14
		            }
		        }
		    },
		    yAxis: {
		        splitLine: {
		            show: false
		        },
		        axisTick: {
		            show: true
		        },
		        axisLine: {
		            show: true
		        },
		        axisLabel: {
		            show: true,
		            textStyle: {
		                color: '#070000',
		                fontSize:14
		            }
		        }
		    },
		    series: [{
		        name: '年报上报率3',
		        type: 'pictorialBar',
		        symbolSize: [40, 22],
		        symbolOffset: [0, -10],
		        z: 12,
		        itemStyle: {
		            normal: {
		                color: '#14b1eb'
		            }
		        },
		        data: [{
		            value: 100,
		            symbolPosition: 'end'
		        }, {
		            value: 50,
		            symbolPosition: 'end'
		        }, {
		            value: 20,
		            symbolPosition: 'end'
		        }]
		    }, {
		        name: '年报上报率2',
		        type: 'pictorialBar',
		        symbolSize: [40, 22],
		        symbolOffset: [0, 10],
		        z: 12,
		        itemStyle: {
		            normal: {
		                color: '#14b1eb'
		            }
		        },
		        data: [100, 50, 20]
		    }, {
		        type: 'bar',
		        itemStyle: {
		            normal: {
		                color: '#14b1eb',
		                opacity: 0.7
		            }
		        },
		        //silent: true,
		        barWidth: 40,
		        barGap: '-100%', // Make series be overlap
		        data: [100, 50, 20]
		    }]
		};
	var myChart = echarts.init($('#chart1')[0]);
    myChart.setOption(option);
}
function chart2(){
	var dataStyle = {
		    normal: {
		        label: {
		            show: true,
		            color: '#0c0000',
		            fontSize: 14,
		        },
		        labelLine: {
		            //smooth: 0.2,
		            length: 20,
		            length2: 20
		        },
		    }
		};

		var labelShow = {
		    show: true,
		    color: '#0c0000',
		    fontSize: 15,
		    formatter: [
		        '{d| {d}% }',
		        '{b| {b} }'
		    ].join('\n'),
		    rich: {
		        d: {
		            fontSize: 14,
		            color: '#0c0000'
		        },
		        b: {
		            fontSize: 14,
		            color: '#0c0000'
		        },
		    }
		};

		var placeHolderStyle = {
		    normal: {
		        color: 'rgba(0,0,0,0)',
		        label: {
		            show: false
		        },
		        labelLine: {
		            show: false
		        }
		    },
		    emphasis: {
		        color: 'rgba(0,0,0,0)'
		    }
		};
		option = {
		    title: {
		        text: '',
		        textStyle: {
		            fontSize: 25,
		            fontWeight: 'normal',
		            color: '#fff',
		        },
		        x: 'center'
		    },
		    color: ['#2078d1', '#8a00ec', '#ff00f3', '#fb0065', '#ff941b'],
		    tooltip: {
		        show: true,
		        formatter: "{b} <br/> {c} ({d}%)"
		    },
		    angleAxis: {
		        type: 'category',
		        z: 10,
		        axisLine: {
		            color: '#0c0000',
		            lineStyle: {
		                width: 1,
		                color: '#0c0000',
		            }
		        },
		    },
		    radiusAxis: {
		        axisTick: {
		            show: false
		        },
		        axisLabel: {
		            show: false,
		            color: '#0c0000'
		        },
		        axisLine: {
		            show: false,
		            color: '#0c0000',
		            lineStyle: {
		                color: '#0c0000',
		            }
		        },
		        splitLine: {
		            color: '#000',
		            lineStyle: {
		                type: 'dotted',
		                color: 'rgba(170,170,170,.5)',
		            }
		        },

		    },
		    polar: {
		        center: ['50%', '47%'],
		        radius: '75%',
		    },
		    legend: {
		        bottom: '1%',
		        textStyle: {
		            color: '#0c0000',
		        },
		        itemGap: 12,
		        data: ['一类烟', '二类烟', '三类烟', '四类烟', '五类烟']
		    },
		    series: [{
		            name: 'Line 1',
		            type: 'pie',
		            clockWise: false,
		            radius: ['59%', '61%'],
		            center: ['50%', '47%'],
		            itemStyle: dataStyle,
		            hoverAnimation: false,
		            data: [{
		                    value: 260,
		                    name: '',
		                    itemStyle: placeHolderStyle
		                },
		                {
		                    value: 100,
		                    name: '一类烟',
		                    label: labelShow,
		                },
		                {
		                    value: 0,
		                    name: '',
		                    itemStyle: placeHolderStyle
		                }

		            ]
		        },
		        {
		            name: 'Line 2',
		            type: 'pie',
		            clockWise: false,
		            radius: ['50%', '63%'],
		            center: ['50%', '47%'],
		            itemStyle: dataStyle,
		            hoverAnimation: false,

		            data: [{
		                    value: 190,
		                    name: '',
		                    itemStyle: placeHolderStyle
		                },
		                {
		                    value: 70,
		                    name: '二类烟',
		                    label: labelShow,
		                },
		                {
		                    value: 100,
		                    name: '',
		                    itemStyle: placeHolderStyle
		                }
		            ]
		        },
		        {
		            name: 'Line 3',
		            type: 'pie',
		            clockWise: false,
		            hoverAnimation: false,
		            radius: ['45%', '50%'],
		            center: ['50%', '47%'],
		            itemStyle: dataStyle,

		            data: [{
		                    value: 130,
		                    name: '',
		                    itemStyle: placeHolderStyle
		                },
		                {
		                    value: 60,
		                    name: '三类烟',
		                    label: labelShow,
		                },
		                {
		                    value: 170,
		                    name: '',
		                    itemStyle: placeHolderStyle
		                }
		            ]
		        },
		        {
		            name: 'Line 4',
		            type: 'pie',
		            clockWise: false,
		            hoverAnimation: false,
		            radius: ['58%','68%'],
		            center: ['50%', '47%'],
		            itemStyle: dataStyle,

		            data: [{
		                    value: 40,
		                    name: '',
		                    itemStyle: placeHolderStyle
		                },
		                {
		                    value: 90,
		                    name: '四类烟',
		                    label: labelShow,
		                },
		                {
		                    value: 230,
		                    name: '',
		                    itemStyle: placeHolderStyle
		                }
		            ]
		        },
		        {
		            name: 'Line 5',
		            type: 'pie',
		            clockWise: false,
		            hoverAnimation: false,
		            radius: ['53%','70%'],
		            center: ['50%', '47%'],
		            itemStyle: dataStyle,

		            data: [{
		                    value: 0,
		                    name: '',
		                    itemStyle: placeHolderStyle
		                },
		                {
		                    value: 40,
		                    name: '五类烟',
		                    label: labelShow,
		                },
		                {
		                    value: 320,
		                    name: '',
		                    itemStyle: placeHolderStyle
		                }
		            ]
		        },
		        {
		            type: 'bar',
		            center: ['50%', '47%'],
		            data: [0],
		            coordinateSystem: 'polar',
		            name: '06a',
		            stack: 'a'
		        },

		    ]
		};
	var myChart = echarts.init($('#chart2')[0]);
    myChart.setOption(option);
}
function chart3(id,value){
	var data = []
	data.push(value)
	data.push(value)
	data.push(value)
	data.push(value)
	data.push(value)
	var option = {
	    title: {
	        text: '',
	        textStyle: {
	            fontWeight: 'normal',
	            fontSize: 25,
	            color: 'rgb(97, 142, 205)'
	        }
	    },
	    series: [{
	        type: 'liquidFill',
	        radius: '80%',
	        data: data,
	        backgroundStyle: {
	            borderWidth: 5,
	            borderColor: 'rgb(255,0,255,0.9)',
	            color: 'rgb(255,0,255,0.01)'
	        },
	        label: {
	            normal: {
	                formatter: (value * 100).toFixed(2) + '%',
	                textStyle: {
	                    fontSize: 50
	                }
	            }
	        }
	    }]
	}
	var myChart = echarts.init($('#'+id)[0]);
    myChart.setOption(option);
}


