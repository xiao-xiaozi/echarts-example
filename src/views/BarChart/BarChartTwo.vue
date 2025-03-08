<script setup>
import ChartLayout from '@/components/ChartLayout.vue';
import * as echarts from "echarts"
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

function initBarChartThree(){
  const chart = echarts.init(document.getElementById('barChart-three'))
  chart.setOption({
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' }
    },
    grid: {
      left: '10%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        // axisTick: { alignWithLabel: true }
      }
    ],
    yAxis: [
      { type: 'value' }
    ],
    series: [
      {
        name: 'Direct',
        type: 'bar',
        barWidth: '60%',
        data: [10, 52, 200, 334, 390, 330, 220],
        markArea: {
          silent: true,
          label: { position: 'insideTop',color: 'red' },
          data: [
            [
              {
                name: '测试label',
                xAxis: 'Mon',
                itemStyle: {
                  color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                      { offset: 0,color: "rgba(58,175,255,0.1)" },
                      { offset: 1,color: "rgba(58,175,255,0)" }
                    ]
                  }
                }
              },
              { xAxis: 'Thu' }
            ],
            [
              {
                name: '测试label_2',
                xAxis: 'Fri',
                itemStyle: {
                  color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                      { offset: 0,color: "rgba(253,131,54,0.1)" },
                      { offset: 1,color: "rgba(253,131,54,0)" }
                    ]
                  }
                }
              },
              { xAxis: 'Sun' }
            ]
          ]
        }
      }
    ],

  })
}

onMounted(() => {
  initBarChartThree()
})

const router = useRouter()
function prePage(){
  router.push({ name: 'BarChartOne' })
}
</script>
<template>
  <ChartLayout :pre-page="prePage">
    <main class="chart-container">
      <div class="first-box">
        <div id="barChart-three" attr="chart" />
      </div>
      <div class="second-box">2</div>
      <div class="third-box">
        <ul>
          <li>通过 <a href="https://echarts.apache.org/zh/option.html#series-line.markArea" target="_blank">markArea</a> 实现坐标系区域高亮。</li>
        </ul>
      </div>
      <div class="fourth-box">4</div>
    </main>
  </ChartLayout>
</template>
