function flatify(options, data) {
  var options = options || {}
  options.childrenContainer = 'children'
  options.parentId = 'parentId'
  options.id = 'id'

  var parentId = options.parentId
  var id = options.id
  var childrenContainer = options.childrenContainer

  function parseSingle(currentId, currentData) {
    var crt = currentData.reduce(function(p, c, idx, ary) {
      var t = Object.assign({}, c)
      delete t.children
      if (currentId) {
        t[parentId] = currentId
      }
      p.push(t)
      if (c[childrenContainer]) {
        p = p.concat(parseSingle(c[id], c[childrenContainer]))
      }
      return p
    }, [])

    return crt
  }
  return parseSingle(null, data)
}

module.exports = flatify
