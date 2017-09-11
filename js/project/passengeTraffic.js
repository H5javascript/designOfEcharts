/*echart -bar-k-pie*/
require.config({
    paths: {
        echarts: './js/echart/dist'
    }
});
require(
    [
        'js/echart/echarts.min',//原本的echarts有问题，后来换了一个
        'echarts/chart/line',
    ],
    function (ec) {
    	/*bar*/
        var myChart = ec.init(document.getElementById('bar'));
        var option = {
           	tooltip : {
		        trigger: 'axis'
		    },
		    legend: {
		        icon: 'rectangle',
		        textStyle:{
		        	color:'#425a73',
		        	fontSize: 14
		        },
		        x:'right',
		        data:['客运业户','客运班车','客运包车']
		    },
		    grid:{
		    	x:50,
    	    	y:50,
    	    	x2:50,
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
				            color:'#888888'
				        }
				    },
			        axisLabel: {
			            show: true,
			            textStyle: {
			                fontSize: 14,
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
		          	axisLine: {
			            show: true , 
			            lineStyle:{
			                color:'#888888'
			            }
			        },
			        axisLabel: {
			            show: true,
			            textStyle: {
			                fontSize: 14,
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
			color:['#06e287','#ffb311','#f42144'],
		    series : [
		        {
		            name:'客运包车',
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
		            data:[560, 572, 410, 430,540],
		        },
		        {
		            name:'客运班车',
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
		            data:[820, 652, 740, 670, 590]
		        },
		        {
		            name:'客运业户',
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
		           data:[950, 800, 790,910, 760]
		        }
		    ]
        }
        myChart.setOption(option);
        /*top-right-pie*/
        var myChart2 = ec.init(document.getElementById('pie'));
        option = {
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: {
		    	/*orient : 'vertical',*/
		        x : '76%',
		        y : '5%',
		        textStyle:{
		        	color:'#425a73',
		        	fontSize: 14
		        },
		        data:['一级客运站','二级客运站','三级客运站','四级客运站','五级客运站','简易客运站']
		    },
		    calculable : true,
		    series : [
		        {
		            name:'面积模式',
		            type:'pie',
		            radius : [20, 60],
		            center : ['40%', '35%'],
		            roseType : 'area',
		            data:[
		                {
		                	value:38,
		                	name:'一级客运站',
		                	itemStyle: {
							    normal: {
							        color: ['#098d56']
							    }
							}
		                },
		                {
		                	value:84, 
		                	name:'二级客运站',
		                	itemStyle: {
							    normal: {
							        color: ['#0889f2']
							    }
							}
		                },
		                {
		                	value:117, 
		                	name:'三级客运站',
		                	itemStyle: {
							    normal: {
							        color: ['#3b54ef']
							    }
							}
		                },
		                {
		                	value:216, 
		                	name:'四级客运站',
		                	itemStyle: {
							    normal: {
							        color: ['#e17c14']
							    }
							}
		                },
		                {
		                	value:183, 
		                	name:'五级客运站',
		                	itemStyle: {
							    normal: {
							        color: ['#a721f4']
							    }
							}
		                },
		                {
		                	value:193, 
		                	name:'简易客运站',
		                	itemStyle: {
							    normal: {
							        color: ['#c31855']
							    }
							}
		                }
		            ]
		        }
		    ]
		};
        myChart2.setOption(option);
        /*foot-right-pie-1*/
       var myChart3 = ec.init(document.getElementById('ringBox'));
       option = {
		    title: {
		        text: '班车：17,194',
		        subtext: '包车：9,130',
		        x: 'center',
		        y: 'center',
		        textStyle: {            
	               color: '#089dd5',
	               fontSize: 14
	            },  
		        subtextStyle:{
	 				color: '#2160ad',
	            	fontSize: 12
		        }
		    },
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: {
		        x : 'center',
		        y:'top',
		        textStyle: {            
	                color: '#2160ad'  
	            },
		        data:['班车标志牌','包车标志牌']
		    },
		    series : [
		        {
		            name:'数据来源',
		            type:'pie',
		            radius : [55,70],
				    center : ['50%', '55%'],
		            data:[
		                {
		                  value:68.64, 
		                  name:'班车标志牌',
		                  itemStyle: {
							    normal: {
							        color: ['#089dd5']
							    }
							}
		                },
		                {
		                  value:31.36, 
		                  name:'包车标志牌',
		                	itemStyle: {
		                      	normal: {
		                        	color: ['#2160ad']
		                      	}
		                    }
		                }
		            ]
		        }
		    ]
		};
       myChart3.setOption(option);
       /*foot-right-pie-2*/
       var myChart3 = ec.init(document.getElementById('ringBox2'));
       option = {
		    title: {
		        text: '省际：2,937',
		        subtext: '市际：3,326',
		        x: 'center',
		        y: 'center',
		        textStyle: {            
	               color: '#0889f2',
	               fontSize: 14
	            },  
		        subtextStyle:{
	 				color: '#2160ad',
	            	fontSize: 12
		        }
		     },
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: {
		        x : 'center',
		        y:'top',
		        textStyle: {            
	                color: '#2160ad'  
	            },
		        data:['省际','市际']
		    },
		    series : [
		        {
		            name:'数据来源',
		            type:'pie',
		            radius : [55,70],
				    center : ['50%', '55%'],
		            data:[
		                {
		                  value:46.89, 
		                  name:'省际',
		                  itemStyle: {
							    normal: {
							        color: ['#0889f2']
							    }
							}
		                },
		                {
		                  value:53.11, 
		                  name:'市际',
		                	itemStyle: {
		                      	normal: {
		                        	color: ['#2160ad']
		                      	}
		                    }
		                }
		            ]
		        }
		    ]
		};
       myChart3.setOption(option);
       /*foot-right-pie-3*/
       var myChart3 = ec.init(document.getElementById('ringBox3'));
       option = {
		    title: {
		        text: '省际：6,436',
		        subtext: '市际：153',
		        x: 'center',
		        y: 'center',
		        textStyle: {            
	               color: '#cc1e46',
	               fontSize: 14
	            },  
		        subtextStyle:{
	 				color: '#5f1023',
	            	fontSize: 12
		        }
		     },
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: {
		        x : 'center',
		        y:'top',
		        textStyle: {            
	                color: '#2160ad'  
	            },
		        data:['省际','市际']
		    },
		    series : [
		        {
		            name:'数据来源',
		            type:'pie',
		            radius : [55,70],
				    center : ['50%', '55%'],
		            data:[
		                {
		                  value:97.67, 
		                  name:'省际',
		                  itemStyle: {
							    normal: {
							        color: ['#cc1e46']
							    }
							}
		                },
		                {
		                  value:2.33, 
		                  name:'市际',
		                	itemStyle: {
		                      	normal: {
		                        	color: ['#5f1023']
		                      	}
		                    }
		                }
		            ]
		        }
		    ]
		};
       myChart3.setOption(option);
    }
);

















