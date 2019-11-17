function OneSpaces() {
  this.className = '';
}

OneSpaces.prototype.addClassName = function(className) {
  if (this.className) {
    this.className += ' ';
  }
  this.className += className;
};

OneSpaces.prototype.setClassNameByArgument = function(argument) {
  if (argument) {
    if (typeof argument === 'string') {
      this.addClassName(argument);
    } else if (typeof argument === 'object') {
      this.setClassNameByObject(argument);
    }
  }
};

OneSpaces.prototype.setClassNameByObject = function(argument) {
  var key;
  if (Array.isArray(argument)) {
    key = argument.length;
    while (key--) {
      this.setClassNameByArgument(argument[key]);
    }
  } else {
    for (key in argument) {
      if (argument[key]) {
        this.addClassName(key);
      }
    }
  }
};

export default function () {
  var
    i = arguments.length,
    instance = new OneSpaces()
  ;
  while (i--) {
    instance.setClassNameByArgument(arguments[i]);
  }
  return instance.className;
}
