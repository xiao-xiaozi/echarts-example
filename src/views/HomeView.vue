<script setup>
</script>

<template>
  <main>
    <h1>echarts example</h1>
    <div>
      <RouterLink to="/pieChart" class="navigate-chart">
        饼图
      </RouterLink>
      <RouterLink to="/barChart" class="navigate-chart">
        柱状图
      </RouterLink>
      <RouterLink to="/gaugeChart" class="navigate-chart">
        仪表盘
      </RouterLink>
    </div>
  </main>
</template>
<style>
h1 {
  text-align: center;
}

.navigate-chart {
  padding-left: 10px;
  padding-right: 10px;
}
</style>
