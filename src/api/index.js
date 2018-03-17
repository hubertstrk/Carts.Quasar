import axios from 'axios'
import {config} from '../config'

export const getCarts = () => {
  return axios.get(`${config.host}/api/carts`)
    .then(response => {
      return response.data
    })
}

export const getItems = (id) => {
  return axios.get(`${config.host}/api/items/${id}`)
    .then(response => {
      return response.data
    })
}

export const setItemState = ({id, isActive}) => {
  return axios.put(`${config.host}/api/item/${id}/${isActive}`)
}

export const deleteItem = (id) => {
  return axios.delete(`${config.host}/api/item/${id}`)
}

export const addCart = ({title, shop}) => {
  return axios.post(`${config.host}/api/cart`, {
    title, shop
  })
}

export const deleteCart = (id) => {
  return axios.delete(`${config.host}/api/cart/${id}`)
}

export const addItem = ({cartId, text}) => {
  return axios.post(`${config.host}/api/cart/${cartId}/${text}`)
}
