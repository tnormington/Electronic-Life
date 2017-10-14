export default class Tiger {
    constructor() {
        this.energy = 50;
    }

    act(view) {
        const space = view.find(" ");
        if(this.energy > 150 && space)
            return { type: "reproduce", direction: space };
        const prey = view.find("O");
        if(prey)
            return { type: "eat", direction: prey };
        const plant = view.find("*");
        if(plant)
            return { type: "eat", direction: plant };
        if(space)
            return { type: "move", direction: space };
    }
}