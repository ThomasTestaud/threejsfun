import Objects from './Objects.js'
import World from './World.js'

// Create a scene
const setup = new World();
const objects = new Objects(setup.scene);

objects.ball(1, 1, 1);

objects.physics.giveImpultion("ball", -0.1, -0.2, 0);



const animate = () => {
    requestAnimationFrame(animate);

    objects.physics.applyPhysics();

    objects.objects.forEach((object) => {
        object['mesh'].position.x = objects.physics.objects[object['name']].x;
        object['mesh'].position.y = objects.physics.objects[object['name']].y;
        object['mesh'].position.z = objects.physics.objects[object['name']].z;
    })
  
    setup.renderer.render(setup.scene, setup.camera);
};
animate();



