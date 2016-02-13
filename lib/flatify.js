function flatify(arg1, arg2) {
  var options
  var data
  if (!arg2) {
    data = arg1
  } else {
    options = arg1
    data = arg2
  }
  var options = options || {}
  options.children = options.children || 'children'
  options.parentId = options.parentId || 'parentId'
  options.id = options.id || 'id'

  var parentId = options.parentId
  var id = options.id
  var children = options.children

  function parseSingle(currentId, currentData) {
    var crt = currentData.reduce(function(p, c, idx, ary) {
      var t = Object.assign({}, c)
      delete t.children
      if (currentId) {
        t[parentId] = currentId
      }
      p.push(t)
      if (c[children]) {
        p = p.concat(parseSingle(c[id], c[children]))
      }
      return p
    }, [])

    return crt
  }
  return parseSingle(null, data)
}

module.exports = flatify
