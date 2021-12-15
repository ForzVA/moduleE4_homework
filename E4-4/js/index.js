function Technique(name = "Nothing") {
  this.name = name;
  this.cost = "69.99";
  this.power = "off";
  this.powerSwitchOn = function () {
    this.power = "On";
  };
  this.powerSwitchOff = function () {
    this.power = "Off";
  };
}

function Lamp(name, colorTemperature, classification, form) {
  this.name = name;
  //cold, neutral, warm
  this.colorTemperature = colorTemperature;
  //incandescent , LED , halogen
  this.classification = classification;
  //ball, candle, pear-shaped, tubular
  this.form = form;
  this.info = function () {
    console.log("Lamp - artificial light source.");
  };
}
Lamp.prototype = new Technique();

function TV(name, diagonal, firm, matrix) {
  this.name = name;
  this.cost = "99.99";
  this.diagonal = diagonal;
  //samsung, LG, Xiaomi, Sony, Philips
  this.firm = firm;
  // film, TN+film, IPS, AMOLED
  this.matrix = matrix;
  this.info = function () {
    console.log(
      "TV - an electronic device for receiving and " +
        "displaying images and sound."
    );
  };
}

function Keyboard(name, type, backlight, color) {
  this.name = name;
  //membrane or mechanical
  this.type = type;
  //RGB, onecolor, without
  this.backlight = backlight;
  this.color = color;
  this.info = function () {
    console.log(
      "Keyboard - device that allows a user to enter information into a computer.  "
    );
  };
}
Keyboard.prototype = new Technique();

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
