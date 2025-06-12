# Course 6: Advanced React

# 1. Components

## 1.1. Introduction

## 1.2 Rendering lists in JS

## 1.2.1 Transfornming lists in javascript

Sometimes you need to transform differnet elements before displaying them in the browser. We can use map method to transform lists of data.

A list in programming is an array. Can contain any type of data, but the most common is an obejct. Although if you fetch data from an external library, you usually get more data than you need, and the data is provided in a format or shape that is determined by the third party. That's why we use `maps()`.

When using the `map()` method, you will need to define a new variable, as it always returns a new array.

#### code

1. `data` is a list (array) of dessert objects.
2. `map()` goes through each dessert in the list.
3. for each dessert it creates a **new object** with two things

```JSX
const topDesserts = data.map(dessert => {
    return {
        content: ${dessert.title} - ${dessert.description}, price: dessert.price,
})

export default function App() {
    console.log(topDesserts);
    return <h1>Examine the console output</h1>
}
```

### 1.2.1 Render a simple list component

All html elements are `Components` by default.

When a JSX transformation will be part of the render method of components, you need to use curly braces to wrap your dynamic data so it can be accessed.

```JSX
...your  arrays ...
function App(){
    const listItems = topDesserts.map(dessert => {
        const listItems = `${dessert.title} - ${dessert.price}`
        return <li>{itemText}</li>
    })
    return (
        <div>
            <ul>
            </ul>
        </div>
    )
}
```

### Create a basic list component

#### filtering

The `filter` method creates a copy of the array, filtered down to just the elements from the original array that pass the test. In order words, it will return a new list with just the elements that fulfil the condition.

Each dessert from the list has a property called `calories`, which is an integer representing the number of calories.

#### sorting

The second requirement you have to implement is sorting the list by calories, from low to high or in ascending order. For that, arrays in JavaScript offer the `sort()` method, which sorts the elements of an array based on a comparison function provided. The `return` value from that comparison function determines how the sorting is performed:

#### mapping

you can chain the `map` operator at the end and return a `<li>` item with the dessert name and its calories, both separated by a dash character, and the word `“cal”` at the end.

#### Code

```JSX
const DessertsList = (props) => {
 const lowCaloriesDesserts = props.data
   .filter((dessert) => {
     return dessert.calories < 500;
   })
   .sort((a, b) => {
     return a.calories - b.calories;
   })
   .map((dessert) => {
     return (
       <li>
         {dessert.name} - {dessert.calories} cal
       </li>
     );
   });
 return <ul>{lowCaloriesDesserts}</ul>;

}
export default DessertsList;
```

### 1.2.2 Keys in React

When adding a new element at the end of the list React works well. However, inserting a new element at the beginning of the list the algorithm have worse performance because React will mitate every child instead of keep the other sub trees intact.

To solve this issue, React supports a key attribute. Keys are identifier's that help React to determine which items have changed or added or are removed. They also instruct how to treat a specific element when an update occurs and whether its internal state should be preserved or not.

```JSX
<ul>
    <li key="beer">Beer</li>
    <li key="wine">Wine</li>
<ul/>
<ul>
    <li key="cider">Cider</li>
    <li key="beer">Beer</li>
    <li key="wine">Wine</li>
<ul/>
```

The general rule of thumb with keys is to use a stable identifier that is unique among its siblings. This allows React to reuse as many elements from the list as possible, avoiding unnecessary recreations

### 1.2.3 What are Keys in React?

#### What is the React key prop?

The key prop is a unique identifier you assign to elements in a list when rendering them in React. It helps React distinguish between items in a list, so it knows which items have changed, been added, or removed.

#### Why is the key prop important?

React uses a diffing algorithm to update the UI efficiently by only changing what’s necessary. Without keys, React may re-render the entire list unnecessarily, hurting performance.
Keys allow React to preserve the state of components and avoid recreating elements that haven’t changed.
When the order of list items changes (like inserting an item at the start), keys help React understand which items moved and which are new.

#### How to choose keys?

Use a stable, unique ID from your data (like a database ID) whenever possible.
Avoid using array indexes as keys if the list can change order or items can be added/removed, because indexes don’t uniquely identify items across renders.
Don’t generate random keys on each render (e.g., using Math.random()), as this breaks React’s ability to track elements properly.

#### What happens if keys are used incorrectly?

React may recreate all list items on every update, causing performance issues. UI glitches or unexpected behavior may occur because React loses track of which components correspond to which data.

### 1.2.4 Using Keys Within List Components

- **Scenario**: Building a simple todo list app with editable tasks and a button to reverse their order.
- **Problem**: React requires each item in a list to have a unique key prop to track items efficiently.
- **Initial mistake**: Using the index of the item in the array as the key.
- **Why is using index bad here?** When you reverse the list, the indexes stay the same but the items change places. React keeps the internal state (like input text) tied to the key, so the inputs don’t move as expected.

- **What happens?** The input values stay with their original positions, causing UI bugs when the list order changes.
  Correct solution: Use a unique and stable identifier from your data, like an id property, as the key instead of the index.
- **Result**: When the list order changes, React correctly matches items by their unique keys, preserving input states properly.
- **Additional tip**: Avoid mutating React state directly (like using `reverse()` on the original array). Instead, create a copy (e.g., with the spread operator [...]) before modifying it.

#### why keys matter?

Keys help React identify which items have changed, been added, or removed. Using stable, unique keys prevents bugs and ensures smooth UI updates. Always use unique IDs as keys in React lists, especially when the list order can change. Avoid using array indexes as keys unless the list is static.

### 1.2.5 Additional Resources

- [Map()Opens in a new tab](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) allows you to create new arrays populated with the results of calling a transformation function on every element.

