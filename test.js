const fs     = require('fs')
    , path   = require('path')
    , test   = require('tap').test
    , sz     = require('./')

test('Test size jpg file', function (t) {
  t.plan(2)
  sz(path.join(__dirname, 'test-data/avatar.jpg'), function (err, size) {
    t.equal(err, null, 'no error')
    t.deepEqual({ width: 420, height: 420 }, size, 'correct size')
  })
})

test('Test size jpg Buffer', function (t) {
  t.plan(2)
  sz(fs.readFileSync(path.join(__dirname, 'test-data/avatar.jpg')), function (err, size) {
    t.equal(err, null, 'no error')
    t.deepEqual({ width: 420, height: 420 }, size, 'correct size')
  })
})

test('Test size png', function (t) {
  t.plan(2)
  sz(path.join(__dirname, 'test-data/node_logo.png'), function (err, size) {
    t.equal(err, null, 'no error')
    t.deepEqual({ width: 245, height: 66 }, size, 'correct size')
  })
})

test('Test size png Buffer', function (t) {
  t.plan(2)
  sz(fs.readFileSync(path.join(__dirname, 'test-data/node_logo.png')), function (err, size) {
    t.equal(err, null, 'no error')
    t.deepEqual({ width: 245, height: 66 }, size, 'correct size')
  })
})

test('Test size gif', function (t) {
  t.plan(2)
  sz(path.join(__dirname, 'test-data/python_logo.gif'), function (err, size) {
    t.equal(err, null, 'no error')
    t.deepEqual({ width: 211, height: 71 }, size, 'correct size')
  })
})

test('Test size gif Buffer', function (t) {
  t.plan(2)
  sz(fs.readFileSync(path.join(__dirname, 'test-data/python_logo.gif')), function (err, size) {
    t.equal(err, null, 'no error')
    t.deepEqual({ width: 211, height: 71 }, size, 'correct size')
  })
})

test('Test size animated gif', function (t) {
  t.plan(2)
  sz(path.join(__dirname, 'test-data/nyan.gif'), function (err, size) {
    t.equal(err, null, 'no error')
    t.deepEqual({ width: 400, height: 280 }, size, 'correct size')
  })
})

test('Test no such file', function (t) {
  t.plan(2)
  sz(path.join(__dirname, 'test-data/foobar.gif'), function (err, size) {
    t.ok((/error/i).test(err), 'got error message')
    t.ok(size === undefined, 'no size provided')
  })
})