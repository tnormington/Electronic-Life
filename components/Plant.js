export default class Plant {
    constructor() {
        this.energy = 3 + Math.random() * 4;
    }

    act(view) {
        if(this.energy > 15) {
            const space = view.find(" ");
            if(space) 
                return { type: "reproduce", direction: space };
        }
        if(this.energy < 20) 
            return { type: "grow" };
    }
}