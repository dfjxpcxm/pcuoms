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
		title: {
			text: '浦城经济',
			subtext: '单位：亿元'
		},
		tooltip : {
			trigger: 'axis',
			formatter: "{a} <br/>{b} : {c}亿",
			axisPointer: {
				type: 'cross',
				label: {
					backgroundColor: '#6a7985'
				}
			}
		},
		legend: {
			data:['地区收入总值','地区生产总值']
		},

		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		xAxis : [
			{
				type : 'category',
				boundaryGap : false,
				data : ['2010','2011','2012','2013','2014','2015','2016','2017','2018']
			}
		],
		yAxis : [
			{
				type : 'value'
			}
		],
		series : [
			{
				name:'地区收入总值',
				type:'line',
				stack: '总量',
				areaStyle: {},
				data:[64.34,74.84,84.69, 94.91, 106.62, 118.63, 129.25, 148.32, 153.50]
			},
			{
				name:'地区生产总值',
				type:'line',
				stack: '总量',
				areaStyle: {},
				data:[64.66,75.14,85.20, 95.18, 107.82, 119.06, 134.25, 151.32, 157.54]
			}
		]
	};
	var myChart = echarts.init($('#chart1')[0]);
    myChart.setOption(option);
}

function chart2(){
	option = {
		timeline : {
			tooltip : {
				formatter: "{b}"
			},
			data: [
				'2010','2011',{
					value: '2012',
					tooltip: {          // 让鼠标悬浮到此项时能够显示 `tooltip`。
						formatter: '{b}'
					},
					symbol: 'diamond',  // 此项的图形的特别设置。
					symbolSize: 16      // 此项的图形大小的特别设置。
				}, '2013','2014', {
					value: '2015',
					tooltip: {          // 让鼠标悬浮到此项时能够显示 `tooltip`。
						formatter: '{b}'
					},
					symbol: 'diamond',  // 此项的图形的特别设置。
					symbolSize: 16      // 此项的图形大小的特别设置。
				}, '2016', '2017', {
					value: '2018',
					tooltip: {          // 让鼠标悬浮到此项时能够显示 `tooltip`。
						formatter: '{b}'
					},
					symbol: 'diamond',  // 此项的图形的特别设置。
					symbolSize: 16      // 此项的图形大小的特别设置。
				}
			],
			axisType: 'category',
			show: true,
			autoPlay: true,
			playInterval: 2000
		},
		options : [
			{
				title : {
					text: 'GDP占比',
					subtext: '单位：万元'
				},
				tooltip : {
					trigger: 'item',
					text: 'GDP占比',
					formatter: "{a} <br/>{b} : {c}万 ({d}%)"
				},
				legend: {
					right: '10px',
					data:['第一产业','第二产业','第三产业']
				},

				series : [
					{
						name:'浦城生产总值',
						type:'pie',
						center: ['50%', '45%'],
						radius: '50%',
						data:[
							{value: 186710, itemStyle: {normal: {color:'#8563ff'}}, name:'第一产业'},
							{value: 227239, itemStyle: {normal: {color:'#ffae73'}}, name:'第二产业'},
							{value: 232573, itemStyle: {normal: {color:'#5eff4b'}},name:'第三产业'}
						]
					}
				]
			},
			{
				series : [
					{
						name:'浦城生产总值',
						type:'pie',
						center: ['50%', '45%'],
						radius: '50%',
						data:[
							{value: 214624,  itemStyle: {normal: {color:'#8563ff'}}, name:'第一产业'},
							{value: 266983, itemStyle: {normal: {color:'#ffae73'}}, name:'第二产业'},
							{value: 269732, itemStyle: {normal: {color:'#5eff4b'}},name:'第三产业'}
						]
					}
				]
			},
			{
				series : [
					{
						name:'浦城生产总值',
						type:'pie',
						center: ['50%', '45%'],
						radius: '50%',
						data:[
							{value: 237747,  itemStyle: {normal: {color:'#8563ff'}}, name:'第一产业'},
							{value: 309285,  itemStyle: {normal: {color:'#ffae73'}},name:'第二产业'},
							{value: 302542, itemStyle: {normal: {color:'#5eff4b'}},name:'第三产业'}
						]
					}
				]
			},
			{
				series : [
					{
						name:'浦城生产总值',
						type:'pie',
						center: ['50%', '45%'],
						radius: '50%',
						data:[
							{value: 258987,  itemStyle: {normal: {color:'#8563ff'}}, name:'第一产业'},
							{value: 360232,  itemStyle: {normal: {color:'#ffae73'}},name:'第二产业'},
							{value: 332569, itemStyle: {normal: {color:'#5eff4b'}},name:'第三产业'}
						]
					}
				]
			},
			{
				series : [
					{
						name:'浦城生产总值',
						type:'pie',
						center: ['50%', '45%'],
						radius: '50%',
						data:[
							{value: 279408,  itemStyle: {normal: {color:'#8563ff'}}, name:'第一产业'},
							{value: 420320,  itemStyle: {normal: {color:'#ffae73'}},name:'第二产业'},
							{value: 378283, itemStyle: {normal: {color:'#5eff4b'}},name:'第三产业'}
						]
					}
				]
			},

			{
				series : [
					{
						name:'浦城生产总值',
						type:'pie',
						center: ['50%', '45%'],
						radius: '50%',
						data:[
							{value: 313254,  itemStyle: {normal: {color:'#8563ff'}}, name:'第一产业'},
							{value: 460400, itemStyle: {normal: {color:'#ffae73'}},name:'第二产业'},
							{value: 416903, itemStyle: {normal: {color:'#5eff4b'}},name:'第三产业'}
						]
					}
				]
			},
			{
				series : [
					{
						name:'浦城生产总值',
						type:'pie',
						center: ['50%', '45%'],
						radius: '50%',
						data:[
							{value: 398113,  itemStyle: {normal: {color:'#8563ff'}}, name:'第一产业'},
							{value: 487277, itemStyle: {normal: {color:'#ffae73'}},name:'第二产业'},
							{value: 457047, itemStyle: {normal: {color:'#5eff4b'}},name:'第三产业'}
						]
					}
				]
			},
			{
				series : [
					{
						name:'浦城生产总值',
						type:'pie',
						center: ['50%', '45%'],
						radius: '50%',
						data:[
							{value: 431911,  itemStyle: {normal: {color:'#8563ff'}}, name:'第一产业'},
							{value: 545115, itemStyle: {normal: {color:'#ffae73'}}, name:'第二产业'},
							{value: 536106, itemStyle: {normal: {color:'#5eff4b'}},name:'第三产业'}
						]
					}
				]
			},
			{
				series : [
					{
						name:'浦城生产总值',
						type:'pie',
						center: ['50%', '45%'],
						radius: '50%',
						data:[
							{value: 338711,  itemStyle: {normal: {color:'#8563ff'}}, name:'第一产业'},
							{value: 572528, itemStyle: {normal: {color:'#ffae73'}}, name:'第二产业'},
							{value: 664154, itemStyle: {normal: {color:'#5eff4b'}},name:'第三产业'}
						]
					}
				]
			}
		]
	};
	var myChart = echarts.init($('#chart2')[0]);
	myChart.setOption(option);

}
function chart20(){
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

function chart4() {
	option = {
		title : {
			text: '现代绿色农业产值占比',
//			subtext: '单位：万元'
		},
		tooltip : {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c}万元 ({d}%)"
		},
		legend: {
			orient : 'vertical',
			x : 'left',
			top :'43px',
			data:['现代绿色农业产值','生物产业产值','数字信息产业产值','文化创意产业产值','先进制造业产值','农业总产值']

		},

		calculable : false,
		series : [
			{
				name:'现代绿色农业产值占比',
				type:'pie',
				selectedMode: 'single',
				radius : [0, 70],
				x: '20%',
				width: '40%',
				funnelAlign: 'right',
				max: 1548,

				itemStyle : {
					normal : {
						label : {
							position : 'inner'
						},
						labelLine : {
							show : false
						}
					}
				},
				data:[
					{value:21833, name:'现代绿色农业产值'},
					{value:101426, name:'农业总产值', itemStyle: {normal: {color:'#4abfff'}},selected:true}
				]
			},
			{
				name:'现代绿色农业产值占比',
				type:'pie',
				radius : [100, 140],

				// for funnel
				x: '60%',
				width: '35%',
				funnelAlign: 'left',
				max: 1048,
				data:[

					{value:21833, name:'现代绿色农业产值'},
					{value:11231, itemStyle: {normal: {color:'#71ff97'}},name:'生物产业产值'},
					{value:3604, itemStyle: {normal: {color:'#ffbf3a'}},name:'数字信息产业产值'},
					{value:41013, itemStyle: {normal: {color:'#ffae73'}},name:'文化创意产业产值'},
					{value:2270, itemStyle: {normal: {color:'#faff31'}},name:'先进制造业产值'},
					{value:101426, itemStyle: {normal: {color:'#4abfff'}},name:'农业总产值'}

				]
			}
		]
	};
	var myChart = echarts.init($('#chart4')[0]);
	myChart.setOption(option);
}
function chart61(val) {
	option = {
		tooltip : {
			formatter: "{a} <br/>{b} : {c}%"
		},

		series : [
			{
				name:'个性化仪表盘',
				type:'gauge',
				center : ['50%', '50%'],    // 默认全局居中
				radius : [0, '75%'],
				startAngle: 140,
				endAngle : -140,
				min: 0,                     // 最小值
				max: 100,                   // 最大值
				precision: 0,               // 小数精度，默认为0，无小数点
				splitNumber: 10,             // 分割段数，默认为5
				axisLine: {            // 坐标轴线
					show: true,        // 默认显示，属性show控制显示与否
					lineStyle: {       // 属性lineStyle控制线条样式
						color: [[0.2, 'lightgreen'],[0.4, 'orange'],[0.8, 'skyblue'],[1, '#ff4500']],
						width: 30
					}
				},
				axisTick: {            // 坐标轴小标记
					show: true,        // 属性show控制显示与否，默认不显示
					splitNumber: 5,    // 每份split细分多少段
					length :8,         // 属性length控制线长
					lineStyle: {       // 属性lineStyle控制线条样式
						color: '#eee',
						width: 1,
						type: 'solid'
					}
				},
				axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
					show: true,
					formatter: function(v){
						switch (v+''){
							case '10': return '弱';
							case '30': return '低';
							case '60': return '中';
							case '90': return '高';
							default: return '';
						}
					},
					textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
						color: '#333'
					}
				},
				splitLine: {           // 分隔线
					show: true,        // 默认显示，属性show控制显示与否
					length :30,         // 属性length控制线长
					lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
						color: '#eee',
						width: 2,
						type: 'solid'
					}
				},
				pointer : {
					length : '80%',
					width : 8,
					color : 'auto'
				},
				title : {
					show : true,
					offsetCenter: ['-65%', -10],       // x, y，单位px
					textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
						color: '#333',
						fontSize : 15
					}
				},
				detail : {
					show : true,
					backgroundColor: 'rgba(0,0,0,0)',
					borderWidth: 0,
					borderColor: '#ccc',
					width: 100,
					height: 40,
					offsetCenter: ['-60%', 10],       // x, y，单位px
					formatter:'{value}%',
					textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
						color: 'auto',
						fontSize : 30
					}
				},
				data:[{value: val, name: '仪表盘'}]
			}
		]
	};

	var myChart = echarts.init($('#chart6')[0]);
	myChart.setOption(option);

}


