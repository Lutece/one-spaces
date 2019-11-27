[![npm](https://badge.fury.io/js/one-spaces.svg)](https://www.npmjs.com/package/one-spaces)

# One Spaces
A tiny(121B) module for making className 😎
## Installation

### npm (commonjs)
```shell script
npm install one-spaces
```

### browser (iife)
Please [download](./dist/one-spaces.js) this file.  
And embed script tag in your document.
```html
<script src="./dist/one-spaces.js"></script>
```

## Example

### VanillaJS

```javascript
var el = document.getElementById('my-element');
// arguments
el.className = OneSpaces('cls1', 'cls2', 'cls3');
// array
el.className = OneSpaces(['cls1', 'cls2'], ['cls3']);
// exclude falsy
el.className = OneSpaces('cls1', null, 'cls2', false && 'none', true && 'cls3');
// mix
el.className = OneSpaces(['cls1', 'cls2'], null, 'cls3');
```

### React (jsx)

```jsx
import spaces from 'one-spaces';

export default () => {
  return (
    <div className={spaces(['cls1', 'cls2'], null, 'cls3')}>
      <span>Hello React!</span>
    </div>
  );
};
```

### Angular & Vue

Angular and Vue have their own system for className.  
Of course you can use this module with them but not recommended.

## License
MIT © Troy Tae
