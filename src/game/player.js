import { BoxGeometry, MeshStandardMaterial, Mesh, Vector3 } from 'three';
import { resolveCollisions } from './collision.js';

export default class Player {
  constructor(controls, obstacles) {
    this.controls = controls;
    this.obstacles = obstacles;
    this.speed = 5;
    this.velocity = new Vector3();
    this.direction = new Vector3();
    this.movementThisFrame = 0;

    const geometry = new BoxGeometry(1, 1, 1);
    const material = new MeshStandardMaterial({ color: 0x1e90ff });
    this.mesh = new Mesh(geometry, material);
    this.mesh.position.set(0, 0.5, 0);
  }

  update(delta) {
    const input = this.controls.getDirection();
    this.direction.set(input.x, 0, -input.y);

    if (this.direction.lengthSq() > 0) {
      this.direction.normalize();
      this.velocity.copy(this.direction).multiplyScalar(this.speed * delta);
    } else {
      this.velocity.set(0, 0, 0);
    }

    this.mesh.position.add(this.velocity);
    resolveCollisions(this, this.obstacles);
    this.movementThisFrame = this.velocity.length();
  }
}
