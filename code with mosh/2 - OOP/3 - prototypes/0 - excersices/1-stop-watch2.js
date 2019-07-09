/*
    The goal to achieve in this excercise is to move the methods start,stop and restart to the prototype, and make them keep working!

    In order to make public this variables, you should define a getter and setter... and when you called them from the prototype, use the "this" keyword from give the correct refference!
*/

//This excersice only works on a navigator because the performance method that was used to meassure the time!

// Due to the duration variable is only a read variable, this implementation keeps working good :D

//Sometimes try to optimize at early stages could be a huge error and can bring a lot of unnecessary problems!!!

function StopWatch() {
  let startTime = 0;
  let stopTime = 0;
  let itsWorking = false;

  Object.defineProperty(this, "duration", {
    get: function() {
      return stopTime - startTime;
    }
  });

  //Make public the three variables...
  Object.defineProperty(this, "itsWorking", {
    get: function() {
      return itsWorking;
    },
    set: function(value) {
      itsWorking = value;
    }
  });

  Object.defineProperty(this, "startTime", {
    get: function() {
      return startTime;
    },
    set: function(value) {
      startTime = value;
    }
  });

  Object.defineProperty(this, "stopTime", {
    get: function() {
      return stopTime;
    },
    set: function(value) {
      stopTime = value;
    }
  });
}

StopWatch.prototype.start = function() {
  if (this.itsWorking === true) {
    console.log("The stop wacth has already been started");
    return;
  }
  this.itsWorking = true;
  this.startTime = performance.now();
};

StopWatch.prototype.stop = function() {
  if (this.itsWorking === false) {
    console.log("The stop wacth has already been stoped");
    return;
  }
  this.itsWorking = false;
  this.stopTime = performance.now();
};

StopWatch.prototype.restart = function() {
  this.stopTime = 0;
  this.startTime = 0;
  this.itsWorking = false;
};

//All test were made in the navigator!...
