import { PerspectiveCamera } from 'three';

const camera = new PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 4, 8);

export function followPlayer(player) {
  if (!player) return;
  const { position } = player.mesh;
  camera.position.x = position.x + 4;
  camera.position.y = 4;
  camera.position.z = position.z + 8;
  camera.lookAt(position.x, position.y + 1, position.z);
}

export default camera;
