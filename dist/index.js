/**
 * @author TroyTae
 * @version 0.6.1
 * @name one-spaces
 */
'use strict';function index () {
    var k;
    var argument;
    var className = '';
    var i = arguments.length;
    while (i--) {
        argument = arguments[i];
        if (typeof argument === 'object') {
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