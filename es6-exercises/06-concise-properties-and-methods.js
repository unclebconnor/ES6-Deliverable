// Fill in the following function with a single object literal with the format
// {make: "honda", model: "civic", drive: Function}, where the drive function
// logs "vroom" to the console

function car(make, model, options){
  let obj = {
    make,
    model,
    drive(){
     console.log('vroom yo');
    }
  }
  return obj;
}

let auto = car("honda","civic");
// returns {make: "honda", model: "civic", drive: Function}
console.log(auto);
auto.drive();
// logs "vroom" to the console
