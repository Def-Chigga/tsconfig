# @defchigga/tsconfig

[简体中文](./README.zh-CN.md) | English

Shared TypeScript configuration for Vue 3, UniApp, and general library development.

## Installation

```bash
pnpm add -D @defchigga/tsconfig typescript
# or
npm install -D @defchigga/tsconfig typescript
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

### 2. Web Application (Vue 3 + Vite)

For standard Vue 3 web applications.

```json
{
  "extends": "@defchigga/tsconfig/tsconfig.app.json",
  "include": ["src/**/*", "src/**/*.vue"],
  "exclude": ["src/**/__tests__/*"]
}
```

### 3. Node.js Environment

For Node.js scripts or configuration files (like `vite.config.ts`, `vitest.config.ts`).

```json
{
  "extends": "@defchigga/tsconfig/tsconfig.node.json",
  "include": ["vite.config.*", "vitest.config.*", "playwright.config.*"]
}
```

### 4. UniApp Project

Specialized configuration for UniApp development, including types for `@dcloudio/types`, `@uni-helper`, and WeChat Miniprogram.

```json
{
  "extends": "@defchigga/tsconfig/tsconfig.uni.json",
  "include": ["src/**/*", "src/**/*.vue"]
}
```

### 5. Library Development

For building libraries. It enables declaration file generation (`declaration: true`) and skips library checks.

```json
{
  "extends": "@defchigga/tsconfig/tsconfig.lib.json",
  "include": ["src/**/*"]
}
```

### 6. Vitest Testing

For testing with Vitest.

```json
{
  "extends": "@defchigga/tsconfig/tsconfig.vitest.json",
  "include": ["src/**/__tests__/*"]
}
```

### 7. Root Configuration (Project References)

If you prefer to separate configurations for different environments (e.g., app, node, test) using TypeScript Project References, your root `tsconfig.json` should look like this:

```json
{
  "files": [],
  "references": [
    { "path": "@defchigga/tsconfig/tsconfig.app.json" },
    { "path": "@defchigga/tsconfig/tsconfig.node.json" },
    { "path": "@defchigga/tsconfig/tsconfig.vitest.json" }
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
