function nestify(options, data) {
  var options = options || {}
  options.childrenContainer = 'children'
  options.parentId = 'parentId'
  options.id = 'id'

  var parentId = options.parentId
  var id = options.id
  var childrenContainer = options.childrenContainer

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
        item[childrenContainer] = currentParsed
      }
    })
    return crt
  }
  return parseSingle(null, data)
}

module.exports = nestify
