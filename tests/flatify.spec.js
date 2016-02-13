'use strict'

const assert = require('assert')
const flatify = require('../lib/flatify')

describe('Flatify', function() {
  it('should return a flattened array', function () {

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
        name: 'Tabby'
      }]
    }]

    const flattened = [{
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
    }]

    const result = flatify({
      id: 'id',
      parentId: 'parentId',
      children: 'children'
    }, nested)

    assert.deepEqual(result, flattened)
  })

  it('should return a deeply flattened array', function () {

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

    const flattened = [{
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

    const result = flatify({
      id: 'id',
      parentId: 'parentId',
      children: 'children'
    }, nested)

    assert.deepEqual(result, flattened)
  })

  it('should return a deeply flattened array when no options are given', function () {

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

    const flattened = [{
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

    const result = flatify(nested)

    assert.deepEqual(result, flattened)
  })

})
