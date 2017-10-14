import { directionNames } from '../Constants';
import { randomElement } from './_util'

// function randomElement(array) {
//   return array[Math.floor(Math.random() * array.length)];
// }


export default class BouncingCritter {
  constructor() {
    this.direction = randomElement(directionNames);
  }

  act(view)  {
    if(view.look(this.direction) != " ") {
      this.direction = view.find(" ") || "s";
    }
    return {
      type: "move",
      direction: this.direction
    };
  }
}