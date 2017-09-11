/*one*/
var myChart = echarts.init(document.getElementById("one"));
option = {
    title: {
        text: '32,569',
        x: 'center',
        y: '35%',
        itemGap: 20,
        textStyle: {
            color: '#fff',
            fontSize: 50
        },
        subtext:'过期数：15,655',
        subtextStyle: {
            color: '#bf1f39',
            fontSize: 30
        }
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series: [
        {
            name:'异常总数',
            type:'pie',
            radius: ['70%', '90%'],
            avoidLabelOverlap: false,
            hoverAnimation:false,//鼠标移入不会放大
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: false,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            color:['#b413ff','#2160ad'],
            data:[
                {value:550, name:'生产工单'},
                {value:450, name:'待处理异常'},
            ]
        }
    ]
};
myChart.setOption(option);

/*two*/
var myChart2 = echarts.init(document.getElementById("two"));
option = {
    title: {
        text: '6,065',
        x: 'center',
        y: '35%',
        itemGap: 20,
        textStyle: {
            color: '#fff',
            fontSize: 50
        },
        subtext:'过期数：655',
        subtextStyle: {
            color: '#bf1f39',
            fontSize: 30
        }
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series: [
        {
            name:'异常总数',
            type:'pie',
            radius: ['70%', '90%'],
            avoidLabelOverlap: false,
            hoverAnimation:false,//鼠标移入不会放大
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: false,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            color:['#ffb311','#2160ad'],
            data:[
                {value:350, name:'生产工单'},
                {value:650, name:'待处理异常'},
            ]
        }
    ]
};
myChart2.setOption(option);

/*three*/
var myChart3 = echarts.init(document.getElementById("three"));
option = {
    title: {
        text: '4,162',
        x: 'center',
        y: '35%',
        itemGap: 20,
        textStyle: {
            color: '#fff',
            fontSize: 50
        },
        subtext:'过期数：655',
        subtextStyle: {
            color: '#bf1f39',
            fontSize: 30
        }
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series: [
        {
            name:'异常总数',
            type:'pie',
            radius: ['70%', '90%'],
            avoidLabelOverlap: false,
            hoverAnimation:false,//鼠标移入不会放大
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: false,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            color:['#e42141','#2160ad'],
            data:[
                {value:350, name:'生产工单'},
                {value:650, name:'待处理异常'},
            ]
        }
    ]
};
myChart3.setOption(option);











