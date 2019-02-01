import cookies from 'browser-cookies'

export default {
  headers: {
    'Authorization': cookies.get('token')
  }
}

export function UserEmail(email) {
  return {
    headers: {
      'Authorization': email
    }
  }
}