import Observer from "./observer.js";



class TextMessageObserver extends Observer{
  constructor(phoneNo) {
    super();
    this.phoneNo = phoneNo;
  }

  update(eventType, bus) {

    const firstPart = `Sms til ${this.phoneNo} Bus ${bus.id} er blevet `;

    if(eventType === "delay"){
      console.log(firstPart + `forsinket med ${bus.delay} minutter`);
    }
    else {
      console.log(firstPart + "aflyst");
    }

  }
}

export default TextMessageObserver;
