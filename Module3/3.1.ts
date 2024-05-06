{
    // OOP - class
    class Animal {
        // name: string;
        // species: string;
        // sound: string;

        // Parameter properties

        constructor(public name: string, public species: string, public sound: string){
            // this.name = name;
            // this.sound = sound;
            // this.species = species;
        }

        makeSound() {
            console.log(`The ${this.name} says ${this.sound}`);
            
        }
    }

    const dog = new Animal("German Shepard Bhai", "Dog", "Ghew Ghew")
    const cat = new Animal("Persian Bhai", "Cat", "Meaw Meaw")

    dog.makeSound();
}