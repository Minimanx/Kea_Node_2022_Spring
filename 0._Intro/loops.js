//For loops, don't because: for loops only used for finger counting (1....certain number).
//more writing
//error prone (index out of bounds in Java)
//is not functional

const carBatteries = [0.32423, 0.65765, 0.3242, 0.13543];

//this is functional
//don't initialize then populate, do it at the same time.
//more transparent
const chargedCarBatteries = carBatteries.map(battery => battery + 0.4);

//wrong
//const chargedCarBatteries = [];
//carBatteries.forEach(battery => chargedCarBatteries.push(battery + 0.4));

//index in forEach
carBatteries.forEach((battery, i) => console.log(`You go in stand ${i + 1}`));

//filter, initialize and populate with true/false.
const drainedBatteries = carBatteries.filter(battery => battery < 0.5);
console.log(drainedBatteries);