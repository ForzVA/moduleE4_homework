class Technique {
  constructor(name = "Nothing") {
    this.name = name;
    this.cost = "69.99";
    this.power = "off";
  }
  powerSwitchOn() {
    this.power = "On";
  }
  powerSwitchOff() {
    this.power = "Off";
  }
}

class Lamp extends Technique {
  constructor(name, colorTemperature, classification, form) {
    super(name);
    this.name = name;
    this.colorTemperature = colorTemperature;
    this.classification = classification;
    this.form = form;
  }
  info() {
    console.log("Lamp - artificial light source.");
  }
}

class TV{
  constructor(name, diagonal, firm, matrix) {
    this.name = name;
    this.cost = "99.99";
    this.diagonal = diagonal;
    this.firm = firm;
    this.matrix = matrix;
  }
  info() {
    console.log(
      "TV - an electronic device for receiving and " +
        "displaying images and sound."
    );
  }
}

class Keyboard extends Technique {
  constructor(name, type, backlight, color) {
    super(name);
    this.name = name;
    this.type = type;
    this.backlight = backlight;
    this.color = color;
  }
  info() {
    console.log(
      "Keyboard - device that allows a user to enter information into a computer.  "
    );
  }
}

const lampXiaomi = new Lamp("Smart LED Bulb Essential", "all", "LED", "ball");
lampXiaomi.powerSwitchOn();
lampXiaomi.info();
console.log(lampXiaomi);

const tvSamsung = new TV("LED", "57", "Samsung", "AMOLED");
tvSamsung.info();
console.log(tvSamsung);

const keybordBloody = new Keyboard("a4tech", "mechanical", "RGB", "black");
keybordBloody.powerSwitchOff();
keybordBloody.info();
console.log(keybordBloody);
