/*
    Try and Catch clausules allows us to handle errors and throw exceptions

    The easiest way of define when an exception should be thrown is by if clausules...
    this if clausules depend on what you are trying to validate...
    like example... if you are trying to validate that one parameter would be specifliclly an string, you could use the next statement:

        if(typeof parameter !=== string)
            throw new Error('The parameter is not a string!');
        
    the above statement will throw that exception when the value of the paremeter its not a string....
    and when a exception is thrown, all the following lines of code whitin the same scoope will not be executed,
    and the program will jump until the catch clausule....

    In the catch clausule you have to indicate how the exception should be treathen, you can make an alert for the usser, display the exception on console, on a label, etc....


    - How to use try-catch
        As in java, inside the try clausule you have to write all the code that probably can throw an exception, and in the catch clausule you have to indicate how to handle it!...

        //For only display the exception created by us... we should use e.message inside catch(e){} !

        try{
            //Code that probably could throw an expcetion!
        }catch(e){
            //Code of how the exception will be handled!
            //For only display the exception created by us... we should use e.message
        }

                    --- Make a person object, should have 1 getter and 1 setter to get/set the full name of the person...
                    --- validate that each parameter the function will receibe are rigth according its functionality!

*/

let stalin = {
  name: "Stalin",
  lastname: "Macias",
  age: 21,
  get fullName() {
    return `${this.name} ${this.lastname}`;
  },
  set fullName(value) {
    const parts = value.split(" ");
    if (parts.length < 2) throw new Error("Enter the name and lastname");
    if (parts[0].length === 0)
      throw new Error("The name cant be an empty string");
    if (parts[1].length === 0)
      throw new Error("The lastname cant be an empty string");

    this.name = parts[0];
    this.lastname = parts[1];
  }
};

//try-catch statements for make a secure programming!
try {
  console.log(stalin.fullName);
  stalin.fullName = "Javier Gomez";
  console.log(stalin);
} catch (e) {
  console.log(e.message);
}
