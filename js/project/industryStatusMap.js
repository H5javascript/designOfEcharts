require(
    [
        'js/echart/echarts.min'
    ],
    function (ec) {
      //echart 初始化
      var options =  {
        tooltip: {
          trigger: 'item',
          position: ['10%', '10%'],
          padding: 10,
          backgroundColor : 'rgba(22,65,119,0.7)',
          formatter: function (params) {
            var res='<div><div class="tipName">'+params.data.name+'</div>'+
              '<div class="tipBlue"><span class="tipBok">17,593家</span><span class="tipBok">经营企业</span></div>'+
              '<table class="tipTable">'+
              '<tr>'+
              '<td class="green">新增</td><td class="red">注销</td><td class="org">整改</td>'+
              '</tr>'+
              '<tr>'+
              '<td class="green">61</td><td class="red">78</td><td class="org">5</td>'+
              '</tr>'+
              '</table>'+
              '<div class="tipBlue"><span class="tipBok">110,186辆</span><span class="tipBok">营运车辆</span></div>'+
              '<table class="tipTable">'+
              '<tr>'+
              '<td class="green">新增</td><td class="red">注销</td><td class="org">停运</td>'+
              '</tr>'+
              '<tr>'+
              '<td class="green">893</td><td class="red">308</td><td class="org">10</td>'+
              '</tr>'+
              '</table>'+
              '<div class="tipBlue"><span class="tipBok">134,046</span><span class="tipBok">从业资格</span></div>'+
              '<table class="tipTable">'+
              '<tr>'+
              '<td class="green">新增</td><td class="red">注销</td><td class="org"><span style="opacity: 0;">站位</span></td>'+
              '</tr>'+
              '<tr>'+
              '<td class="green">196</td><td class="red">2</td><td class="org">&nbsp;</td>'+
              '</tr>'+
              '</table>'
              +'</div>';
            return res;
          }
        },
        visualMap: {
          min: 0,
          max: 1500,
          x: 'right',
          y: 'bottom',
          realtime: false,
          calculable: true,
          inRange: {
  //		                color: ['#e7693d','#1375c5', '#12a3f6','#0f9bf5','#48c2f8','#0889f2','#19b4f9','#12a3f6','#1375c5','#1375c5','#12a3f6']
          }
        },
        series: [
          {
            name: '浙江省',
            type: 'map',
            mapType: 'zhejiang', // 自定义扩展图表类型
            itemStyle:{
              normal:{label:{show:true}},
              // emphasis:{label:{show:true}}
            },
            data:[
              {
                name: '杭州市',
                value: 15477.48,
                itemStyle: {
                  normal: {
                    // color: ['#e7693d']
                    color:['#12a3f6']
                  }
                }
              },
              {
                name: '丽水市',
                itemStyle: {
                  normal: {
                    color: ['#12a3f6']
                  }
                },
                value: 20057.34},
              {
                name: '温州市',
                itemStyle: {
                  normal: {
                    color: ['#0f9bf5']
                  }
                },
                value: 31686.1
              },
              {
                name: '宁波市',
                itemStyle: {
                  normal: {
                    color: ['#0889f2']
                  }
                },
                value: 6992.6
              },
              {
                name: '舟山市',
                itemStyle: {
                  normal: {
                    color: ['#20c4fc']
                  }
                },
                value: 44045.49
              },
              {
                name: '台州市',
                itemStyle: {
                  normal: {
                    color: ['#48c2f8']
                  }
                },
                value: 40689.64
              },
              {
                name: '金华市',
                itemStyle: {
                  normal: {
                    color: ['#0f9bf5']
                  }
                },
                value: 37659.78
              },
              {
                name: '衢州市',
                itemStyle: {
                  normal: {
                    color: ['#1375c5']
                  }
                },
                value: 45180.97
              },
              {
                name: '绍兴市',
                itemStyle: {
                  normal: {
                    color: ['#0f9bf5']
                  }
                },
                value: 55204.26
              },
              {
                name: '嘉兴市',
                itemStyle: {
                  normal: {
                    color: ['#19b4f9']
                  }
                },
                value: 21900.9
              },
              {
                name: '湖州市',
                itemStyle: {
                  normal: {
                    color: ['#0889f2']
                  }
                },
                value: 4918.26
              }
            ]
          }
        ]
      };
      var myChart = ec.init(document.getElementById('map'));
      /**
       * 增加高亮
       * @param index
       */
      var selectMap = function (index) {
        myChart.dispatchAction({
          type: 'highlight',
          // 可选，系列 index，可以是一个数组指定多个系列
          seriesIndex: 0,

          // 数据的 index，如果不指定也可以通过 name 属性根据名称指定数据
          dataIndex: index,
          // 可选，数据名称，在有 dataIndex 的时候忽略
        });
        myChart.dispatchAction({
          type: 'showTip',
          // 可选，系列 index，可以是一个数组指定多个系列
          seriesIndex: 0,

          // 数据的 index，如果不指定也可以通过 name 属性根据名称指定数据
          dataIndex: index
          // 可选，数据名称，在有 dataIndex 的时候忽略
        })
      };
      /**
       * 取消高亮
       * @param index
       */
      var unSelectMap = function (index) {
        myChart.dispatchAction({
          type: 'downplay',
          // 可选，系列 index，可以是一个数组指定多个系列
          seriesIndex: 0,

          // 数据的 index，如果不指定也可以通过 name 属性根据名称指定数据
          dataIndex: index-1
          // 可选，数据名称，在有 dataIndex 的时候忽略
        })
      };

      $.get('js/project/industryStatus/zhejiang.json', function (geoJson) {
        ec.registerMap('zhejiang', geoJson);
        myChart.setOption(options);
        var index = 0;
        var len = geoJson['features'].length;
        var clock = function () {
          if(index>len) index=0;
          if(index>0){
            selectMap(index);
            unSelectMap(index);
          }else{
            selectMap(index);
          }
          index++;
        };
        var begin = setInterval(clock,1000);
        // myChart.on('mouseover',function (params) {
        //   // index = params.dataIndex
        // });
        // myChart.on('mouseout',function () {
        //   // setInterval(clock,1000);
        // })
      });
	}
);