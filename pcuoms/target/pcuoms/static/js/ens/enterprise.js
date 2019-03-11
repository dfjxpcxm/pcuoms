$(document).ready(function(){
	getdata('/statecn/trade/enterprise/chart2.json',chart2);
	getdata('/statecn/trade/enterprise/chart3.json',chart3);
	getdata('/statecn/trade/enterprise/chart4.json',chart4);
	getdata('/statecn/trade/enterprise/chart5.json',chart5);
});




function chart2(data){
	var xDdata = data.content.xAxis;
	var bar = data.content.data[0];
	var line = data.content.data[1];
	var legend = data.content.legend;
	 option = {
			    tooltip: {
			    	trigger: 'axis',
	    	        axisPointer: {
	    	            lineStyle: {
	    	                color: '#57617B'
	    	            }
	    	        }
			    },
			    legend: {
			    	show:true,
		            top : '5%',
		            x:'center',
		            itemGap: 12, //图例每项之间的间隔
		            itemWidth: 20, //图例宽度
		            itemHeight: 10, //图例高度
		            textStyle: {
		                color:'#fff',
		                fontFamily: '微软雅黑',
		                fontSize: 14,
		            },
			        data: legend
			    },
			    grid: {
					 left: '5%',
			   		 right:'5%',
		   			  top:'12%',
		   			  bottom:'5%',
		   			 containLabel: true
		   			 },
			    xAxis: {
			    	type: "category",
			        splitLine: {
			        	 show: true,
			            lineStyle: {
			                color: 'rgba(0,175,255,0.6)',
			            }
			        },
			        //boundaryGap: false, //坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样
			        axisTick: {
		            	color: '#0177d4',
		                show: false
		            },
			        splitArea: {
			            show: false
			        },
			        axisLine: {
			        	show: false,
		                lineStyle: {
		                    color: '#38b8ff'
		                }
		            },
		            axisLabel: {
		            	inside: false,
		            	interval: 0,
		            	rotate: 30,
		                textStyle: {
		                    color: '#ffffff',
		                    fontSize: 14
		                }
		            },
			        data:xDdata
			    },
			    yAxis: [{
			    	name: '亿元',
					 nameGap:-5,
					 nameTextStyle:{
						padding:[0,0,0,45],
						align:'center',
						color:'#fff',
					},
			    	 type: 'value',
			    	 axisTick: {
			            	color: '#0177d4',
			                show: false
			            },
			         splitLine: {
			        	 show: false,
			             lineStyle: {
			                 color: '#fff',
			             }
			         },
			         axisLine: {
			         	show: false,
			                lineStyle: {
			                    color: '#38b8ff'
			                }
		             },
		             axisLabel: {
		            	 	textStyle: {
		                    color: '#ffffff',
		                    fontSize: 14
		                },
		                formatter: '{value}'
		             },
		             //单位好
			    },{
			    	 type: 'value',
			    	 axisTick: {
			    	 	 show: false,
			            	color: '#0177d4'
			            },
			         splitLine: {
			        	 show: false,
			             lineStyle: {
			                 color: '#fff',
			             }
			         },
			         axisLine: {
			         	 show: false,
			                lineStyle: {
			                    color: '#38b8ff'
			                }
		             },
		             axisLabel: {
		            	 	textStyle: {
		                    color: '#ffffff',
		                    fontSize: 14
		                },
		                formatter: '{value}%'
		             },
		             //单位好
			    }],
			    series: [
					{
						name:legend[0],
					    type:"bar",
					    barWidth: '30%',
					    itemStyle: {
					        normal: {
					            color: '#007aff',
					            barBorderRadius: 15,
					        }
					    },
					    // barWidth: 7,
					    data: bar
					},
					{
		    	        name: legend[1],
		    	        type: 'line',
		    	        smooth: true,
		    	        symbol: 'circle',
		    	        symbolSize: 6,
		    	        showSymbol: true,
		    	        yAxisIndex: 1,
		    	        lineStyle: {
		    	            normal: {
		    	                width: 2
		    	            }
		    	        },
		    	        areaStyle: {
		    	            normal: {
		    	                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
		    	                    offset: 0,
		    	                    color: 'rgba(255,163,0, 0.8)'
		    	                },{
		    	                    offset: 0.4,
		    	                    color: 'rgba(255,163,0, 0.6)'
		    	                },{
		    	                    offset: 0.8,
		    	                    color: 'rgba(255,163,0, 0.0)'
		    	                }], false),
		    	                shadowColor: 'rgba(0, 0, 0, 0.1)',
		    	                shadowBlur: 10
		    	            }
		    	        },
		    	        itemStyle: {
		    	            normal: {
		    	                color: 'rgb(255,163,0)',

		    	            }
		    	        },
		    	        data: line
		    	    }]
			};
    var myChart = echarts.init($('#chart2')[0]);
    myChart.setOption(option);
}

