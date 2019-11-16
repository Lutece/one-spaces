/**
 * @author TroyTae
 * @version 0.4.1
 * @name one-spaces
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.OneSpaces = factory());
}(this, (function () { 'use strict';

  function index () {
      var className = '';
      var i = arguments.length;
      while (i--) {
          className += (' ' + arguments[i]);
      }
      return className;
  }

  return index;

})));
