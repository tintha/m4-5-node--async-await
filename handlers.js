// require all the jokes functions
const { getDadJoke } = require('./__workshop/exercise-4.1');
const { getTronaldDumpQuote } = require('./__workshop/exercise-4.2');
const { getGeekJoke  } = require('./__workshop/exercise-4.3');

// return a joke of the type requested (dad, tronald or geek)
const handleJoke = async (req, res) => {
  const type = req.params.type;
  try {
    if (type === 'dad') {
      const dadJoke = await getDadJoke();
      res.status(200).json({
        status: 200, joke: `${dadJoke}`
      })
    } else if (type === 'tronald') {
      const tronaldJoke = await getTronaldDumpQuote();
      res.status(200).json({
        status: 200, joke: `${tronaldJoke}`
      })
    } else if (type === 'geek') {
      const geekJoke = await getGeekJoke();
      res.status(200).json({
        status: 200, joke: `${geekJoke}`
      })
    } else {
      res.status(400).json({
        status: 400, error: 'Type not found'
      })
      console.error('Type not found');
    }
  } catch (err) {
    console.log(err);
  } 
}

module.exports = { handleJoke };
