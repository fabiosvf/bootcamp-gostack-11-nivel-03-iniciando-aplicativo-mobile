####  Bootcamp - GoStack 11
# 🚀 Nível 03 - Iniciando Aplicativo Mobile (App GoBarber)

## Sobre
- Nesse módulo criaremos a versão mobile do GoBarber que será utilizada pelos usuários para agendar serviços dentro da plataforma.

---
## Roteiro

- Nesta seção será descrito o roteiro com todos os passos para criação do projeto em React Native com TypeScript

### Criando o projeto
- Preparar o ambiente para executar aplicações React Native
  - [Passo a Passo para Preparar o Ambiente React Native](https://react-native.rocketseat.dev/)
- Observação, de acordo com as últimas documentações e recomendações do pessoal do time do `react`, não devemos instalar a `react-native-cli` de forma global dentro do nosso sistema operacional.
- Para desinstalar a versão global utilizando o `npm`, digite:
```
$ npm uninstall -g react-native-cli
```
- Para desinstalar a versão global utilizando o `yarn`, digite:
```
$ yarn global remove react-native-cli
```
- Crie uma pasta
- Acesse a pasta em modo terminal
- Digite o seguinte comando para iniciar o projeto à partir de um template padrão do react-native já contendo as principais ferramentas pré configuradas e necessárias para o desenvolvimento do app mobile:
  - Lembrando que o `nomedoapp` deve conter apenas letras. Outros caracteres como pontuação, acentuação, números, espaços ou qualquer outro símbolo, não serão aceitos.
```
$ npx react-native init nomedoapp --template react-native-template-typescript
```
- Acesse a pasta do projeto recém criado
```
$ cd nomedoapp
```
- Abra a pasta do projeto no Visual Studio Code
```
$ code .
```
### Configurando a versão inicial do projeto
- Crie a pasta `src` na raiz do projeto
- Crie o arquivo `src/App.tsx` com o seguinte conteúdo:
```ts
import React from 'react';
import {View} from 'react-native';

const App: React.FC = () => <View />;

export default App;
```
- No arquivo `index.js` da raiz do projeto, altere a referência ao arquivo `App`
```ts
//De
import App from './App'
//Para
import App from './src/App'
```
- Exclua os seguintes arquivos
```
.eslintrc.js
.prettierrc.js
App.tsx
```

### Configurando padrões de projeto com ESLint, Prettier e EditorConfig

#### Configurando o EditorConfig
- Instale a extensão `EditorConfig for VS Code` no Visual Studio Code
- Crie o arquivo `.editorconfig` na raiz do projeto com o seguinte conteúdo:
```
root = true

[*]
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
end_of_line = lf
```
#### Configurando o ESLint
- Instale a extensão `ESLint` no Visual Studio Code
- Abra o arquivo `settings.json` pressionando `CTRL + P` e digitando o nome do arquivo.
- Adicione o trecho abaixo no final do arquivo:
```
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
}
```
- Além de excluir o arquivo `.eslintrc.js`, realize também a desinstalação da versão do `eslint` que veio junto com o template do projeto. Para isso digite
```
$ yarn remove eslint @react-native-community/eslint-config
```
- Instale a biblioteca `eslint` como dependência de desenvolvimento:
```
$ yarn add eslint -D
```
- Inicie o assistente de configuração do ESLint digitando o seguinte comando:
```
$ yarn eslint --init
```
- Responda as perguntas com as seguintes informações:
  - How would you like to use ESLint? `To check syntax, find problems, and enforce code style`
  - What type of module does your project use? `JavaScrtipt modules (import/export)`
  - Which framework does your project use? `React`
  - Does your project use TypeScript? `Yes`
  - Where does your code run? `Pressione Espaço para desmarcar a opção`
  - How would you like to define a style for your project? `Use a popular style guide`
  - Which style guide do you want to foloow? `Airbnb: https://github.com/airbnb/javascript`
  - What format do you want your config file to be in? `JSON`
  - Would you like to install them now with npm? `No`
- Copie as linhas de comando sugeridas pelo assistente para realizar a instalação das bibliotecas de forma manual
  - No meu caso, as bibliocas sugeridas para instalação foram:
```
eslint-plugin-react@^7.21.5 @typescript-eslint/eslint-plugin@latest eslint-config-airbnb@latest eslint@^5.16.0 || ^6.8.0 || ^7.2.0 eslint-plugin-import@^2.22.1 eslint-plugin-jsx-a11y@^6.4.1 eslint-plugin-react-hooks@^4 || ^3 || ^2.3.0 || ^1.7.0 @typescript-eslint/parser@latest
```
- Remova, da sugestão de instalação, a referência completa à instalação da biblioteca `eslint`. No meu caso são essas versões:
```
eslint@^5.16.0 || ^6.8.0 || ^7.2.0
```
- Remova, da sugestão de instalação, a referência à versões anteriores para a biblioteca `eslint-plugin-react-hooks` e mantenha apenas a versão mais atual
```
De
eslint-plugin-react-hooks@^4 || ^3 || ^2.3.0 || ^1.7.0
Para
eslint-plugin-react-hooks@^4
```
- Instale as bibliotecas manualmente
```
yarn add -D eslint-plugin-react@^7.21.5 @typescript-eslint/eslint-plugin@latest eslint-config-airbnb@latest eslint-plugin-import@^2.22.1 eslint-plugin-jsx-a11y@^6.4.1 eslint-plugin-react-hooks@^4 @typescript-eslint/parser@latest
```
- Crie o arquivo `.eslintignore` na raiz do projeto com o seguinte conteúdo:
```
**/*.js
node_modules
build
android
ios
```
- Na raiz do projeto, localize o arquivo `.eslintrc.json` e dentro da sessão `extends` adicione o seguinte trecho de código:
```
"plugin:@typescript-eslint/recommended"
```
- Adicione uma nova sessão chamada `globals` com o seguinte código
```
"globals": {
      "__DEV__": "readonly"
    }
```
- Ainda no arquivo `.eslintrc.json` adicione o seguinte código dentro da sessão `plugins`:
```
"react-hooks"
```
- Para finalizar o ajuste no arquivo `.eslintrc.json` adicione o código abaixo dentro da sessão `rules`:
```
"react-hooks/rules-of-hooks": "error",
"react-hooks/exhaustive-deps": "warn",
"react/jsx-filename-extension": [
	1,
	{
	"extensions": [
		".tsx"
	]
	}
],
"no-use-before-define": "off",
"@typescript-eslint/no-use-before-define": [
	"error"
],
"react/react-in-jsx-scope": "off"
```
- Instale a biblioteca `eslint-import-resolver-typescript` como dependência de desenvolvimento:
```
$ yarn add eslint-import-resolver-typescript -D
```
- Abra novamente o arquivo de configuração `.eslintrc.json` e adicione o seguinte código na sessão `rules`:
```
"import/extensions": [
    "error",
    "ignorePackages",
    {
      "ts": "never",
      "tsx": "never"
    }
 ]
```
- Ainda no arquivo `.eslintrc.json`, logo abaixo da sessão `rules` adicione uma nova sessão chamada `settings` com o seguinte código:
```
"settings": {
    "import/resolver": {
      "typescript": {}
    }
  }
```

#### Configurando o Prettier
- Desinstale a extensão `Prettier - Code Formatter` caso a mesma esteja instalada
- Instale as seguintes bibliotecas como dependências de desenvolvimento:
```
$ yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
```
- Na sessão `extends` do arquivo de configuração `.eslintrc.json` adicione o seguinte código:
```
"prettier/@typescript-eslint",
"plugin:prettier/recommended"
```
- Na sessão `plugins` adicione
```
"prettier"
```
- Ainda no mesmo arquivo de configuração adicione o seguinte código na sessão `rules`:
```
"prettier/prettier": "error"
```
- O código final do arquivo `.eslintrc.json` deverá ficar parecido com o conteúdo abaixo:
```json
{
    "env": {
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended"
    ],
    "globals": {
      "__DEV__": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-hooks",
        "@typescript-eslint",
        "prettier"
    ],
    "rules": {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/jsx-filename-extension": [
        1,
        {
        "extensions": [
          ".tsx"
        ]
        }
      ],
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          "ts": "never",
          "tsx": "never"
        }
     ],
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": [
        "error"
      ],
      "react/react-in-jsx-scope": "off",
      "prettier/prettier": "error"
    },
    "settings": {
      "import/resolver": {
        "typescript": {}
      }
    }
}
```
- Crie o arquivo `prettier.config.js` na raiz do projeto e adicione o seguinte código:
```
module.exports = {
  singleQuote: true,
  trailingComma: 'all',
	arrowParens: 'avoid',
}
```
- Crie ou edite o arquivo `.eslintignore` na raiz do projeto e adicione a seguinte regra:
```
/*.js
```
### Estrutura e padrões
#### Configurando navegação
- Instale a biblioteca `styled-components`
```
$ yarn add styled-components
```
- Instale a biblioteca `@types/styled-components` como dependência de desenvolvimento
```
$ yarn add @types/styled-components -D
```
- Observação, devido à inconsistências na configuração do arquivo `.eslintrc.json` foi feito o seguinte ajuste:
  - Removido as opções `"prettier/@typescript-eslint"`, `"prettier"` e `"prettier/react"` da sessão `extends`
  - Mantido as opções `"plugin:@typescript-eslint/recommended"` e `"plugin:prettier/recommended"` que possuem a mesma função das opções anteriores, mas de forma atualizada
- Acesse a página [React Navigation](https://reactnavigation.org/)
  - Clique na opção `Read docs` no centro da tela
  - Em seguida, na sessão `Installation` clique na opção `Yarn`
  - Siga todas as orientações de instalação na tela
  - Abaixo seguem os comandos aplicados:
  ```
  $ yarn add @react-navigation/native
  ```
  ```
  $ yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
  ```
- Insira o seguinte código no início do arquivo `src/App.tsx`
```ts
import 'react-native-gesture-handler';
```
- Ainda na página de documentação do `React Navigation`, clique no link no final da página chamado `Hello React Navigation`, clique em `Yarn` e instale a seguinte biblioteca
```
$ yarn add @react-navigation/stack
```
#### Importando fontes externas
- Acesse o site [Google Fonts](https://fonts.google.com/), localize a fonte `Roboto Slab`, selecione os estilos `Regular 400` e `Medium 500`, em seguida, na lateral inferior direita, clique no botão `Download all`
- Crie a seguinte estrutura de pastas na raiz do projeto
```
assets/fonts/
```
- Copie, para dentro desta pasta, os arquivos `RobotoSlab-Regular.ttf` e `RobotoSlab-Medium.ttf` obtidos a partir do download das fontes do Google
- Crie o arquivo `react-native.config.js` na raiz do projeto e defina a seguinte parametrização
```js
module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: [
    './assets/fonts/'
  ],
};
```
- Em seguinte digite a seguinte linha de comando:
```
$ npx react-native link
ou
$ yarn react-native link
```
- Após executar o comando acima, confira se as fontes foram incorporadas ao código nativo `android` ou `ios`. Caso contrário, o processo deverá ser revisto.
- Para o `android` localize os seguintes arquivos
```
android/app/src/main/assets/fonts/RobotoSlab-Medium.ttf
android/app/src/main/assets/fonts/RobotoSlab-Regular.ttf
```
- Para o `ios` localize a referência às fontes `RobotoSlab-Regular.ttf` e `RobotoSlab-Medium.ttf` dentro dos seguintes arquivos
```
ios/appgobarber.xcodeproj/project.pbxproj
ios/appgobarber/Info.plist
```
### Autenticação e cadastro
#### Input & Button
- Abra o arquivo `.eslintrc.json` e inclua as seguintes regras dentro da sessão `rules`
  - A regra `import/prefer-default-export` obriga definir o parâmetro `default` ao exportar um módulo. Como estamos trabalhando com `styled-components` e existe a necessidade de exportar vários módulos de estilização sem o parâmetro `default`, então a gente desliga essa regra
  - A regra `react/prop-types` serve para obrigar a utilização de `propTypes`, mas como estamos utilizando o `typescript` que já faz todo o tratamento de tipagem, então a gente também desliga essa regra
  - Por último, a regra `react/jsx-props-no-spreading` bloqueia a passagem de props via componentes. Então vamos desligar esse regra também, porque existe a necessidade de passar props via componente.
```
"import/prefer-default-export": "off",
"react/prop-types": "off",
"react/jsx-props-no-spreading": "off",
```
- Instale a biblioteca `@types/styled-components-react-native` como dependência de desenvolvimento
```
$ yarn add @types/styled-components-react-native -D
```
- Instale a biblioteca `react-native-vector-icons`
```
$ yarn add react-native-vector-icons
```
- Após a instalação dessa biblioteca, para o `ios` abra o arquivo `ios/appgobarber/Info.plist` e inclusa o seguinte código como uma string do array da key `UIAppFonts`
```
Feather.ttf
```
- Para o `android` abra o arquivo `android/app/build.gradle` e adiciona no final do arquivo a seguinte linha de código:
```
project.ext.vectoricons = [
  iconFontNames: ["Feather.ttf"]
];
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```
- Observação importante, no trecho de código `iconFontNames: ["Feather.ttf"]` garanta que seja utilizado aspas duplas para referenciar a fonte de ícones.
- Maiores detalhes consulte o versionamento deste código
- Instale a biblioteca `@types/react-native-vector-icons` como dependência de desenvolvimento
```
$ yarn add @types/react-native-vector-icons -D
```
#### Tela de autenticação
- Instale a biblioteca `react-native-iphone-x-helper`
```
$ yarn add react-native-iphone-x-helper
```
#### Integrando Unform
- Instale as bibliotecas `@unform/core` e `@unform/mobile`
```
$ yarn add @unform/core @unform/mobile
```
- Observação: Devido a alguns conflitos entre o `react` versão `16.13.1` e o `unform`, tive que atualizar o react para a versão `17.0.1`
#### Validação dos formulários
- Instale a biblioteca `yup`
```
$ yarn add yup
```
- Instale a biblioteca `@types/yup` como dependência de desenvolvimento
```
$ yarn add @types/yup -D
```
---
## Padrões de Projeto

#### Introdução
- [Padrões de projeto com ESLint, Prettier e EditorConfig](docs/Padr%C3%B5es%20de%20projeto%20com%20ESLint%2C%20Prettier%20e%20EditorConfig.pdf)

#### Ferramentas para padronização de código
- [EditorConfig](docs/EditorConfig.pdf)
- [ESLint](docs/ESLint.pdf)
- [Prettier](docs/Prettier.pdf)

---

## Tecnologias utilizadas

#### Dependências de Projeto
- [@react-native-community/masked-view](https://yarnpkg.com/package/@react-native-community/masked-view)
- [@react-navigation/native](https://yarnpkg.com/package/@react-navigation/native)
- [@react-navigation/stack](https://yarnpkg.com/package/@react-navigation/stack)
- [@unform/core](https://yarnpkg.com/package/@unform/core)
- [@unform/mobile](https://yarnpkg.com/package/@unform/mobile)
- [react](https://yarnpkg.com/package/react)
- [react-native](https://yarnpkg.com/package/react-native)
- [react-native-gesture-handler](https://yarnpkg.com/package/react-native-gesture-handler)
- [react-native-iphone-x-helper](https://yarnpkg.com/package/react-native-iphone-x-helper)
- [react-native-reanimated](https://yarnpkg.com/package/react-native-reanimated)
- [react-native-safe-area-context](https://yarnpkg.com/package/react-native-safe-area-context)
- [react-native-screens](https://yarnpkg.com/package/react-native-screens)
- [react-native-vector-icons](https://yarnpkg.com/package/react-native-vector-icons)
- [styled-components](https://yarnpkg.com/package/styled-components)
- [yup](https://yarnpkg.com/package/yup)

#### Dependências de Desenvolvimento
- [@babel/core](https://yarnpkg.com/package/@babel/core)
- [@babel/runtime](https://yarnpkg.com/package/@babel/runtime)
- [@types/jest](https://yarnpkg.com/package/@types/jest)
- [@types/react-native](https://yarnpkg.com/package/@types/react-native)
- [@types/react-native-vector-icons](https://yarnpkg.com/package/@types/react-native-vector-icons)
- [@types/react-test-renderer](https://yarnpkg.com/package/@types/react-test-renderer)
- [@types/styled-components](https://yarnpkg.com/package/@types/styled-components)
- [@types/styled-components-react-native](https://yarnpkg.com/package/@types/styled-components-react-native)
- [@types/yup](https://yarnpkg.com/package/@types/yup)
- [@typescript-eslint/eslint-plugin](https://yarnpkg.com/package/@typescript-eslint/eslint-plugin)
- [@typescript-eslint/parser](https://yarnpkg.com/package/@typescript-eslint/parser)
- [babel-jest](https://yarnpkg.com/package/babel-jest)
- [eslint](https://yarnpkg.com/package/eslint)
- [eslint-config-airbnb](https://yarnpkg.com/package/eslint-config-airbnb)
- [eslint-config-prettier](https://yarnpkg.com/package/eslint-config-prettier)
- [eslint-import-resolver-typescript](https://yarnpkg.com/package/eslint-import-resolver-typescript)
- [eslint-plugin-import](https://yarnpkg.com/package/eslint-plugin-import)
- [eslint-plugin-jsx-a11y](https://yarnpkg.com/package/eslint-plugin-jsx-a11y)
- [eslint-plugin-prettier](https://yarnpkg.com/package/eslint-plugin-prettier)
- [eslint-plugin-react](https://yarnpkg.com/package/eslint-plugin-react)
- [eslint-plugin-react-hooks](https://yarnpkg.com/package/eslint-plugin-react-hooks)
- [jest](https://yarnpkg.com/package/jest)
- [metro-react-native-babel-preset](https://yarnpkg.com/?q=metro-react-native-babel-preset)
- [prettier](https://yarnpkg.com/package/prettier)
- [react-test-renderer](https://yarnpkg.com/package/react-test-renderer)
- [typescript](https://yarnpkg.com/package/typescript)
---

## Como executar
- Crie uma pasta para o projeto
- Acesse a pasta
- Faça o clone do projeto
```
$ git clone https://github.com/fabiosvf/bootcamp-gostack-11-nivel-03-iniciando-aplicativo-mobile.git .
```
- Atualize as bibliotecas
```
$ yarn
```
- Para iniciar o aplicativo no Android, digite:
```
$ yarn android
```
- Caso o Metro Bundle não tenha sido aberto por qualquer motivo, basta digitar o seguinte comando:
  - E em seguida atualizar a aplicação no emulador do dispositivo mobile
```
$ yarn start
```
