/**
 * @author TroyTae
 * @version 0.3.5
 * @name one-spaces
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.OneSpaces = factory());
}(this, (function () { 'use strict';

  function index () {
      return arguments;
  }

  return index;

})));
