# sz

**Determine the size of an image**

Depends on [node-canvas](https://github.com/LearnBoost/node-canvas) which has special [build instructions](https://github.com/LearnBoost/node-canvas/wiki/_pages) as it requires **Cairo** to be installed on your system.

You may provide either a `String` specifying the path to the image or a `Buffer` containing the image data and you will receive an object with `'height'` and `'width'` properties on your callback

```js
var sz = require('sz')
  , fs = require('fs')

sz('/path/to/nyancat.gif', function (err, size) {
  // where `size` may look like: { height: 280, width: 400 }
})

var buf = fs.readFileSync('/path/to/nyancat.gif')

sz(buf, function (err, size) {
  // where `size` will be the same as above
})
```

## Licence

sz is Copyright (c) 2013 Rod Vagg [@rvagg](https://twitter.com/rvagg) and licensed under the MIT licence. All rights not explicitly granted in the MIT license are reserved. See the included LICENSE file for more details.