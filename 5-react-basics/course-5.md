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


## 1.10 Introducing JSX

What is it that makes JSX so special? In one word, expressiveness. Developers can express what they want to react to render using a very expressive syntax, almost identical to HTML or XML. For example, you can add navigation function to a website by creating a nav component. Then place the HTML semantic nav element, and an unordered list inside. Because this is React, the list values can be made dynamic by passing values as props.

This is what makes JSX so powerful, like the fact that you can insert specific JSX expressions such as variables and props. Anything that's placed inside the curly braces of the code is essentially regular JavaScript code.

Because is aJS file you cannot use the keyword `class` to work with CSS classes in your HTML elements. you must use a slightly different keyword called `className` instead.

## 1.11 Props and children

To understand the concept of `props.children`, consider the following real-life situation: you have a couple of apples, and you have a couple of pears. You'd like to carry the apples some distance, so obviously, you'll use a bag. It's not a "bag for apples", and it's not a "bag for pears." It's just a bag.
```jsx
function Apples(props) {
  return (
    <div className="promo-section">
        <div>
            <h2>These apples are: {props.color}</h2>
            </div>
            <div>
            <h3>There are {props.number} apples.</h3>
        </div>
    </div>
  )
}
export default Apples
```

There is also a Pears component:
```jsx
function Pears(props) {
  return (
    <h2>I don't like pears, but my friend, {props.friend}, does</h2>
  )
}
```

### 1.10.1 The Bag

You want a `Bag` component, which can be used to "carry" Apples or Pears. How would you do that? This is where `props.children` comes in. You can define a `Bag` component as follows:
```jsx
function Bag(props) {
    const bag = {
        padding: "20px",
        border: "1px solid gray",
        background: "#fff",
        margin: "20px 0"
    }
    return (
        <div style={bag}>
            {props.children}
        </div>
    )
}
export default Bag
```

the Bag component is: it adds a wrapping div with a specific styling, and then gives it props.children as its content.

### 1.10.1 What is this props.children?

Consider a very simple example:
```jsx
<Example>
    Hello there
</Example>
```

The `Hello there` text is a child of the Example JSX element. The Example JSX Element above is an "invocation" of the `Example.js` file, which, in modern React, is usually a function component.

This `Hello there` text can be passed as a **named prop** when rendering the `Example` component.
```jsx
<Example children="Hello there" />
```

In JSX, to surround the Hello there text in an h3 HTML element
```jsx
<Example children={<h3>Hello there</h3>} />
```

What if the `<h3>Hello there</h3`> was a separate component, for example, named `Hello`? In that case, you'd have to update the code like this:
```jsx
<Example children={<Hello />} />
```

You could even make the `Hello` component more dynamic, by giving it its own prop:
```jsx
<Example children={<Hello message="Hello there" />} />
```

how can you make the `Bag`, `Apples`, and `Pears` examples from the beginning of this reading work? Here's how you'd render the `Bag` component with the `Apples` component as its `props.children`:
```jsx
<Bag children={<Apples color="yellow" number="5" />} />
```

And here's how you'd render the Bag component, wrapping the Pears component:
```jsx
<Bag children={<Pears friend="Peter" />} />
```

While the above syntax might look strange, it's important to understand what is happening. Effectively, the above syntax is the same as the two examples below.
```jsx
<Bag>
    <Apples color="yellow" number="5" />
</Bag>

<Bag>
    <Pears friend="Peter" />
</Bag>
```

You can even have multiple levels of nested JSX elements, or a single JSX element having multiple children, such as, for example:
```jsx
<Trunk>
    <Bag>
        <Apples color="yellow" number="5" />
        <Pears friend="Peter" />
    </Bag>
</Trunk>
```
So, in the above structure, there's a Trunk JSX element, inside of which is a single Bag JSX element, holding an Apples and a Pears JSX element.

Another important concept that you need to be aware of: finding the right amount of modularization.

## 1.11 Styling JSX elements

There are various ways to style JSX elements.

### 1.11.1 The simple way – `link`

Probably the simplest way to do this is using the `link` HTML element in the head of the `index.html` file in which your React app will mount.

