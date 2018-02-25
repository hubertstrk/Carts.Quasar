import axios from 'axios'
import Fuse from 'fuse.js'
import { fruit } from './food/fruit'
import { cheese } from './food/cheese'
import { daries } from './food/daries'
import { herbs } from './food/herbs'
import { salat } from './food/salat'

export const getAllCarts = () => {
  return axios.get('http://cartsapi.azurewebsites.net/api/carts')
    .then(response => {
      return response.data
    })
    .catch(function (error) {
      console.error(error)
    })
}

export const updateCart = (cart) => {
  return axios.put('http://cartsapi.azurewebsites.net/api/carts', {
    cart: cart
  })
    .then((response) => {
      return response.data
    })
    .catch(function (error) {
      console.error(error)
    })
}

export const deleteCart = (rowKey) => {
  const url = `http://cartsapi.azurewebsites.net/api/carts/${rowKey}`
  return axios.delete(url)
    .catch(function (error) {
      console.error(error)
    })
}

export const addCart = (cart) => {
  return axios.post('http://cartsapi.azurewebsites.net/api/carts', {
    name: cart.name,
    shop: cart.shop
  })
    .then((response) => {
      return response.data
    })
    .catch(function (error) {
      console.log(error)
    })
}

export const getAllTags = () => {
  const url = `http://cartsapi.azurewebsites.net/api/tags`
  return axios.get(url)
    .then(response => {
      return response.data
    })
    .catch(function (error) {
      console.error(error)
    })
}

export const getTagsByCart = (cart) => {
  const url = `http://cartsapi.azurewebsites.net/api/tags/${cart.RowKey}`
  return axios.get(url)
    .then((response) => {
      return response.data
    })
    .catch(function (error) {
      console.error(error)
    })
}

export const addTag = (tag) => {
  return axios.post('http://cartsapi.azurewebsites.net/api/tags', {
    fkCart: tag.fkCart,
    name: tag.name,
    active: tag.active
  })
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.error(error)
    })
}

export const toggleTag = (tag) => {
  return axios.put('http://cartsapi.azurewebsites.net/api/tags', {
    tag: tag
  })
    .then((response) => {
      return response.data
    })
    .catch(function (error) {
      console.error(error)
    })
}

export const deleteTag = (tag) => {
  return axios.delete(`http://cartsapi.azurewebsites.net/api/tags/${tag.RowKey}`)
    .catch(function (error) {
      console.error(error)
    })
}

export const deleteTags = (tags) => {
  let actions = []
  tags.forEach((el) => {
    actions.push(deleteTag(el))
  })
  return Promise.all(actions)
}

export const suggest = (text) => {
  const url = `http://cartsapi.azurewebsites.net/api/spellcheck/${text}`
  return axios.get(url)
    .then((res) => {
      return res.data
    })
    .catch(function (error) {
      console.error(error)
    })
}

export const search = (text) => {
  const options = {
    keys: ['name'],
    shouldSort: true,
    threshold: 0.2,
    location: 0,
    minMatchCharLength: 1
  }
  const fruitFuse = new Fuse(fruit, options)
  const cheeseFuse = new Fuse(cheese, options)
  const dariesFuse = new Fuse(daries, options)
  const herbsFuse = new Fuse(herbs, options)
  const salatFuse = new Fuse(salat, options)
  return [...fruitFuse.search(text), ...cheeseFuse.search(text), ...dariesFuse.search(text), ...herbsFuse.search(text), ...salatFuse.search(text)]
}
