import Bus from "./bus.js";
import EmailObserver from "./email-observer.js";
import TextMessageObserver from "./text-message-observer.js";


// elementet som er i html - som vi tilføjer hele vores body til
const divBusService = document.getElementById('busService');

const inpEmail = document.getElementById('email');
const inpPhoneNo = document.getElementById('phoneNo');






// TODO opret busser her og kald createBusView for hver oprettet bus - forEach(bus => createBusView(bus))

const bus1 = new Bus("600S");







//bus1.eventManager.addObserver('cancellation', new TextMessageObserver(inpPhoneNo.value));


createBusView(bus1);

function createBusView(bus){

  // opretter elementer
  // TODO: lav inputfelter hvor de skal skrive deres phoneNo + email

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
}


// REFRESH BUTTON
const btnRefresh = document.createElement('button');
divBusService.appendChild(btnRefresh);
btnRefresh.innerText = "Opdater/vis lige bussen";
btnRefresh.addEventListener('click', refresh);

function refresh(){
  console.log(bus1);
}


// TEST DELAY

const btnTestDelay = document.createElement('button');
divBusService.appendChild(btnTestDelay);
btnTestDelay.innerText = "Test delay";
btnTestDelay.addEventListener('click', testDelay);


function testDelay(){
  bus1.delayT(10);
}









