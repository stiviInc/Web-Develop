class PC {
  constructor(processor, graphic, ram, os) {
    this.processor = processor;
    this.graphic = graphic;
    this.ram = ram;
    this.os = os;
  }
  //Proccesor
  set setProcessor(processor) {
    this.processor = processor;
  }
  get getProcessor() {
    return this.processor;
  }

  //Graphic
  set setGraphic(graphic) {
    this.graphic = graphic;
  }
  get getGraphic() {
    return this.graphic;
  }

  //Ram
  set setRam(ram) {
    this.ram = ram;
  }
  get getRam() {
    return this.ram;
  }

  //Os
  set setOs(os) {
    this.os = os;
  }
  get getOs() {
    return this.os;
  }
}

const StalinPC = new PC("i7", "GTX1070ti", "16GB", "Windows 10");
console.log("Antes");
console.log(StalinPC);

StalinPC.setProcessor = "i9";
StalinPC.setRam = "32GB";
StalinPC.setOs = "Fedora 16";
console.log("Despues");
console.log(StalinPC);