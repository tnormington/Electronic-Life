import { directions, directionNames, plan } from './Constants';
import Vector from './components/Vector';
import Grid from './components/Grid';
import BouncingCritter from './components/BouncingCritter';
import Plant from './components/Plant';
import PlantEater from './components/PlantEater';
import Tiger from './components/Tiger';
import SmartPlantEater from './components/SmartPlantEater';
import Wall from './components/Wall';
import World from './components/World';
import LifelikeWorld from './components/LifelikeWorld';
import WallFollower from './components/WallFollower';

const world = new World(plan, {"#": Wall, "o": BouncingCritter, "~": WallFollower});
const valley = new LifelikeWorld(
    ["####################################################",
     "#                 ####         ****              ###",
     "#   *  @  ##                 ########       OO    ##",
     "#   *    ##        O O                 ****       *#",
     "#       ##*                        ##########     *#",
     "#      ##***  *         ****                     **#",
     "#* **  #  *  ***      #########                  **#",
     "#* **  #      *               #   *              **#",
     "#     ##              #   O   #  ***          ######",
     "#*            @       #       #   *        O  #    #",
     "#*                    #  ######                 ** #",
     "###          ****          ***                  ** #",
     "#       O                        @         O       #",
     "#   *     ##  ##  ##  ##               ###      *  #",
     "#   **         #              *       #####  O     #",
     "##  **  O   O  #  #    ***  ***        ###      ** #",
     "###               #   *****                    ****#",
     "####################################################"],
    {"#": Wall,
     "@": Tiger,
     "O": SmartPlantEater, // from previous exercise
     "*": Plant}
  );
const worldElement = document.querySelector('#world');

function updateWorldElement(w) {
    worldElement.innerHTML = w.toString();
}

document.addEventListener('DOMContentLoaded', () => {
    window.setInterval(() => {
        valley.turn();
        updateWorldElement(valley);
    }, 300);
});