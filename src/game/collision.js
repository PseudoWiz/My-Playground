import { Box3 } from 'three';

const tempPlayerBox = new Box3();
const tempObstacleBox = new Box3();

export function resolveCollisions(player, obstacles) {
  if (!player || !obstacles?.length) return;
  tempPlayerBox.setFromObject(player.mesh);

  obstacles.forEach((obstacle) => {
    tempObstacleBox.setFromObject(obstacle);
    if (tempPlayerBox.intersectsBox(tempObstacleBox)) {
      player.mesh.position.sub(player.velocity);
      player.velocity.set(0, 0, 0);
      tempPlayerBox.setFromObject(player.mesh);
    }
  });
}
