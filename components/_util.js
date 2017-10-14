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
