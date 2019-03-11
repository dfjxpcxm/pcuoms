/*
 * 世界地图
 */
;(function (global, fun) {
	if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
		module.exports = fun();
	} else if (typeof define === 'function'
		&& (typeof define.amd === 'object' || typeof define.cmd === 'object')) {
		define(fun);
	} else {
		global.agChart.map.tianjin = fun();
	}
})(window, function () {
	'use strict';

	var geoCoordMap = {};
	var edge = [];
	var unit = [];
	var maxValue = 0;
	var minValue = 9223372036854775808;

	function formatter(params, ticket, callback) {
		// console.log("params", params);
		//取得当期节点
		var name = params.name;
		// 取得当期节点的所有出访
		var visit = edge.filter(function (v) {
			return v.from === name
		});
		if (visit.length === 0) {
			return;
		}
		// 组装
		var str = '';
		for (var i = 0; i < visit.length; i++) {
			var v = visit[i];
			var s = '<div class="chart-tooltip-visit-item">'
				+ '<p><i class="chart-tooltip-visit-icon teal">&nbsp;</i> ' + v.date + ' ' + v.from + ' 出访 ' + v.to + '</p>'
				+ '<p>' + v.summary + '</p>'
				+ '</div>';

			str += s;
		}
		return '<div class="chart-tooltip-visit-container">' + str + '</div>';
	}

	function chart() {

		this.single = null;

		this.init = function (el, style, data) {
			this.single = echarts.init(this.getElement(el));
			this.single.clear();



			var option = {
				backgroundColor: "transparent",
				// // //网格
				// grid: {
				// 	top: '40',
				// 	left: '40',
				// 	right: '200px',
				// 	bottom: '40'
				// },
				tooltip: {
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
					formatter: function (params, ticket, callback) {
						// console.log("params", params);
						return params.name + '&nbsp;&nbsp;'  + "<br>"
							+ params.value[2] + ' ' + unit[0]
					}
				},
				visualMap: [
					{
						type: 'continuous',
						min: 0,
						max: 3000,
						left: 20,
						text: ['高', '低'],
						textStyle: {
							color: '#fff'
						},
						realtime: false,
						calculable: true,
						color: [
							"rgb(199,230,204)",
							"rgb(41,221,252)",
							"rgb(29,176,206)",
							"rgb(38,199,224)",
							"rgb(38,222,253)",
							"rgb(25,145,206)",
							"rgb(24,137,207)",
							"rgb(20,106,189)",
							"rgb(16,83,177)",
							"rgb(14,70,189)",
							"rgb(12,60,177)",
							"rgb(10,67,171)"
						],
						// controller: {
						// 	outRange: {}
						// }
					}
				],
				geo: {
					show: true,
					map: 'tianjin',
					roam: true,
					zoom: 1,
					scaleLimit: {
						min: 0.9,
						max: 5
					},
					// aspectScale: ''
					top: "30px",
					// left: 0,
					// right: "20px",
					 bottom: "0px",
//					center: [118.026239, 25.905302],

						center: [117.304443,39.320769],
					label: {
						show: true,
						color: "#fff"
					},
					itemStyle: {
						areaColor: '#07132b',
						borderColor: '#09fcff',
						borderWidth: 2,
						shadowColor: 'rgba(51,174,244,0.35)',
						shadowBlur: 24
					},
					emphasis: {
						label: {
							show: true,
							color: "#fff"
						},
						itemStyle: {
							borderColor: '#09fcff',
							areaColor: '#0a3377',
							color: "fff"
						}
					}
				},
				series: [
					// 气泡
					{
						name: '天津市',
						type: 'effectScatter',
						zlevel: 3,
						coordinateSystem: 'geo',
						symbolSize: function (v) {
							// 最大尺寸是 50, 最小尺寸10
							var size = Math.round(50 * v[2] / maxValue);
							return size < 10 ? 10 : size;
						},
						data: []
						// tooltip: {
						// 	show: true,
						// 	alwaysShowContent: true,		// 是否永远显示提示框内容
						// 	transitionDuration: 0.15,
						// 	backgroundColor: 'rgba(0,0,0,0.9)',
						// 	borderColor: '#000',
						// 	borderWidth: 1,
						// 	borderRadius: 5,
						// 	textStyle: {
						// 		color: "#fff",
						// 		fontSize: 11
						// 	},
						// 	padding: [8, 15],
						// 	formatter: formatter
						// }
					},
				]
			};


			this.setData(data, option);
			this.single.setOption(option);

			// 监听
			// mapChart.on('click', function (params, a) {
			// 	console.log('click', params, a);
			// });
			//
			// mapChart.on('mouseover', function (params, a) {
			// 	console.log('mouseover', params);
			// });
			//
			// mapChart.on('mouseout', function (params, a) {
			// 	console.log('mouseout', params);
			// });

		};

		this.setData = function (data, option) {

			geoCoordMap = data.geoCoordMap;
			// edge = data.edge;
			unit = data.unit;

			// 节点
			maxValue = 0;
			minValue = 9223372036854775808;
			data.node.forEach(function (n) {
				maxValue = Math.max(maxValue, n.value);
				minValue = Math.min(minValue, n.value);
			});

			option.visualMap[0].max = maxValue;
			option.visualMap[0].min = minValue;

//			console.log(option.visualMap.max, option.visualMap.min);

			option.series[0].data = data.node.map(function (n) {
				var arr = data.geoCoordMap[n.name];
				arr.push(n.value);
				return {
					name: n.name, value: arr
				}
			});


			// 连线
			// option.series[1].data = data.edge.map(function(v) {
			// 	var item = {
			// 		name: '',
			// 		date: v.date,
			// 		from: v.from,
			// 		to: v.to,
			// 		summary: v.summary,
			// 		value: v.value,
			// 		coords: [
			// 			data.geoCoordMap[v.from],  // 起点
			// 			data.geoCoordMap[v.to]   	 // 终点
			// 		]
			// 	}
			// 	return item;
			// });
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
