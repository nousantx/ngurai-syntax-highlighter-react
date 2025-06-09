import Code from './components/code'

export default function App() {
  return (
    <main className="mx-auto max-w-7xl min-h-dvh p-8">
      <header className="text-balance">
        <h1 className="text-5xl tracking-tighter font-medium font-mono">Nyintex</h1>
        <p className="mt-8 text-current/70 font-medium">
          The most lightweight, small, and customizable syntax highlighter! (maybe?)
        </p>
      </header>

      <Code
        lineHighlight={[1, 5]}
        reserve={{
          keywords: ['render']
        }}
        code={`import { TenoxUI } from 'tenoxui'
import Ngurai from 'nguraijs'

// create TenoxUI instance
const css = new TenoxUI({
  property: {
    bg: 'background',
    m: 'margin',
  }
}

// generate stylesheet
console.log(css.render('bg-red m-10px'))`}
      />

      <Code
        lineHighlight={[2]}
        code={`<div class="bg-red">
  <!-- Hello World! -->
  <span class="text-red-500 font-medium">Hello World!</span>
</div>`}
      />

      <Code
        lang="css"
        lineHighlight={[2]}
        code={`body {
  display: flex;
  margin: 10px;
}

.hover\\:bg-red:hover {
  background: red;
  color: var(--my-color, red);
  padding: calc(2rem - 20px)
}`}
      />

      <div className="dark">
        <Code
          lang="js"
          lineHighlight={[1, 5]}
          reserve={{
            keywords: ['render'],
            custom: {
              global: ['hahaha']
            }
          }}
          code={`import { TenoxUI } from 'tenoxui'
import Ngurai from 'nguraijs'

// create TenoxUI instance
const css = new TenoxUI({
  property: {
    bg: 'background',
    m: 'margin',
  }
}

// generate stylesheet
console.log(css.render('bg-red m-10px'))`}
        />

        <Code
          lang="html"
          lineHighlight={[2]}
          code={`<div class="bg-red">
  <!-- Hello World! -->
  <span class="text-red-500 font-medium">Hello World!</span>
</div>`}
        />

        <Code
          lang="css"
          reserve={{ keywords: ['hover'] }}
          lineHighlight={[2]}
          code={`body {
  display: flex;
  margin: 10px;
}

.hover\\:bg-red:hover {
  background: red;
  color: var(--my-color, red);
  padding: calc(2rem - 20px)
}`}
        />
      </div>

      <footer className="mt-12 text-center text-sm text-current/70 font-medium">
        Built with{' '}
        <a
          href="https://github.com/nguraijs/nguraijs"
          className="underline text-gray-950 hover:text-gray-700 hover:no-underline"
        >
          NguraiJS
        </a>{' '}
        and{' '}
        <a
          href="https://github.com/tenoxui/tenoxui"
          className="underline text-gray-950 hover:text-gray-700 hover:no-underline"
        >
          TenoxUI
        </a>
      </footer>
    </main>
  )
}
