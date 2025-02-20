<script setup>
import * as echarts from "echarts"
import { onMounted } from "vue"

function initGaugeOne(){
  const gaugeOne = echarts.init(document.getElementById('gauge-one'))
  gaugeOne.setOption({
    series: [
      {
        type: 'gauge',
        startAngle: 180,
        endAngle: 0,
        detail: { formatter: '{value}' },
        axisTick: { show: false },
        axisLabel: { show: false },
        axisLine: {
          lineStyle: {
            width: 15,
            color: [[1, '#F0D894']] // 设置背景色
          }
        },
        splitLine: { show: false },
        pointer: { show: false },
        progress: {
          show: true,
          // roundCap: true, // 设置两端为圆型
          width: 15,
          itemStyle: {
            borderCap: 'round', // 设置线段末端为圆型 TODO: 不生效
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: '#FD8336' },
                { offset: 1, color: '#FFCA55' }
              ]
            }
          }
        },
        data: [
          {
            value: 70,
            name: 'SCORE'
          }
        ]
      },
      {
        type: 'gauge',
        startAngle: 180,
        endAngle: 0,
        radius: '69%',
        detail: { formatter: '{value}' },
        axisTick: { show: false },
        axisLabel: { show: false },
        axisLine: {
          lineStyle: {
            width: 18,
            color: [[1, '#EAE3C9']]
          }
        },
        splitLine: { show: false },
        pointer: { show: false }
      }
    ]
  })
}

onMounted(() => {
  initGaugeOne()
})
</script>
<template>
  <main class="chart-container">
    <div class="first-box">
      <div id="gauge-one" attr="chart" />
    </div>
    <div class="second-box">2</div>
    <div class="third-box">
      <ul>
        <li>通过两个仪表盘(gauge)组合而成。</li>
        <li>其中一个仪表盘开启progress，以展示进度。</li>
        <li class="font-weight-bold">
          progress的itemStyle设置线段末端样式的配置：borderCap不生效。故而只能通过设置progress的roundCap来开启两端是否显示成圆形。
        </li>
        <li>
          <RouterLink to="/pieChart/two">仅想要进度末端呈现圆形，可以参考用饼图(pie)的实现</RouterLink>
        </li>
      </ul>
    </div>
    <div class="fourth-box">4</div>
  </main>
</template>
