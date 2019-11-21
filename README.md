# One Spaces
A tiny module for making className 😎

## Performance
I wanna create a small and fast library.  
Please see our [benchmark](./bench/README.md) test result!

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
OneSpaces('cls1', 'cls2');
```

### array

```javascript
OneSpaces(['cls1', 'cls2']);
```

### exclude falsy

```javascript
OneSpaces(null, true && 'cls1', false && 'cls2');
```

### mix

```javascript
OneSpaces('cls1', false && 'none', ['cls2']);
```

## License
MIT © Troy Tae
