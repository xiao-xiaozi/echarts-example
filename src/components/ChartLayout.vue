<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const { nextPage,prePage } = defineProps({
  nextPage: {
    type: [null,Function],
    default: undefined
  },
  prePage: {
    type: [null,Function],
    default: undefined
  }
})

const showArrowLeft = computed(() => typeof prePage === 'function')
const showArrowRight = computed(() => typeof nextPage === 'function')

const router = useRouter()
function backToHome(){
  router.push({ path: '/' })
}
</script>
<template>
  <div class="chart-layout">
    <span class="iconfont icon-home" @click="backToHome" />
    <span v-if="showArrowLeft" class="iconfont icon-arrow chart-arrow chart-arrow_left" @click="prePage" />
    <slot />
    <span v-if="showArrowRight" class="iconfont icon-arrow chart-arrow chart-arrow_right" @click="nextPage" />
  </div>
</template>
<style scoped>
.chart-arrow {
  font-size: 60px;
  cursor: pointer;
  opacity: 0.1;
  transition: opacity 0.5s;
  position: absolute;
  top: 10%;
  z-index: 10;
}

.icon-home {
  font-size: 30px;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 10px;
  z-index: 10;
}

.chart-arrow:hover {
  opacity: 1;
}

.chart-arrow_right {
  right: 0;
  transform: rotate(180deg);
}
</style>
