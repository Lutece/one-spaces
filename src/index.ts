export default function() {
  let k;
  let argument;
  let className = '';
  let i = arguments.length;
  while (i--) {
    argument = arguments[i];
    if (typeof argument === 'object') {
      for (k in argument) {
        if (argument[k]) {
          className += (' ' + k);
        }
      }
    } else {
      className += (' ' + argument);
    }
  }
  return className;
}
