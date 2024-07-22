<script setup>
/**
 * 第一个threejs场景
 */
import * as Three from "three"
import { onMounted } from "vue";

onMounted(() => {
  init()
})

const init = () => {
  const container = document.querySelector("#scene-container")
  const scene = new Three.Scene()
  scene.background = new Three.Color("skyblue")

  // Create a camera
  const fov = 35; // AKA Field of View
  const aspect = container.clientWidth / container.clientHeight;
  const near = 0.1; // the near clipping plane
  const far = 100; // the far clipping plane
  const camera = new Three.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 0, 10)

  // 立方体
  const geometry = new Three.BoxGeometry(2, 2, 2)

  // 材质，默认白色
  const material = new Three.MeshBasicMaterial();
  const cube = new Three.Mesh(geometry, material);
  scene.add(cube)

  const renderer = new Three.WebGLRenderer();
  renderer.setSize(container.clientWidth, container.clientHeight)
  // 设置设备像素比
  renderer.setPixelRatio(window.devicePixelRatio);
  container.append(renderer.domElement);
  renderer.render(scene, camera);
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
