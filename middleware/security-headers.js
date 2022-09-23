module.exports = function (req, res, next) {
  res.setHeader('Strict-Transport-Security', 'max-age=31536000')
  res.setHeader('X-XSS-Protection', '1; mode=block')
  res.setHeader('X-Content-Type-Options', 'nosniff')
  res.setHeader('Referrer-Policy', 'same-origin')
  next()
}
