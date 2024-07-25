import {BoxGeometry, CircleGeometry, Mesh, MeshBasicMaterial, MeshStandardMaterial, Vector3, MathUtils} from "three";

function createCube() {
  // 立方体
  const geometry = new BoxGeometry(2,2,2);
  // 圆形
  // const geometry = new CircleGeometry(1, 32);
  const material = new MeshStandardMaterial({ color: "purple" });

  const cube = new Mesh(geometry, material);
  // let vector = new Vector3(1, 0, 0 )
  // console.log(vector);

  // 平移
  cube.position.set(1, 1, 1)
  // 缩放
  cube.scale.set(1.5, 1, 1)
  // 角度转成弧度
  const rads = MathUtils.degToRad(45);
  // 旋转
  cube.rotation.set(rads, 0, 0);
  // cube.position = new Vector3(1, 0, 0 );

  // cube.rotation.set(1, 1, 1)

  return cube;
}

export { createCube }
