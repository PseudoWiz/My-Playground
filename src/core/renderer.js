import { WebGLRenderer, Color } from 'three';

const renderer = new WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setClearColor(new Color('#0f1115'));

document.getElementById('app').appendChild(renderer.domElement);

export default renderer;
