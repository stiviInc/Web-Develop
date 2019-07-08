/*
    Create an object with the next specifications:

    It has to have a property called duration, it'll display how much time the stop wacth has been working!

    3 methods:
    
        1.- start()     -> It'll increase duration's value property
        2.- stop()      -> It'll pause duration's value, so it wont keep increasing
        3.- restart()   -> It'll restart the duration's value!

    How the methods should works?

    start()     -> When this method is called, it'll display duration's value property
    stop()      -> This method have to stop increasing duration's value
    restart()   -> This method have to restart duration's value to 0

    if the start() method has already been called, it cant be called again until the stop method will be call...
    same applies for stop() method, if has already been called, it cant be called again until the start method will be call...
*/

//This excersice only works on a navigator because the performance method that was used to meassure the time!

function StopWatch() {
  let startTime = 0;
  let stopTime = 0;
  let itsWorking = false;

  this.start = () => {
    if (itsWorking === true) {
      console.log("The stop wacth has already been started");
      return;
    }
    itsWorking = true;
    startTime = performance.now();
  };

  this.stop = () => {
    if (itsWorking === false) {
      console.log("The stop wacth has already been stoped");
      return;
    }
    itsWorking = false;
    stopTime = performance.now();
  };

  this.restart = () => {
    stopTime = 0;
    startTime = 0;
    itsWorking = false;
  };

  Object.defineProperty(this, "duration", {
    get: function() {
      return stopTime - startTime;
    }
  });
}

//All test were made in the navigator!...