The `href` attribute loads some CSS styles, probably with some CSS classes, and then, inside the function component's declarations, you can access those CSS classes using the `className` attribute.

```jsx
function Promo(props) {
    return (
        <div className="promo-section">
            <div>
                <h1>{props.heading}</h1>
            </div>
            <div>
                <h2>{props.promoSubHeading}</h2>
            </div>
        </div>
    );
}
```

The CSS file:
```css
.promo-section {
    font-weight: bold;
    line-height: 20px;
}
```

### 1.11.2 Second way – inline styles

You can start updating the `Promo` component by adding the JavaScript expression syntax:
```jsx
<h1 style={}>
```

This means that whatever code you add inside these opening and closing curly braces is to be parsed as regular JavaScript. Now let’s add a **style object literal** inside of these curly braces:
```jsx
<h1 style={{color:"tomato",fontSize:"40px"}}>
```

Full code:
```jsx
function Promo(props) {
    return (
        <div className="promo-section">
            <div>
                <h1 style={{color:"tomato", fontSize:"40px"}}>
                    {props.heading}
                </h1>
            </div>
        </div>
    );
}

export default Promo;
```

### 1.11.3 The Third way – using variables

you can also save it in a variable, and then use that variable instead of passing an object literal.
```jsx
function Promo(props) {
    const styles = {
        color: "tomato",
        fontSize: "40px"
    }

    return (
        <div>
            <h2 style={styles}>{props.promoSubHeading}</h2>
        </div>
    );
}
```

## 1.12 Practical styling

How to take CSS style rules from an external file named index.CSS and add it inside a component as an internal style.

### 1.12.1 Move the .css into .js file

You want a styling from the `style.css`

#### 1. move the `aside{}` part of the .css file to `sidebar.js`
```css
aside {
  background: azure;
  margin-left: 5px;
}
```

#### 2. After move, you need to add a `const` to `aside`
#### 3. Replace the `;` at the ned of each line with `,`
#### 4. Replace the hyphenated names like `-` with camelCase (margin-left -> marginLeft)
#### 5. Add `" "` to the declarations
#### 6. Inside the a site tag, add a style: `style={asideStyle}`

```jsx
function Sidebar(){}
  const asideStyle = {
    background: "azure",
    marginLeft: "5px"
  }

  return (
    <aside style={asideStyle}
      className="sidebar-component">
      <h2>Sidebar content here</h2>
    </aside>
  )
}

export default styles;
```

## 1.13 JSX syntax and the arrow function

Here are some alternative approaches, specifically by using function expressions and arrow functions.

### 1.13.1 Function Expressions

Let’s start with a function declaration used as a component in React:
```jsx
function Nav(props) {
    return (
        <ul>
            <li>{props.first}</li>
        </ul>
    )
}
```

This component's code returns a list item containing the value of the `first` prop. Now, let's change this function declaration to a function expression:

```jsx
const Nav = function(props){
  return (
    <ul>
      <li>{props.first}</li>
    </ul>
  )
}
```

The only thing that's changed is that you’re now using an anonymous (nameless) function, and assigning this anonymous function declaration to a variable `const`, and the name `Nav`.

### 1.13.2 Components as Arrow Functions

Arrow functions are a core feature of the `ES6` version of JavaScript. One of the main benefits of using arrow functions is its **shorter syntax**.

#### first way to write – full

```jsx
const Nav = (props) => {
  return (
    <ul>
      <li>{props.first}</li>
    </ul>
  )
}
```

- The arrow itself can be thought of as the replacement for the function keyword.
- The parameters that this arrow function accepts are listed before the arrow itself.
`const example = function() {}` -- converted to -> `const example = () => {}`

#### first way to write – without parentheses

Another important rule regarding arrow functions is that using the parentheses is optional if there's a single parameter that a function accepts:

```jsx
const Nav = props => {
 ...
}
```

#### first way to write – one line

Another interesting thing about arrow functions is the implicit return. It only works if it's on the same line of code as the arrow itself.

```jsx
const Nav = () => <ul><li>Home</li></ul>
```

