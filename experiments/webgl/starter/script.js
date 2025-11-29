const canvas = document.getElementById("glcanvas");
const gl = canvas.getContext("webgl");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

if (!gl) {
  alert("WebGL not supported");
}

// Load shader
function loadShader(type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  return shader;
}

async function loadText(url) {
  const res = await fetch(url);
  return res.text();
}

async function main() {
  const vertexSrc = await loadText("vertex.glsl");
  const fragmentSrc = await loadText("fragment.glsl");

  const vertexShader = loadShader(gl.VERTEX_SHADER, vertexSrc);
  const fragmentShader = loadShader(gl.FRAGMENT_SHADER, fragmentSrc);

  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  gl.useProgram(program);

  const vertices = new Float32Array([
     0.0,  1.0,
    -1.0, -1.0,
     1.0, -1.0,
  ]);

  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

  const position = gl.getAttribLocation(program, "position");
  gl.enableVertexAttribArray(position);
  gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

  function animate() {
    gl.clearColor(0.05, 0.05, 0.07, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.drawArrays(gl.TRIANGLES, 0, 3);
    requestAnimationFrame(animate);
  }

  animate();
}

main();
