# react-justu
A cool library that contains set of tools for common implementations
## Installation

Using npm:

```shell
$ npm i react-justu --save-dev
```

Using yarn:

```shell
$ yarn add -D react-justu
```

## Usage

```jsx
import { useRef } from "react";
import { useClickOutside } from "react-justu";

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