### 1.13.3 Using Arrow Functions in Other Situations

In React, arrow functions can be used in many different situations. For example, the `forEach()` built-in array method.

ES5 syntax:
```jsx
[10, 20, 30].forEach(function(item) {
        return item * 10
    }
)
```

The arrow way (ES6 syntax):
```jsx
[10, 20, 30].forEach(item => item *10)  // 100, 200, 300
```

The `forEach()` method accepts a single parameter: **an anonymous function**. If you write this anonymous function in ES5 syntax, then it would contain a return statement:
```jsx
function(item) {
    return item * 10
}
```

ES6 function instead:
```jsx
item => item * 10
```

## 1.14 Embedded JSX expressions

Embedded expressions allow developers:

1. to insert the values of JavaScript variables into the HTML of the resulting React elements.
2. to embed the outputs of functions.

### Example 1 – names
```jsx
function formatName(firstName, surname){
  return firstName + ' ' + surname;
}
```

### Example 2 – profile picture

Expressions can also be used for HTML attributes. This is useful if you need to insert the address of a person's profile picture

```jsx
const url = "photo.png";

const result = <img src={url}></img>
```

> [!note]
> The double-quotes are not needed for the attribute value as JSX will automatically add these.

This is just one example of how JSX is an efficient way of outputting HTML elements that contain JavaScript variable content

## 1.15 Ternary operators and functions in JSX

become familiar with how to use ternary expressions to achieve a random return, as well as how to invoke functions inside of JSX expressions.

### 1.15.1 A different way of writing an if...else conditional

```jsx
name == Bob ? "Yes, it is Bob" : "I don't know this person";
```

This, in essence, is how the ternary operator works. It's just some shorthand syntax that I can use as a replacement for the `if` statement. To prove that this is really the case, here's my starting if...else example, written as a ternary operator:
```jsx
let name = 'Bob';
name == 'Bob' ? console.log('Hello, Bob') : console.log('Hello, Friend');
```

### 1.15.2 Using ternary expressions in JSX

Let’s examine an example of a component which uses a ternary expression to **randomly** change the text that is displayed.

```jsx
function Example() {
    return (
        <div className="heading">
            <h1>{Math.random() >= 0.5 ? "Over 0.5" : "Under 0.5"}</h1>
        </div>
    );
};
```

This is how you can use a ternary expression to check for a condition right inside a component and return a value dynamically.

### 1.15.3 Using function calls in JSX

Another way to work with an expression in JSX is to invoke a function. Function invocation is an expression because every expression returns a value, and function invocation will always return a value, even when that return value is `undefined`.
```jsx
function Example2() {
    return (
        <div className="heading">
            <h1>Here's a random number from 1 to 10:
                { Math.floor(Math.random() * 10) + 1 }
            </h1>
        </div>
    );
};
```

You can also extract this functionality into a separate function:
```jsx
function Example3() {

    const getRandomNum = () => Math.floor(Math.random() * 10) + 1

    return (
        <div className="heading">
            <h1>Here's a random number from 1 to 10: { getRandomNum() }</h1>
        </div>
    );
};
```

#### 1.15.3.1 function declaration

The `getRandomNum()` function can also be written as a function declaration, or as a function expression. It does not have to be an arrow function.

```jsx
// Function expression
// (cannot call before definition. Not hoisted, Can be anonymous, can be passed as arguments or returned from functions)
const getRandomNumExpression = function() {
    return Math.floor(Math.random() * 10) + 1;
}

// Function declaration
// (cannot call before definition. Not hoisted, Always named, available in the scope)
function getRandomNumDeclaration() {
    return Math.floor(Math.random() * 10) + 1;
}

console.log(getRandomNumExpression()); // works only after definition
```

**Function declarations** are automatically moved (hoisted) to the top of their scope during the compilation phase. So you can call a function declared with the `function` keyword **even before** its actual definition appears in the code. In contrast, **function expressions** are not hoisted the same way. Trying to call a function expression before its definition will result in an error.

## 1.16 Expressions as props

Expressions as props can be, among other things, ternary operators, function calls, or some arithmetic operations.

