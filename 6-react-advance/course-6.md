# Course 6: Advanced React

# 1. Components
## 1.1. Introduction

## 1.2 Rendering lists in JS

## 1.2.1 Transfornming lists in javascript

Sometimes you need to  transform differnet elements before displaying them in the browser. We can use map method to transform lists of data.

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
The general rule of thumb with keys is to use a stable identifier that is unique among its siblings.  This allows React to reuse as many elements from the list as possible, avoiding unnecessary recreations

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
        setValue(e.target.value)
    }

    return (
        <form>
            <input
                value={value}
                onChange={handleChange}
                type="text"
            />
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
        <form onSubmit={hanfleSubmit}>
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
1. Handle form submission with an onSubmit handler on the <form> element.
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

| Aspect       | Props                  | State                             |
|--------------|------------------------|-----------------------------------|
| Analogy | Custom choices made by the restaurant manager|Changing conditions like user actions|
| Definition| Configuration passed from parent components|Internal data managed by the component|
| Mutability| Immutable(cannot be changed by the component)| Mutable(can updated within component)|
| Source     | Comes from parent components | Defined and updated within the component |
| Usage      | Used for static data     | Used for dynamic, interactive data|
| Trigger for re-render| Yes (when props change)| Yes (when state changes)  |
| Deterministic? | Yes                  | Yes                               |
| Lifecycle  | Received once when rendered | Initialised on mount, updated over time |
| Visibility | Public (accessible to child components) | Private (only to the component itself) |
| Typical Use | Display values, configure children | Track form input, toggle elements, fetch status|
| **Component type** | Stateless (only props) | Stateful (uses both props and state) |
| Complexity  | Lower , easier to test   | high, harder to test            |

### 1.4.2 What is Context?

In a typical React application, data is passed from parent to child components using props in a top-down manner. However, when multiple components need access to the same piece of data—such as theme preferences or user information—relying solely on props becomes inefficient and leads to what is known as *"props drilling"*, where props must be passed through many intermediate components that do not directly use the data. To address this problem, React introduced the Context API, which allows developers to share global data across components without manually passing props at every level of the component tree.

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
    When a context values changes, all componenets consuming that context re-render.

1. **Intermediate components also re-render**:
    If a parent component re-renders, React by default will re-renders all his children, even if they don't use the context or props changed.

1. **Use `React.memo` to prevent unnecessary re-renders**:
    Wrapping components with `React.memo` tells Ract to skip re-rendering if props haven't changed.
    ```jsx
    const ComponentA = React.memo() => <ComponentB />
    ```

1. **Beware of object references in context values**:
    If you pass an object as the context value, React will re-render consumers whenever the object reference changes - even if the object's contents are the same.
    ```jsx
    const value = { a: 'hi', b: 'bye'};
    <AppContext.Provider value={value}>...</AppContext.Preovider>
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

#### Best general choice for keys in list items:

- Using an ID coming from the data, that points to the database ID.
    Explanation: Keys should be unique and stable identifiers that don’t change between renders. Using IDs from your data (e.g., database IDs) guarantees uniqueness and stability, which helps React efficiently update the list.
- Using a generated ID is okay if it guarantees no duplication and is stable.
- Using an index is generally discouraged unless the list is static and never reordered or changed.

#### Correct ways to render dynamic list items like <li>Ice cream - 200 cal</li>:
<li>{item.name} - {item.cal} cal</li>
<li>{${item.name} - ${item.cal} cal}</li>

Explanation: Both correctly interpolate dynamic values in JSX. The first uses JSX expressions directly, the second uses template literals inside JSX.
<li>{Ice cream - 200 {item.cal}}</li> is invalid JSX syntax.

#### Best place to add a new item from React’s diffing algorithm point of view:

- The end.

Explanation: Adding new items at the end minimizes reordering and re-rendering of existing list items. Adding at the beginning or middle causes React to potentially re-render or reorder many items, which is less efficient.

#### Controlled components are:

- A set of components whose internal state is controlled by React.

Explanation: Controlled components have their form element values (like inputs) managed by React state, meaning React dictates their current value and updates.

#### What can you achieve with uncontrolled components?
- One time value retrieval on submit using a React ref.
- Validation on submit.

Explanation: Uncontrolled components rely on the DOM to manage their state. You can access their current value via refs on submit and perform validation then.

#### Argument to provide to `useContext` hook:
- The Context object obtained via the `createContext` call.

Explanation: useContext consumes the context object returned by React.createContext(), not the Provider component or state.

#### Sequence of re-renders if App re-renders and ComponentA is wrapped in React.memo:
```jsx
const App = () => {
  return(
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
const [v1,v2, v3] = veggies;
```

When the structuring objects, you have to destructure a property of an object using that exact properties name as the name of the destructured variable. This makes objects a lot stricter in terms of what you can name your destructured variables. For that reason, react uses the array data structure for the used state hooks return value.

### How useState works

useState lets you add and update data (state) in your React components.

When you call  `useState, it gives you two things:
1. The current value of your state.
2. A function to update that value.

```jsx
const [vg1, vg2, vg3] = ["Carrot", "Briccoli", "Peas"];
```

### How to Use useState

1. Import useState
```jsx
import React, { useState } from 'react';
```

2. Set up state
```jsx
const [restaurantName, setRestaurantName] = useState("Lemon");
// restaurantName is "Lemon" at first
// setRestaurantName is the function to change it
```

3. Update state
    Never change the state variable directly.
    Always use the setter function(`setRestaurantName`).
    ```jsx
    setRestaurantName("Little Lemon");
    ```

### Full code

```jsx
import {useState} from 'react';

function App (){
    const [pizzaName, setPizzaName] = useState("Hawaian");

    function updatePizzaName(){
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

b.foo = 2;       // Changes b.foo only; a.foo remains 1
b.bar.a = 3;     // Changes b.bar.a AND a.bar.a, because bar is shared
```
**foo**: a primitive value 1
**bar**: a nested object { a: 2 }

The spread operator `(...a)` creates a *shallow copy* of `a`.
Changing `b.foo` to 2 affects only `b` because `foo` was copied by value.
Since `bar` was copied by reference (shallow copy), both `a.bar` and `b.bar` point to the same nested object.

### 2.1.3 Managing state

```jsx
import { useState } from "react";

export default function App() {
  const [giftCard, setGiftCard] = useState(
    {
        firstName: "Jennifer",
        lastName: "Smith",
        text: "Free dinner for 4 guests",
        valid: true,
        instructions: "To use your coupon, click the button below.",
    }
  );

  function spendGiftCard() {
    setGiftCard(prevState => {
        return {
          ...prevState,
          text: "Your coupon has been used.",
          valid: false,
          instructions: "Please visit our restaurant to renew your gift card.",
        }
    });
  }

  return (
    <div style={{padding: '40px'}}>
      <h1>
        Gift Card Page
      </h1>
      <h2>
        Customer: {giftCard.firstName} {giftCard.lastName}
      </h2>
      <h3>
        {giftCard.text}
      </h3>
      <p>
        {giftCard.instructions}
      </p>
      {
        giftCard.valid && (
          <button onClick={spendGiftCard}>
            Spend Gift Card
          </button>
        )
      }
    </div>
  );
}
```

### 2.1.4 What are side effects?

Impure functions have side effects, and pure don't have.

#### Pure Function
A pure function should receive specific input. That is a specific parameter will always return the exact same output, no matter how many times get invoked.

```jsx
function EstablishedYear(props){
    return <h1>Established year: {props.year}</h1>
}

function App(){
    return <EstablishedYear year={2003} />
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
| Without `useEffect`                   | With `useEffect`                 |
|---------------------------------------|----------------------------------|
| Side effect (SE) runs on every render | SE runs when dependencies change |
| Can cause unnecessary/repeated updates| Efficient, runs only when needed |
| May block/interfere with rendering    | Runs asynchronously after render |
| Harder to manage cleanup              | Supports cleanup functions       |

#### 1. Without a dependency array:
By default, if no second argument is provided to the useEffect function, the effect will run after every render.
```jsx
useEffect(()=>{
    document.title = 'Little Lemon';
});
```

#### 2. With an empty dependency array ([]):
Runs only once, right after the component mounts.
The effect will not run again on re-renders or updates.
```jsx
useEffect(()=>{
    document.title = 'Little Lemon';
}, []);
```

#### 3. With a dependency array ([something]):
However it may cause performance issues. A way to instruct React to skip applying an effect is passing an array as a second parameter to `useEffect`. the integer variable version is passed as the second parameter. That means that the effect will only be re-run if the version number changes between renders.
```jsx
useEffect(() => {
  document.title = `Little Lemon, v${version}`;
}, [version]); // Only re-run the effect if version changes
```

#### 4. With multiple Effects to Separate Concerns

React doesn’t limit you in the number of effects your component can have. In fact, it encourages you to group related logic together in the same effect and break up unrelated logic into different effects.
```jsx
function MenuPage(props){
    const [data, setData] = useState([]);

    useEffect(() => {
        document.title = 'Little Lemon';
    }, []);

    useEffect(() => {
        fetch(`https://caribou/menu/${id}`)
            .then(response => response.json())
            .then(json => setData(json));
    }, [props.id]);
}
```

React will make sure to run the cleanup logic when it’s needed. The execution will always happen when the component unmounts. However, in effects that run after every render and not just once, React will also clean up the effect from the previous render before running the new effect next time.

### 2.1.6 Using the useEffect hook

```jsx
import React from "react";
import './App.css';

function App() {
    const [toggle, setToggle] = React.useState(false);

    const clickHandler = () => {
        setToggle(!toggle);
    }

    React.useEffect (() => {
        document.title = toggle? "Welcome to Little Lemon": "Using the useEffect hook";
    }, [toggle]);

    return (
        <div>
            <h1>Using the useEffect hook</h1>
            <button onClick ={clickHandler}>
                Toggle message
            </button>
        </div>
    )
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
4. Always make these  multiple hook calls in the same sequence.


### 2.2.2 What you need to know before fetching data

The Fetch function in JavaScript is a tool used to retrieve data from the web, typically by making server requests to get JSON data. To understand how Fetch works, it’s important to grasp how JavaScript handles tasks.

JavaScript is **single-threaded**, meaning it can only do one thing at a time. Using a metaphor of a post office clerk, JavaScript handles tasks sequentially, which can cause delays if one task takes time. To overcome this, JavaScript delegates tasks to browser APIs (external helpers), allowing it to continue working on other things while waiting for responses. This delegation is called **asynchronous JavaScript**.

In practice, when JavaScript calls the Fetch API to request data, it doesn’t wait for the response. Instead, it continues executing subsequent code. Once the Fetch API returns the data (e.g., from a third-party API like randomuser.me), JavaScript processes it and logs the result.

The Fetch function acts as a *facade*, appearing as a JavaScript function but actually calling browser functionality outside of JavaScript itself.
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



















# 3. Advanced JSX concepts

## 3.1

# 4. Project

## 4.1
