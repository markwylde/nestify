function nestify(arg1, arg2) {
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
      if (!c[parentId] && !currentId) {
        p.push(c)
      } else {
        if (c[parentId] === currentId) {
          p.push(c)
        }
      }
      return p
    }, [])

    crt.forEach(function(item) {
      var currentParsed = parseSingle(item[id], currentData)
      if (currentParsed.length > 0) {
        item[children] = currentParsed
      }
    })
    return crt
  }
  return parseSingle(null, data)
}

module.exports = nestify
