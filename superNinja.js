class Ninja {
  constructor(name) {
    this.name = name;
    this.health = 50;
    this.speed = 3;
    this.strength = 3;
  }

  sayName() {
    console.log(this.name);
  }

  showStats() {
    console.log(`Name: ${this.name} \nStrength: ${this.strength} \nSpeed: ${this.speed} \nHealth: ${this.health}`)
  }

  drinkSake() {
    this.health += 10;
  }
}

class Sensei extends Ninja {
  constructor(name) {
    super(name); 
      this.name = name;
      this.health = 200;
      this.speed = 10;
      this.strength = 10;
      this.wisdom = 10;
    }

  speakWisdom() {
    super.drinkSake();
    console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.")
  }
}

const superSensei = new Sensei("Master Splinter");
superSensei.showStats();
superSensei.speakWisdom();
superSensei.showStats();