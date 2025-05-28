//  event module : is is a build in module in node js used to create,fire and listen the your own events 
//  with the help of eventEmitter class we can create our own events 

//  2 ways to create events 
// 1]using constructor 
// 2] using extends keyword 


//  1ST WAY USING CONSTRUCTOR 
const event = require("events");
const { EventEmitter } = require("stream");
console.log(event);

let eventEmitter = new event.EventEmitter()
eventEmitter.on('addclick',()=>{
    console.log("hello event module is running");
    
})
eventEmitter.emit('addclick')



eventEmitter.on('focus',()=>{
    console.log("second event executed...........");
    
})
eventEmitter.emit('focus')



eventEmitter.on('adddata',()=>{
    console.log("adddata event is fire");
})

eventEmitter.emit('adddata')