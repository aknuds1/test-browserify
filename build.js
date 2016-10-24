const browserify = require('browserify')
const path = require('path')

const b = browserify(path.join(__dirname, 'index.js'))
b.transform('sheetify')
b.bundle().pipe(process.stdout)
