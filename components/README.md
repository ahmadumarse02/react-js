# `Components`

In React, components are the building blocks of the UI. They let you split the UI into independent, reusable pieces and think about each piece in isolation. There are two main types of React components:

## `1.Functional Components`

These are plain JavaScript functions that return JSX (a syntax that looks like HTML inside JavaScript).

Best suited for simpler structures or modern development, as they support React Hooks.

### `Example`
```
function Greeting() {
  return <h1>Hello, Umar!</h1>;
}

export default Greeting;
```

## `Class Components`

- These are ES6 classes that extend the React.Component class.
- Used for more complex components (though React Hooks now cover most of their functionality)

### `Example`

```
import React, { Component } from 'react';

class Greeting extends Component {
  render() {
    return <h1>Hello, Umar!</h1>;
  }
}

export default Greeting;
```