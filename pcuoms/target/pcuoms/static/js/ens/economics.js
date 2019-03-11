$(document).ready(function(){
	getdata('/statecn/trade/economics/chart0.json',chart0);
	getdata('/statecn/trade/economics/chart3.json',chart3);
	getdata('/statecn/trade/economics/chart4.json',chart4);
	getdata('/statecn/trade/economics/chart5.json',chart5);
});


function chart0(data){
	var da1 = data.content.data[0] ;
	var da2 = data.content.data[1];
	var da3 = data.content.data[2];
	var da4 = data.content.data[3];
	var da5 = data.content.data[4];
	var da6 = data.content.data[5];
	var da7 = data.content.data[6];
	var da8 = data.content.data[7];
	var legend = data.content.legend;
	 var option = {
			 legend: { //图例组件，颜色和名字
	 		        itemGap: 12, //图例每项之间的间隔
	 		        itemWidth: 16,
	 		        itemHeight: 12,
	 		        x:'center',
	 		        bottom:'3%',
	 		        data: legend,
	 		        textStyle: {
	 		            color: '#fff',
	 		            fontSize: 14,
	 		        }
	 		    },
	            tooltip: {
	                trigger: 'item',
	                axisPointer:{
	                    type:'cross',
	                    axis:'y'
	                },
	               formatter: function (v){
	                	return v.seriesName+'<br/>幅度：'+v.data[0]+' %<br/>贡献度：'+v.data[1];
	                	//alert(JSON.stringify(v));
	                }
	            },
	            grid: {
					left: '5%',
					right:'11%',
					top:'14%',
					bottom:'11%',
					containLabel: true
				},
	            xAxis: {
	            	name:'贡献度',
	            	nameTextStyle:{
				    	align:'center',
				    	color:'#fff',
					},
	                type: 'value',
	                splitLine: {
	                    show:false,
	                    lineStyle: {
	                        type: 'dashed'
	                    }
	                },
	                axisLine: {
	                    lineStyle: {
	                        color: '#38b8ff'
	                    }
	                },
	                axisTick:{
	                    show:true
	                },
	                axisLabel: {
	                    textStyle: {
	                        color: '#fff'
	                    }
	                },
	            },
	            yAxis: {
	            	name:'幅度',
	            	nameTextStyle:{
				    	align:'center',
				    	color:'#fff',
					},
	                type: 'value',
	                splitLine: {
	                    show:false,
	                    lineStyle: {
	                        type: 'dashed'
	                    }
	                },
	                axisTick:{
	                    show:true
	                },
	                axisLine: {
	                    lineStyle: {
	                        color: '#38b8ff'
	                    }
	                },
	                axisLabel: {
	                	formatter: '{value}%',
	                    textStyle: {
	                        color: '#fff'
	                    }
	                },
	            },
	            series: [{
	            	name:legend[0],
	                type: 'scatter',
	                symbolSize: function(data) {
	                	if (data[2]/2>12) {
	                		return data[2]/2;
						}
	                    return 12;//Math.sqrt(data[0]);
	                },
	                label: {
	                    normal: {
	                        show: true,
	                        formatter: function(param) {
	                            return param.data[2]+'亿元';
	                        },
	                        textStyle: {
		                        color: '#fff',
		                        fontSize: 14,
		                    },
	                        //position: 'center'
	                    }
	                },
	                itemStyle: {
	                    normal: {
	                        shadowBlur: 10,
	                        shadowColor: 'rgba(25, 100, 150, 0.5)',
	                        shadowOffsetY: 5,
	                        color: '#f400ff'
	                    }
	                },
	                data: da1
	            },{
	            	name:legend[1],
	                type: 'scatter',
	                symbolSize: function(data) {
	                	if (data[2]/2>12) {
	                		return data[2]/2;
						}
	                    return 12;//Math.sqrt(data[0]);
	                },
	                label: {
	                    normal: {
	                    	show: true,
	                        formatter: function(param) {
	                            return param.data[2]+'亿元';
	                        },
	                        textStyle: {
		                        color: '#fff',
		                        fontSize: 14,
		                    },
	                    }
	                },
	                itemStyle: {
	                    normal: {
	                        shadowBlur: 10,
	                        shadowColor: 'rgba(25, 100, 150, 0.5)',
	                        shadowOffsetY: 5,
	                        color: '#5f8ff0'
	                    }
	                },
	                data: da2
	            },{
	            	name:legend[2],
	                type: 'scatter',
	                symbolSize: function(data) {
	                	if (data[2]/2>12) {
	                		return data[2]/2;
						}
	                    return 12;//Math.sqrt(data[0]);
	                },
	                label: {
	                    normal: {
	                    	show: true,
	                        formatter: function(param) {
	                            return param.data[2]+'亿元';
	                        },
	                        textStyle: {
		                        color: '#fff',
		                        fontSize: 14,
		                    },
	                    }
	                },
	                itemStyle: {
	                    normal: {
	                        shadowBlur: 10,
	                        shadowColor: 'rgba(25, 100, 150, 0.5)',
	                        shadowOffsetY: 5,
	                        color: '#00f4ff'
	                    }
	                },
	                data: da3
	            },{
	            	name:legend[3],
	                type: 'scatter',
	                symbolSize: function(data) {
	                	if (data[2]/2>12) {
	                		return data[2]/2;
						}
	                    return 12;//Math.sqrt(data[0]);
	                },
	                label: {
	                    normal: {
	                    	show: true,
	                        formatter: function(param) {
	                            return param.data[2]+'亿元';
	                        },
	                        textStyle: {
		                        color: '#fff',
		                        fontSize: 14,
		                    },
	                    }
	                },
	                itemStyle: {
	                    normal: {
	                        shadowBlur: 10,
	                        shadowColor: 'rgba(25, 100, 150, 0.5)',
	                        shadowOffsetY: 5,
	                        color: '#ffe000'
	                    }
	                },
	                data: da4
	            },{
	            	name:legend[4],
	                type: 'scatter',
	                symbolSize: function(data) {
	                	if (data[2]/2>12) {
	                		return data[2]/2;
						}
	                    return 12;//Math.sqrt(data[0]);
	                },
	                label: {
	                    normal: {
	                    	show: true,
	                        formatter: function(param) {
	                            return param.data[2]+'亿元';
	                        },
	                        textStyle: {
		                        color: '#fff',
		                        fontSize: 14,
		                    },
	                    }
	                },
	                itemStyle: {
	                    normal: {
	                        shadowBlur: 10,
	                        shadowColor: 'rgba(25, 100, 150, 0.5)',
	                        shadowOffsetY: 5,
	                        color: '#4cd110'
	                    }
	                },
	                data: da5
	            },{
	            	name:legend[5],
	                type: 'scatter',
	                symbolSize: function(data) {
	                	if (data[2]/2>12) {
	                		return data[2]/2;
						}
	                    return 12;//Math.sqrt(data[0]);
	                },
	                label: {
	                    normal: {
	                    	show: true,
	                        formatter: function(param) {
	                            return param.data[2]+'亿元';
	                        },
	                        textStyle: {
		                        color: '#fff',
		                        fontSize: 14,
		                    },
	                    }
	                },
	                itemStyle: {
	                    normal: {
	                        shadowBlur: 10,
	                        shadowColor: 'rgba(25, 100, 150, 0.5)',
	                        shadowOffsetY: 5,
	                        color: '#ffaa00'
	                    }
	                },
	                data: da6
	            },{
	            	name:legend[6],
	                type: 'scatter',
	                symbolSize: function(data) {
	                	if (data[2]/2>12) {
	                		return data[2]/2;
						}
	                    return 12;//Math.sqrt(data[0]);
	                },
	                label: {
	                    normal: {
	                    	show: true,
	                        formatter: function(param) {
	                            return param.data[2]+'亿元';
	                        },
	                        textStyle: {
		                        color: '#fff',
		                        fontSize: 14,
		                    },
	                    }
	                },
	                itemStyle: {
	                    normal: {
	                        shadowBlur: 10,
	                        shadowColor: 'rgba(25, 100, 150, 0.5)',
	                        shadowOffsetY: 5,
	                        color: '#ff00d3'
	                    }
	                },
	                data: da7
	            },{
	            	name:legend[7],
	                type: 'scatter',
	                symbolSize: function(data) {
	                	if (data[2]/2>12) {
	                		return data[2]/2;
						}
	                    return 12;//Math.sqrt(data[0]);
	                },
	                label: {
	                    normal: {
	                    	show: true,
	                        formatter: function(param) {
	                            return param.data[2]+'亿元';
	                        },
	                        textStyle: {
		                        color: '#fff',
		                        fontSize: 14,
		                    },
	                    }
	                },
	                itemStyle: {
	                    normal: {
	                        shadowBlur: 10,
	                        shadowColor: 'rgba(25, 100, 150, 0.5)',
	                        shadowOffsetY: 5,
	                        color: '#0007ff'
	                    }
	                },
	                data: da8
	            }]
	        };
	var myChart = echarts.init($('#chart0')[0]);
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
		   			  top:'15%',
		   			bottom:'5%',
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
		   			  top:'15%',
		   			bottom:'5%',
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
		   			  top:'15%',
		   			  bottom:'5%',
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
