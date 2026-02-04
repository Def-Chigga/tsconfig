# @defchigga/tsconfig

简体中文 | [English](./README.md)

适用于 Web（Vue等）, Node, Lib, Vitest 以及 Uniapp 开发的 TypeScript 基础配置。

## 安装

```bash
pnpm add -D @defchigga/tsconfig
# 或者
yarn add -D @defchigga/tsconfig
# 或者
npm install -D @defchigga/tsconfig
```

## 前置要求与 Peer Dependencies

本包依赖于多个对等依赖（peer dependencies）。根据您的项目类型，您需要安装对应的依赖包：

### 1. 基础 / 库开发

用于基础使用或库开发：

```bash
pnpm add -D typescript
```

### 2. Vue 等其它 Web 应用

用于 Vue3 Web 应用程序：

```bash
pnpm add -D typescript vue
```

### 3. Node.js 应用

用于 Node.js 应用或脚本：

```bash
pnpm add -D typescript @types/node @tsconfig/node24
```

### 4. UniApp 应用

用于 UniApp 项目：

```bash
pnpm add -D typescript @dcloudio/types @uni-helper/uni-types @uni-helper/uni-app-types @uni-helper/uni-ui-types @uni-helper/uni-cloud-types miniprogram-api-typings
```

### 5. 测试 (Vitest)

用于测试环境：

```bash
pnpm add -D typescript @types/jsdom jsdom
```

## 使用方法

在您的 `tsconfig.json` 中继承以下可用配置之一。

### 1. 基础配置 (Base Configuration)

基础配置，提供严格的类型检查和现代模块解析 (`bundler`)。

```json
{
  "extends": "@defchigga/tsconfig/tsconfig.json"
}
```

### 2. Node.js 环境

适用于 Node.js 脚本。

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

### 3. Web 应用 (Vue3 + Vite)

适用于标准的 Vue3 Web 应用程序。

```json
{
  "extends": "@defchigga/tsconfig/tsconfig.app.json",
  "include": ["env.d.ts", "src/**/*", "src/**/*.vue"],
  "exclude": ["src/**/__tests__/*"]
}
```

### 4. UniApp 项目

专为 UniApp 开发定制的配置，包含 `@dcloudio/types`、`@uni-helper` 和微信小程序类型定义。

```json
{
  "extends": "@defchigga/tsconfig/tsconfig.uni.json",
  "include": ["env.d.ts", "src/**/*", "src/**/*.vue"],
  "exclude": ["src/**/__tests__/*"]
}
```

### 5. 库开发 (Library Development)

适用于构建库文件。它开启了声明文件生成 (`declaration: true`) 并跳过库文件检查。

```json
{
  "extends": "@defchigga/tsconfig/tsconfig.lib.json",
  "include": ["src/**/*", "lib/**/*", "packages/**/*"]
}
```

### 6. Vitest 测试

适用于使用 Vitest 进行测试的环境。

```json
{
  "extends": "@defchigga/tsconfig/tsconfig.vitest.json",
  "include": ["src/**/__tests__/*", "env.d.ts"],
  "exclude": []
}
```

### 7. 根目录配置 (项目引用 / Project References)

如果您偏好使用 TypeScript 项目引用 (Project References) 来分离不同环境（如 app、node、测试）的配置，您的根目录 `tsconfig.json` 应如下所示：

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

## 特性

- **默认严格模式**: 强制进行严格的类型检查，以提高代码质量。
- **现代化**: 目标版本为 `ESNext`，使用 `moduleResolution: bundler`。
- **Vue 就绪**: 包含 Vue 3 和 Volar 所需的必要选项。
- **UniApp 支持**: 内置对 UniApp 类型定义的支持。

## 许可证

[MIT](./LICENSE)
