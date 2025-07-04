const alf = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const crs = '0123456789_-'

export const css = {
  keywords: ['body', 'html', 'main', 'calc', 'var'],
  identifierPattern: {
    starts: `${alf}${crs}`,
    parts: `${alf}${crs}`
  },
  tokens: {
    punctuation: ['{', '}', '(', ')', '.', ':', ';', '&', '='],
    keyword: [
      'hover',
      'hover\\:',
      'bg-red',
      // units
      'px',
      'rem'
    ],
    'string italic': ['flex', 'red'],
    global: ['margin', 'display', 'background', 'color', 'padding'],
    // css variable regex pattern
    'number italic': [/^--[a-zA-Z0-9_-]+/]
  }
}
