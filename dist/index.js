/**
 * @author TroyTae
 * @version 0.4.2
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