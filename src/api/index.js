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
