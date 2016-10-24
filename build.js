const browserify = require('browserify')
const path = require('path')

const b = browserify({
  entries: [path.join(__dirname, 'index.js'),],
  transform: ['es2020',],
})
b.transform('sheetify/transform', {use: 'sheetify-stylus'})
b.bundle().pipe(process.stdout)
