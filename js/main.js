import Objects from './Objects.js'
import World from './World.js'
import RC from './RC.js'

// Create a scene
const setup = new World();
const objects = new Objects(setup.scene);
const RCcar = new RC();

objects.ball(1, 1, 1);
function generateRandomObjects(numObjects) {
 
  
    for (let i = 0; i < numObjects; i++) {
      const x = Math.floor(Math.random() * 12) - 6; // Random x coordinate between -6 and 6
      const y = Math.floor(Math.random() * 50);    // Random y coordinate between 0 and 500
      const z = Math.floor(Math.random() * 30) - 25; // Random z coordinate between -15 and 0
  
      objects.ball(x, y, z);
    }
  
  }
  
  // Generate 20 random objects
  const randomObjects = generateRandomObjects(200);



let car = objects.drawCar(0,0,0);



const animate = () => {
    requestAnimationFrame(animate);

    objects.physics.applyPhysics();

    objects.objects.forEach((object) => {
        object['mesh'].position.x = objects.physics.objects[object['name']].x;
        object['mesh'].position.y = objects.physics.objects[object['name']].y;
        object['mesh'].position.z = objects.physics.objects[object['name']].z;


            const closeness = 0.8;
            if(
                object['mesh'].position.x >= objects.physics.objects[car].x -closeness &&
                object['mesh'].position.x <= objects.physics.objects[car].x +closeness &&
                object['mesh'].position.z >= objects.physics.objects[car].z -closeness &&
                object['mesh'].position.z <= objects.physics.objects[car].z +closeness &&
                object['mesh'].position.y >= objects.physics.objects[car].y -closeness &&
                object['mesh'].position.y <= objects.physics.objects[car].y +closeness &&
                object['name'] !== car
            ){
                objects.physics.giveImpultion(object['name'], RCcar.Xcoef*2, 0.1, RCcar.Ycoef*2);
            }
        



        if(object['name'] === car){
            object['mesh'].rotation.y = RCcar.direction;
        }
        /*
        if(RCcar.move !== false) {
            if (RCcar.turn === "left") {
                RCcar.direction+=0.007;
            }if (RCcar.turn === "right") {
                RCcar.direction-=0.007;
            }
        }*/
    })
  
    if(RCcar.move !== false){
        objects.physics.giveImpultion(car, RCcar.Xcoef, 0, RCcar.Ycoef);
    }
    //objects.objects[car].rotation.y = RCcar.direction;


    setup.renderer.render(setup.scene, setup.camera);



};
animate();



