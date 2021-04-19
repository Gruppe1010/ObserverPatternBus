import Observer from "./observer.js";


class textMessageObserver extends Observer{
  constructor(phoneNo) {
    super();
    this.phoneNo = phoneNo;
  }

  update(eventType, bus) {

    function createEventTypeMessage() {
      let firstPart = `Sms til ${this.phoneNo}: Bus ${bus.id} er blevet `;

      if(eventType === "delay"){
        return firstPart + `forsinket med ${bus.delay} minutter`
      }
      else {
        return firstPart + "aflyst"
      }
    }

    alert(createEventTypeMessage);
  }
}
