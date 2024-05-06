{
  // OOP - Inheritance

  class Person {
    constructor(
      public name: string,
      public age: number,
      public address: string
    ) {}

    getSleep(numOfHours: number) {
      console.log(`${this.name} will sleep for ${numOfHours}`);
    }
  }

  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }

  class Teacher extends Person {
    constructor(
      name: string,
      age: number,
      address: string,
      public designation: string
    ) {
      super(name, age, address);
    }
  }

  const student1 = new Student("Chishty", 24, "DHK");
  student1.getSleep(2);
  console.log(student1);
  console.log(student1.address);
  console.log(student1.age);
  console.log(student1.name);

  const teacher1 = new Teacher("Shoabur", 42, "SYL", "Professor");
  student1.getSleep(6);
  console.log(teacher1);
  console.log(teacher1.address);
  console.log(teacher1.age);
  console.log(teacher1.name);
  console.log(teacher1.designation);
}
