class PrintMachine {
    constructor(color, level) {
        this._color = color;
        this._level = level;
    }

    set color(value) {
        if (this.#isColor(value)) {
            this._color = value;
        } else {
            this._color = "black";
        }
    }

    get color() {
        return this._color;
    }

    print(text) {
        document.write(`<div style="color: ${this._color}">${text}</div>`);
    }
}

const car = {
    manufacturer: "Toyota",
    model: "Camry",
    year: 2022,
    averageSpeed: 100,
  
    displayInfo: function() {
      console.log("Car information:");
      console.log("Manufacturer:", this.manufacturer);
      console.log("Model:", this.model);
      console.log("Year:", this.year);
      console.log("Average speed:", this.averageSpeed);
    },
  
    calculateTravelTime: function(distance) {
      const hours = distance / this.averageSpeed;
      const restStops = Math.floor(hours / 4);
      const totalHours = hours + restStops;
  
      console.log("Travel time for a distance of", distance, "km:");
      console.log("Total hours:", totalHours);
      console.log("Rest stops:", restStops);
    }
  };
  
  car.displayInfo()
  car.calculateTravelTime(300);
  