require.config({
    paths: {
        echarts: './js/echart/dist'
    }
});
require(
    [
        'js/echart/echarts.min',//原本的echarts有问题，后来换了一个
        'echarts/chart/line'
    ],
    function (ec) {
        var myChart = ec.init(document.getElementById('main'));
        var option = {
           	tooltip : {
		        trigger: 'axis'
		    },
		    legend: {
		       icon: 'circle',
		       textStyle:{
		        	color:'#fff',
		        	fontSize: 20
		        },
		        data:['出租车','网约车','总量']
		    },
		    grid:{
		    	x:130,
    	    	y:50,
    	    	x2:120,
    	    	y2:50
		    },
		    calculable : true,
		    xAxis : [
		        {
		            type : 'category',
		            boundaryGap : false,
			        axisLine: {
				        show: true , //x轴
				        lineStyle:{
				            color:'#fff'
				        }
				    },
			        axisLabel: {
			            show: true,
			            textStyle: {
			                fontSize: 20,
			                color:'#fff'
			            }
			        },
			        splitLine:{  
			            show:true  ,
					    lineStyle:{
						    color:'#25303b',
					    }
			        },
		            data : ['周一','周二','周三','周四','周五','周六','周日']
		        }
		    ],
		    yAxis : [
		        {
		        	position:'left',
		            type : 'value',
		          	axisLine: {
			            show: true , 
			            lineStyle:{
			                color:'#25303b'
			            }
			        },
			        axisLabel: {
			            show: true,
			            textStyle: {
			                fontSize: 25,
			                color:'#fff'
			            }
			        },
			        splitLine:{  
			            show:true  ,
					    lineStyle:{
						    color:'#25303b',
					    }
			        }
		        }
		    ],
			color:['#06e287','#ffb311','#f42144'],
		    series : [
		        {
		            name:'出租车',
		            type:'line',
		            smooth:true,
		            itemStyle: {
		              	normal: {
		              		lineStyle:{
			              		width:4,
			            		color:'#06e287',
			            		shadowColor : 'rgba(0,0,0,0.5)',
			                    shadowBlur: 10,
			                    shadowOffsetX: 8,
			                    shadowOffsetY: 8
			                },
		                   	areaStyle: {
			                  // 区域图，纵向渐变填充
				                color : (function (){
		                            var zrColor = require('zrender/tool/color');
		                            return zrColor.getLinearGradient(
		                                0, 200, 0, 450,
                            			[[0, 'rgba(6,226,135,0.6)'],[1, 'rgba(255,255,255,0.1)']]
		                            )
		                        })()
			                }
		            	}
		            },
		 			symbol: 'image://img/green-dot.png',
		            symbolSize:12,
		            data:[560, 572, 410, 430,540,390, 400],
		        },
		        {
		            name:'网约车',
		            type:'line',
		            smooth:true,
		            itemStyle: {
		              normal: {
		              	lineStyle:{
		              		width:4,
		            		color:'#ffb311',
		            		shadowColor : 'rgba(0,0,0,0.5)',
		                    shadowBlur: 10,
		                    shadowOffsetX: 8,
		                    shadowOffsetY: 8
		            	},
		            	areaStyle: {
			                // 区域图，纵向渐变填充
			                color : (function (){
	                            var zrColor = require('zrender/tool/color');
	                            return zrColor.getLinearGradient(
	                                0, 200, 0, 400,
                        			[[0, 'rgba(255,179,17,0.3)'],[0.5, 'rgba(255,179,17,0.2)']]
	                            )
	                        })()
			            }
		              }
		            },
		            symbol: 'image://img/yellow-dot.png',
		            symbolSize:12,
		            data:[820, 652, 740, 670, 590, 620, 800]
		        },
		        {
		            name:'总量',
		            type:'line',
		            smooth:true,
		            itemStyle: {
		              normal: {
		              	lineStyle:{
		              		width:4,
		            		color:'#f42144',
		            		shadowColor : 'rgba(0,0,0,0.5)',
		                    shadowBlur: 10,
		                    shadowOffsetX: 8,
		                    shadowOffsetY: 8
		            	},
		                areaStyle: {
			                // 区域图，纵向渐变填充
			                color : (function (){
	                            var zrColor = require('zrender/tool/color');
	                            return zrColor.getLinearGradient(
	                                0, 200, 0, 400,
                        			[[0, 'rgba(244,33,68,0.3)'],[0.5, 'rgba(244,33,68,0)']]
	                            )
	                        })()
			            }
		              }
		            },
		            symbol: 'image://img/red-dot.png',
		            symbolSize:12,
		           data:[950, 800, 790,910, 760, 700, 1100]
		        }
		    ]
        }
        myChart.setOption(option);
    }
);