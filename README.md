# react-justu
A cool library that contains set of tools for common implementations
## Installation

Using npm:

```shell
$ npm i react-tool-box --save-dev
```

Using yarn:

```shell
$ yarn add -D react-tool-box
```

## Usage

```jsx
import { useRef } from "react";
import { useClickOutside } from "react-tool-box";

export const MyComponent = () => {
  const wrapperRef = useRef(null);

  const doSomething = () => {
    alert("hello");
  };
  useClickOutside(wrapperRef, doSomething);

  return (
    <div>
      <div ref={wrapperRef}>Click outside</div>
    </div>
  );
};
```
