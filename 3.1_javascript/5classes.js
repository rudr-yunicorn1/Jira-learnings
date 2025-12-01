// Creating a Simple Class
// A basic class that defines properties and methods. This example shows how to create an object with a constructor and method.




class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    g() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
let p1 = new Person("Pranjal", 20);
p1.g();

// Output
// Hello, my name is Pranjal and I am 20 years old.
// The Person class has a constructor to set name and age, and a g method to log a greeting message.
// An instance (p1) is created with new, passing "Pranjal" and 20, then calls g to print the greeting.
// Constructor to Initialize Objects
// The constructor is used to initialize the properties of the object when an instance is created.




class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    d() {
        console.log(`${this.year} ${this.make} ${this.model}`);
    }
}
let my = new Car("Toyota", "Corolla", 2021);
my.d();

// Output
// 2021 Toyota Corolla
// The Car class has a constructor to initialize make, model, and year, and a d method to log the car's details.
// An instance (my) is created with new, passing "Toyota", "Corolla", and 2021, then calls d to print the car's information.
// Inheritance in Classes
// Inheritance allows one class to extend another, inheriting its properties and methods while adding or overriding functionality.




class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    di() {
        console.log(`${this.year} ${this.make} ${this.model}`);
    }
}
class ElectricCar extends Car {
    constructor(make, model, year, batteryLife) {
        super(make, model, year);
        this.batteryLife = batteryLife;
    }
    d() {
        console.log(`Battery life: ${this.batteryLife} hours`);
    }
}
let tesla = new ElectricCar("Tesla", "Model S", 2022, 24);
tesla.di()
tesla.d();

// Output
// 2022 Tesla Model S
// Battery life: 24 hours
// ElectricCar inherits from Car, using super to set properties and adds batteryLife and d method.
// An instance (tesla) calls both di to display car details and d to show battery life.
// Creating Multiple Objects from a Class
// Using classes to create multiple objects with the same structure but different data.




class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    d() {
        console.log(`${this.year} ${this.make} ${this.model}`);
    }
}
let c1 = new Car("Toyota", "Corolla", 2021);
let c2 = new Car("Honda", "Civic", 2020);
c1.d();
c2.d();

// Output
// 2021 Toyota Corolla
// 2020 Honda Civic