import {FrameworkConfiguration} from 'aurelia-framework'

//info: przykładowy feature zawierający SkipValueConverter i TakeValueConverter
export function configure(config: FrameworkConfiguration) {
    config.globalResources(['./skip', './take']);
}