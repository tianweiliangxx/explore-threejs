import { BoxGeometry, CircleGeometry, Mesh, MeshBasicMaterial } from "three";

function createCube() {
  // 立方体
  const geometry = new BoxGeometry(2,2,2);
  // 圆形
  // const geometry = new CircleGeometry(1, 32);
  const material = new MeshBasicMaterial();

  const cube = new Mesh(geometry, material);

  return cube;
}

export { createCube }
