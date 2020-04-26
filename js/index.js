(function () {
  //实例化对象
  var myChart=echarts.init(document.querySelector(".bar .chart"));
  //指定配置项和数据
  option = {
    color: ['#2f89cf'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '0%',
        top:'10px',
        right: '0%',
        bottom: '4%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['旅游行业', '教育培训', '游戏行业', '医疗行业', '电商行业', '社交行业', '金融行业'],
            axisTick: {
                alignWithLabel: true
            },
            axisLabel:{
              color:"rgba(255,255,255,.6)",
              fontSize:12
            },
            axisLine:{
              show:false
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLabel:{
              color:"rgba(255,255,255,.6)",
              fontSize:12
            },
            axisLine:{
              lineStyle:{
                color:"rgba(255,255,255,.1)",
                width:2
              }
            },
            splitLine:{
              lineStyle:{
                color:"rgba(255,255,255,.1)"
              }
            }
        }
    ],
    series: [
        {
            name: '直接访问',
            type: 'bar',
            barWidth: '35%',
            data: [200, 300, 300, 900, 1500, 1200, 600],
            itemStyle:{
              barBorderRadius:5
            }
        }
    ]
  };
  //把配置项赋给实例对象
  myChart.setOption(option)
  //图标自适应
  window.addEventListener('resize',function () {
    myChart.resize();
  })
})();
//柱状图2
(function () {
  var myColor=["#1089E7","#F57474","#56D0E3","#F8B448","#8B78F6"]
  var myChart=echarts.init(document.querySelector(".bar2 .chart"));
  option = {
    grid: {
        left: '22%',
        right: '10%',
        bottom: '10%',
        //containLabel: true
    },
    xAxis: {
      show:false
    },
    yAxis: [
      {
        axisLine:{
          show:false
        },
        axisTick:{
          show:false
        },
        axisLabel:{
          color:'#fff'
        },
        type: 'category',
        data: ['HTML5', 'CSS3', 'javascript', 'Vue', 'Nood'],
        inverse:true
      },
      {
        axisLine:{
          show:false
        },
        axisTick:{
          show:false
        },
        axisLabel:{
          color:'#fff'
        },
        type: 'category',
        data: [100, 100, 100, 100, 100],
        inverse:true
      }
    ],
    series: [
        {
            name: '条',
            type: 'bar',
            data: [70, 34, 60, 70, 69],
            itemStyle:{
              barBorderRadius:20,
              color:function (params) {
                return myColor[params.dataIndex];
              }
            },
            barCategoryGap:50,
            barWidth:10,
            label:{
              show:true,
              position:"inside",
              formatter:"{c}%"
            },
            yAxisIndex:0,
        },
        {
            name: '框',
            type: 'bar',
            data: [100, 100, 100, 100, 100],
            barCategoryGap:50,
            barWidth:15,
            itemStyle:{
              color:"none",
              borderColor:"#00c1de",
              barBorderRadius:15,
            },
            yAxisIndex:1,
        }
    ]
  };
  //#endregion//把配置项赋给实例对象
  myChart.setOption(option)
  //图表自适应
  window.addEventListener('resize',function () {
    myChart.resize();
  })
})();
//折线图1
(function () {
  //实例化对象
  var myChart=echarts.init(document.querySelector(".line .chart"));
  //配置项
  option = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
        textStyle:{
          color:'#4c9bfd'
        },
        right:"10%"
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top:'20%',
        show:true,//显示边框
        borderColor:'#012f4a',
        containLabel: true//包含刻度文字在内
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        axisTick:{
          show:false//去除刻度
        },
        axisLabel:{
          color:'#4c9bfd'//文字颜色
        },
        axisLine:{
          show:false//去除轴线
        }
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
        }
    ]
  };
  //将配置赋值给实例对象
  myChart.setOption(option)
  //图表自适应
  window.addEventListener('resize',function () {
    myChart.resize();
  })
})();