```jsx
const bool = false;

function Example(props) {
    return (

        <h2>The value of the toggleBoolean prop is: {props.toggleBoolean.toString()}
        // `.toString()` converting its boolean value to a string
        </h2>
    );
};

export default function App() {
    return (
        <div className="App">
            <Example toggleBoolean={!bool} />
        </div>
    );
};
```

Here’s an extension of the above code which shows more ways to work with expressions as props in React. Here is several props are being passed to the `Example` component, and rendering each of these props’ values to the screen.
```jsx
const bool = false;
const str1 = "just";

function Example(props) {
    return (
        <div>
            <h2>
                The value of the toggleBoolean prop is:{props.toggleBoolean.toString()}
            </h2>
            <p>The value of the math prop is: <em>{props.math}</em></p>
            <p>The value of the str prop is: <em>{props.str}</em></p>
        </div>
    );
};

export default function App() {
    return (
        <div className="App">
            <Example
                toggleBoolean={!bool}
                math={(10 + 20) / 3}
                str={str1 + ' another ' + 'string'}
            />
        </div>
    );
};
```
The `Example` component, three props are being passed to it:

1. The `toggleBoolean`
1. the `math` prop – you can add arithmetic operators and numbers inside JSX, and it will be evaluated just like it does in plain JavaScript.
1. the `str` prop – you can concatenate strings, as well as strings and variables

## 1.17 Embedding in attributes

how to embed a JS expression in an attribute, including adding additional styling and importing additional assets and utilize additional assets within an app by importing components.

In order to use the image I need to import it into the app component. I then add a new function in the App.js file named logo.
```jsx
import avatar from './avatar.png'

function Logo(props) {
  // The logo function accepts the props object and inside of the logo function I declare a userPic const and assign it a JSX element.
  const userPic = <img src={avatar} />;
  return userPic;
}

function App(){
  return (
    <div>
      <h1>Hello world</h1>
      <Logo /> //display the avatar using the Logo func
    </div>
  );
}
export default App;
```

# 2. Data and State

## 2.1 Dynamic Events

### 2.1.1 Types of Events

**Events** are the process by which JavaScript interacts with HTML and can occur when the user or the browser manipulates a page.

Because events usually rely on some interaction, they need to *wait and listen* in the background for that interaction to occur before they can be triggered.

You might want to *listen* for a click event on an Add to Cart button. Once you capture such an event, you might want to run some js code.

```js
<button onclick="addCart()">Add to cart</button>
```

#### html vs react's JSX

In React code, events are handled using JSX event attributes. In React events are handle a bit different. On html is lower case `onclick=""`, while on JSX is camelCase `onClick=""`

#### JSX Mouse Events

```jsx
onClick
onContextMenu
onDoubleClick
onDrag
onDrop
onDragEnd
onDrop
onMouseDown
onMouseEnter
onMouseLeave
onMouseOver
...
```

#### JSX Clipboard Events

```jsx
onCopy
onCut
onPaste
```

### 2.1.2 Eventful Issues

The JavaScript language comes with a built-in error handling syntax, the try...catch syntax.

To handle this TypeError, you can update the code with a try...catch block that instructs the code to continue running after the error is encountered:

On JS
```js
try {
    (5).toUpperCase();
}
catch(e) {
    console.log(`Oops, you can't uppercase a number.
        Trying to do it resulted in the following`, e);

}
```

On React, an error in the code, such as the one above, will result in the error overlay showing in the app in the browser.
```jsx
function NumBillboard(props) {
 return (
   <>
     <h1>{prop.num}</h1>
   </>
 )
}
export default NumBillboard;
```

Since event-handling errors occur after the UI has already been rendered, all you have to do is use the error-handling mechanism that already exists in JavaScript – that is, you just use the try...catch blocks.

Contrary to plain js, you cannot invoke an event-handling function to handle an event such as the onClick. That’s one of the differences between JSX and plain JavaScript syntax.

### 2.1.3 Common event handling

Everytime you mouse over on the button will console.log "mouse over"
```jsx
function Brn(){
  const clickHandler =
    () => console.log('mouse over')
  return (
    <button onMouseOver={clickHandler}>
      Click me
    </button>
  )
}
```

