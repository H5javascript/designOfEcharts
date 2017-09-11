var myChart = echarts.init(document.getElementById("oneEchrt"));
option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",
        show:true
    },
    legend: {
        x : 'center',
        y : 'top',
        textStyle:{
        	color:'#fff',
        	fontSize: 20
        },
         itemGap: 20,
        data:['省','市','县']
    },
    series: [
        {
            name:'行政许可受理量',
            type:'pie',
            selectedMode: 'single',
            radius: ['30%', '60%'],
            startAngle:130,
            label: {
                normal: {
                    position: 'inner',
                }
            },
            data:[
                {
                    name:'省',
                    selected:true,
                    itemStyle: {
                        normal: {
                            shadowBlur: 20,
                            shadowColor: 'rgba(246, 107, 19, 0.5)',
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#ffb211'},
                                    {offset: 0.3, color: '#fc9d11'},
                                    {offset: 1, color: '#f35613'}
                                ]
                            ),
                            label: {
                                textStyle: {
                                    fontSize: 25
                                }
                            }
                        }
                    }
                },
                {
                    name:'市',
                    itemStyle: {
                        normal: {
                            shadowBlur: 20,
                            shadowColor: 'rgba(21, 162, 47, 0.5)',
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#07dc7f'},
                                    {offset: 0.3, color: '#0ec25b'},
                                    {offset: 1, color: '#15a22f'}
                                ]
                            ),
                            label: {
                                textStyle: {
                                    fontSize: 25
                                }
                            }
                        }
                    }
                },
                {
                    name:'县',
                    itemStyle: {
                        normal: {
                            shadowBlur: 20,
                            shadowColor: 'rgba(175, 5, 43, 0.5)',
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#ee1f42'},
                                    {offset: 0.3, color: '#bf0c31'},
                                    {offset: 1, color: '#af052b'}
                                ]
                            ),
                            label: {
                                textStyle: {
                                    fontSize: 25
                                }
                            }
                        }
                    }
                },
                {
                	name:'受理总数\n\n256987',
                    itemStyle: {
                        normal: {
                            shadowBlur: 20,
                            shadowColor: 'rgba(21, 24, 27, 0.5)',
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#15181b'},
                                    {offset: 0.3, color: '#15181b'},
                                    {offset: 1, color: '#15181b'}
                                ]
                            ),
                            label: {
                                textStyle: {
                                    fontSize: 25
                                }
                            }
                        }
                    }
                }
            ]
        }
    ]
};
myChart.setOption(option);