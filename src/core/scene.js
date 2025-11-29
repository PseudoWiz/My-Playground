import { Scene, Color, FogExp2 } from 'three';

const scene = new Scene();
scene.background = new Color('#111418');
scene.fog = new FogExp2('#0d0f12', 0.045);

export default scene;
