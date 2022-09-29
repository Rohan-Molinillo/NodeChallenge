const information = require('./information.js');
let cowsay = require("cowsay");

console.log(cowsay.say({
    text: `Hi, my name is ${information.name} and my campus is in ${information.campus}`,
    e: "oO",
    T: "U "
}));
