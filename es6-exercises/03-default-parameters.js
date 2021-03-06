// Convert the driveTo method below to use ES6 default parameters.

var myRide = {
  make: "Ford",
  model: "Model T",
  year: 1959,
  location: "the Office",
  driveTo( place ) {
    this.location = place || "Home"
  }
}

myRide.driveTo("Walmart")
 // "Walmart"
console.log(myRide.location);
// vs...
 
myRide.driveTo()
 // "Home"
console.log(myRide.location)