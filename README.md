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
OneSpacesMin('cls1', 'cls2', 'cls3');
```

### array

```javascript
OneSpacesMin(['cls1', 'cls2'], ['cls3']);
```

### mix

```javascript
OneSpacesMin('cls1', null, ['cls2', 'cls3']);
```

## License
MIT © Troy Tae
