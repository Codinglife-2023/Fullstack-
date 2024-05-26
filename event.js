// events.js
const EventEmitter = require('events'); // Import the events module

class MyEmitter extends EventEmitter {} // Create a custom event emitter

const myEmitter = new MyEmitter();

// Define an event handler for 'event'
myEmitter.on('event', () => {
    console.log('An event occurred!');
});

// Emit the 'event'
myEmitter.emit('event'); // This will trigger the event handler

// Define an event handler with data
myEmitter.on('data', (message) => {
    console.log('Received data:', message);
});

// Emit the 'data' event with a message
myEmitter.emit('data', 'Hello, Node.js events!');
