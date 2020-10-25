// Exercise 4.3
const request = require('request-promise');

const options = {
  uri: 'https://geek-jokes.sameerkumar.website/api',
  headers: {
      'User-Agent': 'Request-Promise'
  },
  json: true // Automatically parses the JSON string in the response
};

const getGeekJoke = async () => {
  try {
    const response = await request(options);
    return response;
  } catch (err) {
    console.log('Error: ', err);
  }
};

//getGeekJoke().then((data) => console.log(data));

module.exports = { getGeekJoke };