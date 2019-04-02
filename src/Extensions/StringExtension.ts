import { String, StringBuilder } from 'typescript-string-operations';
import { StringComparison } from '../Shared/Enums/StringComparison';

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
        (populates.length === 1) ? (populateString = populates[0]) : (populateString = populates.join(' '));
        return populateString;
    }

    static ToSeoUrl(urlToEncode: string): string {
        if (String.IsNullOrWhiteSpace(urlToEncode)) { return ''; }
        try {
            urlToEncode = urlToEncode.trim().toLowerCase();
            urlToEncode = this.Unaccent(urlToEncode);
            const url = new StringBuilder();
            const urlToEncodeCharacters = urlToEncode.split('');
            urlToEncodeCharacters.forEach(element => {
                switch (element) {
                    case ' ':
                        url.Append('-');
                        break;
                    case '&':
                        url.Append('-');
                        break;
                    case ':':
                        url.Append('-');
                        break;
                    case '\'':
                        break;
                    default:
                        if ((element >= '0' && element <= '9') ||
                            (element >= 'a' && element <= 'z')) {
                            url.Append(element);
                        } else {
                            url.Append('-');
                        }
                        break;
                }
            });
            let ret = url.ToString();
            if (ret.length > 240) {
                ret = ret.substring(0, 240);
            }
            while (ret.indexOf('--', StringComparison.CurrentCulture) !== -1) {
                ret = ret.replace('--', '-');
            }
            if (ret.indexOf('-', 0) === StringComparison.CurrentCulture) {
                ret = ret.slice(0, 1);
            }
            if ((ret.lastIndexOf('-', StringComparison.CurrentCulture) === ret.length - 1) && (ret.length > 0)) {
                ret = ret.slice(ret.length - 1, 1);
            }
            return ret;
        } catch (error) {
            return urlToEncode;
        }
    }

}
