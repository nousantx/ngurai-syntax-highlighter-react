import Ngurai from 'nguraijs'
import { merge } from '@nousantx/someutils'
import { javascript, html, css } from '../utils/highlighter/preset'

export function Code({ code = '', lang = 'auto', reserve = {}, lineHighlight = null }) {
  let preset

  switch (lang) {
    case 'auto':
      preset = merge(javascript, html, css, reserve)
      break
    case 'js':
    case 'javascript':
      preset = merge(javascript, reserve)
      break
    case 'html':
      preset = merge(html, reserve)
      break
    case 'css':
      preset = merge(css, reserve)
      break
    default:
      preset = reserve
  }

  const urx = new Ngurai(preset)
  const tokens = urx.process(code)

  const isLineActive = (lineNum) => {
    if (!lineHighlight) return false
    if (Array.isArray(lineHighlight)) {
      return lineHighlight.includes(lineNum)
    }
    return lineNum === lineHighlight
  }

  return (
    <div className="mt-12 w-full bg-gray-50 text-gray-700 [.dark_&]:bg-gray-950 [.dark_&]:text-gray-300 rounded-lg shadow-xl border border-current/20">
      <header className="px-20px py-3.5 border-b-1px border-b-current/20">
        <p className="text-sm font-mono">{lang}</p>
      </header>
      <div className="w-full overflow-x-scroll">
        <pre className="py-20px min-w-full w-max leading-[1.6]">
          {tokens.map((item, index) => (
            <p
              className={
                'px-20px font-mono flex min-w-full font-80% ' +
                (isLineActive(index + 1) ? 'bg-sky-500/10' : '')
              }
            >
              <span className="mr-4 text-right select-none w-2ch">{index + 1}</span>
              <span className="inline-flex w-full">
                <span className="w-min block">
                  {item.map((token, index) => {
                    return (
                      <span className={`token ${lang} ${token.type}`}>{token.value || ' '}</span>
                    )
                  })}
                </span>
              </span>
            </p>
          ))}
        </pre>
      </div>
    </div>
  )
}
export default Code
