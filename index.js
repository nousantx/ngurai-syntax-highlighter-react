import Ngurai from 'nguraijs'

const urx = new Ngurai({
  keywords: ['const', 'import', 'from', 'return', 'new'],
  punctuations: ['{', '}', '=', '(', ')', ':', ',', '.', ';'],
  custom: {
    global: ['TenoxUI'],
    selector: [/^--[a-zA-Z0-9_-]+/]
  }
})

const code = `import { TenoxUI } from 'tenoxui'

const css = new TenoxUI({
  property: {
    bg: 'background',
    m: 'margin',
  }
}

css.render('bg-red m-10px')

hover\\:bg-red:hover
--my-color
--my-color 
--my-color var(--my-color, red) --my-color`

console.log(urx.process(code))

console.time('v')
urx.process(code.repeat(10000))
console.timeEnd('v')
