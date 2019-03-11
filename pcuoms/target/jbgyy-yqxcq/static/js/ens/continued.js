var ln = 1;
$(document).ready(function() {
	getdata('/statecn/trade/continued/chart4.json',chart4);
	getdata('/statecn/trade/continued/chart3.json',chart3);
	getdata('/statecn/trade/continued/chart2.json',chart2);
	getdata('/statecn/trade/continued/chart1.json',chart1);
	setInterval(function() {
		if (ln>$(".top-title").length){
			ln = 1;
		}
		change(ln);
	  }, 5000);
  })


function change(value){
	ln = value;
	$('.bottom-img').attr('id','');
	$('.top-title').attr('id','');
	var id1 = ".bottom-img"+value;
	var id2 = ".top-title"+value;
	$(id1).attr('id','bottom-img');
	$(id2).attr('id','top-title');
	getdata('/statecn/trade/continued/chart4.json',chart4);
}

function chart1(data){
	//alert(JSON.stringify(data));
	var xDdata = data.content.xAxis;
	var bar1 = data.content.data[0];
	var bar2 = data.content.data[1];
	var legend = data.content.legend;
	var option = {
    		tooltip: {
    	        trigger: 'axis',
    	        axisPointer: { // 坐标轴指示器，坐标轴触发有效
    	            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
    	        },
    	        formatter:function (v) {
	            	//alert(JSON.stringify(v));
	            	return v[0].name +'<br/>'+v[0].seriesName+' : '+v[0].value +' 万元<br/>'+
	            	v[1].seriesName+' : '+(-v[1].value*1) +' 万元'
            	}
    	    },   		
        color:['#FDD743','#2AB7FF','#FFA340','#57FFFF'],
        legend: {
	        //orient: 'vertical',
	        //icon: 'circle',
	        x:'center',
	        top:'5%',
	        itemHeight:10,
	        itemWidth:20,
	        textStyle: {
	            color: '#fff',
	            fontSize: 14
	        },
	        data: legend
	    }, 
	    grid: {
			left: '5%',
			right:'5%',
			top:'16%',
			bottom:'5%',
			containLabel: true
		},
        xAxis: {
        	axisLine: {
                lineStyle: {
                    color: '#38b8ff'
                }
            },
            axisLabel: {
                color: '#fff',
                fontSize: 14
            },
            splitLine: {
                show: false
            },
            axisTick:{
                show:true
            },
            type: 'category',
            data:xDdata
        },
        yAxis: {
        	name:'万元',
    		nameGap:-5,
    		nameTextStyle:{
		    	padding:[0,0,0,45],
		    	align:'center',
		    	color:'#fff',
			},
        	axisLine: {
                lineStyle: {
                    color: '#38b8ff'
                }
            },
            axisLabel: {
            	formatter:function (v) {
            	if (v*1<0) {
            		return -v*1;	
				}else{
        		return v;
				}
        	},
        	 textStyle: {
                 color: '#fff',
                 fontSize:12
             }
            },
            splitLine: {
                show: false
            },
            axisTick:{
                show:true
            },
            type: 'value'
        },
        series: [{
			name: legend[0],
			type: 'bar',
			stack: '总量',
			barWidth: '30%',
			data: bar1
		},{
				name: legend[1],
				type: 'bar',
				stack: '总量',
				barWidth: '30%',
				data: bar2
			}]
    };
	var myChart = echarts.init($('#chart1')[0]);
    myChart.setOption(option);
}

