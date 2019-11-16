const OBJECT_TYPE_LITERAL = 'object';

export default function() {
  let k;
  let argument;
  let className = '';
  let i = arguments.length;
  while (i--) {
    argument = arguments[i];
    if (typeof argument === OBJECT_TYPE_LITERAL) {
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
