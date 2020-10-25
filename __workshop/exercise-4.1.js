// Exercise 4.1
const request = require("request-promise");

const options = {
  uri: 'https://icanhazdadjoke.com/',
  headers: {
      'User-Agent': 'Request-Promise'
  },
  json: true // Automatically parses the JSON string in the response
};

// getDadJoke
const getDadJoke = async () => {
  try {
    const response = await request(options);
    return response.joke;
  } catch (err) {
    console.log('Error: ', err);
  }
};
// 4.1
// getDadJoke().then((data) => console.log(data));

module.exports = { getDadJoke };
