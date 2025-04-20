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
