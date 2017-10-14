import Grid from './Grid';
import Vector from './Vector';
import View from './View';
import { directions } from '../Constants';
import { elementFromChar, charFromElement } from './_util';

export default class World {
    constructor(map, legend) {
        this.grid = new Grid(map[0].length, map.length);
        this.legend = legend;
        map.forEach((line, y) => {
            for(let x = 0; x < line.length; x++) {
                this.grid.set(new Vector(x, y), elementFromChar(legend, line[x]));
            }
        })
    }

    toString() {
        let output = "";
        for(let y = 0; y < this.grid.height; y++) {
            for(let x = 0; x < this.grid.width; x++) {
                const element = this.grid.get(new Vector(x, y));
                output += charFromElement(element);
            }
            output += "\n";
        }
        return output;
    }

    turn() {
        const acted = [];
        this.grid.forEach((critter, vector) => {
            if(!critter) return;
            if(critter.act && !acted.includes(critter)) {
                acted.push(critter);
                this.letAct(critter, vector);
            }
        })
    }

    letAct(critter, vector) {
        const action = critter.act(new View(this, vector));
        if(action && action.type == "move") {
            const dest = this.checkDestination(action, vector);
            if(dest && this.grid.get(dest) == null) {
                this.grid.set(vector, null);
                this.grid.set(dest, critter);
            }
        }
    }

    checkDestination(action, vector) {
        if(directions.hasOwnProperty(action.direction)) {
            const dest = vector.plus(directions[action.direction]);
            if(this.grid.isInside(dest)) {
                return dest;
            }
        }
    }

}
