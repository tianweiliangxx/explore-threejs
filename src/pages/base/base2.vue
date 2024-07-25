
<script setup>
/**
 * 封装
 */
import * as Three from "three"
import { onMounted } from "vue";
import { World } from "@/util/World/World.js"

onMounted(() => {
  main()
})

const main = () => {
  const container = document.querySelector("#scene-container")

  const world = new World(container)

  world.render()
}

</script>

<template>
<!--  <button @click="main">渲染</button>-->
  <div id="scene-container"></div>
</template>

<style scoped>
#scene-container {
  width: 100vw;
  height: 100vh;
}
</style>
