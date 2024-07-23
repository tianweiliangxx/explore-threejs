class Resizer {
  constructor(container, camera, renderer) {
    camera.aspect = container.clientWidth / container.clientHeight;
    // update the camera's frustum
    camera.updateProjectionMatrix();

    renderer.setSize(container.clientWidth, container.clientHeight);

    renderer.setPixelRatio(window.devicePixelRatio);
  }

}

export { Resizer }
