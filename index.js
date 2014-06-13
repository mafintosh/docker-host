module.exports = function(remote) {
  if (!remote) remote = process.env.DOCKER_HOST || 'unix:///var/run/docker.sock'
  if (typeof remote === 'number') return {host:'localhost', port:remote}
  if (remote.indexOf('://') === -1) remote = 'tcp://'+remote

  var parts = remote.match(/^(.+):\/\/([^:]*)(?::(\d+))?$/)
  if (!parts) throw new Error('Invalid docker remote: '+remote)

  var protocol = parts[1]
  var host = parts[2] || 'localhost'
  var port = parts[3] || 2375

  if (protocol === 'unix' || host[0] === '/') return {socketPath:host}
  if (host === '0.0.0.0') host = 'localhost'
  return {host:host, port:parseInt(port, 10)}
}