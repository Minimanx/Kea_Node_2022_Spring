//"use strict";


const person = {
    //Key: Value - Key value pair
    //Key: Value - Key value pair
    //Key: Value - Key value pair
    //Key: Value - Key value pair
    name: "Carl"
}

var someVariable = ""; //var is global and not scope-specifik, don't use

totalGlobal = "NEVER do this!!!" //variable not defined

let banana = "Return to monke";
banana = "Praise be Harambe";

const monke = {
    name: "Harambe"
};

// const needs to be initialized
// const monke2;
// const cannot reassign whole object

monke.age = "16";

console.log(monke.age);

//const hej = "hej";
//hej = "heyo";
//console.log(hej); doesn't work

{
    let someVariable = true; // let binds to its scope
    {
        let someVariable = false;
    }
    console.log(someVariable);
}
{
    var someVariable = true; // not bound to scope
    {
        var someVariable = false;
    }
    console.log(someVariable);
}


for (let i = 0; i < 5; i++) { //setTimeout once per loop, so 5 loops synchronious
    setTimeout(() => { 
        console.log(i);
    }, 1000);
}

for (var i = 0; i < 5; i++) { //var global so all will be 5
    setTimeout(() => { 
        console.log(i);
    }, 1000);
}