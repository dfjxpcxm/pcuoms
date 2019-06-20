$(document).ready(function(){
	chart1();
	chart2();
//	chart3('chart3',0.4533,0.2345);
	chart3();
	chart4();
	chart5();
	chart6();
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
function chart3() {
	option = {
		title : {
			text: 'ECharts2 vs ECharts1',
			subtext: 'Chrome下测试数据'
		},
		tooltip : {
			trigger: 'axis'
		},
		legend: {
			data:[
				'ECharts1 - 2k数据','ECharts1 - 2w数据','ECharts1 - 20w数据','',
				'ECharts2 - 2k数据','ECharts2 - 2w数据','ECharts2 - 20w数据'
			]
		},
		toolbox: {
			show : true,
			feature : {
				mark : {show: true},
				dataView : {show: true, readOnly: false},
				magicType : {show: true, type: ['line', 'bar']},
				restore : {show: true},
				saveAsImage : {show: true}
			}
		},
		calculable : true,
		grid: {y: 70, y2:30, x2:20},
		xAxis : [
			{
				type : 'category',
				data : ['Line','Bar','Scatter','K','Map']
			},
			{
				type : 'category',
				axisLine: {show:false},
				axisTick: {show:false},
				axisLabel: {show:false},
				splitArea: {show:false},
				splitLine: {show:false},
				data : ['Line','Bar','Scatter','K','Map']
			}
		],
		yAxis : [
			{
				type : 'value',
				axisLabel:{formatter:'{value} ms'}
			}
		],
		series : [
			{
				name:'ECharts2 - 2k数据',
				type:'bar',
				itemStyle: {normal: {color:'rgba(193,35,43,1)', label:{show:true}}},
				data:[40,155,95,75, 0]
			},
			{
				name:'ECharts2 - 2w数据',
				type:'bar',
				itemStyle: {normal: {color:'rgba(181,195,52,1)', label:{show:true,textStyle:{color:'#27727B'}}}},
				data:[100,200,105,100,156]
			},
			{
				name:'ECharts2 - 20w数据',
				type:'bar',
				itemStyle: {normal: {color:'rgba(252,206,16,1)', label:{show:true,textStyle:{color:'#E87C25'}}}},
				data:[906,911,908,778,0]
			},
			{
				name:'ECharts1 - 2k数据',
				type:'bar',
				xAxisIndex:1,
				itemStyle: {normal: {color:'rgba(193,35,43,0.5)', label:{show:true,formatter:function(p){return p.value > 0 ? (p.value +'\n'):'';}}}},
				data:[96,224,164,124,0]
			},
			{
				name:'ECharts1 - 2w数据',
				type:'bar',
				xAxisIndex:1,
				itemStyle: {normal: {color:'rgba(181,195,52,0.5)', label:{show:true}}},
				data:[491,2035,389,955,347]
			},
			{
				name:'ECharts1 - 20w数据',
				type:'bar',
				xAxisIndex:1,
				itemStyle: {normal: {color:'rgba(252,206,16,0.5)', label:{show:true,formatter:function(p){return p.value > 0 ? (p.value +'+'):'';}}}},
				data:[3000,3000,2817,3000,0]
			}
		]
	};
	var myChart = echarts.init($('#chart3')[0]);
	myChart.setOption(option);
}

function chart4(){
		option = {
			    "tooltip": {},
			    "grid": {
			    	bottom:'9%',
			    	left:'5%',
			    	right:'6%',
			        "containLabel": true
			    },
			    "xAxis": [{
			        "type": "category",
			        "data": ["01月", "02月", "03月", "04月", "05月", "06月", "07月", "08月", "09月", "10月", "11月", "12月"],
			        "axisTick": {
			            "alignWithLabel": false
			        },
			        "nameTextStyle": {
			            "color": "#82b0ec"
			        },
			        "axisLine": {
			            "lineStyle": {
			                "color": "#82b0ec"
			            }
			        },
			        "axisLabel": {
			            "textStyle": {
			                "color": "#82b0ec"
			            }
			        }
			    }],
			    "yAxis": [{
			        "type": "value",
			        "axisLabel": {
			            "textStyle": {
			                "color": "#82b0ec"
			            },
			            "formatter": "{value}"
			        },
			        "splitLine": {
			        	show:false,
			            "lineStyle": {
			                "color": "#0c2c5a"
			            }
			        },
			        "axisLine": {
			            "lineStyle": {
			                "color": "#82b0ec"
			            }
			        }
			    }],
			    "series": [


			        {
			            // current data
			            type: 'pictorialBar',
			            symbol: 'rect',
			            symbolRepeat: 'fixed',
			            symbolMargin: '15%',
			            symbolClip: true,
			            symbolSize: [15,18],
			                label: {
			                    normal: {
			                        show: false,
			                        position: 'right',
			                        offset: [-60, 30],
			                        textStyle: {
			                            color: 'darkorange',
			                            fontSize: 18
			                        }
			                    }
			                },
			            data: [
			               {
			                  "value": 300,
			                  "itemStyle": {
			                    "normal": {
			                      "color": "#ff5715"
			                    }
			                  },
			                },
			                {
			                  "value": 1220,
			                  "itemStyle": {
			                    "normal": {
			                      "color": "#ff9915"
			                    }
			                  }
			                },
			                {
			                  "value": 660,
			                  "itemStyle": {
			                    "normal": {
			                      "color": "#ffdb15"
			                    }
			                  }
			                },
			                {
			                  "value": 1670,
			                  "itemStyle": {
			                    "normal": {
			                      "color": "#baff15"
			                    }
			                  }
			                },
			                {
			                  "value": 1670,
			                  "itemStyle": {
			                    "normal": {
			                      "color": "#46e621"
			                    }
			                  }
			                },
			                {
			                  "value": 1670,
			                  "itemStyle": {
			                    "normal": {
			                      "color": "#00df93"
			                    }
			                  }
			                },
			                {
			                  "value": 1670,
			                  "itemStyle": {
			                    "normal": {
			                      "color": "#00addf"
			                    }
			                  }
			                },
			                {
			                  "value": 1670,
			                  "itemStyle": {
			                    "normal": {
			                      "color": "#1a86ff"
			                    }
			                  }
			                },
			                {
			                  "value": 1670,
			                  "itemStyle": {
			                    "normal": {
			                      "color": "#8e49ff"
			                    }
			                  }
			                },
			                {
			                  "value": 1670,
			                  "itemStyle": {
			                    "normal": {
			                      "color": "#ff49f9"
			                    }
			                  }
			                },
			                {
				                  "value": 1270,
				                  "itemStyle": {
				                    "normal": {
				                      "color": "#ff49f9"
				                    }
				                  }
				                },
				                {
					                  "value": 1070,
					                  "itemStyle": {
					                    "normal": {
					                      "color": "#ff49f9"
					                    }
					                  }
					                }],
			            z: 99999999,
			            animationEasing: 'elasticOut',
			            animationDelay: function(dataIndex, params) {
			                return params.index * 30;
			            }
			        }]
			}
		var myChart = echarts.init($('#chart4')[0]);
	    myChart.setOption(option);
}

function chart5(){
	var ds = [];
	for (var i = 0; i < 7; i++) {
		var dat1 = [];
		var dat2 = [];
		for (var j = 0; j < 12; j++) {
			dat1.push(Math.random()*100);
			dat2.push(Math.random()*200);
		}
		var vt = {
				 grid: {
			            top: 80,
			            bottom: 80
			        },
			        tooltip: {
			            trigger: 'axis'
			        },
		        xAxis: {
		            data: ["1月", "2月", "3月", "4月", '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
		        },
		        yAxis: {
		            type: 'value',
		            name: '单位：亿元'
		        },
		        series: [{
		            name: '2012',
		            type: 'line',
		            smooth: true,
		            stack: '总量',
		            symbolSize: 4,
		            hoverAnimation: false,
		            lineStyle: {
		                normal: {
		                    color: '#2ec7c9',
		                },
		            },
		            areaStyle: {
		                normal: {
		                    color: '#2ec7c9',
		                    opacity: 0.3,
		                },
		            },
		            itemStyle: {
		                normal: {
		                    areaStyle: {
		                        type: 'default'
		                    }
		                }
		            },
		            data: dat1
		        }, {
		            name: '2012',
		            type: 'line',
		            smooth: true,
		            stack: '总量',
		            symbolSize: 4,
		            hoverAnimation: false,
		            lineStyle: {
		                normal: {
		                    color: '#b6a2de',
		                },
		            },
		            areaStyle: {
		                normal: {
		                    color: '#b6a2de',
		                    opacity: 0.3,
		                },
		            },
		            itemStyle: {
		                normal: {
		                    areaStyle: {
		                        type: 'default'
		                    }
		                }
		            },
		            data: dat2
		        }, ]
		    };
		ds.push(vt);
	}
	option = {
		    timeline: {
		        data: [
		            '2012', '2013', '2014', '2015', '2016', '2017', '2018'
		        ],
		        axisType: 'category',
		        show: true,
		        autoPlay: true,
		        playInterval: 3000
		    },
		    options: ds

		};
	var myChart = echarts.init($('#chart5')[0]);
    myChart.setOption(option);
}

function chart6(){
	option = {
		    color: ['#23cbe5'],
		    grid: {
		        left: '10%',
		        bottom: '14%',
		        top: '50',
		        width: '89%'
		    },
		    xAxis: {
		        type: 'category',
		        data: ['学前教育', '小学', '初中', '中职', '普通高中', '高等教育', '特殊教育'],
		        axisTick: {
		            alignWithLabel: true
		        },
		        axisLine: {
		            lineStyle: {
		                color: '#23cbe5'
		            }
		        },
		        axisLabel: {
		            formatter: '{value}',
		            textStyle: {
		                fontSize: 16
		            }
		        }
		    },
		    yAxis: {
		        type: 'value',
		        axisLine: {
		            lineStyle: {
		                color: '#23cbe5'
		            }
		        },
		        axisLabel: {
		            formatter: '{value}',
		            textStyle: {
		                fontSize: 16
		            }
		        }
		    },
		    series: [

		        {
		            name: '',
		            type: 'scatter',
		            data: [
		                ["学前教育", 67],
		                ['小学', 151],
		                ['初中', 59],
		                ['中职', 70],
		                ['普通高中', 102],
		                ['高等教育', 10],
		                ['特殊教育', 2]
		            ],
		            symbolSize: function(data) {
		                return Math.sqrt(data[1]) / 0.15;
		            },
		            itemStyle: {
		                normal: {
		                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
		                        offset: 0,
		                        color: '#fff'
		                    }, {
		                        offset: 0.7,
		                        color: '#81fffa'
		                    }, {
		                        offset: 1,
		                        color: '#11fff6'
		                    }], false),
		                    borderColor: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
		                        offset: 0,
		                        color: '#fff'
		                    }, {
		                        offset: 0.7,
		                        color: '#81fffa'
		                    }, {
		                        offset: 1,
		                        color: '#11fff6'
		                    }], false),
		                    shadowColor: 'rgba255,255,255, 0.5)',
		                    shadowBlur: 100
		                }
		            },
		            label: {
		                normal: {
		                    show: true,
		                    position: 'top',
		                    formatter: function(params) {
		                        return params.value[1]
		                    },
		                    color:'black',
		                    fontSize:16
		                }

		            }
		        }


		    ]
		};
	var myChart = echarts.init($('#chart6')[0]);
    myChart.setOption(option);
}


