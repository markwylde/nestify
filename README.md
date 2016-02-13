# nestify

A utility library to convert between nested and flattened arrays or objects.

## Install via npm
```shell
npm install nestify
```

## Documentation
### nestify()
Take a flattened array of objects and create an array of nested objects out of them

```javascript
var nestify = require('nestify').nestify

const flattened = [{
  id: 1,
  name: 'Dogs'
}, {
  id: 2,
  name: 'Cats'
}, {
  id: 3,
  parentId: 1,
  name: 'Sammy'
}, {
  id: 4,
  parentId: 1,
  name: 'Snowy'
}, {
  id: 5,
  parentId: 2,
  name: 'Tabby'
}, {
  id: 6,
  parentId: 5,
  name: 'Tabbys Child'
}]

const result = nestify({
  id: 'id',
  parentId: 'parentId',
  children: 'children'
}, flattened)
```

```javascript
result === [{
  id: 1,
  name: 'Dogs',
  children: [{
    id: 3,
    parentId: 1,
    name: 'Sammy'
  }, {
    id: 4,
    parentId: 1,
    name: 'Snowy'
  }]
}, {
  id: 2,
  name: 'Cats',
  children: [{
    id: 5,
    parentId: 2,
    name: 'Tabby',
    children: [{
      id: 6,
      parentId: 5,
      name: 'Tabbys Child'
    }]
  }]
}]
```


### flatify()
Take an array of nested objects and create a flattened array of objects out of them

```javascript
const nested = [{
  id: 1,
  name: 'Dogs',
  children: [{
    id: 3,
    name: 'Sammy'
  }, {
    id: 4,
    name: 'Snowy'
  }]
}, {
  id: 2,
  name: 'Cats',
  children: [{
    id: 5,
    name: 'Tabby',
    children: [{
      id: 6,
      name: 'Tabbys Child'
    }]
  }]
}]

const result = flatify({
  id: 'id',
  parentId: 'parentId',
  children: 'children'
}, nested)
```

```javascript
result === [{
  id: 1,
  name: 'Dogs'
}, {
  id: 3,
  parentId: 1,
  name: 'Sammy'
}, {
  id: 4,
  parentId: 1,
  name: 'Snowy'
}, {
  id: 2,
  name: 'Cats'
}, {
  id: 5,
  parentId: 2,
  name: 'Tabby'
}, {
  id: 6,
  parentId: 5,
  name: 'Tabbys Child'
}]
```

## License
The MIT License (MIT)