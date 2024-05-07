{
    // Abstraction : 1. Interface 2. abstract

    // Idea
    interface Vehicle1 {
        startEngine(): void;
        stopEngine(): void;
        move(): void;
    }

    // Real Implementation

    class Car1 implements Vehicle1 {
        startEngine(): void {
            console.log("I am starting the car engine")
        }
        stopEngine(): void {
            console.log("I am stopping the car engine")
        }
        move(): void {
            console.log("I am moving the car")
        }
    }

    const toyotaCar = new Car1();
    toyotaCar.startEngine();
    toyotaCar.stopEngine();
    toyotaCar.move();

    // Abstract class

    // idea

    abstract class Car2 {
        abstract startEngine(): void;
        abstract stopEngine(): void;
        abstract move(): void;
    }

    class ToyotaCar extends Car2 {
        startEngine(): void {
            console.log("I am starting the car engine")
        }
        stopEngine(): void {
            console.log("I am stopping the car engine")
        }
        move(): void {
            console.log("I am moving the car")
        }
    }
}