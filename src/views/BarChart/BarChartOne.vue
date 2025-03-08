<script setup>
import ChartLayout from "@/components/ChartLayout.vue"
import * as echarts from "echarts"
import { onMounted } from "vue"
import { useRouter } from "vue-router"

function initBarChartOne(){
  const barOne = echarts.init(document.getElementById('bar-one'))
  barOne.setOption({
    legend: { show: true },
    tooltip: {
      show: true,
      confine: true,
      trigger: "axis",
      axisPointer: { type: 'none' }
    },
    grid: {
      top: '5%',
      left: '10%',
      right: '10%',
      bottom: '20%'
    },
    xAxis: {
      show: false, // 不显示X轴
      type: 'value'
    },
    yAxis: {
      show: false, // 不显示Y轴
      type: 'category',
      data: ['Category']
    },
    series: [
      {
        name: 'Segment 1',
        type: 'bar',
        stack: 'stack1', // 设置堆叠组
        data: [{ name: 'Segment 1-1',value: 30 }],
        itemStyle: {
          color: '#FD8336', // 黄色
          borderRadius: [12, 0, 0, 12],
          borderWidth: 2,
          borderColor: 'transparent'
        },
        barWidth: 30 // 控制条的宽度
      },
      {
        name: 'Segment 2',
        type: 'bar',
        stack: 'stack1', // 相同堆叠组
        itemStyle: {
          color: '#FF66B2',
          borderWidth: 2,
          borderColor: 'transparent'
        },
        data: [{ name: 'Segment 2-1',value: 40 }],
        barWidth: 30 // 控制条的宽度
      },
      {
        name: 'Segment 5',
        type: 'bar',
        stack: 'stack1', // 相同堆叠组
        data: [{ name: 'Segment 5-1',value: 50 }],
        itemStyle: {
          color: '#3399FF', // 蓝色
          borderRadius: [0, 12, 12, 0],
          borderWidth: 2,
          borderColor: 'transparent'
        },
        barWidth: 30 // 控制条的宽度
      }
    ]
  })
}

function initBarChartTwo(){
  const barTwo = echarts.init(document.getElementById('bar-two'))
  barTwo.setOption({
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

onMounted(() => {
  initBarChartOne()
  initBarChartTwo()
})

const router = useRouter()
function nextPage() {
  router.push({ name: 'BarChartTwo' })
}
</script>
<template>
  <ChartLayout :next-page="nextPage">
    <main class="chart-container">
      <div class="first-box">
        <div id="bar-one" attr="chart" />
      </div>
      <div class="second-box">
        <div id="bar-two" attr="chart" />
      </div>
      <div class="third-box">
        <ul>
          <li>通过将itemStyle.borderColor的颜色设置为透明，实现堆叠柱状图(bar)不同系列之间的间隙。</li>
        </ul>
      </div>
      <div class="fourth-box">
        <ul>
          <li>通过数据缩放(dataZoom)设置dataZoom.zoomLock锁定选择区域、实现平移（类滚动）效果。 </li>
          <li>平移（类滚动）效果，需要关闭调刷选功能，dataZoom.brushSelect设置为false。</li>
          <li>通过设置label的formatter和rich属性，实现label多段文本且不同样式呈现。</li>
        </ul>
      </div>
    </main>
  </ChartLayout>
</template>
