function OneSpaces() {
  var
    index = arguments.length,
    argument,
    className = ''
  ;
  while (index--) {
    if (argument = arguments[index]) {
      if (typeof argument == 'string') {
        className && (className += ' ');
        className += argument;
      } else if (Array.isArray(argument)) {
        className += OneSpaces.apply(null, argument);
      }
    }
  }
  return className;
}

export default OneSpaces
