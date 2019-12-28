/**
 * @author TroyTae
 * @version 1.2.3
 * @name one-spaces
 */
function OneSpaces() {
  var
    arg,
    index = 0,
    className = ''
  ;
  for (; index < arguments.length;) {
    if (arg = arguments[index++]) {
      if (className) {
        className += ' ';
      }
      className += (
        arg.pop
          ? OneSpaces.apply(0, arg)
          : arg
      );
    }
  }
  return className;
}

export default OneSpaces;
