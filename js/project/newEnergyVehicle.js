var myChart = echarts.init(document.getElementById("one"));
option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['电动', '液化石油气','液化天然气','双燃料'],
        textStyle:{
        	color:'#fff',
        	fontSize: 20
        },
         icon: 'circle',
         itemGap: 20
    },
    calculable : true,
    xAxis : [
        {
            type : 'value',
            axisLine: {
	            show: true , //x轴
	            lineStyle:{
	                color:'#fff'
	            }
	        },
	        axisLabel: {
	            show: true,
	            textStyle: {
	                fontSize: 25
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
    yAxis : [
        {
            type : 'category',
            axisLine: {
	            show: true , //x轴
	            lineStyle:{
	                color:'#fff'
	            }
	        },
	        axisLabel: {
	            show: true,
	            textStyle: {
	                fontSize: 25
	            }
	        },
            data : ['客运','普货','危货','出租','公交']
        }
    ],
  	color:['#e9950e','#f65320','#d21635','#a410e9'],
    series : [
        {
            name:'电动',
            type:'bar',
            barWidth : 50,
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:[70, 100, 78, 84, 70]
        },
        {
            name:'液化石油气',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:[80, 132, 101, 134, 80]
        },
        {
            name:'液化天然气',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:[120, 132, 141, 134, 120]
        },
        {
            name:'双燃料',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:[100, 112, 131, 154, 100]
        }
    ]
};
myChart.setOption(option);