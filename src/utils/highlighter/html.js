export const html = {
  keywords: ['div', 'span', 'html', 'head', 'body', 'DOCTYPE', 'meta', 'title', 'script', 'style'],
  punctuations: ['{', '}', '(', ')', '<', '>', '=', '/', '<!'],
  comments: [{ prefix: '<!--', suffix: '-->' }],

  custom: {
    'global italic': [
      'class',
      'id',
      ' html',
      'lang',
      'src',
      'name',
      'charset',
      'http-equiv',
      'content'
    ]
  }
}
