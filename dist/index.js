/**
 * @author TroyTae
 * @version 1.0.1
 * @name one-spaces
 */
'use strict';

function joinClassName(className1, className2) {
  if (className1) {
    className1 += ' ';
  }
  return className1 + className2;
}

function index () {
  var
    key,
    argument,
    index = arguments.length,
    className = ''
  ;
  while (index--) {
    if (argument = arguments[index]) {
      if (typeof argument == 'string') {
        className = joinClassName(className, argument);
      } else if (Array.isArray(argument)) {
        key = argument.length;
        while (key--) {
          if (argument[key]) {
            className = joinClassName(className, argument[key]);
          }
        }
      } else {
        for (key in argument) {
          if (argument[key]) {
            className = joinClassName(className, key);
          }
        }
      }
    }
  }
  return className;
}

module.exports = index;
