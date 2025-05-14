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




# 2. React Hooks

# 3. Advanced JSX concepts


# 4. Project
