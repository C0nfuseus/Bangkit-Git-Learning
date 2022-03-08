const Tiger = require('./Tiger.js');
const Wolf = require('./Wolf.js');
 
const fighting = (tiger, wolf) => {
  if(tiger.strength > wolf.strength) {
    tiger.growl();
    return;
  }
 
  if(wolf.strength > tiger.strength) {
    wolf.howl();
    return;
  }
 
  console.log('Tiger and Wolf have same strength');
}

const Tyger = new Tiger();
const Wulf = new Wolf();

fighting(Tyger,Wulf);