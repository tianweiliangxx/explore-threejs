import { createCamera } from "@/util/World/components/camera.js";
import { createCube } from "@/util/World/components/cube.js";
import { createLights } from "@/util/World/components/lights.js";
import { createScene } from "@/util/World/components/scene.js";

import { createRenderer } from "@/util/World/systems/renderer.js";
import { Resizer } from "@/util/World/systems/Resizer.js";
import { Loop } from "@/util/World/systems/Loop.js"
import { createControls } from "@/util/World/systems/controls.js";

let camera;
let scene;
let renderer;
let loop;

class World{
  constructor(container) {
    camera = createCamera()
    scene = createScene()
    renderer = createRenderer()

    const controls = createControls( camera, renderer.domElement );

    loop = new Loop(camera, scene, renderer)

    loop.updatables.push(controls);

    container.append(renderer.domElement)

    const cube = createCube()
    const light = createLights()
    // controls.target.copy(cube.position);

    // 动画
    // loop.updatables.push(cube);

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
