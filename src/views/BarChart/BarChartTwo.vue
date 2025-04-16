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
      right: '25%',
      containLabel: true
    },
    dataZoom: [
      {
        type: 'slider',
        right: 70,
        yAxisIndex: 0,
        startValue: 0,
        endValue: 2,
        showDetail: false,
        showDataShadow: false,
        brushSelect: false,
        zoomLock: true, // 锁定选择区域大小，只能平移，不能缩放
        filter: 'empty',
        fillerColor: '#335759',
        borderColor: 'transparent',
        width: 5,
        handleSize: '90%',
        backgroundColor: '#eee',
        handleIcon: 'path://M512,512m-448,0a448,448,0,1,0,896,0a448,448,0,1,0,-896,0Z',
        handleStyle: {
          color: '#335758',
          borderWidth: 0
        }
      }
    ],
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01]
    },
    yAxis: [
      {
        type: 'category',
        data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World']
      }
    ],
    series: [
      {
        name: '2011',
        type: 'bar',
        barGap: '60%',
        barWidth: 30,
        label: {
          show: true,
          position: 'right',
          offset: [100, 0],
          formatter: ({ data }) => {
            return `{a|${data.value}} {b|${data.percent}}`
          },
          rich: {
            a: { color: '#000' },
            b: {
              color: '#FFCA55',
              padding: 10,
              borderRadius: 10,
              backgroundColor: 'rgba(255,202,85,0.10)'
            }
          }
        },
        data: [
          {
            name: 'Brazil',
            value: 18203,
            percent: 0.34
          },
          {
            name: 'Indonesia',
            value: 18203,
            percent: 0.34
          },
          {
            name: 'USA',
            value: 18203,
            percent: 0.34
          },
          {
            name: 'India',
            value: 18203,
            percent: 0.34
          },
          {
            name: 'China',
            value: 18203,
            percent: 0.34
          },
          {
            name: 'World',
            value: 18203,
            percent: 0.34
          }
        ]
      }
    ]
  })
}

function initBarChartFour(){
  // const chart = echarts.init(document.getElementById('barChart-four'))
}

onMounted(() => {
  initBarChartThree()
  initBarChartFour()
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
      <div class="second-box">
        <div id="barChart-four" attr="chart" />
      </div>
      <div class="third-box">
        <ul>
          <li>通过数据缩放(dataZoom)设置dataZoom.zoomLock锁定选择区域、实现平移（类滚动）效果。 </li>
          <li>平移（类滚动）效果，需要关闭调刷选功能，dataZoom.brushSelect设置为false。</li>
          <li>通过设置label的formatter和rich属性，实现label多段文本且不同样式呈现。</li>
        </ul>
      </div>
      <div class="fourth-box">4</div>
    </main>
  </ChartLayout>
</template>
