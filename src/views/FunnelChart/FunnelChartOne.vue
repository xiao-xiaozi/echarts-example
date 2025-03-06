<script setup>
import ChartLayout from '@/components/ChartLayout.vue';
import * as echarts from "echarts"
import { onMounted } from "vue"

function initFunnelChartOne(){
  const chart = echarts.init(document.getElementById('funnel-one'))
  chart.setOption({
    tooltip: {
      show: false,
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c}%'
    },
    series: [
      // 渐变漏斗图
      {
        type: 'funnel',
        tooltip: { show: false },
        left: '30%',
        top: 60,
        bottom: 60,
        width: '50%',
        minSize: '50%',
        sort: 'descending',
        gap: 2,
        label: {
          show: true,
          position: 'insideRight',
          color: '#fff'
        },
        emphasis: { disabled: true },
        data: [
          {
            value: 40,
            name: 'Order',
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  { offset: 0,color: "rgba(92, 123, 217,0.2)" },
                  { offset: 1,color: "rgba(92, 123, 217,0)" }
                ]
              }
            }
          },
          {
            value: 20,
            name: 'Click',
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  { offset: 0,color: "rgba(159, 224, 128,0.2)" },
                  { offset: 1,color: "rgba(159, 224, 128,0)" }
                ]
              }
            }
          },
          {
            value: 60,
            name: 'Show',
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  { offset: 0,color: "rgba(255, 220, 96,0.2)" },
                  { offset: 1,color: "rgba(255, 220, 96,0)" }
                ]
              }
            }
          }
        ]
      },
      // 正常显示的漏斗图
      {
        name: 'Funnel',
        type: 'funnel',
        left: '10%',
        top: 60,
        bottom: 60,
        width: '50%',
        minSize: '50%',
        sort: 'descending',
        gap: 2,
        label: {
          show: true,
          position: 'inside'
        },
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 1
        },
        emphasis: { label: { fontSize: 20 }},
        data: [
          { value: 40, name: 'Order' },
          { value: 20, name: 'Click' },
          { value: 60, name: 'Show' }
        ]
      },

    ]
  })
}

onMounted(() => {
  initFunnelChartOne()
})
</script>
<template>
  <ChartLayout>
    <main class="chart-container">
      <div class="first-box">
        <div id="funnel-one" attr="chart" />
      </div>
      <div class="second-box">2</div>
      <div class="third-box">
        <ul>
          <li>两个漏斗图堆叠，形成渐变延申效果。</li>
        </ul>
      </div>
      <div class="fourth-box">4</div>
    </main>
  </ChartLayout>
</template>
