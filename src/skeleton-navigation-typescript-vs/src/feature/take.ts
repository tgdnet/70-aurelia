//info: konwencja nazewnicza [Name]ValueConverter
export class TakeValueConverter {
    //info: wartość widoczna na widoku
    toView(array, count, start = 0) {
        return array.slice(start, count);
    }
}