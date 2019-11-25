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

### arguments

```javascript
OneSpaces('cls1', 'cls2', 'cls3') === 'cls3 cls2 cls1 '
```

### array

```javascript
OneSpaces(['cls1', 'cls2'], ['cls3']) === 'cls3 cls2 cls1 '
```

### exclude falsy

```javascript
OneSpaces('cls1', null, 'cls2', false && 'none', true && 'cls3') === 'cls3 cls2 cls1 '
```

### mix

```javascript
OneSpaces(['cls1', 'cls2'], null, 'cls3') === 'cls3 cls2 cls1 '
```

## License
MIT © Troy Tae