function chart2(data){
	var xDdata = data.content.xAxis;
	var line1 = data.content.data[0];
	var line2 = data.content.data[1];
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
		        //orient: 'vertical',
		        //icon: 'circle',
    	    	x:'center',
    	        top:'5%',
		        itemHeight:13,
		        itemWidth:20,
		        textStyle: {
		            color: '#fff',
		            fontSize: 14
		        },
		        data: legend
		    },
    	    grid: {
    	        left: '3%',
    	        right: '4%',
    	        bottom: '5%',
    	        top:'15%',
    	        containLabel: true
    	    },
    	    xAxis: [{
    	        type: 'category',
    	        axisLine: {
		            lineStyle: {
		            	 color: '#59ebe8',
		            }
		        },
		        splitLine: {
		        	show: true,
		            lineStyle: {
		                color: 'rgba(127,227,246,0.4)',
		            }
		        },
		       // boundaryGap: false, //坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样
		        axisTick: {
	            	color: '#0177d4',
	                show: true
	            },
		        splitArea: {
		            show: false
		        },
		        axisLabel: {
		            inside: false,
		            textStyle: {
		                color: '#fff',
		                fontWeight: 'normal',
		                fontSize: 14
		            },
		        },
    	        data: xDdata
    	    }],
    	    yAxis: [{
    	    	name:'百万元',
				 nameGap:-5,
				 nameTextStyle:{
					padding:[0,0,0,45],
					align:'center',
					color:'#fff',
				},
		    	 type: 'value',
		    	 axisTick: {
		            	color: '#0177d4',
		                show: true
		            },
		         min:250,
		         splitLine: {
		        	 show: false,
		             lineStyle: {
		                 color: '#fff',
		             }
		         },
		         axisLine: {
		                lineStyle: {
		                    color: '#38b8ff'
		                }
	             },
	             axisLabel: {
	            	 	textStyle: {
	                    color: '#ffffff',
	                    fontSize: 14
	                }
	             },
    	    }],
    	    series: [{
    	        name: legend[0],
    	        type: 'line',
    	        smooth: true,
    	        symbol: 'circle',
    	        symbolSize: 6,
    	        showSymbol: true,
    	        lineStyle: {
    	            normal: {
    	                width: 2
    	            }
    	        },
    	        areaStyle: {
    	            normal: {
    	                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    	                    offset: 0,
    	                    color: 'rgba(0,183,255, 0.8)'
    	                },{
    	                    offset: 0.4,
    	                    color: 'rgba(0,183,255, 0.6)'
    	                },{
    	                    offset: 0.8,
    	                    color: 'rgba(0,183,255, 0.0)'
    	                }], false),
    	                shadowColor: 'rgba(0, 0, 0, 0.1)',
    	                shadowBlur: 10
    	            }
    	        },
    	        itemStyle: {
    	            normal: {
    	                color: 'rgb(0,183,255)'
    	            }
    	        },
    	        data: line1
    	    },{
    	        name: legend[1],
    	        type: 'line',
    	        smooth: true,
    	        symbol: 'circle',
    	        symbolSize: 6,
    	        showSymbol: true,
    	        lineStyle: {
    	            normal: {
    	                width: 2
    	            }
    	        },
    	        areaStyle: {
    	            normal: {
    	                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    	                    offset: 0,
    	                    color: 'rgba(255,209,0, 0.8)'
    	                },{
    	                    offset: 0.4,
    	                    color: 'rgba(255,209,0, 0.6)'
    	                },{
    	                    offset: 0.8,
    	                    color: 'rgba(255,209,0, 0.0)'
    	                }], false),
    	                shadowColor: 'rgba(0, 0, 0, 0.1)',
    	                shadowBlur: 10
    	            }
    	        },
    	        itemStyle: {
    	            normal: {
    	                color: 'rgb(255,209,0)',
    	               /* borderColor: 'rgba(255,209,0,0.37)',
    	                borderWidth: 8*/

    	            }
    	        },
    	        data: line2
    	    }]
    	};
    var myChart = echarts.init($('#chart2')[0]);
    myChart.setOption(option);
}

function chart3(data){
	var xDdata = data.content.xAxis;
	var line1 = data.content.data[0];
	var line2 = data.content.data[1];
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
		        //orient: 'vertical',
		        //icon: 'circle',
    	    	x:'center',
    	        top:'5%',
		        itemHeight:13,
		        itemWidth:20,
		        textStyle: {
		            color: '#fff',
		            fontSize: 14
		        },
		        data: legend
		    },
    	    grid: {
    	        left: '3%',
    	        right: '4%',
    	        bottom: '5%',
    	        top:'15%',
    	        containLabel: true
    	    },
    	    xAxis: [{
    	        type: 'category',
    	        axisLine: {
		            lineStyle: {
		            	 color: '#59ebe8',
		            }
		        },
		        splitLine: {
		        	show: true,
		            lineStyle: {
		                color: 'rgba(127,227,246,0.4)',
		            }
		        },
		       // boundaryGap: false, //坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样
		        axisTick: {
	            	color: '#0177d4',
	                show: true
	            },
		        splitArea: {
		            show: false
		        },
		        axisLabel: {
		            inside: false,
		            textStyle: {
		                color: '#fff',
		                fontWeight: 'normal',
		                fontSize: 14
		            },
		        },
    	        data: xDdata
    	    }],
    	    yAxis: [{
		    	 type: 'value',
		    	 axisTick: {
		            	color: '#0177d4',
		                show: true
		            },
		         min:250,
		         splitLine: {
		        	 show: false,
		             lineStyle: {
		                 color: '#fff',
		             }
		         },
		         axisLine: {
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
    	    }],
    	    series: [{
    	        name: legend[0],
    	        type: 'line',
    	        smooth: true,
    	        symbol: 'circle',
    	        symbolSize: 6,
    	        showSymbol: true,
    	        lineStyle: {
    	            normal: {
    	                width: 2
    	            }
    	        },
    	        areaStyle: {
    	            normal: {
    	                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    	                    offset: 0,
    	                    color: 'rgba(0,183,255, 0.8)'
    	                },{
    	                    offset: 0.4,
    	                    color: 'rgba(0,183,255, 0.6)'
    	                },{
    	                    offset: 0.8,
    	                    color: 'rgba(0,183,255, 0.0)'
    	                }], false),
    	                shadowColor: 'rgba(0, 0, 0, 0.1)',
    	                shadowBlur: 10
    	            }
    	        },
    	        itemStyle: {
    	            normal: {
    	                color: 'rgb(0,183,255)'
    	            }
    	        },
    	        data: line1
    	    },{
    	        name: legend[1],
    	        type: 'line',
    	        smooth: true,
    	        symbol: 'circle',
    	        symbolSize: 6,
    	        showSymbol: true,
    	        lineStyle: {
    	            normal: {
    	                width: 2
    	            }
    	        },
    	        areaStyle: {
    	            normal: {
    	                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    	                    offset: 0,
    	                    color: 'rgba(255,209,0, 0.8)'
    	                },{
    	                    offset: 0.4,
    	                    color: 'rgba(255,209,0, 0.6)'
    	                },{
    	                    offset: 0.8,
    	                    color: 'rgba(255,209,0, 0.0)'
    	                }], false),
    	                shadowColor: 'rgba(0, 0, 0, 0.1)',
    	                shadowBlur: 10
    	            }
    	        },
    	        itemStyle: {
    	            normal: {
    	                color: 'rgb(255,209,0)',
    	               /* borderColor: 'rgba(255,209,0,0.37)',
    	                borderWidth: 8*/

    	            }
    	        },
    	        data: line2
    	    }]
    	};
    var myChart = echarts.init($('#chart3')[0]);
    myChart.setOption(option);
}

