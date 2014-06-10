var tape = require('tape')
var host = require('./')

tape('basic', function(t) {
  t.same(host('localhost:2375'), 'http://localhost:2375')
  t.end()
})

tape('short', function(t) {
  t.same(host(':2375'), 'http://localhost:2375')
  t.end()
})

tape('long', function(t) {
  t.same(host('http://localhost:2375'), 'http://localhost:2375')
  t.end()
})

tape('0.0.0.0', function(t) {
  t.same(host('http://0.0.0.0:2375'), 'http://localhost:2375')
  t.end()
})