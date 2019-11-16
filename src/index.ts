type Arguments = Array<string | object | Arguments>;

const OBJECT_TYPE_LITERAL = 'object';

function OneSpaces(...args: Array<string | object | Arguments>) {
  let k;
  let argument;
  let className = '';
  let i = arguments.length;
  while (i--) {
    argument = arguments[i];
    if (typeof argument === OBJECT_TYPE_LITERAL) {
      if (Array.isArray(argument)) {
        k = argument.length;
        while (k--) {
          className += ` ${OneSpaces(argument[k])}`;
        }
      } else {
        for (k in argument) {
          if (argument[k]) {
            className += ` ${k}`;
          }
        }
      }
    } else {
      className += ` ${argument}`;
    }
  }
  return className;
}

export default OneSpaces;
