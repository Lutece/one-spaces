/**
 * @author TroyTae
 * @version 0.5.1
 * @name one-spaces
 */
'use strict';function index () {
    var className = '';
    var i = arguments.length;
    while (i--) {
        className += (' ' + arguments[i]);
    }
    return className;
}module.exports=index;