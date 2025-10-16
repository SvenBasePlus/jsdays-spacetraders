import antfu from '@antfu/eslint-config'

const ignores = [
  'node_modules',
  '**/node_modules/**',
  'src/spec.yml',
  'src/spec.yml.client.ts',
]

export default antfu({
  ignores,
  stylistic: {
    indent: 2,
    quotes: 'single',
  },
  vue: true,
  jsonc: false,
  yaml: false,
  rules: {
    // We are fine with implicit `return undefined`s
    'vue/return-in-computed-property': 'off',

    // Always force curly braces
    'curly': ['error', 'all'],

    // Use the 1-true-brace-style
    'style/brace-style': ['error', '1tbs'],

    // Always enforce an ending comma on every line
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      functions: 'always-multiline',
      exports: 'always-multiline',
      imports: 'always-multiline',
    }],

    // Enforce spacing around operations like `1 + 2`
    'space-infix-ops': ['error'],

    // Consistently use `type` and not `interface` to declare object-types
    'ts/consistent-type-definitions': ['error', 'interface'],

    // Enforce usage of global `process` (instead of `const process = require('process')`)
    'node/prefer-global/process': ['error', 'always'],

    // Do not allow unused expressions
    'no-unused-expressions': ['error'],

    // Do not allow re-assigning parameters inside a function
    'no-param-reassign': ['error'],

    // Do not allow implicit switch-fallthrough
    'no-fallthrough': ['error'],

    // Do not allow async functions which have no await expression
    'require-await': ['error'],
  },
})
