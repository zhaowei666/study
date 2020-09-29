const path = require('path');
module.exports = {
    mode: "development",
    entry: path.join(__dirname, './src/js/demo.js'),
    output:{
        path:path.join(__dirname, './dist'),
        filename:'bundle.js'
    }

}
