import Objects from './Objects.js'
import World from './World.js'
import Physics from './Physics.js'

// Create a scene
const setup = new World();
const physics = new Physics(setup);
const drawKit = new Objects(setup.scene);

let ball = drawKit.ball();

ball.rotation.y = -1;
physics.addObject("ball", 0, 0, 4);

let car = drawKit.drawCar();
car.rotation.y = -1;
physics.addObject("car", 0, 0, 4);

//physics.giveImpultion("ball", 0.02, 0.2, -0.2);

let poles = drawKit.rugbyPoles(0, 0, -3);



const animate = () => {
    requestAnimationFrame(animate);

    physics.applyPhysics();
    ball.position.x = physics.objects.ball.x;
    ball.position.y = physics.objects.ball.y;
    ball.position.z = physics.objects.ball.z;
  
    setup.renderer.render(setup.scene, setup.camera);
};
animate();


