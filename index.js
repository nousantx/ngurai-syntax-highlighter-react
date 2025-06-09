import Ngurai from 'nguraijs'
import Core from '@nguraijs/core'

const urx = new Ngurai({
  keywords: ['const', 'import', 'from', 'return', 'new'],
  punctuations: ['{', '}', '=', '(', ')', ':', ',', '.', ';'],
  custom: {
    global: ['TenoxUI']
  }
})

const crx = new Core({
  keywords: ['const', 'import', 'from', 'return', 'new'],
  tokens: {
    punctuation: ['{', '}', '=', '(', ')', ':', ',', '.', ';'],
    global: ['TenoxUI']
  }
})

const code = `import { TenoxUI } from 'tenoxui'

const css = new TenoxUI({
  property: {
    bg: 'background',
    m: 'margin',
  }
}

css.render('bg-red m-10px')`

for (let i = 0; i < 10; i++) {
  console.log('Test ', i + 1)
  console.time('Main')
  urx.process(code.repeat(10000))
  console.timeEnd('Main')
  console.time('Core')
  crx.process(code.repeat(10000))
  console.timeEnd('Core')
}
