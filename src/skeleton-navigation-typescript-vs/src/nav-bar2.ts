import {bindable} from 'aurelia-framework';
import {Router} from 'aurelia-router';

export class NavBar2 {
    //info: definicja zmiennej możliwej do zbindowania
    @bindable router: Router = null;
}