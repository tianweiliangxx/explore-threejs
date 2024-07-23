import { BoxGeometry, CircleGeometry, Mesh, MeshBasicMaterial, MeshStandardMaterial } from "three";

function createCube() {
  // 立方体
  const geometry = new BoxGeometry(2,2,2);
  // 圆形
  // const geometry = new CircleGeometry(1, 32);
  const material = new MeshStandardMaterial({ color: "purple" });

  const cube = new Mesh(geometry, material);

  cube.rotation.set(-0.5, -1, 0.8)

  return cube;
}

export { createCube }
