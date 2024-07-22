
<script setup>
/**
 * 封装
 */
import * as Three from "three"
import { onMounted } from "vue";

onMounted(() => {
  init()
})

const init = () => {

}

</script>

<template>
  <div id="scene-container"></div>
</template>

<style scoped>
#scene-container {
  width: 100vw;
  height: 100vh;
}
</style>
