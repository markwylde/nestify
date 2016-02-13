'use strict'

const assert = require('assert')
const nestify = require('../lib/nestify')

describe('Nestify', function() {
  it('should return a nested array', function () {

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
    }]

    const nested = [{
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
        name: 'Tabby'
      }]
    }]

    const result = nestify({
      id: 'id',
      parentId: 'parentId',
      children: 'children'
    }, flattened)

    assert.deepEqual(result, nested)
  })

  it('should return a deeply nested array', function () {

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

    const nested = [{
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

    const result = nestify({
      id: 'id',
      parentId: 'parentId',
      children: 'children'
    }, flattened)

    assert.deepEqual(result, nested)
  })

  it('should return a deeply nested array when no options are given', function () {

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

    const nested = [{
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

    const result = nestify(flattened)

    assert.deepEqual(result, nested)
  })

})
