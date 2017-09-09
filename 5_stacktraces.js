var scenario = require('./5_stacktraces_fn.js');

var jsonPath = './mushroom-kingdom.json'

scenario(jsonPath, cb)

function cb (error, contents) {
    console.error(error)
    console.log(contents)
}