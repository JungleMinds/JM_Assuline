const checkCookieValidity = (cookieName: string) => {
  const currentTime = new Date().getTime()

  const cookieStr = localStorage.getItem('assuline')
  const cookieObj = cookieStr && JSON.parse(cookieStr)
  const validUntil = cookieObj && Number(cookieObj[cookieName])

  const stillValid = !!(validUntil && currentTime < validUntil)

  return stillValid
}

export default checkCookieValidity
