export default class StringExtension {

    static Unaccent(text: string): string {
        text = text.toLowerCase();
        text = text.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
        text = text.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
        text = text.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
        text = text.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
        text = text.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
        text = text.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
        text = text.replace(/đ/g, 'd');
        text = text.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, ' ');
        text = text.replace(/ + /g, ' ');
        text = text.trim();
        return text;
    }

    static PopulateString(populates: string[]): string {
        let populateString = '';
        (populates.length = 1) ? (populateString = populates[0]) : (populateString = populates.join(' '));
        return populateString;
    }

}
