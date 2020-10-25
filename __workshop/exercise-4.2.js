// Exercise 4.2
const request = require('request-promise');

const options = {
  uri: 'https://api.tronalddump.io/random/quote',
  headers: {
      'User-Agent': 'Request-Promise'
  },
  json: true // Automatically parses the JSON string in the response
};

const getTronaldDumpQuote = async () => {
  try {
    const response = await request(options);
    return response.value;
  } catch (err) {
    console.log('Error: ', err);
  }
};


// getTronaldDumpQuote().then((data) => console.log(data));

module.exports = { getTronaldDumpQuote };