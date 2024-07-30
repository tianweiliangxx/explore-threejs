import { Clock } from "three";
import scene from "three/addons/offscreen/scene.js";

const clock = new Clock();

class Loop {
    constructor(camera, scene, renderer) {
        this.camera = camera;
        this.scene = scene;
        this.renderer = renderer;

        // 动画数组
        this.updatables = [];
    }

    start() {
        this.renderer.setAnimationLoop(() => {
            this.tick()
            this.renderer.render(this.scene, this.camera)
        })
    }

    stop() {
        this.renderer.setAnimationLoop(null)
    }

    tick() {
        const delta = clock.getDelta();
        for(const object of this.updatables) {
            object.tick(delta)
        }
    }
}

export { Loop }