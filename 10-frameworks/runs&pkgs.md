# Runtime and package managers

## [pnpm](https://pnpm.io/installation)

pnpm is a fast, disk space-efficient package manager for Node.js projects. It uses a content-addressable filesystem to store all files from all module installations in a single place on the disk, which saves space and speeds up installations. It is fully compatible with the npm registry.

```sh
brew install pnpm
```

## [Bun](https://bun.sh/)
`engine, package manager, transpiler and bundler`

It is an all-in-one JS runtime like Node.js and Deno but designed for speed and developer productivity. It includes a JS/TS engine, a bundler, a transpiler, and a package manager. Bun aims to be a fast runtime with native support for modern JS features and a built-in npm client.

#### Install
```sh
curl -fsSL https://bun.sh/install | bash
```

#### Usage

```sh
bun run <your-app>     # runtime
bun install <pkg>      # Package Manager
bun test <file>        # test
```

## [Deno](https://deno.com/)
`runtime`

Deno is a modern, secure JavaScript and TypeScript runtime built on V8, Rust, and Tokio. It supports TypeScript out of the box, emphasizes security with permission controls, and includes a standard library and built-in tooling such as a formatter, linter, and test runner. It was created by the original creator of Node.js to address some of Node’s design limitations.

```sh
brew install deno
```

### SWC compiler

SWC is a super-fast JavaScript/TypeScript compiler written in Rust. It is used to transpile TypeScript to JavaScript and optimize JavaScript code faster than the traditional TypeScript compiler (tsc). SWC supports minification, bundling, and tree shaking, making it popular in modern frontend tooling.

Install globally:
```sh
pnpm install -g @swc/cli @swc/core
```

or add to your project:
```sh
pnpm install --save-dev @swc/cli @swc/core
```

## Node.js

Node.js is the most widely used JavaScript runtime built on Chrome's V8 engine. It allows running JavaScript outside the browser and has a vast ecosystem of libraries and tools via npm. Node.js supports JavaScript and, with transpilers or compilers, TypeScript.

```sh
brew install node
```

using nvm (Node Version Manager) for multiple versions:
```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
nvm install node
```

| Feature / Tool | Language Support         | Installation Ease      | Performance        | Use Case       | Package                 | Security Model           |
|----------------|-------------------------|-------------------------|--------------------|---------------------|--------------------|--------------------------|
| **Deno**       | JS, TS, WASM            | Easy (curl, brew)       | Fast       | Secure apps, scripts, servers  | URL imports, no centralized registry | Permission-based sandboxing |
| **Bun**        | JS, TS                  | Easy (curl script)      | Very fast    | Full-stack, fast dev cycles | Built-in npm client | Less restrictive than Deno |
| **pnpm**       | N/A (package manager)   | Easy (npm install -g)   | Very fast          | Node.js dependency management    | npm registry       | N/A                      |
| **Node.js**    | JS, TS (via transpiler) | Easy (installer, nvm)   | Mature, good       | Backend, tooling, scripts        | npm registry     | No sandboxing            |
| **SWC**        | JS, TS                  | Easy (npm install)    | Extremely fast        | Compilation, bundling, minification | N/A             | N/A                      |
