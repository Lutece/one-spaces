/**
 * @author TroyTae
 * @version 0.2.3
 * @name one-spaces
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.OneSpaces = factory());
}(this, (function () { 'use strict';

  function index () {
      console.log('one-spaces');
  }

  return index;

})));
