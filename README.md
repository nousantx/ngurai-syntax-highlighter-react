# A Syntax Highlighter Project (React)

This repo contains a basic implementation of syntax highlighter by using tokens to determine the token's type based on its keywords (token-based highlighter) especially for your react app.

It uses [NguraiJS](https://github.com/nguraijs/nguraijs) core to tokenize the input code and classified each tokens type. The bundle of the library itself is very small, `~2.6kB` minified + gzipped.

## Why?

The purpose of this project is to create a customized syntax highlighter for web (like docs, etc.) with very minimal set of keywords, since... do you really need to show 100+ lines of codes in your documentation site? That's very rare case.

In most documentation sites, code blocks are short—typically 1 to 10 lines. So, do you really need to load a full-featured syntax highlighter with support for dozens of languages and 100+ rules? Probably not.

Creating your own syntax highlighter gives you:

- Full control over how tokens are parsed and styled.
- Only the rules you actually use in your app.
- Minimal bundle size.

And here, i guide you to build your own lightweight, fast, and tiny syntax highlighter that handle syntaxes, characters, or set of keywords you ever needs in your application rather than shipping the entire highlighter with full language syntax that you not sure are used in your application.

## Project Tree

```
.
├── ...
├── index.html
├── package.json
├── src
│   ├── App.jsx
│   ├── components
│   │   └── code.jsx
│   ├── main.jsx
│   └── utils
│       └── highlighter
│           ├── css.js
│           ├── html.js
│           ├── javascript.js
│           └── preset.js
└── tenoxui.config.js
```

- `src/App.jsx` - Main app entry
- `src/components/code.jsx` - Main component for syntax highlighting
- `src/utils/highlighter/*` - All current available language presets
- `tenoxui.config.js` - Some TenoxUI configuration and syntax highlighter styles

## Usage Example

You can access the final syntax highlighter component with :

```javascript
import Code from './components/code'

export default function App() {
  return (
    <>
      <Code lang="js" code={`const data = "Hello, World!";\nconsole.log(data)`} />
    </>
  )
}
```

## Building a Language Preset

We got NguraiJS as the main engine, and it needs some **set of keywords** or language preset to determine the token's type. In this repository, there was basic preset for `javascript`, `html`, and `css`.

To build a preset for NguraiJS, you can check out its official repository or documentation, but here's the example :

```javascript
export const typescript = {
  tokens: {
    keyword: ['const', 'log' /*...*/],
    punctuation: ['=', ';', '.'],
    global: ['console']
  }
}
```

In the example above showing a very minimal preset to parse the code. After creating your preset, open the `src/components/code.tsx`, and include your new language preset to main code component :

```javascript
import { typescript } from 'path/to/file'

// ...

export function Code({ code = '', lang = 'auto' }) {
  switch (lang) {
    // add your new language
    case 'ts':
    case 'typescript':
      preset = typescript
      break
  }
}
```

And just like that! You already got new language preset for your syntax highlighter component!

## Styling

In this project, it uses [TenoxUI](https://tenoxui.web.app) for the main styling engine, you can see the syntax highlighter styles inside the `tenoxui.config.js`. But you're free to use your own framework or just native CSS, it's just a style, don't worry about this too much.

To write your own styles, you can just write syntax like :

```css
.token.keyword {
  color: red;
}
.token.punctuation {
  color: gray;
}

/* dark mode */
.dark .token.keyword {
  color: blue;
}
/* 
 * you can use other dark mode condition -
 * other than using class, like data attribute -
 * media query, etc.
 */
```
