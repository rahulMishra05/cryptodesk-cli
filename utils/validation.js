// Required feild

// Using terninary opeerator
const isRequired = input => input === '' ? 'This value is required' : true;

module.exports = { isRequired };

// The use of this module is that user have to enter something, otherwise a message will appear "This value is required"