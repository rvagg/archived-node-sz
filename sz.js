const fs     = require('fs')
    , canvas = require('canvas')

module.exports = function (src, callback) {
  var image = new canvas.Image()
  image.onload = function () {
    callback(null, { width: image.width, height: image.height })
  }
  image.onerror = function (err) {
    callback(err)
  }

  // for Windows compatibility we're only going to pass a Buffer to src
  if (Buffer.isBuffer(src)) {
    image.src = src
  } else if (typeof src == 'string') {
    fs.readFile(src, function (err, buf) {
      if (err)
        return callback(err)
      image.src = buf
    })
  } else {
    callback(new Error('Must provide a String path or a Buffer'))
  }
}