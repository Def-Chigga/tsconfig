# @defchigga/tsconfig

[简体中文](./README.zh-CN.md) | English

Basic TypeScript configuration for Web (Vue, etc.), Node, Lib, Vitest, and Uniapp development.

## Installation

```bash
pnpm add -D @defchigga/tsconfig
# 或者
yarn add -D @defchigga/tsconfig
# 或者
npm install -D @defchigga/tsconfig
```

## Prerequisites & Peer Dependencies

This package relies on several peer dependencies. Depending on your project type, you need to install the corresponding packages:

### 1. Base / Library

For basic usage or library development:

```bash
pnpm add -D typescript
```

### 2. Vue Or Other Web Application

For Vue3 web applications:

```bash
pnpm add -D typescript vue
```

### 3. Node.js Application

For Node.js apps or scripts:

```bash
pnpm add -D typescript @types/node @tsconfig/node24
```

### 4. UniApp Application

For UniApp projects:

```bash
pnpm add -D typescript @dcloudio/types @uni-helper/uni-types @uni-helper/uni-app-types @uni-helper/uni-ui-types @uni-helper/uni-cloud-types miniprogram-api-typings
```

### 5. Testing (Vitest)

For testing environments:

```bash
pnpm add -D typescript @types/node @tsconfig/node24 @types/jsdom jsdom
```

## Usage

Add one of the available configurations to your `tsconfig.json`.

### 1. Base Configuration

The base configuration providing strict type checking and modern module resolution (`bundler`).

```json
{
  "extends": "@defchigga/tsconfig/tsconfig.json"
}
```

### 2. Node.js Environment

For Node.js scripts.

```json
{
  "extends": "@defchigga/tsconfig/tsconfig.node.json",
  "include": [
    "vite.config.*",
    "vitest.config.*",
    "cypress.config.*",
    "nightwatch.conf.*",
    "playwright.config.*",
    "eslint.config.*"
  ]
}
```

### 3. Web Application (Vue3 + Vite)

For standard Vue3 web applications.

```json
{
  "extends": "@defchigga/tsconfig/tsconfig.app.json",
  "include": ["env.d.ts", "src/**/*", "src/**/*.vue"],
  "exclude": ["src/**/__tests__/*"]
}
```

### 4. UniApp Project

Specialized configuration for UniApp development, including types for `@dcloudio/types`, `@uni-helper`, and WeChat Miniprogram.

```json
{
  "extends": "@defchigga/tsconfig/tsconfig.uni.json",
  "include": ["env.d.ts", "src/**/*", "src/**/*.vue"],
  "exclude": ["src/**/__tests__/*"]
}
```

### 5. Library Development

For building libraries. It enables declaration file generation (`declaration: true`) and skips library checks.

```json
{
  "extends": "@defchigga/tsconfig/tsconfig.lib.json",
  "include": ["src/**/*", "lib/**/*", "packages/**/*"]
}
```

### 6. Vitest Testing

For testing with Vitest.

```json
{
  "extends": "@defchigga/tsconfig/tsconfig.vitest.json",
  "include": ["src/**/__tests__/*", "env.d.ts"],
  "exclude": []
}
```

### 7. Root Configuration (Project References)

If you prefer to separate configurations for different environments (e.g., app, node, test) using TypeScript Project References, your root `tsconfig.json` should look like this:

```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" },
    { "path": "./tsconfig.vitest.json" }
  ]
}
```

## Features

- **Strict by default**: Enforces strict type checking for better code quality.
- **Modern**: Targets `ESNext` and uses `moduleResolution: bundler`.
- **Vue Ready**: Includes necessary options for Vue 3 and Volar.
- **UniApp Support**: Built-in support for UniApp types.

## License

[MIT](./LICENSE)
