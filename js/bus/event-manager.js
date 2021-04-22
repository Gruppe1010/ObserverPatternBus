
class EventManager{
  constructor(eventTypes) {
    // key = eventType, value = [observer-JSON]
    this.observers = new Map();

    eventTypes.forEach(eventType => this.observers.set(eventType, []))
  }

  // metode som tilføjer en observer (af enhver type) til array-attributter
  subscribe(eventType, observer){
    this.observers.get(eventType).push(observer);
  }

  // metode som fjerner en observer fra array-attributter
  removeObserver(eventType, observer){
    this.observers.set(eventType, this.observers.get(eventType).filter(o => {
      if(o !== observer){
        return o;
      }
    }));
  }


  notify(eventType, bus){

    // vi henter hele listen ud med observers som skal notificeres ved den specikke eventType
    this.observers.get(eventType).
      // for hver observer på listen, kalder vi update()-metoden
      forEach(observer => observer.update(eventType, bus));
  }
}



export default EventManager;
