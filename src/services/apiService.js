const axios = require('axios').default;


async function getPath(start, object, end) {
    return await axios.get('http://localhost:4000/path', {params: {start, object, end}})
}

module.exports = { getPath };
