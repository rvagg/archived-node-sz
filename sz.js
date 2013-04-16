const canvas = require('canvas')

module.exports = function (src, callback) {
  var image = new canvas.Image()
  image.onload = function () {
    callback(null, { width: image.width, height: image.height })
  }
  image.onerror = function (err) {
    callback(err)
  }
  image.src = src
}