import { directionNames } from '../Constants';

export function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export function charFromElement(element) {
    if (element == null)
      return " ";
    else
      return element.originChar;
}

export function elementFromChar(legend, ch) {
    if (ch == " ")
      return null;
    var element = new legend[ch]();
    element.originChar = ch;
    return element;
}

export function dirPlus(dir, n) {
  var index = directionNames.indexOf(dir);
  return directionNames[(index + n + 8) % 8];
}
