import { preset, preflight, defaultProperties } from '@tenoxui/preset-tailwind'

export default {
  include: ['index.html', './src/**/*.{js,jsx}'],
  css: {
    apply: {
      ...preflight,
      ...defaultProperties,

      ':root': '[--tw-default-font-sans]-Inter [--tw-default-font-mono]-[JetBrains_Mono]',

      // highlighter styles
      // light theme
      '.token.keyword': 'font-medium text-emerald-600',
      '.token.string': 'text-sky-600 font-medium',
      '.token.punctuation': 'text-gray-500',
      '.token.identifier': 'text-gray-800',
      '.token.global': 'text-gray-700',
      '.token.number': 'text-amber-600',
      '.token.comment': 'text-gray-500 italic',
      // dark theme
      '.dark .token.keyword': 'font-normal text-emerald-500',
      '.dark .token.string': 'text-sky-400 font-normal',
      '.dark .token.punctuation': 'text-gray-400',
      '.dark .token.identifier': 'text-gray-200',
      '.dark .token.global': 'text-gray-300',
      '.dark .token.number': 'text-amber-500',
      '.dark .token.comment': 'text-gray-500 italic',
      // custom theme - vscode (initially)
      '.vsc .token.keyword': 'text-#569cd6',
      '.vsc .token.string': 'text-#ce9178',
      '.vsc .token.punctuation': 'text-gray-300',
      '.vsc .token.identifier': 'text-#9cdcfe',
      '.vsc .token.global': 'text-#4ec9b0',
      '.vsc .token.number': 'text-#b5cea8',
      '.vsc .token.comment': 'text-#6a9955 italic'
    },
    ...preset()
  }
}