function addSeries(data,legend,color){
	var series = [];
	for (var i = 0; i < data.length; i++) {
		series.push({
	        name: legend[i],
	        type: 'line',
	        smooth: true,
	        symbol: 'circle',
	        //symbolSize: 6,
	        showSymbol: false,
	        stack: '总量',
	        lineStyle: {
	            normal: {
	                width: 1
	            }
	        },
	        areaStyle: {
	            normal: {
	                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                    offset: 0,
	                    color: color[i][1]
	                },{
	                    offset: 0.8,
	                    color: color[i][1]
	                }], false),
	                shadowColor: 'rgba(0, 0, 0, 0.1)',
	                shadowBlur: 10
	            }
	        },
	        itemStyle: {
	            normal: {
	                color:color[i][0]
	            }
	        },
	        data: data[i]
	    });
	}
	return series;
}

var color = [["rgb(53,0,255)","rgba(53,0,255,0.4)"],
             ["rgb(84,251,222)","rgba(84,251,222,0.4)"],["rgb(138,148,247)","rgba(138,148,247,0.4)"],
             ["rgb(76,234,39)","rgba(76,234,39,0.4)"],["rgb(36,144,10)","rgba(36,144,10,0.4)"],           
             ["rgb(0,153,255)","rgba(0,153,255,0.4)"],["rgb(126,198,247)","rgba(126,198,247,0.4)"],["rgb(103,149,220)","rgba(103,149,220,0.6)"],
             ["rgb(0,237,255)","rgba(0,237,255,0.4)"],
             ["rgb(239,255,0)","rgba(239,255,0,0.4)"],
             ["rgb(255,216,0)","rgba(255,216,0,0.4)"],["rgb(94,55,244)","rgba(94,55,244,0.4)"],["rgb(159,246,139)","rgba(159,246,139,0.4)"],
             ["rgb(232,240,96)","rgba(232,240,96,0.5)"],["rgb(115,223,90)","rgba(115,223,90,0.4)"],["rgb(89,103,247)","rgba(89,103,247,0.4)"]];
function chart3(data){
	var xDdata = data.content.xAxis;
	/*var bar = data.content.data[0];
	var line = data.content.data[1];*/
	var legend = data.content.legend;
	var series =  addSeries(data.content.data,data.content.legend,color)
	 option = {
			    tooltip: {
			    	trigger: 'axis',
	    	        axisPointer: {
	    	            lineStyle: {
	    	                color: '#57617B'
	    	            }
	    	        }
			    },
			    /*legend: {
			    	show:true,
		            top : '2%',
		            right:'5%',
		            itemGap: 12, //图例每项之间的间隔
		            itemWidth: 20, //图例宽度
		            itemHeight: 10, //图例高度
		            textStyle: {
		                color:'#fff',
		                fontFamily: '微软雅黑',
		                fontSize: 14,
		            },
			        data: legend
			    },*/
			    grid: {
					 left: '5%',
			   		 right:'5%',
		   			  top:'12%',
		   			bottom:'7%',
		   			 containLabel: true
		   			 },
			    xAxis: {
			    	type: "category",
			        splitLine: {
			        	 show: false,
			            lineStyle: {
			                color: 'rgba(0,175,255,0.6)',
			            }
			        },
			        //boundaryGap: false, //坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样
			        axisTick: {
		            	color: '#0177d4',
		                show: false
		            },
			        splitArea: {
			            show: false
			        },
			        axisLine: {
			        	show: false,
		                lineStyle: {
		                    color: '#38b8ff'
		                }
		            },
		            axisLabel: {
		            	inside: false,
		            	//interval: 0,
		            	//rotate: 30,
		                textStyle: {
		                    color: '#ffffff',
		                    fontSize: 14
		                }
		            },
			        data:xDdata
			    },
			    yAxis: [{
			    	 type: 'value',
			    	 axisTick: {
			    	 	 show: false,
			            	color: '#0177d4'
			            },
			         splitLine: {
			        	 show: false,
			             lineStyle: {
			                 color: '#fff',
			             }
			         },
			         axisLine: {
			         	 show: false,
			                lineStyle: {
			                    color: '#38b8ff'
			                }
		             },
		             axisLabel: {
		            	 	textStyle: {
		                    color: '#ffffff',
		                    fontSize: 14
		                },
		                formatter: '{value}%'
		             },
		             //单位好
			    }],
			    series: series
			};
    var myChart = echarts.init($('#chart3')[0]);
    myChart.setOption(option);
}

