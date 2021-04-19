import Bus from "./bus";
// elementet som er i html - som vi tilføjer hele vores body til
const divBusService = document.getElementById('busService');


const Bus1 = new Bus("600S");


createBusView("hej");

function createBusView(bus){

  // opretter elementer
  const lblDelay = document.createElement('label');
  const lblCancellation = document.createElement('label');


  const bntDelayEmail = document.createElement('button');
  const bntDelayTextMessage = document.createElement('button');
  const bntCancellationEmail = document.createElement('button');
  const bntCancellationTextMessage = document.createElement('button');

  // tilføjer til DOM
  divBusService.appendChild(lblDelay);

  divBusService.appendChild(bntDelayEmail);
  divBusService.appendChild(bntDelayTextMessage);
  divBusService.appendChild(document.createElement('br'));
  divBusService.appendChild(document.createElement('br'));


  divBusService.appendChild(lblCancellation);

  divBusService.appendChild(bntCancellationEmail);
  divBusService.appendChild(bntCancellationTextMessage);
  divBusService.appendChild(document.createElement('br'));


  // udarbejder
  lblDelay.innerText = "Forsinkelse";
  lblCancellation.innerText = "Aflysning";

  bntDelayEmail.innerText = "Få besked på email";
  bntDelayTextMessage.innerText = "Få besked på sms";

  bntCancellationEmail.innerText = "Få besked på email";
  bntCancellationTextMessage.innerText = "Få besked på sms";


}









