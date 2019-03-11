$(document).ready(function(){
	getdata('/statecn/trade/development/chart4.json',chart4);
	chart2();
	//chart3();
	setInterval(function() {
		chart2();
	  }, 30000);
});
var color = ['rgb(255,40,0)','rgb(251,108,81)','rgb(186,79,59)','rgb(215,144,131)','rgb(251,184,172)',
             'rgb(255,0,181)','rgb(244,105,204)','rgb(243,172,223)','rgb(191,110,167)',
             'rgb(191,0,255)','rgb(203,88,242)','rgb(221,146,246)','rgb(145,0,255)','rgb(206,153,247)',
             'rgb(91,0,255)','rgb(7,0,255)','rgb(79,74,243)','rgb(109,105,247)','rgb(73,131,249)','rgb(123,162,242)',
             'rgb(0,145,255)','rgb(94,183,249)','rgb(69,186,239)','rgb(0,206,255)','rgb(122,223,247)','rgb(178,230,242)',
             'rgb(36,229,243)','rgb(0,255,219)','rgb(0,255,173)','rgb(0,255,119)','rgb(0,255,51)','rgb(61,179,15)',
             'rgb(163,255,0)','rgb(224,255,0)','rgb(228,240,137)','rgb(255,232,0)','rgb(255,209,0)',
             'rgb(255,178,0)','rgb(229,187,89)','rgb(255,132,0)','rgb(246,202,155)','rgb(170,110,44)',
             'rgb(255,94,0)','rgb(255,63,0)','rgb(226,203,196)','rgb(241,244,247)'];


function RandomNum(Min,Max){
	var Range = Max - Min;
	var Rand = Math.random();  
	var num = Min + Math.round(Rand * Range);
	return num;
	}

function chart2(){
	var worldCloudcharts=echarts.init(document.getElementById('chart2'));
		var worldCloudoption = {
			    tooltip: {
			        show: true
			    },
			   grid: {
			    	left: '2%',
			    	right: '2%',
			    	top: '6%',
			    	bottom:'6%'
			   },
			   series: [{
			        type: 'wordCloud',
			 
			        shape: 'circle',
			 
			        left: 'center',
			        top: 'center',
			        width: '70%',
			        height: '80%',
			        right: null,
			        bottom: null,
			 
			        sizeRange: [12, 30],
			 
			        rotationRange: [-90, 90],
			        rotationStep: 90,
			 
			        gridSize: 4,
			        drawOutOfBound: false,
			        textStyle: {
			            normal: {
			                fontFamily: 'sans-serif',
			                fontWeight: 'bold',
			                // Color can be a callback function or a color string
			                color: function () {
			                    // Random color
			                    return color[RandomNum(0,45)];
			                    
			                    /*'rgb(' + [
			                        Math.round(Math.random() * 160),
			                        Math.round(Math.random() * 160),
			                        Math.round(Math.random() * 160)
			                    ].join(',') + ')';*/
			                }
			            },
			            emphasis: {
			                shadowBlur: 1000000000,
			                shadowColor: '#333'
			            }
			        },
			 
			        // Data is an array. Each array item must have name and value property.
			        data: [{"name":"蒙牛乳业","value":30},
			               {"name":"大禹节水","value":30},
			               {"name":"阿里巴巴","value":29},
			               {"name":"立邦","value":29},
			               {"name":"一汽大众","value":28},
			               {"name":"京东","value":28},
			               {"name":"北汽集团","value":26},
			               {"name":"当当网","value":26},
			               {"name":"聚美优品","value":25},
			               {"name":"中大集团","value":24},
			               {"name":"医药网","value":24},
			               {"name":"博纳","value":23},
			               {"name":"默泰克","value":22},
			               {"name":"法雷奥","value":21},
			               {"name":"都市丽人","value":21},
			               {"name":"奥卡冷却","value":20},
			               {"name":"中科院化学所","value":20},
			               {"name":"盛诺电子","value":20},
			               {"name":"北京地平线","value":20},
			               {"name":"海拉车灯","value":24},
			               {"name":"世侨总部","value":20},
			               {"name":"AMB","value":19},
			               {"name":"友昌集团","value":18},
			               {"name":"蓝色光标","value":18},
			               {"name":"智通机器人","value":17},
			               {"name":"神州泰岳","value":21},
			               {"name":"德资菲索玛特","value":17},
			               {"name":"凌天世纪","value":16},
			               {"name":"触动传媒","value":16},
			               {"name":"北京内燃机","value":16},
			               {"name":"中国石油大学","value":16},
			               {"name":"美国凡士通","value":15},
			               {"name":"本特勒","value":15},
			               {"name":"华贸环保","value":15},
			               {"name":"中国建筑研究总院","value":15},
			               {"name":"保光天津科技","value":13},
			               {"name":"中润信能源","value":12},
			               {"name":"天津威猛","value":12},
			               {"name":"同锐科技有限公司","value":12},
			               {"name":"中启智能科技","value":12},
			               {"name":"天津创诺","value":11},
			               {"name":"天津小猫咪","value":11},
			               {"name":"西马力","value":11},
			               {"name":"天津江风科行文化传播","value":11},
			               {"name":"中科院化学研究所","value":10},
			               {"name":"三惠食品物流","value":10},
			               {"name":"鑫金亨立塑粉","value":10},
			               {"name":"天津超威新能源科技","value":10},
			               {"name":"天津海顺科技","value":10},
			               {"name":"中冷天成科技","value":10},
			               {"name":"博思特","value":9},
			               {"name":"天津盛诺","value":9},
			               {"name":"宝丰医药","value":9},
			               {"name":"天津华富","value":9},
			               {"name":"天津策源房地产经纪","value":9},
			               {"name":"天津润驰商务信息","value":9},
			               {"name":"天津中宇环保","value":9},
			               {"name":"华鑫道（天津）服务外包","value":9},
			               {"name":"天津恒影文化传媒","value":9},
			               {"name":"天津星动锐力文化传播","value":9},
			               {"name":"天津大门影视","value":9},
			               {"name":"天津铁头娱文化传播","value":9},
			               {"name":"北京化工大学","value":9},
			               {"name":"驰疆","value":9},
			               {"name":"智造宝","value":9},
			               {"name":"厦门钨业高端数控刀具","value":9}]
			        	
			    }]
			};
		worldCloudcharts.setOption(worldCloudoption);
}

