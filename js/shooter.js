import physicsWorld from './physics.js'

class shooterSquare extends physicsWorld {

    mainObject = "ball";

    constructor() {
        super();

        this.body = document.querySelector('#controller');
        this.body.addEventListener('click', () => {
            this.shoot();
        })
    }
    
    shoot() {
        const windowWidth = window.innerWidth;
        const rect = this.body.getBoundingClientRect();
        const mouseX = event.clientX - windowWidth/2;
        const mouseY = event.clientY - rect.top - 100;
        this.giveImpultion(this.mainObject, mouseX/300*-1, mouseY/300, -0.2);
        console.log(this.world.camera);
        this.world.camera.position.y += 1;
    }
}

export default shooterSquare;