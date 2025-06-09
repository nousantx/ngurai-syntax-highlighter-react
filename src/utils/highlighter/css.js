const alf = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const crs = '0123456789_-'

export const css = {
  keywords: ['body', 'html', 'main', 'calc', 'var'],
  punctuations: ['{', '}', '(', ')', '.', ':', ';', '&', '='],
  identifierPattern: {
    starts: `${alf}${crs}`,
    parts: `${alf}${crs}`
  },
  custom: {
    keyword: [
      'hover',
      'hover\\:',
      'bg-red',
      // units
      'px',
      'rem'
    ],
    'string italic': ['flex', 'red'],
    global: ['margin', 'display', 'background'],
    //
    'number italic': [/^--[a-zA-Z0-9_-]+/]
  }
}
