function OneSpaces() {
  var
    arg,
    className = '',
    index = arguments.length
  ;
  while (index--) {
    if (arg = arguments[index]) {
      className += (
        arg.pop ?
          OneSpaces.apply(0, arg) :
          arg + ' '
      );
    }
  }
  return className;
}

export default OneSpaces;
