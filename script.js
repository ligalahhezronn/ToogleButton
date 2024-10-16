// Initialize the Three.js Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 2, 8);

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true; // Enable shadows
document.body.appendChild(renderer.domElement);

// Load texture for the cube
const textureLoader = new THREE.TextureLoader();
const cubeTexture = textureLoader.load('https://threejs.org/examples/textures/crate.gif');

// Cube
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshStandardMaterial({ map: cubeTexture });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.position.set(-2, 1, 0);
cube.castShadow = true;
scene.add(cube);

// Sphere
const sphereGeometry = new THREE.SphereGeometry(0.7, 32, 32);
const sphereMaterial = new THREE.MeshStandardMaterial({ color: 0x44aa88 });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.set(2, 1, 0);
sphere.castShadow = true;
scene.add(sphere);

// Torus
const torusGeometry = new THREE.TorusGeometry(0.7, 0.2, 16, 100);
const torusMaterial = new THREE.MeshStandardMaterial({ color: 0x8844aa });
const torus = new THREE.Mesh(torusGeometry, torusMaterial);
torus.position.set(0, 1, 2);
torus.castShadow = true;
scene.add(torus);

// Ground Plane
const planeGeometry = new THREE.PlaneGeometry(10, 10);
const planeMaterial = new THREE.MeshStandardMaterial({ color: 0x888888 });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -Math.PI / 2;
plane.receiveShadow = true;
scene.add(plane);

// Lighting
const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(2, 5, 3);
scene.add(pointLight);

const spotLight = new THREE.SpotLight(0xffffff, 0.7);
spotLight.position.set(-5, 7, 5);
spotLight.castShadow = true;
spotLight.angle = Math.PI / 6;
scene.add(spotLight);

const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
scene.add(ambientLight);

// Resize event listener
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    
    // Rotate objects
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    
    sphere.rotation.x += 0.005;
    sphere.rotation.y += 0.01;

    torus.rotation.x += 0.02;
    torus.rotation.y += 0.03;

    renderer.render(scene, camera);
}

animate();

// Lock Button Toggle
let lock = document.getElementById("lock");
let box = document.getElementById("box");

box.addEventListener('click', function() {
    box.classList.toggle("active");
    
    if (box.classList.contains("active")) {
        lock.classList.replace("bxs-lock-open", "bxs-lock");
    } else {
        lock.classList.replace("bxs-lock", "bxs-lock-open");
    }
});