function chart4(data){
	var xDdata = data.content.xAxis;
	var line = data.content.data[ln-1];
	var name = data.content.name[ln-1];
	var max = Math.max.apply(null, line).toFixed(2);
	var min = (Math.min.apply(null, line)-0.1).toFixed(2);
	if (data.content.yUnit[ln-1]!= '%') {
		max = Math.max.apply(null, line);
		min = Math.min.apply(null, line)-1;
	}
	if(min==0){
		min = 0;
	}
    option = {
    	    tooltip: {
    	        trigger: 'axis',
    	        axisPointer: {
    	            lineStyle: {
    	                color: '#57617B'
    	            }
    	        }
    	    },
    	    grid: {
    	        left: '3%',
    	        right: '4%',
    	        bottom: '8%',
    	        top:'10%',
    	        containLabel: true
    	    },
    	    xAxis: [{
    	        type: 'category',
    	        axisLine: {
		            lineStyle: {
		            	 color: '#59ebe8',
		            }
		        },
		        splitLine: {
		        	show: true,
		            lineStyle: {
		                color: 'rgba(127,227,246,0.4)',
		            }
		        },
		       // boundaryGap: false, //坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样
		        axisTick: {
	            	color: '#0177d4',
	                show: true
	            },
		        splitArea: {
		            show: false
		        },
		        axisLabel: {
		            inside: false,
		            textStyle: {
		                color: '#fff',
		                fontWeight: 'normal',
		                fontSize: 14
		            },
		        },
    	        data: xDdata
    	    }],
    	    yAxis: [{
    	    	name:data.content.unit[ln-1],
				 nameGap:-5,
				 nameTextStyle:{
					padding:[0,0,0,20],
					align:'center',
					color:'#fff',
				},
				max:max,
				min:min,
		    	 type: 'value',
		    	 axisTick: {
		            	color: '#0177d4',
		                show: true
		            },
		         splitLine: {
		        	 show: false,
		             lineStyle: {
		                 color: '#fff',
		             }
		         },
		         axisLine: {
		                lineStyle: {
		                    color: '#38b8ff'
		                }
	             },
	             axisLabel: {
	            	 	textStyle: {
	                    color: '#ffffff',
	                    fontSize: 14
	                },
	                formatter: '{value}'+data.content.yUnit[ln-1]
	             },
    	    }],
    	    series: [{
    	        name: name,
    	        type: 'line',
    	        smooth: true,
    	        symbol: 'circle',
    	        symbolSize: 6,
    	        showSymbol: true,
    	        lineStyle: {
    	            normal: {
    	                width: 2
    	            }
    	        },
    	        areaStyle: {
    	            normal: {
    	                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    	                    offset: 0,
    	                    color: 'rgba(0,183,255, 0.8)'
    	                },{
    	                    offset: 0.4,
    	                    color: 'rgba(0,183,255, 0.6)'
    	                },{
    	                    offset: 0.8,
    	                    color: 'rgba(0,183,255, 0.0)'
    	                }], false),
    	                shadowColor: 'rgba(0, 0, 0, 0.1)',
    	                shadowBlur: 10
    	            }
    	        },
    	        itemStyle: {
    	            normal: {
    	                color: 'rgb(0,183,255)',

    	            }
    	        },
    	        data: line
    	    }]
    	};
    var myChart = echarts.init($('#chart4')[0]);
    myChart.setOption(option);
    ln++;
}
