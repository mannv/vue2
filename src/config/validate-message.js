//https://vuelidate.js.org/#sub-builtin-validators
const messages = {
  required: '%s is required',
  requiredIf: '%s is required',
  requiredUnless: '%s is required',
  minLength: '%s must be at least %s characters',
  maxLength: '%s cannot be longer than %s characters',
  minValue: '%s cannot be less than %s',
  maxValue: '%s cannot be greater than %s',
  between: '%s must be between %s and %s',
  alpha: '%s is not a alphabet characters',
  alphaNum: '%s is not a alphanumerics',
  numeric: '%s must equal numerics',
  integer: '%s must equal positive and negative integers',
  decimal: '%s must equal positive and negative decimal numbers',
  email: '%s is not a valid email',
  ipAddress:
    '%s is not a valid IPv4 addresses in dotted decimal notation like 127.0.0.1',
  macAddress: '%s is not a valid MAC addresses like 00:ff:11:22:33:44:55',
  sameAs: '%s -same as message',
  url: '%s is not a valid URLs',
  or: '%s -or message',
  and: '%s -and message',
  not: '%s -not message',
  withParams: '%s -withParams message',
}

const formatRegExp = /%[sdj%]/g

export function format(...args) {
  let i = 1
  const f = messages[args[0]]
  const len = args.length
  if (typeof f === 'function') {
    return f.apply(null, args.slice(1))
  }
  if (typeof f === 'string') {
    let str = String(f).replace(formatRegExp, x => {
      if (x === '%%') {
        return '%'
      }
      if (i >= len) {
        return x
      }
      switch (x) {
        case '%s':
          return String(args[i++])
        case '%d':
          return Number(args[i++])
        case '%j':
          try {
            return JSON.stringify(args[i++])
          } catch (_) {
            return '[Circular]'
          }
        default:
          return x
      }
    })
    return str
  }
  return f
}
