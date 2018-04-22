let isVacation = document.querySelector('.radio');
let homework = document.querySelector('.homework');
let extraTime = document.querySelector('.extratime');
let usedTime =  Number(homework.value) + Number(extraTime.value);
let submit = document.querySelector('.submit');
let x = 600 ;
submit.addEventListener('click',getAgenda)

function getAgenda(){
  let isVacation = document.querySelector('.radioyes');
  let homework = document.querySelector('.homework');
  let extraTime = document.querySelector('.extratime');
  let usedTime =  Number(homework.value) + Number(extraTime.value);
  let day = new Date().getDay();
  let total;
  let coding;
  let outside;
  let reading;
  let exercising;
  let gaming;
  let lot;
  if (isVacation.checked === true){
    total = 600;
    let usedTime = Number(extraTime.value)
    exercising = 45;
    lot = (total - (usedTime + exercising));

    programming = lot/4;
    outside = (lot/8)*3;
    reading = lot/4;
    gaming = lot/8;

    ManyFunctions()

  } else{
    switch (day){
    case 0:
    case 2:
    case 3:
    case 4:
      total = 200;
      exercising = 0;
      lot = (total - (usedTime + exercising));
      programming = lot/4;
      outside = (lot/8)*3;
      reading = lot/4;
      gaming = lot/8;

      ManyFunctions()
      break;

    case 1:
      total = 140;
      exercising = 0;
      lot = (total - (usedTime + exercising));
      programming = lot/4;
      outside = (lot/8)*3;
      reading = lot/4;
      gaming = lot/8;

      ManyFunctions()
      break;

    case 5:
      total = 450;
      exercising = 30;
      lot = (total - (usedTime + exercising));
      programming = lot/4;
      outside = (lot/8)*3;
      reading = lot/4;
      gaming = lot/8;

      ManyFunctions()
      break;

    case 6:
      total = 600;
      exercising = 45;
      lot = (total - (usedTime + exercising));
      programming = lot/4;
      outside = (lot/8)*3;
      reading = lot/4;
      gaming = lot/8;

      ManyFunctions()
      break;
    }
  }
  function ManyFunctions(){
    let p = document.querySelectorAll('p');
    for (i=0;i<=p.length;i++){
      if (p[i] == undefined){

      }else{
      let num = (p[i].style.top).split("p");
      p[i].style.top = (Number(num[0])+150)+'px'
    }
    }
    x = 200;
    p = document.createElement('p');
    let txt = document.createTextNode('-----------------');
    p.appendChild(txt);
    p.style.color = 'rgb(0, 255, 240)';
    p.style.position = 'absolute';
    p.style.top = x + 'px';
    document.body.appendChild(p);
    x += 20
    WriteOut(total,'Total');
    x += 20
    WriteOut(exercising,'Exercising');
    x += 20
    WriteOut(programming,'Programming');
    x += 20
    WriteOut(outside,'Outside');
    x += 20
    WriteOut(reading,'Reading');
    x += 20
    WriteOut(gaming,'Gaming');
    x += 20
  }

  function WriteOut(WhatToWrite,Name){
    let p = document.createElement('p');
    let txt = document.createTextNode(Name + ' Time: ' + WhatToWrite + ' Minutes');
    p.appendChild(txt);
    p.style.color = 'rgb(0, 255, 240)';
    p.style.position = 'absolute';
    p.style.top = x + 'px';
    document.body.appendChild(p);
  }

}
