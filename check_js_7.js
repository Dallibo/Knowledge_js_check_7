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
  

  class Fraction {
    constructor(numerator, denominator) {
      this.numerator = numerator;
      this.denominator = denominator;
    }
  
    add(otherFraction) {
      const commonDenominator = this.denominator * otherFraction.denominator;
      const sumNumerator = (this.numerator * otherFraction.denominator) + (otherFraction.numerator * this.denominator);
      return new Fraction(sumNumerator, commonDenominator);
    }
  }
  const fraction1 = new Fraction(1, 4);
  const fraction2 = new Fraction(1, 2);
  
  const sum = fraction1.add(fraction2);
  console.log(`Сума: ${sum.numerator}/${sum.denominator}`)
  