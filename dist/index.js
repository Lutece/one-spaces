/**
 * @author TroyTae
 * @version 0.7.1
 * @name one-spaces
 */
'use strict';var OBJECT_TYPE_LITERAL = 'object';
function OneSpaces() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var k;
    var argument;
    var className = '';
    var i = arguments.length;
    while (i--) {
        argument = arguments[i];
        if (typeof argument === OBJECT_TYPE_LITERAL) {
            if (Array.isArray(argument)) {
                k = argument.length;
                while (k--) {
                    className += " " + OneSpaces(argument[k]);
                }
            }
            else {
                for (k in argument) {
                    if (argument[k]) {
                        className += " " + k;
                    }
                }
            }
        }
        else {
            className += " " + argument;
        }
    }
    return className;
}module.exports=OneSpaces;