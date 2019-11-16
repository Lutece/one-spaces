export default function() {
  let className = '';
  let i = arguments.length;
  while (i--) {
    className += (' ' + arguments[i]);
  }
  return className;
}
