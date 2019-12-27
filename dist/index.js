/**
 * @author TroyTae
 * @version 1.1.6
 * @name one-spaces
 */
'use strict';

function OneSpaces() {
  var
    arg,
    className = '',
    index = arguments.length
  ;
  while (index--) {
    if (arg = arguments[index]) {
      if (className) {
        className += ' ';
      }
      className += (
        arg.pop
          ? OneSpaces.apply(0, arg)
          : arg
      );
    }
  }
  return className;
}

module.exports = OneSpaces;
