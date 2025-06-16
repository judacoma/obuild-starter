import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: false,
  rules: {
    // linting rules off ------------
    'test/consistent-test-it': 'off',
  },
})
