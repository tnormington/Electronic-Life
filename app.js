import { directions, directionNames, plan } from './Constants';
import Vector from './components/Vector';
import Grid from './components/Grid';
import BouncingCritter from './components/BouncingCritter';
import Wall from './components/Wall';
import World from './components/World';

const world = new World(plan, {"#": Wall, "o": BouncingCritter});
const worldElement = document.querySelector('#world');

function updateWorldElement() {
    worldElement.innerHTML = world.toString();
}

document.addEventListener('DOMContentLoaded', () => {
    window.setInterval(() => {
        world.turn();
        updateWorldElement();
    }, 100);
});