function chart4(data){
	var xDdata = data.content.xAxis;
	/*var bar = data.content.data[0];
	var line = data.content.data[1];*/
	var legend = data.content.legend;
	var series =  addSeries(data.content.data,data.content.legend,color)
	 option = {
			    tooltip: {
			    	trigger: 'axis',
	    	        axisPointer: {
	    	            lineStyle: {
	    	                color: '#57617B'
	    	            }
	    	        }
			    },
			    /*legend: {
			    	show:true,
		            top : '2%',
		            right:'5%',
		            itemGap: 12, //图例每项之间的间隔
		            itemWidth: 20, //图例宽度
		            itemHeight: 10, //图例高度
		            textStyle: {
		                color:'#fff',
		                fontFamily: '微软雅黑',
		                fontSize: 14,
		            },
			        data: legend
			    },*/
			    grid: {
					 left: '5%',
			   		 right:'5%',
		   			  top:'12%',
		   			bottom:'7%',
		   			 containLabel: true
		   			 },
			    xAxis: {
			    	type: "category",
			        splitLine: {
			        	 show: false,
			            lineStyle: {
			                color: 'rgba(0,175,255,0.6)',
			            }
			        },
			        //boundaryGap: false, //坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样
			        axisTick: {
		            	color: '#0177d4',
		                show: false
		            },
			        splitArea: {
			            show: false
			        },
			        axisLine: {
			        	show: false,
		                lineStyle: {
		                    color: '#38b8ff'
		                }
		            },
		            axisLabel: {
		            	inside: false,
		            	//interval: 0,
		            	//rotate: 30,
		                textStyle: {
		                    color: '#ffffff',
		                    fontSize: 14
		                }
		            },
			        data:xDdata
			    },
			    yAxis: [{
			    	 type: 'value',
			    	 axisTick: {
			    	 	 show: false,
			            	color: '#0177d4'
			            },
			         splitLine: {
			        	 show: false,
			             lineStyle: {
			                 color: '#fff',
			             }
			         },
			         axisLine: {
			         	 show: false,
			                lineStyle: {
			                    color: '#38b8ff'
			                }
		             },
		             axisLabel: {
		            	 	textStyle: {
		                    color: '#ffffff',
		                    fontSize: 14
		                },
		                formatter: '{value}%'
		             },
		             //单位好
			    }],
			    series: series
			};
    var myChart = echarts.init($('#chart4')[0]);
    myChart.setOption(option);
}

function chart5(data){
	var xDdata = data.content.xAxis;
	/*var bar = data.content.data[0];
	var line = data.content.data[1];*/
	var legend = data.content.legend;
	var series =  addSeries(data.content.data,data.content.legend,color)
	 option = {
			    tooltip: {
			    	trigger: 'axis',
	    	        axisPointer: {
	    	            lineStyle: {
	    	                color: '#57617B'
	    	            }
	    	        }
			    },
			    /*legend: {
			    	show:true,
		            top : '2%',
		            right:'5%',
		            itemGap: 12, //图例每项之间的间隔
		            itemWidth: 20, //图例宽度
		            itemHeight: 10, //图例高度
		            textStyle: {
		                color:'#fff',
		                fontFamily: '微软雅黑',
		                fontSize: 14,
		            },
			        data: legend
			    },*/
			    grid: {
					 left: '5%',
			   		 right:'5%',
		   			  top:'12%',
		   			  bottom:'7%',
		   			 containLabel: true
		   			 },
			    xAxis: {
			    	type: "category",
			        splitLine: {
			        	 show: false,
			            lineStyle: {
			                color: 'rgba(0,175,255,0.6)',
			            }
			        },
			        //boundaryGap: false, //坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样
			        axisTick: {
		            	color: '#0177d4',
		                show: false
		            },
			        splitArea: {
			            show: false
			        },
			        axisLine: {
			        	show: false,
		                lineStyle: {
		                    color: '#38b8ff'
		                }
		            },
		            axisLabel: {
		            	inside: false,
		            	//interval: 0,
		            	//rotate: 30,
		                textStyle: {
		                    color: '#ffffff',
		                    fontSize: 14
		                }
		            },
			        data:xDdata
			    },
			    yAxis: [{
			    	 type: 'value',
			    	 axisTick: {
			    	 	 show: false,
			            	color: '#0177d4'
			            },
			         splitLine: {
			        	 show: false,
			             lineStyle: {
			                 color: '#fff',
			             }
			         },
			         axisLine: {
			         	 show: false,
			                lineStyle: {
			                    color: '#38b8ff'
			                }
		             },
		             axisLabel: {
		            	 	textStyle: {
		                    color: '#ffffff',
		                    fontSize: 14
		                },
		                formatter: '{value}%'
		             },
		             //单位好
			    }],
			    series: series
			};
    var myChart = echarts.init($('#chart5')[0]);
    myChart.setOption(option);
}

