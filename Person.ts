interface PersonInterface {
  id: number;
  name: string;
  age: number;
}

class Person implements PersonInterface {
  id: number;
  name: string;
  age: number;
  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  register() {
    console.log(`${this.name} has been registered!`);
  }
}

export default Person;
