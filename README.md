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
- [react](https://yarnpkg.com/package/react)
- [react-native](https://yarnpkg.com/package/react-native)

#### Dependências de Desenvolvimento
- [@babel/core](https://yarnpkg.com/package/@babel/core)
- [@babel/runtime](https://yarnpkg.com/package/@babel/runtime)
- [@react-native-community/eslint-config](https://yarnpkg.com/package/@react-native-community/eslint-config)
- [@types/jest](https://yarnpkg.com/package/@types/jest)
- [@types/react-native](https://yarnpkg.com/package/@types/react-native)
- [@types/react-test-renderer](https://yarnpkg.com/package/@types/react-test-renderer)
- [babel-jest](https://yarnpkg.com/package/babel-jest)
- [eslint](https://yarnpkg.com/package/eslint)
- [jest](https://yarnpkg.com/package/jest)
- [metro-react-native-babel-preset](https://yarnpkg.com/?q=metro-react-native-babel-preset)
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