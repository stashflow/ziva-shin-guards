import Cookies from 'js-cookie'

const SPLASH_COOKIE = 'has_seen_splash'

export const hasSeenSplash = () => {
  const cookieValue = Cookies.get(SPLASH_COOKIE)
  console.log('Checking splash cookie:', { cookieValue, exists: cookieValue === 'true' })
  return cookieValue === 'true'
}

export const markSplashAsSeen = () => {
  console.log('Setting splash cookie to true')
  Cookies.set(SPLASH_COOKIE, 'true', { expires: 365 }) // Cookie expires in 1 year
  console.log('Cookie after setting:', Cookies.get(SPLASH_COOKIE))
} 