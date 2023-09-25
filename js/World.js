import Objects from './Objects.js'
import Physics from './Physics.js'

class World {

    constructor() {
        this.setup3D();

        this.physics = new Physics();
        this.objects = new Objects(this.scene);

        //this.renderLoop();

    }

    newObject(object) {

    }

    renderLoop() {
        const animate = () => {
            requestAnimationFrame(animate);
            //this.applyPhysics();  

            this.renderer.render(this.scene, this.camera);
        
        };
        animate();
    }

    setup3D() {
        this.scene = new THREE.Scene();
        
        // Create a camera
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.z = 6;
        this.camera.position.y = 1;
        this.camera.position.x = 0;
        
        // Create a renderer with shadow support
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.shadowMap.enabled = true; // Enable shadows
        document.body.appendChild(this.renderer.domElement);
        
        // Create a floor (green plane) that receives shadows
        const floorGeometry = new THREE.PlaneGeometry(10, 10, 32, 32);
        const floorMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00, side: THREE.DoubleSide });
        const floor = new THREE.Mesh(floorGeometry, floorMaterial);
        floor.rotation.x = Math.PI / 2; // Rotate the floor to be horizontal
        floor.receiveShadow = true; // Enable shadow receiving for the floor
        this.scene.add(floor);
        
        // Create a directional light with shadows
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1.3);
        directionalLight.position.set(1, 3, 2); // Adjust the light's position
        directionalLight.castShadow = true; // Enable shadow casting for the light
        this.scene.add(directionalLight);
        
        // Set up shadow properties for the light
        directionalLight.shadow.mapSize.width = 1024;
        directionalLight.shadow.mapSize.height = 1024;
        directionalLight.shadow.camera.near = 0.5;
        directionalLight.shadow.camera.far = 50;
    }
}

export default World;