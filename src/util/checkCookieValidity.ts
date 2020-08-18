type CookieName = 'cookie' | 'toaster'

const checkCookieValidity = (cookieName: CookieName): boolean => {
  const currentTime = new Date().getTime()

  const cookieStr = localStorage.getItem('assuline')
  const cookieObj = cookieStr && JSON.parse(cookieStr)
  const validUntil = cookieObj && Number(cookieObj[cookieName])

  const stillValid = !!(validUntil && currentTime < validUntil)

  if (!stillValid && cookieObj) {
    if (Object.keys(cookieObj).length > 1) {
      delete cookieObj[cookieName]
      localStorage.setItem('assuline', JSON.stringify(cookieObj))
    } else if (cookieObj[cookieName]) {
      localStorage.removeItem('assuline')
    }
  }

  return stillValid
}

export default checkCookieValidity
