import { CSS2DObject, CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js';

export class CssRenderer extends CSS2DRenderer {

    constructor(){
        super() as unknown as CSS2DRenderer;
        this.setSize(window.innerWidth, window.innerHeight);
        this.domElement.style.position = 'absolute';
        this.domElement.style.top = '0px';
        this.domElement.style.left = '0px';
        this.domElement.style.pointerEvents = 'none';
        document.body.appendChild(this.domElement);
    }


    addLabel(label: string){
        const element = this.setElement(label)
        const textLabel = new CSS2DObject(element);
        textLabel.position.set(1, 0, 0);
        return textLabel;
    }

    private setElement(textContent: string){
        const textDiv = document.createElement('div');
        textDiv.style.fontSize ="16px";
        textDiv.style.color ="blue";
        textDiv.style.fontWeight ="bold"
        textDiv.textContent = textContent;
        return textDiv;
    }
}