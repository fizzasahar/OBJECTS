// 1
var itemsArray = [
    { name: "juice", price: 50, quantity: 3 },
    { name: "cookie", price: 30, quantity: 9 },
    { name: "shirt", price: 880, quantity: 1 },
    { name: "pen", price: 100, quantity: 2 }
];

// for each
for (var key in itemsArray) {
    var ItemPrice = itemsArray[key].price * itemsArray[key].quantity;
    console.log(`Total price of ${itemsArray[key].name} is Rs:${ItemPrice}`);
};

// for all
var totalItemsPrice = 0;
for (var i = 0; i < itemsArray.length; i++) {
    totalItemsPrice += itemsArray[i].price * itemsArray[i].quantity;
}
console.log(`Total price of all items: ${totalItemsPrice}`);


// 2
var user = {
    name: "Fizza",
    email: "fizza@gmail.com",
    password: "1234",
    age: 17,
    gender: "Female",
    city: "Karachi",
    country: "Pakistan"
};


console.log("age" in user);
console.log("country" in user);
console.log("firstName" in user);
console.log("lastName" in user);


// 3
function User(name, email, password, age, gender, city, country) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.age = age;
    this.gender = gender;
    this.city = city;
    this.country = country;
  }
  
  
  var user1 = new User("John Doe", "johndoe@example.com", "password123", 25, "Male", "New York", "USA");
  var user2 = new User("Jane Smith", "janesmith@example.com", "password456", 28, "Female", "Los Angeles", "USA");
  console.log(user1);
  console.log(user2);
  

// 4
// Constructor function for population records
function PopulationRecord(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}
