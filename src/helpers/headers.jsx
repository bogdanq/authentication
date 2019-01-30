import cookies from 'browser-cookies'

export default {
  headers: {
    'Authorization': cookies.get('token')
  }
}