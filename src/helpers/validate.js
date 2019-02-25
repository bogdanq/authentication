export default function validate (type, value) {
  switch(type) {
    case 'text':
      if(value.value === '') {
        return false
      } else {
        return true
      }
      break
    default:
      return false
  }
}