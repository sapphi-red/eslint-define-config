<p>
  <a href="https://www.npmjs.com/package/eslint-define-config" target="_blank">
    <img alt="NPM package" src="https://img.shields.io/npm/v/eslint-define-config.svg">
  </a>
  <a href="https://www.npmjs.com/package/eslint-define-config" target="_blank">
    <img alt="Downloads" src="https://img.shields.io/npm/dt/eslint-define-config.svg">
  </a>
  <a href="https://github.com/Shinigami92/eslint-define-config/actions/workflows/ci.yml">
    <img alt="Build Status" src="https://github.com/Shinigami92/eslint-define-config/actions/workflows/ci.yml/badge.svg?branch=main">
  </a>
  <a href="https://github.com/Shinigami92/eslint-define-config/blob/main/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/github/license/Shinigami92/eslint-define-config.svg">
  </a>
  <a href="https://prettier.io" target="_blank">
    <img alt="Code Style: Prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg">
  </a>
</p>

# eslint-define-config

Provide a `defineConfig` function for `.eslintrc.js` files.

# Installation

```bash
# add eslint and eslint-define-config to project’s dev dependencies
npm install --save-dev eslint eslint-define-config
# or
yarn add --dev eslint eslint-define-config
```

# Usage

`.eslintrc.js`

```ts
// @ts-check
const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  root: true,
  rules: {
    // rules...
  }
});
```

# Why?

Improve your eslint configuration experience with:

- auto-suggestions
- type checking (Use `// @ts-check` at the first line in your `.eslintrc.js`)
- documentation
- deprecation warnings

<img src="https://user-images.githubusercontent.com/7195563/112484789-8a416480-8d7a-11eb-9337-d8b5bc16de17.png" alt="Image" width="600px"/>

## Video

_Click on the thumbnail to play the video_

<a href="https://user-images.githubusercontent.com/7195563/112726158-4a19e780-8f1c-11eb-8cc6-4ea6c100137f.mp4" target="_blank">
  <img src="https://user-images.githubusercontent.com/7195563/112726343-30c56b00-8f1d-11eb-9b92-260c530caf1b.png" alt="Video" width="600px"/>
</a>

# Credits

- [Proposal Idea](https://github.com/eslint/eslint/issues/14249)
- [Vite](https://github.com/vitejs/vite) and [Evan You](https://github.com/yyx990803) for the idea
- [@antfu](https://github.com/antfu) and his [tweet](https://twitter.com/antfu7/status/1365907188338753536)
