# Course 5: React Basics

# Mod 1. React Components

Every website's UI is built on a foundation of components and composability. Simple components combined into more complex ones, which eventually merge to form a website.

A website can essentially be viewed as a highly complex components.

There's a part of the reason why React is so popular, is because it streamlines the process of building and composing components. React does this efficiently and without a significant impact on your browser's resources.

State is simply all the values of all the variables your app is working with at any given point in time.

## 1.1 Course Intro

## 1.1.1 How is React used in the real world?

There are plenty of React based apps that you've probably used before. Facebook and Instagram are two examples. But Netflix, Airbnb, New York Times, and a variety of other companies also use React for their websites as well, so you've likely encountered it before.

Facebook.com had become really not performing and not modern looking after the 10 or so years that we have been using it, we had squeezed all of the performance wins that we could out of Facebook.com. Really the only option at that point was to rewrite it on a different stack that was going to be a lot faster and a lot easier to build on. Basically, there was a need for having a really fast and responsive UI and React fills all of those needs.

React is open sourced, meaning that anyone can contribute to it, and those engineers are working full-time on React. But we also have developers who aren't at Meta who are also contributing to React, and that means that there's a really strong community around React.

### 1.1.2 Additional reading

Below you will find links to helpful additional readings.

1. [Node JS](nodejs.org) is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.
2. [NPM js](npmjs.com)
3. [common errors](https://docs.npmjs.com/common-errors) on npmjs
4. [reactjs](reactjs.org)
5. [create react app](https://create-react-app.dev/) (depricated)

## 1.2 functional components

A React component acts much like a traditional JavaScript function.

React provides two types of components, functional components and class components.

Functional components are simpler and easier to write, but they don't have access to lifecycle methods or state. Class components are more complex, but they have access to lifecycle methods and state.

In the default React application, only one component is rendered and it's the app components located inside the index.js file that's located inside the source folder.

### 1.2.1 At least one component
Every React app must contain at least one component, and it's called the root components.

```js
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.js'  // Import root component

ReactDOM.createRoot(
  document.querySelector('#root')
).render(<App />);      // Render root component
```

The roots components can contain other components that developers create to represent the various UI part of the application. Like in the e-commerce example that you learned about earlier.

### 1.2.2 the App Component

The app component (`app.js`) looks very similar to a JavaScript function with some HTML code inside. You may also notice an export default statement, it's needed to make your components available.

#### app.js
```js
function App() {
  return (
    <div className='App'>
      <h1>Hello React.</h1>
    </div>
  );
};
export default App;
```

### 1.2.3 JSX

React is scripted using a special syntax called JavaScript XML or `JSX`. For many Reacts developers, this is known as a syntax extension to JavaScript.

Recall that in the return statements of the `app.js`, it seemed that some HTML content is returned, but it's JSX.

What are its advantages is that it allows you to write JavaScript code inside what looks like HTML elements.

JSX as a combination of custom HTML and JavaScript. This allows you to make your website dynamic. You can place this syntax inside the return statement of a functional component.

React component won't render until it's used as a JSX element, just like a JavaScript function declaration and won't run until it's called or invoked.

## 1.3 React Component

### 1.3.1 Introduction

1. Create the component, which is basically just a JavaScript file, since its purpose is to return some heading text, you name the file `Heading.js`, due to all component names in React must be capitalized, because React treats lowercase components as regular HTML elements.
1. Inside `app.js` create a function named Heading (`function Heading()`).
1. Create a variable named title and assign it the string value of this is some heading text.
1. Create the return statement of the function.

```app.js
function Heading() {
  let title = "This is some heading text";
  return (
    <h1>{title}</h1>
  );
};
```

This rendering happens behind the scenes because of something called **transpiling**. You can think of transpiling as a process of converting JSX to HTML

### 1.3.2 Creating a Component from Scratch

On the terminal to create a new react app
```sh
npm init react-app .
```

```jsx
import React from 'react';

function Heading() {
  let title = "This is some heading text";
  return (
    <h1>{title}</h1>
  );
};

export default Heading;
```

## 1.4 Transpiling JSX

This part is about how a component is built.

Components are a nice way to build websites in React because they allow you to build more modular apps.

### 1.4.1 A browser cannot understand JSX

Meaning that a browser cannot understand React code requires a lot of technologies.

An example of such a technology is a transpiler, which takes a piece of code and transforms it into some other code.

#### 1.4.2 JS Compiler

One of the most popular site that shows off how this works is
[Babel](https://babeljs.io/). As the heading of the website reads, *"Babel is a JavaScript Compiler"*. Babel allows you to transpile `JSX` code into plain `JS` code.

Babel REPL is an online tool where you can paste JSX code on the left side, and it instantly shows the converted JavaScript on the right side.

#### 1.4.3 How does the transformation work?

##### For example

###### If you write this JSX

```jsx
<h1>Hello, world!</h1>
```

###### Babel turns it into
```js
React.createElement("h1", null, "Hello, world!");
```

1. The first argument is the element type (“h1”).
1.	The second argument is for attributes or props (here, `null` means there are none).
1.	The third argument is the content inside the element (“Hello, world!”)

##### Explain

For a component, like:
```jsx
<Heading title="This is the heading text!" />
```
Babel converts it to:
```js
React.createElement(Heading, { title: "This is the heading text!" });
```

1. 	The first argument is the component (`Heading`).
2. The second is an object with props (`{ title: ... }`).
3. There’s no third argument here because the content is passed as a prop.

#### 1.4.4 In summary

JSX makes writing UI code easier, but it must be converted by Babel into JavaScript using `React.createElement` calls. The Babel REPL lets you see this transformation in real time.

## 1.5 The React Project structure

When you build a React app using the command npm init React app, your project is comprised of a specific file and folder structure.

- There are three folders named:

1. `node_modules`
1. `public`
1. `src`

### 1.5.1 node_modules

It is automatically added when you install a specific npm package.

Developers use packages when they want to add a piece of functionality that someone else coded and made available to other developers via the npm ecosystem.

### 1.5.2 public

This folder contains the static files that are served by the web server.

For example, `image files` for logos, the `favicon`, which displays an icon in the browser tab, and the `robots.txt` file, which is used for search engine optimization.

Also, there is a `manifest.json` file, which is used to provide some metadata to a device when you're React powered web app is installed on it.

The most important one to know about for now is `index.html`. A React app gets injected into the specific elements inside the body of the `index.html` file. Based on changes happening inside our React app, it injects those updates in that same `div` of `index.html`.

### 1.5.3 src

This folder contains all the essential component files required to ensure that a React app functions. there are some files already in this folder. These were automatically created when I use the npm command Create React app to build a starter React app.

As a React developer, you probably spend most of your time within this folder.

1. `App.css` contains the styles for the `App.js` components
1. `index.css` file contains the styles to use in the entire app.
1. `App.test.js`, `setupTests.js`, and the `reportsWebVitals.js` are files related to the app's performance and testing.
1. The `logo.svg` file is displayed on the start page of the default app when the app is displayed in the browser on the local host.

### 1.5.4 .gitignore

`.gitignore` is a file that tells git which files to ignore when committing changes to the repository. It is used to exclude files that are not relevant to the project, such as build artifacts, temporary files, and configuration files.

### 1.5.5 package.json

`package.json` is a file that contains metadata about the project, such as its name, version, and dependencies. It is used to manage the project's dependencies and scripts.

### 1.5.6 package-lock.json

`package-lock.json` is a file that contains the exact versions of the dependencies installed in the project. It is used to ensure that the same versions of the dependencies are installed on different machines.

## 1.6 Customizing the project

### 1.6.1 Organizing Your Code

Keeping in mind the above structure, how would you organize your code?

This is where [React docs](https://handsonreact.com/docs/code-organization-conventions) can help. They suggest two approaches:

1. Grouping by features
1. Grouping by file type

They also advise not to nest folders too deep, and to keep things simple and not overthink it.

They even say that if you're just starting out, you shouldn't spend more than five minutes setting up a project.

### 1.6.2 Building The App

> [!warning]
> `npm init react-app` is depricated, use vite or other frameworks.

#### Start a react project

with [vite](https://vite.dev/guide/), it is a build tool that aims to provide a faster and leaner development experience for modern web projects.
```sh
npm create vite@latest [project name]
```

#### Install dependencies

npm install vite --save-dev

#### Run dev server

Live development with hot reload
`npm run dev`

#### Open your site

Open the web on your browser: `http://localhost:xxxx/`

#### Stop the server

In your terminal where the Vite dev server is running, press `Ctrl + C`. This will immediately stop the server process and free up the port for future use.

#### Components folder

Add a components folder and components for each of the sections of the typography-focused blog. Adding the Nav component, the Promo component, the Intro1, Intro2, and the Intro3 component. Finally, there's also a Footer.js component.
```sh
src/
  components/
    Nav.js
    Promo.js
    Intro1.js
    Intro2.js
    Intro3.js
    Footer.js
  App.js
  App.test.js
  index.css
  index.js
  logo.svg
  reportWebVitals.js
  setupTests.js
```

#### Building Components

Let’s just build those components.

#### Discussing the Syntax

Why use the `className` attribute in the JSX syntax? Well, with JSX, it looks like HTML so much that it's easy to forget that it's actually JavaScript code - not HTML.

While regular HTML does indeed have a `class` attribute, which is used to list one or more CSS classes to be used on a given HTML element, this cannot really work in JSX. The reason is that JSX is a special kind of JavaScript syntax, and the word `class` is a reserved keyword in JSX. That's why the React team had to make a compromise and so `className` is used in JSX to list one or more CSS classes to be used on a given element or component.

## 1.7 Importing components

One of the advantages of component-based architecture is that your app is split up into individual self-contained components.

### 1.7.1 Importing components

In order to create a fully functioning React app, you need to create a collection of components. You often need a way to use and reuse components that may have been defined elsewhere or created by someone else. Modules are standalone units of code that you can reuse again and again.

Being standalone means that you can add them to your programs, remove them, and replace them with other modules and everything will still work. In React, you can make use of this JavaScript feature to separate your components by placing them in their own file

### 1.7.2 export

The `export` statement is used to make a module available to another module. In JavaScript, there are two types of exports, **default exports** and **named exports**.

1. Default export is used when the function name is the same as the file name
2. Named exports are used when you want the function name to be different from the file name.

### 1.7.3 Components vs Modules

Modules and components, since they are both essentially just JavaScript files.

1. A **component** as a single part or small piece of functionality like a button.
1. A **module** is larger than one component like a series of components.

This technique of splitting your code into several modules is known as **modular programming**, and it complements the component-based architecture of React.

### 1.7.4 Import

To use components created by others in your React app, you import them using ES6 `import` statements. This allows you to modularize your code and reuse components across files. For example, to import a default export:
```js
import MyComponent from './components/MyComponent';
```

For named exports, use curly braces:
```js
import { MyNamedComponent, AnotherComponent } from './components/component.js';
```

This approach helps keep your codebase organized and maintainable.

To import a component, you use `import`, followed by the component name you want to import. Then you use `from`, to specify the location of where the component is located.
```js
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App'; // import component

ReactDOM.createRoot(
  document.querySelector('#root')
).render(<App />)
```

### 1.7.5 Construct components in React

One approach is to place all components in a folder named `components`. This allows you to structure your projects by grouping similar files together.

For example, suppose you are building a payment page for an e-commerce app. The page contains three sections that will each be represented by a component in React.

1. A Header section using a component called header
1. A Payment section using a component called main
1. A Sidebar using a component called sidebar.

Each components will be called and have it's contents returned to the root components of our application, which is app.js.

#### STEPS

##### Create a component

Add a file like `Heading.js`
```js
function Heading() {
  return (
    <h1>This is an h1 heading</h1>
  )
}

export default Heading;
```

###### Import the component

```js
import Heading from "./Heading";

<!-- ... -->
```

## 1.8 Principles of components: Props

In JavaScript, you can make your functions more flexible by declaring them with parameters that allow you to pass in values as arguments when you call the function. In React you can perform a similar action using something called properties (`prop`).

In JS we have objects, which is variable that can contain many values. You use objects when you need to store groups of related data of different types. Each data type is known as an object property. For example, an object called `fruits` may contain properties for `type`, `quantity`, and `color`. These properties consist of name-value pairs, and you can access the object's properties using dot notation.

In React, you can use a similar technique to pass data from one component to another using the properties object or simply `props`. It allows you to pass data from one component to another. It's helpful to think of props as arguments a component can accept and are passed using JSX syntax, much like HTML attributes.

### 1.8.1 How to apply

In the Index.js
```js
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.js';

ReactDOM.createRoot(
  document.querySelector('#root')
).render(<App title="Welcome" />)
```
In the root component, index.js, you send the value you want to pass to the app component as an argument in the form of an HTML attribute.

Next, in the app component, you accept this argument using the props object.
```js
import React from 'react';

// add props to the function declaration inside of the parentheses.
export function App(props){
  return (
    // To access this object's properties, you use dots notation to reference the name of the object property that was passed as an argument by the HTML attribute.
    <h1>{props.title}</h1>
    // Remember to enclose your code inside curly brackets so React knows that you want to work with the props object and not static text.
  )
}
```

`Props` can accept many data types ranging from simple types such as strings and integers to more complex types such as functions, arrays, and objects. Allowing developers to have greater flexibility when creating and working with components, especially when you want the flow of data in your app to be dynamic.

### 1.8.2 Parent and child

When two components communicate with each other, the component sending the props data is known as the **parent**, and the component receiving the props data is known as the **child**.

This **parent-child** relationship allows parent components of past data down to child components using props. It's also possible for **parent components** to send the same data to multiple **child components**.

### 1.8.3 Limitations

Props have some limitations.

1. It's not possible to send data from the child component back to the parent component using props.
2. Props are read-only, when you declare a component using props, it must never modify its own props.

## 1.9 Dissecting props

JSX code in React is just *syntactic sugar* - meaning, a nicer way to write some hard-to-read code. For the browser to understand this *syntactic sugar*, you need to transpile JSX down to plain JS code. You have a resource online, at the URL of
[babeljs](https://babeljs.io/), which allows you to inspect the results of this transpiling.

### Example 1: a basic one
A component that returns a piece of JSX:
```jsx
function App() {
  return <h1>Hello there</h1>
}
```

After transpiling this JSX syntactic sugar code down to plain JavaScript code, you’d get back some unusual code:
```js
"use strict";
function App() {
    return /*#__PURE__*/React.createElement("h1", null, "Hello there");
}
```
Focusig on ` React.createElement("h1", null, "Hello there");` above, means that the `createElement` function receives three arguments:

1. The wrapping element to render.
2. A null value (to show an absence of an expected JS object value).
3. The inner content that will go inside the wrapping element.

### Example 2: a more complex one

```jsx
function App() {
  return (
    <div>
      <h1>Hello there</h1>
    </div>
  )
}
```

The transpiled return statement in plain JavaScript again returns two createElement functions:
```js
"use strict";
function App() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Hello there"));
}
```

If you format this output, remove the "use strict" line, and remove the __PURE__ comments, you get a more readable output:
```js
function App() {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Hello there"));
}
```
#### `React.createElement`

So now the third argument of the outer-most `React.createElement` call is another `React.createElement` call. This is how you can *nest* as many elements as you want.

#### The second argument – `null`

The second argument of null can – in this case – be replaced with an empty object. In that case, your code would contain a pair of curly braces instead of the word null:
```js
"use strict";

function App() {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Hello there")
  );
}
```

This object is referred to as the props object. It is the main mechanism of sending data from a parent component to a child component in React. The way this works is described in React docs using the following code:
```js
React.createElement(
  type,
  [props],
  [...children]
)
```

#### The third argument (...children)

This is the inner content that will go inside the wrapping element. It's what makes it possible to nest elements inside other elements, mimicking the way that HTML works.

## 1.9 Using props in components

You learned how to build a simple blog layout in react using components. Now you'll be introduced to the Nav component. Developers commonly build navigation menus using html on ordered lists. A navigation menu is basically just a list which can be styled easily with CSS, such a snippet of code is well suited to be placed in its own react component. Making use of the HTLM Nav elements to act as the block of code to return the JSX from it inside the function.

I'm in my app with the `<Header />`, `<Main />`, and `<Sidebar />` components and all of them are rendered from the app component.
The app component is in this case referred to as the parent component and the `<Header />`, `<Main />`, and `<Sidebar />` components are referred to as the Children of the `App` component.

### App.js
```js
function App(){
  return (
    <div>
      <Header name="Anna" color="purple" />
      <Main greet="Howdy"/>
      <Sidebar/>
    </div>
  )
}
```

### Header.js

```js
import React from 'react';

function Header(props){ // receive the props object
    console.log(props) // {name: 'Anna', color: 'purple'}
  return <h1>Hello there, {props.name}, {props.color}</h1>
}
export default Header;
```

### Main.js

```js
import React from 'react';

function Main(props){
    console.log(props) // {greet: 'Howdy'}
  return <h1>{props.greet} Hello from Main</h1>
}
export default Main;
```

### Sidebar.js

```js
import React from 'react';

function Sidebar(props){
  return <h2>{props.greet} from Sidebar</h2>
}
export default Sidebar;
```

### Conclusion

All my components are now using the data they received from their parent components using their respective props objects. The props object can be defined as a parameter within a function component.
