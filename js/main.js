import Objects from './Objects.js'
import World from './World.js'
import Physics from './Physics.js'

// Create a scene
const setup = new World();
const physics = new Physics(setup);
const objects = new Objects(setup.scene);

objects.ball();
physics.addObject("ball", 0, 0, 4);
physics.giveImpultion("ball", 0.02, 0.2, -0.2);

objects.drawCar();
physics.addObject("car", 3, 0, 0);
physics.giveImpultion("car", -0.1, 0.1, 0);



const animate = () => {
    requestAnimationFrame(animate);

    physics.applyPhysics();

    objects.objects.forEach((object) => {
        console.log(object);
        object['mesh'].position.x = physics.objects[object['name']].x;
        object['mesh'].position.y = physics.objects[object['name']].y;
        object['mesh'].position.z = physics.objects[object['name']].z;
    })
  
    setup.renderer.render(setup.scene, setup.camera);
};
animate();



