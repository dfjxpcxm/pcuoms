/*
 * 地球
 * 描述: 3D地球
 */
;(function (global, fun) {
	if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
		module.exports = fun();
	} else if (typeof define === 'function'
		&& (typeof define.amd === 'object' || typeof define.cmd === 'object')) {
		define(fun);
	} else {
		global.agChart.earth.gl = fun();
	}
})(window, function () {
	'use strict';

	var geoCoordMap = {};

	function chart() {

		this.single = null;

		this.init = function (el, style, data, pointsData) {
			// 构建地图
			var canvas = document.createElement('canvas');
			var mapChart = echarts.init(canvas, null, {width: 4096, height: 2048});
			mapChart.setOption({
				backgroundColor: '#333',
				visualMap: {
					show: false,
					min: 0,
					max: 100000,
					inRange: {
						color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
					}
				},
				series : [
					{
						type: 'map',
						map: 'world',
						environment: "#000",
						itemStyle: {
							areaColor: '#333'
						},
						emphasis: {
							label: {
								color: "#fff"
							},
							itemStyle: {
								areaColor: '#fb5623',
								color: "fff"
							}
						},
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						// center: [190.97, 25.71],	// 中国
						boundingCoords: [[-180, 90], [180, -90]],
						data:[]
					}
				]
			});
			// 正常配置
			var option = this.option = {
				// backgroundColor: 'transparent',
				globe: {
					// baseTexture: mapChart,			// 纹理
					baseTexture: '../static/js/glChart/earth/base-texture.jpg',			// 纹理
					//baseTexture: './components/charts/earth/bathymetry_bw_composite_4k.jpg',			// 纹理
					//heightTexture: './components/charts/earth/bathymetry_bw_composite_4k.jpg', // 高度纹理

					shading: 'color',		// 着色效果
					displacementScale: 0.1,

					// shading: 'lambert',

					postEffect: {			  // 后处理特效
						enable: false,
						bloom: {					// 高光特效(光晕)
							enable: false,
							bloomIntensity: 0.1
						},
						depthOfField: {		// 景深效果
							enable: false
						},
						SSAO: {						// 屏幕空间的环境光遮蔽效果
							enable: false
						}
					},

					viewControl: {								// 用于鼠标的旋转，缩放等视角控制
						projection: 'perspective',		// 投影方式，默认为透视投影'perspective'，也支持设置为正交投影'orthographic'。
						autoRotate: false,						// 是否开启视角绕物体的自动旋转查看
						autoRotateSpeed: 3,					// 物体自传的速度。单位为角度 / 秒
						autoRotateAfterStill: 0.2,	// 在鼠标静止操作后恢复自动旋转的时间间隔
						zoomSensitivity: 3,					// 缩放操作的灵敏度，设置为0后无法缩放
						distance: 200,									// 默认视角距离主体的距离
						// 定位到北京
						// targetCoord: [116.46, 39.92]
						targetCoord: [104.99096, 12.56568] // 柬埔寨
					},
					globeRadius: 100
				},
				series: [
					{
						type: 'lines3D',
						coordinateSystem: 'globe',
						blendMode: 'lighter',					// 该模式可以让数据集中的区域因为叠加而产生高亮的效果。
						lineStyle: {
							width: 1,
							color: 'rgb(41, 121, 255)',
							opacity: 1
						},
						effect: {
							show: true
						},
						data: []
					},
					{
						type: 'lines3D',
						coordinateSystem: 'globe',
						blendMode: 'lighter',					// 该模式可以让数据集中的区域因为叠加而产生高亮的效果。
						lineStyle: {
							width: 1,
							color: 'rgb(105, 240, 174)',
							opacity: 1
						},
						effect: {
							show: true
						},
						data: []
					},
					{
						type: 'scatter3D',
						coordinateSystem: 'globe',
						blendMode: 'lighter',					// 该模式可以让数据集中的区域因为叠加而产生高亮的效果。
						symbolSize: 10,
						itemStyle: {
							color: 'red',
							opacity: 1
						},
						label: {
							formatter: '{b}'
						},
						emphasis: {
							label: {
								show: true
							}
						},
						data: []
					}
				]
			};
			this.single = echarts.init(this.getElement(el));
			this.setData(data, pointsData);
			this.single.setOption(this.option);

			// 监听

			mapChart.on('click', function (params, a) {
				console.log('click', params, a);
			});

			mapChart.on('mouseover', function (params, a) {
				console.log('mouseover', params);
			});

			mapChart.on('mouseout', function (params, a) {
				console.log('mouseout', params);
			});

		};

		this.setData = function (data, pointsData) {
			var option = this.option;

			geoCoordMap = data.geoCoordMap;

			// 节点
			// option.series[2].data = data.node.map(function (v) {
			// 	return {
			// 		name: v, value: (data.geoCoordMap[v]).concat([0])
			// 	}
			// });
			for(var i = 0; i < data.node.length; i++) {
				var v = data.node[i];
				var arr = data.geoCoordMap[v];
				if (arr && arr.length === 2) {		// 过滤经纬度坐标缺失情况
					option.series[2].data.push({
						name: v, value: arr.concat([0])
					})
				}
			}
			// 连线
			// option.series[0].data = data.importation.map(function (v) {
			// 	var item = {
			// 		name: '',
			// 		from: v.from,
			// 		to: v.to,
			// 		value: v.value,
			// 		coords: [
			// 			data.geoCoordMap[v.from],  // 起点
			// 			data.geoCoordMap[v.to]   	 // 终点
			// 		]
			// 	};
			// 	return item;
			// });
			for(var i = 0; i < data.importation.length; i++) {
				var v = data.importation[i];
				var source = data.geoCoordMap[v.from];
				var target = data.geoCoordMap[v.to];
				if (source && source.length === 2 && target && target.length === 2) {		// 过滤经纬度坐标缺失情况
					option.series[0].data.push({
						name: '',
						from: v.from,
						to: v.to,
						value: v.value,
						coords: [
							source,  // 起点
							target   	 // 终点
						]
					})
				}
			}

			// 连线
			// option.series[1].data = data.exportation.map(function (v) {
			// 	var item = {
			// 		name: '',
			// 		from: v.from,
			// 		to: v.to,
			// 		value: v.value,
			// 		coords: [
			// 			data.geoCoordMap[v.from],  // 起点
			// 			data.geoCoordMap[v.to]   	 // 终点
			// 		]
			// 	};
			// 	return item;
			// });
			for(var i = 0; i < data.exportation.length; i++) {
				var v = data.exportation[i];
				var source = data.geoCoordMap[v.from];
				var target = data.geoCoordMap[v.to];
				if (source && source.length === 2 && target && target.length === 2) {		// 过滤经纬度坐标缺失情况
					option.series[1].data.push({
						name: '',
						from: v.from,
						to: v.to,
						value: v.value,
						coords: [
							source,  // 起点
							target   	 // 终点
						]
					})
				}
			}

			// option.series[0].data = data;
			// option.series[1].data = data;
			// option.series[2].data = pointsData;
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
