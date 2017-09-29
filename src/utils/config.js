const LOCAL_API_ADDRESS = 'http://localhost:3000'
const LIVE_API_ADDRESS = 'https://lunar-api.herokuapp.com'

export function getApiUrl () {
  if (document.domain === 'localhost') {
    return LOCAL_API_ADDRESS
  } else {
    return LIVE_API_ADDRESS
  }
}
