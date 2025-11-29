import { Clock } from 'three';

const updatables = [];

export function addUpdatable(entity) {
  if (entity && typeof entity.update === 'function') {
    updatables.push(entity);
  }
}

export function startLoop(renderer, scene, camera) {
  const clock = new Clock();

  function tick() {
    const delta = clock.getDelta();
    updatables.forEach((entity) => {
      entity.update(delta);
    });
    renderer.render(scene, camera);
    requestAnimationFrame(tick);
  }

  tick();
}
