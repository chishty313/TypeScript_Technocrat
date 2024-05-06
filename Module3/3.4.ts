{
  // instanceof guard

  class Animal {
    constructor(public name: string, public species: string) {}

    makeSound() {
      console.log("I am making sound");
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBark() {
      console.log("I am barking");
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMeaw() {
      console.log("I am meawing");
    }
  }

  //   Smart way te handle korar jnne caile amra function bebohar korte pari

  const isDog = (animal: Animal): animal is Dog => animal instanceof Dog;
  const isCat = (animal: Animal): animal is Cat => animal instanceof Cat;

  const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
      animal.makeBark();
    } else if (isCat(animal)) {
      animal.makeMeaw();
    } else {
      animal.makeSound();
    }
  };

  const dog = new Dog("Dog Bhai", "dog");
  const cat = new Cat("Cat Bhai", "cat");

  getAnimal(dog);
  getAnimal(cat);
}
