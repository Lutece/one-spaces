/**
 * @author TroyTae
 * @version 1.1.5
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
      className += (
        arg.pop ?
          OneSpaces.apply(0, arg) :
          arg + ' '
      );
    }
  }
  return className;
}

module.exports = OneSpaces;
