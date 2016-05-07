import {computedFrom, autoinject, ObserverLocator} from 'aurelia-framework';
import {Validation, ValidationGroup} from 'aurelia-validation';

@autoinject
export class Welcome {
    heading = 'Welcome to the Aurelia Navigation App!';
    firstName = 'John';
    lastName = 'Doe';
    previousValue = this.fullName;
    private param = "";

    private validation: any;

    constructor(private obs: ObserverLocator, private doValid: Validation) {
        //info: zastosowanie observera na obiekcie
        this.obs.getObserver(this, 'firstName')
            .subscribe(this.onChange);

        //info: przyk?ad dodania prostej walidacji
        this.validation = this.doValid.on(this)
            .ensure('lastName')
            .passes((newValue) => {
                return newValue !== "abc"; //info: dzia?a dla ka?dego innego ni? abc
            })
            .withMessage("Must be different than abc");
    }

    activate(route, routeConfig) {
        this.param = route.id || null;
        routeConfig.navModel.setTitle(this.param);
    }

    //info: akcja wywo?ana podczas zmiany 
    private onChange(nv: any, ov: any) {
        console.log(nv);
    }

    //info: jawny getter z?o?ony z 2 w?a?ciwo?ci
    //info: w razie zakomentowania poni?szej linii aurelia b?dzie sprawdza?
    //info: czy warto?? si? zmieni?a, co 120ms
    @computedFrom('firstName', 'lastName')
    get fullName() {
        console.log(new Date());
        return `${this.firstName} ${this.lastName}`;
    }

    submit() {
        console.log(arguments);
        this.previousValue = this.fullName;
        let x = 1;
        //info: przedstawienie mo?liwo?ci ??czenia string'ów
        alert(`Welcome, ${this.fullName} + ${x + 1}!`);
    }

    //info: wywo?ywane przed wyj?ciem z widoku (mo?liwo?? zablokowania routingu)
    canDeactivate() {
        if (this.fullName !== this.previousValue) {
            return confirm('Are you sure you want to leave?');
        }
    }
}

export class UpperValueConverter {
    toView(value) {
        return value && value.toUpperCase();
    }
}
