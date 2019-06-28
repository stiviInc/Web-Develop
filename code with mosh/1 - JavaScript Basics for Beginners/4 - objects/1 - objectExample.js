//This is an example of how a simple object is created!....
//But for a better implementation, its more recommended use factory function or constructor function


const speaker = {
  working: false,
  rangeVolume: {
    max_Volume: 100,
    min_Volume: 0
  },
  actualVolume: 50,
  speakerBluetoothName: "stivisSpeaker",
  changeState: function(working) {
    let retValue = {
      state: false,
      msg: ""
    };
    if (working == true) {
      retValue.state = false;
      retValue.msg = "Turning off the speaker";
    } else {
      retValue.state = true;
      retValue.msg = "Turning on the speaker";
    }

    return retValue;
  }
};

//The object declared above always start with a false for working value and the volume is set at 50%, as if it would be a speacker, always starts off....

//Turn on the speacker
let itsWorking = speaker.working; //Get the state of the speacker to know is its working or not!
let objAux = speaker.changeState(itsWorking); //Send the actual state and modify it with its oppossite, if its turn on, will be turn off, and viceversa...
var{
    state : state,
    msg : msg
} = objAux;                                  //Destructuring the returned object by the chageState method
speaker.working = state;                    //Update the state of the speacker after the changeState method
console.log(msg);                           
console.log(speaker.working);

//-----------------------------//--------------------//----------------------//

//Turn off the speacker
itsWorking = speaker.working; //Get the state of the speacker to know is its working or not!
objAux = speaker.changeState(itsWorking); //Send the actual state and modify it with its oppossite, if its turn on, will be turn off, and viceversa...
var{
    state : state,
    msg : msg
} = objAux;                                  //Destructuring the returned object by the chageState method
speaker.working = state;                    //Update the state of the speacker after the changeState method
console.log(msg);                           
console.log(speaker.working);