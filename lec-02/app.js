const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    20
);

camera.position.z=5;
const geometry = new THREE.BoxGeometry(1, 1,1);
const material = new THREE.MeshBasicMaterial({color:"red",wireframe:true});
const cube = new THREE.Mesh(geometry,material);
// cube.position.x=1;
// cube.position.y=1;
// cube.position.z=1;

// cube.scale.y=2;
// cube.rotation.y = 4;


scene.add(cube);


const canvas = document.querySelector("canvas");
const renderer = new THREE.WebGLRenderer({canvas: canvas});
renderer.setSize(window.innerWidth,window.innerHeight);
renderer.render(scene,camera);