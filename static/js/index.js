var Alert = require('../modules/alert.js'); //引入了弹窗插件
var Echarts = require('../modules/echarts.js'); //引入了echarts

// Alert.show({
// 	content: 'change'
// })

var app = new Vue({
	el: '#v-index',
	data: {
		message: {
			header: '我是头部',
			body: '这是demo页面body',
			footer: '我是尾部'
		}
	},
	methods: {
		alertShow: function(){
			Alert.show({
				title: '系统提示',//非必须
				content: '我是弹窗alert'
			})
		},
		alertConfirm: function(){
			Alert.show({
				title: '系统提示',//非必须
				type: 'confirm',
				content: '确定要提交吗?',
				sureBtnText: "提交",
				sure: function(){
					Alert.hide();
					$("#loadingToast").show();
					setTimeout(function(){
						$("#loadingToast").hide();
						Alert.show({
							content: '提交成功',
							sureBtnText: '关闭'
						})
					},600);
				}
			})
		}
	}
});

// Chart
			// 基于准备好的dom，初始化echarts实例
			 var barChart = Echarts.init(document.getElementById('active'));
			 var radarChart = Echarts.init(document.getElementById('grades'));
			 // 指定图表的配置项和数据
			 var option1 = {
					//  title: {
					// 		 text: 'ECharts 入门示例'
					//  },
					backgroundColor:"#fff",
					itemStyle: {
						    normal: {
						        // 设置柱的颜色
						        color: '#27AE60',
						    }
						},
					 tooltip: {},
					 legend: {
							 data:['活跃度']
					 },
					 xAxis: {
							 data: ["09/11","09/12","09/13","09/13","09/14","09/15"]
					 },
					 yAxis: {},
					 series: [{
							 name: '活跃度',
							 type: 'bar',
							 data: [1, 3, 5, 6, 2, 1]
					 }]
			 };
			var option2 = {
						backgroundColor:"#fff",
						radar: [
		         {
		             indicator: [
		                 { text: '指标一' },
		                 { text: '指标二' },
		                 { text: '指标三' },
		                 { text: '指标四' },
		                 { text: '指标五' }
		             ],
		             radius: 90,
		             startAngle: 90,
		             splitNumber: 4,
		             shape: 'circle',
		             name: {
		                 formatter:'【{value}】',
		                 textStyle: {
		                     color:'#72ACD1'
		                 }
		             },
		             splitArea: {
		                 areaStyle: {
		                     color: ['rgba(114, 172, 209, 0.2)',
		                     'rgba(114, 172, 209, 0.4)', 'rgba(114, 172, 209, 0.6)',
		                     'rgba(114, 172, 209, 0.8)', 'rgba(114, 172, 209, 1)'],
		                     shadowColor: 'rgba(0, 0, 0, 0.3)',
		                     shadowBlur: 10
		                 }
		             },
		             axisLine: {
		                 lineStyle: {
		                     color: 'rgba(255, 255, 255, 0.5)'
		                 }
		             },
		             splitLine: {
		                 lineStyle: {
		                     color: 'rgba(255, 255, 255, 0.5)'
		                 }
		             }
		         },
     ],
     series: [
         {
             name: '雷达图',
             type: 'radar',
             itemStyle: {
                 emphasis: {
                     // color: 各异,
                     lineStyle: {
                         width: 4
                     }
                 }
             },
             data: [
                 {
                     value: [100, 8, 0.40, -80, 2000],
                     name: '图一',
                     symbol: 'rect',
                     symbolSize: 5,
                     lineStyle: {
                         normal: {
                             type: 'dashed'
                         }
                     }
                 },
                 {
                     value: [60, 5, 0.30, -100, 1500],
                     name: '图二',
                     areaStyle: {
                         normal: {
                             color: 'rgba(255, 255, 255, 0.5)'
                         }
                     }
                 }
             ]
         },
     ]
		};
			 // 使用刚指定的配置项和数据显示图表。
			 barChart.setOption(option1);
			 radarChart.setOption(option2);
