class Ninja {
  constructor(name) {
    this.name = name;
    this.health = 50;
    this.speed = 3;
    this.strength = 3;
  }

  sayName() {
    console.log("My name is", this.name);
  }

  showStats() {
    console.log(`Name: ${this.name} \nStrength: ${this.strength} \nSpeed: ${this.speed} \nHealth: ${this.health}`)
  }

  drinkSake() {
    this.health += 10;
  }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();


