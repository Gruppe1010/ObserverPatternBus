// vi importerer js-klasser fra vores andre js-dokumenter
import Bus from "./bus.js";
import EmailObserver from "./email-observer.js";
import TextMessageObserver from "./text-message-observer.js";


// vi henter div + inputfelter fra index.html
  // elementet som vi tilføjer listen af busser til
const divBusService = document.getElementById('busService');

const inpEmail = document.getElementById('email');
const inpPhoneNo = document.getElementById('phoneNo');

// opretter busser manuelt
const busses = [new Bus("600S"),
  new Bus("4A"),
  new Bus("116"),
  new Bus("300S"),
  new Bus("18"),
  new Bus("22")]

// opret et busView til alle busser
busses.forEach(bus => createBusView(bus));

//bus1.eventManager.addObserver('cancellation', new TextMessageObserver(inpPhoneNo.value));

// opretter et view til én bus
// + se img
function createBusView(bus){
  // opretter elementer
  const busHeadline = document.createElement('h2');
  const hr = document.createElement('p');

  const lblDelay = document.createElement('label');
  const lblCancellation = document.createElement('label');

  const bntDelayEmail = document.createElement('button');
  const bntDelayTextMessage = document.createElement('button');
  const bntCancellationEmail = document.createElement('button');
  const bntCancellationTextMessage = document.createElement('button');

  // tilføjer til DOM
  divBusService.appendChild(busHeadline);

  divBusService.appendChild(lblDelay);
  divBusService.appendChild(bntDelayEmail);
  divBusService.appendChild(bntDelayTextMessage);

  divBusService.appendChild(document.createElement('br'));
  divBusService.appendChild(document.createElement('br'));

  divBusService.appendChild(lblCancellation);
  divBusService.appendChild(bntCancellationEmail);
  divBusService.appendChild(bntCancellationTextMessage);

  divBusService.appendChild(document.createElement('br'));

  // udarbejder elementerne
  busHeadline.innerText = "Bus " + bus.id;
  hr.innerText = "---------------------------------------------------"

  lblDelay.innerText = "Forsinkelse \xa0";
  lblDelay.style.fontSize = '18px';

  lblCancellation.innerText = "Aflysning \xa0";
  lblCancellation.style.fontSize = '18px';

  bntDelayEmail.innerText = "Få besked på email";
  bntDelayTextMessage.innerText = "Få besked på sms";

  bntCancellationEmail.innerText = "Få besked på email";
  bntCancellationTextMessage.innerText = "Få besked på sms";

  // ? hvordan får man den til at tage en function med params

  bntDelayEmail.addEventListener('click',
    function(){
      bus.eventManager.addObserver('delay', new EmailObserver(inpEmail.value));
    });
  bntDelayTextMessage.addEventListener('click',
    function(){
      bus.eventManager.addObserver('delay', new TextMessageObserver(inpPhoneNo.value));
    });
  bntCancellationEmail.addEventListener('click',
    function(){
      bus.eventManager.addObserver('cancellation', new EmailObserver(inpEmail.value));
    });
  bntCancellationTextMessage.addEventListener('click',
    function(){
      bus.eventManager.addObserver('cancellation', new TextMessageObserver(inpPhoneNo.value));
    });

  divBusService.appendChild(document.createElement('br'));
  divBusService.appendChild(document.createElement('br'));


  // REFRESH BUTTON
  const btnRefresh = document.createElement('button');
  divBusService.appendChild(btnRefresh);
  btnRefresh.innerText = "Print bus " + bus.id + " i konsollen";
  btnRefresh.addEventListener('click', refresh);

  function refresh(){
    console.log(bus);
  }

  divBusService.appendChild(document.createElement('br'));


// DELAY BUTTON
  const btnDelay = document.createElement('button');
  divBusService.appendChild(btnDelay);
  btnDelay.innerText = "Forsink bus " + bus.id + " med 10 minutter";
  btnDelay.addEventListener('click', delayBus);

  function delayBus(){
    bus.delayBus(10)
  }

  divBusService.appendChild(document.createElement('br'));


  // CANCEL BUTTON
  const btnCancel = document.createElement('button');
  divBusService.appendChild(btnCancel);
  btnCancel.innerText = "Aflys bus " + bus.id;
  btnCancel.addEventListener('click', cancelBus);

  function cancelBus(){
    bus.cancelBus(true);
  }

  divBusService.appendChild(hr);

}















