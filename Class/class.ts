class Vehicle {
  drive(): void {
    console.log("im driving");
  }

  break(): void {
    console.log("break!!!");
  }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.break();

class Car extends Vehicle {}
