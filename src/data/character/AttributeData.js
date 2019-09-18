export class AttributeData {
    strength: number;
    endurance: number;
    agility: number;
    charisma: number;
    fortitude: number;
    reflexes: number;
    health: number;

    intellect: number;
    memory: number;
    creativity: number;
    perception: number;
    coordination: number;
    sociability: number;
    resolve: number;

    constructor() {
        this.load = this.load.bind(this);
        this.save = this.save.bind(this);
    }

    load(json: Object) {

    }

    save(): Object {
        let save = {};


        return save;
    }
}