function chart3(data){
	var data = [
	            {"value": 5.93, "name": "智能制造"}, {"value":  6.07, "name": "现代服务"}, {"value": 11.02,"name": "电商物流"},
	            {"value": 9.92, "name": "精密制造 "}, {"value": 9.57, "name": "能源装备"}, {"value": 2.34,"name": "新材料"},
	            {"value": 1.86, "name": "科研孵化"}
	        ];
	        var data_name = ['智能制造','现代服务','电商物流','精密制造','能源装备','新材料','科研孵化'];
	       
	        option = {
	            tooltip: {
	                trigger: 'item',
	                formatter: "{b}"
	            },
	            color: ['#2edfa3', '#bce672', '#ff4777', '#70f3ff', '#4b5cc4', '#f47983', '#8d4bbb', '#6635EF', '#FFAFDA'],
	            legend: {
			        orient: 'vertical',
			        //icon: 'circle',
			        right:'10%',
			        top:'center',
			        itemGap: 17,
			        itemHeight:14,
			        itemWidth:24,
			        textStyle: {
	                    color: "#fff",
	                    fontWeight:'normal',
	                    fontSize: 16,
	                    fontFamily:'微软雅黑'
	                },
	                data:data_name,
			    },
	            series: [

	                {
	                    name:'',
	                    type:'pie',
	                    radius: ['30%', '55%'],
	                    center:['40%','50%'],
	                    data:data,
	                    labelLine: {
	                        normal: {
	                            show: false
	                        }
	                    },
	                    label: {
			                normal: {
			                    show: true,
			                    //position: 'inner',
			                    formatter: "{b}: {c} 亿元 \n占比：{d} %",
			                    textStyle: {
			                        color: '#fff',
			                        fontWeight: 'normal',
			                        fontSize: 14
			                    }
			                }
			            },
			            labelLine: {
			                normal: {
			                    show: true,
			                    lineStyle: {
			                        type: 'dashed',
			                        width: 2
			                    }
			                }
			            }
	                }
	            ]
	        };
    var myChart = echarts.init($('#bottom21')[0]);
    myChart.setOption(option);
}

function chart4(data){
	var xDdata = data[0];
	var bar1 = data[1];
	var bar2 = data[2];
	var bar3 = data[3];
	var legend = data[4];
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
		            top : '4%',
		            right:'3%',
		            itemGap: 12, //图例每项之间的间隔
		            itemWidth: 16, //图例宽度
		            itemHeight: 8, //图例高度
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
		   			  top:'20%',
		   			  bottom:'6%',
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
		            	interval: 0,
		            	//rotate: 30,
		                textStyle: {
		                    color: '#ffffff',
		                    fontSize: 14
		                }
		            },
			        data:xDdata
			    },
			    yAxis: [{
			    	name: '亿元',
					 nameGap:1,
					 nameTextStyle:{
						padding:[0,0,0,20],
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
			    }/*,{
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
			    }*/],
			    series: [
					{
						name:legend[0],
					    type:"bar",
					    barWidth: '20%',
					    itemStyle: {
					        normal: {
					            color: '#007aff',
					            //barBorderRadius: 15,
					        }
					    },
					    // barWidth: 7,
					    data: bar1
					},{
						name:legend[1],
					    type:"bar",
					    barWidth: '20%',
					    itemStyle: {
					        normal: {
					            color: '#00e5ff',
					            //barBorderRadius: 15,
					        }
					    },
					    // barWidth: 7,
					    data: bar2
					},{
						name:legend[2],
					    type:"bar",
					    barWidth: '20%',
					    itemStyle: {
					        normal: {
					            color: '#D5C308',
					            //barBorderRadius: 15,
					        }
					    },
					    // barWidth: 7,
					    data: bar3
					}]
			};
    var myChart = echarts.init($('#chart4')[0]);
    myChart.setOption(option);
}

