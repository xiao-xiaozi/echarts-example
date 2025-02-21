<script setup>
import ChartLayout from "@/components/ChartLayout.vue"
import * as echarts from "echarts"
import { onMounted } from "vue"
import { useRouter } from "vue-router"

function initPipeOne() {
  const pieOne = echarts.init(document.getElementById('pie-one'))
  let value = 70
  pieOne.setOption({
    series: [
      // 外圈
      {
        type: 'gauge',
        progress: {
          show: true,
          width: 18,
          roundCap: true
        },
        axisLine: {
          roundCap: true,
          lineStyle: {
            width: 18,
            color: [[1, '#ccc']] // 仪表盘的进度条颜色
          }
        },
        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: { show: false },
        title: { show: false },
        pointer: { show: false },
        data: [
          {
            value,
            title: { show: false },
            detail: { show: true }
          }
        ]
      },
      // 内圈
      {
        type: 'gauge',
        radius: '50%',
        startAngle: 225,
        endAngle: -135,
        axisLine: {
          lineStyle: {
            width: 6,
            color: [[1, '#ECC665']]
          }
        },
        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: { show: false },
        title: { show: false },
        pointer: { show: false }
      },
      // 进度末端的小圆点
      {
        z: 3,
        color: ['transparent', 'transparent', 'transparent'],
        type: 'pie',
        radius: ['63%', '80%'],
        startAngle: 225,
        endAngle: -45,
        data: [
          {
            value, name: 'Engine', label: { show: false }
          },
          {
            value: 0, name: '', label: {
              show: true,
              position: 'inside',
              padding: 16,
              borderRadius: 16,
              borderColor: '#FFD7A7',
              borderWidth: 4,
              backgroundColor: '#FF7A00'
            }
          },
          {
            value: 100-value, name: 'Email', label: { show: false }
          }
        ]
      }
    ]
  })
}
function initPipeTwo(){
  const pieTwo = echarts.init(document.getElementById('pie-two'))
  pieTwo.setOption({
    series: [
      // 进度圆
      {
        type: 'pie',
        radius: ['70%','80%'],
        startAngle: 225,
        endAngle: -45,
        itemStyle: { borderRadius: 30,color: 'transparent' },
        label: { show: false },
        data: [
          {
            value: 70,label: { show: false },itemStyle: { color: '#0098F4' }
          },
          {
            value: 0,label: {
              show: true,position: 'inside',
              padding: 16,
              borderRadius: 16,
              borderColor: '#FFD7A7',
              borderWidth: 4,
              backgroundColor: '#FF7A00'
            }
          },
          {
            value: 30,label: { show: false }, itemStyle: { color: '#ccc' }
          },
        ]
      },
      // 内圆
      {
        type: 'pie',
        radius: ['45%','50%'],
        label: {
          show: true,
          position: 'center',
          color: '#000',
          lineHeight: 60,
          formatter: ({ name,value }) => {
            return `{a|${name}}\n{b|${value}}`
          },
          rich: {

            a: { fontSize: 30,align: 'center', },
            b: {
              fontSize: 30,
              color: 'pink',
              align: 'center'
            }
          }
        },
        data: [
          { value: 100,name: 'name' }
        ]
      }
    ]
  })

}
onMounted(() => {
  initPipeOne()
  initPipeTwo()
})


const router = useRouter()
function nextPage(){
  router.push({ name: 'PieChartTwo' })
}
</script>
<template>
  <ChartLayout :next-page="nextPage">
    <main class="chart-container">
      <div class="first-box">
        <div id="pie-one" attr="chart" />
      </div>
      <div class="second-box">
        <div id="pie-two" attr="chart" />
      </div>
      <div class="third-box">
        <ul>
          <li>该图形由两个仪表盘(gauge)图表和一个饼图(pie)组成。</li>
          <li>由第一个仪表盘构成进度的模样，第二个仪表盘通过调整起始角度构成内圆。</li>
          <li>进度末端的圆点由饼图构成。需要将饼图调整为与进度模样的仪表盘的起始角度一直，重叠在一起。然后将饼图划分为三段，第一段的数值与进度数值一直，第二段的数值为空（给这个数据值设置label样式，即圆点），第三段为饼图总的数值大小减去第一段的数值。以此控制圆点位于进度的末端。</li>
        </ul>
      </div>
      <div class="fourth-box">
        <ul>
          <li class="font-weight-bold">
            通过两个饼图(pie)组成左侧的图形模型，简洁很多、还带trigger效果
          </li>
        </ul>
      </div>
    </main>
  </ChartLayout>
</template>