### 2.1.4 Syntax for handlers

Every time you click or tap a button, scroll down the page, etc, you need to use **event handlers** that will then execute an action.

For example, suppose you use a button to open a menu.

1. Clicking the button is the **event**.
2. The **event handler** is on click.
3. The **action** that follows the event is opening the menu.

The equivalent code in JavaScript consists of two primary steps:
1. First, you should use JavaScript to plug into these specific HTML element on what you'd like to listen to for an event.
2. once you've got an access to an HTML elements with JavaScript, you can then use the built-in add EventListener method on the document object to attach a specific event listener.

When you apply this method to the previous example, HTML is removed from the equation, but the code on the other hand, is a bit more complicated.
```js
const jsBtn = document.getElementById('js-btn')
jsBtn.addEventListener('click', function() {
  console.log('clicked')
})
```

#### On React

The biggest difference in syntax involves the use of the `addEventListener` method. Avoiding manipulating the DOM directly as much as possible. You should set everything up declaratively (describe updates to React and let it figure out the rest).

This is best done using event attribute, unfortunately, one-to-one mapping between HTML event attributes and JSX event attributes means it's easier to learn.

Event handling in React is overall quite similar to HTML. But note that there is no function invocation syntax in event handling attribute in React. In other words, while in plain JavaScript, you would need to pass an invocation to an event handling function as a value to the on click events. In React, you should not invoke a function. Instead, you just pass a reference to the event handling function without invoking it. Here is an example:

On html:
```html
<button id="js-btn" onclick="clickHandler()">
  Click me!
</button>
```

On React
```jsx
<button onClick={clickHandler}>
  Click me!
</button>
```
### 2.1.5 Event handling and embedded expressions

#### Handling events using inline anonymous ES5 functions

This approach allows you to directly pass in an ES5 function declaration as the` onClick` event-handling attribute’s value:
```js
<button onClick={function() {console.log('first example')}}>
    An inline anonymous ES5 function event handler
</button>
```

> [!caution]
> It's **not** a common approach and you will not find such code very often in React apps.

#### Handling events using inline anonymous ES6 functions (arrow functions)

You can directly pass in an ES6 function declaration as the `onClick` event-handling attribute’s value:
```js
<button onClick={() => console.log('second example')}>
    An inline anonymous ES6 function event handler
</button>
```
#### Handling events using separate function declarations

You declare a separate ES5 function declaration, and then you reference its name in the event-handling onClick attribute, as follows:
```js
function App() {
  function thirdExample() {
    console.log('third example');
  };
  return (
   <div className="thirdExample">
      <button onClick={thirdExample}>
        using a separate function declaration
      </button>
    </div>
  );
};
export default App;
```

This syntax makes sense to be used when your onClick logic is too complex to easily fit into an anonymous function (although this example is not that complex).

#### Handling events using separate function expressions

> [!tip] function expression vs function declaration
> An **function expression** do not start with `function`.

You’re then using this const variable’s name to handle the onClick event, so this is an example of handling events using a separate function expression.

```js
function App() {
 const fourthExample = () => console.log('fourth example');

  return (
    <div className="fourthExample">
      <button onClick={fourthExample}>
        using a separate function expression
      </button>
    </div>
  );
};
export default App;
```

The syntax in this example is very common in React. It uses arrow functions, but also allows us to handle situations where our separate function expression spans multiple lines of code.

### 2.1.6 User events

Let's say that you have a component that uses state to keep a Boolean value of dark mode on. Based on whether the value of this variable is true or false, your component will render, either as a dark theme or as a light theme. Additionally, it's possible to switch the theme with a button click.

#### ModeToogler.js
```jsx
function ModeToggler(){
  const darkMode = true;
  const darkMode = <h1>Dark Mode is On</h1>
  const lightMode = <h1>Light Mode is On</h1>

  return (
    <div>
      {darkModeOn ? 'Dark Mode' : 'Light Mode'} // <h1>Dark Mode is On</h1>
    </div>
  )
}
export default ModeToggler
```

#### Implement the dark mode toggle

