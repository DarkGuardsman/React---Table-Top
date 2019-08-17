import {isDefined} from "../common/helpers";

export class IconData {
    constructor(isShownFunc, name, iconRender) {
        this.isShownFunc = isShownFunc;
        this.iconRender = iconRender;
        this.name = name;
        this.id = name.toLowerCase().replace(/\s+/g, "_");

        this.shouldRenderIcon = this.shouldRenderIcon.bind(this);
        this.setClickCallBack = this.setClickCallBack.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.isDocked = this.isDocked.bind(this);
        this.show = this.show.bind(this);
    }

    //Sets the click callback
    setClickCallBack(func) {
        this.clickFunc = func;
        return this;
    }

    //Handles click
    handleClick(event) {
        if (isDefined(this.clickFunc)) {
            this.clickFunc(this);
        }
    }

    //Checks if the component is docked
    isDocked() {
        return !this.isShownFunc()
    }

    //Checks if the icon should show
    shouldRenderIcon() {
        return this.isDocked()
    }

    //Handles showing or hidding the component
    show(shownComponent, hiddenComponent) {
        if (this.isDocked()) {
            return hiddenComponent();
        }
        return shownComponent();
    }
}