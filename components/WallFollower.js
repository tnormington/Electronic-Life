import { dirPlus } from './_util';

export default class WallFollower {
    constructor() {
        this.dir = 's';
    }
    act(view) {
        let start = this.dir;
        if(view.look(dirPlus(this.dir, -3)) != ' ')
            start = this.dir = dirPlus(this.dir, -2);
        while(view.look(this.dir) != " ") {
            this.dir = dirPlus(this.dir, 1);
            if(this.dir == start) break;
        }
        return { type: "move", direction: this.dir };
    }
}