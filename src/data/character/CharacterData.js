import {ClassData} from "./ClassData";
import {AttributeData} from "./AttributeData";

export class CharacterData {

    //Name of the character
    characterName : string;

    //Unique id of the character
    characterID : number;

    //Is local only
    local : boolean = true;
y
    //Class of the character
    classData : ClassData;

    //Attributes of the character
    attributes : AttributeData;

    constructor() {
        this.load = this.load.bind(this);
        this.save = this.save.bind(this);
    }

    load(json : Object) {
        this.characterName = json.characterName;
        this.classData = new ClassData().load(json.class);
    }

    save() : Object {
        let save = {};
        save.characterName = this.characterName;
        save.classData = this.classData.save();
        save.attributes = this.attributes.save();

        return save;
    }
}