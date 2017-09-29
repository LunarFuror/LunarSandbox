const LOCAL_API_ADDRESS = 'http://localhost:3000'
const LIVE_API_ADDRESS = 'https://lunar-api.herokuapp.com'

export function getApiUrl () {
  if (document.domain === 'localhost') {
    return localStorage.getItem(LOCAL_API_ADDRESS)
  } else {
    return localStorage.getItem(LIVE_API_ADDRESS)
  }
}
