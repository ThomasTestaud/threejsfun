import DrawKit from './DrawKit.js'
import setupScene from './setup.js'
import physicsWorld from './physics.js'
import shooter from './shooter.js'

// Create a scene
const setup = new setupScene();
const physics = new physicsWorld(setup);
//const shooterSquare = new shooter();



const drawKit = new DrawKit(setup.scene);
// Draw car
let ball = drawKit.ball();
ball.scale.set(0.5,0.5,0.5);
ball.rotation.y = -1;
physics.addObject("ball", 0, 0, 4);






const body = document.querySelector('#controller');

    body.addEventListener('click', () => {
            
            const windowWidth = window.innerWidth;
            const rect = body.getBoundingClientRect();
            const mouseX = event.clientX - windowWidth/2;
            const mouseY = event.clientY - rect.top - 100;
            console.log('mouseX: '+mouseX);
            console.log('mouseY: '+mouseY);
            physics.giveImpultion("ball", mouseX/300*-1, mouseY/300, -0.2);
        })
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


