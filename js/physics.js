
class physicsWorld {

    groundBounce = 0.5; // 1 = maximum bounce, 0 = no bounce
    airDrag = 0.99; // 1 = no grad, 0 = maximum drag
    gravity = 0.005;
    floorHeight = 0;
    floorDrag = 0.5;

    constructor(world) {
        this.world = world;
        this.objects = [];
        //this.timeLoop();
    }

    addObject(name, x = 0, y = 0, z = 0) {
        const object = {
            x: x,
            y: y,
            z: z,
            xV: 0,
            yV: 0,
            zV: 0,
        };
        this.objects[name] = object;
        console.log(this.objects);
    }

    giveImpultion(object, x = 0, y = 0, z = 0) {
        this.objects[object].xV = x;
        this.objects[object].yV = y;
        this.objects[object].zV = z;
    }

    applyPhysics() {
        const objectsArray = Object.values(this.objects);
    
        objectsArray.forEach((object) => {
            //object.yV *= this.airDrag;
            if (object.y >= this.floorHeight) {
                object.y += object.yV;
                object.yV -= this.gravity;
            } else {
                object.y = this.floorHeight;
                object.yV = object.yV *-this.groundBounce;
                object.xV *= this.floorDrag;
                object.zV *= this.floorDrag;
            }
            object.xV *= this.airDrag;
            object.x += object.xV;
            object.z += object.zV;
        });
    }

    timeLoop() {
        const animate = () => {
            requestAnimationFrame(animate);
            this.applyPhysics();  
            this.world.renderer.render(this.world.scene, this.world.camera);
        };
        animate();
    }
}

export default physicsWorld;