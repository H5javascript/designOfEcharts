require.config({
    paths: {
        echarts: './js/echart/dist'
    }
});
require(
    [
		'js/echart/echarts.min',
        'echarts/chart/line'
    ],
    function (ec) {
        var myChart = ec.init(document.getElementById('footLeftEchart'));
        var option = {
           	tooltip : {
		        trigger: 'axis'
		    },
		    legend: {
		       icon: 'rectangle',
		       textStyle:{
		        	color:'#fff',
		        	fontSize: 14
		        },
		        top: 15,
		        x:'right',
		        data:['业户','营运车辆','从业资格']
		    },
		    grid:{
    	    	top:50,
    	    	left:50,
    	    	right:30,
    	    	bottom:40
		    },
		    calculable : true,
		    xAxis : [
		        {
		            type : 'category',
		            boundaryGap : false,
			        axisLine: {
				        show: true , //x轴
				        lineStyle:{
				            color:'#888888'
				        }
				    },
			        axisLabel: {
			            show: true,
			            textStyle: {
			                fontSize: 15,
			                color:'#425a73'
			            }
			        },
			        splitLine:{  
			            show:false  ,
					    lineStyle:{
						    color:'#25303b',
					    }
			        },
		            data : ['2012年','2013年','2014年','2015年','2016年']
		        }
		    ],
		    yAxis : [
		        {
		        	position:'left',
		            type : 'value',
		            name:'万',
		          	axisLine: {
			            show: true , 
			            lineStyle:{
			                color:'#888888'
			            }
			        },
			        axisLabel: {
			            show: true,
			            textStyle: {
			                fontSize: 15,
			                color:'#425a73'
			            }
			        },
			        splitLine:{  
			            show:false  ,
					    lineStyle:{
						    color:'#25303b',
					    }
			        }
		        }
		    ],
			color:['#30a1fd','#f42144','#098d56'],
		    series : [
		        {
		            name:'营运车辆',
		            type:'line',
		            smooth:true,
		            itemStyle: {
		              normal: {
		              	lineStyle:{
		              		width:4,
		            		color:'#30a1fd',
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
                        			[[0, 'rgba(45,77,120,0.9)'],[1, 'rgba(45,77,120,0.5)']]
	                            )
	                        })()
			            }
		              }
		            },
		            symbol: 'image://img/yellow-dot.png',
		            symbolSize:12,
		            data:[560, 572, 410, 430,540]
		        },
		        {
		            name:'从业资格',
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
                        			[[0, 'rgba(244,33,68,0.1)'],[1, 'rgba(244,33,68,0.8)']]
	                            )
	                        })()
			            }
		              }
		            },
		            symbol: 'image://img/red-dot.png',
		            symbolSize:12,
		            data:[820, 652, 740, 670, 590]
		        },
		        {
		            name:'业户',
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
                            			[[0, 'rgba(6,226,135,0.3)'],[1, 'rgba(255,255,255,0)']]
		                            )
		                        })()
			                }
		            	}
		            },
		 			symbol: 'image://img/green-dot.png',
		            symbolSize:12,
		            data:[950, 800, 850,910, 760]
		        }
		    ]
        }
        myChart.setOption(option);
    }
);
/*数据质量*/
window.onload = function(){
	var obj1=document.getElementById("btn01");
	var obj2=document.getElementById("btn02");
	obj1.onclick = function(){
	obj1.className = (obj1.className == "btnLeft"?"btnLeft":"btnLeft");
	obj2.className = (obj2.className == "btnLeft"?"btnRight":"btnRight");
	//alert(obj1.className);
	}
	obj2.onclick = function(){
	obj1.className = (obj1.className == "btnLeft"?"btnRight":"btnRight");
	obj2.className = (obj2.className == "btnRight"?"btnLeft":"btnLeft");
	//alert(obj2.className);
	}
}

/*map*/


