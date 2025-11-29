import {
  AmbientLight,
  DirectionalLight,
  PlaneGeometry,
  MeshStandardMaterial,
  Mesh,
  BoxGeometry,
} from 'three';

export function createWorld(scene) {
  const ambient = new AmbientLight(0xffffff, 0.5);
  const sun = new DirectionalLight(0xfff2d7, 1.2);
  sun.position.set(5, 10, 7);
  sun.castShadow = false;

  const groundGeometry = new PlaneGeometry(40, 40);
  const groundMaterial = new MeshStandardMaterial({ color: 0x1c1f26 });
  const ground = new Mesh(groundGeometry, groundMaterial);
  ground.rotation.x = -Math.PI * 0.5;
  ground.position.y = 0;
  ground.receiveShadow = true;

  const obstacleGeometry = new BoxGeometry(2, 2, 2);
  const obstacleMaterial = new MeshStandardMaterial({ color: 0xff5c8d });
  const obstacleA = new Mesh(obstacleGeometry, obstacleMaterial.clone());
  obstacleA.position.set(-3, 1, -2);
  const obstacleB = new Mesh(obstacleGeometry, obstacleMaterial.clone());
  obstacleB.position.set(4, 1, 3);

  scene.add(ambient, sun, ground, obstacleA, obstacleB);

  const obstacles = [obstacleA, obstacleB];
  const scoreElement = document.getElementById('score-value');
  let score = 0;
  let playerRef = null;

  return {
    ground,
    obstacles,
    setPlayer(player) {
      playerRef = player;
    },
    update(delta) {
      if (!playerRef) return;
      if (playerRef.movementThisFrame > 0) {
        score += playerRef.movementThisFrame * 10;
        if (scoreElement) {
          scoreElement.textContent = Math.floor(score).toString();
        }
      }
    },
  };
}
