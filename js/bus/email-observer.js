import Observer from "./observer.js";



class EmailObserver extends Observer{
  constructor(email) {
    super();
    this.email = email;
  }

  update(eventType, bus) {

     const firstPart = `Email til ${this.email}: Bus ${bus.id} er blevet `;

     if(eventType === "delay"){
       alert(firstPart + `forsinket med ${bus.delay} minutter`);
     }
     else {
       alert(firstPart + "aflyst");
     }

  }


}

export default EmailObserver;