```js
function ModeToggler(){
  let darkMode = true;
  const darkMode = <h1>Dark Mode is On</h1>
  const lightMode = <h1>Light Mode is On</h1>

  function handleClick(){
    darkModeOn = !darkModeOn;
    darkModeOn == true ? console.log("Dark Mode is on") : console.log("Light Mode is on");
  }
  return (
    <div>
      {darkModeOn ? 'Dark Mode' : 'Light Mode'} // <h1>Dark Mode is On</h1>
    </div>
  )
}
export default ModeToggler
```

### 2.1.7 Dynamic events

```jsx
function App() {

  function handleClick() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    let userInput = prompt('type a number');
    alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
  }

  return (
    <div>
      <h1>Task: Add a button and handle a click event</h1>
      <button onClick={handleClick}>Guess the number between 1 and 3</button>
    </div>
  );
}
export default App;
```

## 2.2 Data and Everns

### 2.2.1 Parent-child data flow

You can establish a single source of truth that contains the two strings that store the values for the texts, "99 percent of all items" and "everything must go". This will be contained within the parent component so that any data needed can be passed onto the child component using props.

```js
// you create a single source of truth, a JavaScript object named data. Data is an object that will contain two properties named heading and callToAction, both represented as strings.
const data = {
    heading: "99% off all items!"
    callToAction: "Everythin must go!"
}
function Promo(){
    return(
        <div>
            <PromoHeading
            heading = {data.heading}
            callToAction={data.callToAction}
            />
        </div>
    )
}
```

The values of the props object are determined in the parent component when you add the specific JSX element that should be rendered.

You make the change at the data source, the parent, and the updates will be applied to the child automatically. The prop states always flow from the parent to the child component, and using props helps you avoid the need to change the data in several places.

### 2.2.2 Data flow in React

In React, data always moves in one direction: from parent components down to their children. This is called unidirectional data flow.

- The parent component holds the data (called state).
- The parent passes this data to its child components using something called props.
- The child components can use this data, but cannot change it directly-props are read-only for children.

#### Why is this helpful?

- **Easier to understand**: You always know where data comes from (the parent), so it’s simpler to trace and debug.

- **Predictable**: Since children can’t change the data, you don’t have to worry about unexpected changes from different places.

- **Efficient**: Only the parts of your app that need to update will re-render, making your app faster.

#### Example

##### Parent component:

```jsx
function Dog() {
    return (
        <Puppy name="Max" bowlShape="square" bowlStatus="full" />
    );
};
```

`Dog` gives the name, bowl shape, and bowl status to `Puppy` as props.

##### Child component:

```jsx
function Puppy(props) {
    return (
        <div>
            {props.name} has <Bowl bowlShape="square" bowlStatus="full" />
        </div>
    );
};
```

`Puppy` receives these props and passes some of them further down to `Bowl`.

##### Grandchild component:

```jsx
function Bowl(props) {
    return (
        <span>
            {props.bowlShape}-shaped bowl, and it's currently {props.bowlStatus}
        </span>
    );
};
```

`Bowl` uses the props to display information.

##### Key Points

- Props are like packages of data that go from parent to child.
- Children cannot change props-they can only use them.
- If a child needs to change data, it must ask the parent (usually by calling a function the parent provides).

### 2.2.3 Children and Data

Is like the money only flowing from the employer to the employee, or the customer to the restaurant and never the opposite. Money is like `props`

data in react can be two types `props` data and `state` data.

1. `Props data` is data outside the components that it receives and works with but cannot mutate. It belongs to the parent that renders the components.
1. `State data` is data inside the components that it controls and can mutate. It belongs to the component itself.

### 2.2.4 Hooks

Keeping track of state across components can become quite a task and this is where React's hooks can help. One key benefit of hooks is that they solve the problem of unnecessary code reuse across components.

They let you hook into React state and lifestyle features from components.

