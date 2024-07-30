import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

function createControls(camera, canvas) {
    const controls = new OrbitControls(camera, canvas);
    // controls.target.set(1,2,3)
    // controls.enablePan = false // 禁用平移
    controls.enableDamping = true;

    controls.tick = () => controls.update();
    controls.autoRotate = true; // 自动旋转
    controls.autoRotateSpeed = 1;
    return controls;
}

export { createControls }