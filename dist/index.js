/**
 * @author TroyTae
 * @version 1.0.3
 * @name one-spaces
 */
'use strict';

function OneSpaces() {
  var
    arg,
    args = arguments,
    index = args.length,
    className = ''
  ;
  while (index--) {
    if (arg = args[index]) {
      if (className) {
        className += ' ';
      }
      if (Array.isArray(arg)) {
        className += OneSpaces.apply(null, arg);
      } else {
        className += arg;
      }
    }
  }
  return className;
}

module.exports = OneSpaces;