1. first thing you need to do is import the useState from React so that it's available for use: `importReact, {useState} from 'react`
1. Declare an state variable within a component `const [state, setState] = useState(initialState)`

---

#### Example

```jsx
`const [showMenu, setShowMenu] = useState(false);
````

1. Creates a state variable with an initial value -> `showMenu`
1. Creates a function to set that state variable's value -> `SetShowMenu`

- The function setShowMenu is used to update the value of show menu bypassing the Boolean value to it.

The `useState` hook should be called at the **top level** of your component.  You can use the useState hook to track any type of data. It could be strings, numbers, arrays, Booleans or objects. Hooks can be called only from React functions.

You can also build your own hooks, which will let you extract custom component logic into reusable functions.

### 2.2.5 Using Hooks

Let’s say you have a component with an input text field. The user can type into this text field. The component needs to keep track of what the user types within this text field. You can add state and use the useState hook, to hold the string.

As the user keeps typing, the local state that holds the string needs to get updated with the latest text that has been typed.

```jsx
import { useState } from 'react';

export default function InputComponent() {
    // The state variable `inputText` and `setText` method are used to set the current text that is typed.
    // The useState hook is initialized at the beginning of the component.
    // By default, inputText is set as “hello”.
    const [inputText, setText] = useState('hello');

    // As the user types, the `handleChange` function, reads the latest input value from the browser’s input DOM element, and calls the `setText` function, to update the local state of `inputText`.
    function handleChange(e){
        setText(e.target.value);
    }

    return (
        <>
            <input value={inputText} onChange={handleChange} />
            <p>You typed: {inputText}</p>
            // clicking the reset button will update the inputText back to “hello”.
            <button onClick={() => setText('hello')}>
                Reset
            </button>
        </>
    );
}
```

let's define a React component and call it InputComponent. This component renders three things:

1. An input text field
1. Any text that has been entered into the field
1. A Reset button to set the field back to its default state

As the user starts typing within the text field, the current text that was typed is also displayed.

#### The rules of Hooks

- You can only call hooks at the top level of your component or your own hooks.
- You cannot call hooks inside loops or conditions.
- You can only call hooks from React functions, and not regular JavaScript functions.

#### 3x input text fields within a single component

To demonstrate, let’s extend the previous example, to include three input text fields within a single component. This could be a registration form with fields for first name, last name and email.

You do not need to have three separate state variables in this case, and instead you can consolidate them all together into one form object for better readability.

In addition to the useState hook, there are other hooks that come in handy such as useContext, useMemo, useRef, etc. When you need to share logic and reuse the same logic across several components, you can extract the logic into a custom hook.

```jsx
const[form, setForm] =useState({
    firstName:'Luke',
    lastName:'Jones',
    email:'lukeJones@sculpture.com',
});
```


#### The useRef hook

We use the `useRef` hook to access a child element directly.

When you invoke the `useRef` hook, it will return a `ref` object. The `ref` object has a property named current.

```jsx
function TextInputWithFocusButton(){
    const inputEl = useRef(null);
    const onButtonClick = () => {
        // `current` points to the mounted text input element
        inputEl.current.focus();
    };
    return (
        <>
            <input ref={inputEl} type="text"/>
            <button onClick={onButtonClick}>Focus the input</button>
        </>
    )
}
```

### 2.2.6 What is state?

Like `props`, React have another way to do this by using a similar concept called States, which also allows you to easily change how the component behaves in order to suit a given need.

The main way to change `State` is to alter these variables. When a component is created, it gets an initial `State`. The `State` is used to initialize the component's properties.

#### State and Stateless component

Components can be either stateful or stateless

##### Stateless component

```jsx
function App(){
    return <h1>A completely stateless component</h1>
}
```

##### Stateful component

```jsx
function App(){
    const [ word, setWord ] = React.useState("Hello");

    return (
        <div>
            <h1>A state v alue: {word}</h1>
        </div>
    )
}
```

##### ES6 array destructuring

With its ES6 version, JavaScript introduced the concept of array destructuring, which allows you to assign several variables from the array using a single line of code. In other words, you can assign apple, pear, and plum to the fruit 1, fruit 2 and fruit 3 variables quickly instead of one at a time.

```js
const fruits = ['apple', 'pear', 'plum'];
const [fruit1, fruit2, fruit3] = fruits;
```
