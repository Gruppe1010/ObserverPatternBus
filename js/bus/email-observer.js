import Observer from "./observer";


class emailObserver extends Observer{
  constructor(email) {
    super();
    this.email = email;
  }

  update(eventType, bus) {

     function createEventTypeMessage() {
       let firstPart = `Email til ${this.email}: Bus ${bus.id} er blevet `;

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
