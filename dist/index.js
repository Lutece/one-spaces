/**
 * @author TroyTae
 * @version 0.6.2
 * @name one-spaces
 */
'use strict';var OBJECT_TYPE_LITERAL = 'object';
function index () {
    var k;
    var argument;
    var className = '';
    var i = arguments.length;
    while (i--) {
        argument = arguments[i];
        if (typeof argument === OBJECT_TYPE_LITERAL) {
            for (k in argument) {
                if (argument[k]) {
                    className += (' ' + k);
                }
            }
        }
        else {
            className += (' ' + argument);
        }
    }
    return className;
}module.exports=index;