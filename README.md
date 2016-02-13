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

var flattened = [{
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

var result = nestify({
  id: 'id',
  parentId: 'parentId',
  children: 'children'
}, flattened)
```

> Note that the first argument of `nestify` is not required and therefore you 
> could use the command like below if you are happy with the default options:
>
>```javascript
> var result = nestify(flattened)
> ```

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
var nested = [{
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

var result = flatify({
  id: 'id',
  parentId: 'parentId',
  children: 'children'
}, nested)
```

> Note that the first argument of `flatify` is not required and therefore you 
> could use the command like below if you are happy with the default options:
>
>```javascript
> var result = flatify(nested)
> ```

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