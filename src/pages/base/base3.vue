
<script setup>
/**
 * 变换
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

</style>
