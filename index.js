module.exports = function(remote) {
  if (!remote) remote = process.env.DOCKER_HOST || 'localhost:2375'

  if (typeof remote === 'number')   remote = 'localhost:'+remote
  if (remote.indexOf('://') === -1) remote = 'http://'+remote

  return remote
    .replace('://:', '://localhost:')
    .replace('://0.0.0.0', '://localhost')
    .replace(/^tcp:\/\//, 'http://')
}