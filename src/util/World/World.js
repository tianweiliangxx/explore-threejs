import { createCamera } from "@/util/World/components/camera.js";
import { createCube } from "@/util/World/components/cube.js";
import { createLights } from "@/util/World/components/lights.js";
import { createScene } from "@/util/World/components/scene.js";

import { createRenderer } from "@/util/World/systems/renderer.js";
import { Resizer } from "@/util/World/systems/Resizer.js";
import { Loop } from "@/util/World/systems/Loop.js"

let camera;
let scene;
let renderer;
let loop;

class World{
  constructor(container) {
    camera = createCamera()
    scene = createScene()
    renderer = createRenderer()
    loop = new Loop(camera, scene, renderer)
    container.append(renderer.domElement)

    const cube = createCube()
    const light = createLights()
    loop.updatables.push(cube);

    scene.add(cube, light)

    const resizer = new Resizer(container, camera, renderer)
    // resizer.onResize = () => {
    //   this.render()
    // }
  }
  render() {
    renderer.render(scene, camera)
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}
export { World }
