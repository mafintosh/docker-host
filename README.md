# docker-host

Tiny module that converts a host to docker (usually `$DOCKER_HOST`) to a standard http url

```
npm install docker-host
```

[![build status](http://img.shields.io/travis/mafintosh/docker-host.svg?style=flat)](http://travis-ci.org/mafintosh/docker-host)

## Usage

``` js
var host = require('docker-host')

var h = host()
console.log(h) // will print something like http://localhost:2375
               // if $DOCKER_HOST is set that will be used as foundation as well

var h = host('tcp://:2375')
console.log(h) // will print http://localhost:2375
```

## License

MIT