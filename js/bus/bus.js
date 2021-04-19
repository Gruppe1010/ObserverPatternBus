import EventManager from "./event-manager.js";

class Bus{
  constructor(id){
    this.id = id;
    this.eventManager = new EventManager(["delay", "cancellation"]);
    this.delay = 0;
    this.cancellation = false;

  }

  delay(delayTime){
    this.delay = delayTime;

    // vi sender hele bus-obj med
    this.eventManager.notify("delay", this);
  }

  cancellation(cancel){
    this.cancellation = cancel;

    // vi sender hele bus-obj med
    this.eventManager.notify("cancellation", this);

  }



}


export default Bus;