function chart3(){
	option = {
		title : {
			text: '居民人均收入与支出',
			subtext: '单位：元'
		},
		tooltip : {
			trigger: 'axis',
			formatter: "{a} <br/>{b}元"
		},
		legend: {
			left: 'right',

			data:[
				'农民人均可支配收入','城镇居民人均可支配收入','','农民人均生活消费支出','城镇居民人均生活消费支出'
			]
		},
		calculable : true,
		grid: {y: 70, y2:30, x2:20},
		xAxis : [
			{
				type : 'category',
				data : ['2014','2015','2016','2017','2018']
			},
			{
				type : 'category',
				axisLine: {show:false},
				axisTick: {show:false},
				axisLabel: {show:false},
				splitArea: {show:false},
				splitLine: {show:false},
				data : ['2014','2015','2016','2017','2018']
			}
		],
		yAxis : [
			{
				type : 'value',
				axisLabel:{formatter:'{value} '}
			}
		],
		series : [
			{
				name:'农民人均可支配收入',
				type:'bar',
				itemStyle: {normal: {color:'rgba(193,35,43,1)', label:{show:true}}},
				data:[10451,11287,12134,13260, 14488]
			},
			{
				name:'农民人均生活消费支出',
				type:'bar',
				itemStyle: {normal: {color:'rgba(181,195,52,1)', label:{show:true,textStyle:{color:'#27727B'}}}},
				data:[8157,8744,9286,10113,10806]
			},
			{
				name:'城镇居民人均可支配收入',
				type:'bar',
				itemStyle: {normal: {color:'rgba(252,206,16,1)', label:{show:true,textStyle:{color:'#E87C25'}}}},
				data:[22754,24324,26075,28340,30472]
			},
			{
				name:'城镇居民人均生活消费支出',
				type:'bar',
//				xAxisIndex:1,
				itemStyle: {normal: {color:'rgba(193,35,43,0.5)', label:{show:true,formatter:function(p){return p.value > 0 ? (p.value +'\n'):'';}}}},
				data:[15825,15803,16720,17321,18676]
			}
			/*,
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
			}*/
		]
	};
	var myChart = echarts.init($('#chart3')[0]);
	myChart.setOption(option);

}
function chart40(){
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

function chart51() {
	option = {
		title : {
			text: '某站点用户访问来源',
			subtext: '纯属虚构',
			x:'center'
		},
		tooltip : {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		legend: {
			orient : 'vertical',
			x : 'left',
			data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
		},
		calculable : true,
		series : [
			{
				name:'访问来源',
				type:'pie',
				radius : '55%',
				center: ['50%', 225],
				data:[
					{value:335, name:'直接访问'},
					{value:310, name:'邮件营销'},
					{value:234, name:'联盟广告'},
					{value:135, name:'视频广告'},
					{value:1548, name:'搜索引擎'}
				]
			}
		]
	};

	option2 = {
		tooltip : {
			trigger: 'axis',
			axisPointer : {
				type: 'shadow'
			}
		},
		legend: {
			data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
		},
		toolbox: {
			show : true,
			orient : 'vertical',
			y : 'center',
			feature : {
				mark : {show: true},
				magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
				restore : {show: true},
				saveAsImage : {show: true}
			}
		},
		calculable : true,
		xAxis : [
			{
				type : 'category',
				data : ['周一','周二','周三','周四','周五','周六','周日']
			}
		],
		yAxis : [
			{
				type : 'value',
				splitArea : {show : true}
			}
		],
		grid: {
			x2:40
		},
		series : [
			{
				name:'直接访问',
				type:'bar',
				stack: '总量',
				data:[320, 332, 301, 334, 390, 330, 320]
			},
			{
				name:'邮件营销',
				type:'bar',
				stack: '总量',
				data:[120, 132, 101, 134, 90, 230, 210]
			},
			{
				name:'联盟广告',
				type:'bar',
				stack: '总量',
				data:[220, 182, 191, 234, 290, 330, 310]
			},
			{
				name:'视频广告',
				type:'bar',
				stack: '总量',
				data:[150, 232, 201, 154, 190, 330, 410]
			},
			{
				name:'搜索引擎',
				type:'bar',
				stack: '总量',
				data:[820, 932, 901, 934, 1290, 1330, 1320]
			}
		]
	};

	var myChart = echarts.init($('#chart5')[0]);
	myChart.setOption(option);
}
function chart53() {
	option = {
		legend: {},
		tooltip: {
			trigger: 'axis',
			showContent: false
		},
		dataset: {
			source: [
				['product', '2012', '2013', '2014', '2015', '2016', '2017'],
				['Matcha Latte', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
				['Milk Tea', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
				['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
				['Walnut Brownie', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
			]
		},
		xAxis: {type: 'category'},
		yAxis: {gridIndex: 0},
		grid: {top: '55%'},
		series: [
			{type: 'line', smooth: true, seriesLayoutBy: 'row'},
			{type: 'line', smooth: true, seriesLayoutBy: 'row'},
			{type: 'line', smooth: true, seriesLayoutBy: 'row'},
			{type: 'line', smooth: true, seriesLayoutBy: 'row'},
			{
				type: 'pie',
				id: 'pie',
				radius: '30%',
				center: ['50%', '25%'],
				label: {
					formatter: '{b}: {@2012} ({d}%)'
				},
				encode: {
					itemName: 'product',
					value: '2012',
					tooltip: '2012'
				}
			}
		]
	};
	var myChart = echarts.init($('#chart5')[0]);
	myChart.setOption(option);

}
function chart5() {
	option = {
		title : {
			text: '造林面积与绿色农产品产量'
		},
		tooltip : {
			trigger: 'axis',
			formatter: '{a} <br/>{b} : {c} 亩'
		},

		calculable : true,
		center:['70%','50%'],
		legend: {
			orient : 'vertical',
			x : 'left',
			top :'43px',
			data:['完成造林总面积','更新造林面积','','水稻总产量','粮食总产量', '烟叶产量','油料产量','蔬菜产量','水果产量']

		},
//		xAxis: {type: 'category'},
		yAxis: {gridIndex: 0},
		grid: {top: '60%'},
		xAxis : [
			{
				type : 'category',
				splitLine : {show : false},
				data : ['2012','2013','2014','2015','2016','2017','2018']
			}
		],
		yAxis : [
			{
				type : 'value',
				position: 'right'
			}
		],
		series : [

			{
				name:'完成造林总面积',
				type:'line',
//				stack: '总量',
				data:[55248, 58216, 45144, 82317, 46870, 48280, 51280]
//				data:[ 55.25,58.22,45.15, 82.32, 46.88, 48.28, 51.28]
			},
			{
				name:'更新造林面积',
				type:'line',
				center:['70%','50%'],
//				stack: '总量',
				data:[84303, 48280, 10415, 10415, 20774, 20330, 33510]
//				data:[ 84.31,48.28,10.42, 10.42, 20.77, 20.33, 33.51]
			},

			{
				name:'绿色农产品产量',
				type:'pie',
				tooltip : {
					trigger: 'item',
					formatter: '{a} <br/>{b} : {c}吨 ({d}%)'
				},
//				center: [120,130],
				center:['65%','35%'],
				radius : [0, 50],
				itemStyle :　{
					normal : {
						labelLine : {
							length : 20
						}
					}
				},
				data:[
					{value:228173, name:'水稻总产量'},
					{value:228173, name:'粮食总产量'},
					{value:4707, name:'烟叶产量'},
					{value:9461, name:'油料产量'},
					{value:236531, name:'蔬菜产量'},
					{value:27742, name:'水果产量'}
				]
			}
		]
	};

	var myChart = echarts.init($('#chart5')[0]);
	myChart.setOption(option);

}
function chart51() {
	option = {
		title: {
			title:'植树造林总面积',
			subtext: '亩',
			textStyle: {
				fontWeight: 'normal',
				fontSize: 8,
				color: 'rgb(97, 142, 205)'
			}
		},
		tooltip : {
			trigger: 'axis'
		},
		legend: {
			data:['完成植树造林总面积','更新造林面积']
		},

		calculable : true,
		xAxis : [
			{
				type : 'category',
				boundaryGap : false,
				data : ['2012','2013','2014','2015','2016','2017','2018']
			}
		],
		yAxis : [
			{
				type : 'value'
			}
		],
		series : [
			{
				name:'完成植树造林总面积',
				type:'line',
//				stack: '总量',
				data:[55248, 58216, 45144, 82317, 46870, 48280, 51280]
			},
			{
				name:'更新造林面积',
				type:'line',
//				stack: '总量',
				data:[84303, 48280, 10415, 10415, 20774, 20330, 33510]
			}

		]
	};
	var myChart = echarts.init($('#chart5')[0]);
	myChart.setOption(option);

}
function chart51(){
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

function chart61(){
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



function chart62(value,value1){
	var data = []
	data.push(value)
	var data1 = []
	data1.push(value1)

	var option = {
		title: {
			subtext: '空气质量与森林覆盖率',
			textStyle: {
				fontWeight: 'normal',
				fontSize: 8,
				color: 'rgb(97, 142, 205)'
			}
		},
		series: [{
			type: 'liquidFill',
			radius: '50%',
			center:['30%','50%'],
			data:[{value: value, name: '仪表盘'}],
			backgroundStyle: {
				borderWidth: 5,
				borderColor: 'rgb(255,0,255,0.9)',
				color: 'rgb(255,0,255,0.01)'
			},
			label: {
				normal: {
					formatter: (value * 100).toFixed(2) + '%',
//					formatter: '{b}\n{a}',//格式化输出 默认是百分比
					name: '城市优良空气天数比例',
					textStyle: {
						fontSize: 20
					}
				}
			}
		},{
			type: 'liquidFill',
			radius: '50%',
			center:['70%','50%'],
			data: data1,
			name: '森林覆盖率',
			backgroundStyle: {
				borderWidth: 5,
				borderColor: 'rgb(255,0,255,0.9)',
				color: 'rgb(255,0,255,0.01)'
			},
			label: {
				normal: {
					formatter: (value1 * 100).toFixed(2) + '%',
					name: '森林覆盖率',
					textStyle: {
						fontSize: 20
					}
				}
			}
		}]
	}
	var myChart = echarts.init($('#chart6')[0]);
	option.series[0].data[0].name="test";
	myChart.setOption(option);
}

function chart6() {
	option = {
		color : [
			'rgba(255, 69, 0, 0.5)',
			'rgba(255, 150, 0, 0.5)',
			'rgba(255, 200, 0, 0.5)',
			'rgba(155, 200, 50, 0.5)',
			'rgba(55, 200, 100, 0.5)'
		],
		title : {
			text: '森林覆盖率与空气质量'
		},
		tooltip : {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c}%"
		},

		legend: {
			right: '10px',
			data:['2017','2018']
		},

		polar : [
			{
				indicator : [
					{ text : '化学需氧量',max:0.7 },
					{ text : '二氧化硫',max:1.1 },
					{ text : '甲烷',max:0.5},
					{ text : '氮氧化物',max:0.7 },
					{ text : '氨氮',max:1.6 }
				],
				center : [405, 180],
				radius : 100
			}
		],

		calculable : false,
		series : [
			{
				name:'污染物排放总量',
				type:'gauge',
				center: ['25%','55%'],
				splitNumber: 10,       // 分割段数，默认为5
				axisLine: {            // 坐标轴线
					lineStyle: {       // 属性lineStyle控制线条样式
						color: [[0.2, '#228b22'],[0.8, '#48b'],[1, '#ff4500']],
						width: 8
					}
				},
				axisTick: {            // 坐标轴小标记
					splitNumber: 10,   // 每份split细分多少段
					length :12,        // 属性length控制线长
					lineStyle: {       // 属性lineStyle控制线条样式
						color: 'auto'
					}
				},
				axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
					textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
						color: 'auto'
					}
				},
				splitLine: {           // 分隔线
					show: true,        // 默认显示，属性show控制显示与否
					length :30,         // 属性length控制线长
					lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
						color: 'auto'
					}
				},
				pointer : {
					width : 5
				},
				title : {
					show : true,
					offsetCenter: [0, '-30%'],       // x, y，单位px
					textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
						fontWeight: 'bolder'
					}
				},
				detail : {
					formatter:'{value}%',
					textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
						color: 'auto',
						fontWeight: 'bolder'
					}
				},
				data:[{value:75.04, name: '森林覆盖率'}]
			},

			{
				name: '污染物排放总量',
				type: 'radar',
				itemStyle: {normal: {areaStyle: {type: 'default'}}},
				data: [
					{
						value : [0.61, 1.08, 0.5, 0.61,1.52],
						name : '2017'
					},
					{
						value : [0.6, 1, 0.4, 0.6,1.5],
						name : '2018'
					}
				]
				}
		]
	};
	var myChart = echarts.init($('#chart6')[0]);
	myChart.setOption(option);
}


function chart60() {
	option = {
		color : [
			'rgba(255, 69, 0, 0.5)',
			'rgba(255, 150, 0, 0.5)',
			'rgba(255, 200, 0, 0.5)',
			'rgba(155, 200, 50, 0.5)',
			'rgba(55, 200, 100, 0.5)'
		],
		title : {
			text: '空气质量与森林覆盖率'
		},
		tooltip : {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c}%"
		},



		polar : [
			{
				indicator : [
					{ text : '化学需氧量',max:0.7 },
					{ text : '二氧化硫',max:1.1 },
					{ text : '甲烷',max:0.5},
					{ text : '氮氧化物',max:0.7 },
					{ text : '氨氮',max:1.6 }
				],
				center : [405, 150],
				radius : 100
			}
		],

		calculable : false,
		series : [
			{
				name:'污染物排放总量',
				type:'gauge',
				center: ['25%','55%'],
				splitNumber: 10,       // 分割段数，默认为5
				axisLine: {            // 坐标轴线
					lineStyle: {       // 属性lineStyle控制线条样式
						color: [[0.2, '#228b22'],[0.8, '#48b'],[1, '#ff4500']],
						width: 8
					}
				},
				axisTick: {            // 坐标轴小标记
					splitNumber: 10,   // 每份split细分多少段
					length :12,        // 属性length控制线长
					lineStyle: {       // 属性lineStyle控制线条样式
						color: 'auto'
					}
				},
				axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
					textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
						color: 'auto'
					}
				},
				splitLine: {           // 分隔线
					show: true,        // 默认显示，属性show控制显示与否
					length :30,         // 属性length控制线长
					lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
						color: 'auto'
					}
				},
				pointer : {
					width : 5
				},
				title : {
					show : true,
					offsetCenter: [0, '-30%'],       // x, y，单位px
					textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
						fontWeight: 'bolder'
					}
				},
				detail : {
					formatter:'{value}%',
					textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
						color: 'auto',
						fontWeight: 'bolder'
					}
				},
				data:[{value:75.04, name: '森林覆盖率'}]
			},

			{
				name: '污染物排放总量',
				type: 'radar',
				itemStyle: {normal: {areaStyle: {type: 'default'}}},
				data: [
					{
						value : [0.6, 1, 0.4, 0.6,1.5],
						name : '排放总量'
					}
				]
			}
		]
	};
	var myChart = echarts.init($('#chart6')[0]);
	myChart.setOption(option);
}