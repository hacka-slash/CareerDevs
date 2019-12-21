var availableCars = ["Honda", "Volvo", "Tesla", "Acura", "Pontiac"];
var rentedCars = [];

console.log("Available cars are:", availableCars);

rentCar(4, 2, 1);
console.log("Available cars are:", availableCars);
console.log("Rented cars are:", rentedCars);

returnCar(1);
console.log("Available cars are:", availableCars);
console.log("Rented cars are:", rentedCars);

function rentCar(){
   var mySortedArgs = [];
   for(var i = 0; i < arguments.length; i++){
      mySortedArgs.push(arguments[i]);
   }
      mySortedArgs.sort(function(a, b){return a-b});
      for(var i = 0; i < mySortedArgs.length; i++){
         if(mySortedArgs[i] > 0){
            rentedCars = rentedCars.concat(availableCars.splice(mySortedArgs[i] - i,1));

         }else{
            rentedCars = rentedCars.concat(availableCars.splice(mySortedArgs[i],1));

         }

      }
   }

   function returnCar(){
      var mySortedArgs = [];
      for(var i = 0; i < arguments.length; i++){
         mySortedArgs.push(arguments[i]);
      }
      for(var i = 0; i < mySortedArgs.length; i++){
         if(mySortedArgs[i] > 0){
            availableCars = availableCars.concat(rentedCars.splice(mySortedArgs[i] - i,1));

         }else{
            availableCars = availableCars.concat(rentedCars.splice(mySortedArgs[i],1));

         }
      } 
   }

