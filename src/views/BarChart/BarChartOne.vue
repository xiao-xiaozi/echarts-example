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
          <li>通过 <a href="https://echarts.apache.org/zh/option.html#series-line.markArea" target="_blank">markArea</a> 实现坐标系区域高亮。</li>
        </ul>
      </div>
    </main>
  </ChartLayout>
</template>
