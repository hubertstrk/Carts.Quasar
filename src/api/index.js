import axios from 'axios'

export const getCarts = () => {
  return axios.get('http://localhost:3000/api/carts')
    .then(response => {
      return response.data
    })
}

export const getItems = (id) => {
  return axios.get(`http://localhost:3000/api/items/${id}`)
    .then(response => {
      return response.data
    })
}

export const setItemState = ({id, isActive}) => {
  return axios.put(`http://localhost:3000/api/item/${id}/${isActive}`)
}

export const deleteItem = (id) => {
  return axios.delete(`http://localhost:3000/api/item/${id}`)
}

export const addCart = ({title, shop}) => {
  return axios.post(`http://localhost:3000/api/cart`, {
    title, shop
  })
}

export const deleteCart = (id) => {
  return axios.delete(`http://localhost:3000/api/cart/${id}`)
}
