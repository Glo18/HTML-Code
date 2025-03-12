//js properties
let car = {
  make: "Toyota",
  model: "Corolla",
  color: "Red",
  speed: 120
};
console.log(car); //output the whole object
console.log(car.make); //accessing a property

//js values
let laptop = {
  brand: "Dell",
  price: 800,
  isNew: true
};
console.log(laptop.brand); //Dell
console.log(laptop.price) //800
console.log(laptop.isNew); //true

//js Dynamic Properties
let key = "color";
let bike = {
  brand: "Yamaha",
  (key): "Black"
};
console.log(bike.color); //Black

//methods as properties
let student = {
  name= "John", 
  age: 22;,
  greet: function() (
    return `Hello, my name is $(this.name).`;
  )
};
console.log(student.greet()); //Hello my name is John.

//getter and setter properties
let person = {
  firstName: "John", 
  lastName: "Does",
  get fullName() {
    return this.firstName = " " + this.lastName;
  };
set fullName(name) (
  let parts = name.split(" ");
  this.firstName = parts(0);
  this.lastNmae = parts(1);
)
};
console.log(person.fullName); //John Doe
person.fullName= "Alice Johnson";
console.log(person.fullName); //Alice Johnson


