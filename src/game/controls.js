import { Vector2 } from 'three';

class Controls {
  constructor() {
    this.direction = new Vector2();
    this.keys = new Set();
    window.addEventListener('keydown', (event) => this.onKeyDown(event));
    window.addEventListener('keyup', (event) => this.onKeyUp(event));
  }

  onKeyDown(event) {
    const key = event.key.toLowerCase();
    if (['w', 'a', 's', 'd'].includes(key)) {
      this.keys.add(key);
    }
  }

  onKeyUp(event) {
    const key = event.key.toLowerCase();
    if (['w', 'a', 's', 'd'].includes(key)) {
      this.keys.delete(key);
    }
  }

  getDirection() {
    this.direction.set(0, 0);
    if (this.keys.has('w')) this.direction.y += 1;
    if (this.keys.has('s')) this.direction.y -= 1;
    if (this.keys.has('a')) this.direction.x -= 1;
    if (this.keys.has('d')) this.direction.x += 1;
    return this.direction.clone();
  }

  update(delta) {}
}

export default function createControls() {
  return new Controls();
}
