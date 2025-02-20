<script setup>
import * as echarts from "echarts"
import { onMounted } from "vue"

function initPieFifth(){
  const pieFifth = echarts.init(document.getElementById('pie-fifth'))
  const colors = ['#FFCA55','#C24EEB','#3AAFFF','#30E18A','#FD8336']

  function generateSeries(values) {
    if(!Array.isArray(values)) return []
    return values.map((val, index) => {
      const thickness = 5; // 饼环的厚度
      const gap = 8;      // 饼环之间的间距（按百分比调整）
      const innerRadius = 20 + index * (thickness + gap) + '%';
      const outerRadius = 20 + index * (thickness + gap) + thickness + '%';

      return {
        type: 'pie',
        label: { show: false },
        clockwise: false,
        startAngle: 90,
        endAngle: 360,
        radius: [innerRadius, outerRadius], // 内半径与外半径
        itemStyle: { borderRadius: 10 },
        roundCap: true,
        data: val >0?[
          { value: val,itemStyle: { color: colors[index] }},
          { value: 100-val,itemStyle: { color: 'transparent' }}
        ]:[{ value: 100-val,itemStyle: { color: '#eee' }}]
      };
    })
  }
  pieFifth.setOption({ series: generateSeries([0,0,0,0,0]).concat(generateSeries([10,20,30,40,50])) })
}

onMounted(() => {
  initPieFifth()
})
</script>
<template>
  <main class="chart-container">
    <div class="first-box">
      <div id="pie-fifth" attr="chart" />
    </div>
    <div class="second-box">2</div>
    <div class="third-box">
      <ul>
        <li>圆环等距排列。</li>
      </ul>
    </div>
    <div class="fourth-box">4</div>
  </main>
</template>
