- `yarn add prop-types`
- `yarn add react-router-dom`
- `yarn add history yarn`
- `yarn add reactotron-react-js`
- `yarn add styled-components`
- `yarn add polished`
  `yarn add axios`
  `yarn add react-toastify`
  `yarn add react-icons`
  `yarn add react-perfect-scrollbar`
  `yarn add date-fns@next`
  `yarn add date-fns-tz`

## Form e validação

- `yarn add @rocketseat/unform`
- `yarn add yup`

## Configurando Redux

- `yarn add redux redux-saga react-redux reactotron-redux reactotron-redux-saga immer`
- `yarn add redux-persist`

## Url de importação relativa

`../../../pages => ~/pages`

- `yarn add customize-cra react-app-rewired -D`
- `yarn add babel-plugin-root-import -D`
- `yarn add eslint-import-resolver-babel-plugin-root-import -D`
  `yarn add babel-plugin-root-import`
- Arquivo de configuração: config-overrides.js

```js
const { addBabelPlugin, override } = require('customize-cra');

module.exports = override(
  addBabelPlugin([
    'babel-plugin-root-import',
    {
      rootPathSuffix: 'src',
    },
  ])
);
```

- Para o eslint entender

```js
settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathSuffix: 'src',
      },
    },
  },
```

- Para o vscode voltar a linkar os arquivos: root jsconfig.json

```json
{
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      "~/*": ["*"]
    }
  }
}
```
