//from https://www.coursera.org/learn/programming-with-javascript/supplement/VJhho/creating-classes

class Train {
  constructor(color, lightsOn) {
    this.color = color;
    this.lightsOn = lightsOn;
  }
  toggleLights() {
    this.lightsOn = !this.lightsOn;
  }
  lightsStatus() {
    console.log("Lights on?", this.lightsOn);
  }
  getSelf() {
    console.log(this);
  }
  getPrototype() {
    var proto = Object.getPrototypeOf(this);
    console.log(proto);
  }
}

class HighSpeedTrain extends Train {
  constructor(passengers, highSpeedOn, color, lightsOn) {
    super(color, lightsOn);
    this.passengers = passengers;
    this.highSpeedOn = highSpeedOn;
  }
  toggleHighSpeed() {
    this.highSpeedOn = !this.highSpeedOn;
    console.log("High speed status:", this.highSpeedOn);
  }
  toggleLights() {
    super.toggleLights();
    super.lightsStatus();
    console.log("Lights are 100% operational.");
  }
}

var myFirstTrain = new Train("red", false);
console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}
var mySecondTrain = new Train("blue", false);
var myThirdTrain = new Train("blue", false);

var train4 = new Train("red", false);
train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}

var train5 = new Train("blue", false);
// The prototype object of the train5 object was created when you defined the class Train. You can access the prototype using Train.prototype syntax and get the prototype object back.

var highSpeed1 = new HighSpeedTrain(200, false, "green", false);
// The prototype object of the highSpeed1 object is this object: {constructor: ƒ, toggleHighSpeed: ƒ, toggleLights: ƒ}. In turn this object has its own prototype, which can be found using the following syntax: HighSpeedTrain.prototype.__proto__. Running this code returns: {constructor: ƒ, toggleLights: ƒ, lightsStatus: ƒ, getSelf: ƒ, getPrototype: ƒ}.

train5.toggleLights(); // undefined
train5.lightsStatus(); // Lights on? true
highSpeed1.toggleLights(); // Lights on? true, Lights are 100% operational.
