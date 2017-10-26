
import axios from 'axios'

function Host(){}

Host.get = (route, to_send = {}) => {
  return axios.get("http://localhost:8000" + route, to_send)
}

export default Host
