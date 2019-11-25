/**
 * @author TroyTae
 * @version 1.1.1
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
