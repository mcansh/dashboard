module.exports = {
  extends: 'airbnb-base',
  env: {
    browser: true,
    node: true,
  },
  plugins: ['prettier'],
  rules: {
    'no-unused-vars': [1, { argsIgnorePattern: 'res|next|^err' }],
    'arrow-body-style': [2, 'as-needed'],
  },
};