- [Rendering lists on official React docs websiteOpens in a new tab](https://beta.reactjs.org/learn/rendering-lists#rendering-data-from-arrays) dives deeper into how to display multiple similar components from a collection of data, providing examples of both filtering and transformations.

- [React keys on official docsOpens in a new tab](https://beta.reactjs.org/learn/rendering-lists#where-to-get-your-key) offers a comprehensive set of memotecnic rules to reinforce how to use keys properly.

## 1.3 Forms in react

### 1.3.1 What are controlled components

When it comes to React applications, HTML forms work differently to other DOM elements. You may recall that the DOM is a logical tree-like structure representing the HTML document, and it uses nodes to describe the various parts of the document.

Traditional HTML forms keep some internal state inside the DOM and have some default behavior when submitting them. That's normally done via the action attribute, which points to the endpoint that will handle the request.

But what if you would like a more granular level of control? customers of the little lemon restaurant can reserve a table on the website using a form.

- To handle input changes in React forms, you access the `event.target.value` from the event object.
- Use the `onSubmit` prop on the `<form>` element to handle form submission, where you can access form values and perform actions like validation.
- To prevent the default browser form submission (which reloads the page), call `event.preventDefault()` inside the `onSubmit` handler.
- **Controlled components** are React inputs whose state is managed by React, making React the "source of truth" for form data.
- React recommends using controlled components for most form inputs to have full control over values.
- Some form elements remain uncontrolled, similar to native DOM behaviour.

Overall, controlled components enable better management and predictability of form state in React applications.

### 1.3.2 Controlled components vs. Uncontrolled components

#### Uncrontrolled Inputs

It update instantly in the browser, but React itself is not notified of each change unless you explicitly read the value (e.g., via a ref or an event handler). If you want to show the input’s value elsewhere in your UI in real time, you need to use a controlled input (with state) or manually trigger a re-render.

```JSX
const Form = () => {
 return (
   <div>
     <input type="text" />
   </div>
 );
};
```

They remember exactly what you typed, being the DOM itself that maintains that internal state. How can you then get their value? The answer is by using a React ref.

In the code below, you can see how a ref is used to access the value of the input whenever the form is submitted.

```JSX
const Form = () => {
    const inputRef = useRef(null);

    const handleSubmit = () => {
        const inputValue = input.current.value;
        // Do something with the value.
    }
    return (
        <form onSubmit={handleSubmit}>
            <input ref={inputRef} type="text"/>
        </form>
    );
};
```

In other words, you must pull the value from the field when needed.

#### Crontrolled Inputs

Their values are fully managed by React state. Instead of the DOM managing the input’s current value, React keeps the source of truth in a state variable. This means:

1. The input's `value` prop is set to a state variable

```jsx
// a React functional component defined as an arrow function.
// It renders a form with a controlled text input.
const Form = () => {
  // This state variable holds the current text typed into the single input field
  // It create a state variable `value` and a function `setValue` to update it.
  const [value, setValue] = useState("");

  // this func receives the event object `e`
  // from the input's `onChange` event.
  // `e.target` refers to the input element that triggered the event.
  // `e.target.value` is the current value of that input.
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form>
      <input value={value} onChange={handleChange} type="text" />
    </form>
  );
};
```

Every time you type a new character, the handleChange function is executed. It receives the new value of the input, and then it sets it in the state. In the code example above, the flow would be as follows:

1. The input starts out with an empty string `""`.
2. You type `"a"` and `handleChange` gets an `"a"` attached in the event object, as `e.target.value` and subsequntly calls `setValue` with it. THe input is then updated to have the value of `"a"`.
3. You type `"b"` and `handleChange` gets called with `e.target.value` being `"ab"`. and sets that to the state. That gets set into the state. The input is then re-rendered once more, now with `value = "ab"`

This flow **pushes** the value changes to the form component instead of pulling like the ref example from the uncontrolled version. Therefore, the Form component always has the input's current value without needing to ask for it explicitly.

As a result, your data (React state) and UI(inputs tags) are always in sync. Another implication is that forms can respond to input changes immediately, for example, by:

1. Instant validation per field
2. Disabling the submit buttonn

#### The file input type

There are some specific form inputs that are always uncontrolled, like the file input tag.

In React, an `<input type="file" />` is always an uncontrolled component because its value is read-only and can't be set programmatically.

The following example illustrates how to create a ref to the DOM node to access any files selected in the form submit handler:

```JSX
const Form = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const files = fileInput.current.files;
        // ... do smt with the files ...
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
                ref={fileInput}
                type="file"
            />
        </form>
    );
};
```

### 1.3.3 Creating a form component in React

React simplifies building and customizing forms by allowing developers to create controlled components, where form data is managed by React state rather than the DOM. This approach provides greater control and flexibility over form behavior.

A restaurant decided to rebuild their page it using React to leverage controlled components and improve user experience.

1. Initialize local state for each input (e.g., name) using useState.
1. Bind the input’s value prop to the state variable, making it controlled.
1. Use the onChange event handler to update the state on every keystroke.
1. Handle form submission with an onSubmit handler on the `<form>` element.
1. Prevent the default form submission behavior (page reload) by calling event.preventDefault() inside the submit handler.
1. Clear input fields after submission by resetting the state.
1. Disable the Submit button when the form input is invalid or empty by using the disabled attribute conditionally.
1. Improve accessibility by connecting labels to inputs using htmlFor (instead of for in HTML).

### 1.3.4 Additional resources

[Forms from the official React docs](https://reactjs.org/docs/forms.html) illustrate some examples of how React deals with certain form fields compared to traditional HTML tags, like the text area, select and file input tags. It also showcases how to handle multiple inputs by leveraging event.target.name and the implications of using null as a value in a controlled input.

[FormikOpens in a new tab](https://formik.org/) is the most popular open source form library for React. It saves you lots of time when building forms and offers a declarative, intuitive and adoptable paradigm.

[YupOpens in a new tab](https://github.com/jquense/yup) is an open-source library that integrates perfectly with Formik. It allows you to set all your form validation rules declaratively.

[React-hook-formOpens in a new tab](https://github.com/react-hook-form/react-hook-form) is another popular library to easily manage your form state and validation rules.

### 1.4.1 What you know about Props and State

| Aspect                | Props                                         | State                                           |
| --------------------- | --------------------------------------------- | ----------------------------------------------- |
| Analogy               | Custom choices made by the restaurant manager | Changing conditions like user actions           |
| Definition            | Configuration passed from parent components   | Internal data managed by the component          |
| Mutability            | Immutable(cannot be changed by the component) | Mutable(can updated within component)           |
| Source                | Comes from parent components                  | Defined and updated within the component        |
| Usage                 | Used for static data                          | Used for dynamic, interactive data              |
| Trigger for re-render | Yes (when props change)                       | Yes (when state changes)                        |
| Deterministic?        | Yes                                           | Yes                                             |
| Lifecycle             | Received once when rendered                   | Initialised on mount, updated over time         |
| Visibility            | Public (accessible to child components)       | Private (only to the component itself)          |
| Typical Use           | Display values, configure children            | Track form input, toggle elements, fetch status |
| **Component type**    | Stateless (only props)                        | Stateful (uses both props and state)            |
| Complexity            | Lower , easier to test                        | high, harder to test                            |

### 1.4.2 What is Context?

In a typical React application, data is passed from parent to child components using props in a top-down manner. However, when multiple components need access to the same piece of data—such as theme preferences or user information—relying solely on props becomes inefficient and leads to what is known as _"props drilling"_, where props must be passed through many intermediate components that do not directly use the data. To address this problem, React introduced the Context API, which allows developers to share global data across components without manually passing props at every level of the component tree.

The Context API involves creating a context object using `createContext`, defining a provider component to hold and supply the shared data, and then consuming that context data within any component that needs it. In the example of Little Lemon's blogging platform, user authentication details are required in both the header and the page component. This global data is managed using a `UserContext` and a corresponding `UserProvider` component. A custom hook is created to simplify access to the user data. Once the app is wrapped in the provider and the hook is used in relevant components, the authenticated user's name is displayed wherever needed. While context is powerful for managing global state, it should be used judiciously—props and local state should still be preferred for most cases to keep the data flow predictable and simple.

#### `UserContext.js`

```jsx
import {createContext, useState}

const UserContext = createContext(undefined);

export const UserProvider = ({children}) => {
    const [user] = useState({
        name: "John",
        email: "jogn@company.com",
        dob: "12/04/1943",
    })
    return <UserContext.Provider value={{ user }}></UserContext.Provider>
};

export const useUser = () => useContext(UserContext);
```

#### `App.js`

```jsx

const LoggedInUser = () =>{
    const {user} = useUser();
    return (
        <p>
            Hello <span className="UserName">{user.name}</span>
        </p>
    )
}

const Page = () => {
    const {user} = userUser
    return (
        <div>
            <h2></h2>
        </div>
    )
}


function App(){...}

function Root(){
    return (
        <UserProvider>
            <App />
        </UserProvider>
    );
}

export default Root;
```

### 1.4.3 Create a light-dark theme switcher

#### Step 1

To create the `ThemeProvider`, the first step is to create a new context object, `ThemeContext`, using createContext, a function that can be imported from React. The default value argument is only used when a component does not have a matching Provider above it in the tree. This default value can be helpful for testing components in isolation without wrapping them. For the purpose of this exercise, it’s not relevant, so `undefined` can be used.

Then, inside the `ThemeProvider` component, you need to define a new piece of local state for the theme, which can be a string whose value is either “`light`” or “`dark`”. It can be initialized to “`light`”, which is usually the default theme for applications.

In the `return` statement, the `ThemeContext.Provider` component should be rendered and wrap the children.

Finally, recall that the value prop for `ThemeContext.Provider` is what gets injected down the tree as context. Since the application needs both the theme value and a way to toggle it, two values are injected: `theme` and `toggleTheme`.

`theme` is just the light-dark theme string value, whereas `toggleTheme` is a function that receives no parameters and just toggles the theme from light to dark and vice versa.

That completes the implementation of the `ThemeProvider` component, as per the code below:

```JSX
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
 const [theme, setTheme] = useState("light");

 return (
   <ThemeContext.Provider
     value={{
       theme,
       toggleTheme: () => setTheme(theme === "light" ? "dark" : "light"),
     }}
   >
     {children}
   </ThemeContext.Provider>
 );
};
```

#### Step 2

The implementation for useTheme is quite simple. You just need to import the useContext hook from React and pass as an argument the ThemeContext object defined before. That allows your components to access both theme and toggleTheme values, which are the ones the useTheme custom hook returns.

```jsx
... previous code above ...
export const useTheme = () => useContext(ThemeContext);
```

#### Step 3

The `Switch` component can then be connected to the `toggleTheme` function returned from useTheme as per the code below:

```jsx
const Switch = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={theme === "light"}
        onChange={toggleTheme}
      />
      <span className="slider round" />
    </label>
  );
};
```

### 1.4.4 How re-rendering works with Context

1. **React Context causes re-renders**:
   When a context values changes, all components consuming that context re-render.

1. **Intermediate components also re-render**:
   If a parent component re-renders, React by default will re-renders all his children, even if they don't use the context or props changed.

1. **Use `React.memo` to prevent unnecessary re-renders**:
   Wrapping components with `React.memo` tells React to skip re-rendering if props haven't changed.

   ```jsx
   const ComponentA = React.memo() => <ComponentB />
   ```

1. **Beware of object references in context values**:
   If you pass an object as the context value, React will re-render consumers whenever the object reference changes - even if the object's contents are the same.

   ```jsx
   const value = { a: "hi", b: "bye" };
   <AppContext.Provider value={value}>...</AppContext.Provider>;
   ```

   Each render creates a new object, causing re-renders.

1. **Use `useMemo` to keep the same object**:
   `useMemo` memoizes the object, so the reference only changes if the actual data changes.

   ```jsx
   const value = useMemo(() -> ({a, b}), [a,b]);
   <AppContext.Provider value={value}>...</AppContext.Provider>
   ```

> ![info] Memoized Object
>
> It refers to an object whose creation or computation result is cached (stored) so that subsequent uses of the same object data reuse the cached version instead of creating a new one repeatedly.
>
> This is an application of memoization, an optimization technique that saves expensive computation results and returns the cached result when the same inputs occur again.

#### Full Code

```JSX
// useMemo: A React hook that memoizes (caches) a value so it only recalculates when dependencies change.
import React, { useMemo, useContext } from 'react';

// creates a new Context object `AppContext`.
// `Context` allows you to pass data through the component tree without manually passing props at every level.
// Components that consume this context will re-render when the context’s value changes.
const AppContext = React.createContext();

const App = () => {
  const a = 'hi';
  const b = 'bye';

  // Memoize context value to avoid unnecessary re-renders
  // `useMemo` hook:
  //    - Creates a memoized object `{ a, b }`.
  //    - This object is only recreated if `a` or `b` change.
  //    - Why? Because in JavaScript, objects are compared by reference, so creating a new object every render (even with same values) would cause unnecessary re-renders of context consumers.
  // `AppContext.Provider`:
  //    - Provides the value object to all descendant components that consume this context.
  //    - When `value` changes (reference changes), React triggers re-renders in all consumers.
  const value = useMemo(() => ({ a, b }), [a, b]);

  return (
    <AppContext.Provider value={value}>
      <ComponentA />
    </AppContext.Provider>
  );
};

// It prevents ComponentA from re-rendering unless its props change.
// Since `ComponentA` has no props here, it will never re-render unnecessarily even if its parent (`App`) re-renders.
// This optimization reduces render overhead for intermediate components that don’t depend on changing data.
const ComponentA = React.memo(() => <ComponentB />);

// ComponentB simply renders ComponentC.
const ComponentB = () => <ComponentC />;

// ComponentC uses the useContext hook to consume the context value provided by AppContext.Provider.
// Because ComponentC consumes context, it will re-render whenever the context’s value changes (i.e., when the value object reference changes).
const ComponentC = () => {
  const contextValue = useContext(AppContext);
  return null; // consumes context and re-renders if value changes
};
```

### 1.4.5 Knowledge check

#### What scenarios are valid for choosing Context instead of local state?

- The locale or language that should be used in the application’s text.
  Explanation: Locale or language is a global setting that many components across the app need to access. Using React Context here avoids prop drilling and centralizes this global state.
- The visibility state of an alert that overlays into the whole application.
  Explanation: Since the alert affects the whole app and multiple components may need to show or hide it, Context is appropriate to share this state globally.

#### When creating a new piece of application state, what is the bare minimum React APIs you would need?

- Context and local state.
  Explanation: Local state (useState) manages component-specific data, while Context enables sharing state globally. Both together cover most state management needs without requiring props alone.
- Props alone are not enough to define or manage state; they are a way to pass data down.

#### What happens when the value prop of the Context Provider changes?

- All the consumer components re-render with the updated value.
  Explanation: React triggers re-renders in all components that consume the context when the provider’s value changes.
- The Context Provider component gets recreated.
  False: The provider component itself does not get recreated; only consumers re-render.
- The whole component tree under the Context Provider gets re-rendered.
  False: Only context consumers re-render, not all children automatically.

#### What happens when you wrap a component with React.memo?

- React provides a performance optimization.
  Explanation: React.memo memoizes the component output and skips re-rendering if props haven’t changed.
- Whether the component should re-render could be determined by some custom logic comparing previous and current props.
  Explanation: You can pass a custom comparison function as a second argument to React.memo to control re-rendering.
- The component never gets updated no matter if there was a change in its local state or props.
  False: React.memo only controls re-renders due to props changes. Changes in local state inside the component still cause re-renders.

### 1.4.6 Module quiz: Components

#### Best general choice for keys in list items

- Using an ID coming from the data, that points to the database ID.
  Explanation: Keys should be unique and stable identifiers that don’t change between renders. Using IDs from your data (e.g., database IDs) guarantees uniqueness and stability, which helps React efficiently update the list.
- Using a generated ID is okay if it guarantees no duplication and is stable.
- Using an index is generally discouraged unless the list is static and never reordered or changed.

#### Correct ways to render dynamic list items like `<li>Ice cream - 200 cal</li>`

```jsx
<li>{item.name} - {item.cal} cal</li>
<li>{${item.name} - ${item.cal} cal}</li>
```

Explanation: Both correctly interpolate dynamic values in JSX. The first uses JSX expressions directly, the second uses template literals inside JSX.

```jsx
<li>{Ice cream - 200 {item.cal}}</li>
```

is invalid JSX syntax.

#### Best place to add a new item from React’s diffing algorithm point of view

- The end.

Explanation: Adding new items at the end minimizes reordering and re-rendering of existing list items. Adding at the beginning or middle causes React to potentially re-render or reorder many items, which is less efficient.

#### Controlled components are

- A set of components whose internal state is controlled by React.

Explanation: Controlled components have their form element values (like inputs) managed by React state, meaning React dictates their current value and updates.

#### What can you achieve with uncontrolled components?

- One time value retrieval on submit using a React ref.
- Validation on submit.

Explanation: Uncontrolled components rely on the DOM to manage their state. You can access their current value via refs on submit and perform validation then.

#### Argument to provide to `useContext` hook

- The Context object obtained via the `createContext` call.

Explanation: useContext consumes the context object returned by React.createContext(), not the Provider component or state.

#### Sequence of re-renders if App re-renders and ComponentA is wrapped in React.memo:

```jsx
const App = () => {
  return (
    <AppContext.Provider>
      <ComponentA />
    </AppContext.Provider>
  );
};

const ComponentA = React.memo(() => <ComponentB />);
const ComponentB = () => <ComponentC />;
const ComponentC = () => null;
```

- App
  Explanation: React.memo prevents ComponentA from re-rendering if its props don’t change. Since ComponentA, ComponentB, and ComponentC have no props or state, only App re-renders.

#### Areas where props and state overlap:

- Both props and state changes trigger a render update.
- Both props and state are deterministic, meaning the component always generates the same output for the same combination of props and state.

Explanation: Both are plain JS objects but only state is mutable within a component. Both cause React to re-render when changed, and both determine the rendered output.

### 1.4.7 Additional resources

[React.memo from the official React docsOpens in a new tab](https://reactjs.org/docs/react-api.html#reactmemo), an API that can be used in conjunction with Context Providers to prevent unnecessary re-renders in top-level components in the tree.

[useMemo from the official React docsOpens in a new tab](https://reactjs.org/docs/hooks-reference.html#usememo), a hook to guarantee referential equality on objects across rendering passes.

# 2. React Hooks

## 2.1.1 Intro Hooks

Array destructuring

```jsx
let veggies = [parsley, onion, carrot];
const [v1, v2, v3] = veggies;
```

When the structuring objects, you have to destructure a property of an object using that exact properties name as the name of the destructured variable. This makes objects a lot stricter in terms of what you can name your destructured variables. For that reason, react uses the array data structure for the used state hooks return value.

### How useState works

useState lets you add and update data (state) in your React components.

When you call `useState, it gives you two things:

1. The current value of your state.
2. A function to update that value.

```jsx
const [vg1, vg2, vg3] = ["Carrot", "Briccoli", "Peas"];
```

### How to Use useState

1. Import useState

```jsx
import React, { useState } from "react";
```

1. Set up state

```jsx
const [restaurantName, setRestaurantName] = useState("Lemon");
// restaurantName is "Lemon" at first
// setRestaurantName is the function to change it
```

1. Update state
   Never change the state variable directly.
   Always use the setter function(`setRestaurantName`).

   ```jsx
   setRestaurantName("Little Lemon");
   ```

### Full code

```jsx
import { useState } from "react";

function App() {
  const [pizzaName, setPizzaName] = useState("Hawaian");

  function updatePizzaName() {
    setPizzaName("Pepperoni");
  }

  return (
    <div>
      <p>your pizza: </p>
      <h2>{pizzaName}</h2>
      <button onClick={updatePizzaName}>Update Restaurant Name</button>
    </div>
  );
}
```

## 2.1.2 Working with complex data in useState

The correct way to update the state object in React when using useState
Is to copy the state object and then update the copy. This usually involves using the spread operator -> `...`.

```jsx
imprt {useState} from 'react';

export default function App(){
    const [greeting, setGreeting]= useState ({ geet: "Hello, World"});
    console.log(greeting, setGreeting);

    function updateGreeting(){
        const newGreeting = {...greeting};
        newGreeting.greet = "Hello, WWW";
        setGreeting(newGreeting);
    }

    return (
        <div>
            <h1>{greeting.greet}</h1>
            <button onClick={updateGreeting}>Update greeting</button>
        </div>
    );
}
```

Updating the state using arrow function:

```jsx
import {useState } from 'react';

export default function App(){
    const [greeting, setGreeting] - useState({
        greet:"Hello",
        place:"World"
    })
    console.log(greeting,setGreeting);

    function updateGreeting(){
        setGreeting(prevState => {
            return {...prevState, place: "WWW"}
        });
    }

    return (
        <div>
            <h1>{greeting.greet}, {greeting.place}</h1>
            <button onClick={updateGreeting}>Update greeting</button>
        </div>
    );
}
```

The reason this works is because it uses the previous state, which is named prevState, and this is the previous value of the greeting variable. In other words, it makes a copy of the prevState object, and updates only the place property on the copied object. It then returns a brand-new object:

```js
const a = { foo: 1, bar: { a: 2 } };
const b = { ...a };

b.foo = 2; // Changes b.foo only; a.foo remains 1
b.bar.a = 3; // Changes b.bar.a AND a.bar.a, because bar is shared
```

**foo**: a primitive value 1
**bar**: a nested object { a: 2 }

The spread operator `(...a)` creates a _shallow copy_ of `a`.
Changing `b.foo` to 2 affects only `b` because `foo` was copied by value.
Since `bar` was copied by reference (shallow copy), both `a.bar` and `b.bar` point to the same nested object.

### 2.1.3 Managing state

```jsx
import { useState } from "react";

export default function App() {
  const [giftCard, setGiftCard] = useState({
    firstName: "Jennifer",
    lastName: "Smith",
    text: "Free dinner for 4 guests",
    valid: true,
    instructions: "To use your coupon, click the button below.",
  });

  function spendGiftCard() {
    setGiftCard((prevState) => {
      return {
        ...prevState,
        text: "Your coupon has been used.",
        valid: false,
        instructions: "Please visit our restaurant to renew your gift card.",
      };
    });
  }

  return (
    <div style={{ padding: "40px" }}>
      <h1>Gift Card Page</h1>
      <h2>
        Customer: {giftCard.firstName} {giftCard.lastName}
      </h2>
      <h3>{giftCard.text}</h3>
      <p>{giftCard.instructions}</p>
      {giftCard.valid && (
        <button onClick={spendGiftCard}>Spend Gift Card</button>
      )}
    </div>
  );
}
```

### 2.1.4 What are side effects?

Impure functions have side effects, and pure don't have.

#### Pure Function

A pure function should receive specific input. That is a specific parameter will always return the exact same output, no matter how many times get invoked.

```jsx
function EstablishedYear(props) {
  return <h1>Established year: {props.year}</h1>;
}

function App() {
  return <EstablishedYear year={2003} />;
}

export default App;
```

#### Impure Function

It perform side effects (actions that affect something outside the function itself) such as calling `console.log`, fetching data, or accessing browser APIs like geolocation. For example, a `ShoppingCart` function that logs the total to the console is impure because it depends on an external API.

In React, to manage side effects properly and keep components predictable, impure actions should be contained using the `useEffect` hook. This hook accepts a callback function and a dependency array, allowing side effects to run at specific times during the component lifecycle.

Using `useEffect` helps isolate side effects like logging or data fetching, making your React components cleaner and easier to maintain.

### 2.1.5 What is the useEffect hook?

The code you place inside the useEffect hook always runs after your component mounts or, in other words, after React has updated the DOM.

In addition, depending on your configuration via the dependencies array, your effects can also run when certain state variables or props change.

#### Table

| Without `useEffect`                    | With `useEffect`                 |
| -------------------------------------- | -------------------------------- |
| Side effect (SE) runs on every render  | SE runs when dependencies change |
| Can cause unnecessary/repeated updates | Efficient, runs only when needed |
| May block/interfere with rendering     | Runs asynchronously after render |
| Harder to manage cleanup               | Supports cleanup functions       |

#### 1. Without a dependency array

By default, if no second argument is provided to the useEffect function, the effect will run after every render.

```jsx
useEffect(() => {
  document.title = "Little Lemon";
});
```

#### 2. With an empty dependency array ([])

Runs only once, right after the component mounts.
The effect will not run again on re-renders or updates.

```jsx
useEffect(() => {
  document.title = "Little Lemon";
}, []);
```

#### 3. With a dependency array ([something])

However it may cause performance issues. A way to instruct React to skip applying an effect is passing an array as a second parameter to `useEffect`. the integer variable version is passed as the second parameter. That means that the effect will only be re-run if the version number changes between renders.

```jsx
useEffect(() => {
  document.title = `Little Lemon, v${version}`;
}, [version]); // Only re-run the effect if version changes
```

#### 4. With multiple Effects to Separate Concerns

React doesn’t limit you in the number of effects your component can have. In fact, it encourages you to group related logic together in the same effect and break up unrelated logic into different effects.

```jsx
function MenuPage(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    document.title = "Little Lemon";
  }, []);

  useEffect(() => {
    fetch(`https://caribou/menu/${id}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [props.id]);
}
```

React will make sure to run the cleanup logic when it’s needed. The execution will always happen when the component unmounts. However, in effects that run after every render and not just once, React will also clean up the effect from the previous render before running the new effect next time.

### 2.1.6 Using the useEffect hook

```jsx
import React from "react";
import "./App.css";

function App() {
  const [toggle, setToggle] = React.useState(false);

  const clickHandler = () => {
    setToggle(!toggle);
  };

  React.useEffect(() => {
    document.title = toggle
      ? "Welcome to Little Lemon"
      : "Using the useEffect hook";
  }, [toggle]);

  return (
    <div>
      <h1>Using the useEffect hook</h1>
      <button onClick={clickHandler}>Toggle message</button>
    </div>
  );
}
```

### 2.1.7 Knowledge check

- The useEffect hook accepts a callback function and an array
- the second argument of the useEffect() is the dependency array

## 2.2 Rules of Hooks and Fetching Data with Hooks

### 2.2.1 What are the rules of hooks?

The four main rules of hooks:

1. Only call hooks from a react component or custom hook
2. Only call hooks at the top level of a component or custom hook
3. You are allowed to call multiple state hooks or effect hooks inside a component
4. Always make these multiple hook calls in the same sequence.

### 2.2.2 What you need to know before fetching data

The Fetch function in JavaScript is a tool used to retrieve data from the web, typically by making server requests to get JSON data. To understand how Fetch works, it’s important to grasp how JavaScript handles tasks.

JavaScript is **single-threaded**, meaning it can only do one thing at a time. Using a metaphor of a post office clerk, JavaScript handles tasks sequentially, which can cause delays if one task takes time. To overcome this, JavaScript delegates tasks to browser APIs (external helpers), allowing it to continue working on other things while waiting for responses. This delegation is called **asynchronous JavaScript**.

In practice, when JavaScript calls the Fetch API to request data, it doesn’t wait for the response. Instead, it continues executing subsequent code. Once the Fetch API returns the data (e.g., from a third-party API like randomuser.me), JavaScript processes it and logs the result.

The Fetch function acts as a _facade_, appearing as a JavaScript function but actually calling browser functionality outside of JavaScript itself.
This asynchronous behavior allows JavaScript to efficiently handle web requests without blocking the main thread, which is crucial for responsive applications. Understanding this concept is essential before working with data fetching in frameworks like React.

### 2.2.3 Data fetching using hooks

Compared to plain JS data fetching is not that different in React. Is that fetching data from a third-party API is considered a side-effect, therefore, you need to use useEffect hook to deal with using the Fetch API calls in React.

#### 1. All in one

Here is a code example where a component is fetching some data from an external API to display information about a cryptocurrency.

```jsx
export default function App() {
  const [btcData, setBtcData] = useState({});
  useEffect(() => {
    fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)
      .then((response) => response.json())
      .then((jsonData) => setBtcData(jsonData.bpi.USD))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h1>Current BTC/USD data</h1>
      <p>Code: {btcData.code}</p>
      ...
    </>
  );
}
```

This example above shows that in order to fetch data from a third party API, you need to pass an anonymous function as a call to the useEffect hook.

#### 2. Separate the function and reference

Alternatively, you might extract this anonymous function into a separate function expression or function declaration, and then just reference it.

```jsx
export default function App() {
  const [btcData, setBtcData] = useState({});

  const fetchData = () => {
    fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)
      .then((response) => response.json())
      .then((jsonData) => setBtcData(jsonData.bpi.USD))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Current BTC/USD data</h1>
      <p>Code: {btcData.code}</p>
      ...
    </>
  );
}
```

The code essentially does the same thing, but this second example is cleaner and better organized.

#### Pending Fallback

Very often, the response from fetching third-party data might fail, or be delayed. That's why it can be useful to provide different renders, based on whether or not the data has been received.

The simplest conditional rendering might involve setting up two renders, based on whether or not the data has been successfully fetched.

```jsx
return someStateVariable.length > 0 ? (
    <div>
        <h1>Data returned:</h1>
        <h2>{someStateVariable.results[1].price}</h2>
        <h3>{someStateVariable.results[1].description}</h3>
    </div>
    )    : (

    )
```

### 2.2.4 Fetching data - Putting it all together

The example app fetches user data asynchronously and initially displays a "data pending" message while waiting for the response. The developer uses browser dev tools to simulate a slow network to observe this loading state.

```jsx
function App() {
  const [user, setUser] = React.useState([]);

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=1")
      .then((response) => response.json())
      .then((data) => setUser(data.results));
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return Object.keys(user).length > 0 ? (
    <div>
      <h1>Data returned:</h1>
      <h2>{someStateVariable.results[0].price}</h2>
      <h3>{someStateVariable.results[0].description}</h3>
    </div>
  ) : (
    <h1>Data returned</h1>
  );
}
```

The React app uses `useState` to hold the user data and `useEffect` to trigger the data fetch when the component mounts. The fetch function retrieves JSON data from the API and updates the state. Conditional rendering shows the loading message until data arrives, then displays the user’s first and last name.

The fetchData function is initially fetching data from the randomuser.me API, next it retrieves a response from the API in JSON format, and finally updates the state variable with the returned data.

### 2.2.4 Fetching data with useEffect

The useEffect hook is indeed used for side effects, actions that affect something outside the scope of the component itself.

### 2.2.5 Fetch data

```jsx
import React from "react";

function App() {
  const [user, setUser] = React.useState([]);

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=1")
      .then((response) => response.json())
      .then((data) => setUser(data));
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return Object.keys(user).length > 0 ? (
    <div style={{ padding: "40px" }}>
      <h1>Customer data</h1>
      <h2>Name: {user.results[0].name.first}</h2>
      <img src={user.results[0].picture.large} alt="" />
    </div>
  ) : (
    <h1>Data pending...</h1>
  );
}

export default App;
```

### 2.2.6 API

Designing APIs is a collaborative, iterative process involving proposals, peer reviews, and refinements, ensuring clarity and consensus among front-end, back-end, and middleware engineers.

Key principles in API design include:

- **Type safety**: Ensuring the data returned matches expectations to prevent application failures.
- **Future-proofing**: Balancing the anticipation of future needs without overcomplicating or delaying current development.
- **Simplicity**: Avoiding overly complex designs to maintain readability, stability, and ease of maintenance.

Not be intimidated by APIs, highlighting that learning API design broadens skills and employability. The advice is to focus on simplicity and stability to create effective, bug-free APIs.

### 2.2.7 Rules of Hooks and Fetching Data with Hooks

1. Hooks should not be called inside loops to ensure consistent hook order between renders.
1. Hooks should not be called conditionally inside if statement, to maintain the same hook call order.
1. Hooks should be called at the top level of your React function component, not inside nested functions.
1. You can call multiple state hooks and effect hooks as needed, but always in the same order and not conditionally.

### 2.2.8 Additional Resources

- The [Rules of Hooks reading on React.devOpens in a new tab](https://reactjs.org/docs/hooks-rules.html) website gives you an overview of how to work with the hooks as recommended by the React Core team at Meta.
- The [Fetching data with EffectsOpens in a new tab](https://beta.reactjs.org/apis/react/useEffect#fetching-data-with-effects) article on React docs discusses fetching data using a few different approaches, including using async / await syntax.
- [How to use promises](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises) is a resource that describes the "behind-the-scenes" of how data fetching works in greater depth.
- [async functionOpens in a new tab](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) is a resource on MDN that discusses the use of the async and await keywords as a more recent way to handle API requests in JavaScript

## 2.3 Advance Hooks

### 2.3.1 What is useReducer and vs w/ useState

The **useState** hook is useful for simple state, but can became cumbersome with complex logic or when the next state depends on the previous state. In such cases, **useReducer** is a better choice. Unlike useState, useReducer uses a reducer function and an action object, allowing for more organized and scalable state management, especially when handling multiple actions.

The example given is an expense tracker for the Little Lemon restaurant, where useReducer manages actions like buying ingredients and selling meals. Each action updates the state based on its type, and new actions (like a celebrity visit) can be easily added. Instead of calling setState, you dispatch actions to the reducer.

### 2.3.2 useRef to access underlying DOM

How to use React’s useRef hook to programmatically focus a cursor into an input field.

Starting with a simple React app, an input and a button are added. The `useRef` hook is invoked to create a ref object, which is assigned to the input’s ref attribute. This ref’s current property points to the actual DOM node of the input.

When the button is clicked, a handler calls `formInputRef.current.focus()`, moving the cursor focus into the input field without user interaction. This approach allows direct access to the DOM node and its methods, enabling precise control such as focusing the input programmatically.

the functionality by clicking outside the input and then clicking the button to shift focus back to the input field.

```js
import React from "react";

function App() {
  const formInputRef = React.useRef(null);

  const focusInput = () => {
    formInputRef.current.focus();
  };

  return (
    <>
      <h1>Using useRef to access underlying DOM</h1>
      <input ref={formInputRef} type="text" />
      <button onClick={focusInput}>Focus input</button>
    </>
  );
}
export default App;
```

The returned value from the useRef hook invocation is an object.

### 2.3.3 Create your own custom hook, usePrevious

```js
//...more code

function usePrevious(val) {
  // invoke the useRef hook without any arguments, and assign this invocation to the var `ref`
  const ref = useRef();

  // The first parameter should have been an arrow function, without any arguments. Inside the arrow function's body, you should have assigned the val value to the current property on the ref object.
  useEffect(() => {
    ref.current = val;
    // The second parameter needed to be the dependencies array. The dependencies array needed to list a single variable - namely, the val variable.
  }, [val]);
  return ref.current;
}
```

### 2.3.4 Self review

1. You code a custom hook when you want to avoid duplication.
1. The custom hook should use at least one built-in React hook
   A custom hook is a function that calls other React hooks internally.
1. While many custom hooks return some value or object, returning a value is not mandatory.
1. A custom hook can perform side effects or manage state internally without returning anything.
1. The key aspect is that it uses React hooks internally, not necessarily that it returns something.

### 2.3.5 Knowledge check: Advanced Hooks

- `useReducer` is a hook that takes a reducer function and an initial state, then returns the current state and a dispatch function to send actions. It does not take the initial state and an action directly to return the new state.
- `useReducer` (not `useState`) is better suited for **complex state logic** or when the next state depends on the previous one.
- **Managing state** should be done with `useState` or `useReducer`. `useRef` does not trigger re-renders, so it is not suitable for controlling state that affects rendering.
- **Side effects** are typically handled with `useEffect`. `useRef` can store values across renders but is not meant for managing side effects themselves.
- **Memoization** of expensive computations is done with useMemo or useCallback, not useRef. While useRef can store any mutable value, it doesn't provide memoization semantics.
- A common use case for useRef is to access DOM elements directly, such as focusing an input.
- Building your own hooks allows you to extract and reuse component logic.
- useState provides a way to manage state within React **components**.

### 2.3.6 Module quiz: React Hooks and Custom Hooks

- It is a way to get individual items from an array of items, and save those individual items as separate components.

- With array destructuring, you are free to give any variable name to the items that you destructure from an array. Contrary to that, when destructuring objects, you have to destructure a property of an object using that exact property's name as the name of the destructured variable.
- The useEffect hook is a way to **handle a side effect**.
- an example of a side effect with which you’d need to use a useEffect hook Run a Fetch API call in React.
- The useState hook starts with an initial state, but the useReducer hook gets a reducer function in addition to the initial state.
- JavaScript is a single-threaded language, meaning it can only do a single thing at any given time.

### 2.3.7 Additional Resources

The [useReducer hook referenceOpens in a new tab](https://react.dev/reference/react/useReducer) in the React docs discusses the basics of useReducer, along with specifying initial state and lazy initialization.
The React docs also has a reference on [using the useRef hookOpens in a new tab](https://react.dev/reference/react/useRef) which is a great example of various options that are available when working with the useRef hook.
The [Reusing Logic with Custom HooksOpens in a new tab](https://beta.reactjs.org/learn/reusing-logic-with-custom-hooks) reference in the React docs discusses the dynamics of custom hooks and provides a few practical examples to complement the theory behind them.

# 3. Advanced JSX concepts

## 3.1 JSX, components, and elements

JSX (JavaScript XML) is a syntax extension for JavaScript used in React to describe user interfaces in a way that looks like HTML but allows embedding JavaScript logic directly within markup. JSX enables developers to write components—reusable pieces of code that return React elements, which are objects describing what should appear on the screen. While JSX looks like HTML, it is not directly understood by browsers; it must be transpiled (e.g., by Babel) into JavaScript that creates these React elements.

In React’s declarative model, the UI is described as a tree of components using JSX. When React processes this JSX, it creates a tree of plain JavaScript objects called elements, each with a type (such as a tag name or component function) and props (properties and children). These elements are lightweight descriptions, not actual DOM nodes, making them easy and fast to compare and update.

When rendering, React repeatedly asks each component what elements it should produce, nesting components and DOM nodes as needed. This process results in a virtual DOM—a JavaScript representation of the actual DOM. When the UI changes, React generates a new element tree, compares it to the previous one, and efficiently updates only the parts of the real DOM that changed. This approach enables React to deliver high-performance, predictable updates and modular, maintainable code.

For example, React would identify a component named `DeleteButton` as a function and ask that component what element it renders to, with the given props. The `DeleteButton` component would return an element that describes a button with the text "Delete". React would then create a DOM node for that element and render it to the screen.

## 3.2 Component composition with children

The children prop is a feature that enables powerful component composition, making components more robust and reusable. Component composition leverages two key concepts:

1. **Containment**: where components act as generic containers for unknown children, like dialogs or sidebars
2. **Specialization**: where specialized components are built as specific cases of generic ones.

### For example

A generic `Dialog` component can use the children prop to display any content, while a `ConfirmationDialog` is a specialized case of `Dialog` with specific content.

### Practical examples

such as building account management dialogs for an app, show how to use the children prop to pass JSX elements and create flexible UI components.

## 3.3 Types of children

- In JSX, content between a component’s opening and closing tags is passed as a special prop called `children`.
- Children can be strings, JSX elements, JavaScript expressions, functions, or even special values like `null` and `false`.

### 3.3.1 String literals

You can pass a simple string as children:

```jsx
<MyComponent>Kiwi Shop</MyComponent>
```

JSX **trims whitespace** at the start/end of lines and removes blank lines. Newlines next to tags are removed, and newlines in the middle of string literals become a single space.

All the following render identically:

```jsx
<MyComponent>Kiwi Shop</MyComponent>

<MyComponent>  Kiwi Shop     </MyComponent>

<MyComponent>
    Kiwi Shop
</MyComponent>

<MyComponent>

    Kiwi Shop
</MyComponent>

<MyComponent>
    Kiwi
      Shop
</MyComponent>
```

### 3.3.2 JSX elements

You can nest JSX elements as children:

```jsx
<Alert>
  <Title />
  <Body />
</Alert>
```

Children can be a mix of string literals and JSX elements:

```jsx
<Alert>
  <div>Are you talking to me?</div>
  <Body />
</Alert>
```

To return multiple elements without extra DOM nodes, use **React Fragments**:

```jsx
<React.Fragment>
  <li>Pizza margarita</li>
  <li>Pizza diavola</li>
</React.Fragment>

// or shorter syntax
<>
  <li>Pizza margarita</li>
  <li>Pizza diavola</li>
</>
```

### 3.3.3 JavaScript expressions

You can pass JavaScript expressions as children using `{}`:

```jsx
<MyComponent>{"Little Lemon"}</MyComponent>
```

Useful for rendering lists:

```jsx
function List() {
  const desserts = ["tiramisu", "ice cream", "cake"];
  return (
    <ul>
      {desserts.map((dessert) => (
        <Item key={dessert} title={dessert} />
      ))}
    </ul>
  );
}
```

You can mix expressions with other children:

```jsx
<div>Hello {props.name}!</div>
```

### 3.3.4 Functions as Children

The children prop can also be a function, enabling advanced patterns for sharing functionality (details in further lessons).

### 3.3.5 Booleans, Null, and Undefined

are valid children but **don’t render anything**:

```jsx
<div />
<div></div>
<div>{false}</div>
<div>{null}</div>
<div>{undefined}</div>
<div>{true}</div>
```

These are useful for **conditional rendering**:

```jsx
<div>{showModal && <Modal />}</div>
```

## 3.4 Manipulating children dynamically in JSX

React’s **children** prop is a special prop available in all components that allows components to consume nested elements. Beyond just reading children, React provides powerful APIs to _manipulate and transform children dynamically_.

### 3.4.1 Two key react APIs for this are:

1. React.cloneElement

- Clones a React element and returns a new copy with additional or modified props.
- Useful for modifying, adding, or extending children’s props without mutating the original elements.

1. React.Children.map

- Iterates over children elements and applies a function to each, similar to the array map method.
- Allows transforming children and returning new elements.

### 3.4.2 Practical Example

In a restaurant order app, each customer order is displayed as a row with details (dish name, amount, price, time, customer name). Initially, all items appear cramped with no spacing.

```jsx
const Row = ({ children }) => {
  //for create space
  const childStyle = {
    marginLeft: `${spacing}px`,
  };

  return (
    <div className="Row">
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          style: {
            ...child.props.style,
            ...(index > 0 ? childStyle : {}),
          },
        });
      })}
    </div>
  );
};

function LiveOrders() {
  return (
    <div className="App">
      <Row spacing={32}>
        <p>Pizza Margarita</p>
        <p>2</p>
        <p>30$</p>
        <p>18:30</p>
        <p>Json</p>
      </Row>
    </div>
  );
}
```

By combining React.Children.map and React.cloneElement:

1. Iterate over each child element.
2. Add a custom spacing prop to set horizontal margin (except for the first child).
3. Use cloneElement to add/merge a style prop with left margin for spacing.

This results in a clean, spaced layout where each piece of order information is clearly separated, improving readability and usability.

## 3.5 Build a Radio Button Group Component

```jsx
import * as React from "react";

export const RadioGroup = ({ onChange, selected, children }) => {
  const RadioOptions = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      onChange,
      checked: child.props.value === selected,
    });
  });
  return <div className="RadioGroup">{RadioOptions}</div>;
};

export const RadioOption = ({ value, checked, onChange, children }) => {
  return (
    <div className="RadioOption">
      <input
        id={value}
        type="radio"
        name={value}
        value={value}
        checked={checked}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
      <label htmlFor={value}>{children}</label>
    </div>
  );
};
```

## 3.6 Spread Operator

The spread operator `(...)` is a powerful JavaScript feature that simplifies common tasks like cloning and merging objects or arrays. In React, it’s especially useful for handling props because props are just objects.

```jsx
function OrderList() {
  const order = {
    id: 1,
    username: "Pepito",
    item: "Pizza Margarita",
    price: 30,
    time: "18:30",
  };
  return <Order {...order} />;
}
```

### Key points

- The spread operator can copy an object or merge multiple objects by spreading their properties.
- In React components, it allows you to forward all native DOM props easily without listing each one manually, making components more flexible and easier to maintain.
- Example: A custom Button component wraps a native HTML button and forwards all its props using the spread operator, while also handling custom props like type.
- You can create specialized components (e.g., LoginButton) that pre-configure some props but still forward others using the spread operator.
- Order matters: The position where you spread props affects which props take precedence. Spreading props last can override previously set props, and vice versa.
  This behavior is important to understand to avoid unintended overrides, especially for event handlers like onClick.

### Takeaways

- The spread operator enables clean, flexible, and reusable React components.
- It helps forward props automatically, reducing boilerplate.
- Be mindful of the order of spreading props to control which props override others.
- Proper use of the spread operator improves component APIs and developer experienc

## 3.7 Knowledge check

### react -> jsx

what would be the equivalent object representation (Element) that React will create internally?

```jsx
<button className="button-primary">
  <div>Submit</div>
</button>
```

Answer:

```jsx
 {
    type: "button",
    props: {
        className: "button-primary",
        children: {
            type: "div",
            props: {
                children: "Submit",
            }
        },
    },
}
```

### the concept of component specialization?

A component defined as a special case of another more generic component.

### Clone

You would like to clone a React element by using the React.cloneElement API, where the particular element has the below structure:

```jsx
const buttonElement = {
  type: SubmitButton,
  props: {
    color: "green",
    children: "Submit!",
  },
};
```

What would be the value of the variable output when using the API with the following parameters?

```jsx
const output = React.cloneElement(buttonElement, {disabled: true, color: “blue” });
```

Answer:

```jsx
{
  type: SubmitButton,
  props: {
    color: "blue",
    children: "Submit!",
    disabled: true,
  },
};
```

#### What is output?

- React.cloneElement merges props, overriding existing ones with new ones.
- So color changes from `"green"` to `"blue"`, and disabled is added.
- `children` remains unchanged.

### Spread Operator

Imagine you are using the spread operator in the below component as follows:

```jsx
const props = { title: "tiramisu", cal: 400 };
const element = <Component title="cake" {...props} cal={500} />;
```

What would be the value of element.props?

#### Answer

```jsx
{ title: "cake", cal: 500, }
```

#### What is element.props?

- Props are merged left to right.
- `title="cake"` is overridden by `title="tiramisu"` from `{...props}`.
- `cal=400` from `{...props}` is overridden by `cal=500` after spread.

## 3.8 Cross-cutting concerns in React

### In summary:

- Cross-cutting concerns are generic functionalities needed throughout an app.
- Components alone aren’t always sufficient for reusing such logic.
- Higher-order components (HOCs) are a React pattern that encapsulate and share cross-cutting logic efficiently by enhancing components with new behavior.

###

When building React applications, you often encounter generic functionality—such as permissions, error handling, or logging—that is needed in many places but isn’t specific to your app’s business logic. These are called cross-cutting concerns. While React components are designed for code reuse, they aren’t always the best solution for sharing this kind of logic.

### For example

Both a live orders list and a newsletter subscribers list in an app require similar subscription logic: subscribing to a data source on mount, updating state when data changes, and unsubscribing on unmount. Repeating this logic in each component leads to duplication.

### Solution

One solution is to use custom hooks, but this makes all components that need the logic stateful and requires changes to each component. A better approach for sharing such logic across multiple, otherwise stateless components is to use higher-order components (HOCs). An HOC is a function that takes a component and returns a new component with enhanced capabilities, such as handling subscriptions and passing updated data as props, without modifying the original component’s implementation.

### what allows

This pattern allows you to define the subscription logic once and reuse it across different components, making your code more efficient and maintainable. The video also mentions that there are other patterns for handling cross-cutting concerns, such as render props, which will be covered separately.

## 3.9 Higher-order components

A Higher-Order Component (HOC) is a function that takes a component as input and returns a new component with extra features or logic added. Is like a way to "wrap" your original component to give it new abilities, without changing the original component itself.

Higher-order components (HOCs) are a React pattern for abstracting shared logic by wrapping a component and returning an enhanced version. Here are the key best practices and caveats:

### Best Practices

- Never mutate the original component:
  - HOCs should be pure functions. Do not change or mutate the component passed as an argument. Always return a new component to maintain React's principle of immutability.
- Always pass unrelated props through:
  - HOCs should not interfere with the original contract of the wrapped component. Pass all unrelated props down to ensure flexibility and reusability. This is typically done by spreading props onto the wrapped component.
- Maximize composability:
  - Use the signature Component => Component for HOCs, which makes them easy to compose together. Currying and composition patterns (like those in Redux or Ramda) allow you to combine multiple HOCs cleanly.

### Caveats

- Do not create HOCs inside other components:
  - Always define enhanced components outside of render functions or component bodies. Creating HOCs inside components can cause unnecessary remounting, resulting in loss of state.
- Refs are not passed through by default:
  - React refs are not regular props and will refer to the outer HOC, not the wrapped component. To forward refs, use React.forwardRef.

### Conclusion

- Never mutate the component inside a HOC.
- Always pass unrelated props to the wrapped component.
- Leverage the composable nature of HOCs for scalable code.
- Avoid creating HOCs inside component bodies.
- Use React.forwardRef to handle refs properly.

These practices ensure your HOCs are robust, reusable, and play well with the rest of your React codebase.

## 3.10 Render props

Higher-order components (HOCs) in React are functions that take a component and return a new, enhanced component, allowing reuse of shared logic across multiple components without modifying the originals. Key best practices include:

1. **Never mutate the original component** inside the HOC; instead, use com position to return a new component, preserving immutability.
2. **Pass all unrelated props through to the wrapped component** to maintain its original interface and ensure flexibility and reusability.
3. **Maximize composability** by using the signature Component => Component, often leveraging currying to accept additional configuration arguments. This pattern facilitates combining multiple HOCs via composition utilities like compose.

### Caveats to watch for

1. **Do not create HOCs inside other components' render functions** because this causes remounting and loss of state; always define enhanced components outside component scopes.
1. **Refs are not passed through HOCs by default**; to forward refs to the wrapped component, use React.forwardRef.

### In summary

HOCs provide a powerful pattern for code reuse and abstraction by wrapping components without mutation, passing props transparently, and enabling composition, while requiring careful handling of component identity and refs.

## 3.11 Why React Testing Library

To guarantee that the Little Lemon Restaurant app works as intended, relying solely on manual testing is insufficient due to its tediousness, error-proneness, and scalability issues. Instead, implementing automated testing is essential. Here’s a summary of best practices and approaches for testing React components effectively, as demonstrated in your scenario:

### Why Testing Matters

1. Automated tests help catch defects early, ensuring software quality before delivery.
1. They reduce user complaints and save time and money by preventing bugs from reaching production.
1. Tests provide confidence that your app behaves as expected even as it grows more complex.

### Best Practices for Writing Tests

1. **Avoid testing implementation details**: Tests should interact with actual DOM nodes, not React internals, reflecting how users experience the app.
1. **Test behavior over structure**: The more your tests resemble real user interactions, the more reliable they are.
1. **Maintain test stability**: Tests should not break due to internal refactors that don’t change functionality, ensuring maintainability.
1. **Use clear test structure**: Follow the Arrange-Act-Assert (AAA) pattern to keep tests readable and organized.
1. **Test one behavior per test case**: Avoid overloading tests with multiple assertions to simplify debugging.

### Tools to Use

1. **Jest**: A JavaScript test runner that uses JSDOM to simulate a browser environment, supports mocking modules to isolate tests, and provides utilities like expect for assertions.
2. **React Testing Library**: Provides utilities like render and screen to test React components without relying on their implementation details, promoting best practices out of the box.

### Practical Example (from your scenario)

1. Import render and screen from React Testing Library.
2. Use render to mount the component in a simulated DOM.
3. Use screen.getByText to query for an element with specific text (e.g., "Little Lemon Restaurant").
4. Use Jest’s expect with matchers like toBeInTheDocument() to assert the element is present and visible.
5. If the test fails, check the component for issues (e.g., a typo in the text), fix it, and rerun the test to confirm success.

### Additional Recommendations

1. Start new React projects with Create React App, which includes Jest and React Testing Library pre-configured.
2. Write unit tests for individual components and integration tests to verify interactions between components.
3. Mock external dependencies (like API calls) to keep tests isolated and reliable.
4. Consider snapshot testing for stable UI components to catch unexpected changes.
5. Explore accessibility testing tools (like jest-axe) to ensure your app is inclusive.

### By following these practices

you ensure that your Little Lemon Restaurant app is thoroughly tested, maintainable, and reliable, providing a smooth experience for users and confidence for developers.

## 3.12 Continuous Integration (CI)

### CI Definition

Continuous Integration (CI) is a software development practice where developers frequently merge their code changes into a shared repository, often multiple times a day, using version control systems like Git. Each integration triggers an automated process that builds the application and runs tests to detect errors early, preventing faulty code from progressing further in the pipeline. This iterative approach contrasts with traditional methods where integration happens late in the development cycle, reducing risks and integration difficulties.

### CI Workflow

A typical CI workflow involves developers creating branches, committing code, and pushing changes to GitHub. The CI system then automatically builds the code and runs tests. If errors occur, developers are notified immediately to fix issues before deployment proceeds, often to a staging environment for further quality assurance.

### CI Benefits

It improves developer productivity by automating repetitive tasks, enables faster delivery of working software through continuous testing, and helps catch bugs early, making them easier to fix. Overall, CI fosters a faster, more reliable, and efficient software development process by shortening feedback loops and ensuring the codebase remains in a deployable state.

# 4. Project

## 4.1 About the final project

### What is the purpose of the portfolio project?

The primary purpose of an assessment is to check your knowledge and understanding of the key learning objectives of the course you have just completed. Most importantly, assessments help you establish which topics you have mastered and which require further focus before completing the course. Ultimately, the assessment is designed to help you make sure that you can apply what you have learned. This assessment's learning objective is to allow you to create a React application or App.

### How do I prepare for the portfolio project?

You will have already encountered exercises, knowledge checks, in-video questions and other assessments as you have progressed through the course.

The final project requires you to complete a portfolio in React. You will be provided with code snippets, and your task is to use these, plus any of your own code to complete your developers' portfolio.

This is a creative project, and the goal is to use as many React concepts as possible within this portfolio. You can use component composition, code reusability, hooks, manage state, interact with an external API, create forms, lists and so on.

You will be provided with code snippets and your task is to use these, plus any of your own code, to complete a portfolio app that contains:

A header with external links to social media accounts and internal links to other sections of the page.
A landing section with an avatar picture and a short bio.
A section to display your featured projects as cards in a grid fashion.
A contact me section with a form to allow visitors to contact you.

### Review the final project

You will take part in a peer review exercise in which you will submit your completed portfolio app for two of your peers to review. You will also be required to review two of your peers' portfolio apps.

When you submit your assignment, other learners in the course will review and grade your work. They will be looking at the Portfolio page functionality based on the following criteria:

Did the header have external links that take you to different social apps?
Did the header have internal links that, when clicked, will smoothly scroll into their corresponding section?
Was the landing section filled with an avatar, name and a short bio?
Did the project section display a 2x2 grid with each project rendered in a card widget?
Was the Contact Me form business logic implemented as per the requirements?
Was the header hidden/shown depending on the scroll direction? Did it happen with a smooth transition animation?
Can you suggest any improvements for the portfolio app?
You'll also need to give feedback on and grade the assignments of two other learners using the same criteria.

## 4.2 Popular external libraries

### 4.2.1 Chakra UI

- A popular React UI library offering simple, modular, and accessible pre-built components that speed up development.
- Components are organized by categories like layout, forms, typography, data display, feedback, and overlays.
- Layout components (e.g., HStack, VStack, Box) help arrange content with flexible spacing and styling.
- Typography components (Heading, Text) allow semantic and styled text rendering.
- Uses style props to apply CSS styles directly as component props, supporting camelCase and shorthand (e.g., bg for backgroundColor).
- Enables rapid UI building with customizable building blocks and a consistent design system.

### 4.2.2 Formik

- A React library that manages form state, validation, and submission to simplify form development.
- Provides hooks and components to handle repetitive form logic, letting developers focus on business logic.
- The main hook, useFormik, manages form values, errors, touched state, and handlers like handleSubmit and getFieldProps.

### 4.2.3 Yup

- A JavaScript schema validation library used with Formik for declarative, chainable validation rules.
- Allows defining readable validation schemas for form fields that integrate seamlessly with Formik’s validation system.

### How They Work Together

- Formik uses Yup schemas for form-level validation, enabling clean and maintainable validation logic.
- Chakra UI can be used alongside Formik to build visually consistent, accessible forms quickly.

These libraries help developers save time by handling UI components and form logic efficiently, allowing focus on core application functionality. Chakra UI provides a robust component foundation, while Formik and Yup streamline form creation and validation in React applications.
