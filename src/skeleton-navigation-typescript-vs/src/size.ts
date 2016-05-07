import {bindable, autoinject, customAttribute} from 'aurelia-framework';

//info: nadanie własnej nazwy elementowi
@customAttribute('sizeelement')
//info: automatyczne dependency injection
@autoinject
export class WidthCustomAttribute {
    @bindable width: number = 50;
    @bindable height: number = 50;

    constructor(private element: Element) {
        (<HTMLElement>this.element).style.width = `${this.width}px`;
        (<HTMLElement>this.element).style.height = `${this.height}px`;
    }

    //info: wywoływane w momencie stworzenia dowiązań do widoku
    bind() {

    }

    //info: event wywołany w momencie zmiany właściwości height
    heightChanged(newValue: string, oldValue: string) {
        console.log('height');
        (<HTMLElement>this.element).style.height = `${newValue}px`;
    }

    //info: event wywołany w momencie zmiany właściwości width
    widthChanged(newValue: string, oldValue: string) {
        (<HTMLElement>this.element).style.width = `${newValue}px`;
    }

    //info: przechwytywanie wszystkich zmian w bindingach
    propertyChanged(name: string, newValue: string, oldValue: string) {
        switch (name) {
            case 'height':
                console.log('height2');
                (<HTMLElement>this.element).style.height = `${newValue}px`;
                break;
            case 'width':
                (<HTMLElement>this.element).style.width = `${newValue}px`;
                break;
            default:
                console.log('test');
                (<HTMLElement>this.element).style[name] = newValue;
                break;
        }
    }
}