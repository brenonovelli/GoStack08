# Root import

`yarn add babel-plugin-root-import eslint-import-resolver-babel-plugin-root-import -D`

# Navigation

`yarn add react-navigation react-native-gesture-handler`
`yarn add react-navigation-tabs`
`yarn add react-navigation-stack`

# Módulo para lidar com o Android X

`yarn add jetifier -D`

- package.json -> scripts

```json
"postinstall": "jetify"
```

# Styles

`yarn add react-native-linear-gradient`
`yarn add styled-components`
`yarn add react-native-vector-icons`

# Axios

`yarn add axios`

# Redux Saga

`yarn add redux redux-saga react-redux redux-persist immer`

- Copiamos a mesma pasta usada no mobile.
- Alteramos `process.env.NODE_ENV === 'development'` para `__DEV__`.

`yarn add @react-native-community/async-storage`

# Reactotron

`yarn add reactotron-react-native reactotron-redux reactotron-redux-saga`

# Toastify?

- No RN é usado o Alert do próprio react-native.
- Sai: `import { toast } from 'react-toastify';`
  ```js
  Alert.alert(
    'Falha no cadastro.',
    'Houve um erro no cadastro. Verifique seus dados.'
  );
  ```
- Entra `import { Alert } from 'react-native';`

  ```js
  toast.error('Falha no cadastro. Verifique seus dados.');
  ```

  # Date FNS

  `yarn add date-fns`
