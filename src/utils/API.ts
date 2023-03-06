import axios from 'axios'

const API = {
  ledger: axios.create({ baseURL: process.env.NEXT_PUBLIC_API }),
}

export default API
