// Code your solutions in this file
let names =("Charlie", "Samip", "Ali")

function writeCards(names, event) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
  }
  let event = ("birthday")
  console .log(writeCards(names, events));

  function countDown(number){
    while (number>=0){
    console .log(number);
    number--;
  }
  }
  countDown(10);

  


