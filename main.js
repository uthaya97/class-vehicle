class Vehicle{
    constructor(make,model,year){
      this.make=make;
      this.model=model;
      this.year=year
    }
    
    details(){
      document.write(`vehicle <br><br>`)
      document.write(`Make : ${this.make} <br>`) 
      document.write (`Model : ${this.model}<br>`)           
      document.write(`year : ${this.year}<br><br>`)          
    }
  
  }
  
  let vehicleone=new Vehicle("Car","Maruthi",1999);
  let vehicleTwo=new Vehicle("bike","hero",1999);
  vehicleTwo.details()
  
  class Car extends Vehicle{
      constructor(make,model,year,no_of_doors){
        super(make,model,year);
        this.no_of_doors=no_of_doors;
        
      }
  
      details(){
        document.write(`I buyed a ${this.make} in brand of ${this.model} in ${this.year} and it has ${this.no_of_doors} doors`)
      }
  }
  
  let carone=new Car("car","Maruthi",1999,4)
  carone.details()