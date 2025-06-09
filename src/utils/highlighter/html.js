export const html = {
  keywords: ['div', 'span', 'html', 'head', 'body', 'DOCTYPE', 'meta', 'title', 'script', 'style'],
  comments: [{ prefix: '<!--', suffix: '-->' }],

  tokens: {
    punctuation: ['{', '}', '(', ')', '<', '>', '=', '/', '<!'],
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
