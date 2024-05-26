// useMoment.js

// Import the moment package
const moment = require('moment');

// Get the current date and time
const now = moment();

// Format the current date and time in a readable format
const formattedNow = now.format('MMMM Do YYYY, h:mm:ss a');

// Log the formatted current date and time to the console
console.log('Current date and time:', formattedNow);

// Add 7 days to the current date and log the result
const oneWeekFromNow = now.add(7, 'days').format('MMMM Do YYYY, h:mm:ss a');
console.log('Date and time one week from now:', oneWeekFromNow);

// Subtract 1 month from the current date and log the result
const oneMonthAgo = now.subtract(1, 'month').format('MMMM Do YYYY, h:mm:ss a');
console.log('Date and time one month ago:', oneMonthAgo);

// Log a custom event using console.log
console.log('This is a custom event log using console.log');

// Log another custom event with additional information
console.log('Logging an event with additional data:', {
    event: 'customEvent',
    timestamp: formattedNow,
    details: 'This is an example event log.'
});
