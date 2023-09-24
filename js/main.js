import DrawKit from './DrawKit.js'
import setupScene from './setup.js'
import physicsWorld from './physics.js'
import shooterSquare from './shooter.js'

// Create a scene
const setup = new setupScene();
//const physics = new physicsWorld(setup);
const physics = new shooterSquare(setup);



const drawKit = new DrawKit(setup.scene);

let ball = drawKit.ball();
ball.scale.set(0.5,0.5,0.5);
ball.rotation.y = -1;
physics.addObject("ball", 0, 0, 4);

let car = drawKit.drawCar();
car.scale.set(0.5,0.5,0.5);
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


