//info: konwencja nazewnicza [Name]ValueConverter
export class SkipValueConverter {
    //info: wartość widoczna na widoku
    toView(array, count) {
        return array.slice(count);
    }
}