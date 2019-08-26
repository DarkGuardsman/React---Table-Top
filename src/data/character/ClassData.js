export class ClassData {

    //name of the class
    className: string;

    //Purely used for Ajax calls
    classID: number;

    constructor() {
        this.load = this.load.bind(this);
        this.save = this.save.bind(this);
    }

    load(json) {
        this.className = json.className;
        this.classID = json.classID;
    }

    save(): Object {
        return {
            className: this.className,
            classId: this.classID
        }
    }
}