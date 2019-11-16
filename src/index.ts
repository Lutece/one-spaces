export default function() {
  var className = '';
  var i = arguments.length;
  while (i--) {
    className += (' ' + arguments[i]);
  }
  return className;
}
