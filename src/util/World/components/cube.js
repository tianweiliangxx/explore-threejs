import {
  BoxGeometry,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
  TextureLoader,
} from "three";

function createMaterial() {
  const textureLoader = new TextureLoader();

  const texture = textureLoader.load('/textures/uv-test-bw.png')

  const material = new MeshStandardMaterial({
    map: texture,
  });

  return material;
}

function createCube() {
  // 立方体
  const geometry = new BoxGeometry(2,2,2);
  // 圆形
  // const geometry = new CircleGeometry(1, 32);
  // 材质
  const material = createMaterial()

  const cube = new Mesh(geometry, material);

  // 旋转
  cube.rotation.set(-0.5, -0.1, 0.8);

  const radiansPerSecond = MathUtils.degToRad(30);

  cube.tick = (delta) => {
    cube.rotation.z += radiansPerSecond * delta;
    cube.rotation.x += radiansPerSecond * delta;
    cube.rotation.y += radiansPerSecond * delta;
  }

  return cube;
}

export { createCube }
