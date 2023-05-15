const axios = require('axios').default;


async function getPath(start, object, end) {
    let path = (await axios.get('http://localhost:4000/path', {params: {start, object, end}})).data;
    console.log(path)
    path.title = `Travel ${path.path.toObject[0]} -> ${path.path.toEnd[0]} -> ${path.path.toEnd[path.path.toEnd.length - 1]}`
    path.subtitle = `From ${path.path.toObject[0]}, in path: ${path.path.toObject.slice(1).join(' -> ')} get the object ${path.path.toEnd.slice(1).join(' -> ')} and delivers to the customer (in ${Math.round(path.time)} seconds)`
    path.id = Date.now()
    console.log(path)

    return path;
}

module.exports = { getPath };
