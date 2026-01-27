# @defchigga/tsconfig

简体中文 | [English](./README.md)

适用于 Vue 3、UniApp 以及通用库开发的 TypeScript 共享配置。

## 安装

```bash
pnpm add -D @defchigga/tsconfig typescript
# 或者
npm install -D @defchigga/tsconfig typescript
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

适用于 Node.js 脚本或配置文件（如 `vite.config.ts`, `vitest.config.ts`）。

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

### 3. Web 应用 (Vue 3 + Vite)

适用于标准的 Vue 3 Web 应用程序。

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
  "include": ["src/**/*"]
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
