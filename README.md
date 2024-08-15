
# SnaterJ Framework

Snaterj is a JavaScript framework I created, designed primarily for learning purposes (it may crush , ofc  lol ) .

SSX, a JSX-like syntax, was developed specifically for Snaterj.

## Features

- Component-based architecture
- Simple state management
- Built-in routing system
- JSX-like syntax with SSX tags

## Getting Started

### Prerequisites

Ensure you have Node.js and npm installed on your system.

### Installation

1. Clone the repository or create a new project:


2. Install the dependencies:

```bash
npm install
```

### Development

To start the development server and watch for changes:

```bash
npm run watch
```

This command will start the Rollup bundler in watch mode, automatically recompiling your code as you make changes.

### Serving the Application

To serve your application locally:

```bash
npm run serve
```


## Understanding SSX Syntax

**SSX** is a custom syntax i  created for the SnaterJ cuz why not lol.

### Basic Structure

* **Wrapping in `<ssx>` tag:** All SSX code must be enclosed within `<ssx>` and `</ssx>` tags.

```markdown
<ssx>
  {/* Your SSX code here */}
</ssx>
```

* **JSX-like syntax:** SSX adopts a similar syntax to JSX, using HTML-like tags for components and attributes.

### JS Expressions

* **Embedding JavaScript:** You can embed JavaScript expressions within SSX using `#{ }#` delimiters.

```markdown
<ssx>
  <div>
    <h1>Hello, #{name}#</h1>
    <p>The result is: #{x + y}#</p>
  </div>
</ssx>
```

* **Exceptions:** Function names and variables used as attribute values or event handlers can be used directly without the `#{ }#` syntax.

```markdown
<ssx>
  <button on:click=handleClick>Click me</button>
</ssx>
```

### Components

* **Single-tag components:** Currently, SSX components are limited to single-tag elements.

```markdown
<ssx>
  <MyComponent prop1="value1" prop2=someValue />
</ssx>
```

**Example:**

```markdown
<ssx>
  <div>
    <h1>Welcome to Snater.js</h1>
    <p>This is a paragraph with #{dynamicValue}# </p>
    <button on:click=handleClick >Click me</button>
  </div>
</ssx>
```



**Note:**  SSX is currently limited in its features, Future enhancements might  more complex expressions, and additional features to improve its capabilities.


## Usage

Here's a basic example of a Snater.js component:

```javascript
import { defineComponent, router } from "snaterj/dist/snaterj";

const Counter = defineComponent({
  state() {
    return {
      count: 0
    }
  },
  render() {
    const { count } = this.state

    const increment = () => {
      this.updateState({ count: count + 1 })
    }

    return (
      <ssx>
        <div>
          <h1>Counter: #{count}#</h1>
          <button on:click={increment}>Increment</button>
        </div>
      </ssx>
    )
  }
});

router.registerRoute("/counter", Counter);
```

## Routing

Snaterj includes a simple routing system. Use the `Link` component for navigation and `router.registerRoute` to define routes:

```javascript
import { Link, router } from "snaterj/dist/snaterj";

// In your component
<Link link="/counter" text="Go to Counter" />

// Registering routes
router.registerRoute("/", HomeComponent);
router.registerRoute("/counter", CounterComponent);
```

## Building

To build your application :

```bash
npm run build
```
