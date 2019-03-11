/**
 * ag-charts基类
 */
;(function (gloabal, fun) {
	if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
		module.exports = fun();
	} else if (typeof define === 'function'
		&& (typeof define.amd === 'object' || typeof define.cmd === 'object')) {
		define(fun);
	} else {
		gloabal.agChart = fun();
	}
})(window, function (chart) {
	'use strict';

	chart = {
		// 散点图
		scatter: {},
		// 折线图
		line: {
			line: null,
			lines: null,
			line_and_bar: null,
			area: null
		},
		// 柱图
		bar: {
			single:null,
			columns: null,
			stack_bar: null,
			positive_negative: null,
			positive_negative_bar: null,
			positive_negative_black: null
		},
		// 饼图
		pie: {},
		// 雷达图
		radar: {},
		// 气泡
		bubble: {
			bubbles: null
		},
		// 烛形图
		candlestick: {},
		// 关系图
		graph: {},
		// 树状图
		tree: {},
		// 矩形树图
		treemap: {},
		// 平行坐标
		parallel: {},
		// 桑基图
		sankey: {},
		// 漏斗图
		funnel: {},
		// 仪表盘
		gauge: {},
		// 地图
		map: {
			fujian: null,
			china: null,
			world: null,
			worldBubble: null
		},
		// 地球
		earth: {
			gl: null
		}
	};

	chart.common = {
		init: function () {

		},
		resize: function () {
			this.resize();
		},
		getElement: function (el) {
			if (!el) return;
			if (typeof el === "string") {
				var dom = document.querySelector(el);
				if (!dom) {
					throw new Error("图表: " + this.name + " 图表的选择器名称" + el + "无效");
				}
				return dom;
			} else if (el instanceof HTMLElement) {
				return el;
			}
		}
	};

	return chart;
});
