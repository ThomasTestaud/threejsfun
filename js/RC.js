class RC {
    turn = false;
    move = false;
    speed = 0;
    direction = 0;
    Ycoef = 0;
    Xcoef = 0;

    constructor() {
        this.mapAccelerate();
        this.mapDecelerate();
        this.mapTurnLeft();
        this.mapTurnRight();
        document.addEventListener("keydown", () => {
            this.calculateSpeed();
        })
        document.addEventListener("keyup", () => {
            this.calculateSpeed();
        })
    }

    calculateSpeed() {
        if (this.move === "forward") {
            this.speed = -0.1;
        }if (this.move === "backward") {
            this.speed = 0.1;
            
        }if (this.move === false) {
            this.speed = 0;  
        }if (this.turn === "left") {
            //this.direction+=0.2;
            let run = setInterval(() => {
                this.direction += 0.01;
            }, 10);
            setTimeout(()=> {
                clearInterval(run);
            },200)
        }if (this.turn === "right") {
            let run = setInterval(() => {
                this.direction -= 0.01;
            }, 10);
            setTimeout(()=> {
                clearInterval(run);
            },200)
            //this.direction-=0.2;
        }
        this.calculateDirection();
    }

    calculateDirection() {
        this.Ycoef = this.speed * (Math.cos(this.direction));
        this.Xcoef = this.speed * (Math.sin(this.direction));
    }

    mapAccelerate() {
        document.addEventListener("keydown", () => {
            console.log('arrow up');
            if (event.code === "ArrowUp") {
                this.move = "forward";
            }
        })
        document.addEventListener("keyup", () => {
            if (event.code === "ArrowUp") {
                this.move = false;
            }
        })
    }

    mapDecelerate() {
        document.addEventListener("keydown", () => {
            if (event.code === "ArrowDown") {
                this.move = "backward";
            }
        })
        document.addEventListener("keyup", () =>{
            if (event.code === "ArrowDown") {
                this.move = false;
            }
        })
    }

    mapTurnLeft() {
        document.addEventListener("keydown", () => {
            if (event.code === "ArrowLeft") {
                this.turn = "left";
            }
        })
        document.addEventListener("keyup", () => {
            if (event.code === "ArrowLeft") {
                this.turn = false;
            }
        })
    }

    mapTurnRight() {
        document.addEventListener("keydown", () => {
            if (event.code === "ArrowRight") {
                this.turn = "right";
            }
        })
        document.addEventListener("keyup", () => {
            if (event.code === "ArrowRight") {
                this.turn = false;
            }
        })
    }

}

export default RC
