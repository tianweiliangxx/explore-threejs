import { createCamera } from "@/util/World/components/camera.js";
import { createCube } from "@/util/World/components/cube.js";
import { createScene } from "@/util/World/components/scene.js";

import { createRenderer } from "@/util/World/systems/renderer.js";
import { Resizer } from "@/util/World/systems/Resizer.js";

let camera;
let scene;
let renderer;

class World{
  constructor(container) {
    camera = createCamera()
    scene = createScene()
    renderer = createRenderer()
    container.append(renderer.domElement)

    const cube = createCube()
    const cube2 = createCube()
    cube2.position.set(10, 11, 40)
    scene.add(cube)
    scene.add(cube2)


    const resizer = new Resizer(container, camera, renderer)
  }
  render() {
    renderer.render(scene, camera)
  }
}
export { World }
