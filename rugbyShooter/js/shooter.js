
class shooter {

    constructor() {
        this.body = document.querySelector('#controller');

        this.body.addEventListener('click', () => {
            
            this.shoot();
            const windowWidth = window.innerWidth;
            const rect = this.body.getBoundingClientRect();
            const mouseX = event.clientX - windowWidth/2;
            const mouseY = event.clientY - rect.top - 100;
            console.log('mouseX: '+mouseX);
            console.log('mouseY: '+mouseY);
        })
    }

    shoot() {


    }
}

export default shooter;