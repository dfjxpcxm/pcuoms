/*
 * 柱图
 * 描述: 正负轴的图表
 */
;(function (global, fun) {
	if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
		module.exports = fun();
	} else if (typeof define === 'function'
		&& (typeof define.amd === 'object' || typeof define.cmd === 'object')) {
		define(fun);
	} else {
		global.agChart.bar.positive_negative = fun();
	}
})(window, function () {
	'use strict';

	function chart() {

		this.single = null;

		this.option = {
			color: ["#d500f9", "#fb5623"],
			//标题
			title: {
				show: false
			},
			//网格
			grid: {
				top: '50',
				left: '60',
				right: '60',
				bottom: '40'
			},
			// //图例
			legend: {
				icon: 'circle',
				top: 5,
				right: 90,
				data: [],
				itemGap: 18,
				textStyle: {
					color: '#fff',
					fontSize: 12
				},
				itemWidth: 14,
				itemHeight: 14
			},
			//提示框
			tooltip: {
				trigger: 'axis',
				alwaysShowContent: true,
				axisPointer: {
					type: 'shadow',
					shadowStyle: {
						color: "rgba(169,176,239,0.1)"
					}
				},
				transitionDuration: 0.15,
				backgroundColor: 'rgba(14,22,79,0.9)',
				borderColor: '#000',
				borderWidth: 1,
				borderRadius: 5,
				textStyle: {
					color: "#fff",
					fontSize: 11
				},
				padding: [8, 15],
				formatter: function(params, ticket, callback) {
					// params[2].value =  Math.abs(params[2].value);
					// params[3].value =  Math.abs(params[3].value);
					// console.log("params", params);
					return params[0].axisValue + '<br> '
						+ '<div class="chart-tooltip-item">'
						+ '<i class="chart-tooltip-icon blue">&nbsp;</i>&nbsp;&nbsp;'
						+ params[0].seriesName + '&nbsp;&nbsp;'
						+  params[0].value + '万美元' + "<br>"
						+ '</div>'

						// + '<div class="chart-tooltip-item">'
						// + '<i class="chart-tooltip-icon purple">&nbsp;</i>&nbsp;&nbsp;'
						// +  (params[2].data.contrast === "up" ? '增幅' : '减幅') + '&nbsp;&nbsp;'
						// +  (params[1].data.contrast === "up" ? 1 : -1) * params[1].value  + '%' + "<br>"
						// + '</div>'

						+ '<div class="chart-tooltip-item">'
						+ '<i class="chart-tooltip-icon teal">&nbsp;</i>&nbsp;&nbsp;'
						+ params[1].seriesName + '&nbsp;&nbsp;'
						+  Math.abs(params[1].value) + '万美元' + "<br>"
						+ '</div>'

						// + '<div class="chart-tooltip-item">'
						// + '<i class="chart-tooltip-icon red">&nbsp;</i>&nbsp;&nbsp;'
						// +  (params[2].data.contrast === "up" ? '增幅' : '减幅') + '&nbsp;&nbsp;'
						// +  (params[3].data.contrast === "up" ? 1 : -1) * params[1].value  + '%' + "<br>"
						// + '</div>';
				}
			},
			//x轴
			xAxis: {
				type: 'category',
				data: null,
				splitLine: {
					show: false
				},
				axisLine: {
					lineStyle: {
						color: '#efefef',
						type: 'solid'
					}
				},
				axisTick: {
					show: false
				},
				axisLabel: {
					color: '#fff',
					fontSize: '12'
				}
			},
			//y轴
			yAxis: [
				{
					name: '',
					nameTextStyle: {
						color: "#fff"
					},
					type: 'value',
					splitLine: {
						show: false
					},
					axisLine: {
						show: false
					},
					axisTick: {
						show: false
					},
					axisLabel: {
						color: '#fff',
						fontSize: '12',
						formatter: function (value, index) {
							return Math.abs(value * 1);
						}
					},
					scale: true
				},
				{
					name: '',
					nameTextStyle: {
						color: "#fff"
					},
					type: 'value',
					splitLine: {
						show: false
					},
					axisLine: {
						show: false
					},
					axisTick: {
						show: false
					},
					axisLabel: {
						color: '#fff',
						fontSize: '12',
						formatter: function (value, index) {
							return Math.abs(value * 1) + "%";
						}
					},
					scale: true
				}
			],
			//系列列表
			series: [
				{
					name: '',
					data: null,
					type: 'bar',
					barWidth: 26,
					barGap: "-100%",
					itemStyle: {
						normal: {
							barBorderRadius: [60, 60, 0, 0],
							shadowColor: 'rgba(0, 0, 0, 0.5)',
							shadowBlur: 10,
							color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
								[
									{offset: 0, color: '#71aaff'},
									{offset: 1, color: '#1720c7'}
								]
							)
						}
					}
				},
				{
					name: '',
					data: null,
					type: 'line',
					smooth: true,
					yAxisIndex: 1,
					lineStyle: {
						width: 3,
						color: "#d500f9",
						type: "dotted",
						shadowColor: 'rgba(0, 0, 0, 1)',
						shadowBlur: 4,
						shadowOffsetY: 4
					},
					itemStyle: {
						opacity: 0
					},
					z: 3
				},
				{
					name: '',
					data: null,
					type: 'bar',
					barWidth: 26,
					barGap: "-100%",
					itemStyle: {
						normal: {
							barBorderRadius: [0, 0, 60, 60],
							shadowColor: 'rgba(0, 0, 0, 0.5)',
							shadowBlur: 10,
							color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
								[
									{offset: 0, color: '#0091ea'},
									{offset: 1, color: '#80eab4'}
								]
							)
						}
					}
				},
				{
					name: '',
					data: null,
					type: 'line',
					smooth: true,
					yAxisIndex: 1,
					lineStyle: {
						width: 3,
						color: "#ff5722",
						type: "dotted",
						shadowColor: 'rgba(0, 0, 0, 1)',
						shadowBlur: 4,
						shadowOffsetY: 4
					},
					itemStyle: {
						opacity: 0
					},
					z: 3
				}
			]
		};

		this.init = function (el, style, data) {
			this.single = echarts.init(this.getElement(el));
			this.single.clear();
			this.setData(data);
			this.single.setOption(this.option);
		};

		this.setData = function (data) {
			var option = this.option;

			option.xAxis.data = data.xAxis;
			option.title.text = data.title;
			option.legend.data = data.legend;

			option.yAxis[0].name = data.unit[0];
			// option.yAxis[1].name = data.unit[1];

			option.series[0].name = data.legend[0];
			option.series[0].data = data.data[0];

			// option.series[1].name = data.legend[1];
			// option.series[1].data = data.data[1];

			option.series[2].name = data.legend[2];
			// option.series[2].data = data.data[2];
			option.series[2].data = data.data[2].map(function(v) {
				return -(v);	// 需要改成负值
			});

			// option.series[3].name = data.legend[3];
			// option.series[3].data = data.data[3];
		};

		this.setStyle = function () {

		};

		this.resize = function () {
			this.single.resize();
		};
	}

	chart.prototype = agChart.common;
	chart.prototype.constructor = chart;

	return new chart();
});
