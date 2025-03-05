<script setup>
import ChartLayout from "@/components/ChartLayout.vue";
import * as echarts from "echarts"
import "echarts-liquidfill"
import { onMounted } from "vue"



function initLiquidfillOne(){
  const chart = echarts.init(document.getElementById('liquidFill-one'))
  chart.setOption({
    // 改变单个波纹颜色
    // series: [{
    //   type: 'liquidFill',
    //   data: [0.6, {
    //     value: 0.5,
    //     direction: 'left',
    //     itemStyle: { color: 'red' }
    //   }, 0.4, 0.3]
    // }]

    // 单个波纹
    // series: [{
    //   type: 'liquidFill',
    //   data: [0.6]
    // }]

    // 波纹数量等于data种的数据量
    // series: [{
    //   type: 'liquidFill',
    //   data: [0.6, 0.5]
    // }]

    // 禁止波纹动画
    // series: [{
    //   type: 'liquidFill',
    //   waveAnimation: false,
    //   animationDuration: 0,
    //   animationDurationUpdate: 0,
    //   data: [0.6, 0.5, 0.4, 0.3]
    // }]

    // 水平波纹
    // series: [{
    //   type: 'liquidFill',
    //   data: [0.6, 0.5, 0.4, 0.3],
    //   amplitude: 0,
    //   waveAnimation: 0
    // }]

    // 调整背景色以及边框颜色
    // series: [{
    //   type: 'liquidFill',
    //   data: [0.6, 0.5, 0.4, 0.3],
    //   backgroundStyle: {
    //     borderWidth: 5,
    //     borderColor: 'red',
    //     color: 'yellow'
    //   }
    // }]

    // 不显示外圈样式（border，和最外面的圆圈）
    series: [{
      type: 'liquidFill',
      data: [0.6, 0.5, 0.4, 0.3],
      outline: { show: false }
    }]

    // 改变显示的形状，默认为圆形。（当前为菱形）
    // series: [{
    //   type: 'liquidFill',
    //   data: [0.6, 0.5, 0.4, 0.3],
    //   shape: 'diamond'
    // }]

    // 将图形铺满整个元素
    // series: [{
    //   type: 'liquidFill',
    //   data: [0.5, 0.4, 0.3, 0.2],
    //   shape: 'container',
    //   outline: { show: false }
    // }]

    // 自定义图形，当前为鲸鱼
    // series: [{
    //   type: 'liquidFill',
    //   data: [0.6, 0.55, 0.4, 0.25],
    //   radius: '60%',
    //   outline: { show: false },
    //   backgroundStyle: {
    //     borderColor: '#156ACF',
    //     borderWidth: 1,
    //     shadowColor: 'rgba(0, 0, 0, 0.4)',
    //     shadowBlur: 20
    //   },
    //   shape: 'path://M367.855,428.202c-3.674-1.385-7.452-1.966-11.146-1.794c0.659-2.922,0.844-5.85,0.58-8.719 c-0.937-10.407-7.663-19.864-18.063-23.834c-10.697-4.043-22.298-1.168-29.902,6.403c3.015,0.026,6.074,0.594,9.035,1.728 c13.626,5.151,20.465,20.379,15.32,34.004c-1.905,5.02-5.177,9.115-9.22,12.05c-6.951,4.992-16.19,6.536-24.777,3.271 c-13.625-5.137-20.471-20.371-15.32-34.004c0.673-1.768,1.523-3.423,2.526-4.992h-0.014c0,0,0,0,0,0.014 c4.386-6.853,8.145-14.279,11.146-22.187c23.294-61.505-7.689-130.278-69.215-153.579c-61.532-23.293-130.279,7.69-153.579,69.202 c-6.371,16.785-8.679,34.097-7.426,50.901c0.026,0.554,0.079,1.121,0.132,1.688c4.973,57.107,41.767,109.148,98.945,130.793 c58.162,22.008,121.303,6.529,162.839-34.465c7.103-6.893,17.826-9.444,27.679-5.719c11.858,4.491,18.565,16.6,16.719,28.643 c4.438-3.126,8.033-7.564,10.117-13.045C389.751,449.992,382.411,433.709,367.855,428.202z',
    //   label: {
    //     position: ['38%', '40%'],
    //     formatter() {
    //       return 'ECharts\nLiquid Fill';
    //     },
    //     fontSize: 40,
    //     color: '#D94854'
    //   }
    // }]
  })
}

function initLiquidfillTwo(){
  const chart = echarts.init(document.getElementById('liquidFill-two'))
  chart.setOption({
    series: [
      {
        type: 'liquidFill',
        data: [0.6, 0.5, 0.4, 0.3],
        itemStyle: { shadowBlur: 0 },
        radius: '85%',
        backgroundStyle: {
          color: {
            type: 'radial',
            x: 0.5,
            y: 0.5,
            r: 0.5,
            colorStops: [
              {
                offset: 0.96,
                color: 'transparent',
              },
              {
                offset: 1,
                color: 'rgba(255,255,255,0.1)',
              },
            ],
            globalCoord: false,
          },
        },
        outline: { show: false }
      },
      // 环形圆
      {
        type: 'pie',
        radius: ['100%','90%'],
        color: 'rgba(34,156,156,0.3)',
        label: { show: false },
        data: [100]
      },
      // 进度圆
      {
        type: 'pie',
        radius: ['95%','94%'],
        label: { show: false },
        data: [
          {
            value: 70,label: { show: false },itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  { offset: 0, color: 'rgba(48,217,217,0)' },
                  { offset: 0.44, color: 'rgba(48,217,217,1)' },
                  { offset: 1, color: 'rgba(48,217,217,1)' }
                ]
              }
            }
          },
          {
            value: 0,
            label: {
              show: true,
              position: 'inside',
              width: 12,
              height: 12,
              offset: [3,0],
              borderRadius: 20,
              backgroundColor: '#fff'
            }
          },
          // 模拟小圆点超过的部分
          {
            value: 1,
            itemStyle: { color: 'rgba(48,217,217,1)' }
          },
          {
            value: 30,label: { show: false }, itemStyle: { color: 'transparent' }
          },
        ]
      },
    ]
  })
}

onMounted(() => {
  initLiquidfillOne()
  initLiquidfillTwo()
})
</script>
<template>
  <ChartLayout>
    <main class="chart-container">
      <div class="first-box">
        <div id="liquidFill-one" attr="chart" />
      </div>
      <div class="second-box">
        <div class="description">
          <div class="desc-content">test 1000</div>
        </div>
        <div id="liquidFill-two" attr="chart" />
      </div>
      <div class="third-box">
        <ul>
          <li>水球图<a href="https://github.com/ecomfe/echarts-liquidfill">插件</a></li>
        </ul>
      </div>
      <div class="fourth-box">
        <ul>
          <li>水球图+饼图</li>
          <li class="font-weight-bold">环形图的线条较细时，通过label模拟的小圆点的不居中效果更明显。线条粗一些视觉上更居中。</li>
          <li class="font-weight-bold">圆点不居中问题，可以通过offset配置来矫正。</li>
        </ul>
      </div>
    </main>
  </ChartLayout>
</template>
<style scoped>
.second-box {
  display: flex;
}
.second-box .description {
  flex: 1;
  position:relative;
}
.second-box .description .desc-content {
  width: 262px;
  height: 70px;
  line-height: 70px;
  text-align: center;
  background: linear-gradient(90deg, #229c9c,#fff 100%);
  border-radius: 60px;
  position: absolute;
  top: 50%;
  right: -20px;
  transform: translateY(-50%);
}
.second-box #liquidFill-two {
  width: 40%;
}
</style>
