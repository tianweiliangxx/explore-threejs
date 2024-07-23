import { WebGLRenderer } from "three";

function createRenderer() {
  const renderer = new WebGLRenderer();

  // 开启物理渲染
  renderer.physicallyCorrectLights = true
  return renderer;
}

export { createRenderer }
