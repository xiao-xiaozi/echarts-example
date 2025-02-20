<script setup>
import * as echarts from "echarts"
import { onMounted } from "vue"

function initPieThird(){
  const pieThird = echarts.init(document.getElementById('pie-third'))
  pieThird.setOption({
    series: [
      // 背景圆弧
      {
        type: 'pie',
        label: { show: false },
        itemStyle: { color: "#A1EDA9" },
        startAngle: 180,
        endAngle: 360,
        radius: ['70%','80%'],
        data: [{ value: 100 }]
      },
      // 进度圆弧
      {
        type: 'pie',
        label: { show: false },
        startAngle: 180,
        endAngle: 360,
        radius: ['70%','80%'],
        itemStyle: { borderJoin: 'round' },
        data: [{ value: 70,itemStyle: { borderRadius: [0,10,0,10],color: '#35C833' }},{ value: 30,itemStyle: { color: 'transparent' }}]
      },
      // 内圈圆弧
      {
        type: 'pie',
        label: { show: false },
        itemStyle: { color: "#D8EDDB" },
        startAngle: 180,
        endAngle: 360,
        radius: ['60%','70%'],
        data: [{ value: 100 }]
      },
    ]
  })
}

function initPieFourth(){
  const pieFourth = echarts.init(document.getElementById('pie-fourth'))

  // label标签位于左侧
  const arrowLeftLabel = {
    shadowOffsetX: 2,
    formatter: ({
      name,value,percent
    }) => {
      return `{name|${name}}{icon| }\n{value|${value}}占比{percent|${percent}%}`
    },
    padding: [5,10,0,0]
  }
  // label标签位于右侧
  const arrowRightLabel = {
    shadowOffsetX: -2,
    formatter: ({
      name,value,percent
    }) => {
      return `{icon| }{name|${name}}\n{value|${value}}占比{percent|${percent}}%`
    },
    padding: [5,0,0,10],
    rich: { value: { padding: [0,8,0,0] }}
  }

  pieFourth.setOption({
    tooltip: { trigger: 'item',appendTo: 'body' },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        type: 'pie',
        radius: '45%',
        emptyCircleStyle: { color: "rgba(58,175,255,0.10) " }
      },
      {
        name: 'Access From',
        type: 'pie',
        radius: ['30%', '35%'],
        avoidLabelOverlap: true,
        padAngle: 5, // 饼图扇区之间的角度间隔
        itemStyle: { borderRadius: 10 },
        label: {
          show: true,
          position: 'outside',
          width: 120,
          height: 60,
          borderRadius: 10,
          backgroundColor: '#abddff',
          shadowColor: 'rgba(58,175,256,1)',
          rich: {
            icon: {
              width: 16,
              height: 16,
              backgroundColor: { image: '/src/assets/gift.png' }
            },
            name: { fontSize: 14,align: 'center' },
            value: {
              align: 'center',
              fontSize: 16,
              lineHeight: 50
            },
            percent: {
              fontSize: 14,
              fontWeight: 'bold'
            }
          }
        },
        labelLine: {
          show: true,
          length: 40,
          length2: 30,
          lineStyle: { cap: 'round' }
        },
        data: [
          {
            value: 580,
            name: 'Email',
            label: arrowRightLabel
          },
          {
            value: 380,
            name: 'Union Ads',
            label: arrowLeftLabel
          },
          {
            value: 400,
            name: 'Video Ads',
            label: arrowLeftLabel
            ,
          }
        ]
      },
      {
        type: 'pie',
        radius: ['24%', '25%'],
        emptyCircleStyle: { color: "#000" }
      }
    ]
  })
}

onMounted(() => {
  initPieThird()
  initPieFourth()
})
</script>
<template>
  <main class="chart-container">
    <div class="first-box">
      <div id="pie-third" attr="chart" />
    </div>
    <div class="second-box">
      <div id="pie-fourth" attr="chart" />
    </div>
    <div class="third-box">
      <ul>
        <li>通过三个饼图(pie)，实现进度末端为圆形。</li>
        <li>进度末端圆形主要是通过itemStyle.borderRadius调整内外圆的圆角半径数值，可以指定四个角各自的数值。</li>
      </ul>
    </div>
    <div class="fourth-box">
      <ul>
        <li>通过formatter和rich实现label的多文本块且不同样式。rich支持自定义元素插入图片。</li>
        <li>label.backgroundColor的值带有透明度，会影响shadowColor的值也具备透明度。但反过来，shadowColor的透明度不会影响label.backgroundColor的颜色值。通过shadowColor模拟单侧边框线时，label.backgroundColor和shadowColor的透明度必须一致，或label.backgroundColor值需没有透明度或非渐变色。</li>
      </ul>
    </div>
  </main>
</template>
