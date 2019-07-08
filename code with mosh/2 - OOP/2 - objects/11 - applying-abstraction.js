/*
    Create a constructor function for make Cellphone objects,
    apply abstraction to its main methods, such as:
        renderImage()
        chooseNetwork()
    and also declare private variables such as:
        cameraAI, gpsCoordinates
*/

function Cellphone(mark, model, price) {
  //Local Variables
  let cameraAI = true;
  let gpsCoordinates = {
    x: 0,
    y: 0
  };
  //Local Methods
  let getGPSCoordinates = () => {
    return {
      x: gpsCoordinates.x,
      y: gpsCoordinates.y
    };
  };
  let chooseNetwork = () => {
    return "Telcel";
  };
  let renderImage = () => {
    return {
      x: 150,
      y: 200
    };
  };

  //Properties
  this.mark = mark;
  this.model = model;
  this.price = price;
  //Methods
  this.sendCoordinates = () => {
    return getGPSCoordinates();
  };
  this.activateAICamera = () => {
    return cameraAI === true
      ? "AI Camera Activated"
      : "AI Camera is not availabe";
  };
  this.showImage = () => {
    let coordinatesToShowImage = renderImage();
    return `The image will be display at coordinates: x: ${
      coordinatesToShowImage.x
    } and y: ${coordinatesToShowImage.y}`;
  };
  this.makeCall = () => {
    return `The call will be make using the network of: ${chooseNetwork()}`;
  };
}


const cellphone1 = new Cellphone("Huaweii","Nova 3",6500);

console.log(
    cellphone1.makeCall()

);