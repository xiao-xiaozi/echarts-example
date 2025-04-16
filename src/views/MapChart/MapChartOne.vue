<script setup>
import ChartLayout from '@/components/ChartLayout.vue';
import * as echarts from "echarts"
import { onMounted } from 'vue';
import GuangDongJson from "@/assets/mapJson/GuangDong.json"

function initMapChartOne(){
  echarts.registerMap('GuangDong',GuangDongJson)
  const chart = echarts.init(document.getElementById('mapChart-one'))
  chart.setOption({
    // geo: {
    //   map: 'GuangDong',
    //   label: {
    //     show: true,
    //     color: 'pink',
    //   },
    //   itemStyle: {
    //     areaColor: 'rgba(19,55,122,0.7)',
    //     borderColor: '#57BBFF',
    //     borderWidth: 1,
    //     shadowColor: 'rgba(30,157,244,0.40)',
    //     shadowBlur: 30,
    //     shadowOffsetX: 0,
    //     shadowOffsetY: 0
    //   },
    // }
    series: [
      {
        type: 'map',
        map: 'GuangDong'
      }
    ]
  })
}

onMounted(() => {
  initMapChartOne()
})
</script>
<template>
  <ChartLayout>
    <main class="chart-container">
      <div class="first-box">
        <div id="mapChart-one" attr="chart" />
      </div>
      <div class="second-box">2</div>
      <div class="third-box">
        <ul>
          <li>geo地理坐标系组件，为散点图（scatter或effectScatter）提供坐标。在某种程度上也可以模拟series.type="map"的效果</li>
          <li>如果是仅需要地图，可以通过geo或series.type="map"来实现。</li>
        </ul>
      </div>
      <div class="fourth-box">4</div>
    </main>
  </ChartLayout>
</template>
