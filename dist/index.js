/**
 * @author TroyTae
 * @version 1.0.0
 * @name one-spaces
 */
'use strict';

function isString(argument) {
  return typeof argument === 'string';
}

function OneSpaces() {
  this.className = '';
}

OneSpaces.prototype.addClass = function(className) {
  if (this.className) {
    this.className += ' ';
  }
  this.className += className;
};

function index () {
  var
    key,
    argument,
    index = arguments.length,
    instance = new OneSpaces()
  ;
  while (index--) {
    if ((argument = arguments[index])) {
      if (isString(argument)) {
        instance.addClass(argument);
      } else if (typeof argument === 'object') {
        if (Array.isArray(argument) && (key = argument.length)) {
          while (key--) {
            if (isString(argument[key])) {
              instance.addClass(argument[key]);
            }
          }
        } else {
          for (key in argument) {
            if (argument[key]) {
              instance.addClass(key);
            }
          }
        }
      }
    }
  }
  return instance.className;
}

module.exports = index;
