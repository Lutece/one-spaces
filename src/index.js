function isString(str) {
  return typeof str === 'string';
}

function spaceAfterClassName(className) {
  return className + ' ';
}

export default function () {
  var
    i = arguments.length,
    key,
    item,
    argument,
    className = ''
  ;
  while (i--) {
    if (argument = arguments[i]) {
      if (typeof argument === 'object') {
        if (Array.isArray(argument)) {
          key = argument.length;
          while (key--) {
            if ((item = argument[key]) && isString(item)) {
              className += spaceAfterClassName(item);
            }
          }
        } else {
          for (key in argument) {
            if (argument[key]) {
              className += spaceAfterClassName(key);
            }
          }
        }
      } else if (isString(argument)) {
        className += spaceAfterClassName(argument);
      }
    }
  }
  return className;
}
