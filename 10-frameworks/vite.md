# Vite JS

Next Gen Frontend Tooling. More modern and efficient than module bundlers.

## 1. Compare to a traditional module bundler

A traditional module bundler (webpack or parcel) will pack all the js files into a single file. This can lead to slower load times and increased bundle sizes. Everytime you have a change in your app, it will go through a packaging process, and it will get slow as your app grows.

Vite, on the other hand, uses a different approach that allows for faster load times and smaller bundle sizes. Vite uses a build-time optimization technique called "code splitting" to split the code into smaller chunks that can be loaded on demand.

On development, Vite does not rebundle every time you make a change. Instead, Vite takes advantage of native ES Modules. So Vite is a dev server and not a bundler. It is also a big improvement over `create react app`.

## 2. How to Use Vite

### 2.1 Creating

#### Create the app
```sh
pnpm create vite@latest [app-name]
```

#### Create from a template
```sh
pnpm create vite@latest [app-name] --template react
```

### follow questions

After entering the name of your app, you will be prompted to choose a `framework` and a `variant`. Choose the framework you want to use and the variant you want to use.

### Enter in your project

```sh
cd [app-name]  // go to the project folder
zed .          // open it with your editor
pnpm i         // install packages
```

## 3. Config

after creating the app, you can configure vite by editing the `vite.config.js` file. Here are some common configurations:

- `base`: The base URL for the app. Defaults to `/`.
- `publicDir`: The directory for static assets. Defaults to `public`.
- `build`: Configuration for the build process.
- `server`: Configuration for the dev server.

You can also install [plugins](https://vite.dev/plugins/) with vite and also community plugins on [awesome-vite](https://github.com/vitejs/awesome-vite#plugins).

## 4. Use .env

use the environment file for APIs

## 5. SASS

Can use sass out of the box without even reloading the page

## 6. Run for Production

```sh
pnpm run build
```

the first time. It build create a dist folder

### 6.1  Preview

```sh
vite preview
```

> It will open in your local host:xxx
